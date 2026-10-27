#!/usr/bin/env node
/**
 * Stellar Compass 每日双榜统一发布入口
 *
 * 一次调用完成：原始报告 → leaf bundle → 质量门禁 → git 提交（按榜单分别提交）。
 *
 * 用法:
 *   node scripts/run-daily.mjs                       # 处理昨天（Asia/Shanghai）
 *   node scripts/run-daily.mjs --date 2026-10-08     # 处理指定日期
 *   node scripts/run-daily.mjs --date today          # 处理今天
 *   node scripts/run-daily.mjs --only github         # 只跑 GitHub 榜
 *   node scripts/run-daily.mjs --dry-run             # 只导入+门禁，不提交不推送
 *   node scripts/run-daily.mjs --skip-push           # 提交但不推送
 *
 * 日期口径：无参默认取「昨天（Asia/Shanghai）」—— 定时任务凌晨跑，抓取到的正是昨日榜单。
 * 以前默认「今天」，与定时任务语义相反：无参手动跑一次就指向当日尚不存在的原始报告，
 * 输出误导性的「跳过（无原始报告）」。需要当天数据时显式传 --date today。
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

import { listPending, renderPendingAlert } from './lib/pending-publish.mjs';

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
    // 跨日状态：F 编号、观察池、去重的唯一事实源，必须跟着每天的记录入库
    statePaths: ['skills/film-radar/status-tracker.json'],
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
    args.date = shanghaiDate(-1);
    console.log(`（未传 --date，按「数据归属日 = 昨天」取 ${args.date}）`);
  } else if (args.date === 'today') {
    args.date = shanghaiDate(0);
  } else if (args.date === 'yesterday') {
    args.date = shanghaiDate(-1);
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(args.date)) {
    console.error(`--date 需要形如 YYYY-MM-DD（或 today/yesterday），收到：${args.date}`);
    process.exit(1);
  }
  return args;
}

/** Asia/Shanghai 日期；shiftDays = -1 取昨天。 */
function shanghaiDate(shiftDays) {
  const shifted = new Date(Date.now() + shiftDays * 86_400_000);
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(shifted);
}

async function run(cmd, cmdArgs) {
  const { stdout, stderr } = await exec(cmd, cmdArgs, {
    cwd: projectRoot,
    timeout: 300_000,
    maxBuffer: 10 * 1024 * 1024,
    // 不要设 GCM_INTERACTIVE=never：该模式下 GCM 连已缓存的凭据都拒绝返回，
    // 非交互环境必然拿不到用户名密码，git push 一定失败。
    // GIT_TERMINAL_PROMPT=0 保证拿不到凭据时立刻失败而不是挂住等输入。
    env: { ...process.env, GIT_TERMINAL_PROMPT: '0' },
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

  // 自检：上一次有没有降级成「本地提交但未推送」的榜单。
  // 这类降级过去不会报错也不通知人，只能事后翻记忆才发现。
  const alert = renderPendingAlert(await listPending());
  if (alert) console.log(alert);

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

    // --add-path 必须显式列出需要入库的路径，工作区里无关的改动不会被卷进来。
    // 以前只带 bundle + raw md，导致两处数据资产长期不在版本库里：
    //   · raw json（-结构化数据源）几乎全部 untracked
    //   · skills/film-radar/status-tracker.json（跨日编号/去重/观察池的唯一事实源）
    //     曾连续 18 天未提交 —— 那是「一天回滚三周状态」的单点风险。
    const publishArgs = [
      'scripts/publish-daily.mjs',
      '--category', target.key,
      '--period', 'daily',
      '--date', args.date,
      '--add-path', bundleDir,
      '--add-path', rawPath,
    ];
    if (existsSync(path.join(projectRoot, rawPath.replace(/\.md$/, '.json')))) {
      publishArgs.push('--add-path', rawPath.replace(/\.md$/, '.json'));
    }
    for (const statePath of target.statePaths ?? []) {
      if (existsSync(path.join(projectRoot, statePath))) {
        publishArgs.push('--add-path', statePath);
      }
    }
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
