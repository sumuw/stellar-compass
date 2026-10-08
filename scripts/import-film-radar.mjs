#!/usr/bin/env node

/**
 * 将「每日全球高分影视雷达」的原始报告（raw/film-radar/daily-film-radar-<date>.md）
 * 解析为 Stellar Compass 的 Hugo leaf bundle（index.md + ranking.json）。
 *
 * 用法：
 *   node scripts/import-film-radar.mjs [sourceDir] [targetRoot] [--overwrite] [--dry-run]
 *
 * - sourceDir：包含 daily-film-radar-YYYY-MM-DD.md 的目录，默认 <项目根>/raw/film-radar
 * - targetRoot：项目根目录，默认当前脚本所在项目
 * - 已存在的 bundle 会被跳过（除非 --overwrite）
 * - --dry-run 只打印解析结果，不写任何文件
 *
 * 报告中的「🏆 今日新推荐」章节是唯一的新增数据源；观察池、历史作品动态、
 * 影院观察等章节不计入 items。某天若零新增，则不生成 bundle（内容校验要求
 * items 非空），脚本会明确提示跳过。
 */

import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const CATEGORY = 'film-radar';
const PERIOD = 'daily';
const SOURCE = 'automation-film-radar';
const SOURCE_URL = 'https://www.workbuddy.cn';
const FILE_PATTERN = /^daily-film-radar-(\d{4}-\d{2}-\d{2})\.md$/;
const FULLWIDTH_SPACE = '\u3000';

// 报告只给出平台名，不给出深链，因此映射到平台主页；不臆造具体播放页地址。
const PLATFORM_URLS = [
  [/netflix/i, 'https://www.netflix.com'],
  [/hbo\s*max|\bmax\b|hulu/i, 'https://www.hbomax.com'],
  [/prime\s*video|mgm\+/i, 'https://www.primevideo.com'],
  [/apple\s*tv\+?/i, 'https://tv.apple.com'],
  [/disney\+/i, 'https://www.disneyplus.com'],
  [/crunchyroll/i, 'https://www.crunchyroll.com'],
  [/peacock/i, 'https://www.peacocktv.com'],
  [/paramount\+/i, 'https://www.paramountplus.com'],
  [/mubi/i, 'https://mubi.com'],
  [/哔哩哔哩|b站|bilibili/i, 'https://www.bilibili.com'],
  [/爱奇艺|iqiyi/i, 'https://www.iqiyi.com'],
  [/腾讯视频|极光tv/i, 'https://v.qq.com'],
  [/优酷|youku/i, 'https://www.youku.com'],
  [/芒果tv/i, 'https://www.mgtv.com'],
];

async function main() {
  const { sourceDir, targetRoot, overwrite, dryRun } = parseArguments();
  const entries = await readdir(sourceDir, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && FILE_PATTERN.test(entry.name))
    .map((entry) => entry.name)
    .sort();

  if (files.length === 0) {
    console.log(`import-film-radar: ${sourceDir} 下没有找到 daily-film-radar-*.md`);
    return;
  }

  let written = 0;
  let skipped = 0;
  let empty = 0;
  let failed = 0;

  for (const file of files) {
    const date = FILE_PATTERN.exec(file)[1];
    const slug = `film-radar-daily-${date}`;
    const bundlePath = path.join(targetRoot, 'content', 'rankings', CATEGORY, PERIOD, slug);

    if (!overwrite && existsSync(bundlePath)) {
      console.log(`skip (exists): ${slug}`);
      skipped += 1;
      continue;
    }

    try {
      const markdown = await readFile(path.join(sourceDir, file), 'utf8');
      const items = parseRecommendations(markdown);

      if (items.length === 0) {
        console.log(`skip (zero new titles): ${slug} — 报告当日无正式推荐，不生成 bundle`);
        empty += 1;
        continue;
      }

      const ranking = {
        category: CATEGORY,
        period: PERIOD,
        date,
        source: SOURCE,
        sourceUrl: SOURCE_URL,
        items,
      };
      const frontMatter = {
        title: `今日全球高分影视雷达 ${date}`,
        description: buildDescription(items, date),
        date: `${date}T08:00:00+08:00`,
        rankingKey: date,
        slug,
        categories: [CATEGORY],
        periods: [PERIOD],
        tags: ['影视', '推荐', '评分'],
        draft: false,
      };

      if (dryRun) {
        console.log(`dry-run: ${slug}（${items.length} items）`);
        for (const item of items) {
          console.log(`  ${item.rank}. [${item.id ?? '—'}] ${item.name} — ${item.score ?? '—'}`);
          console.log(`     type=${item.type ?? '—'} platform=${item.platform ?? '—'} url=${item.url}`);
          console.log(`     desc=${item.description}`);
          console.log(`     tags=${(item.tags ?? []).join('、') || '—'}`);
          console.log(`     comment=${(item.comment ?? '').slice(0, 60)}…`);
        }
        written += 1;
        continue;
      }

      const indexContent = matterStringify(
        stripLeadingHeading(markdown),
        frontMatter,
      );

      await mkdir(bundlePath, { recursive: true });
      await writeFile(path.join(bundlePath, 'index.md'), indexContent, 'utf8');
      await writeFile(
        path.join(bundlePath, 'ranking.json'),
        JSON.stringify(ranking, null, 2) + '\n',
        'utf8',
      );
      console.log(`imported: ${slug} (${items.length} items)`);
      written += 1;
    } catch (error) {
      console.error(`failed: ${slug} — ${error.message}`);
      failed += 1;
    }
  }

  console.log(
    `\nimport-film-radar: ${written} written, ${skipped} skipped, ${empty} zero-new, ${failed} failed`,
  );
  if (failed > 0) process.exitCode = 1;
}

