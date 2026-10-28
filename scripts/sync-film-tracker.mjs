#!/usr/bin/env node
/**
 * 从 raw/film-radar 的归档报告重建/增量维护 skills/film-radar/status-tracker.json。
 *
 * 背景：tracker 原本依赖每日自动化 Agent 手工维护（SKILL.md 6.2 节）。2026-10-12 起
 * Agent 因本文件滞后（works 停在 F023，实际已到 F08x）改用了「归档报告全量复核」
 * 去重，随后便不再回写本文件，形成「滞后 → 弃用 → 更滞后」的死循环，至 2026-10-28
 * 已断更 16 天，去重失去唯一事实源。
 *
 * 本脚本把 tracker 改为**从归档报告派生的索引**：扫描 raw/film-radar/*.md，
 * 提取每期的新推荐条目与编号水位，自动补录到 works。Agent 不再需要手写 JSON。
 *
 * 设计约束：
 * - 已存在的 works 条目**不覆盖**（保留 Agent 手写的 scores / awards / notes 等富字段），
 *   只追加缺失编号。脚本提取到的字段粒度低于人工，绝不用粗数据覆盖细数据。
 * - 提取不到的字段留 null，并记入 notes 指明可回溯的报告日期，不编造。
 * - 编号水位（下一可用编号）以报告末尾的水位行为准，比 works 数组长度更可靠。
 *
 * Usage:
 *   node scripts/sync-film-tracker.mjs                 # 同步并写回
 *   node scripts/sync-film-tracker.mjs --dry-run       # 只报告将发生的改动
 *   node scripts/sync-film-tracker.mjs --verbose       # 打印每期的提取结果
 */

import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const RAW_DIR = path.join(ROOT, 'raw', 'film-radar');
const TRACKER_PATH = path.join(ROOT, 'skills', 'film-radar', 'status-tracker.json');

const argv = process.argv.slice(2);
const DRY_RUN = argv.includes('--dry-run');
const VERBOSE = argv.includes('--verbose');

/** 报告文件名里的日期 */
const FILE_DATE = /^daily-film-radar-(\d{4}-\d{2}-\d{2})\.md$/;

/** 「今日新推荐」章节标题（66 期全部命中该模式） */
const NEW_RECOMMEND_HEADING = /^##\s+.*今日新推荐/;

/** 零新增的判定：章节正文里出现这些措辞即视为本期无新增 */
const ZERO_NEW_PATTERNS = [
  /没有发现达到正式推荐标准/,
  /今天没有.*正式推荐/,
  /本期无新增正式推荐/,
  /今日无新增正式推荐/,
];

/** 编号水位行：优先取"下一可用"，退化取"已用编号"的上界 */
const WATERMARK_PATTERNS = [
  /下一可用(?:编号)?(?:仍为)?\s*\**\s*F(\d{2,4})/,
  /本次新推荐从\s*\**\s*F(\d{2,4})/,
  /已用编号\s*\**\s*F\d{2,4}\s*[-–—~]\s*\**\s*F(\d{2,4})/,
];

