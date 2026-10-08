---
title: GitHub 每日趋势榜 2026-09-11
description: 2026-09-11 GitHub Trending 榜首为 bilawalsidhu/gods-eye-view，当日共收录 16 个项目。
date: '2026-09-11T08:00:00+08:00'
rankingKey: '2026-09-11'
slug: github-daily-2026-09-11
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

2026-09-11 GitHub Trending 共收录 16 个项目，榜首 bilawalsidhu/gods-eye-view（3,642 stars today）。语言分布：TypeScript 6、Python 4、JavaScript 1、Shell 1、C 1、Go 1。

## 重点项目

### 1. bilawalsidhu/gods-eye-view

- 地址：https://github.com/bilawalsidhu/gods-eye-view
- 简介：A spy satellite simulator in your browser, except the data is real. Live open source spatial intelligence on a photorealistic 3D globe.
- 语言：JavaScript
- 今日新增：3,642 stars today
- 标签：3D 地球、开源情报、实时数据、语音交互、可视化

今天唯一的"非 Agent 项目冠军"，也是**第一次有可视化/消费级项目压过 Agent 技能类**登顶。卖点是"间谍卫星模拟器的壳 + 完全公开的真实数据"：逼真 3D 地球上叠加实时飞机、船舶、卫星、地震、交通与公共摄像头，配语音免提交互与实时 Agent。
README 里那排功能很能说明完成度——座舱视角（跟着被追踪航班贴地飞行）、250 km 范围内目标清单、点任意目标即锁定并交接给最近的实时摄像头、语音在地球上画标注多边形、真实机型 3D 模型（787 / ATR-72 / Citation / Bell 206 / MQ-9）、GLSL 传感器滤镜（CRT / 夜视 / 热成像 / 黑白 / 雪地）、检测框叠加、军用 HUD、场景导演拍片、以及**把视角/风格/图层甚至追踪目标序列化进 URL 的分享链接**。
**Fork/Star 20.5%（5,378 / 26,296）是全榜第二高**——说明是真克隆下来跑，不是点个 star 就走。无 API Key 也能直接跑（Pinokio 一键装或本地终端启动），Key 是可选增强，这个设计对传播帮助极大。作者 Bilawal Sidhu 的 YouTube 系列播放量 500 万+、全平台 2500 万+。
⚠️ 中性提醒：数据全是公开源，但"任意目标 + 最近摄像头交接"的能力本身就是隐私敏感话题，用它做监控他人要自负法律与道德后果。

### 2. ayghri/i-have-adhd

- 地址：https://github.com/ayghri/i-have-adhd
- 简介：A skill to stop your coding agent from burying the answer. ADHD-friendly output.
- 语言：Python
- 今日新增：3,440 stars today
- 标签：输出风格、Agent Skills、反废话、可读性、极简

连续第四次在榜，**回落曲线比想象中温和得多**——从 +4,624 的脉冲顶一路滑到 +3,440，三天只掉 25.6%，说明它已经不是一次性流量，而是沉淀成了"默认该装的一个 skill"。跨过 4 万 Star 也印证了这点。
它做的事极简：动作先行、步骤编号、禁止 "Hope this helps!" 之类客套铺垫。README 的 Before/After 对比很有说服力——Before 是一大段铺垫后才说出结论，After 第一行就是结论。安装也刻意降低门槛：把一句话粘进 CLI，让它自己去读 `AGENTS.md`，不用记命令。
📌 但今天的看点其实在**它被谁超了**：一个不教 Agent 新能力、只改说话方式的技能，和一个能看实时地球的 3D 应用差 202 个 Star——说明"表达层治理"这个赛道的热度天花板已经摸到了，后续大概率是长尾而非再暴涨。

### 3. github/spec-kit

- 地址：https://github.com/github/spec-kit
- 简介：💫 Toolkit to help you get started with Spec-Driven Development
- 语言：Python
- 今日新增：985 stars today
- 标签：规范驱动开发、Agent 工具链、1.0 发布、GitHub 官方、多 Agent 适配

