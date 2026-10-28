---
title: GitHub 每日趋势榜 2026-10-25
description: 2026-10-25 GitHub Trending 榜首为 makecindy/cindy，当日共收录 11 个项目。
date: '2026-10-25'
rankingKey: '2026-10-25'
slug: github-daily-2026-10-25
categories:
  - github
periods:
  - daily
tags:
  - GitHub
  - 开源
  - 趋势
draft: false
---

## 今日概览

今日榜单共 **11 个项目**（已回查 Trending 页面 `Box-row` 计数同为 11，非解析丢失），较昨日 10 席 **再增 1 席**（8 → 10 → 11）。**昨日 10 席留住 5 席**（cindy、hallmark、impeccable、microduck、security-audit-skill），掉榜 5 席（NVIDIA/OpenShell、aws/agent-toolkit-for-aws、luongnv89/claude-howto、google-gemini/gemini-cli、jbiaojerry/ebook-treasure-chest），换来 **5 个新面孔 + 1 个回归项**（debpalash/VoiceStudio）。

- **语言分布**：TypeScript 3、Python 3、Rust 2、CSS 1、JavaScript 1、PHP 1。Rust 由昨日并列第一的 3 席退回 2 席，TypeScript 由 2 升到 3，**昨天那条"Rust 成为系统级新项目默认选择"的判断今日没有得到延续** —— 保留下来的两个 Rust 项目（impeccable、microduck）恰恰都是昨天就在榜的存量，没有新增一个 Rust 面孔。
- **本期主线：昨天那批「技能包」不但留住了，而且全部加速 —— 榜单第一次出现"存量碾压新面孔"的形态。** 昨日保留的 5 席今日增量合计 **6,680 星（占全榜 70%）**，而新上榜 + 回归的 6 席合计只有 **2,902 星**。更关键的是这 5 席**无一衰减**：hallmark +138%、microduck +72%、impeccable +52%、cindy +44%、security-audit-skill +27%。过去几期本榜反复记录"存量一律在衰减"（10-24 的两个安全类存量分别是 −16%、−28%），今天整个反转：**这批东西不是被消费掉的热点，而是正在被安装进去的日常工具。**
- **第二个信号：昨天记下的"设计品味"赛道，今天确认成立。** hallmark（+570 → +1,359）与 impeccable（+733 → +1,113）昨天是本榜第一次出现的"反 AI 味"设计工具，同日双双留在榜且**双双加速**，位次还各自前进（第 4 → 2、第 6 → 4）。单日同榜可能只是巧合，**两个互相对立的路线同时第二天还在涨，说明这个需求是真的**。两者解法依旧互斥：hallmark 靠 LLM 自审 + 真实浏览器 lint + 48 套主题；impeccable 把 62 条规则做成不调 LLM、不要 API key 的确定性检测器。
- **第三个信号：增量冠军换人，而且换成了技能包三连的一头一尾。** cloudflare/security-audit-skill 以 **+2,874** 重回第一（昨日 +2,271，止住连续两日回落），而同为"技能包"的 hallmark（+1,359）、impeccable（+1,113）分列第 3、4 —— **今日增量前四里三个是同一个形态的东西：一个 Markdown 文件加一组脚本，装进已有 Agent 就能用。** 十一个项目里，明确以此形态存在的有 6 个（hallmark、impeccable、security-audit-skill、claude-seo，加上提供 `npx skills add` 的 VoiceStudio、自带 skills 的 cindy）。**"应用"这个词在这份榜单上正在被替换成"技能"。**
- **第四个信号：本地优先重新浮出水面。** 昨日的三个 vesicles 之外，今天 cindy（"runs locally on your own machine, using your real files and logged-in apps"）、VoiceStudio（fully-local ElevenLabs 替代，AGPL-3.0）、coolify（self-hostable PaaS）、ziwei-doushu（本地排盘引擎）四席把"东西跑在自己机器上"写进核心叙事 —— 与 10-19 记录的"本地优先从卖点变成入场券"是同一条线的延续。
- **增量结构比昨天分散**：十一席今日合计 **9,582 星**，前三席（security-audit-skill 2,874 + VoiceStudio 1,588 + hallmark 1,359 = 5,821）占 **61%**，其余八席占 39%。昨天是"榜冠军托底 + 一批中等热度新面孔填充"，今天是"**存量主力在抬榜，新面孔普遍在 50–640 的低位**"。11 席里有 4 席日增不足 200（thinkrail +52、claude-seo +179、coolify +192、ziwei-doushu +255）。

