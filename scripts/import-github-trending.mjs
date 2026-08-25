#!/usr/bin/env node

// 将 GitHub Trending 自动化任务产出的原始报告（markdown 或 json）转换为
// Stellar Compass 的 Hugo leaf bundle 格式（index.md + ranking.json）。
//
// 用法：
//   node scripts/import-github-trending.mjs <sourceDir> [targetRoot] [--overwrite]
//
// - sourceDir：包含 github-daily-trending-YYYY-MM-DD.md（及可选的 .json）的目录
// - targetRoot：项目根目录（默认当前目录）
// - 已存在的 bundle 会被跳过（除非 --overwrite）

import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const PERIOD = 'daily';
const CATEGORY = 'github';
const SOURCE_URL = 'https://github.com/trending?since=daily';

function main() {
  const { sourceDir, targetRoot, overwrite } = parseArguments();
  return run(sourceDir, targetRoot, overwrite);
}

async function run(sourceDir, targetRoot, overwrite) {
  const sourceEntries = await readdir(sourceDir, { withFileTypes: true });
  const markdownFiles = sourceEntries
    .filter((entry) => entry.isFile() && /^github-daily-trending-\d{4}-\d{2}-\d{2}\.md$/.test(entry.name))
    .map((entry) => entry.name)
    .sort();

  let written = 0;
  let skipped = 0;
  let failed = 0;

  for (const markdownFile of markdownFiles) {
    const dateMatch = /^github-daily-trending-(\d{4}-\d{2}-\d{2})\.md$/.exec(markdownFile);
    const date = dateMatch[1];
    const slug = `github-daily-${date}`;
    const bundlePath = path.join(
      targetRoot,
      'content',
      'rankings',
      CATEGORY,
      PERIOD,
      slug,
    );
    const indexPath = path.join(bundlePath, 'index.md');

    if (!overwrite) {
      try {
        await readFile(indexPath, 'utf8');
        console.log(`skip (exists): ${slug}`);
        skipped += 1;
        continue;
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
    }

    try {
      const markdown = await readFile(path.join(sourceDir, markdownFile), 'utf8');
      const jsonPath = path.join(
        sourceDir,
        markdownFile.replace(/\.md$/, '.json'),
      );
      let json = null;
      try {
        json = JSON.parse(await readFile(jsonPath, 'utf8'));
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }

      const { items, overview, observation } = buildFromReport(date, markdown, json);
      const ranking = {
        category: CATEGORY,
        period: PERIOD,
        date,
        source: 'github-trending',
        sourceUrl: SOURCE_URL,
        items,
      };
      const frontMatter = {
        title: `GitHub 每日趋势榜 ${date}`,
        description: buildDescription(items, date),
        date: `${date}T08:00:00+08:00`,
        rankingKey: date,
        slug,
        categories: [CATEGORY],
        periods: [PERIOD],
        tags: ['GitHub', '开源', '趋势'],
        draft: false,
      };
      const indexContent = matterStringify(
        renderIndexBody(items, overview, observation),
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

  console.log(`\nimport-github-trending: ${written} written, ${skipped} skipped, ${failed} failed`);
  if (failed > 0) process.exitCode = 1;
}

function buildFromReport(date, markdown, json) {
  let items;
  if (json && Array.isArray(json.items) && json.items.length > 0) {
    items = json.items.map((item, index) => normalizeJsonItem(item, index));
  } else {
    items = parseMarkdownItems(markdown);
  }

  const overview = buildOverview(markdown, items, date);
  const observation = buildObservation(markdown, items);
  return { items, overview, observation };
}

function normalizeJsonItem(item, index) {
  const rank = typeof item.rank === 'number' ? item.rank : index + 1;
  const delta = normalizeDelta(item.delta) ?? null;
  const stars = typeof item.stars === 'number' ? item.stars : parseNumber(item.stars);
  return {
    rank,
    name: item.name,
    url: item.url,
    description: item.description ?? '',
    language: item.language ?? '未标注',
    ...(stars != null ? { stars } : {}),
    ...(delta != null ? { delta } : {}),
    tags: Array.isArray(item.tags) ? item.tags : [],
    comment: item.comment ?? '',
  };
}

// ---- markdown 解析 ----

function parseMarkdownItems(markdown) {
  const lines = markdown.split(/\r?\n/);
  const items = [];
  let current = null;

  for (const line of lines) {
    const heading = /^###\s+\d+\.\s+([A-Za-z0-9._-]+\/[A-Za-z0-9._-]+)/.exec(line);
    if (heading) {
      if (current) items.push(current);
      current = { rank: items.length + 1, name: heading[1], tags: [], language: '未标注' };
      continue;
    }
    if (!current) continue;
    applyFieldLine(current, line);
  }
  if (current) items.push(current);

  return items.map((item, index) => ({
    rank: index + 1,
    name: item.name,
    url: item.url ?? '',
    description: item.description ?? '',
    language: item.language ?? '未标注',
    ...(item.stars != null ? { stars: item.stars } : {}),
    ...(item.delta != null ? { delta: item.delta } : {}),
    tags: item.tags ?? [],
    comment: item.comment ?? '',
  }));
}

function applyFieldLine(item, line) {
  const trimmed = line.trim();
  if (!trimmed || trimmed === '---') return;
  if (trimmed.startsWith('#')) return; // 章节标题由外部处理
  // 跳过自动化报告页脚（如 *本报告由自动化任务…* / *整理人：…*）
  if (/^\*[^*].*\*$/.test(trimmed) && /(本报告|整理人|自动化任务|相关 Skill|WorkBuddy)/.test(trimmed)) {
    return;
  }

  // 表格行（两列）：| **字段** | 值 |（值内部可能含字面 |）
  if (line.includes('|')) {
    const firstPipe = line.indexOf('|');
    const secondPipe = line.indexOf('|', firstPipe + 1);
    const lastPipe = line.lastIndexOf('|');
    if (secondPipe !== -1 && lastPipe > secondPipe) {
      const key = line.slice(firstPipe + 1, secondPipe).trim().replace(/\*\*/g, '');
      const value = line.slice(secondPipe + 1, lastPipe).trim();
      const header = /字段|内容/.test(key) || /^[-:\s]+$/.test(value);
      if (!header) captureField(item, key, value);
    }
    return; // 概览/分布等多列表格行由外部章节处理，此处忽略
  }

  // 键值行：**字段**：值 / - **字段**：值 / - 字段：值
  const kv =
    /^(?:[-*]\s+)?\*\*(.+?)\*\*\s*[：:]\s*(.+)$/.exec(line) ||
    /^(?:[-*]\s+)(.+?)\s*[：:]\s*(.+)$/.exec(line);
  if (kv) {
    captureField(item, kv[1], kv[2]);
    return;
  }

  // 其余非空行视为简评/评论段落
  item.comment = (item.comment ? `${item.comment}\n` : '') + trimmed;
}

function captureField(item, rawKey, rawValue) {
  const key = rawKey.replace(/\*\*/g, '').trim().toLowerCase();
  const value = rawValue.trim();

  if (/简评|评论/.test(key)) {
    item.comment = value;
    return;
  }
  if (/项目地址|地址/.test(key)) {
    item.url = value;
    return;
  }
  if (/主要语言|语言/.test(key) && !/分布/.test(key)) {
    item.language = value || '未标注';
    return;
  }
  if (/简介/.test(key)) {
    item.description = value;
    return;
  }
  if (/总\s*star/.test(key)) {
    const num = parseNumber(value);
    if (num != null) item.stars = num;
    return;
  }
  if (/新增|delta/.test(key)) {
    const delta = normalizeDelta(value);
    if (delta != null) item.delta = delta;
    // 同一条内可能附带「总 Star：xxx」
    const starMatch = /总\s*star[：:\s]+([\d,]+)/i.exec(value);
    if (starMatch) {
      const stars = parseNumber(starMatch[1]);
      if (stars != null) item.stars = stars;
    }
    return;
  }
  if (/标签/.test(key)) {
    item.tags = parseTags(value);
    return;
  }
}

function parseTags(value) {
  let parts;
  if (value.includes('`')) {
    parts = value.split('`');
  } else if (value.includes('、')) {
    parts = value.split('、');
  } else if (value.includes(',')) {
    parts = value.split(',');
  } else {
    parts = [value];
  }
  const seen = new Set();
  const tags = [];
  for (const part of parts) {
    const cleaned = part.replace(/[#*`]/g, '').trim();
    if (!cleaned) continue;
    if (seen.has(cleaned)) continue;
    seen.add(cleaned);
    tags.push(cleaned);
  }
  return tags;
}

function parseNumber(value) {
  if (typeof value === 'number') return value;
  if (typeof value !== 'string') return null;
  const match = /[\d,]+/.exec(value.replace(/[^\d,]/g, ''));
  if (!match) return null;
  const num = Number(match[0].replace(/,/g, ''));
  return Number.isFinite(num) ? num : null;
}

function normalizeDelta(value) {
  if (typeof value === 'number') {
    return `${value.toLocaleString('en-US')} stars today`;
  }
  if (typeof value !== 'string') return null;
  const digits = /[\d,]+/.exec(value);
  if (!digits) return null;
  const num = Number(digits[0].replace(/,/g, ''));
  if (!Number.isFinite(num)) return null;
  return `${num.toLocaleString('en-US')} stars today`;
}

// ---- 概览 / 观察 ----

function buildOverview(markdown, items, date) {
  const count = items.length;
  const top = items[0];
  const topText = top ? `${top.name}（${top.delta ?? '—'}）` : '';
  const langTally = tallyLanguages(items);
  let text = `${date} GitHub Trending 共收录 ${count} 个项目，榜首 ${topText}。语言分布：${langTally}。`;

  const keyword = /(?:今日关键词|核心主题)[：:]\s*([^\n]+)/.exec(markdown);
  if (keyword) {
    const cleaned = keyword[1].replace(/\*\*/g, '').trim();
    if (cleaned) text += ` 核心主题：${cleaned}。`;
  }
  return text;
}

function tallyLanguages(items) {
  const counts = new Map();
  for (const item of items) {
    const lang = item.language || '未标注';
    counts.set(lang, (counts.get(lang) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([lang, n]) => `${lang} ${n}`)
    .join('、');
}

function buildObservation(markdown, items) {
  const bullets = extractTrendBullets(markdown);
  if (bullets.length > 0) return bullets;

  // 无文本趋势段落时，从数据中生成 Top 3 增量观察
  const movers = [...items]
    .filter((item) => item.delta)
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 3);
  return movers.map(
    (item) => `${item.name} 今日 ${item.delta ?? '—'}，是当日增量最高的项目之一。`,
  );
}

function extractTrendBullets(markdown) {
  const lines = markdown.split(/\r?\n/);
  let sectionStart = -1;
  let sectionEnd = lines.length;

  for (let i = 0; i < lines.length; i += 1) {
    const h2 = /^##\s+(.+)$/.exec(lines[i]);
    if (h2 && /今日趋势观察|趋势观察|关键趋势|整体观察|今日趋势/.test(h2[1])) {
      sectionStart = i;
      break;
    }
  }
  if (sectionStart === -1) return [];

  // 从命中段落继续向下，定位最具体的子段落（如 ### 关键趋势）
  let subStart = sectionStart;
  for (let i = sectionStart + 1; i < lines.length; i += 1) {
    const h3 = /^###\s+(.+)$/.exec(lines[i]);
    if (h3 && /关键趋势/.test(h3[1])) {
      subStart = i;
      break;
    }
    if (/^##\s+/.test(lines[i])) {
      sectionEnd = i;
      break;
    }
  }

  const body = lines.slice(subStart + 1, sectionEnd);
  const bullets = [];
  for (const line of body) {
    if (line.includes('|')) continue; // 跳过分布表格
    const bullet = /^[-*]\s+(.+)$/.exec(line);
    const numbered = /^\d+[.、]\s+(.+)$/.exec(line);
    const match = bullet ?? numbered;
    if (!match) continue;
    const cleaned = match[1].replace(/\*\*/g, '').trim();
    if (cleaned) bullets.push(cleaned);
  }
  return bullets;
}

// ---- 渲染 ----

function renderIndexBody(items, overview, observation) {
  const projects = items
    .map((item) => {
      const lines = [`### ${item.rank}. ${item.name}`, ''];
      lines.push(`- 地址：${item.url}`);
      lines.push(`- 简介：${item.description}`);
      lines.push(`- 语言：${item.language}`);
      lines.push(`- 今日新增：${item.delta ?? '—'}`);
      lines.push(`- 标签：${(item.tags ?? []).join('、') || '—'}`);
      lines.push('');
      if (item.comment) lines.push(item.comment);
      return lines.join('\n');
    })
    .join('\n\n');

  const observationBody = observation.map((line) => `- ${line}`).join('\n');

  return [
    '## 今日概览',
    '',
    overview,
    '',
    '## 重点项目',
    '',
    projects,
    '',
    '## 观察',
    '',
    observationBody,
    '',
  ].join('\n');
}

function buildDescription(items, date) {
  const top = items[0];
  if (top) return `${date} GitHub Trending 榜首为 ${top.name}，当日共收录 ${items.length} 个项目。`;
  return `${date} GitHub Trending 共收录 ${items.length} 个项目。`;
}

// 轻量 front matter 序列化（避免引入 gray-matter 依赖）
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
      for (const entry of value) yaml.push(`  - ${entry}`);
    } else if (typeof value === 'boolean') {
      yaml.push(`${key}: ${value}`);
    } else if (key === 'date' || key === 'rankingKey') {
      // 加引号防止 YAML 把日期解析为 Date 对象
      yaml.push(`${key}: '${value}'`);
    } else {
      yaml.push(`${key}: ${value}`);
    }
  }
  yaml.push('---');
  return `${yaml.join('\n')}\n\n${content.trim()}\n`;
}

function parseArguments() {
  const positional = process.argv.slice(2).filter((arg) => !arg.startsWith('--'));
  const overwrite = process.argv.slice(2).includes('--overwrite');
  if (positional.length < 1) {
    throw new Error('usage: node scripts/import-github-trending.mjs <sourceDir> [targetRoot] [--overwrite]');
  }
  return {
    sourceDir: path.resolve(positional[0]),
    targetRoot: path.resolve(positional[1] ?? process.cwd()),
    overwrite,
  };
}

main().catch((error) => {
  console.error(`import-github-trending failed: ${error.message}`);
  process.exitCode = 1;
});
