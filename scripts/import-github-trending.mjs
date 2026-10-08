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
  // 只在「榜单详情 / 项目详情」章节内解析条目；进入其它二级章节（整体观察、
  // 今日速览、主题分布、今日主题观察等）时立即结束当前条目，避免章节正文
  // 被当成最后一条项目的简评。
  // 默认为 true：兼容项目条目直接写在 H1 之下、没有二级章节标题的旧报告。
  let inDetailSection = true;

  for (const line of lines) {
    // 条目标题可能出现在不同层级：
    //   最早期（08-07 等）：## 1. TencentCloud / TencentDB-Agent-Memory
    //   旧版：### 1. owner/repo 🆕
    //   新版：### 1. [owner/repo](https://github.com/owner/repo) — ★ +4,260
    // 因此标题匹配必须放在章节处理之前，否则 H2 版式的条目会先被当成章节标题吞掉。
    const heading = matchItemHeading(line);
    if (heading) {
      if (current) items.push(current);
      // 新版把 URL 放在标题链接里，且不再单独列出「今日新增」，改从标题尾部的 ★ 数值提取
      const deltaValue = extractHeadingDelta(heading.rest);
      const delta = deltaValue ? normalizeDelta(deltaValue) : undefined;
      current = {
        rank: items.length + 1,
        name: heading.name,
        url: heading.url,
        tags: [],
        language: '未标注',
        ...(delta ? { delta } : {}),
      };
      inDetailSection = true;
      continue;
    }

    if (/^##\s+/.test(line)) {
      if (current) {
        items.push(current);
        current = null;
      }
      inDetailSection = /详情|项目|榜单/.test(line);
      continue;
    }
    if (!inDetailSection) continue;

    if (!current) continue;
    applyFieldLine(current, line);
  }
  if (current) items.push(current);

  // 新版报告常把「今日新增 / Star 总数 / 标签」只写在速览表里，逐项详情里
  // 要么没有、要么用脚本没覆盖的分隔符写法。这里用速览表为每条补齐缺失字段，
  // 详情优先，速览表只做兜底。
  const overviewIndex = parseOverviewIndex(markdown);

  return items.map((item, index) => {
    const extra = overviewIndex.get(item.name) ?? {};
    const language = item.language && item.language !== '未标注' ? item.language : (extra.language ?? '未标注');
    return {
      rank: index + 1,
      name: item.name,
      // 部分版式的标题与详情都不含地址，用 owner/repo 兜底出仓库 URL
      url: item.url || extra.url || fallbackUrl(item.name),
      description: item.description ?? '',
      language,
      ...(item.stars != null ? { stars: item.stars } : {}),
      ...(item.stars == null && extra.stars != null ? { stars: extra.stars } : {}),
      ...(item.delta != null ? { delta: item.delta } : {}),
      ...(item.delta == null && extra.delta ? { delta: extra.delta } : {}),
      tags: item.tags?.length ? item.tags : (extra.tags ?? []),
      comment: item.comment ?? '',
    };
  });
}

// ---- 速览表索引 ----

function parseOverviewIndex(markdown) {
  const lines = markdown.split(/\r?\n/);
  const index = new Map();
  let columns = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('|')) continue;
    const cells = splitTableRow(trimmed);

    if (columns === null) {
      const mapped = mapOverviewColumns(cells);
      if (mapped) columns = mapped;
      continue;
    }
    if (cells.every((cell) => /^[-:\s]*$/.test(cell))) continue; // 表头分隔行

    const nameCell = cells[columns.project] ?? '';
    const linkName = /\[([^\]]+)\]\([^)]*\)/.exec(nameCell)?.[1];
    const name = (linkName ?? nameCell.replace(/\*\*/g, '').replace(/`/g, '').trim());
    if (!/^[A-Za-z0-9._-]+\/[A-Za-z0-9._-]+$/.test(name)) continue;

    const url = /\[[^\]]+\]\(([^)]+)\)/.exec(nameCell)?.[1] ?? '';
    const stars = columns.stars != null ? parseNumber(cells[columns.stars] ?? '') : null;
    const delta = columns.delta != null ? normalizeDelta(cells[columns.delta] ?? '') : null;
    const tags = columns.tags != null ? parseOverviewTags(cells[columns.tags] ?? '') : [];
    const language = columns.language != null ? (cells[columns.language] ?? '').replace(/\*\*/g, '').trim() : '';

    if (!index.has(name)) index.set(name, {});
    const entry = index.get(name);
    if (url && !entry.url) entry.url = url;
    if (stars != null && entry.stars == null) entry.stars = stars;
    if (delta && !entry.delta) entry.delta = delta;
    if (tags.length && !entry.tags?.length) entry.tags = tags;
    if (language && !entry.language) entry.language = language;
  }

  return index;
}

function splitTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function mapOverviewColumns(cells) {
  const find = (pattern) => cells.findIndex((cell) => pattern.test(cell.replace(/\*\*/g, '')));
  const project = find(/项目|仓库/);
  if (project === -1) return null;
  const columns = {
    project,
    language: find(/语言/),
    delta: find(/新增|增量|today/i),
    stars: find(/star|星/i),
    tags: find(/标签|主题/),
  };
  // 至少要能补出一项有效数据，否则这张表不是速览表（如主题分布表）
  if (columns.delta === -1 && columns.stars === -1 && columns.tags === -1) return null;
  return columns;
}

function parseOverviewTags(value) {
  const text = (value ?? '').replace(/\*\*/g, '').replace(/`/g, '').trim();
  if (!text) return [];
  const parts = text.includes('/') ? text.split('/') : text.split('、');
  const seen = new Set();
  const tags = [];
  for (const part of parts) {
    const cleaned = part.trim();
    if (!cleaned) continue;
    if (seen.has(cleaned)) continue;
    seen.add(cleaned);
    tags.push(cleaned);
  }
  return tags;
}