---

## 重点项目

### 1. makecindy/cindy

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/makecindy/cindy |
| 简介 | Consider it done. The open-source AI agent that works out of the box · 想到，就能做到。开源、开箱即用的 AI Agent。 |
| 语言 | TypeScript |
| 总 Star | 4,760 |
| 今日新增 | 677 stars today |
| 标签 | AI Agent、桌面应用、本地运行、多 harness、TypeScript |

第二日上榜，日增由 +471 升到 +677（+44%），稳在榜首。Cindy 是一个开源 AI Agent 客户端（Apache-2.0），以 pnpm monorepo 提供桌面与移动应用：首批支持的 harness 是 Claude Code 与 Codex，模型与 harness 可以在任务中途自由切换，而工作区、记忆、技能与工具保持连续——同一个任务甚至可以由不同 harness × 模型组合的 agent 分别规划、并行执行、交叉复核。它能驱动浏览器、电脑与手机，也能从 IM 和日程里接活。客户端免费，模型侧四种走法：官方 Cindy 服务、复用你已付费的 Claude Code / Codex 编码套餐（不重复计费）、自带 API key、或接本地模型。一台机器跑自己的真实文件与已登录应用，这是它和云端 Agent 产品的分界线。

### 2. Nutlope/hallmark

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Nutlope/hallmark |
| 简介 | Anti-AI-slop design skill for Claude Code, Cursor, and Codex. |
| 语言 | CSS |
| 总 Star | 33,548 |
| 今日新增 | 1,359 stars today |
| 标签 | 前端设计、Agent 技能、反 AI 味、CSS、设计系统 |

第二日上榜，日增由 +570 翻到 +1,359（+138%），位次由第 4 升到第 2。由 Together AI 的 Hassan El Mghari 开发，一个拒绝“看起来是 AI 生成”的设计技能，装进 Claude Code / Codex / Cursor / OpenCode 即用：v2 提供 48 套“材质”主题，按任务类型组织页面结构（预订页就该能预订、商店就该能下单、订阅就该能填表），再在真实浏览器里 lint 那批机器味特征——每个标题上方的小标签、字距拉开的字母大写字样、标题里单独染一个词、通篇色块或通篇照片、撑不满屏的 hero、每页结尾都挂一个邮箱订阅框、点了却什么都没发的表单，最后由一个全新上下文的 reviewer 说了算。检查分三档：Floor 永不允许发布（对比度、焦点态、减少动效、编造事实、手机端布局崩坏），Reflex 可被记录在案地推翻，Finish 只是工艺细节不卡发布。

### 3. debpalash/VoiceStudio

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/debpalash/VoiceStudio |
| 简介 | VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages. |
| 语言 | Python |
| 总 Star | 86,557 |
| 今日新增 | 1,588 stars today |
| 标签 | 语音合成、本地推理、AGPL-3.0、多语言、桌面应用 |

回归项：10-18 曾在榜（当时 +2,098，是当日增量亚军），10-19 后掉榜，今日以 +1,588 直接插到第 3。一个完全本地跑的 ElevenLabs 替代品，覆盖声音克隆、音色设计、视频配音、听写、转写与有声书生成，标称 646 种语言，默认引擎是 k2-fsa/OmniVoice。AGPL-3.0，硬件覆盖一口气铺到底：NVIDIA CUDA、Apple Silicon 的 Metal（MPS）、无独显纯 CPU（装 5 GB 的 CPU 版 PyTorch）、Windows on ARM（实验性，CPU only），并提供 Local API 与 MCP，可 npx skills add debpalash/VoiceStudio 当作 Agent 技能装进去。值得注意的是它近期把 remote devices / remote workers / GPU 共享从开源版移进了 VoiceStudio Pro，同时锁了一批安全依赖版本——边界在收紧，这也解释了为什么它今天能带着“完全本地”的叙事重新冲榜。