今天最"正统"的一条。GitHub 官方出品的规范驱动开发工具包，**README 顶部挂着 1.0.0 发布公告**——第一个 commit 满一年，维护者那篇《Spec Kit Turns One — and Ships 1.0.0》里有一句很值得记：*"当 Agent 让适应变化的成本急剧下降，价值就从稳定性转移到了适应性上，所以 1.0.0 现在只是个数字。"*
定位是"不绑定任何 Agent"的规范驱动流程：自带一套开箱流程，也允许你换成自己的；支持扩展（Extensions）与预设（Presets），还按角色打包了 Bundles。13.5 万 Star 的体量下还能单日近千，属于**巨量基数上的真实活跃**，不是小基数脉冲。
📌 和 #4 superpowers 放一起看很有意思：同样是"给 Agent 立规矩"，spec-kit 走的是**写规范文档、用 CLI 固化流程**（组织级、可审计），superpowers 走的是**装技能、让 Agent 自己守流程**（个人级、零配置）。两条路今天同时在榜前四。

### 4. obra/superpowers

- 地址：https://github.com/obra/superpowers
- 简介：An agentic skills framework & software development methodology that works.
- 语言：Shell
- 今日新增：731 stars today
- 标签：开发方法论、技能框架、TDD、子智能体、多客户端

全榜体量最大的项目（28.5 万 Star），也是**今日最稳的一个数**——两次快照之间差 1 个 Star。这个量级下的 +731 含金量不低：0.26% 的日增长率看着小，但它是唯一一个能连续多日维持三位数增量的"老大哥"。
它的姿态和 spec-kit 正好互补：不是给你一套模板让你填，而是把 TDD、子智能体调度、跨客户端复用这套开发方法论直接装进 Agent 的行为里。
📌 值得注意的超大基数现象：Fork/Star 8.9%（25,504 / 285,182）在本榜属正常区间，说明没有出现部署型刷量特征。

### 5. nashsu/llm_wiki

- 地址：https://github.com/nashsu/llm_wiki
- 简介：LLM Wiki 是一个跨平台桌面应用，把你的文档自动变成结构化、互相链接的知识库。不同于传统 RAG（每次都从零检索作答），它增量构建并持续维护一份持久 wiki。
- 语言：TypeScript
- 今日新增：640 stars today
- 标签：知识库、增量构建、反 RAG、多格式解析、MCP

今天涨得最猛的留存项，也是**"反 RAG"路线目前最完整的一个实现**。核心主张很清晰：RAG 每次都重新检索再答，知识没有被积累；它则把知识"编译一次、持续更新"，形成持久 wiki。
功能密度高得离谱：两步式 CoT 摄取（先分析再生成、带溯源和增量缓存）、PDF 内嵌图的多模态摄取（视觉 LLM 生成事实性描述 + 以图搜图）、PDF/Office/EPUB/MOBI/Org/网页批量解析（支持本地 MinerU）、四信号知识图谱（直链 / 源重叠 / Adamic-Adar / 类型亲和）、Louvain 社区发现、崩溃可恢复的摄取队列、文件夹监听自动同步、Deep Research 自动入库，还有 **Rust 写的后端聊天 Agent + 本地 HTTP API + 内置 MCP Server + 可一行装进 Claude Code/Codex 的 agent skill**。
基于 Karpathy 的 llm-wiki 模式实现（README 明确致谢），从抽象设计模式做成了完整桌面产品。

### 6. alsk1992/CloddsBot

- 地址：https://github.com/alsk1992/CloddsBot
- 简介：开源 AI 交易 Agent，跨 1000+ 市场自主运作（Polymarket、Kalshi、Binance、Hyperliquid、Solana DEX、5 条 EVM 链）。自主扫描优势、即时执行、风险管理。
- 语言：TypeScript
- 今日新增：627 stars today
- 标签：交易 Agent、预测市场、多链、⚠️ 代币发行、⚠️ 真实下单

今日增速冠军，但也是**风险等级最高的一个**。技术层面做得挺全：119+ skills、1000+ 市场、机对机支付的 "agent commerce protocol"、自建于 Claude、可自托管。README 自称 14 天 10.7k 克隆、参加了 Colosseum Agent Hackathon。
⚠️ **三条硬风险，务必看清楚**：
① **README 顶部直接挂着代币合约地址（CA，pump 后缀）**——即项目已发币。热度、克隆数与币价可能互为因果，**Star 增量不能当作技术认可度来读**。
② **它会用真实资金下单**。跨 CEX + DEX + 预测市场自动执行，一旦策略有 bug 或风控参数写错，是真金白银的亏损，且不可逆。
③ Fork/Star 13.7% 偏高，有部署型/刷量混合特征。
→ 想研究它的 Agent 架构没问题；**想真跑，请用隔离的小额钱包和独立 API Key，不要放主账户资金**。

