import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import matter from 'gray-matter';

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const importerPath = path.join(
  projectRoot,
  'scripts',
  'import-reference-rankings.mjs',
);

async function createFixture(t) {
  const root = await mkdtemp(path.join(tmpdir(), 'ranking-import-'));
  t.after(() => rm(root, { recursive: true, force: true }));

  const sourceRoot = path.join(root, 'source');
  const targetRoot = path.join(root, 'target');
  const markdownRoot = path.join(sourceRoot, 'src', 'content', 'rankings');
  await mkdir(markdownRoot, { recursive: true });
  await mkdir(targetRoot, { recursive: true });

  await createSourceRanking(sourceRoot, {
    slug: 'github-daily-2026-08-20',
    period: 'daily',
    rankingKey: '2026-08-20',
    body: '\n## Daily analysis\n\nKeep this body unchanged.\n',
  });
  await createSourceRanking(sourceRoot, {
    slug: 'github-weekly-2026-W34',
    period: 'weekly',
    rankingKey: '2026-W34',
    body: '\n## Weekly analysis\n\nKeep this weekly body unchanged.\n',
  });

  return { sourceRoot, targetRoot };
}

async function createSourceRanking(
  sourceRoot,
  { slug, period, rankingKey, body },
) {
  const dataFile = `data/rankings/github/${period}/${rankingKey}.json`;
  const markdown = `---
title: "GitHub ${period} ranking ${rankingKey}"
description: "Reference ranking content."
category: "github"
period: "${period}"
date: "${rankingKey}"
dataFile: "${dataFile}"
tags: ["GitHub", "open source"]
---
${body}`;
  const ranking = {
    category: 'github',
    period,
    date: rankingKey,
    source: 'fixture',
    items: [
      {
        rank: 1,
        name: 'openai/codex',
        url: 'https://github.com/openai/codex',
        description: 'A coding agent.',
      },
    ],
  };

  await writeFile(
    path.join(sourceRoot, 'src', 'content', 'rankings', `${slug}.md`),
    markdown,
    'utf8',
  );
  const jsonPath = path.join(sourceRoot, ...dataFile.split('/'));
  await mkdir(path.dirname(jsonPath), { recursive: true });
  await writeFile(jsonPath, `${JSON.stringify(ranking, null, 2)}\n`, 'utf8');
}

function runImporter(sourceRoot, targetRoot, ...extraArguments) {
  return spawnSync(
    process.execPath,
    [importerPath, sourceRoot, targetRoot, ...extraArguments],
    { cwd: projectRoot, encoding: 'utf8' },
  );
}

test('imports reference rankings as Hugo leaf bundles', async (t) => {
  const { sourceRoot, targetRoot } = await createFixture(t);

  const result = runImporter(sourceRoot, targetRoot);

  assert.equal(result.status, 0, result.stderr);
  const dailyPath = path.join(
    targetRoot,
    'content',
    'rankings',
    'github',
    'daily',
    'github-daily-2026-08-20',
  );
  const weeklyPath = path.join(
    targetRoot,
    'content',
    'rankings',
    'github',
    'weekly',
    'github-weekly-2026-W34',
  );
  const daily = matter(await readFile(path.join(dailyPath, 'index.md'), 'utf8'));
  const weekly = matter(
    await readFile(path.join(weeklyPath, 'index.md'), 'utf8'),
  );

  assert.equal(daily.data.dataFile, undefined);
  assert.deepEqual(daily.data.categories, ['github']);
  assert.deepEqual(daily.data.periods, ['daily']);
  assert.equal(daily.data.rankingKey, '2026-08-20');
  assert.equal(daily.data.date, '2026-08-20T08:00:00+08:00');
  assert.equal(daily.content, '\n## Daily analysis\n\nKeep this body unchanged.\n');

  assert.deepEqual(weekly.data.categories, ['github']);
  assert.deepEqual(weekly.data.periods, ['weekly']);
  assert.equal(weekly.data.rankingKey, '2026-W34');
  assert.equal(weekly.data.date, '2026-08-17T08:00:00+08:00');
  assert.equal(
    weekly.content,
    '\n## Weekly analysis\n\nKeep this weekly body unchanged.\n',
  );

  const copiedRanking = JSON.parse(
    await readFile(path.join(weeklyPath, 'ranking.json'), 'utf8'),
  );
  assert.equal(copiedRanking.date, '2026-W34');
});

test('protects conflicts unless --overwrite is provided', async (t) => {
  const { sourceRoot, targetRoot } = await createFixture(t);
  const firstImport = runImporter(sourceRoot, targetRoot);
  assert.equal(firstImport.status, 0, firstImport.stderr);

  const targetMarkdown = path.join(
    targetRoot,
    'content',
    'rankings',
    'github',
    'daily',
    'github-daily-2026-08-20',
    'index.md',
  );
  const importedContent = await readFile(targetMarkdown, 'utf8');
  await writeFile(targetMarkdown, 'conflicting local content\n', 'utf8');

  const protectedImport = runImporter(sourceRoot, targetRoot);

  assert.notEqual(protectedImport.status, 0);
  assert.match(protectedImport.stderr, /conflict.*--overwrite/is);
  assert.equal(
    await readFile(targetMarkdown, 'utf8'),
    'conflicting local content\n',
  );

  const overwrittenImport = runImporter(
    sourceRoot,
    targetRoot,
    '--overwrite',
  );

  assert.equal(overwrittenImport.status, 0, overwrittenImport.stderr);
  assert.equal(await readFile(targetMarkdown, 'utf8'), importedContent);
});
