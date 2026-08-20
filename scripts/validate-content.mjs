#!/usr/bin/env node

import path from 'node:path';

import {
  discoverBundles,
  readBundle,
  validateBundle,
} from './lib/ranking-content.mjs';

const projectRoot = process.cwd();
const rankingsRoot = path.join(projectRoot, 'content', 'rankings');

try {
  const bundlePaths = await discoverBundles(rankingsRoot);
  const errors = [];

  for (const bundlePath of bundlePaths) {
    const bundle = await readBundle(bundlePath);
    const relativePath = path.relative(projectRoot, bundlePath);

    for (const error of validateBundle(bundle)) {
      errors.push(`${relativePath}: ${error}`);
    }
  }

  if (errors.length > 0) {
    console.error(`ranking content invalid (${errors.length} errors)`);
    errors.forEach((error) => console.error(`- ${error}`));
    process.exitCode = 1;
  } else {
    console.log(`ranking content valid (${bundlePaths.length} bundles)`);
  }
} catch (error) {
  console.error(`ranking content validation failed: ${error.message}`);
  process.exitCode = 1;
}