### 4. pbakaus/impeccable

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/pbakaus/impeccable |
| 简介 | The design language that makes your AI harness better at design. |
| 语言 | Rust |
| 总 Star | 87,537 |
| 今日新增 | 1,113 stars today |
| 标签 | 前端设计、Agent 技能、确定性规则、Rust、CLI 工具 |

第二日上榜，日增由 +733 升到 +1,113（+52%），位次由第 6 升到第 4，是今日总 Star 最高的项目（87,537）。由 Paul Bakaus 开发，README 明说它从 Anthropic 的 frontend-design 技能起步：所有模型都在同一批 SaaS 模板上训练，不给约束就会长出同一张脸（Inter 通吃、紫蓝渐变、卡片套卡片、彩底灰字、每个标题上方一个圆角方块图标）。它给的是 npx impeccable install 一条命令 + /impeccable init（把产品事实写进 PRODUCT.md，与表层视觉方向分开记录）+ 24 个子命令（polish / audit / critique / distill / bolder / quieter 等）+ 62 条确定性检测规则——CLI 与浏览器扩展跑这批规则时不调用任何 LLM、不需要 API key。这一点让它和第 2 名的 hallmark 形成完整对照：一个是 LLM 自审 + 浏览器 lint，一个是把规则做成可离线执行的确定性检测器。两条互斥路线今天同时上涨，说明“让 Agent 做出来的界面不像 AI 做的”已经是真实且不收敛的需求。

### 5. pollen-robotics/microduck

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/pollen-robotics/microduck |
| 简介 | A Tiny biped duck robot 🦆 |
| 语言 | Rust |
| 总 Star | 11,562 |
| 今日新增 | 657 stars today |
| 标签 | 具身智能、强化学习、Rust、嵌入式、机器人固件 |

第二日上榜，日增由 +381 升到 +657（+72%），是今日加速幅度第二的项目。约 25 厘米、800 克的机器鸭，走的路子和一般硬件项目完全不同：这个仓库是“鸭子的大脑”——Rockchip RK3566 上跑几个 daemon，50 Hz 控制循环驱动 15 个舵机，策略来自隔壁 microduck_rl 的 MuJoCo + PPO 训练再导出 ONNX 加载。七个守护进程（robotd / updaterd / configd / btd / padd / mediad / tofd）走同一份 JSON-RPC 契约，全部不经框架手写 Rust；updaterd 的每条更新都要签名、健康检查不过自动回滚。它会走、会滚、会用喙捡东西、被打翻能自己站起来，还能“用只属于自己的声音”叫。它上榜靠的不是参数，而是“硬件成为开源软件的载体”这件事本身。

### 6. TauricResearch/TradingAgents

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/TauricResearch/TradingAgents |
| 简介 | TradingAgents: Multi-Agents LLM Financial Trading Framework |
| 语言 | Python |
| 总 Star | 114,438 |
| 今日新增 | 636 stars today |
| 标签 | Multi-Agent、量化研究、LangGraph、金融、LLM |

