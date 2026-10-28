/**
 * 影视雷达状态库（status-tracker.json）的断更回归测试。
 *
 * 2026-10-12 起该文件停止更新达 16 天：它依赖每日 Agent 手工维护，而一旦滞后
 * Agent 就改用「归档报告全量复核」去重、不再回写，形成滞后 → 弃用 → 更滞后的
 * 死循环，去重因此失去唯一事实源。现改为由 scripts/sync-film-tracker.mjs
 * 从归档报告派生。这组测试守住"不再静默断更"这条底线。
 */

import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { promisify } from 'node:util';

const exec = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const RAW_DIR = path.join(ROOT, 'raw', 'film-radar');
const TRACKER = path.join(ROOT, 'skills', 'film-radar', 'status-tracker.json');

async function latestReportDate() {
  const files = await readdir(RAW_DIR);
  const dates = files
    .map((f) => /^daily-film-radar-(\d{4}-\d{2}-\d{2})\.md$/.exec(f)?.[1])
    .filter(Boolean)
    .sort();
  return dates[dates.length - 1] ?? null;
}

test('状态库不滞后：$updatedAt 已跟进最新一期归档报告', async () => {
  const tracker = JSON.parse(await readFile(TRACKER, 'utf8'));
  const latest = await latestReportDate();
  assert.ok(latest, 'raw/film-radar 下应存在归档报告');

  const updated = /^(\d{4}-\d{2}-\d{2})/.exec(tracker.$updatedAt ?? '')?.[1];
  assert.ok(updated, `$updatedAt 缺失或格式异常: ${tracker.$updatedAt}`);
  assert.ok(
    updated >= latest,
    `状态库已断更：$updatedAt=${updated}，但最新归档报告是 ${latest}。` +
      `请跑 node scripts/sync-film-tracker.mjs 同步。`,
  );
});

test('同步脚本幂等：重复执行不再产生积压', async () => {
  const { stdout } = await exec(process.execPath, [
    path.join(ROOT, 'scripts', 'sync-film-tracker.mjs'),
    '--dry-run',
  ]);
  const summary = JSON.parse(stdout.slice(stdout.indexOf('{')));
  assert.equal(
    summary.added,
    0,
    `还有 ${summary.added} 部作品未入库（${summary.addedIds?.slice(0, 8).join('、')}），` +
      `说明提取逻辑漏了某些报告格式，需修正脚本。`,
  );
});

test('编号连续可查：works 的最大编号不低于水位推算值', async () => {
  const tracker = JSON.parse(await readFile(TRACKER, 'utf8'));
  const ids = tracker.works.map((w) => Number(String(w.id).replace(/\D/g, '')));
  assert.ok(ids.length > 0, 'works 不应为空');

  const unique = new Set(tracker.works.map((w) => w.id));
  assert.equal(unique.size, tracker.works.length, 'works 中存在重复编号');

  // 水位行给出的"下一可用"应大于 works 里的最大编号（否则说明有编号未被记录）
  const { stdout } = await exec(process.execPath, [
    path.join(ROOT, 'scripts', 'sync-film-tracker.mjs'),
    '--dry-run',
  ]);
  const summary = JSON.parse(stdout.slice(stdout.indexOf('{')));
  const next = Number(String(summary.nextAvailable).replace(/\D/g, ''));
  const max = Math.max(...ids);
  assert.ok(next > max, `下一可用编号 ${summary.nextAvailable} 应大于 works 最大编号 F${max}`);
});

test('人工录入的富字段未被派生数据覆盖', async () => {
  const tracker = JSON.parse(await readFile(TRACKER, 'utf8'));
  const f001 = tracker.works.find((w) => w.id === 'F001');
  assert.ok(f001, 'works 应包含 F001');
  // F001 是早期人工录入的条目，带 scores / notes / malId；
  // 脚本派生条目粒度粗，绝不能把这些数据冲掉。
  assert.ok(f001.scores, 'F001 的 scores 富字段被覆盖了');
  assert.ok(f001.notes, 'F001 的 notes 富字段被覆盖了');
});

test('派生条目可回溯：带 source 字段指向报告原文', async () => {
  const tracker = JSON.parse(await readFile(TRACKER, 'utf8'));
  const derived = tracker.works.filter((w) => w.source);
  assert.ok(derived.length > 0, '应存在脚本派生的条目');
  for (const w of derived) {
    assert.match(w.source, /^raw\/film-radar\/daily-film-radar-\d{4}-\d{2}-\d{2}\.md$/,
      `${w.id} 的 source 指向异常: ${w.source}`);
  }
});