// ---- 报告解析 ----

function parseRecommendations(markdown) {
  const lines = markdown.split(/\r?\n/);
  const section = extractSection(lines, /^##\s+.*今日新推荐/);
  return section ? splitEntries(section) : [];
}

/**
 * 提取某个 ## 章节的正文（不含标题行），直到下一个同级或更高级标题为止。
 */
function extractSection(lines, headingPattern) {
  const start = lines.findIndex((line) => headingPattern.test(line.trim()));
  if (start === -1) return null;

  const body = [];
  for (let i = start + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (/^##\s+/.test(line)) break;
    body.push(line);
  }
  return body;
}

function splitEntries(sectionLines) {
  const entries = [];
  let current = null;

  for (const line of sectionLines) {
    if (/^###\s+/.test(line)) {
      if (current) entries.push(current);
      current = { lines: [], heading: line.trim().replace(/^###\s+/, '') };
      continue;
    }
    if (current) current.lines.push(line);
  }
  if (current) entries.push(current);

  return entries
    .map((entry, index) => buildItem(entry, index + 1))
    .filter((item) => item !== null)
    .map((item, index) => ({ ...item, rank: index + 1 }));
}

function buildItem(entry, fallbackRank) {
  const { name, id } = parseHeading(entry.heading);
  if (!name) return null;

  const fields = collectFields(entry.lines);
  const ratings = parseRatings(entry.lines);
  const why = parseProse(entry.lines, /为什么值得看/);
  const audience = parseProse(entry.lines, /适合谁/);
  const type = cleanValue(fields.get('类型'));
  const region = cleanValue(fields.get('国家/地区'));
  const platform = cleanValue(fields.get('可观看平台'));
  const score = buildScore(fields);

  return {
    rank: fallbackRank,
    ...(id ? { id } : {}),
    name,
    url: resolveUrl(platform),
    description: buildItemDescription(ratings, fields),
    type: type || '未标注',
    platform: platform || '暂无可靠数据',
    score: score || '暂无可靠数据',
    tags: buildTags(type, region),
    comment: [why, audience ? `适合谁：${audience}` : ''].filter(Boolean).join(' '),
  };
}

function parseHeading(heading) {
  // 支持两种写法：
  //   F059 · 瑞克和莫蒂 第九季 / Rick and Morty Season 9
  //   1. 中文名 / Original Title
  let text = heading.replace(/^\d+[.、]\s*/, '');
  let id = null;

  const idMatch = /^(F\d{2,4})\s*[·•\-–—]?\s*/.exec(text);
  if (idMatch) {
    id = idMatch[1];
    text = text.slice(idMatch[0].length);
  }

  const name = text.replace(/^[《【]?\s*/, '').trim();
  return { name, id };
}

/**
 * 把条目正文里的 `- **字段**：值` 行解析成字段表。
 * 报告常用全角空格把多个字段串在一行，也可能把冒号写进加粗里。
 */
function collectFields(lines) {
  const fields = new Map();

  for (const line of lines) {
    if (!/^[-*]\s+/.test(line.trim())) continue;
    const stripped = line.trim().replace(/^[-*]\s+/, '').replace(/\*\*/g, '');

    for (const segment of stripped.split(FULLWIDTH_SPACE)) {
      const match = /^(.+?)\s*[：:]\s*(.+)$/.exec(segment.trim());
      if (!match) continue;
      const key = match[1].trim();
      if (!fields.has(key)) fields.set(key, match[2].trim());
    }
  }

  // 「作品编号」也可能只出现在正文而非标题里
  return fields;
}

function parseRatings(lines) {
  const rows = [];
  let inTable = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (/真实口碑|口碑数据/.test(trimmed)) {
      inTable = true;
      continue;
    }
    if (!inTable) continue;
    if (!trimmed.startsWith('|')) {
      if (rows.length > 0 && /^(#{3,4}\s|\*\*📈|\*\*为什么|\*\*适合)/.test(trimmed)) break;
      continue;
    }

    const cells = trimmed
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map((cell) => cell.replace(/\*\*/g, '').trim());

    if (cells.length < 2) continue;
    if (/^平台$/.test(cells[0]) || cells.every((cell) => /^[-:\s]*$/.test(cell))) continue;

    rows.push({
      platform: cleanLabel(cells[0]),
      score: cells[1],
      sample: cells[2] ?? '',
    });
    if (rows.length >= 4) break;
  }

  return rows;
}

function parseProse(lines, labelPattern) {
  for (const line of lines) {
    if (!labelPattern.test(line)) continue;
    const match = /[：:]\s*(.+)$/.exec(line.replace(/\*\*/g, ''));
    if (match) return match[1].trim();
  }
  return '';
}

function buildScore(fields) {
  const index = cleanValue(fields.get('综合推荐指数'));
  const level = cleanValue(fields.get('推荐等级'));
  if (!index) return '';
  // 等级图标跨多个 Unicode 区间：🏆🔥🧪 在 1F3xx/1F9xx，⭐ 在 2B50。
  const emoji = level
    ? (level.match(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}]/gu) ?? [])[0]
    : null;
  return emoji ? `${index} ${emoji}` : index;
}

function buildItemDescription(ratings, fields) {
  if (ratings.length > 0) {
    return ratings
      .map((row) => {
        const sample = row.sample && !/^[-—]*$/.test(row.sample) ? `(${row.sample})` : '';
        return `${row.platform}${row.score}${sample}`;
      })
      .join(' · ');
  }

  // 没有口碑表格时退回状态/进度等可靠字段，绝不编造评分
  const fallback = ['当前状态', '首播/上线日期', '上映日期']
    .map((key) => fields.get(key))
    .filter(Boolean)
    .join(' · ');
  return fallback || '暂无可靠数据';
}

function buildTags(type, region) {
  const tags = [];
  const push = (value) => {
    const cleaned = (value ?? '').trim();
    if (cleaned && !tags.includes(cleaned)) tags.push(cleaned);
  };

  for (const part of (type ?? '').split(/[/／·、,，]/)) push(cleanLabel(part));
  if (region) push(cleanLabel(region));
  return tags.slice(0, 5);
}

function resolveUrl(platform) {
  const text = platform ?? '';
  let best = null;
  for (const [pattern, url] of PLATFORM_URLS) {
    const match = pattern.exec(text);
    if (!match) continue;
    // 报告里先提到的平台才是主平台，按出现位置选，而不是按映射表顺序
    if (!best || match.index < best.index) best = { index: match.index, url };
  }
  return best ? best.url : SOURCE_URL;
}

function cleanValue(value) {
  if (!value) return '';
  return value.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
}

/** 去掉括注，避免「传记（全 4 集）」这类尾巴进标签和摘要 */
function cleanLabel(value) {
  return (value ?? '')
    .replace(/[（(][^）)]*[）)]/g, '')
    .replace(/\*\*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// ---- 渲染 ----

function buildDescription(items, date) {
  const top = items[0];
  const score = top.score && top.score !== '暂无可靠数据' ? `（${top.score}）` : '';
  return `${date} 影视雷达共 ${items.length} 部正式推荐，榜首《${top.name}》${score}。`;
}

function stripLeadingHeading(markdown) {
  const lines = markdown.split(/\r?\n/);
  const headingIndex = lines.findIndex((line) => /^#\s+/.test(line));
  if (headingIndex === -1) return markdown.trim();

  let start = headingIndex + 1;
  while (start < lines.length && lines[start].trim() === '') start += 1;
  return lines.slice(start).join('\n').trim();
}

function matterStringify(content, data) {
  const ordered = [
    'title',
    'description',
    'date',
    'rankingKey',
    'slug',
    'categories',
    'periods',
    'tags',
    'draft',
  ];
  const yaml = ['---'];
  for (const key of ordered) {
    const value = data[key];
    if (Array.isArray(value)) {
      yaml.push(`${key}:`);
      for (const entry of value) yaml.push(`  - ${JSON.stringify(entry)}`);
    } else if (typeof value === 'boolean') {
      yaml.push(`${key}: ${value}`);
    } else {
      yaml.push(`${key}: ${JSON.stringify(value)}`);
    }
  }
  yaml.push('---');
  return `${yaml.join('\n')}\n\n${content}\n`;
}

function parseArguments() {
  const positional = process.argv.slice(2).filter((arg) => !arg.startsWith('--'));
  const flags = process.argv.slice(2).filter((arg) => arg.startsWith('--'));

  return {
    sourceDir: path.resolve(positional[0] ?? path.join(projectRoot, 'raw', 'film-radar')),
    targetRoot: path.resolve(positional[1] ?? projectRoot),
    overwrite: flags.includes('--overwrite'),
    dryRun: flags.includes('--dry-run'),
  };
}

main().catch((error) => {
  console.error(`import-film-radar failed: ${error.message}`);
  process.exitCode = 1;
});