### 7. vastsa/PI-Desktop

- 地址：https://github.com/vastsa/PI-Desktop
- 简介：本地优先的 AI 编码 Agent 桌面工作台：Electron + Rust 宿主内核 + pi Agent Harness + 可安装插件
- 语言：TypeScript
- 今日新增：545 stars today
- 标签：本地优先、桌面 Agent、Electron+Rust、插件体系、⚠️ 早期预览

三次在榜、连续两日站上 500+，是"桌面 Agent 工作台"这条线上最稳的选手。价值主张写得很直白：多数编码 Agent 寄生在终端、编辑器插件或托管服务里，PI-Desktop 给它们一个**独立的 workspace**——项目、会话、评审、文件、预览、通知、扩展全在一处，且"无账号、无强制中继、不锁定编辑器"、自带模型（OpenAI/Anthropic/本地/任意 OpenAI 兼容 API，按会话切换）。
⚠️ README 明确标注 **Early Preview**：API、扩展接口和部分桌面行为仍会演进，生产环境慎用。

### 8. armory3d/armorpaint

- 地址：https://github.com/armory3d/armorpaint
- 简介：Graphics Creation Tools
- 语言：C
- 今日新增：354 stars today
- 标签：3D 绘制、PBR 贴图、开源图形工具、Blender 生态、游戏美术

今天**除了冠亚军之外涨幅最猛**的一个，也是本榜**唯一一个纯图形/内容创作工具**（顺带说一句：它的 About 简介只有 "Graphics Creation Tools" 四个词，朴素到近乎敷衍，但热度不靠文案）。
ArmorPaint 是 Armory3D 生态下的开源 PBR 3D 绘画工具，长期作为 Blender 的贴图绘制搭档存在。在 Agent 相关项目占满榜单的当下，一个传统图形工具以 +354 冲到第 8——**这是"行情泛化"的信号**：日榜不再只有 Agent 叙事。
📌 与 #1 gods-eye-view、#15 pascalorg/editor 放一起看，今天**"看得见的 3D"拿了 4,079 增量 / 34.0%**，是本榜第二大主题簇。

### 9. p1neappleXpress/OpenFlux

- 地址：https://github.com/p1neappleXpress/OpenFlux
- 简介：Network stack research tool. TCP tunnel with pluggable transports.
- 语言：Go
- 今日新增：201 stars today
- 标签：TCP 隧道、可插拔传输、SOCKS5、⚠️ 合规风险、网络研究

技术上是个"把 TCP 包塞进第三方应用通道"的隧道研究工具：客户端跑 SOCKS5，出口节点解封装转发；目前两个 transport —— 借 Yandex Docs 光标消息传包、借 MAX 的 WebRTC DataChannel 传包。代码结构（transport / tunnel / 虚拟网卡 / raw socket / socks5）写得挺规整，Go 1.26.3+、可编译桌面与 Android/iOS 客户端。
⚠️ **必须说清楚的三点**：
① README 开头就是一大段 Disclaimer，反复声明"不鼓励用于绕过限制、不对使用后果负责、纯非商业"，并强调功能只是"架构上的巧合"——这类声明本身就是风险提示，不是免责符。
② MAX transport 明确标注**实验性**，且警告"不要用主账号、外部 VPS 可能导致账号受限、限制可能在停用后保留"。
③ 在受管制网络环境中使用此类工具可能违反当地法律法规与服务条款。
→ **只建议在自有网络与授权环境内做协议研究**，别拿它当日常翻墙方案。

### 10. Sonarr/Sonarr

- 地址：https://github.com/Sonarr/Sonarr
- 简介：Smart PVR for newsgroup and bittorrent users.
- 语言：C#
- 今日新增：174 stars today
- 标签：媒体自动化、PVR、Usenet·BT、经典项目、.NET

