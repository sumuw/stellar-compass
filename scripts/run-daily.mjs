#!/usr/bin/env node
/**
 * Stellar Compass 每日双榜统一发布入口
 *
 * 一次调用完成：原始报告 → leaf bundle → 质量门禁 → git 提交（按榜单分别提交）。
 *
 * 用法:
 *   node scripts/run-daily.mjs                       # 处理今天（Asia/Shanghai）
 *   node scripts/run-daily.mjs --date 2026-10-08     # 处理指定日期
 *   node scripts/run-daily.mjs --only github         # 只跑 GitHub 榜
 *   node scripts/run-daily.mjs --dry-run             # 只导入+门禁，不提交不推送
 *   node scripts/run-daily.mjs --skip-push           # 提交但不推送
 *
 * 输入目录:
 *   raw/github/github-daily-trending-<date>.md
 *   raw/film-radar/daily-film-radar-<date>.md
 *
 * 行为约定:
 *   - 两个榜单各自独立：一个失败不影响另一个，最后汇总退出码
 *   - 某榜当日没有产出（如影视雷达零新增不生成 bundle）则跳过发布，不算失败
 *   - 提交时用 --add-path 精确限定范围，不会把工作区里无关的未提交改动卷进来
 */

import { execFile } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const exec = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const NODE = process.execPath;

const CATEGORIES = [
  {
    key: 'github',
    label: 'GitHub 每日趋势榜',
    rawDir: 'raw/github',
    rawFile: (date) => `github-daily-trending-${date}.md`,
    importer: 'scripts/import-github-trending.mjs',
    slug: (date) => `github-daily-${date}`,
  },
  {
    key: 'film-radar',
    label: '每日全球高分影视雷达',
    rawDir: 'raw/film-radar',
    rawFile: (date) => `daily-film-radar-${date}.md`,
    importer: 'scripts/import-film-radar.mjs',
    slug: (date) => `film-radar-daily-${date}`,
  },
];

function parseArgs(argv) {
  const args = { date: null, only: null, dryRun: false, skipPush: false };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '--date') args.date = argv[++i];
    else if (a === '--only') args.only = argv[++i];
    else if (a === '--dry-run') args.dryRun = true;
    else if (a === '--skip-push') args.skipPush = true;
    else if (a === '--help' || a === '-h') {
      console.log('用法: node scripts/run-daily.mjs [--date YYYY-MM-DD] [--only github|film-radar] [--dry-run] [--skip-push]');
      process.exit(0);
    } else {
      console.error(`未知参数: ${a}`);
      process.exit(1);
    }
  }
  if (!args.date) {
    args.date = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Shanghai',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(new Date());
  }
  return args;
}

async function run(cmd, cmdArgs) {
  const { stdout, stderr } = await exec(cmd, cmdArgs, {
    cwd: projectRoot,
    timeout: 300_000,
    maxBuffer: 10 * 1024 * 1024,
    env: { ...process.env, GCM_INTERACTIVE: 'never' },
  });
  return { stdout, stderr };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const targets = CATEGORIES.filter((entry) => !args.only || entry.key === args.only);

  if (targets.length === 0) {
    console.error(`--only 只支持: ${CATEGORIES.map((entry) => entry.key).join(' | ')}`);
    process.exit(1);
  }

  console.log(`📦 Stellar Compass 每日双榜发布 — ${args.date}${args.dryRun ? '（dry-run）' : ''}`);

  const results = [];

  for (const target of targets) {
    console.log(`\n${'─'.repeat(60)}\n▶ ${target.label}`);

    const rawPath = path.join(target.rawDir, target.rawFile(args.date));
    if (!existsSync(path.join(projectRoot, rawPath))) {
      console.log(`  ⏭ 缺少原始报告 ${rawPath}，跳过该榜`);
      results.push({ key: target.key, status: 'no-report' });
      continue;
    }

    try {
      const { stdout } = await run(NODE, [target.importer, target.rawDir, projectRoot]);
      console.log(stdout.trim());
    } catch (error) {
      console.error(`  ✗ 导入失败: ${String(error?.message ?? error).split('\n')[0]}`);
      results.push({ key: target.key, status: 'import-failed' });
      continue;
    }

    const bundleDir = path.join('content', 'rankings', target.key, 'daily', target.slug(args.date));
    if (!existsSync(path.join(projectRoot, bundleDir))) {
      console.log(`  ⏭ 未生成 bundle（多数是当日零新增），跳过发布`);
      results.push({ key: target.key, status: 'no-bundle' });
      continue;
    }

    const publishArgs = [
      'scripts/publish-daily.mjs',
      '--category', target.key,
      '--period', 'daily',
      '--date', args.date,
      '--add-path', bundleDir,
      '--add-path', rawPath,
    ];
    if (args.dryRun) publishArgs.push('--dry-run');
    if (args.skipPush) publishArgs.push('--skip-push');

    try {
      const { stdout } = await run(NODE, publishArgs);
      console.log(stdout.trim());
      results.push({ key: target.key, status: 'published' });
    } catch (error) {
      const detail = String(error?.message ?? error).split('\n')[0];
      console.error(`  ✗ 发布失败: ${detail}`);
      results.push({ key: target.key, status: 'publish-failed' });
    }
  }

  console.log(`\n${'═'.repeat(60)}`);
  for (const result of results) {
    const note = {
      published: '已发布',
      'no-report': '跳过（无原始报告）',
      'no-bundle': '跳过（未生成 bundle，通常为零新增）',
      'import-failed': '导入失败',
      'publish-failed': '发布失败',
    }[result.status];
    console.log(`  ${result.key}: ${note}`);
  }

  const failed = results.filter((result) => result.status.endsWith('-failed'));
  if (failed.length > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(`run-daily failed: ${String(error?.message ?? error)}`);
  process.exit(1);
});
