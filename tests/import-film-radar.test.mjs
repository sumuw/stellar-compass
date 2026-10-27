import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import matter from 'gray-matter';

/**
 * 锁住一次已经上线过的错误：零新增日合成的占位条目被当成真实推荐计数，
 * 页面上写着「共 1 部正式推荐，榜首《本期无新增正式推荐》（—）」，
 * 而这句话会进入 HTML meta 与列表页。
 */

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const importerPath = path.join(projectRoot, 'scripts', 'import-film-radar.mjs');

const REPORT = `# 每日全球高分影视雷达 2026-10-26

> **一句话总结**：今日 **0 部**正式推荐，候选全部拦截。

## 🏆 今日新推荐

**今天没有发现达到正式推荐标准的新作品。**

## 📈 历史作品动态

### 🔴 F079《流人 第六季》/ Slow Horses S6 —— **本库推荐记录中最大幅度的一次下跌**

## 👀 高分观察池

### 1. 《可能的爱》/ 가능한 사랑 —— **三口径顶级，只差 11 天**

## 今日检索通道与结果

### 本期拦截明细（38 部候选，全部拦截）
`;

async function createFixture(t) {
  const root = await mkdtemp(path.join(tmpdir(), 'film-radar-import-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const sourceRoot = path.join(root, 'raw');
  const targetRoot = path.join(root, 'target');
  await mkdir(sourceRoot, { recursive: true });
  await mkdir(targetRoot, { recursive: true });
  await writeFile(
    path.join(sourceRoot, 'daily-film-radar-2026-10-26.md'),
    REPORT,
    'utf8',
  );
  return { sourceRoot, targetRoot };
}

async function readBundle(targetRoot) {
  const bundlePath = path.join(
    targetRoot,
    'content',
    'rankings',
    'film-radar',
    'daily',
    'film-radar-daily-2026-10-26',
  );
  const markdown = await readFile(path.join(bundlePath, 'index.md'), 'utf8');
  return {
    frontMatter: matter(markdown).data,
    content: matter(markdown).content,
    ranking: JSON.parse(await readFile(path.join(bundlePath, 'ranking.json'), 'utf8')),
  };
}

test('零新增日的 description 不会把占位条目当成一部正式推荐', async (t) => {
  const { sourceRoot, targetRoot } = await createFixture(t);

  const result = spawnSync(
    process.execPath,
    [importerPath, sourceRoot, targetRoot],
    { cwd: projectRoot, encoding: 'utf8' },
  );
  assert.equal(result.status, 0, result.stderr);

  const { frontMatter } = await readBundle(targetRoot);
  assert.match(frontMatter.description, /今日无新增正式推荐/);
  assert.doesNotMatch(frontMatter.description, /共 \d+ 部正式推荐/);
  assert.doesNotMatch(frontMatter.description, /本期无新增正式推荐/);
});

test('零新增日正文按 风险 > 观察池 > 拦截 排序', async (t) => {
  const { sourceRoot, targetRoot } = await createFixture(t);

  const result = spawnSync(
    process.execPath,
    [importerPath, sourceRoot, targetRoot],
    { cwd: projectRoot, encoding: 'utf8' },
  );
  assert.equal(result.status, 0, result.stderr);

  const { content } = await readBundle(targetRoot);
  const risk = content.indexOf('历史作品动态');
  const pool = content.indexOf('高分观察池');
  const interception = content.indexOf('今日检索通道与结果');
  assert.ok(risk > -1 && pool > -1 && interception > -1, '三个章节都应存在');
  assert.ok(risk < pool, '风险章节应排在观察池之前');
  assert.ok(pool < interception, '观察池应排在拦截明细之前');
});
