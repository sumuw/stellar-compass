import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

import matter from 'gray-matter';

const allowedCategories = new Set(['github', 'movie', 'tv', 'ai', 'film-radar', 'other']);
const allowedPeriods = new Set(['daily', 'weekly', 'monthly']);

export async function discoverBundles(root) {
  const bundles = [];

  async function visit(directory) {
    let entries;
    try {
      entries = await readdir(directory, { withFileTypes: true });
    } catch (error) {
      if (error.code === 'ENOENT') {
        return;
      }
      throw error;
    }

    if (entries.some((entry) => entry.isFile() && entry.name === 'index.md')) {
      bundles.push(path.resolve(directory));
    }

    const childDirectories = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort();

    for (const child of childDirectories) {
      await visit(path.join(directory, child));
    }
  }

  await visit(path.resolve(root));
  return bundles.sort();
}

export async function readBundle(bundlePath) {
  const resolvedPath = path.resolve(bundlePath);
  const errors = [];
  let frontMatter;
  let content;
  let ranking;

  try {
    const markdown = await readFile(path.join(resolvedPath, 'index.md'), 'utf8');
    const parsed = matter(markdown);
    frontMatter = parsed.data;
    content = parsed.content;
  } catch (error) {
    errors.push(readError('index.md', error));
  }

  try {
    const json = await readFile(path.join(resolvedPath, 'ranking.json'), 'utf8');
    ranking = JSON.parse(json);
  } catch (error) {
    errors.push(readError('ranking.json', error));
  }

  return {
    path: resolvedPath,
    frontMatter,
    content,
    ranking,
    errors,
  };
}

export function validateBundle(bundle) {
  const errors = [...(bundle.errors ?? [])];
  const frontMatter = bundle.frontMatter;
  const ranking = bundle.ranking;

  if (!frontMatter) {
    if (!errors.some((error) => error.startsWith('index.md'))) {
      errors.push('index.md front matter is missing');
    }
  } else {
    validateFrontMatter(frontMatter, errors);
  }

  if (!ranking) {
    if (!errors.some((error) => error.startsWith('ranking.json'))) {
      errors.push('ranking.json content is missing');
    }
  } else {
    validateRanking(ranking, frontMatter, errors);
  }

  return errors;
}

function readError(fileName, error) {
  if (error.code === 'ENOENT') {
    return `${fileName} is missing`;
  }

  if (fileName === 'ranking.json' && error instanceof SyntaxError) {
    return `${fileName} contains invalid JSON: ${error.message}`;
  }

  return `${fileName} could not be read: ${error.message}`;
}

function validateFrontMatter(frontMatter, errors) {
  for (const field of ['title', 'description', 'rankingKey']) {
    if (!isNonEmptyString(frontMatter[field])) {
      errors.push(`front matter ${field} is required`);
    }
  }

  if (!hasDate(frontMatter.date)) {
    errors.push('front matter date is required');
  }

  validateAllowedArray(
    frontMatter.categories,
    'categories',
    allowedCategories,
    errors,
  );
  validateAllowedArray(frontMatter.periods, 'periods', allowedPeriods, errors);

  if (!Array.isArray(frontMatter.tags) || frontMatter.tags.length === 0) {
    errors.push('front matter tags must be a non-empty array');
  }

  if (typeof frontMatter.draft !== 'boolean') {
    errors.push('front matter draft must be a boolean');
  }
}

function validateAllowedArray(values, field, allowedValues, errors) {
  if (!Array.isArray(values) || values.length === 0) {
    errors.push(`front matter ${field} must be a non-empty array`);
    return;
  }

  values.forEach((value, index) => {
    if (!allowedValues.has(value)) {
      errors.push(`front matter ${field}[${index}] has unsupported value "${value}"`);
    }
  });
}

function validateRanking(ranking, frontMatter, errors) {
  if (!isNonEmptyString(ranking.category)) {
    errors.push('ranking.json category is required');
  } else if (frontMatter?.categories?.[0] !== ranking.category) {
    errors.push('ranking.json category must match front matter categories[0]');
  }

  if (!isNonEmptyString(ranking.period)) {
    errors.push('ranking.json period is required');
  } else if (frontMatter?.periods?.[0] !== ranking.period) {
    errors.push('ranking.json period must match front matter periods[0]');
  }

  if (!isNonEmptyString(ranking.date)) {
    errors.push('ranking.json date is required');
  } else if (frontMatter?.rankingKey !== ranking.date) {
    errors.push('ranking.json date must match front matter rankingKey');
  }

  if (!Array.isArray(ranking.items) || ranking.items.length === 0) {
    errors.push('ranking.json items must be a non-empty array');
    return;
  }

  ranking.items.forEach((item, index) => {
    const itemPath = `ranking.json items[${index}]`;
    const expectedRank = index + 1;

    if (item?.rank !== expectedRank) {
      errors.push(`${itemPath}.rank must be ${expectedRank}`);
    }

    for (const field of ['name', 'description']) {
      if (!isNonEmptyString(item?.[field])) {
        errors.push(`${itemPath}.${field} is required`);
      }
    }

    if (!isHttpsUrl(item?.url)) {
      errors.push(`${itemPath}.url must be an HTTPS URL`);
    }
  });
}

function hasDate(value) {
  if (value instanceof Date) {
    return !Number.isNaN(value.getTime());
  }
  return isNonEmptyString(value);
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isHttpsUrl(value) {
  if (!isNonEmptyString(value)) {
    return false;
  }

  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}