function matchItemHeading(line) {
  const matched = /^(#{2,3})\s+\d+\.\s+(.+)$/.exec(line);
  if (!matched) return null;
  const isH2 = matched[1].length === 2;
  const rest = matched[2];

  const link = /^\[([^\]]+)\]\(([^)]+)\)(.*)$/.exec(rest);
  if (link) {
    return { name: link[1], url: link[2], rest: link[3] };
  }

  // 最早期版式（08-07 等）用 H2 写条目，且把仓库名写成「owner / repo」
  // （斜杠两侧带空格），需归一化成 owner/repo，否则既取不到规范名也拼不出 fallback URL。
  // H3 层级则严格要求仓库名紧跟在序号后、不含空格——否则
  // 「### 1. AI Agent / Skills 赛道继续主导」这类趋势小结会被误当成条目。
  const repo = isH2
    ? /([A-Za-z0-9._-]+\s*\/\s*[A-Za-z0-9._-]+)/.exec(rest)
    : /^([A-Za-z0-9._-]+\/[A-Za-z0-9._-]+)/.exec(rest);
  if (!repo) return null;

  const tail = rest.slice(repo.index + repo[0].length);
  // 仅 H2 层级需要这条防护：老版式允许仓库名带空格，容易把
  // 「## 1. AI Agent / Skills 赛道…」这类小结误判成条目。
  // H3 层级不能加——新版标题普遍是「### 1. owner/repo — 增量第一…」，尾部必有中文。
  if (isH2 && /[\u4e00-\u9fa5]/.test(tail)) return null;

  return {
    name: repo[1].replace(/\s*\/\s*/g, '/'),
    url: '',
    rest: tail,
  };
}

// 报告在一行内串联多个字段时用到的分隔符
const FULLWIDTH_BAR = '\uFF5C';
const MIDDLE_DOT = '\u00B7';

