import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import matter from 'gray-matter';

/**
 * 这些用例锁住的是一次真实事故的修复：importer 的章节白名单里没有模板自己的
 * 「## 观察」，连续 16 天把原始报告里的趋势判断替换成没有信息量的机械句子，
 * 而发布管道毫无声息。概览、总 Star 同理。丢内容不报错，所以必须有测试盯着。
 */

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const importerPath = path.join(projectRoot, 'scripts', 'import-github-trending.mjs');

const OVERVIEW_TEXT = '存量 7 席全部正增长，这条判断必须原样出现在发布页上。';
const OBSERVATION_TEXT = '**1. 停更项目需标注。** andrej-karpathy-skills 最后推送 2026-04-20。';

function report({ observationHeading = '观察' } = {}) {
  return `# GitHub 每日趋势榜 2026-10-26

## 今日概览

${OVERVIEW_TEXT}

## 重点项目

### 1. Nutlope/hallmark

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Nutlope/hallmark |
| 简介 | Anti-AI-slop design skill. |
| 语言 | CSS |
| 总 Star | 35,977 |
| 今日新增 | 2,235 stars today |
| 标签 | 设计技能、前端 |

这是足够长的一条简评，用来满足内容质量门禁的字数下限要求。

## ${observationHeading}

${OBSERVATION_TEXT}
`;
}

async function createFixture(t, { observationHeading } = {}) {
  const root = await mkdtemp(path.join(tmpdir(), 'github-trending-import-'));
  t.after(() => rm(root, { recursive: true, force: true }));

  const sourceRoot = path.join(root, 'raw', 'github');
  const targetRoot = path.join(root, 'target');
  await mkdir(sourceRoot, { recursive: true });
  await mkdir(targetRoot, { recursive: true });
  await writeFile(
    path.join(sourceRoot, 'github-daily-trending-2026-10-26.md'),
    report({ observationHeading }),
    'utf8',
  );
  return { sourceRoot, targetRoot };
}

function runImporter(sourceRoot, targetRoot, ...extraArguments) {
  return spawnSync(
    process.execPath,
    [importerPath, sourceRoot, targetRoot, ...extraArguments],
    { cwd: projectRoot, encoding: 'utf8' },
  );
}

async function readBundle(targetRoot) {
  const bundlePath = path.join(
    targetRoot,
    'content',
    'rankings',
    'github',
    'daily',
    'github-daily-2026-10-26',
  );
  const markdown = await readFile(path.join(bundlePath, 'index.md'), 'utf8');
  return {
    markdown,
    content: matter(markdown).content,
    ranking: JSON.parse(await readFile(path.join(bundlePath, 'ranking.json'), 'utf8')),
  };
}

test('搬运 raw 的概览与观察原文，而不是机械重写', async (t) => {
  const { sourceRoot, targetRoot } = await createFixture(t);

  const result = runImporter(sourceRoot, targetRoot);

  assert.equal(result.status, 0, result.stderr);
  const { content } = await readBundle(targetRoot);
  assert.match(content, new RegExp(OVERVIEW_TEXT), '概览应搬运 raw 原文');
  assert.match(content, new RegExp(OBSERVATION_TEXT.replace(/\*\*/g, '\\*\\*')), '观察应搬运 raw 原文');
  assert.doesNotMatch(content, /居当日增量第/, '不应退回机械 Top3 增量句子');
});

test('契约里的其它观察章节名同样命中', async (t) => {
  const { sourceRoot, targetRoot } = await createFixture(t, {
    observationHeading: '今日趋势观察',
  });

  const result = runImporter(sourceRoot, targetRoot);

  assert.equal(result.status, 0, result.stderr);
  const { content } = await readBundle(targetRoot);
  assert.match(content, new RegExp(OBSERVATION_TEXT.replace(/\*\*/g, '\\*\\*')));
});

test('观察章节缺失时才退回机械 Top3 增量', async (t) => {
  const root = await mkdtemp(path.join(tmpdir(), 'github-trending-fallback-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const sourceRoot = path.join(root, 'raw');
  const targetRoot = path.join(root, 'target');
  await mkdir(sourceRoot, { recursive: true });
  await mkdir(targetRoot, { recursive: true });
  await writeFile(
    path.join(sourceRoot, 'github-daily-trending-2026-10-26.md'),
    '# GitHub 每日趋势榜 2026-10-26\n\n## 重点项目\n\n### 1. Nutlope/hallmark\n\n| 字段 | 内容 |\n|------|------|\n| 今日新增 | 2,235 stars today |\n\n简评简评简评简评简评简评简评简评简评简评简评简评简评简评。\n',
    'utf8',
  );

  const result = runImporter(sourceRoot, targetRoot);

  assert.equal(result.status, 0, result.stderr);
  const { content } = await readBundle(targetRoot);
  assert.match(content, /Nutlope\/hallmark 今日 2,235 stars today，居当日增量第 1 位/);
});

test('条目渲染包含总 Star 与全部标签', async (t) => {
  const { sourceRoot, targetRoot } = await createFixture(t);

  const result = runImporter(sourceRoot, targetRoot);

  assert.equal(result.status, 0, result.stderr);
  const { content, ranking } = await readBundle(targetRoot);
  assert.match(content, /\|\s*总 Star\s*\|\s*35,977\s*\|/, '发布页必须能看到总 Star');
  assert.match(content, /设计技能、前端/);
  assert.equal(ranking.items[0].stars, 35977);
});