今日新上榜，是十一席里总 Star 最高的项目（114,438，比第 2 名还高约 3 万）。一个面向学术研究的多智能体 LLM 交易框架（ArXiv 2412.20138），用 LangGraph 把真实交易公司的分工搬进图里：分析师团队（基本面、情绪、新闻、技术面）并行出报告 → 看涨/看跌研究员结构化辩论 → 研究经理 → 交易员定仓位 → 风控团队 → 组合经理批/驳回 → 模拟交易所执行。几个工程细节值得点名：模型分两层，quick-think 服务分析师/研究员/交易员，deep-think 服务研究经理与组合经理；数据是 point-in-time 的，SEC EDGAR 报表按 filing 日期提供以避免前视偏差；记忆日志会记录每次决策，下次运行自动结算已过持有期的历史收益与 alpha，并把反思喂回组合经理。支持 OpenAI / Gemini / Claude / Grok / DeepSeek / Qwen / GLM / Bedrock / Ollama / 任意 OpenAI-compatible 端点，并可在 ticker/date 网格上做回测。README 自己写明了 not intended as financial, investment, or trading advice——它是研究脚手架，不是能赚钱的策略。

### 7. Renhuai123/ziwei-doushu

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Renhuai123/ziwei-doushu |
| 简介 | 紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据 |
| 语言 | TypeScript |
| 总 Star | 7,514 |
| 今日新增 | 255 stars today |
| 标签 | 紫微斗数、命理排盘、TypeScript、知识库、中文开源 |

回归项：10-17 ~ 10-19 连续三日在榜，10-24 掉榜一日后今日回来。项目的主张写得很直白——“算法是公开的传统智慧，不应该被锁在围墙里”，因此开源的是算法与知识库本身：基于倪海厦《天纪》教学体系的完整排盘算法、四化系统、格局知识库与古籍原文数据。真正的杀手锏是 2026-10-15 发布的 v4.0 解读数据集：674,976 张命盘 × 13 个维度 = 8,774,688 段解读，正文约 204 亿字，解压后 56.6 GB，覆盖 1950–2026 年（只含真实日期），较 v3.0 样本量 +30%、解压体积 +71%。同时开源者的立场也很克制：README 主动抄录倪师原话“斗数批六亲本来就比较差一点”，把父母、兄弟、子女三个维度均标为仅供参考。这类“把一门传统技艺的算法层彻底开放”的项目，是本榜少见的中文原创类型。

### 8. JetBrains/thinkrail

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/JetBrains/thinkrail |
| 简介 | Vibe code with pi in a lightweight, real IDE that customises itself around the way you work — The Vibe You Need |
| 语言 | TypeScript |
| 总 Star | 1,481 |
| 今日新增 | 52 stars today |
| 标签 | AI IDE、Vibe Coding、Agent Host、TypeScript、JetBrains |

今日新上榜（+52），是十一席里总 Star 与日增双低的一项（1,481 星 / +52），属榜单尾部的“真实但不热”样本，大概率由 JetBrains 官方账号带起关注度而非社区自发扩散。项目本身有分量：JetBrains 孵化、Apache-2.0 的轻量 IDE，本质是为 CLI Agent pi 提供 GUI host——复用 pi 的 .pi/prompts 提示词目录、AuthStorage 与 ModelRegistry，把 Agent 产出渲染进真实 IDE 的审阅闭环（Monaco diff、Changes / Review 评论线程、共享资源渲染器，连 MCP tool call 都渲染成卡片）。工程细节里最值得一提的是 WireModel：一个只保留 id / name / provider / contextWindow / reasoning 的 allowlist 投影，从 wire 上把 baseUrl / headers 抹掉，防止 JetBrains AI 代理的 token 经模型列表、会话创建与 WebSocket 帧外泄；入站的 {provider, id} 必须重新解析，绝不信任客户端给的 baseUrl。已完整汉化，plan 面板在中文语境下译作“计划”。

### 9. coollabsio/coolify

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/coollabsio/coolify |
| 简介 | An open-source, self-hostable PaaS alternative to Vercel, Heroku & Netlify that lets you easily deploy static sites, databases, full-stack applications and 360+ one-click services on your own servers. |
| 语言 | PHP |
| 总 Star | 64,233 |
| 今日新增 | 192 stars today |
| 标签 | PaaS、自托管、部署运维、PHP、Docker |

