#!/usr/bin/env node

import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

import matter from 'gray-matter';

const defaultSourceRoot = 'D:\\work\\workspace\\codex\\my';
const allowedCategories = new Set(['github', 'movie', 'tv', 'ai', 'other']);
const allowedPeriods = new Set(['daily', 'weekly', 'monthly']);

async function main() {
  const { sourceRoot, targetRoot, overwrite } = parseArguments(
    process.argv.slice(2),
  );
  const plans = await buildImportPlans(sourceRoot, targetRoot);
  const conflicts = [];

  for (const plan of plans) {
    for (const file of plan.files) {
      file.existingContent = await readExisting(file.path);
      if (
        file.existingContent !== undefined &&
        file.existingContent !== file.content
      ) {
        conflicts.push(path.relative(targetRoot, file.path));
      }
    }
  }

  if (conflicts.length > 0 && !overwrite) {
    throw new Error(
      `conflicts found:\n${conflicts.map((file) => `- ${file}`).join('\n')}\n` +
        'rerun with --overwrite to replace conflicting files',
    );
  }

  let written = 0;
  let unchanged = 0;

  for (const plan of plans) {
    const needsWrite = plan.files.some(
      (file) => file.existingContent !== file.content,
    );

    if (!needsWrite) {
      unchanged += 1;
      continue;
    }

    await mkdir(plan.bundlePath, { recursive: true });
    for (const file of plan.files) {
      if (file.existingContent !== file.content) {
        await writeFile(file.path, file.content, 'utf8');
      }
    }
    written += 1;
  }

  console.log(
    `imported ${plans.length} ranking bundles ` +
      `(${written} written, ${unchanged} unchanged)`,
  );
}

function parseArguments(argumentsList) {
  const overwrite = argumentsList.includes('--overwrite');
  const unknownOptions = argumentsList.filter(
    (argument) => argument.startsWith('--') && argument !== '--overwrite',
  );
  const positional = argumentsList.filter((argument) => !argument.startsWith('--'));

  if (unknownOptions.length > 0 || positional.length > 2) {
    throw new Error(
      'usage: node scripts/import-reference-rankings.mjs ' +
        '[sourceRoot] [targetRoot] [--overwrite]',
    );
  }

  return {
    sourceRoot: path.resolve(positional[0] ?? defaultSourceRoot),
    targetRoot: path.resolve(positional[1] ?? process.cwd()),
    overwrite,
  };
}

async function buildImportPlans(sourceRoot, targetRoot) {
  const markdownRoot = path.join(sourceRoot, 'src', 'content', 'rankings');
  const entries = await readdir(markdownRoot, { withFileTypes: true });
  const markdownFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => entry.name)
    .sort();

  const plans = [];
  for (const markdownFile of markdownFiles) {
    plans.push(
      await buildImportPlan(
        sourceRoot,
        targetRoot,
        path.join(markdownRoot, markdownFile),
      ),
    );
  }
  return plans;
}

async function buildImportPlan(sourceRoot, targetRoot, markdownPath) {
  const markdown = matter(await readFile(markdownPath, 'utf8'));
  const { category, period, date: rankingKey, dataFile } = markdown.data;
  const slug = path.basename(markdownPath, path.extname(markdownPath));

  requireAllowedValue(category, 'category', allowedCategories, markdownPath);
  requireAllowedValue(period, 'period', allowedPeriods, markdownPath);
  requireString(rankingKey, 'date', markdownPath);
  requireString(dataFile, 'dataFile', markdownPath);

  const rankingPath = resolveWithin(sourceRoot, dataFile);
  const rankingContent = await readFile(rankingPath, 'utf8');
  const ranking = JSON.parse(rankingContent);

  if (
    ranking.category !== category ||
    ranking.period !== period ||
    ranking.date !== rankingKey
  ) {
    throw new Error(`${markdownPath}: front matter does not match ${dataFile}`);
  }

  const frontMatter = {
    title: markdown.data.title,
    description: markdown.data.description,
    date: sortableDate(period, rankingKey),
    rankingKey,
    slug,
    categories: [category],
    periods: [period],
    tags: markdown.data.tags,
    draft: false,
  };
  const bundlePath = path.join(
    targetRoot,
    'content',
    'rankings',
    category,
    period,
    slug,
  );

  return {
    bundlePath,
    files: [
      {
        path: path.join(bundlePath, 'index.md'),
        content: matter.stringify(markdown.content, frontMatter),
      },
      {
        path: path.join(bundlePath, 'ranking.json'),
        content: rankingContent,
      },
    ],
  };
}

function sortableDate(period, rankingKey) {
  if (period === 'daily') {
    assertCalendarDate(rankingKey);
    return `${rankingKey}T08:00:00+08:00`;
  }

  if (period === 'monthly') {
    if (!/^\d{4}-\d{2}$/.test(rankingKey)) {
      throw new Error(`invalid monthly ranking date "${rankingKey}"`);
    }
    const date = `${rankingKey}-01`;
    assertCalendarDate(date);
    return `${date}T08:00:00+08:00`;
  }

  const match = /^(\d{4})-W(\d{2})$/.exec(rankingKey);
  if (!match) {
    throw new Error(`invalid ISO week "${rankingKey}"`);
  }

  const year = Number(match[1]);
  const week = Number(match[2]);
  const januaryFourth = new Date(Date.UTC(year, 0, 4));
  const januaryFourthDay = januaryFourth.getUTCDay() || 7;
  const monday = new Date(
    Date.UTC(year, 0, 4 - januaryFourthDay + 1 + (week - 1) * 7),
  );
  const mondayDate = monday.toISOString().slice(0, 10);

  if (isoWeekKey(monday) !== rankingKey) {
    throw new Error(`invalid ISO week "${rankingKey}"`);
  }

  return `${mondayDate}T08:00:00+08:00`;
}

function isoWeekKey(date) {
  const thursday = new Date(date);
  const day = thursday.getUTCDay() || 7;
  thursday.setUTCDate(thursday.getUTCDate() + 4 - day);
  const isoYear = thursday.getUTCFullYear();
  const yearStart = new Date(Date.UTC(isoYear, 0, 1));
  const week = Math.ceil(((thursday - yearStart) / 86400000 + 1) / 7);
  return `${isoYear}-W${String(week).padStart(2, '0')}`;
}

function assertCalendarDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new Error(`invalid daily ranking date "${value}"`);
  }

  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== value) {
    throw new Error(`invalid daily ranking date "${value}"`);
  }
}

function resolveWithin(root, relativePath) {
  const resolvedRoot = path.resolve(root);
  const resolvedPath = path.resolve(resolvedRoot, relativePath);
  const relative = path.relative(resolvedRoot, resolvedPath);

  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error(`dataFile escapes source root: ${relativePath}`);
  }
  return resolvedPath;
}

function requireAllowedValue(value, field, allowedValues, markdownPath) {
  requireString(value, field, markdownPath);
  if (!allowedValues.has(value)) {
    throw new Error(`${markdownPath}: unsupported ${field} "${value}"`);
  }
}

function requireString(value, field, markdownPath) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`${markdownPath}: ${field} is required`);
  }
}

async function readExisting(filePath) {
  try {
    return await readFile(filePath, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      return undefined;
    }
    throw error;
  }
}

main().catch((error) => {
  console.error(`ranking import failed: ${error.message}`);
  process.exitCode = 1;
});
