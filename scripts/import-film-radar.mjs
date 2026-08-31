/**
 * Import daily film radar reports from the automation output directory
 * into Hugo leaf bundles under content/rankings/film-radar/daily/.
 *
 * Each bundle gets:
 *   index.md     — front matter + original report body (minus the H1 heading)
 *   ranking.json — structured items from the "今日新推荐" section
 *
 * Bundles that already exist on disk are skipped (idempotent — never
 * overwrites a previously committed bundle, e.g. the hand-curated 08-20
 * ranking.json that carries `id` fields the script does not track).
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');
const sourceDir = 'D:/cache/WorkBuddy/automation-2026-08-11-09-21-56/outputs';
const contentRoot = join(projectRoot, 'content/rankings/film-radar/daily');

// Ranking items extracted from each report's "今日新推荐" section.
// `id` mirrors the report's F-number; URLs are platform homepages (the
// source reports name platforms, not deep links, so we don't fabricate them).
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
  '2026-08-22': [
    { rank: 1, id: 'F020', name: `生命树（The Tree of Life）`, url: 'https://www.iqiyi.com', description: `豆瓣8.4·白玉兰8项提名(最佳导演+最佳女演员杨紫)·连续19天酷云全频道收视TOP1·累计触达10.7亿人次`, type: '现实题材', platform: 'CCTV-8 / 爱奇艺', score: '92/100 🔥', tags: ['现实题材', '高原守护', '中国大陆', '正午阳光'], comment: `海拔4800米高原无人区188天实景拍摄，巡山队长与基层女警守护三江源藏羚羊的故事，全程素颜+冰雹沙尘暴。杨紫白玉兰封后，胡歌特别出演。` },
    { rank: 2, id: 'F021', name: `主角（The Protagonist）`, url: 'https://v.qq.com', description: `豆瓣8.1–8.2·央视一套收视峰值4.487%·腾讯热度30236+·全网播放破13亿(2026央视一套历史收视纪录)`, type: '年代剧', platform: 'CCTV-1 / 腾讯视频', score: '87/100 ⭐', tags: ['年代剧', '秦腔', '中国大陆', '张艺谋监制'], comment: `秦腔名伶忆秦娥从放羊娃到一代秦腔大家的半生沉浮，张艺谋监制、茅盾文学奖改编。张嘉益演舅舅封神，刘浩存争议但未拖后腿。` },
    { rank: 3, id: 'F022', name: `Ride or Die`, url: 'https://www.primevideo.com', description: `RT 97–98% Tomatometer(Certified Fresh)·RT Audience 82–84%·Prime Video全球#1共17天`, type: '间谍喜剧', platform: 'Prime Video', score: '88/100 ⭐', tags: ['间谍喜剧', '公路逃亡', '双女主', '美国'], comment: `间谍喜剧+公路逃亡版末路狂花，会计师老婆+英国女刺客双女主，Hannah Waddingham与Octavia Spencer火花四溅。RT 97%是2026年Prime Video喜剧/动作类开分最高分之一。` },
    { rank: 4, id: 'F023', name: `在超市后门吸烟的二人（Smoking Behind the Supermarket with You）`, url: 'https://www.crunchyroll.com', description: `豆瓣8.0·Crunchyroll综合好评率82%·原作漫画累计销量300万册以上·2026现象级动画`, type: '治愈动画', platform: 'TBS / Crunchyroll / Netflix', score: '86/100 ⭐', tags: ['治愈', '恋爱', '社畜共鸣', '日本动画'], comment: `46岁社畜佐佐木每天去超市看收银员山田的笑容治愈自己，某晚撞见田山女士邀他在超市后门抽烟——成年人的偷来角落成社畜共鸣神作。大陆未上线(有吸烟镜头)。` },
    { rank: 5, id: 'F024', name: `蝉（CICADA）`, url: 'https://www.iqiyi.com', description: `12集精品司法悬疑·首播鹅厂热度15000+·豆瓣预测8.6(尚未开分)·#司法悬疑神剧#话题爆量`, type: '悬疑短剧', platform: '浙江卫视 / 爱奇艺 / 腾讯视频 / 咪咕', score: '83/100 🧪', tags: ['悬疑', '司法', '精品短剧', '中国大陆'], comment: `12集精品短剧不注水，刑辩律师×法官×律政精英三人在12年悬案中的法律博弈。袁玉梅(《白夜追凶》金牌制片)首次亲自执导，钟楚曦+吴镇宇。首播即出爆款相，观望至8/26看豆瓣是否站稳8.4+。` },
  ],
  '2026-08-23': [
    { rank: 1, id: 'F025', name: `Widow's Bay`, url: 'https://tv.apple.com', description: `RT 98%批评家/92%观众·IMDb 8.1–8.4·19项Emmy提名(含最佳喜剧)·Apple TV+ 2026年度大爆款`, type: '喜剧恐怖', platform: 'Apple TV+', score: '88/100 ⭐', tags: ['喜剧恐怖', '悬疑', '美国', 'Apple TV+'], comment: `小岛旅游业+都市传说+一只小丑，Guillermo del Toro公开称赞可能是有史以来最好的流媒体剧集。Betty Gilpin获Emmy客串提名，已续订S2。全季完结可一口追完。` },
    { rank: 2, id: 'F026', name: `Bleach 千年血战篇 The Calamity（Thousand-Year Blood War — The Calamity）`, url: 'https://www.hulu.com', description: `MAL 9.041(143,307评·全球第10)·IMDB整TYBW系列8.9·Studio Pierrot制作·系列最终季`, type: '动画', platform: 'Hulu / Disney+ / Ani-One', score: '88/100 ⭐', tags: ['动画', '热血', '日本', '最终季'], comment: `22年Bleach动画史上第一次把Tite Kubo真正结局搬上银幕，改编自漫画第55-74卷含原作结局。建议先看前366集或关键篇章，否则角色情感线会失重。` },
    { rank: 3, id: 'F027', name: `A Bona Fide Killer`, url: 'https://www.viki.com', description: `Nielsen Korea全国收视10.2%(第6集)·峰值11.8%·周五周六时段冠军·MBC双位数收视爆款`, type: '动作犯罪', platform: 'Rakuten Viki / Kocowa', score: '90/100 🔥', tags: ['动作犯罪', '家庭伦理', '韩剧', '双女主'], comment: `家庭主妇×退役狙击手×同床异梦的丈夫是调查她的记者，韩国MBC罕见双位数收视爆款。Gong Hyo-jin时隔15年回归MBC，收视率零下滑走势罕见。金Eun-hee编剧。` },
    { rank: 4, id: 'F028', name: `Blood Sacrifice`, url: 'https://www.netflix.com', description: `RT 86%·Nordic Watchlist 4.5/5·IMDb 6.6(争议型)·12国Netflix Top1·本季北欧剧最强黑马`, type: '北欧犯罪', platform: 'Netflix', score: '86/100 ⭐', tags: ['北欧犯罪', '家庭剧情', 'Netflix', '瑞典'], comment: `猎杀警察的连环杀手+失和父子侦探组合，主创George Kay(Lupin/Hijack)。5集4小时可一口追完，不学酒鬼侦探模板。IMDb 6.6与RT 86%差距大，反映批评家与观众严重分歧。` },
    { rank: 5, id: 'F029', name: `花开锦绣`, url: 'https://v.qq.com', description: `豆瓣8.0(10万人+评价)·微博开分8.4·8/21有效播放市占率15.4%(开播以来单日新高)·腾讯站内热度27000+`, type: '古装', platform: '腾讯视频 / 东方卫视', score: '86/100 ⭐', tags: ['古装', '女性成长', '权谋轻喜', '中国大陆'], comment: `草莽私盐贩×落难世家千金的古装公路片，邓科导演+南镇编剧+800多套明制汉服+山西敦煌实景。跳出宅斗古偶框架，女本位叙事引发讨论。开播前3集铺垫偏慢，可从第4集追。` },
  ],
  '2026-08-24': [
    { rank: 1, id: 'F030', name: `现在不是出轨的问题（이제 괜찮은 건 아니지만）`, url: 'https://www.coupangplay.com', description: `豆瓣8.2(3,371评价·4+5星78.4%)·Coupang Play历代自制剧累计观看量第1·韩国都市剧口碑榜第1`, type: '都市剧', platform: 'Coupang Play', score: '88/100 ⭐', tags: ['都市剧', '罗生门', '双女主', '韩剧'], comment: `罗生门式多视角叙事+金惠秀×赵汝贞双女主+李昌熙导演，8集小体量。围绕出不出轨的真问题不是道德判断而是中年女性处境的精准呈现。比The Terror更普世易接近。` },
    { rank: 2, id: 'F031', name: `The Terror: Devil in Silver`, url: 'https://www.amc.com', description: `RT Tomatometer 95%(本系列三季最高)·改编Victor LaValle同名爱伦·坡奖小说·Ridley Scott监制·Dan Stevens主演`, type: '恐怖', platform: 'Sky / NOW TV / AMC+', score: '91/100 🔥', tags: ['恐怖', '心理惊悚', '限定剧', '英美'], comment: `精神病院中中世纪女巫化身的怪物被惊醒，改编自Victor LaValle同名小说，Ridley Scott再度监制。95% Tomatometer+6集限定剧体量可一次追完。系列距离神作需待长期口碑发酵。` },
    { rank: 3, id: 'F032', name: `Bandar`, url: 'https://www.zee5.com', description: `The Week盛赞"One of the best prison dramas ever made"·Anurag Kashyap(《Gangs of Wasseypur》)导演·Bobby Deol×Sanya Malhotra双主演`, type: '监狱剧', platform: 'ZEE5', score: '87/100 ⭐', tags: ['监狱剧', '社会现实', '印度', '性别反转'], comment: `印度监狱政变视角+#MeTooForMen性别反转社会议题，Anurag Kashyap印度最擅长政治寓言剧的导演之一。8/28才上线，目前仅靠制作团队+评论界背书，尚无观众评分数据。` },
    { rank: 4, id: 'F033', name: `Re:Zero S4 Part 2 夺还篇 第13集`, url: 'https://www.crunchyroll.com', description: `第13集IMDb单集9.9(蕾姆回归篇·加长29分钟)·2026夏季番第7周动画榜登顶(投票率10.76%)·Anime Corner 19项奖`, type: '异世界动画', platform: 'AT-X / Crunchyroll', score: '87/100 ⭐', tags: ['异世界', '动画', '日本', '续作'], comment: `阔别近5年的蕾姆回归立即引爆单集评分，9.9 IMDb相当于接近满分，是S4全季口碑巅峰集。9/30全季大结局迫近，等收官后好判断S4 Part 2全段评分。` },
  ],
  '2026-08-26': [
    { rank: 1, id: 'F034', name: `铁拳教育（Get Schooled / 참교육）`, url: 'https://www.netflix.com', description: `豆瓣8.8(约13万+评价·5星52.3%)·IMDb 8.6·Netflix非英语剧集全球第1·89国TOP10`, type: '动作/社会讽刺单元剧', platform: 'Netflix 全球', score: '92/100 🔥', tags: ['动作', '社会讽刺', '校园', '韩剧'], comment: `改编自网漫《Get Schooled》，导演洪忠灿（《少年法庭》），以架空“教权保护局”切入校园霸凌与教师权益，爽感与社会痛点兼具。争议：被韩国教师团体批评“美化暴力”。今日如果只看一部。` },
    { rank: 2, id: 'F035', name: `A Useful Ghost（一个有用的幽灵）`, url: 'https://mubi.com', description: `Metacritic 84(13位影评人·Universal Acclaim·100%正面)·Metacritic用户8.0·戛纳影评周Grand Prix`, type: '奇幻/黑色喜剧寓言', platform: 'MUBI + Prime Video', score: '86/100 ⭐', tags: ['奇幻', '黑色喜剧', '泰国', '隐藏宝藏'], comment: `泰国导演Ratchapoom Boonbunchachoke长片首作，戛纳影评周最高奖。妻子因尘肺病去世后附身吸尘器回到丈夫身边，荒诞设定包裹阶级焦虑、历史失忆与政治寓言。兼今日隐藏宝藏。` },
    { rank: 3, id: 'F036', name: `Obsession（执念）`, url: 'https://www.peacocktv.com', description: `RT影评人94%/观众94%(双高)·全球票房约4.27亿美元·成本<100万美元·Blumhouse出品`, type: '恐怖/超自然惊悚', platform: 'Peacock（仅美国）', score: '90/100 🔥', tags: ['恐怖', '超自然', '美国', 'Blumhouse'], comment: `改编自W.W. Jacobs经典短篇《猴爪》（The Monkey's Paw），成本不足百万撬动4.27亿票房的现象级恐怖片；影评与观众双94%在恐怖类型中极为罕见。提示：恐怖片存在粉丝集中风险，需观察长尾。` },
  ],
  '2026-08-27': [
    { rank: 1, id: 'F037', name: `死神：千年血战篇 - 祸（Bleach: Sennen Kessen-hen - Kashin-tan）`, url: 'https://www.hulu.com', description: `MyAnimeList 9.03/133K·AniList高位·日本口碑顶端`, type: '动画/动作/奇幻', platform: 'Hulu / Disney+ / B站（国内待确认）', score: '92/100 🔥', tags: ['动画', '热血', '日本', '最终章'], comment: `二十年等待的死神动画最终决战章（一护 vs 友哈巴赫），Pierrot Films制作升级，前三集先行剧场放映造势。本季动画口碑顶点，评分稳居9.0+，收官党必看。` },
    { rank: 2, id: 'F038', name: `蝉（The Cicada）`, url: 'https://www.iqiyi.com', description: `豆瓣8.9(上万评价·稳定企稳)·骨朵/云合有效播放暑期档前列`, type: '剧情/悬疑/犯罪/律政', platform: '爱奇艺 / 腾讯视频 / 咪咕视频 / 浙江卫视', score: '89/100 ⭐', tags: ['悬疑', '律政', '司法', '中国大陆'], comment: `袁玉梅（《白夜追凶》操盘手）执导，钟楚曦/吴镇宇/郑云龙三强对戏，21集无注水司法心理悬疑，十二年旧案+法庭博弈+人性反转。由8/26观察池升级为正式推荐，8/30大结局。` },
    { rank: 3, id: 'F039', name: `无职转生III（Mushoku Tensei: Jobless Reincarnation S3）`, url: 'https://www.bilibili.com', description: `MyAnimeList 8.70/288K·Animate Times夏季票选「最期待」冠军`, type: '动画/奇幻/异世界', platform: '各大动画平台 / B站（国内）', score: '89/100 ⭐', tags: ['动画', '异世界', '奇幻', '日本'], comment: `Studio Bind制作，鲁迪故事进入关键篇章，作画与叙事年度顶尖。本季异世界动画口碑第一，样本量极大且稳定。` },
    { rank: 4, id: 'F040', name: `The Christophers（克里斯托弗们）`, url: 'https://www.hulu.com', description: `RT 95–97%(108–158位影评人)·Metacritic 78·Letterboxd 3.5/5·IMDb 6.8`, type: '电影/喜剧/犯罪', platform: 'Hulu（美）/ 后续全球数字发行', score: '88/100 ⭐', tags: ['喜剧', '犯罪', '美国', '艺术伪造'], comment: `索德伯格近年最佳之一，87岁Ian McKellen封神演技 + Michaela Coel克制反差，艺术伪造家族喜剧，台词犀利。影评近满分、观众偏冷静的“叫好不叫座”型，仍属优质。` },
    { rank: 5, id: 'F041', name: `努力克服自卑的我们（JTBC）`, url: 'https://www.netflix.com', description: `豆瓣8.6(29,061评)·IMDb 8.4`, type: '电视剧/剧情/心理治愈', platform: 'JTBC / Netflix', score: '87/100 ⭐', tags: ['韩剧', '心理治愈', '群像', '韩国'], comment: `以“自卑”为切口的群像心理治愈，JTBC品质，全16集已完结，评分稳居年度韩剧前列。按“半年内仍高热”条款补入的春季黑马遗珠。` },
    { rank: 6, id: 'F042', name: `幼女战记II（Youjo Senki II / Saga of Tanya the Evil S2）`, url: 'https://www.bilibili.com', description: `MyAnimeList 8.36/249K·本季口碑前列·时隔9年回归`, type: '动画/军事/奇幻', platform: '各大动画平台 / B站（国内）', score: '86/100 ⭐', tags: ['动画', '军事', '奇幻', '日本'], comment: `九年磨一季，谭雅与STAFF全员回归，战争伦理+魔导军事硬核。老牌IP回归即站稳本季口碑前列，军事奇幻动画头部。` },
  ],
  '2026-08-28': [
    { rank: 1, id: 'F043', name: `我父亲的影子（My Father's Shadow）`, url: 'https://mubi.com', description: `RT 97–98%(82位影评人)·Metacritic 85(17评·Universal Acclaim)·Letterboxd 4.1/5(26,374评)·TMDb 8.0`, type: '电影/剧情', platform: 'MUBI（北美/英/爱等授权区·中国大陆无MUBI服务）', score: '91/100 🔥', tags: ['剧情', '家庭', '尼日利亚', '隐藏宝藏'], comment: `首部入围戛纳主竞赛单元的尼日利亚电影，以1993年大选为背景，讲两兄弟与父亲在拉各斯度过的最后一天。导演Akinola Davies Jr.获BAFTA杰出处女作、哥谭突破导演奖，男主Sope Dirisu获哥谭最佳主演。兼今日隐藏宝藏，填补非洲盲点。` },
    { rank: 2, id: 'F044', name: `诗人（A Poet / Un Poeta）`, url: 'https://mubi.com', description: `RT 100%(54–82位影评人)·Metacritic 85(13评)·IMDb 7.9(约2K评)`, type: '电影/喜剧/剧情', platform: 'MUBI（授权区·中国大陆暂无）', score: '87/100 ⭐', tags: ['黑色喜剧', '西语电影', '哥伦比亚', '隐藏宝藏'], comment: `Simón Mesa Soto执导，戛纳一种关注评审团奖、哥伦比亚申奥片。麦德林酗酒潦倒的老诗人与天才少女的师徒闹剧，被《纽约时报》称为“苦难的浪漫”。兼今日隐藏宝藏，填补拉美盲点；观众样本偏小是唯一保留项。` },
    { rank: 3, id: 'F045', name: `低智商犯罪`, url: 'https://www.iqiyi.com', description: `豆瓣8.2(开分后稳定)·云合市占率峰值26%·爱奇艺热度破万登顶同期`, type: '电视剧/悬疑/犯罪/黑色喜剧', platform: '爱奇艺 / 咪咕视频 / 江苏卫视 / 东方卫视', score: '87/100 ⭐', tags: ['悬疑', '黑色喜剧', '中国大陆', '紫金陈'], comment: `紫金陈最特别的“喜剧孤本”，刘海波（《尘封十三载》）执导，《无证之罪》《隐秘的角落》原班制作，王骁/田曦薇/王传君主演。多线荒诞叙事（国产版《两杆大烟枪》），“过程全错、结果全对”的反套路破案。` },
    { rank: 4, id: 'F046', name: `猎犬 第二季（Bloodhounds S2 / 사냥개들 시즌2）`, url: 'https://www.netflix.com', description: `MyDramaList 8.6(19,195评)·IMDb 8.1·上线次周740万观看·登顶非英语剧集全球第1`, type: '电视剧/动作/犯罪', platform: 'Netflix（全球）', score: '87/100 ⭐', tags: ['动作', '犯罪', '韩剧', '韩国'], comment: `Jason Kim执导，Woo Do-hwan、Lee Sang-yi回归，Rain（郑智薰）首次出演反派。7集零注水，较第一季更浓缩、打斗更狠，是2026上半年全球热度最高的非英语动作剧之一。` },
    { rank: 5, id: 'F047', name: `攻壳机动队（The Ghost in the Shell / 2026）`, url: 'https://www.primevideo.com', description: `MyAnimeList 8.02·AniList 78/100·Kitsu 81/100`, type: '动画/科幻/赛博朋克', platform: 'Prime Video / 富士电视台', score: '82/100 🧪', tags: ['动画', '赛博朋克', '科幻', '日本'], comment: `Science SARU（《恶魔人 Crybaby》）重制士郎正宗原作，而非SAC_2045续作，视觉语言自成一家，首集即冲上Prime Video美区Top 10。评分稳健但尚未达本季头部，样本不足待观察，列🧪值得关注。` },
  ],
  '2026-08-29': [
    { rank: 1, id: 'F048', name: `尼尔瓦纳乐队秀 电影版（Nirvanna the Band the Show the Movie）`, url: 'https://www.hulu.com', description: `RT影评人96%(Certified Fresh)/观众95%·Metacritic 80·Letterboxd 4.2/5(2026叙事长片第2高)·2026加拿大银幕奖最佳影片`, type: '电影/喜剧/科幻/伪纪录片', platform: 'Hulu（美）/ Disney+（加）/ VOD', score: '90/100 🔥', tags: ['喜剧', '伪纪录片', '加拿大', '隐藏宝藏'], comment: `Matt Johnson（《BlackBerry》导演）与Jay McCarrol自导自演，把两人为“在多伦多Rivoli酒吧演一场”折腾20年的执念，拍成200万美元成本的《回到未来》式时间旅行闹剧，大量镜头用隐藏摄像机对不知情路人实拍。兼今日隐藏宝藏：无宣发却双95%+，中文世界认知度接近为零。` },
    { rank: 2, id: 'F049', name: `激情邀约 / 诱人饭聚（The Invite）`, url: 'https://www.primevideo.com', description: `RT 97%(265+影评人·Certified Fresh)/观众89%·IMDb 7.8(约31,000人)·Letterboxd 4.02/5·豆瓣7.6(4,205人)`, type: '电影/喜剧/剧情', platform: 'Prime Video / Apple TV / PVOD租赁', score: '89/100 ⭐', tags: ['喜剧', '婚姻', '美国', 'A24'], comment: `奥利维亚·王尔德执导并主演，与塞斯·罗根饰演“楼上夜夜笙歌、楼下形同室友”的夫妻，佩内洛普·克鲁兹与爱德华·诺顿饰演奉行开放式关系的楼上邻居。几乎只发生在一张餐桌上，靠四位演员刮开一段死于每天剐一片的婚姻。豆瓣7.6是唯一分歧点。` },
    { rank: 3, id: 'F050', name: `无名传奇（Legends）`, url: 'https://www.netflix.com', description: `RT影评人97%/观众85%·Metacritic 75·IMDb 7.8(约23,187人)·上线10天破1,000万次观看·已续订S2`, type: '限定剧/犯罪/剧情', platform: 'Netflix（全球）', score: '87/100 ⭐', tags: ['犯罪', '真实改编', '英国', '限定剧'], comment: `改编自前英国海关卧底Guy Stanton回忆录《The Betrayer》——90年代英国海关把毫无训练的普通人编造假身份塞进最危险的贩毒团伙。核心张力是“扮演另一个人十年会造成什么损伤”。Steve Coogan卸掉喜剧面孔，Tom Burke表演被反复点名。终场字幕：这批人协助查获超12吨海洛因。` },
    { rank: 4, id: 'F051', name: `天幕的贾杜加 / 蒙古的女巫（Tenmaku no Jaadugar）`, url: 'https://www.crunchyroll.com', description: `MyAnimeList 8.27–8.46(约2,252人)·IGN夏季中期排名本季值得看前三·社区周榜第7位`, type: '电视动画/历史/剧情', platform: 'Crunchyroll（全球）/ TV Asahi', score: '83/100 🧪', tags: ['动画', '历史', '日本', '样本不足'], comment: `Science SARU制作，山田尚子任总导演、Abel Góngora联合执导，改编自Tomato Soup获奖漫画《蒙古魔女传》。13世纪波斯图斯城，少女Sitara靠知识而非武力在蒙古帝国扩张下求生，罕见地把动画规格用在考据中亚历史上。目前仅MAL单一平台有足量样本，标记样本不足待观察。` },
  ],
};

const reportMeta = {
  '2026-08-11': { title: '今日全球高分影视雷达 2026-08-11', description: '首次执行，8 部跨平台高分影视推荐，涵盖动画、韩剧、恐怖喜剧、奥斯卡动画等。', tags: ['影视', '推荐', '评分'] },
  '2026-08-12': { title: '今日全球高分影视雷达 2026-08-12', description: '第2次执行，2 部正式推荐：国产年代法治大剧《重器》与 FX 科幻剧《异形：地球》。', tags: ['影视', '推荐', '评分'] },
  '2026-08-13': { title: '今日全球高分影视雷达 2026-08-13', description: '第3次执行，3 部正式推荐：《克拉克森的农场》S5、《狂怒追缉》、《护工不是人》。', tags: ['影视', '推荐', '评分'] },
  '2026-08-20': { title: '今日全球高分影视雷达 2026-08-20', description: '第4次执行，4 部正式推荐：《绿灯军团》、《百年孤独》Part 2、《太平年》、《侠探杰克》S4。', tags: ['影视', '推荐', '评分'] },
  '2026-08-22': { title: '今日全球高分影视雷达 2026-08-22', description: '第5次执行（cron 00:05），5 部正式推荐：国产现实大剧《生命树》、秦腔年代剧《主角》、间谍喜剧《Ride or Die》、治愈动画《在超市后门吸烟的二人》、精品悬疑《蝉》。', tags: ['影视', '推荐', '评分'] },
  '2026-08-23': { title: '今日全球高分影视雷达 2026-08-23', description: '第6次执行，5 部正式推荐：《Widow\'s Bay》、《Bleach 千年血战篇 The Calamity》、《A Bona Fide Killer》、《Blood Sacrifice》、《花开锦绣》（观察池升级）。', tags: ['影视', '推荐', '评分'] },
  '2026-08-24': { title: '今日全球高分影视雷达 2026-08-24', description: '第7次执行，4 部正式推荐：《现在不是出轨的问题》、《The Terror: Devil in Silver》、《Bandar》、《Re:Zero S4 Part 2 夺还篇 第13集》。', tags: ['影视', '推荐', '评分'] },
  '2026-08-26': { title: '今日全球高分影视雷达 2026-08-26', description: '第8次执行，3 部正式推荐：韩剧《铁拳教育》、泰国戛纳获奖片《A Useful Ghost》（兼隐藏宝藏）、恐怖片《Obsession》。', tags: ['影视', '推荐', '评分'] },
  '2026-08-27': { title: '今日全球高分影视雷达 2026-08-27', description: '第9次执行，6 部正式推荐：《死神：千年血战篇-祸》、《蝉》（观察池升级）、《无职转生III》、《The Christophers》、《努力克服自卑的我们》、《幼女战记II》。', tags: ['影视', '推荐', '评分'] },
  '2026-08-28': { title: '今日全球高分影视雷达 2026-08-28', description: '第10次执行，5 部正式推荐：《我父亲的影子》（尼日利亚，兼隐藏宝藏）、《诗人》、《低智商犯罪》、《猎犬 第二季》、《攻壳机动队 2026》。', tags: ['影视', '推荐', '评分'] },
  '2026-08-29': { title: '今日全球高分影视雷达 2026-08-29', description: '第11次执行，4 部正式推荐：《尼尔瓦纳乐队秀 电影版》（兼隐藏宝藏）、《激情邀约》、《无名传奇》、《天幕的贾杜加》。', tags: ['影视', '推荐', '评分'] },
};

async function importReport(dateKey) {
  const sourceFile = join(sourceDir, `daily-film-radar-${dateKey}.md`);
  const slug = `film-radar-daily-${dateKey}`;
  const bundleDir = join(contentRoot, slug);

  // Idempotent guard: never clobber an already-committed bundle.
  if (existsSync(bundleDir)) {
    console.log(`⏭ ${slug}: bundle already exists, skip`);
    return;
  }

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
  console.log('Film-radar bundle sync complete.');
}

main().catch((error) => {
  console.error('Import failed:', error);
  process.exit(1);
});
