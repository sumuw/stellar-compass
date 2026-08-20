/**
 * Import daily film radar reports from the automation output directory
 * into Hugo leaf bundles under content/rankings/film-radar/daily/.
 *
 * Each bundle gets:
 *   index.md     — front matter + original report body (minus the H1 heading)
 *   ranking.json — structured items from the "今日新推荐" section
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');
const sourceDir = 'D:/cache/WorkBuddy/automation-2026-08-11-09-21-56/outputs';
const contentRoot = join(projectRoot, 'content/rankings/film-radar/daily');

// Ranking items extracted from each report's "今日新推荐" section.
const rankingData = {
  '2026-08-11': [
    { rank: 1, name: 'Re:Zero Season 4（Re:从零开始的异世界生活 第四季）', url: 'https://www.crunchyroll.com', description: 'MAL 9.16，IMDb 9.4，异世界动画第四季，MAL 历史第二高分。', type: 'TV动画', platform: 'Crunchyroll', score: '95/100 🏆', tags: ['动画', '异世界', '日本'], comment: 'MAL 历史第二高分动画（仅次于葬送的芙莉莲 S1），IMDb 单集一度满分。第四季被誉为此系列最佳表现。' },
    { rank: 2, name: '铁拳教育（Glory）', url: 'https://www.netflix.com', description: 'Netflix 2026上半年韩剧播放量冠军，豆瓣8.7·IMDb8.5。', type: '韩剧', platform: 'Netflix', score: '93/100 🔥', tags: ['韩剧', '动作', '社会议题'], comment: 'Netflix 2026上半年韩剧播放量冠军（4820万次观看），进入91个国家Top10。导演洪钟灿（《少年法庭》）操刀。' },
    { rank: 3, name: '寡妇湾（Widow\'s Bay）', url: 'https://tv.apple.com', description: 'RT 98%影评/93%观众，斯蒂芬·金公开推荐。', type: '恐怖喜剧', platform: 'Apple TV+', score: '91/100 🔥', tags: ['恐怖喜剧', '悬疑', '美国'], comment: 'RT 98%近满分认证新鲜，新英格兰沿海小镇的超自然诅咒+冷面黑色幽默。已续订第二季。' },
    { rank: 4, name: '猫猫的奇幻漂流（Flow）', url: 'https://v.qq.com', description: '第97届奥斯卡最佳动画长片，豆瓣8.5。', type: '动画电影', platform: '腾讯视频', score: '90/100 🔥', tags: ['动画', '冒险', '奥斯卡'], comment: '全片无对白，以一只猫的视角展开末日洪水中的生存旅程。拉脱维亚独立动画奇迹。' },
    { rank: 5, name: 'BLEACH 境·境界 千年血战篇 - 训神谭', url: 'https://www.hulu.com', description: 'MAL 9.04，千年血战篇第三季。', type: 'TV动画', platform: 'Hulu / Disney+', score: '89/100 🔥', tags: ['动画', '热血', '日本'], comment: '小丑社倾力制作，战斗场面与文戏兼具，是BLEACH系列动画化的巅峰表现。' },
    { rank: 6, name: '迷恋（Obsession）', url: 'https://www.peacocktv.com', description: 'IMDb 8.1 + RT双94%的惊悚片。', type: '惊悚电影', platform: 'PVOD / Peacock', score: '85/100 ⭐', tags: ['惊悚', '剧情', '美国'], comment: 'IMDb 8.1 + RT双94%的惊悚片，口碑扎实。院线转PVOD后可通过数字租赁观看。' },
    { rank: 7, name: '暗影蜘蛛人（Spider-Noir）', url: 'https://www.primevideo.com', description: 'RT 92%·IMDb 7.7，尼古拉斯·凯奇首次领衔电视剧。', type: '犯罪剧', platform: 'Prime Video', score: '83/100 🧪', tags: ['犯罪', '黑色电影', '美国'], comment: '纯粹的1930年代硬派黑色侦探风格，雾气缭绕的纽约街头+爵士乐配乐，美学野心极高。' },
    { rank: 8, name: '斯特林角（Sterling Point）', url: 'https://www.primevideo.com', description: 'RT 92%影评/86%观众，刚上线一周的新剧。', type: '悬疑剧', platform: 'Prime Video', score: '81/100 🧪', tags: ['剧情', '悬疑', '美国'], comment: 'RT影评92%开局亮眼，作为本周最新上线的作品，值得关注后续口碑走向。' },
  ],
  '2026-08-12': [
    { rank: 1, name: '重器（Heavy Weapon）', url: 'https://www.iqiyi.com', description: '豆瓣8.7开分，CCTV-8黄金档收视破2全国第一。', type: '年代法治剧', platform: 'CCTV-8 / 爱奇艺', score: '91/100 🔥', tags: ['法治剧', '年代剧', '中国大陆'], comment: '全景式呈现1979-1997年中国法治建设拓荒历程，法律专业度+人性温度+群像张力三方同时发力。' },
    { rank: 2, name: '异形：地球（Alien: Earth）', url: 'https://www.hulu.com', description: 'RT 87-93% Certified Fresh，IMDb 7.1。', type: '科幻惊悚', platform: 'FX / Hulu', score: '90/100 🔥', tags: ['科幻', '惊悚', '异形IP'], comment: 'Fargo与Legion的诺亚·霍利首次将Alien IP剧化，世界观建构+角色驱动+类型片本能三者同时稳固。' },
  ],
  '2026-08-13': [
    { rank: 1, name: '克拉克森的农场 第五季（Clarkson\'s Farm S5）', url: 'https://www.primevideo.com', description: '豆瓣9.6·IMDb 9.0，连续5季维持9.5+无烂季。', type: '真人秀', platform: 'Prime Video', score: '95/100 🏆', tags: ['真人秀', '农场', '英国'], comment: '快乐外壳+沉重内核——每集都是"农场大型事故现场"，但笑点背后是英国农业体系性问题。' },
    { rank: 2, name: '狂怒追缉（Furious）', url: 'https://www.hulu.com', description: 'RT 98% Certified Fresh·Metacritic 81。', type: '犯罪惊悚', platform: 'Hulu / Disney+', score: '88/100 ⭐', tags: ['犯罪', '心理惊悚', '双女主'], comment: '双女主心理战+罪案悬疑，跳出传统罪案剧的"警察抓坏人"模板，呈现人物的内心拉扯。' },
    { rank: 3, name: '护工不是人（Ann Droid）', url: 'https://www.bbc.co.uk/iplayer', description: '豆瓣8.4·BBC首播400万观众。', type: '情景喜剧', platform: 'BBC iPlayer', score: '82/100 🧪', tags: ['情景喜剧', 'AI', '英国'], comment: '笑点真实+泪点不刻意——"AI机器人情商为零"的喜剧外壳，内里是对"养儿防老"幻想的彻底撕碎。' },
  ],
  '2026-08-20': [
    { rank: 1, name: '绿灯军团（Lanterns）', url: 'https://www.max.com', description: 'RT 95%影评/88%观众·IMDb 8.6。', type: '超级英雄', platform: 'HBO Max', score: '91/100 🔥', tags: ['超级英雄', '犯罪悬疑', 'DC'], comment: '放弃超级英雄宇宙奇观路线，走True Detective式接地侦探剧。角色塑造优先于特效。' },
    { rank: 2, name: '百年孤独 第二部（One Hundred Years of Solitude Part 2）', url: 'https://www.netflix.com', description: 'Part 1豆瓣9.2·RT 96%·IMDb单集最高9.5。', type: '文学改编', platform: 'Netflix', score: '89/100 ⭐', tags: ['文学改编', '魔幻现实主义', '拉美'], comment: 'Netflix对加西亚·马尔克斯"不可能被影视化"的文学巨著的改编，魔幻现实主义被当作叙事语言而非视觉奇观。' },
    { rank: 3, name: '太平年（Taiping Year）', url: 'https://www.iqiyi.com', description: '豆瓣8.5·白玉兰最佳中国电视剧+最佳原创编剧+国际传播奖。', type: '历史正剧', platform: '爱奇艺 / 芒果TV / 腾讯视频', score: '88/100 ⭐', tags: ['历史正剧', '朝堂权谋', '中国大陆'], comment: '对历史的尊重达到近年国剧罕见程度，白宇把"放下王位换太平"的复杂君主演活了。' },
    { rank: 4, name: '侠探杰克 第四季（Reacher S4）', url: 'https://www.primevideo.com', description: 'RT 91%影评/92%观众·IMDb 8.3。', type: '动作犯罪', platform: 'Prime Video', score: '87/100 ⭐', tags: ['动作', '犯罪', '惊悚'], comment: '动作剧罕见的影评-观众双向高认可，S4观众分飙升至92%+，被多份影评称为"系列最佳一季"。' },
  ],
};

const reportMeta = {
  '2026-08-11': { title: '今日全球高分影视雷达 2026-08-11', description: '首次执行，8 部跨平台高分影视推荐，涵盖动画、韩剧、恐怖喜剧、奥斯卡动画等。', tags: ['影视', '推荐', '评分'] },
  '2026-08-12': { title: '今日全球高分影视雷达 2026-08-12', description: '第2次执行，2 部正式推荐：国产年代法治大剧《重器》与 FX 科幻剧《异形：地球》。', tags: ['影视', '推荐', '评分'] },
  '2026-08-13': { title: '今日全球高分影视雷达 2026-08-13', description: '第3次执行，3 部正式推荐：《克拉克森的农场》S5、《狂怒追缉》、《护工不是人》。', tags: ['影视', '推荐', '评分'] },
  '2026-08-20': { title: '今日全球高分影视雷达 2026-08-20', description: '第4次执行，4 部正式推荐：《绿灯军团》、《百年孤独》Part 2、《太平年》、《侠探杰克》S4。', tags: ['影视', '推荐', '评分'] },
};

async function importReport(dateKey) {
  const sourceFile = join(sourceDir, `daily-film-radar-${dateKey}.md`);
  const slug = `film-radar-daily-${dateKey}`;
  const bundleDir = join(contentRoot, slug);

  const rawMarkdown = await readFile(sourceFile, 'utf8');

  // Strip the first H1 heading line (the "# 🎬 ..." line)
  const lines = rawMarkdown.split('\n');
  const firstH1Index = lines.findIndex((line) => line.startsWith('# '));
  let body;
  if (firstH1Index !== -1) {
    // Remove the H1 line and any immediately following blank lines
    let endIdx = firstH1Index + 1;
    while (endIdx < lines.length && lines[endIdx].trim() === '') {
      endIdx++;
    }
    body = lines.slice(endIdx).join('\n');
  } else {
    body = rawMarkdown;
  }

  const meta = reportMeta[dateKey];
  const frontMatter = [
    '---',
    `title: ${JSON.stringify(meta.title)}`,
    `description: ${JSON.stringify(meta.description)}`,
    `date: '${dateKey}T08:00:00+08:00'`,
    `rankingKey: '${dateKey}'`,
    `slug: ${slug}`,
    'categories:',
    '  - film-radar',
    'periods:',
    '  - daily',
    'tags:',
    ...meta.tags.map((tag) => `  - ${tag}`),
    'draft: false',
    '---',
    '',
    '',
  ].join('\n');

  const indexContent = frontMatter + body + '\n';
  await mkdir(bundleDir, { recursive: true });
  await writeFile(join(bundleDir, 'index.md'), indexContent, 'utf8');

  const ranking = {
    category: 'film-radar',
    period: 'daily',
    date: dateKey,
    source: 'automation-film-radar',
    sourceUrl: 'https://www.workbuddy.cn',
    items: rankingData[dateKey],
  };
  await writeFile(join(bundleDir, 'ranking.json'), JSON.stringify(ranking, null, 2) + '\n', 'utf8');

  console.log(`✓ ${slug}: ${rankingData[dateKey].length} items imported`);
}

async function main() {
  for (const dateKey of Object.keys(rankingData)) {
    await importReport(dateKey);
  }
  console.log('All film-radar bundles imported.');
}

main().catch((error) => {
  console.error('Import failed:', error);
  process.exit(1);
});
