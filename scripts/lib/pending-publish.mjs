/**
 * 未推送（降级）状态登记
 *
 * 背景：push 失败在这里是「降级」而不是错误 —— publish-daily 打印一行手动命令后
 * 以 0 退出，随即 taj定时任务结束。结果是当天没推上去这件事没有任何通道通知到人，
 * 只能事后翻记忆才发现（10-09 实际发生过一次）。
 *
 * 因此把降级写进 .workbuddy/state/pending-publish.json，由下一次 run-daily 启动时
 * 自检并打印 ⚠ ACTION REQUIRED —— 缺报/未推送从「事后发现」变成「次日必被发现」。
 */

import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(here, '..', '..');
const STATE_FILE = path.join(
  projectRoot,
  '.workbuddy',
  'state',
  'pending-publish.json',
);

function now() {
  return new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(new Date());
}

async function readState() {
  try {
    const parsed = JSON.parse(await readFile(STATE_FILE, 'utf8'));
    return Array.isArray(parsed.entries) ? parsed : { entries: [] };
  } catch {
    return { entries: [] };
  }
}

async function writeState(state) {
  await mkdir(path.dirname(STATE_FILE), { recursive: true });
  await writeFile(STATE_FILE, JSON.stringify(state, null, 2) + '\n', 'utf8');
}

const sameEntry = (entry, target) =>
  entry.category === target.category &&
  entry.period === target.period &&
  entry.date === target.date;

/**
 * 登记一次未推送。同一 category/period/date 只保留最新一条。
 * @param {{category:string, period:string, date:string, head?:string, note:string}} target
 */
export async function recordPending(target) {
  const state = await readState();
  const entry = { ...target, detectedAt: now() };
  const existing = state.entries.findIndex((item) => sameEntry(item, entry));
  if (existing >= 0) state.entries[existing] = entry;
  else state.entries.push(entry);
  await writeState({ updatedAt: now(), entries: state.entries });
}

/** 推送成功后销账。 */
export async function clearPending(target) {
  const state = await readState();
  const remaining = state.entries.filter((item) => !sameEntry(item, target));
  if (remaining.length === state.entries.length) return false;
  if (remaining.length === 0) {
    try {
      await rm(STATE_FILE, { force: true });
      return true;
    } catch {
      /* 删不掉就落一条空清单，不影响判定 */
    }
  }
  await writeState({ updatedAt: now(), entries: remaining });
  return true;
}

export async function listPending() {
  const state = await readState();
  return state.entries;
}

/**
 * 打印 ⚠ ACTION REQUIRED 区块。run-daily 每次启动都会调用，
 * 因此上一次的降级不会被静默遗忘。
 */
export function renderPendingAlert(entries) {
  if (entries.length === 0) return '';
  const lines = [
    '',
    '⚠ ACTION REQUIRED ── 存在未推送的榜单 ──',
    ...entries.map(
      (entry) =>
        `   • ${entry.category}/${entry.period}/${entry.date}` +
        (entry.head ? ` @ ${entry.head}` : '') +
        ` — ${entry.note}（登记于 ${entry.detectedAt}）`,
    ),
    '   处理：执行一次 git push origin main，或 node scripts/publish-daily.mjs --category <c> --date <d> 重跑。',
    '',
  ];
  return lines.join('\n');
}