本榜**最"古董"也最不需要介绍**的项目——Sonarr 是运行了十几年的媒体库自动追剧 PVR，与 Radarr（电影）、Lidarr（音乐）同属一个生态，是自建 NAS/媒体中心的事实标准组件之一。
出现在日榜上通常意味着有新版本发布带动了关注。它的价值不在于新，而在于**它代表的那类"长周期、被长期信任的开源基础设施"**——在 Agent 项目三天一换的榜单里，一个 15.6k Star 的 .NET 老项目以 +174 稳稳在榜，反而是种对照。
⚠️ 合规提示：PVR 本身是中立工具，但索引与下载受版权内容受各地法律约束，请确保只用于你拥有合法权利的内容。

### 11. alphaXiv/OpenResearch

- 地址：https://github.com/alphaXiv/OpenResearch
- 简介：Run parallel research agents with any model
- 语言：Rust
- 今日新增：156 stars today
- 标签：研究 Agent、并行实验、本地优先、实验树、多 Agent 后端

今天"研究 Agent"赛道里**唯一做实验闭环**的那个。多数深度研究工具止步于"搜资料写报告"，OpenResearch 直接把目标定在"autoresearch"——提出假说、改代码、跑实验、看证据、决定下一步。
几个设计点很有意思：**每个研究方向一个独立 Agent 会话 + 独立 git worktree**（天然隔离）；变异记录在 git-native 实验树上，每次运行都留不可变归档；日志、diff、产物与产生它们的那次运行绑在一起（证据在上下文里）；后端可选 Claude Code / Codex / OpenCode，算力可选本地 / 自有基础设施 / 托管计算；同一份提交快照能跑在本地、SSH、Slurm、K8s、Ray、HF Jobs、Modal、Tinker。
有桌面应用（本地 dashboard `127.0.0.1:4791`）与 CLI（`orx up`）。Windows 支持仍在 beta。

### 12. jihe520/MathModelAgent

- 地址：https://github.com/jihe520/MathModelAgent
- 简介：专为数学建模设计的 Agent & skills，自动完成数学建模，生成一份完整的可以直接提交的论文。
- 语言：Python
- 今日新增：132 stars today
- 标签：数学建模、多智能体、论文生成、中文项目、桌面版

目标极窄也极明确——**把 3 天的数学建模比赛压缩到 1 小时**。多智能体分工（建模手 / 代码手 / 论文手），每个 agent 可配不同模型，代码执行支持本地 Jupyter 或云端 E2B / Daytona，最后直接产出排版好的论文。作者强调"workflow agentless，不依赖 Agent 框架"，成本低；技术栈走 litellm，兼容几乎所有模型。
有 macOS（Developer ID 签名 + 公证）和 Windows 桌面版，内置 Claude Code 与全套 skills，装好填 API Key 就能跑。
⚠️ 两点实测提示：
① **Windows 安装包当前未签名**，会触发 SmartScreen，务必只从官方 Releases 页下载。
② 使用场景天然带**学术诚信边界**——如果是课程作业或竞赛提交，先确认所在机构对 AI 辅助的明文规定，别踩线。

### 13. melgarafael/DeskcommCRM

- 地址：https://github.com/melgarafael/DeskcommCRM
- 简介：开源 AI 销售操作系统——自托管 CRM，内置 AI Agent + WhatsApp（WAHA）。Kommo / Octadesk / Intercom 的开源替代。
- 语言：TypeScript
- 今日新增：126 stars today
- 标签：CRM、WhatsApp、自托管、AI 销售、⚠️ 推广分成

**Fork/Star 40.1%（471 / 1,174）是全榜最高，比第二名高出近一倍**——这类曲线通常意味着"大量人真的在部署它"，而不是点个 star。技术栈是 Next.js 16 + TypeScript strict + Supabase（Postgres/Auth/Storage），MIT 协议，主打"无月租、无功能锁、数据在自己手上"，面向靠聊天成交的中小生意（尤其巴西市场，README 提供葡/英/西三语）。
⚠️ **两个必须提醒的点**：
① README 里放了一条 **HostGator 合作推广/返利链接**，并提供了 `curl ... | bash` 一键安装脚本。-executing 远程脚本前请先读一遍内容（README 也贴心地给了"先 clone 再跑、不确认不安装"的替代方式）。
② 自托管 CRM + WhatsApp 自动化涉及客户个人数据（README 提到 LGPD 合规），部署前请确认所在地区的数据合规要求；WhatsApp 自动化也可能触及平台服务条款，**商用前务必自查封号风险**。

