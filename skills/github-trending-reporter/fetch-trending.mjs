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
 *
 * Output: JSON file with raw repo data (tags and comments left empty for AI to fill)
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

  return repos;
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

async function main() {
  const url = buildUrl(since, language);

  console.log('Fetching: ' + url);
  console.log('Parameters: since=' + since + ', language=' + (language || 'all') + ', limit=' + limit);

  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml',
      'Accept-Language': 'en-US,en;q=0.9',
    },
    redirect: 'follow',
  });

  if (!response.ok) {
    console.error('Fetch failed: ' + response.status + ' ' + response.statusText);
    process.exit(1);
  }

  const html = await response.text();
  console.log('Page size: ' + html.length + ' bytes');

  const repos = parseRepos(html, limit);

  if (repos.length === 0) {
    console.error('WARNING: No repos parsed. GitHub page structure may have changed.');
    console.error('Saving raw HTML for debugging: ' + outputDir + '-debug.html');
    writeFileSync(outputDir + '-debug.html', html);
    process.exit(1);
  }

  // Build output JSON
  const date = new Date().toISOString().split('T')[0];
  const output = {
    date,
    since,
    language: language || 'all',
    sourceUrl: url,
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
