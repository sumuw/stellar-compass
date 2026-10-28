import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { test } from 'node:test';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('hugo.toml 日期契约：timeZone 已固定，buildFuture 豁免已移除', async () => {
  const config = await readFile(path.join(root, 'hugo.toml'), 'utf8');
  assert.match(config, /timeZone\s*=\s*['"]Asia\/Shanghai['"]/,
    '必须设置 timeZone，否则无时区 date 的解析随运行环境（本机 +08 / CI 的 UTC）漂移');
  assert.doesNotMatch(config, /^\s*buildFuture\s*=/m,
    'buildFuture 豁免必须移除——date 为纯归属日后，Hugo 对未来内容的默认拦截应保持生效');
});

test('importer 不得再硬编码带时间分量的 front matter date', async () => {
  const scripts = [
    'scripts/import-github-trending.mjs',
    'scripts/import-film-radar.mjs',
    'scripts/import-reference-rankings.mjs',
  ];
  for (const rel of scripts) {
    const source = await readFile(path.join(root, rel), 'utf8');
    assert.doesNotMatch(source, /T08:00:00\+08:00|T05:05:00\+08:00/,
      `${rel} 不得硬编码时间分量——front matter date 必须是纯日历日期（榜单归属日）`);
  }
});

test('全站 front matter date 均为纯日历日期', async () => {
  const calendarDate = /^\d{4}-\d{2}-\d{2}$/;
  const offenders = [];

  async function walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(p);
        continue;
      }
      if (entry.name !== 'index.md') continue;
      const text = await readFile(p, 'utf8');
      const match = /^date:[ \t]*(.+)$/m.exec(text);
      if (!match) {
        offenders.push(`${p}: 无 date 字段`);
        continue;
      }
      const value = match[1].trim().replace(/^['"]|['"]$/g, '');
      if (!calendarDate.test(value)) {
        offenders.push(`${p}: date="${value}" 不是纯日历日期`);
      }
    }
  }

  await walk(path.join(root, 'content'));
  assert.deepEqual(offenders, [],
    'date 含时间分量会被 Hugo 按 timeZone 解析为具体时刻，语义退回"发布时间"；\n'
    + '纯日期 = 榜单归属日，恒早于凌晨构建时刻，不会被 buildFuture 拦截逻辑误伤');
});