今日新上榜（+192），Apache-2.0。开源自托管 PaaS，一句话定位就是“跑在你自己服务器上的 Vercel / Heroku / Netlify”，支持静态站点、数据库、全栈应用与 360+ 一键服务；技术栈是 Laravel / PHP + InertiaJS + Svelte 5 + Docker Compose，原生管 PostgreSQL / MySQL / MariaDB / Redis。近期动作密集但都不是营销事件：10-24 helper 升到 1.0.19（顺带把 Alpine 3.24、Docker CLI 29.9.2、Compose 5.6.1、Buildx 0.38.1 一并带上），且所有 helper 下载改为 SHA256 校验、基础镜像按 digest 锁定、弃用 curl \| bash 安装器；10-25 又加了团队 Owner / Admin 可强制成员启用 2FA。V5 已于 2026-08-15 归档并移除运行时集成，当前活跃的主发布线是 v4.5。一个 6.4 万星的成熟基建项目今天以 +192 的低增量在榜，更像稳定基线的日常水位，而不是新一轮爆发。

### 10. cloudflare/security-audit-skill

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cloudflare/security-audit-skill |
| 简介 | A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings |
| 语言 | JavaScript |
| 总 Star | 46,632 |
| 今日新增 | 2,874 stars today |
| 标签 | 安全审计、Agent 技能、Cloudflare、机器可读报告、漏洞验证 |

连续第六日上榜，今日重回增量冠军（+2,874），把连续两日的回落（+2,979 → +2,706 → +2,271）一次性扳回来，增幅 +27%，创下 10-23 之后的最高值。Cloudflare 把内部漏洞发现 harness 的起点开源成 coding-agent 技能：一次审计跑六个阶段（侦察、覆盖度驱动狩猎、候选验证、结构化输出、独立核验、目标中立报告），结论硬性分为 confirmed / needs_validation / rejected 三级，针对的正是“Agent 安全审计报告塞满似是而非高危”这个通病。结合今天 hallmark / impeccable / claude-seo 的同榜——一份 Markdown 规范 + 一组脚本的形态，已经稳定占据本榜头部位置。

### 11. AgriciDaniel/claude-seo

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/AgriciDaniel/claude-seo |
| 简介 | Universal SEO skill for Claude Code. 26 sub-skills + 19 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, agent readiness (Lighthouse Agentic Browsing, WebMCP, llms.txt), backlinks, local SEO, e-commerce, international SEO, Google APIs, and PDF/Excel reporting. 9 optional extensions for live SEO data. |
| 语言 | Python |
| 总 Star | 20,706 |
| 今日新增 | 179 stars today |
| 标签 | SEO、Agent 技能、GEO/AEO、Claude Code、Python |

今日新上榜（+179），MIT 许可。一个跑在 Claude Code 里的全站 SEO 审计插件：26 个 sub-skills + 19 个 specialist sub-agents，最多 17 个 agent 同时审你的站，官方称 10–15 分钟出一份按影响排序的优先级行动计划，而不是一堆原始告警——每条发现都要说明它基于什么、依赖什么、以及你怎么验证修好了。当前版本 v2.5.0（2026-10-22），要求 Claude Code 1.0.33+ 与 Python 3.11–3.14（已移除 EOL 的 3.10），/seo setup 会准备隔离的 Python 运行时与 headless Chromium，不污染系统环境。最有意思的是它把“AI 搜索”当独立赛道做：/seo geo 针对 Google AI Overviews / AI Mode、ChatGPT、Perplexity、Gemini 的被引用概率，/seo agentic 则检查 Lighthouse Agentic Browsing、WebMCP、llms.txt 这类 agent readiness；评分权重里 AI Search 已占到 10%（Technical 22%、Content 23%）。19 个 agent 中需要判断力的 5 个跑 Opus，其余跑 Sonnet，且都可以在 agents/ 下自己改模型。它是今天第 4 个以“技能包”形态上榜的项目。

## 观察