/** 条目标题的三种写法 */
const TITLE_PATTERNS = [
  // 分隔符出现过 — – - · 等多种写法
  /^#{3,4}\s*F(\d{2,4})\s*[—–\-·•]\s*(.+?)\s*$/m,
  /F(\d{2,4})\s*[《<]([^》>]+)[》>]/,
  /[《<]([^》>]+)[》>]\s*[（(]\s*\**\s*F(\d{2,4})/,
];

/** 字段名映射：报告里的键 → tracker 的字段 */
const FIELD_MAP = {
  作品编号: 'idRaw',
  综合推荐指数: 'scoreRaw',
  推荐等级: 'tierRaw',
  类型: 'type',
  '国家/地区': 'country',
  年份: 'year',
  当前状态: 'currentStatus',
  可观看平台: 'platform',
  '首播/上线日期': 'releaseDate',
  流媒体地区限制: 'regionLimit',
  当前播出进度: 'progress',
};

function parseDate(fileName) {
  const m = FILE_DATE.exec(fileName);
  return m ? m[1] : null;
}

/** 从报告全文提取编号水位 */
function extractWatermark(text) {
  for (const re of WATERMARK_PATTERNS) {
    const m = re.exec(text);
    if (m) return Number(m[1]);
  }
  return null;
}

/** 把「今日新推荐」章节正文切成若干条目块 */
function splitEntryBlocks(body) {
  const lines = body.split(/\r?\n/);
  const blocks = [];
  let current = null;

  for (const line of lines) {
    if (/^#{3,4}\s+/.test(line)) {
      if (current && current.join('').trim()) blocks.push(current);
      current = [line];
      continue;
    }
    if (current) current.push(line);
  }
  if (current && current.join('').trim()) blocks.push(current);

  // 无 ### 小标题时（如 10-27 起的行内式写法），整段视为一个条目
  if (blocks.length === 0 && body.trim()) blocks.push(lines);
  return blocks;
}

/** 从条目块里抽取键值对（兼容行内式与表格式） */
function extractFields(lines) {
  const fields = {};
  for (const line of lines) {
    let key = null;
    let value = null;

    // 行内式有三种写法，需按序尝试：
    //   - **综合推荐指数：95 / 100**   （键值整体在粗体内，9 月格式）
    //   **作品编号：** F084            （冒号在 ** 内，10-27 起）
    //   **作品编号**: F084             （冒号在 ** 外）
    const boldPair = /^\s*[-*]?\s*\*\*(.+?)\s*[：:]\s*(.+?)\*\*\s*$/.exec(line);
    const inline = /^\s*[-*]?\s*\*\*(.+?)\*\*\s*[：:]?\s*(.+?)\s*$/.exec(line);
    const table = /^\s*\|\s*\*\*(.+?)\*\*\s*\|\s*(.+?)\s*\|\s*$/.exec(line);

    if (boldPair) [, key, value] = boldPair;
    else if (inline) [, key, value] = inline;
    else if (table) [, key, value] = table;
    else continue;

    key = key.replace(/[：:]\s*$/, '').trim();
    value = value.replace(/\*\*/g, '').trim();
    const mapped = FIELD_MAP[key];
    if (mapped && !fields[mapped]) fields[mapped] = value;
  }
  return fields;
}

function normalizeId(raw) {
  if (!raw) return null;
  const m = /F\s*(\d{2,4})/.exec(raw);
  return m ? `F${m[1].padStart(3, '0')}` : null;
}

function stripMarkup(text) {
  return text ? text.replace(/\*\*/g, '').replace(/`/g, '').trim() : null;
}

/** 解析一个条目块 */
function parseEntry(lines, reportDate) {
  const body = lines.join('\n');
  const fields = extractFields(lines);

  let id = normalizeId(fields.idRaw);
  let title = null;

  for (const re of TITLE_PATTERNS) {
    const m = re.exec(body);
    if (!m) continue;
    if (re === TITLE_PATTERNS[2]) {
      // 《标题》（F0XX）写法：分组顺序相反
      id ??= `F${m[2].padStart(3, '0')}`;
      title ??= m[1].trim();
    } else {
      id ??= `F${m[1].padStart(3, '0')}`;
      title ??= m[2].trim();
    }
    if (id && title) break;
  }

  if (!id) return null;

  // 回退：标题写在 `### 1. 忘却之岛 / Forgotten Island` 这类序号式小标题里，
  // 编号只在正文中出现（10-27 起的格式）。
  if (!title) {
    const heading = /^#{3,4}\s+(?:\d+\s*[.、]\s*)?(.+?)\s*$/.exec(lines[0] ?? '');
    if (heading) title = heading[1];
  }

  const scoreMatch = /(\d{2,3})/.exec(fields.scoreRaw ?? '');
  const tierMatch = /(🏆|⭐|👍|👀|⏸)/.exec(fields.tierRaw ?? '');
  const yearMatch = /(19|20)\d{2}/.exec(fields.year ?? '');

  return {
    id,
    title: stripMarkup(title),
    type: stripMarkup(fields.type),
    country: stripMarkup(fields.country),
    year: yearMatch ? Number(yearMatch[0]) : null,
    platform: stripMarkup(fields.platform),
    score: scoreMatch ? Number(scoreMatch[1]) : null,
    tier: tierMatch ? tierMatch[1] : null,
    status: 'NEW',
    firstRecommended: reportDate,
    lastUpdated: reportDate,
    currentStatus: stripMarkup(fields.currentStatus),
    releaseDate: stripMarkup(fields.releaseDate),
    regionLimit: stripMarkup(fields.regionLimit),
    source: `raw/film-radar/daily-film-radar-${reportDate}.md`,
  };
}

/** 处理单期报告 */
function processReport(text, reportDate) {
  const lines = text.split(/\r?\n/);
  const start = lines.findIndex((l) => NEW_RECOMMEND_HEADING.test(l.trim()));
  if (start === -1) return { entries: [], watermark: extractWatermark(text), zeroNew: false };

  const bodyLines = [];
  for (let i = start + 1; i < lines.length; i += 1) {
    if (/^##\s+/.test(lines[i])) break;
    bodyLines.push(lines[i]);
  }
  const body = bodyLines.join('\n');
  const zeroNew = ZERO_NEW_PATTERNS.some((re) => re.test(body));
  if (zeroNew) return { entries: [], watermark: extractWatermark(text), zeroNew: true };

  const entries = [];
  for (const block of splitEntryBlocks(body)) {
    const entry = parseEntry(block, reportDate);
    if (entry) entries.push(entry);
  }
  return { entries, watermark: extractWatermark(text), zeroNew: false };
}

async function main() {
  const files = (await readdir(RAW_DIR))
    .map((name) => ({ name, date: parseDate(name) }))
    .filter((f) => f.date)
    .sort((a, b) => a.date.localeCompare(b.date));

  if (files.length === 0) {
    console.error(`未找到任何报告：${RAW_DIR}`);
    process.exit(1);
  }

  const tracker = JSON.parse(await readFile(TRACKER_PATH, 'utf8'));
  const existing = new Map(tracker.works.map((w) => [w.id, w]));

  const collected = new Map();
  let latestWatermark = null;
  let latestReportDate = null;
  const perReport = [];

  for (const file of files) {
    const text = await readFile(path.join(RAW_DIR, file.name), 'utf8');
    const { entries, watermark, zeroNew } = processReport(text, file.date);
    if (watermark) latestWatermark = watermark;
    latestReportDate = file.date;

    for (const entry of entries) {
      if (!collected.has(entry.id)) collected.set(entry.id, entry);
    }
    perReport.push({ date: file.date, count: entries.length, zeroNew, watermark });
  }

  if (VERBOSE) {
    for (const r of perReport) {
      console.log(`  ${r.date}: 新增 ${r.count} 条${r.zeroNew ? '（零新增期）' : ''}`);
    }
  }

  // 追加缺失条目：已存在的绝不覆盖
  const added = [];
  const enriched = [];
  const refreshed = [];
  for (const [id, entry] of [...collected.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    const prev = existing.get(id);
    if (prev) {
      // 带 source 的是脚本派生的，可安全重算（提取逻辑改进后能自愈）；
      // 不带 source 的是人工录入的富字段条目，绝不覆盖。
      if (prev.source) {
        existing.set(id, { ...prev, ...entry });
        refreshed.push(id);
      } else {
        enriched.push(id);
      }
      continue;
    }
    existing.set(id, entry);
    added.push(id);
  }

  const works = [...existing.values()].sort((a, b) => a.id.localeCompare(b.id));

  // 编号水位：以报告水位行推算的"下一可用"为准
  const ids = works.map((w) => Number(w.id.slice(1)));
  const maxId = ids.length ? Math.max(...ids) : 0;
  const nextAvailable = latestWatermark
    ? `F${String(latestWatermark).padStart(3, '0')}`
    : `F${String(maxId + 1).padStart(3, '0')}`;

  // 观察池规模：报告里明确写了口径时才更新，否则保留原值
  const trackerNext = {
    ...tracker,
    $updatedAt: `${latestReportDate}T05:05:00+08:00`,
    works,
    stats: {
      ...tracker.stats,
      totalRecommended: works.length,
      todayNew: 0,
      historyNote:
        `works 由 scripts/sync-film-tracker.mjs 从 raw/film-radar 归档报告派生，` +
        `已回溯至 ${latestReportDate}（共 ${files.length} 期，${works.length} 部）。` +
        `已用编号 ${works[0]?.id ?? '—'}–${works[works.length - 1]?.id ?? '—'}，` +
        `下一可用 ${nextAvailable}。编号水位以报告末尾水位行为准。`,
    },
  };

  // 滞后说明改为派生索引说明
  if (trackerNext.$lagNote) {
    trackerNext.$lagNote =
      `本文件已改为**派生索引**：由 scripts/sync-film-tracker.mjs 从 raw/film-radar 归档报告` +
      `自动同步，不再依赖手工维护（手工维护曾于 2026-10-12 起中断 16 天）。` +
      `F001–F023 保留早期人工录入的富字段；其后条目为脚本提取，字段粒度较粗，` +
      `缺失字段可回溯 source 指向的报告原文。`;
  }

  const summary = {
    reports: files.length,
    latestReportDate,
    worksBefore: tracker.works.length,
    worksAfter: works.length,
    added: added.length,
    addedIds: added,
    alreadyPresent: enriched.length,
    nextAvailable,
    maxIdInWorks: `F${String(maxId).padStart(3, '0')}`,
  };

  if (DRY_RUN) {
    console.log('[dry-run] 未写回。改动摘要：');
    console.log(JSON.stringify(summary, null, 2));
    return;
  }

  await writeFile(TRACKER_PATH, `${JSON.stringify(trackerNext, null, 2)}\n`, 'utf8');
  console.log(`✓ 状态库已同步：${summary.worksBefore} → ${summary.worksAfter} 部（新增 ${summary.added}）`);
  console.log(`  报告覆盖：${summary.reports} 期，最新 ${summary.latestReportDate}`);
  console.log(`  编号水位：works 最大 ${summary.maxIdInWorks}，下一可用 ${summary.nextAvailable}`);
  if (added.length > 0) {
    const preview = added.slice(0, 12).join('、');
    console.log(`  新增编号：${preview}${added.length > 12 ? ` …等 ${added.length} 个` : ''}`);
  }
}

main().catch((err) => {
  console.error('同步失败：', err);
  process.exit(1);
});
