#!/usr/bin/env node

/**
 * 当日榜单 bundle 的内容质量校验
 *
 * 与 scripts/validate-content.mjs 的分工：
 *   - validate-content.mjs 校验「结构」（front matter 字段齐全、ranking.json 能解析、
 *     rank 连续、category/period 一致）——它对全站所有 bundle 跑。
 *   - 本脚本校验「内容」（标签非空、简评够长、必填字段不为空、模板占位符未残留）——
 *     只对 *当日* bundle 跑。
 *
 * 为什么要分开：生产计划里写着「每个项目必须包含标签和简评」，但历史上没有任何一道门禁
 * 真正校验它，要求可以无声地不被执行；而全站范围开启又会因为历史页的口径不同而一次性
 * 炸掉整条发布管道。所以只对新产出的 bundle 设卡。
 *
 * 用法:
 *   node scripts/validate-item-quality.mjs --bundle content/rankings/github/daily/github-daily-2026-10-26
 *   node scripts/validate-item-quality.mjs --category github --period daily --date 2026-10-26
 *   node scripts/validate-item-quality.mjs --category github --date 2026-10-26 --min-comment 20 --skip-missing
 *
 * 退出码: 0 = 通过 / 跳过；1 = 校验失败或 bundle 不存在
 */

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const BRIEFING_PLACEHOLDER = '本期无新增正式推荐';

function parseArgs(argv) {
  const args = {
    bundle: null,
    category: null,
    period: 'daily',
    date: null,
    minComment: 20,
    skipMissing: false,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '--bundle') args.bundle = argv[++i];
    else if (a === '--category') args.category = argv[++i];
    else if (a === '--period') args.period = argv[++i];
    else if (a === '--date') args.date = argv[++i];
    else if (a === '--min-comment') args.minComment = Number(argv[++i]);
    else if (a === '--skip-missing') args.skipMissing = true;
    else if (a === '--help' || a === '-h') {
      console.log('用法: node scripts/validate-item-quality.mjs --bundle <dir> | --category <c> --date <YYYY-MM-DD> [--min-comment 20]');
      process.exit(0);
    } else {
      console.error(`未知参数: ${a}`);
      process.exit(1);
    }
  }
  return args;
}

function resolveBundleDir(args) {
  if (args.bundle) return path.resolve(projectRoot, args.bundle);
  if (args.category && args.date) {
    return path.join(
      projectRoot,
      'content',
      'rankings',
      args.category,
      args.period,
      `${args.category}-${args.period}-${args.date}`,
    );
  }
  console.error('需要 --bundle，或同时提供 --category 与 --date');
  process.exit(1);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const bundleDir = resolveBundleDir(args);
  const relativeDir = path.relative(projectRoot, bundleDir).replace(/\\/g, '/');

  if (!existsSync(bundleDir)) {
    if (args.skipMissing) {
      console.log(`⏭ 内容质量校验：${relativeDir} 不存在，跳过`);
      return;
    }
    fail(relativeDir, ['bundle 目录不存在']);
  }

  const ranking = JSON.parse(await readFile(path.join(bundleDir, 'ranking.json'), 'utf8'));
  const markdown = matter(await readFile(path.join(bundleDir, 'index.md'), 'utf8'));

  const errors = [];
  validateItems(ranking, args, errors);
  validateRenderedBody(markdown, frontMatterLabel(ranking), errors);

  if (errors.length > 0) fail(relativeDir, errors);

  const items = ranking.items ?? [];
  console.log(`内容质量校验通过：${relativeDir}（${items.length} 个条目）`);
}

function validateItems(ranking, args, errors) {
  const category = ranking.category;
  const items = ranking.items ?? [];

  if (items.length === 0) {
    errors.push('ranking.json 条目为空');
    return;
  }

  if (category === 'github') {
    githubRules(items, args.minComment, errors);
  } else if (category === 'film-radar') {
    filmRadarRules(items, errors);
  }
}

/**
 * GitHub 榜：生产要求「每个项目必须包含标签和简评」。
 * 这两项正是我看重的信息密度来源 —— 没有标签的条目在站点上无法归类，
 * 没有简评的条目等于把原文的价值降回一行 URL。
 */
function githubRules(items, minComment, errors) {
  items.forEach((item, index) => {
    const label = `items[${index}] ${item?.name ?? '(无名)'}`;
    if (!Array.isArray(item?.tags) || item.tags.length === 0) {
      errors.push(`${label}: 缺少标签（tags 非空为必填）`);
    }
    const comment = (item?.comment ?? '').trim();
    if (comment.length < minComment) {
      errors.push(`${label}: 简评过短（${comment.length} 字，要求 ≥ ${minComment} 字）`);
    }
    if (item?.stars == null) {
      errors.push(`${label}: 缺少总 Star（旧版 importer 曾渲染丢失此字段）`);
    }
  });
}

/**
 * 影视雷达：正式推荐条目必须字段齐全；零新增日合成的那条 briefing 占位项走豁免，
 * 它不是真实作品，用 developed 字段判空会把每天的零新增全部误报成失败。
 */
function filmRadarRules(items, errors) {
  items.forEach((item, index) => {
    if (item?.name === BRIEFING_PLACEHOLDER) return;
    const label = `items[${index}] ${item?.name ?? '(无名)'}`;
    for (const field of ['id', 'description', 'type', 'platform', 'score']) {
      const value = item?.[field];
      if (value == null || String(value).trim() === '') {
        errors.push(`${label}: 缺少必填字段 ${field}`);
      }
    }
    if (!Array.isArray(item?.tags) || item.tags.length === 0) {
      errors.push(`${label}: 缺少标签`);
    }
  });
}

/** 渲染结果里不应还留着未被替换的模板占位符。 */
function validateRenderedBody(markdown, label, errors) {
  const placeholders = markdown.content.match(/\{\{[^{}]{0,40}\}\}/g);
  if (placeholders) {
    errors.push(`${label}: index.md 残留模板占位符 ${[...new Set(placeholders)].join('、')}`);
  }
  if (markdown.data.description && /\{\{|\}\}/.test(markdown.data.description)) {
    errors.push(`${label}: front matter description 含未替换占位符`);
  }
}

function frontMatterLabel(ranking) {
  return `index.md（${ranking.category ?? '未知'} ${ranking.date ?? ''}）`;
}

function fail(relativeDir, errors) {
  console.error(`内容质量校验失败：${relativeDir}（${errors.length} 项）`);
  for (const error of errors.slice(0, 20)) console.error(`- ${error}`);
  if (errors.length > 20) console.error(`- …（另有 ${errors.length - 20} 项）`);
  process.exit(1);
}

main().catch((error) => {
  console.error(`内容质量校验异常：${error?.message ?? error}`);
  process.exit(1);
});