function matchKeyValue(segment) {
  const text = (segment ?? '').trim();

  return (
    /^(?:[-*]\s+)?\*\*(.+?)\*\*\s*[：:]\s*(.+)$/.exec(text) ||
    /^[-*]\s+(.+?)\s*[：:]\s*(.+)$/.exec(text) ||
    // 无冒号写法：Star 23,941 / Fork 2,969 / 总 Star：17,224（…）
    /^(总\s*star|star|fork|stars|forks)\s*[：:]?\s*([\d,]+)/i.exec(text)
  );
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
  // 必须要求行以 | 开头：否则「简介：Prompt as Code | GPT-Image2…」这类
  // 值内含单个 | 的普通键值行会被误判成表格而整行丢弃。
  if (trimmed.startsWith('|')) {
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
  const kv = matchKeyValue(trimmed);
  if (kv) {
    captureField(item, kv[1], kv[2]);
    return;
  }

  // 其余非空行视为简评/评论段落
  item.comment = (item.comment ? `${item.comment}\n` : '') + trimmed;
}

function captureField(item, rawKey, rawValue) {
  const key = rawKey.replace(/\*\*/g, '').trim().toLowerCase();
  let value = rawValue.trim();

  // 一个字段行里常把多个字段用全角竖线串在一起：
  //   **主要语言**：JavaScript｜**Star 总数**：252,464｜**Fork**：37,883
  // 第一段是本字段的值，其余片段递归解析，避免把整行塞进 language。
  // 分隔写法有两种：全角竖线（JavaScript｜**Star 总数**：252,464）和
  // 中间点（语言 / 数据：C++ · Star 23,941 · Fork 2,969）。后者只在语言类
  // 字段上拆，避免把简介里出现的 · 误切。
  let separator = null;
  if (value.includes(FULLWIDTH_BAR)) {
    separator = FULLWIDTH_BAR;
  } else {
    // 半角竖线与中间点都可能被当成分隔符，但只有在后续片段确实形如
    // 「**字段**：值」时才拆——否则会把简介里出现的 · 或 | 误切成字段。
    // 例：**Star 总数**：17,430 · **今日新增**：+843
    //     **主要语言**：Python | **今日新增**：+683 | **总 Star**：88,119
    for (const candidate of ['|', MIDDLE_DOT]) {
      if (!value.includes(candidate)) continue;
      const parts = value.split(candidate);
      if (parts.slice(1).some((part) => matchKeyValue(part))) {
        separator = candidate;
        break;
      }
    }
  }

  if (separator) {
    const parts = value.split(separator);
    value = parts[0].trim();

    for (const part of parts.slice(1)) {
      const nested = matchKeyValue(part);
      if (nested) captureField(item, nested[1], nested[2]);
    }
  }

  if (/简评|评论/.test(key)) {
    item.comment = value;
    return;
  }
  if (/项目地址|地址/.test(key)) {
    // 报告里地址常写成 <https://…> 的自动链接形式，需剥掉尖括号
    const url = extractUrl(value);
    if (url) item.url = url;
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
  // 报告里 Star 字段名顺序不固定：「Star 总数」/「总 Star」/「Stars」都要认，
  // 「Star / Fork：49,965 / 5,550」这类合并字段取第一个数字当 Star 总数；
  // 但纯 Fork 字段（「Fork 数」/「Fork / Star」）不能当成 Star。
  // 「今日新增 Star」这类字段名同时含 star 与新增语义，必须让给 delta 分支处理
  if (/star/i.test(key) && !/^\W*fork/i.test(key) && !/新增|增量|delta|today/i.test(key)) {
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

function extractHeadingDelta(rest) {
  // 标题里的当日增量写法一直在变，按顺序尝试：
  //   ★ +3,993    —— 星号在前（08-27 / 08-31 版式）
  //   +3 ⭐       —— 星号在后（09-02 版式）
  //   ，+2,206    —— 无星号，直接跟在说明后（09-06 版式）
  //   +1,539      —— 无星号，破折号后直接是增量（09-06 版式变体）
  return (
    /[★⭐]\s*\+?([\d,]+)/.exec(rest)?.[1] ??
    /\+?([\d,]+)\s*[★⭐]/.exec(rest)?.[1] ??
    /[，,]\s*\+([\d,]+)/.exec(rest)?.[1] ??
    /\+([\d,]+)/.exec(rest)?.[1] ??
    null
  );
}

function extractUrl(value) {
  const match = /<?(https?:\/\/[^\s<>）)】\]]+)>?/.exec(value ?? '');
  return match ? match[1] : null;
}

function fallbackUrl(name) {
  return /^[A-Za-z0-9._-]+\/[A-Za-z0-9._-]+$/.test(name ?? '')
    ? `https://github.com/${name}`
    : '';
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

  // 无文本趋势段落时，从数据中生成 Top 3 增量观察。
  // 注意：必须按 delta 数值降序取，不能按 rank 取——rank 越大代表排名越靠后，
  // 早期版本按 rank 降序取到的是榜单末位项目，却仍标注「增量最高」，与实际相反。
  const movers = [...items]
    .filter((item) => item.delta)
    .sort((a, b) => deltaValue(b) - deltaValue(a))
    .slice(0, 3);
  return movers.map(
    (item, index) => `${item.name} 今日 ${item.delta ?? '—'}，居当日增量第 ${index + 1} 位。`,
  );
}

function deltaValue(item) {
  const match = /[\d,]+/.exec(item.delta ?? '');
  if (!match) return 0;
  const num = Number(match[0].replace(/,/g, ''));
  return Number.isFinite(num) ? num : 0;
}

function extractTrendBullets(markdown) {
  const lines = markdown.split(/\r?\n/);
  let sectionStart = -1;
  let sectionEnd = lines.length;

  for (let i = 0; i < lines.length; i += 1) {
    const h2 = /^##\s+(.+)$/.exec(lines[i]);
    if (h2 && /今日趋势观察|趋势观察|主题观察|关键趋势|整体观察|今日趋势/.test(h2[1])) {
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
