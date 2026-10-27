#!/usr/bin/env node

/**
 * GitHub Trending Fetcher
 *
 * Fetches and parses the GitHub Trending page, extracting structured data
 * for each trending repository.
 *
 * Usage:
 *   node fetch-trending.mjs --since daily --limit 25 --output ./trending-2026-08-20
 *   node fetch-trending.mjs --since weekly --language python --limit 10
 *   node fetch-trending.mjs --since daily --date 2026-10-26 --output raw/github/github-daily-trending-2026-10-26
 *
 * 关于 --date：数据归属日必须显式指定，默认取 Asia/Shanghai 的「昨天」
 * （定时任务每天 05:05 跑，此时抓取到的正是昨日榜单）。
 * 绝不能依赖运行时 UTC 日期 —— 那只在凌晨时段恰好等于昨天，下午手动重跑就会错位。
 *
 * Output: JSON file with raw repo data (tags and comments left empty for AI to fill)
 *         plus pageCount/limit 供导入环节做条目完整性校验。
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';

// ─── CLI args ──────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith('--')) {
        args[key] = next;
        i++;
      } else {
        args[key] = true;
      }
    }
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));
const since = args.since || 'daily';
const language = args.language || '';
const limit = parseInt(args.limit || '25', 10);
const outputDir = args.output || './trending-output';
const retries = parseInt(args.retries || '3', 10);

/** Asia/Shanghai 的日期（YYYY-MM-DD）。shiftDays 支持取昨日。 */
function shanghaiDate(shiftDays = 0) {
  const now = new Date();
  const shifted = new Date(now.getTime() + shiftDays * 86_400_000);
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(shifted);
}

/**
 * 数据归属日：--date 显式指定优先；否则按抓取周期语义取昨天。
 * `--date today` / `--date yesterday` 也支持，便于手工重跑时少算一次日期。
 */
function resolveDate() {
  if (!args.date || args.date === true) return shanghaiDate(since === 'daily' ? -1 : 0);
  const value = String(args.date).toLowerCase();
  if (value === 'today') return shanghaiDate(0);
  if (value === 'yesterday') return shanghaiDate(-1);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(args.date))) {
    throw new Error(`--date 需要形如 YYYY-MM-DD（或 today/yesterday），收到：${args.date}`);
  }
  return String(args.date);
}

// ─── URL builder ───────────────────────────────────────────────────────────

function buildUrl(since, language) {
  let url = 'https://github.com/trending';
  if (language) {
    url += '/' + language.toLowerCase();
  }
  url += '?since=' + since;
  return url;
}

// ─── HTML parser ───────────────────────────────────────────────────────────

/**
 * Parse repos from GitHub Trending HTML.
 * Each repo is wrapped in an <article class="Box-row"> element.
 */
function parseRepos(html, limit) {
  const repos = [];

  // Split HTML into article blocks
  // GitHub uses <article class="Box-row ..."> for each repo
  const articleRegex = /<article[^>]*class="[^"]*Box-row[^"]*"[^>]*>([\s\S]*?)<\/article>/gi;
  const articles = html.match(articleRegex) || [];

  for (const article of articles) {
    if (repos.length >= limit) break;

    const repo = parseArticle(article);
    if (repo && repo.name && repo.url) {
      repo.rank = repos.length + 1;
      repo.tags = [];
      repo.comment = '';
      repos.push(repo);
    }
  }

  // pageCount 是页面上真实存在的条目数（截断前）。导入环节用它判断「解析漏了条目」
  // 还是「今天本来就这么少」——历史上 10-22/10-23 只有 8~9 条，曾误以为是抓取失败。
  return { repos, pageCount: articles.length };
}

/**
 * Parse a single article block to extract repo data.
 */
