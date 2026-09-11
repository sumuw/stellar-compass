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
  '2026-09-02': [
    { rank: 1, id: 'F052', name: `绝望写手 第五季 / Hacks: Season 5`, url: 'https://www.hbomax.com', description: `豆瓣S5 9.6(30,277人·全五季最高)·RT影评97–100%(开播16篇累积至数十篇)/爆米花89%·IMDb 8.2·第78届艾美奖24项提名(喜剧类单季历史纪录)`, type: '电视剧/喜剧/剧情', platform: 'HBO Max（覆盖地区·中国大陆无官方渠道）', score: '93/100 🔥', tags: ['喜剧', '剧情', '美国', '已完结'], comment: `拉斯维加斯传奇喜剧人Deborah Vance（Jean Smart）与失意年轻写手Ava（Hannah Einbinder）互相折磨又互相成就，笑点锋利但从不靠损害弱者取乐。S1 8.8→S2 9.4→S3 9.4→S4 9.2→S5 9.6，属收官季反冲新高，完结近3个月无回落。创作者早在2015年就想好最后一幕。争议是部分影评人认为终季处理自身legacy略显笨拙。` },
    { rank: 2, id: 'F053', name: `爱情怎么翻译？/ Can This Love Be Translated?（이 사랑 통역 되나요?）`, url: 'https://www.netflix.com', description: `豆瓣8.3(138,441人)·MyDramaList 8.4(47,210人)·IMDb 7.9·Netflix全球非英语榜连续两周第1/登顶60国·首7周2.71亿小时`, type: '电视剧/爱情喜剧/剧情', platform: 'Netflix（全球190+国家·中国大陆无服务）', score: '89/100 ⭐', tags: ['爱情', '喜剧', '韩国', 'Netflix'], comment: `洪氏姐妹（《德鲁纳酒店》）把“翻译”这个职业设定用成情感隐喻：精通八国语言的口译员周浩镇（金宣虎）能翻译所有语言，唯独读不懂顶级明星车茂熙（高允贞）没说出口的话。两个独立社区给出几乎相同的判断，也是2026上半年Netflix全球播放量第二高的韩语内容。归档说明：1/16首播超出常规时效窗口，因7月Netflix engagement报告与青龙电视奖重新进入讨论而补录。` },
    { rank: 3, id: 'F054', name: `柔美的细胞小将 第三季 / Yumi's Cells 3（유미의 세포들 시즌3）`, url: 'https://www.hbomax.com', description: `豆瓣S3 8.6(22,850人)·MyDramaList 8.6(1,318人)·第5届青龙电视奖大赏(金高银)+最佳男子新人·Rakuten Viki美/欧/中东/大洋洲连续2周第1`, type: '电视剧/爱情喜剧/生活剧', platform: 'HBO Max（海外同步）/ Rakuten Viki / TVING（韩国）', score: '87/100 ⭐', tags: ['爱情', '喜剧', '韩国', '最终季'], comment: `时隔4年回归的最终章，把女主柔美（金高银）从为爱情提心吊胆的上班族写成情感休眠的畅销爱情小说作家，再让外冷内热的年下编辑把她唤醒。最独特的资产仍是“细胞村”设定，做到第三季反而更精炼。短板是8集篇幅普遍被认为太短，终局推进过快。` },
    { rank: 4, id: 'F055', name: `杀人者的购物中心 2 / A Shop for Killers 2（킬러들의 쇼핑몰2）`, url: 'https://www.disneyplus.com', description: `豆瓣S2 7.6(13,269人)·RT影评100%/爆米花87%·GOODDATA 8月第一周话题榜第1(16.06%)·2026年全球Disney+观看数最高的原创韩剧`, type: '电视剧/动作/悬疑/惊悚', platform: 'Disney+（含港澳台/日韩/东南亚/欧美·中国大陆无服务）', score: '83/100 🧪', tags: ['动作', '悬疑', '韩国', '爽剧'], comment: `李栋旭为第二季增重8公斤亲自上近身格斗，叙事格局从黑市军火内斗扩张到跨国犯罪组织“巴比伦”，8集紧实每集都有推进。金慧埈饰演的郑智安从被保护的女孩到大结局亲手扣下扳机，撑起下半段。共识落差是压在🧪档的主因：国际侧RT 100%/87%，中文社区只给7.6。遗憾是反派老大最终回才露脸。` },
  ],
  '2026-09-03': [
    { rank: 1, id: 'F056', name: `熊家餐馆 第五季 / The Bear: Season 5`, url: 'https://www.hulu.com', description: `豆瓣S5 8.6(4,654人)·RT专业97%(77篇)·Metacritic 82·IMDb约8.5(322,000+)·JustWatch 91%`, type: '电视剧/剧情/喜剧/职场', platform: 'Hulu（美国）/ Disney+（国际·含港澳台）', score: '92/100 🔥', tags: ['剧情', '职场', '美国', '最终季'], comment: `终结季口碑反转：S1 8.4→S2 8.8→S3 8.0→S4 7.9→S5 8.6，把叙事重心从崩溃式厨房高压拉回人物关系的收束。四个独立社区方向一致，专业与真实观众之间没有明显撕裂。最大争议仍是“它到底是关于创伤的剧还是关于做菜的剧”，以及部分观众认为结局过于温和。` },
    { rank: 2, id: 'F057', name: `开庭 / COURT!`, url: 'https://www.viu.tv', description: `豆瓣8.6(15,794人·5星47.5%/4星40.1%)·豆瓣华语口碑剧集榜在榜·IMDb样本不足无有效评分`, type: '电视剧/剧情/律政/单元剧', platform: 'ViuTV（中国香港·官方回放）/ 哔哩哔哩（中国大陆·以平台实际检索为准）', score: '90/100 🔥', tags: ['律政', '剧情', '中国香港', '单元剧'], comment: `杜琪峰出任出品人、游乃海与朱淑仪监制，银河映像与MakerVille联合制作。三个案件发生在同一家酒店的三个房间，分别进入裁判法院、区域法院、高等法院三条互不相通的司法轨道，反复追问“证据拼出来的法律事实等不等于真相”，刻意拒绝给出非黑即白的判决。播出期热度平平，8月靠B站解说与小红书“猫咪出庭”片段破圈后评价人数翻倍，是今年华语剧集的最高分之一。短板是国际社区几乎无样本。` },
    { rank: 3, id: 'F058', name: `寂静的朋友 / Silent Friend / Stille Freundin`, url: 'https://www.youku.com', description: `豆瓣7.8(39,549人)·RT专业96%(69篇)/观众79%·Metacritic 90·Letterboxd 3.8/5(21,683)·第82届威尼斯费比西奖+最佳新演员`, type: '电影/剧情/艺术电影', platform: '优酷、爱奇艺、哔哩哔哩（中国大陆·2026-08-29上线）', score: '85/100 ⭐', tags: ['艺术电影', '剧情', '德国', '实验'], comment: `伊尔蒂科·茵叶蒂（《肉与灵》导演）以德国大学城植物园里一棵百年银杏为轴，用1908、1972、2020三段时空分别以35mm黑白、16mm彩色、数字影像拍摄。梁朝伟为这个角色准备八个月、全程英文演出。须如实说明：专业端RT 96%/MC 90与观众端豆瓣7.8/IMDb 7.3存在明显分歧，差评集中在节奏太慢、结构太碎。` },
  ],
  '2026-09-04': [
    { rank: 1, id: 'F059', name: `给阿嬷的情书 / Dear You`, url: 'https://www.iqiyi.com', description: `豆瓣9.3(941,668人·本雷达开库以来样本量最大的华语电影)·内地票房超20亿(暑期档贡献5.86亿)·上影节传媒大奖组委会特别荣誉·长春电影节金鹿奖评委会大奖`, type: '电影/剧情/家庭', platform: '爱奇艺（2026年9月上线）', score: '95/100 🏆', tags: ['剧情', '家庭', '中国大陆', '华语'], comment: `潮汕方言、无知名卡司的中小成本片，靠纯口碑跑出20亿票房与豆瓣9.3（94万人）。不靠催泪煽情：孙子因债务远赴泰国寻找传闻中成了亿万富豪的阿公，带回的却是“阿公早已去世，多年来与阿嬷书信往来的是一个陌生人”——真正的悬念是这个家庭如何消化一段被藏了半个世纪的情感。唯一硬伤是国际社区零样本，跨平台共识这条拿不到分。` },
    { rank: 2, id: 'F060', name: `踮起脚尖 / Tip Toe`, url: 'https://www.channel4.com', description: `豆瓣8.9(15,468人·8.0→8.5→8.6→8.7→8.9持续上升)·IMDb 8.2(中等可信)·RT专业93%/观众80%`, type: '限定剧/剧情/惊悚', platform: 'Channel 4（英国）/ HBO Max（德意等欧洲）/ Starz（美国10-02起）', score: '93/100 🔥', tags: ['剧情', '惊悚', '英国', '限定剧'], comment: `拉塞尔·T·戴维斯（《同志亦凡人》《这是罪》）主创，彼得·霍尔（《最后生还者》）导演。第一幕就把结局摆出来：里奥被吊死在家门口的路灯上，全剧倒叙回退10天，拍一句玩笑、一次借钥匙、一点偏见如何累积成无法挽回的暴力。它不是悬疑破案剧，力量恰恰来自“已知结局却无法移开视线”。四个独立来源同向，是今年英剧里罕见的无撕裂共识。` },
    { rank: 3, id: 'F061', name: `JOJO的奇妙冒险 飙马野郎（1st STAGE）/ Steel Ball Run — 1st STAGE`, url: 'https://www.netflix.com', description: `豆瓣9.0(7,389人)·AniList 88%(人气76,647)·IMDb 9.7(粉丝集中评分·不作主要依据)·2nd–3rd STAGE全11集2026-09-25起Netflix周更`, type: '动画/奇幻/冒险/特别篇', platform: 'Netflix（全球独占·中国大陆除外）', score: '90/100 🔥', tags: ['动画', '奇幻', '日本', '特别篇'], comment: `荒木飞吕彦公认系列巅峰第七部终于动画化，47分钟特别篇把SBR大赛背景、乔尼与杰洛的初遇和第一赛段竞速完整铺完，作画规格是David Production历代JOJO最高（马匹动态镜头解决了运动番最容易崩的环节）。须说明三点：三个数据源都是动画粉丝社区；它不是完整故事而是序章；首播距今已超90天主窗口，因9-25周更重新成为热点而纳入。` },
    { rank: 4, id: 'F062', name: `宇宙年糕店 / 우주떡집 / Space Rice Cake`, url: 'https://www.tving.com', description: `豆瓣8.7(约1,530人·第三方快照·中低可信)·IMDb/RT/MC综艺品类普遍无有效样本`, type: '综艺/真人秀', platform: 'tvN / TVING（韩国·中国大陆无官方引进）', score: '85/100 ⭐', tags: ['综艺', '真人秀', '韩国', '样本不足'], comment: `罗暎锡（罗PD）+李祐汀组合（《新西游记》《尹食堂》《地球游戏厅》）的《地球游戏厅》衍生，让四位女艺人真的去经营一家年糕店。填补本雷达过去20多期从未覆盖的高质量综艺盲区，慢综艺不靠冲突撕逼驱动。须诚实说明：这是证据强度最弱的一部，豆瓣8.7受限于约1,500人样本且未能独立核实，国际社区无数据，仍在播出。若后续跌破8.3或完结后回落将撤销推荐。` },
  ],
  '2026-09-05': [
    { rank: 1, id: 'F063', name: `小先知 / Small Prophets`, url: 'https://tv.apple.com', description: `豆瓣8.5(845人·样本偏薄)·RT专业100%/观众94%(篇数待核实)·IMDb 8.0(中等可信)·卫报5/5·Series Mania 2026国际全景单元最佳剧集`, type: '限定剧/喜剧/奇幻', platform: 'BBC iPlayer（英国·保留至2026年底）/ Apple TV（2026-10-07全球·英国除外）', score: '88/100 ⭐', tags: ['喜剧', '奇幻', '英国', '限定剧'], comment: `麦肯锡·克鲁克（《探宝二人组》主创）作品：DIY门店店员的伴侣Clea七年前人间蒸发，他住在养老院、自称炼金术士的父亲留下用雨水、马粪和炼金术培育人造精灵的配方——据说能预言未来。真正的主题是一个人的非理性如何成为另一个人的求生机制。真人实景中插入动画段落，6集共180分钟。两点必须说明：首播距今208天已超90天窗口；10月7日前非英国观众看不到，今天的“可看性”是三部里最差。` },
    { rank: 2, id: 'F064', name: `相反的你和我 第二季 / 正反対な君と僕 第2期`, url: 'https://www.crunchyroll.com', description: `豆瓣8.8(2,194人)·AniList 82%(人气57,033)·第一季对照组豆瓣9.0/18,378人·AniList 83%/人气121,258`, type: '动画/喜剧/爱情', platform: 'Crunchyroll（全球·含官方多语言字幕·中国大陆无正版）', score: '88/100 ⭐', tags: ['动画', '恋爱', '日本', '播出中'], comment: `第一季是2026年冬季档被低估得最厉害的一部：豆瓣9.0但有1.8万人打分，在恋爱喜剧动画里属“高分且大样本”的罕见组合。讲外向到聒噪的女生与沉默到近乎消失的男生如何因频率完全相反反而适配，第二季推进到“如何维持一段节奏不一致的关系”。Lapin Track的作画与色彩在第一梯队，冲突全部来自两人表达爱的方式不同频而非误会三角。风险：尚有4集未播，第二季样本只有第一季的12%。` },
    { rank: 3, id: 'F065', name: `日落下的彩虹`, url: 'https://www.viu.tv', description: `豆瓣8.5(888人·样本偏薄)·豆瓣华语口碑剧集榜本周第4·IMDb/RT/MC港剧普遍无有效样本`, type: '电视剧/剧情/单元剧', platform: 'ViuTV（中国香港·官方免费回放·香港以外暂无确认的正版渠道）', score: '84/100 🧪', tags: ['剧情', '单元剧', '中国香港', '样本不足'], comment: `把镜头对准即将清拆的彩虹邨——一条有六十多年历史的香港老屋邨，用七个互相勾连的单元故事写亲情、友情、爱情，以及人与土地之间那点说不清的牵扯。80岁的夏雨与74岁的郭锋演一对相识六十年的老街坊兼亲家，最后在篮球场把积压半辈子的心结摊开。最狠的一笔是让“屋邨要拆了”贯穿始终。证据强度最弱：888人未过千、国际社区零数据，以已完结不跳水+填补中国香港盲区+豆瓣官方榜第4纳入。` },
  ],
  '2026-09-06': [
    { rank: 1, id: 'F066', name: `偿还 / PAYBACK The Series`, url: 'https://www.iq.com', description: `豆瓣8.6(11,068人)·MyDramaList 8.7(13,793人·MDL总榜#219)·IMDb/RT/MC无对应条目`, type: '电视剧/复仇/暗黑BL/娱乐圈群像', platform: '爱奇艺国际版 iQ.com（UNCUT无删减独播·含中字）/ One31 / Rakuten TV / Heavenly / Line TV', score: '92/100 🔥', tags: ['BL', '复仇', '泰国', '暗黑'], comment: `本库首次收录泰国BL剧，触发条件不是冷门加分，而是两个不共享用户群的社区同分：中文1.1万人8.6、国际1.38万人8.7，这种“两万人量级、两端同分”在BL品类极罕见。改编自韩国BL网络漫画，前催债人潜入娱乐圈复仇，与资本方金主互相试探。反馈集中在“不是工业糖精”、打戏与强强拉扯给得足。争议是暗黑尺度与复仇逻辑（MDL分级18+）。中国大陆正版渠道暂无可靠数据。` },
    { rank: 2, id: 'F067', name: `星城 / Star City`, url: 'https://tv.apple.com', description: `豆瓣8.5(5,097人)·RT专业94%(34篇·含金融时报4/5、帝国4/5)/观众81%(100+)·母剧《为全人类》S5豆瓣7.9`, type: '电视剧/科幻/谍战惊悚', platform: 'Apple TV+（全球订阅·中国大陆无官方服务）', score: '91/100 🔥', tags: ['科幻', '谍战', '美国', '衍生剧'], comment: `《为全人类》首部官方衍生剧，把镜头从NASA掉转到铁幕后方，用克格勃监视下的苏联航天体系重讲登月竞赛——它真正做的是把太空剧拍成间谍剧，气质接近《切尔诺贝利》加《美国谍梦》。口碑剪刀差是最大看点：母剧第五季跌到豆瓣7.9，衍生剧反而稳在8.5。主要争议是“全8集几乎不上天”，冲着太空奇观来的观众大概率失望，这正是RT观众端81%低于专业端94%的原因。` },
    { rank: 3, id: 'F068', name: `加油吧！中村君！！/ ガンバレ！中村くん!! / Go for It, Nakamura-kun!!`, url: 'https://www.crunchyroll.com', description: `豆瓣8.6(5,040人)·MyAnimeList显示分8.18(23,190人·总榜#482)·MAL加权分7.47(同平台双口径)·AniList API停用未取得`, type: '动画/BL/恋爱喜剧', platform: 'Crunchyroll / Hulu（美国）· 中国大陆无官方服务', score: '87/100 ⭐', tags: ['动画', 'BL', '恋爱', '日本'], comment: `害羞男高中生暗恋同班同学，把全部内心戏走成脑补连续剧。它的价值在于不给同性暗恋附加悲剧税——没有出柜创伤、没有狗血反转，男主角的尴尬就是普通人的尴尬；复古作画风格是中文与海外社区共同提到的加分项。争议是笑点高度依赖社死式喜剧，不耐受者全程不适。注意MAL存在显示分8.18与加权分7.47两套口径，专业评价侧几乎空白。` },
  ],
  '2026-09-07': [
    { rank: 1, id: 'F069', name: `瑞克和莫蒂 第九季 / Rick and Morty Season 9`, url: 'https://www.hbomax.com', description: `豆瓣9.3(17,066人·该剧中文社区历史最好区间)·RT专业100%(仅10篇)·IGN第10集9/10 Editors' Choice`, type: '动画/成人科幻喜剧', platform: 'HBO Max / Max + Hulu（美国·全集08-31上线）/ HBO Max（英国与欧洲）', score: '94/100 🔥', tags: ['动画', '科幻', '喜剧', '美国'], comment: `最值得记录的事实：它是在换掉创始人声音、换了两位主演配音之后，分数反而冲到全系列高位。本季把重心从Rick挪到Morty，大结局「Field of Dreams」让Morty用Rick自己的多元宇宙逻辑把一个已经戒酒十七年、人生完满的平行Rick重新劝回酒瓶，是本季“虚无主义也可以很伤人”的收束。争议：需前置8季91集；专业端100%只有10篇，只能当作初期批评风向而非定论。` },
    { rank: 2, id: 'F070', name: `挽救计划 / Project Hail Mary`, url: 'https://www.primevideo.com', description: `豆瓣8.6(541,611人)·RT专业94%(415篇)/观众95%(25,000+已验证)·全球票房6.835亿美元(2026年全球第4·亚马逊影史最高)`, type: '电影/科幻/生存/首类接触', platform: 'Prime Video（全球订阅）/ Apple TV、Fandango 等数字购买或租赁', score: '93/100 🔥', tags: ['科幻', '电影', '美国', '首类接触'], comment: `Andy Weir（《火星救援》原著）小说改编、Drew Goddard编剧、Phil Lord & Chris Miller执导。把1.57亿美元量级的科幻大片拍成“一个人在飞船上解题”的独角戏，真正的情感核心是主角和一只石头蜘蛛外星人Rocky之间靠数学与耐心建立起来的跨物种友谊。最大优势是样本结构——54万中文评价、415篇专业评论、2.5万已验证观众评分，三端都是本期最大，是本期唯一在所有维度都不需要“但书”的作品。` },
    { rank: 3, id: 'F071', name: `无敌少侠 第四季 / Invincible Season 4`, url: 'https://www.primevideo.com', description: `豆瓣9.0(6,725人)·RT专业100%(27篇)/MC 77(6篇)·IMDb 8.7(2026-04-15时点)·第5集为全剧史第2高单集`, type: '动画/超级英雄/成人向', platform: 'Prime Video（全球独播·中国大陆无官方服务）', score: '91/100 🔥', tags: ['动画', '超级英雄', '美国', '成人向'], comment: `四季以来第一次把维尔图姆战争推到台前，Lee Pace配音的Thragg是目前动画超英里最有压迫感的反派之一。真正的价值是把超英题材拍成代价剧——Mark每一次赢都在失去什么，第四季推到“地球已经没有任何人能挡住Thragg”的绝境。观众端要注意：第4集「Hurm」在IMDb上是全剧史最低分单集（可跳过，不影响主线理解），第5集起连续三集破9；作画质量随年度化产能有肉眼可见缩水。` },
    { rank: 4, id: 'F072', name: `世界的主人 / 세계의 주인 / The World of Love`, url: 'https://www.watcha.com', description: `豆瓣9.0(153,620人)·IMDb 7.6(394人)·cine21 7.8·WatchaPedia 4.0/5·Megabox院线观众9.2·华沙国际电影节费比西奖·百想最佳导演`, type: '电影/剧情/成长', platform: '韩国本土流媒体（2026-04-24上线·具体平台未确认）/ 日本Bitters End、中国香港Edko（院线）', score: '88/100 ⭐', tags: ['剧情', '电影', '韩国', '社会议题'], comment: `尹佳恩（《我们的世界》《我们的家园》）第三部长片，也是迄今最锋利的一部。它做了性暴力题材电影几乎没人敢做的事：全片没有一处施暴画面、没有一次创伤闪回、没有复仇线，只跟拍一个18岁高中女生如何上学、恋爱、练跆拳道，以及当她拒绝在联署上签字、当众说出自己就是幸存者之后周围人的反应。核心质问是那句“我的人生看起来被毁掉了吗？”。须注意中文9.0与英文/韩国影评端7.6–7.8的落差真实存在，且合法可观看性存疑。` },
    { rank: 5, id: 'F073', name: `证言 第一季 / The Testaments Season 1`, url: 'https://www.hulu.com', description: `豆瓣8.8(9,831人)·RT专业88%(59篇)/观众75%·第一季完结时全球累计4,500万小时观看·已续订第二季`, type: '电视剧/反乌托邦/惊悚', platform: 'Hulu（美国）/ Disney+（国际·含英加澳）/ JioHotstar（印度）', score: '87/100 ⭐', tags: ['反乌托邦', '惊悚', '美国', '续作'], comment: `《使女的故事》正统续作，改编自阿特伍德2019年同名小说，视角从“成年幸存者”换成“在基列国长大的一代”——Agnes从小被教育这就是世界的正常秩序，Daisy是在加拿大自由长大的反抗者，这个碰撞比母剧的逃亡叙事提供了更冷的观察角度。第9集Becka用园艺剪杀父是全季分水岭。争议：对原著结局大幅改动，且“年轻化”被部分母剧观众认为削弱压迫感，正对应RT观众端75%的落差。` },
    { rank: 6, id: 'F074', name: `纳达尔 / Rafa`, url: 'https://www.netflix.com', description: `豆瓣9.1(2,579人)·JustWatch用户8.5(约4,700人)·Metacritic用户样本不足显示tbd·导演Zach Heinzerling(奥斯卡提名)`, type: '纪录剧集/体育/传记', platform: 'Netflix（全球订阅·中国大陆无官方服务）', score: '85/100 ⭐', tags: ['纪录片', '体育', '美国', '传记'], comment: `Netflix体育纪录片里少见“不写胜利、写代价”的一部。四集从他三岁拿起球拍拍到2024年退役，真正的骨架是“他最后的对手是自己的身体”——伤病、复出、再伤、再复出。费德勒、德约科维奇、麦肯罗全部出镜，且不是客套夸奖，而是在谈伟大要付出什么。自然主义拍法把他拍成内向、会自我怀疑的人，而不是红土战神雕像。另一入库理由是填补本库长期缺纪录片的结构性空白。` },
  ],
  '2026-09-08': [
    { rank: 1, id: 'F075', name: `星球大战：摩尔-暗影之王 / Star Wars: Maul – Shadow Lord`, url: 'https://www.disneyplus.com', description: `豆瓣8.7(1,960人)·RT专业98%(51篇·官方页JSON-LD直连核实)·S2已获续订确认`, type: '动画/科幻/动作', platform: 'Disney+（全球同步·中国大陆无官方服务）', score: '88/100 ⭐', tags: ['动画', '科幻', '美国', '星战'], comment: `星战动画线（《克隆人战争》《义军崛起》Dave Filoni一脉）近年最完整的一次收束，把摩尔从“酷炫反派”改写成一个会犹豫、会计算、也会心软的角色，同时让原创角色Devon Izara承担真正的道德支点。多个独立评测集中肯定两件事：光剑编排被形容为动画史上最好的几场之一，以及它敢让主角在结局做出不可逆的黑暗选择。争议：需前作背景；第9–10集同日放出致结局节奏过赶；达斯·维达因James Earl Jones去世无台词。` },
    { rank: 2, id: 'F076', name: `达顿牧场 第一季 / Dutton Ranch Season 1`, url: 'https://www.paramountplus.com', description: `豆瓣8.4(6,582人)·RT专业90%(39篇·官方页JSON-LD直连核实)·IMDb/MC未取得`, type: '电视剧/西部/剧情', platform: 'Paramount+（全集可看）/ Paramount Network（美国有线）', score: '86/100 ⭐', tags: ['西部', '剧情', '美国', '衍生剧'], comment: `《黄石》正传结束后，Beth与Rip被整体搬到南得州，从“守成”变成“开荒”——这个位移让剧集摆脱了正传后期越写越像肥皂剧的问题。真正的变量是Annette Bening饰演的敌对牧场女主人：不是脸谱化反派，而是用控制欲掩盖失控恐惧，把Beth逼出少见的被动局面。中文6,582人的8.4与RT 90%同向，说明这不是《黄石》粉丝的自嗨。争议：未看过《黄石》会缺失大量前史，情感重量打折扣。` },
    { rank: 3, id: 'F077', name: `孤独的美食家 第十一季 / 孤独のグルメ Season 11`, url: 'https://www.linetv.tw', description: `豆瓣8.5(2,856人)·TMDb条目存在但无有效聚合评分·MAL/AniList/IMDb无可靠数据(AniList连续第3期403停用)`, type: '电视剧/剧情/美食', platform: 'LINE TV、Hami Video（中国台湾·官方同步跟播）/ 东京电视台（日本）', score: '84/100 🧪', tags: ['美食', '剧情', '日本', '治愈'], comment: `时隔三年半回归的常规季，松重丰的五郎依旧是那个不制造戏剧冲突、只用一顿饭解决一天的男人。这一季最被反复提及的细节是五郎第一次戴上老花镜看菜单——一个不煽情的镜头，把15年时间感直接放进画面里；剧组还时隔14年复刻了第二季的经典场面。单集完全独立，不需要补前十季。短板：国际端零样本、中国大陆无正版渠道、8.5对这个IP属温和回落。由观察池升级为首次正式推荐。` },
  ],
  '2026-09-09': [
    { rank: 1, id: 'F078', name: `总统的蛋糕 / مملكة القصب / The President's Cake`, url: 'https://www.netflix.com', description: `豆瓣8.0(8,527人)·RT专业99%(85篇)/MC 84(17家媒体·MUST-SEE)·IMDb约7.6(约3,670人)·戛纳金摄影机奖+导演双周观众选择奖·平遥最佳影片`, type: '电影/剧情/历史', platform: 'Netflix（美国区·2026-09-03上线）/ Amazon、Apple TV、Fandango 等PVOD（2026-04-07起）', score: '87/100 ⭐', tags: ['剧情', '历史', '伊拉克', '获奖'], comment: `第一部进入戛纳正式单元的伊拉克剧情长片，也是首部拿下金摄影机的伊拉克电影。真正让它成立的不是身份，而是导演哈桑·哈迪把“为萨达姆做生日蛋糕”这个荒诞到近乎黑色幽默的国家任务，完全压在9岁女孩拉米娅的两天之内——鸡蛋、面粉、糖在制裁下的伊拉克是奢侈品，失败意味着全家遭殃。全片几乎由伊拉克本地非职业演员出演、实地拍摄，恐怖通过大人的沉默和小事的卡壳传导。填补本库中东/阿拉伯语电影的结构性空白。` },
    { rank: 2, id: 'F079', name: `石纪元 第四季 Part 3 / Dr.STONE SCIENCE FUTURE Part 3`, url: 'https://www.crunchyroll.com', description: `豆瓣8.6(2,865人)·同系列Part 2为9.1(6,016人)·MAL/AniList本轮全部不可用(AniList连续第4期403)·IMDb/RT/MC未取得`, type: '动画/科幻/冒险', platform: 'Crunchyroll（美洲/欧洲大部/澳新/东南亚）· 中国大陆正版渠道本轮未确认', score: '85/100 ⭐', tags: ['科幻', '动画', '日本', '最终章'], comment: `《Dr.STONE》从2019年做到2026年，把“从石器时代重建现代文明”真正走完全程——从炼铁、发电、抗生素一路做到登月，文明重建这条纵轴到最后没有崩。作为系列最终章，核心看点不是战斗而是“全人类一起为一个共同目标分工合作”的群像收束，最后一话用第一季片头曲回望全程。三个短板：国际端三大聚合源全部停用无法跨社区验证；8.6相对Part 2的9.1明确回落，集中意见是终章节奏过赶；中国大陆渠道未确认。` },
  ],
  '2026-09-10': [
    { rank: 1, id: 'F080', name: `鬼灭之刃：无限城篇 第一章 猗窝座再袭 / Demon Slayer: Infinity Castle Part 1 — Akaza Returns`, url: 'https://www.netflix.com', description: `豆瓣8.5(212,811人·本库开库以来中文端样本最大)·MyAnimeList 8.65(230,466人·国际端样本最大)·RT 98%(62篇)·全球票房8.05亿美元(日本影史第二)`, type: '动画电影/动作/奇幻/冒险', platform: 'Netflix / Disney+ / Crunchyroll（全球多区）· 中国大陆哔哩哔哩、爱奇艺（豆瓣playable实测true）', score: '93/100 🔥', tags: ['动画电影', '动作', '日本', '现象级'], comment: `本轮唯一在中文社区、国际核心动画社区、专业影评三个互不重叠的评价体系里同时拿到顶级分数、且每一端样本都超过20万的作品——这一条在本库30期以来没有第二部做到。ufotable把无限城这个层层嵌套的扭曲空间做成真正的视觉奇观，三场核心对决各自有独立情绪落点，不是单纯的打斗堆砌。须提前知道：它是三部曲第一章，叙事在高潮处截断，且未看过TV系列会缺失大量情感前提。超窗触发规则#7“新上线重要流媒体”豁免。` },
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
  '2026-09-02': { title: '今日全球高分影视雷达 2026-09-02', description: '第13次执行，4 部正式推荐：《绝望写手 第五季》（豆瓣 9.6 / 艾美 24 项提名）、《爱情怎么翻译？》、《柔美的细胞小将 第三季》、《杀人者的购物中心 2》。', tags: ['影视', '推荐', '评分'] },
  '2026-09-03': { title: '今日全球高分影视雷达 2026-09-03', description: '第14次执行，3 部正式推荐：《熊家餐馆 第五季》（终结季口碑反转）、港剧《开庭》、《寂静的朋友》（威尼斯费比西奖）。', tags: ['影视', '推荐', '评分'] },
  '2026-09-04': { title: '今日全球高分影视雷达 2026-09-04', description: '第15次执行，4 部正式推荐：《给阿嬷的情书》（豆瓣 9.3 / 94 万人，本库最高分）、《踮起脚尖》、《JOJO 飙马野郎 1st STAGE》、《宇宙年糕店》（首部综艺）。', tags: ['影视', '推荐', '评分'] },
  '2026-09-05': { title: '今日全球高分影视雷达 2026-09-05', description: '第16次执行，3 部正式推荐：《小先知》、《相反的你和我 第二季》、港剧《日落下的彩虹》。', tags: ['影视', '推荐', '评分'] },
  '2026-09-06': { title: '今日全球高分影视雷达 2026-09-06', description: '第17次执行，3 部正式推荐：泰剧《偿还》（本库首部泰国 BL）、《星城》、《加油吧！中村君！！》。', tags: ['影视', '推荐', '评分'] },
  '2026-09-07': { title: '今日全球高分影视雷达 2026-09-07', description: '第18次执行，6 部正式推荐：《瑞克和莫蒂 第九季》、《挽救计划》、《无敌少侠 第四季》、《世界的主人》、《证言 第一季》、《纳达尔》（纪录片）。', tags: ['影视', '推荐', '评分'] },
  '2026-09-08': { title: '今日全球高分影视雷达 2026-09-08', description: '第19次执行，3 部正式推荐：《星球大战：摩尔-暗影之王》、《达顿牧场 第一季》、《孤独的美食家 第十一季》（观察池升级）。', tags: ['影视', '推荐', '评分'] },
  '2026-09-09': { title: '今日全球高分影视雷达 2026-09-09', description: '第20次执行，2 部正式推荐：《总统的蛋糕》（戛纳金摄影机奖，填补中东盲区）、《石纪元 第四季 Part 3》（系列最终章）。', tags: ['影视', '推荐', '评分'] },
  '2026-09-10': { title: '今日全球高分影视雷达 2026-09-10', description: '第21次执行，1 部正式推荐：《鬼灭之刃：无限城篇 第一章 猗窝座再袭》（豆瓣 21.3 万 + MAL 23.0 万，本库样本量之最）。', tags: ['影视', '推荐', '评分'] },
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
