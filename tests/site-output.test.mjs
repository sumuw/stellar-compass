import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(projectRoot, 'public');

function publicPath(...segments) {
  return join(publicDir, ...segments);
}

function classTokenIndex(html, className) {
  // Matches class attribute in both quoted ("...") and unquoted (minified) HTML.
  const match = new RegExp(
    `class=(?:"[^"]*\\b${className}\\b[^"]*"|'[^']*\\b${className}\\b[^']*'|[^"'>\\s]*\\b${className}\\b[^"'>\\s]*)`,
    'i',
  ).exec(html);

  return match?.index ?? -1;
}

function collectDates(html) {
  // Ranking keys rendered as either YYYY-MM-DD (daily) or YYYY-Www (weekly).
  const matches = html.matchAll(/\b\d{4}-(?:W\d{2}|\d{2}-\d{2})\b/g);

  return [...new Set([...matches].map(([value]) => value))];
}

function assertTextOrder(html, values) {
  let previousIndex = -1;

  for (const value of values) {
    const index = html.indexOf(value, previousIndex + 1);
    assert.notEqual(index, -1, `expected to find ${value}`);
    assert.ok(index > previousIndex, `expected ${value} to appear in order`);
    previousIndex = index;
  }
}

function attribute(tag, name) {
  // Extracts attribute value from both quoted and unquoted (minified) HTML tags.
  const match = new RegExp(
    `\\b${name}=(?:"([^"]*)"|'([^']*)'|([^"'>\\s]+))`,
    'i',
  ).exec(tag);

  return match?.[1] ?? match?.[2] ?? match?.[3];
}

test('homepage renders the category strip before the ranking list', async () => {
  const home = await readFile(publicPath('index.html'), 'utf8');
  const categoryStripIndex = classTokenIndex(home, 'category-strip');
  const rankingListIndex = classTokenIndex(home, 'ranking-list');

  assert.notEqual(categoryStripIndex, -1, 'expected homepage category-strip');
  assert.notEqual(rankingListIndex, -1, 'expected homepage ranking-list');
  assert.ok(
    categoryStripIndex < rankingListIndex,
    'expected category-strip before ranking-list',
  );
});

test('homepage rankings are ordered and link to the full archive', async () => {
  const home = await readFile(publicPath('index.html'), 'utf8');
  const rankingListIndex = classTokenIndex(home, 'ranking-list');

  assert.notEqual(rankingListIndex, -1, 'expected homepage ranking-list');

  // The homepage shows only the newest rankings, so the expected order is
  // derived from the archive instead of hard-coded dates.
  const archive = await readFile(publicPath('rankings', 'index.html'), 'utf8');
  const homeDates = collectDates(home.slice(rankingListIndex));
  const expectedDates = collectDates(archive).filter((date) =>
    homeDates.includes(date),
  );

  assert.ok(expectedDates.length > 0, 'expected ranking dates on homepage');
  assertTextOrder(home.slice(rankingListIndex), expectedDates);

  const moreLink = [...home.matchAll(/<a\b[^>]*>[\s\S]*?<\/a>/gi)].find(
    ([link]) => link.includes('更多'),
  )?.[0];

  assert.ok(moreLink, 'expected a 更多 link');
  assert.match(
    attribute(moreLink, 'href') ?? '',
    /\/stellar-compass\/rankings\//,
  );
});

test('build creates ranking archive, category, and detail pages', async () => {
  await Promise.all([
    access(publicPath('rankings', 'index.html')),
    access(publicPath('categories', 'github', 'index.html')),
    access(
      publicPath(
        'rankings',
        'github-daily-2026-08-20',
        'index.html',
      ),
    ),
  ]);
});

test('ranking detail includes the table heading and first project', async () => {
  const detail = await readFile(
    publicPath('rankings', 'github-daily-2026-08-20', 'index.html'),
    'utf8',
  );

  assert.match(detail, /榜单明细/);
  assert.match(detail, /#1/);
  assert.match(detail, /https:\/\/github\.com\/harry0703\/MoneyPrinterTurbo/);
});

test('homepage stylesheet and image URLs preserve the project base path', async () => {
  const home = await readFile(publicPath('index.html'), 'utf8');
  const stylesheetUrls = [...home.matchAll(/<link\b[^>]*>/gi)]
    .map(([tag]) => ({ href: attribute(tag, 'href'), rel: attribute(tag, 'rel') }))
    .filter(({ rel }) => rel?.split(/\s+/).includes('stylesheet'))
    .map(({ href }) => href);
  const imageUrls = [...home.matchAll(/<img\b[^>]*>/gi)].map(([tag]) =>
    attribute(tag, 'src'),
  );

  assert.ok(stylesheetUrls.length > 0, 'expected at least one stylesheet URL');
  assert.ok(imageUrls.length > 0, 'expected at least one image URL');

  for (const url of [...stylesheetUrls, ...imageUrls]) {
    assert.ok(url, 'expected asset URL');
    assert.ok(
      url.includes('/stellar-compass/'),
      `expected ${url} to include /stellar-compass/`,
    );
  }
});