function parseArticle(article) {
  // ─── Repo path (owner/repo) ────────────────────────────────────────────
  // Look for the main repo link inside <h2>
  // href is like "/owner/repo" (not "/owner/repo/stargazers")
  let repoPath = null;

  // Strategy 1: h2 > a with href
  const h2Match = article.match(/<h2[\s\S]*?<a[^>]*href="\/([^"]+)"/i);
  if (h2Match) {
    const rawHref = h2Match[1];
    // Filter out stargazers/forks/etc links - we want the repo root
    const parts = rawHref.split('/');
    if (parts.length === 2) {
      repoPath = rawHref;
    }
  }

  // Strategy 2: any <a> with a 2-part path
  if (!repoPath) {
    const allLinks = article.matchAll(/<a[^>]*href="\/([^"]+)"/gi);
    for (const match of allLinks) {
      const href = match[1];
      const parts = href.split('/');
      if (parts.length === 2 && parts[0] !== 'trending') {
        repoPath = href;
        break;
      }
    }
  }

  if (!repoPath) return null;

  const name = repoPath;
  const url = 'https://github.com/' + repoPath;

  // ─── Description ───────────────────────────────────────────────────────
  let description = 'Unknown';
  // Try col-9 paragraph (GitHub's description element)
  const descMatch = article.match(/<p[^>]*class="[^"]*col-9[^"]*"[^>]*>([\s\S]*?)<\/p>/i);
  if (descMatch) {
    description = cleanText(descMatch[1]);
  }
  // Fallback: any <p> with color-fg-muted
  if (description === 'Unknown') {
    const fallback = article.match(/<p[^>]*class="[^"]*color-fg-muted[^"]*"[^>]*>([\s\S]*?)<\/p>/i);
    if (fallback) {
      description = cleanText(fallback[1]);
    }
  }

  // ─── Language ──────────────────────────────────────────────────────────
  let language = 'Unknown';
  const langMatch = article.match(/<span[^>]*itemprop="programmingLanguage"[^>]*>([^<]+)<\/span>/i);
  if (langMatch) {
    language = langMatch[1].trim();
  }

  // ─── Total stars ───────────────────────────────────────────────────────
  let stars = 0;
  // Look for stargazers link with star count
  const stargazersMatch = article.match(/\/stargazers[^>]*>[\s\S]*?(\d[\d,]*)\s*<\//i);
  if (stargazersMatch) {
    stars = parseInt(stargazersMatch[1].replace(/,/g, ''), 10);
  }
  // Fallback: any star-like number near a star SVG
  if (stars === 0) {
    const starFallback = article.match(/<a[^>]*class="[^"]*Link--muted[^"]*"[^>]*>[\s\S]*?(\d[\d,]*)\s*<\/a>/i);
    if (starFallback) {
      stars = parseInt(starFallback[1].replace(/,/g, ''), 10);
    }
  }

  // ─── Delta (stars today/this week/this month) ───────────────────────────
  let delta = '';
  // Match patterns like "2,221 stars today" or "803 stars this week"
  const deltaMatch = article.match(/(\d[\d,]*)\s+stars?\s+(today|this\s+week|this\s+month)/i);
  if (deltaMatch) {
    const num = deltaMatch[1];
    const period = deltaMatch[2].toLowerCase();
    delta = num + ' stars ' + period;
  }

  return { name, url, description, language, stars, delta };
}

/**
 * Strip HTML tags and normalize whitespace.
 */
function cleanText(html) {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// ─── Main ─────────────────────────────────────────────────────────────────

/**
 * 带指数退避的抓取。GitHub Trending 偶发 429/5xx/网络抖动，历史上单次失败
 * 就等于当天缺报，而且是在后续环节才以「无原始报告」的形式暴露出来。
 */
async function fetchWithRetry(url, attempts) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml',
          'Accept-Language': 'en-US,en;q=0.9',
        },
        redirect: 'follow',
      });
      if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        const waitMs = Math.min(2 ** attempt * 1000, 15_000);
        console.warn(`  ⚠ 第 ${attempt}/${attempts} 次抓取失败（${error.message}），${waitMs / 1000}s 后重试`);
        await new Promise((resolve) => setTimeout(resolve, waitMs));
      }
    }
  }
  throw new Error(`抓取失败，已重试 ${attempts} 次：${lastError?.message ?? lastError}`);
}

async function main() {
  const url = buildUrl(since, language);
  const date = resolveDate();

  console.log('Fetching: ' + url);
  console.log('Parameters: since=' + since + ', language=' + (language || 'all') + ', limit=' + limit + ', date=' + date);

  const html = await fetchWithRetry(url, Math.max(1, retries));
  console.log('Page size: ' + html.length + ' bytes');

  const { repos, pageCount } = parseRepos(html, limit);

  if (repos.length === 0) {
    const debugPath = outputDir + '-debug.html';
    console.error('WARNING: No repos parsed. GitHub page structure may have changed.');
    console.error('Saving raw HTML for debugging: ' + debugPath);
    writeFileSync(debugPath, html);
    console.error('');
    console.error('ACTION REQUIRED: 当日榜单抓取为空 —— 检查上面的 debug HTML 确认页面结构，');
    console.error('并在处理完之前不要继续往下游走，否则会产出一个缺少条目的榜单页。');
    process.exit(1);
  }

  // 页面存在条目却没解析出来 = 解析器失配，同样按失败处理。
  // 只有「页面上本来就少于预期」才是真实的当日冷清，这种情况下打印告警即可。
  const expected = Math.min(pageCount, limit);
  if (repos.length < expected) {
    console.warn(`  ⚠ 页面 ${pageCount} 条、抓取上限 ${limit}，仅解析出 ${repos.length} 条（应得 ${expected} 条）—— 解析器可能失配`);
  }

  // Build output JSON
  const output = {
    date,
    since,
    language: language || 'all',
    sourceUrl: url,
    limit,
    pageCount,
    items: repos,
  };

  const jsonPath = outputDir + '.json';
  const dir = path.dirname(jsonPath);
  if (dir && dir !== '.') {
    try {
      mkdirSync(dir, { recursive: true });
    } catch (_) { /* dir already exists */ }
  }

  writeFileSync(jsonPath, JSON.stringify(output, null, 2) + '\n');

  console.log('');
  console.log('Fetched ' + repos.length + ' repos');
  console.log('Output: ' + jsonPath);
  console.log('');
  console.log('Top 5:');
  repos.slice(0, 5).forEach((r) => {
    console.log('  #' + r.rank + ' ' + r.name + ' (' + r.language + ', ' + r.delta + ')');
  });
  console.log('');
  console.log('NEXT STEP: Read ' + jsonPath + ' and fill in tags + comments,');
  console.log('then generate the markdown report using template-report.md.');
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
