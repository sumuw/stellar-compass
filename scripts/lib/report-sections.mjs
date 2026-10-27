/**
 * 章节契约加载器
 *
 * raw 报告的章节标题由 Agent 按 skill 模板书写，importer 按白名单解析，
 * 两份文本各自维护就必然漂移 —— 症状是某个章节安静地消失在发布页里。
 * 因此把「章节名 → 角色」收敛到 skills/<category>/sections.json，
 * 由模板、importer、质量门禁三方共同消费。
 *
 * 用法见 scripts/validate-content.mjs 与 scripts/import-github-trending.mjs。
 */

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(here, '..', '..');

// JSON 缺失或破损时的兜底：宁可继续跑，也不要整天缺报。
const FALLBACK_SECTIONS = {
  github: {
    overview: ['今日概览', '速览', '今日速览'],
    items: ['重点项目', '榜单详情', '项目详情', '逐项详情'],
    observation: [
      '观察',
      '今日趋势观察',
      '趋势观察',
      '主题观察',
      '整体观察',
      '关键趋势',
      '今日趋势',
    ],
  },
  'film-radar': {
    newRecommendations: ['今日新推荐'],
    watchPool: ['高分观察池', '观察池'],
    risk: ['历史作品动态', '造假跟踪', '影院高分观察'],
    interception: ['今日检索通道与结果', '候补与拦截', '拦截明细'],
  },
};

const cache = new Map();

/**
 * 读取某榜单的章节契约。
 * @returns {Promise<Record<string, string[]>>} role -> headings
 */
export async function loadSections(category) {
  if (cache.has(category)) return cache.get(category);

  const file = path.join(projectRoot, 'skills', category, 'sections.json');
  let roles;
  try {
    const parsed = JSON.parse(await readFile(file, 'utf8'));
    roles = Object.fromEntries(
      Object.entries(parsed.roles ?? {}).map(([role, value]) => [
        role,
        (value.headings ?? []).map(normalizeHeading).filter(Boolean),
      ]),
    );
  } catch {
    roles = FALLBACK_SECTIONS[category] ?? {};
  }

  cache.set(category, roles);
  return roles;
}

/**
 * 归一化章节标题：去掉 markdown 井号、序号、加粗、emoji 与空白，
 * 使「## 🏆 今日新推荐」「## 三、横向分析」都能稳定比对。
 */
export function normalizeHeading(text) {
  return (text ?? '')
    .replace(/^#{1,6}\s*/, '')
    .replace(/\*\*/g, '')
    .replace(/^[一二三四五六七八九十]+[、.]\s*/, '')
    .replace(/^\d+[、.]\s*/, '')
    // emoji 及其后的空格（🏆 今日新推荐 → 今日新推荐）
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}]/gu, '')
    .replace(/\s+/g, '')
    .trim();
}

/**
 * 判断某个 markdown 标题行是否属于指定角色。
 * 用「归一化后全等」而不是子串匹配，避免「观察」误吃掉「今日趋势观察」以外的章节，
 * 也避免短词因为包含关系误判。
 */
export function isRoleHeading(line, headings) {
  const matched = /^(#{1,6})\s+(.+)$/.exec(line.trim());
  if (!matched) return false;
  return headings.includes(normalizeHeading(matched[2]));
}

/**
 * 在某角色的章节标题处切出正文（不含标题行），直到下一个同级或更高级标题为止。
 * @returns {string[] | null} 未命中返回 null
 */
export function extractRoleBody(lines, headings) {
  const start = lines.findIndex((line) => isRoleHeading(line, headings));
  if (start === -1) return null;

  const level = /^(#{1,6})/.exec(lines[start].trim())[1].length;
  const body = [];
  for (let i = start + 1; i < lines.length; i += 1) {
    const heading = /^(#{1,6})\s+/.exec(lines[i].trim());
    if (heading && heading[1].length <= level) break;
    body.push(lines[i]);
  }
  return body;
}

/**
 * 按角色定位标题所在行号，用于 importer 里区分条目区与其它章节。
 */
export function findRoleHeadingIndex(lines, headings) {
  return lines.findIndex((line) => isRoleHeading(line, headings));
}