1. **今日最值得记录的结构反转：存量第一次全面压过新面孔，而且没有一席在衰减。** 昨日保留的 5 席今日合计 +6,680（占全榜 70%），新上榜与回归的 6 席合计只有 +2,902；5 个存量增幅分别是 **hallmark +138%、microduck +72%、impeccable +52%、cindy +44%、security-audit-skill +27%**。这与本榜过去两周反复出现的形态完全相反 —— 10-24 的两个安全类存量还是 −16%、−28% 的衰减曲线。**一个合理解释是：这些东西已经从"看新鲜"进入"装进日常工作流"，安装与推荐替代 star 成为扩散方式，热度因此不再遵循单日脉冲衰减。** 此判断基于单日样本，下期需复核。
2. **今天是在榜的第二天，两条互斥路线双双加速 → "设计品味"赛道成立。** hallmark（第 4 → 2，+138%）与 impeccable（第 6 → 4，+52%）昨天才第一次出现，今天不但留在榜还同时前进。一个赛道里同时存在两种互斥实现（LLM 自审 + 浏览器 lint vs. 确定性规则引擎），且都能涨，通常意味着需求真实但解法未收敛 —— 10-24 已据此做出判断，今天得到第二个独立样本的确认。
3. **"技能包"已经不是本榜的一个赛道，而是它的默认形态。** 今日 11 席里，明确以此为形态的有 6 席：hallmark、impeccable、security-audit-skill、claude-seo，加上提供 `npx skills add` 的 VoiceStudio 与自带 skills 的 cindy；增量前四里占了三个。**值得注意的共同点：它们都不试图替代 Agent，而是假设你已经有一个 Agent，然后把自己作为一组 Markdown + 脚本挂上去。** 这与 9 月那批"再来一个 harness / 再来一个 SDK"的项目是截然不同的姿态 —— 竞争单位从"整个应用"缩到了"一个技能文件"。
4. **TradingAgents 以 11.4 万星的体量今日新上榜，是本期唯一的重度"硬核研究型"项目。** 其余十席基本围绕开发工作流（设计、安全、SEO、语音、部署、排盘、机器人、IDE），只有它把多智能体辩论、point-in-time 数据防前视偏差、记忆反思与网格回测做成一套完整方法论。**它提醒这份榜单仍会容纳真正的学术工程，只是出现频率极低。** 同时它 README 里那句免责声明值得抄下来挂在每一次"用 LLM 做交易决策"的讨论上。
5. **coolify 与 thinkrail 构成今日的"低增量真实样本"，不必过度解读位次。** 六万四星的 coolify +192（日常水位 + 连续 dependabot/安全加固）、一千五百星的 thinkrail +52（JetBrains 官方账号带流量）。本榜排序并非单一依据 star 增量这一点，10-24 已经记过一次（aws/agent-toolkit-for-aws 以 +11 排第 3），今天 coolify 以 +192 稳在第 9、thinkrail 以 +52 在第 8，属同类现象的第二、第三个样本。三次均为低增量项目排在榜单中段，**单点不足以归纳规则，但"位次 ≠ 日增排序"已可以当作本榜的已知特性记录。**
6. **今日掉榜的 5 席全部是"Agent 基础设施/云侧治理"类** —— NVIDIA/OpenShell（运行时沙箱）、aws/agent-toolkit-for-aws（云侧 MCP 官方包）、luongnv89/claude-howto（教程/技巧集）、google-gemini/gemini-cli（CLI harness）、jbiaojerry/ebook-treasure-chest（资源集）。**其中 OpenShell 与 agent-toolkit 正是 10-23 / 10-24 记录的那组"怎么限制 Agent 能碰到什么"的答案，两天全部退出。** 对照今天榜上没有一个新增的安全/权限类项目 —— **这条线从"上升中的主线"回落到零新增，只用了 48 小时。**

---

> 数据留档：本次与昨日报告的"今日新增"取自 Trending 页面在抓取时点的读数，与两次快照的总 Star 差值存在滚动窗口带来的小幅不一致（如 security-audit-skill 页面读数 +2,874，两次总 Star 差为 2,404），此为 GitHub Trending 页面自身的取样特性，非解析错误。
