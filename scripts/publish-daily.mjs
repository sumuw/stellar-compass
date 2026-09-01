#!/usr/bin/env node
/**
 * Stellar Compass 榜单发布管道 — 端到端完整操作
 *
 * 用法:
 *   node scripts/publish-daily.mjs --category film-radar                # 发布今天的 film-radar 日报
 *   node scripts/publish-daily.mjs --category github --period weekly    # 发布本周 GitHub 周榜
 *   node scripts/publish-daily.mjs --category film-radar --date 2026-08-21
 *   node scripts/publish-daily.mjs --category film-radar --dry-run      # 只跑质量门禁，不提交不推送
 *   node scripts/publish-daily.mjs --category film-radar --skip-push    # 提交但不推送
 *
 * 完整流程:
 *   [1] 定位当日 bundle（content/rankings/<category>/<period>/<slug>/）
 *   [2] 内容验证        node scripts/validate-content.mjs
 *   [3] 单元测试        node --test tests/content-validation.test.mjs tests/import-reference-rankings.test.mjs
 *   [4] Hugo 构建       hugo --gc --minify
 *   [5] 站点测试        node --test tests/site-output.test.mjs
 *   [6] 提交与推送      git add/commit → 修复 PortableGit ref bug → git push origin main
 *                       push 失败（无凭据）时降级为手动命令提示
 *
 * 退出码: 0 = 全部成功（或降级手动推送）; 1 = 质量门禁失败或 bundle 缺失
 */

import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const exec = promisify(execFile);
const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');
const SITE_URL = 'https://sumuw.github.io/stellar-compass/';
const ACTIONS_URL = 'https://github.com/sumuw/stellar-compass/actions';

// ---------------------------------------------------------------------------
// CLI 参数解析
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const args = {
    category: 'film-radar',
    period: 'daily',
    date: null,
    dryRun: false,
    skipPush: false,
    message: null,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--category') args.category = argv[++i];
    else if (a === '--period') args.period = argv[++i];
    else if (a === '--date') args.date = argv[++i];
    else if (a === '--dry-run') args.dryRun = true;
    else if (a === '--skip-push') args.skipPush = true;
    else if (a === '--message' || a === '-m') args.message = argv[++i];
    else if (a === '--help' || a === '-h') {
      printUsage();
      process.exit(0);
    } else {
      console.error(`未知参数: ${a}`);
      printUsage();
      process.exit(1);
    }
  }
  if (!args.date) {
    // 默认今天（Asia/Shanghai）
    args.date = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit',
    }).format(new Date());
  }
  return args;
}

function printUsage() {
  console.log(`Stellar Compass 榜单发布管道

用法:
  node scripts/publish-daily.mjs --category <film-radar|github> [--period daily|weekly]
                                  [--date YYYY-MM-DD] [--dry-run] [--skip-push]
                                  [--message "自定义提交信息"]

示例:
  node scripts/publish-daily.mjs --category film-radar
  node scripts/publish-daily.mjs --category github --period weekly
  node scripts/publish-daily.mjs --category film-radar --date 2026-08-21 --dry-run`);
}

// ---------------------------------------------------------------------------
// 工具函数
// ---------------------------------------------------------------------------

function ok(label) { console.log(`  ✓ ${label}`); }
function fail(label) { console.error(`  ✗ ${label}`); }
function step(n, total, label) { console.log(`\n[${n}/${total}] ${label}`); }

async function run(cmd, cmdArgs, opts = {}) {
  const { stdout, stderr } = await exec(cmd, cmdArgs, {
    cwd: projectRoot,
    timeout: opts.timeout ?? 120_000,
    maxBuffer: 10 * 1024 * 1024,
    env: { ...process.env, GCM_INTERACTIVE: 'never' },
  });
  return { stdout, stderr };
}

function findHugo() {
  const candidates = [
    join(projectRoot, '.tools', 'hugo', 'hugo.exe'),
    join(projectRoot, '.worktrees', 'hugo-blog', '.tools', 'hugo', 'hugo.exe'),
  ];
  for (const p of candidates) if (existsSync(p)) return p;
  return null;
}

async function pathExists(p) {
  try { await access(p); return true; } catch { return false; }
}

/** 修复 PortableGit loose ref 原子 rename 失败导致 main ref 丢失的问题 */
async function repairBranchRef(branch = 'main') {
  const head = (await run('git', ['rev-parse', 'HEAD'])).stdout.trim();
  const refPath = join(projectRoot, '.git', 'refs', 'heads', ...branch.split('/'));
  try {
    const current = (await readFile(refPath, 'utf8')).trim();
    if (current === head) return { repaired: false, head };
  } catch { /* ref 文件缺失，需要修复 */ }
  await mkdir(dirname(refPath), { recursive: true });
  await writeFile(refPath, head + '\n');
  return { repaired: true, head };
}

