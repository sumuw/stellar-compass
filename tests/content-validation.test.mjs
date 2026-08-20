import assert from 'node:assert/strict';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';

import {
  discoverBundles,
  readBundle,
  validateBundle,
} from '../scripts/lib/ranking-content.mjs';

const validRanking = {
  category: 'github',
  period: 'daily',
  date: '2026-08-20',
  source: 'test',
  sourceUrl: 'https://github.com/trending',
  items: [
    {
      rank: 1,
      name: 'openai/codex',
      url: 'https://github.com/openai/codex',
      description: 'A coding agent.',
    },
    {
      rank: 2,
      name: 'nodejs/node',
      url: 'https://github.com/nodejs/node',
      description: 'The Node.js runtime.',
    },
  ],
};

function markdown(rankingKey = '2026-08-20') {
  return `---
title: "GitHub daily ranking"
description: "A test ranking bundle."
date: "2026-08-20T08:00:00+08:00"
rankingKey: "${rankingKey}"
categories: ["github"]
periods: ["daily"]
tags: ["GitHub", "open source"]
draft: false
---

Bundle analysis.
`;
}

async function createFixture(t, options = {}) {
  const root = await mkdtemp(path.join(tmpdir(), 'ranking-content-'));
  t.after(() => rm(root, { recursive: true, force: true }));

  const rankingsRoot = path.join(root, 'content', 'rankings');
  const bundlePath = path.join(
    rankingsRoot,
    'github',
    'daily',
    'github-daily-2026-08-20',
  );

  await mkdir(bundlePath, { recursive: true });
  await writeFile(
    path.join(bundlePath, 'index.md'),
    markdown(options.rankingKey),
    'utf8',
  );

  if (!options.omitRanking) {
    const ranking = options.ranking ?? validRanking;
    await writeFile(
      path.join(bundlePath, 'ranking.json'),
      `${JSON.stringify(ranking, null, 2)}\n`,
      'utf8',
    );
  }

  return { bundlePath, rankingsRoot };
}

test('discovers and validates a legal ranking bundle', async (t) => {
  const { bundlePath, rankingsRoot } = await createFixture(t);

  assert.deepEqual(await discoverBundles(rankingsRoot), [bundlePath]);

  const bundle = await readBundle(bundlePath);
  assert.deepEqual(validateBundle(bundle), []);
});

test('reports a missing ranking.json file', async (t) => {
  const { bundlePath } = await createFixture(t, { omitRanking: true });

  const errors = validateBundle(await readBundle(bundlePath));

  assert.ok(errors.some((error) => /ranking\.json.*missing/i.test(error)));
});

test('reports a Markdown and JSON date mismatch', async (t) => {
  const { bundlePath } = await createFixture(t, {
    ranking: { ...validRanking, date: '2026-08-19' },
  });

  const errors = validateBundle(await readBundle(bundlePath));

  assert.ok(errors.some((error) => /date.*rankingKey/i.test(error)));
});

test('reports non-contiguous item ranks', async (t) => {
  const { bundlePath } = await createFixture(t, {
    ranking: {
      ...validRanking,
      items: [validRanking.items[0], { ...validRanking.items[1], rank: 3 }],
    },
  });

  const errors = validateBundle(await readBundle(bundlePath));

  assert.ok(errors.some((error) => /items\[1\]\.rank.*2/i.test(error)));
});

test('reports item URLs that do not use HTTPS', async (t) => {
  const { bundlePath } = await createFixture(t, {
    ranking: {
      ...validRanking,
      items: [
        { ...validRanking.items[0], url: 'http://github.com/openai/codex' },
      ],
    },
  });

  const errors = validateBundle(await readBundle(bundlePath));

  assert.ok(errors.some((error) => /items\[0\]\.url.*HTTPS/i.test(error)));
});