### 14. jordan-gibbs/hyperresearch

- 地址：https://github.com/jordan-gibbs/hyperresearch
- 简介：Agent 驱动的研究知识库。Agent 收集、检索并综合网络研究，沉淀为持久可搜索的 wiki。
- 语言：Python
- 今日新增：118 stars today
- 标签：深度研究、引用校验、对抗式评审、知识库沉淀、Claude Code

**今天最"较真"的深度研究工具**，几条设计直接冲着现有 Deep Research 的通病去的：
- **每条引用在出稿前都被验证**——一个"怀疑论引用检查器"逐条核对被引来源是否真的支持那句话，幻觉引用和未标注撤稿直接拦在门外。
- **转载不算共识**——独立性审计会把同源转载聚类，五篇通稿按一篇的权重算。
- **对抗式构造**——四个批评者并行攻击每份草稿，修补器只被允许做外科手术式编辑（工具锁定为 Read+Edit），物理上无法重写整篇报告。
- **付费论文是"读"不是"略读"**——会向 Unpaywall / Europe PMC 索取合法开放获取全文存进库，而不是拿 1500 字符摘要当读过，且每处替换都会披露。
16 步流水线（分解 → 宽度扫描 → 矛盾图 → 深度调查 → 三稿并行 → 综合 → 四批评者 → 定向补漏 → 打补丁），单次 `premier` 规模 250+ 来源，崩溃可从 manifest 续跑。
⚠️ 一处需要降权看待：README 的 benchmark 图说"领先 DeepResearch-Bench 排行榜"，但**图下小字写明这是内部分层试点的前瞻性投影，第三方验证尚未完成**——榜单图暂不能当作已证事实。

### 15. pascalorg/editor

- 地址：https://github.com/pascalorg/editor
- 简介：开源 3D 建筑编辑器，带本地 CLI、MCP 工具，以及面向人类与 AI Agent 的实用工作流。
- 语言：TypeScript
- 今日新增：83 stars today
- 标签：3D 建筑设计、WebGPU、R3F、MCP、开源

老面孔第三次在榜，今天是明显降温的一次。它的定位一直很清楚：不做通用 3D 工具，而是**把 3D 建筑设计这套专业工作流同时开放给人和 Agent**——WebGPU + React Three Fiber 打底，配本地 CLI 与 MCP 工具，让 Agent 能真正操作 3D 场景而不是只能聊天。
⚠️ 沿用 09-09 的提示：npm 上的 `beta` tag 落后于仓库，装到的是旧运行时；需要新能力请装 GitHub 预发布包并校验 SHA256。

### 16. nab138/iloader

- 地址：https://github.com/nab138/iloader
- 简介：User friendly sideloader
- 语言：TypeScript
- 今日新增：36 stars today
- 标签：iOS 侧载、SideStore、配对文件、跨平台、桌面工具

**本榜门槛线**——+36 就能上榜，本身就是今天"尾部很薄"的直接证据（09-09 末位 +97，09-11 09:10 末位 +72，一路下探到 +36）。
iloader 是 iOS 侧载工具，把装 SideStore、导入证书、自动放置 pairing+lockdown 配对文件这些原本要手工倒腾的步骤做成图形界面，还带智能错误建议、配对文件管理、开发与证书 ID 查看/吊销。Windows / macOS / Linux / NixOS 全支持。
⚠️ README 反复强调**只有仓库和 iloader.app 是官方下载渠道**，Homebrew cask / AUR / COPR 均为社区维护的非官方包，别从任何其他站点下载——侧载工具被投毒的代价是整台手机。
📌 合规提示：侧载本身在欧盟等地区受法规支持，但在其他地区可能违反 Apple 服务条款，请按所在地规则使用。

## 观察

- bilawalsidhu/gods-eye-view 今日 3,642 stars today，居当日增量第 1 位。
- ayghri/i-have-adhd 今日 3,440 stars today，居当日增量第 2 位。
- github/spec-kit 今日 985 stars today，居当日增量第 3 位。