/** push 成功后修复 origin/main 远程跟踪 ref（同样的 rename bug 可能使其丢失） */
async function repairRemoteRef(sha) {
  const refPath = join(projectRoot, '.git', 'refs', 'remotes', 'origin', 'main');
  await mkdir(dirname(refPath), { recursive: true });
  await writeFile(refPath, sha + '\n');
}

// ---------------------------------------------------------------------------
// 质量门禁步骤
// ---------------------------------------------------------------------------

async function gateValidateContent() {
  const { stdout } = await run(process.execPath, ['scripts/validate-content.mjs']);
  const match = stdout.match(/(\d+)\s*bundles?/i);
  ok(`内容验证通过${match ? `（${match[1]} bundles）` : ''}`);
  return true;
}

async function gateUnitTests() {
  const { stdout } = await run(process.execPath, [
    '--test', 'tests/content-validation.test.mjs', 'tests/import-reference-rankings.test.mjs',
  ]);
  const pass = (stdout.match(/# pass:\s*(\d+)/) || [])[1];
  const fail = (stdout.match(/# fail:\s*(\d+)/) || [])[1];
  if (fail && fail !== '0') throw new Error(`单元测试失败：${fail} 个失败`);
  ok(`单元测试通过${pass ? `（${pass} pass）` : ''}`);
  return true;
}

async function gateHugoBuild() {
  const hugo = findHugo();
  if (!hugo) throw new Error('找不到 Hugo 二进制（期望 .tools/hugo/hugo.exe 或 .worktrees/hugo-blog/.tools/hugo/hugo.exe）');
  let stdout;
  try {
    stdout = await run(hugo, ['--gc', '--minify'], { timeout: 180_000 }).then((r) => r.stdout);
  } catch (firstErr) {
    // public/ 残留只读/被锁文件会导致 "Access is denied" — 清理产物后重试一次
    const msg = String(firstErr?.message ?? firstErr);
    if (/access is denied|permission/i.test(msg)) {
      console.log('  … 构建遇到权限问题，清理 public/ 与 resources/_gen/ 后重试');
      await run(process.execPath, ['-e', 'require("node:fs").rmSync("public",{recursive:true,force:true});require("node:fs").rmSync("resources/_gen",{recursive:true,force:true})']);
      stdout = await run(hugo, ['--gc', '--minify'], { timeout: 180_000 }).then((r) => r.stdout);
    } else {
      throw firstErr;
    }
  }
  const pages = (stdout.match(/Pages\s+\|\s*(\d+)/i) || [])[1];
  ok(`Hugo 构建成功${pages ? `（${pages} pages）` : ''}`);
  return true;
}

async function gateSiteTests() {
  const { stdout } = await run(process.execPath, ['--test', 'tests/site-output.test.mjs']);
  const pass = (stdout.match(/# pass:\s*(\d+)/) || [])[1];
  const fail = (stdout.match(/# fail:\s*(\d+)/) || [])[1];
  if (fail && fail !== '0') throw new Error(`站点测试失败：${fail} 个失败`);
  ok(`站点测试通过${pass ? `（${pass} pass）` : ''}`);
  return true;
}

// ---------------------------------------------------------------------------
// Git 提交与推送
// ---------------------------------------------------------------------------

async function gitCommitAndPush(args, bundleSlug) {
  // 暂存变更
  await run('git', ['add', '-A']);
  const { stdout: statusOut } = await run('git', ['status', '--short']);
  const hasChanges = statusOut.trim().length > 0;

  if (!hasChanges) {
    ok('工作树无变更（bundle 已提交过），跳过 commit');
  } else {
    const message = args.message ?? `content: add ${args.category} ${args.period} ranking ${args.date}`;
    const { stdout: commitOut } = await run('git', ['commit', '-m', message]);
    const sha = (commitOut.match(/\[main ([0-9a-f]+)\]/) || [])[1] ?? 'unknown';
    ok(`已提交 ${sha}：${message}`);

    // 修复 PortableGit loose ref rename bug（commit 后 refs/heads/main 可能消失）
    const { repaired, head } = await repairBranchRef('main');
    if (repaired) ok(`已修复 main ref（PortableGit rename bug）→ ${head.slice(0, 7)}`);
  }

  if (args.skipPush) {
    console.log('\n⏭  按参数跳过推送。稍后可手动执行：');
    printManualPush();
    return { pushed: false, manual: true };
  }

  // 推送
  console.log('\n  正在推送到 origin/main ...');
  try {
    await run('git', ['push', 'origin', 'main'], { timeout: 90_000 });
    const head = (await run('git', ['rev-parse', 'HEAD'])).stdout.trim();
    await repairRemoteRef(head);
    ok(`已推送 origin/main → ${head.slice(0, 7)}`);
    return { pushed: true, manual: false };
  } catch (pushErr) {
    console.log('  ⚠ 自动推送失败（当前环境无 GitHub 凭据）:');
    const reason = String(pushErr?.message ?? pushErr).split('\n')[0].slice(0, 120);
    console.log(`    ${reason}`);
    console.log('\n  请在终端手动执行（一次性推送所有本地提交）:');
    printManualPush();
    return { pushed: false, manual: true };
  }
}

function printManualPush() {
  console.log(`    cd "${projectRoot.replace(/\//g, '\\')}" && git push origin main`);
}

// ---------------------------------------------------------------------------
// 主流程
// ---------------------------------------------------------------------------

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const TOTAL = 6;

  console.log('📦 Stellar Compass 榜单发布管道');
  console.log(`   类别: ${args.category} | 周期: ${args.period} | 日期: ${args.date}${args.dryRun ? ' | 模式: dry-run' : ''}`);

  // [1] 定位 bundle
  step(1, TOTAL, '定位 bundle');
  const slug = `${args.category}-${args.period}-${args.date}`;
  const bundleDir = join(projectRoot, 'content', 'rankings', args.category, args.period, slug);
  const rankingFile = join(bundleDir, 'ranking.json');
  const indexFile = join(bundleDir, 'index.md');

  if (!(await pathExists(indexFile))) {
    fail(`bundle 不存在: content/rankings/${args.category}/${args.period}/${slug}/`);
    console.error(`\n请先按 skills/${args.category}/SKILL.md 生成当日 bundle（index.md + ranking.json），再运行发布。`);
    process.exit(1);
  }
  let itemCount = null;
  if (await pathExists(rankingFile)) {
    try {
      const ranking = JSON.parse(await readFile(rankingFile, 'utf8'));
      itemCount = Array.isArray(ranking.items) ? ranking.items.length : null;
    } catch { /* ranking.json 解析失败会由验证步骤报错 */ }
  } else {
    fail('缺少 ranking.json');
    process.exit(1);
  }
  ok(`bundle 就绪: ${slug}${itemCount !== null ? `（${itemCount} 个条目）` : ''}`);

  // [2] 内容验证
  step(2, TOTAL, '内容验证');
  await gateValidateContent();

  // [3] 单元测试
  step(3, TOTAL, '单元测试');
  await gateUnitTests();

  // [4] Hugo 构建
  step(4, TOTAL, 'Hugo 构建');
  await gateHugoBuild();

  // [5] 站点测试
  step(5, TOTAL, '站点测试');
  await gateSiteTests();

  // [6] 提交与推送
  if (args.dryRun) {
    step(6, TOTAL, '提交与推送（dry-run，已跳过）');
    console.log('\n✅ 质量门禁全部通过（dry-run 模式，未提交未推送）。');
    return;
  }

  step(6, TOTAL, '提交与推送');
  const result = await gitCommitAndPush(args, slug);

  // 总结
  console.log('\n' + '═'.repeat(60));
  if (result.pushed) {
    console.log('✅ 发布完成！全流程成功：');
    console.log(`   • GitHub Actions 构建中: ${ACTIONS_URL}`);
    console.log(`   • 站点（约 2-3 分钟后生效）: ${SITE_URL}`);
    console.log(`   • 新页面: ${SITE_URL}rankings/${slug}/`);
  } else if (result.manual) {
    console.log('⚠ 本地发布完成，等待手动推送：');
    console.log('   • 质量门禁: 全部通过');
    console.log('   • git 提交: 已完成');
    console.log('   • 推送: 待手动执行上方命令');
    console.log(`   • 推送后站点自动更新: ${SITE_URL}`);
    process.exitCode = 0; // 降级不算失败
  }
}

main().catch((error) => {
  const detail = [error?.stderr, error?.message ?? String(error)]
    .filter(Boolean).join('\n').trim().split('\n')[0];
  fail(detail || String(error));
  if (error?.stderr) console.error(String(error.stderr).split('\n').slice(1, 6).join('\n'));
  console.error('\n❌ 发布中止：质量门禁未通过，未提交未推送。');
  process.exit(1);
});
