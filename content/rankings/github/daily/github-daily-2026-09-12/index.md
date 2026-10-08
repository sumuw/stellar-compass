---
title: GitHub 每日趋势榜 2026-09-12
description: 2026-09-12 GitHub Trending 榜首为 bilawalsidhu/gods-eye-view，当日共收录 16 个项目。
date: '2026-09-12T08:00:00+08:00'
rankingKey: '2026-09-12'
slug: github-daily-2026-09-12
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

2026-09-12 GitHub Trending 共收录 16 个项目，榜首 bilawalsidhu/gods-eye-view（2,265 stars today）。语言分布：Python 4、TypeScript 3、JavaScript 2、Go 2、Java 1、C 1。

## 重点项目

### 1. bilawalsidhu/gods-eye-view

- 地址：https://github.com/bilawalsidhu/gods-eye-view
- 简介：A spy satellite simulator in your browser, except the data is real. Live open source spatial intelligence on a photorealistic 3D globe.
- 语言：JavaScript
- 今日新增：2,265 stars today
- 标签：3D 地球、开源情报、实时数据、语音交互、可视化

今日唯一破千的项目，独占全榜 **39.6%**。虽然比昨日峰值回吐了近四成，但这是**本系列少见的"非 Agent 项目连续两日霸榜"**——而且昨天它是从 Agent 技能类手里抢的榜首，今天守住了。
卖点依旧是"间谍卫星模拟器的壳 + 完全公开的真实数据"：逼真 3D 地球上叠加实时航班、船舶、卫星、地震与公共摄像头，配语音免提交互。完成度体现在细节——座舱视角贴地跟飞、250 km 目标清单、点目标即锁定并交接最近的实时摄像头、GLSL 传感器滤镜（CRT／夜视／热成像）、军用 HUD，以及把视角/图层/追踪目标序列化进 URL 的分享链接。
**Fork/Star 20.3%（5,835 / 28,808）是全榜最高**，说明是真克隆下来跑。无 API Key 也能直接启动，这个设计对传播帮助极大。
⚠️ 中性提醒：数据全为公开源，但"任意目标 → 最近摄像头交接"的能力本身隐私敏感，用于监控他人须自负法律与道德后果。

### 2. melgarafael/DeskcommCRM

- 地址：https://github.com/melgarafael/DeskcommCRM
- 简介：开源 AI 销售操作系统——自托管 CRM，内置 AI Agent + WhatsApp（WAHA）。Kommo / Octadesk / Intercom 的开源替代，MCP-ready、多租户、符合 LGPD。
- 语言：TypeScript
- 今日新增：505 stars today
- 标签：CRM、WhatsApp、自托管、AI 销售、⚠️ 推广分成

今日**增速冠军**，也是唯一一个在总盘腰斩的日子里逆势翻四倍的项目。
**Fork/Star 32.1%（529 / 1,650）全榜最高，比第二名（gods-eye-view 20.3%）高出 12 个百分点**——这条曲线通常意味着大量人真的在部署，而不只是点 star。技术栈 Next.js 16 + TypeScript strict + Supabase（Postgres/Auth/Storage），MIT 协议，主打"无月租、无功能锁、数据在自己手上"，面向靠聊天成交的中小生意（README 提供葡/英/西三语，明显主打巴西市场）。
⚠️ **两个必须提醒的点（沿用 09-11 判断，今日复核仍然存在）**：
① README 里有一条 **HostGator 合作推广/返利链接**，并提供 `curl ... | bash` 一键安装脚本——执行远程脚本前请先读一遍内容（README 也给了"先 clone 再跑"的替代方式）。
② 自托管 CRM + WhatsApp 自动化涉及客户个人数据；WhatsApp 自动化可能触及平台服务条款，**商用前务必自查封号风险与所在地区的数据合规要求**（README 自称 LGPD 合规，但这是巴西法规，不等于你所在地合规）。

### 3. alsk1992/CloddsBot

- 地址：https://github.com/alsk1992/CloddsBot
- 简介：开源 AI 交易终端，跨预测市场、加密现货、永续合约自主运作（Polymarket、Kalshi、Binance、Hyperliquid、Solana DEX、多条 EVM 链）。自主扫描优势、即时执行、风险管理。
- 语言：TypeScript
- 今日新增：377 stars today
- 标签：交易 Agent、预测市场、多链、⚠️ 代币发行、⚠️ 真实下单

连续第二日在榜，昨日冲到 +627 后今日回吐四成——**又一次印证"单日冲高的新项目多为脉冲"**。
⚠️ **本次复核 README，三条硬风险全部仍在，且范围扩大了**：
① **README 顶部正中直接挂着代币合约地址 `Clodds CA: 2puc76ehVHyPXhZmDprtP2phDSFE4kzZKDT4JgAWpump`**（pump 后缀），并设有独立的 **Token Launch** 章节。热度、克隆数与币价可能互为因果，**Star 增量不能当作技术认可度来读**。
② **它会用真实资金下单**：跨 CEX + DEX + 预测市场自动执行，且 README 明写支持 **token launches 与 Bittensor 子网挖矿**——新增资金盘与挖矿敞口。策略有 bug 或风控参数写错就是不可逆的真金白银亏损。
③ Fork/Star 12.8% 偏高，有部署型/刷量混合特征。
→ 研究它的 Agent 架构没问题；**想真跑，请用隔离的小额钱包和独立 API Key，绝对不要放主账户资金**。

### 4. p1neappleXpress/OpenFlux

- 地址：https://github.com/p1neappleXpress/OpenFlux
- 简介：Network stack research tool. TCP tunnel with pluggable transports.
- 语言：Go
- 今日新增：355 stars today
- 标签：TCP 隧道、可插拔传输、SOCKS5、⚠️ 合规风险、网络研究

今天**少见的"连续两日加速"**——在总盘腰斩 52.3% 的日子里还能 +76.6%，含金量比绝对值看起来更高。单日涨幅 +36.3%，全榜第二。
技术上是个"把 TCP 包塞进第三方应用通道"的隧道研究工具：客户端跑 SOCKS5，出口节点解封装转发；目前两个 transport —— 借 Yandex Docs 光标消息传包、借 MAX 的 WebRTC DataChannel 传包。代码结构（transport / tunnel / 虚拟网卡 / raw socket / socks5）规整，Go 1.26.3+，可编译桌面与 Android/iOS 客户端。
⚠️ **三点必须说清楚（沿用 09-11 判断）**：
① README 开头就是一大段 Disclaimer，反复声明"不鼓励用于绕过限制、不对使用后果负责、纯非商业"——这类声明本身就是风险提示，不是免责符。
② MAX transport 标注**实验性**，警告"不要用主账号、外部 VPS 可能导致账号受限、限制可能在停用后保留"。
③ 在受管制网络环境中使用此类工具可能违反当地法律法规与服务条款。
→ **只建议在自有网络与授权环境内做协议研究**，别拿它当日常翻墙方案。

### 5. jihe520/MathModelAgent

- 地址：https://github.com/jihe520/MathModelAgent
- 简介：专为数学建模设计的 Agent & skills，自动完成数学建模，生成一份完整的可以直接提交的论文。
- 语言：Python
- 今日新增：264 stars today
- 标签：数学建模、多智能体、论文生成、中文项目、桌面版

连续第二日在榜且**在总盘腰斩的日子里精确翻倍**，是今天最"稳"的上涨之一。目标极窄也极明确——把 3 天的数学建模比赛压缩到 1 小时：多智能体分工（建模手 / 代码手 / 论文手），每个 agent 可配不同模型，代码执行支持本地 Jupyter 或云端 E2B / Daytona，最后直接产出排版好的论文。技术栈走 litellm，兼容几乎所有模型；作者强调"workflow agentless，不依赖 Agent 框架"，成本可控。
⚠️ 两点提示（沿用 09-11）：① **Windows 安装包未签名**，会触发 SmartScreen，务必只从官方 Releases 页下载；② 使用场景天然带**学术诚信边界**，课程作业或竞赛提交前先确认所在机构对 AI 辅助的明文规定。

### 6. yuliskov/SmartTube

- 地址：https://github.com/yuliskov/SmartTube
- 简介：Browse media content with your own rules on Android TV
- 语言：Java
- 今日新增：247 stars today
- 标签：Android TV、开源播放器、去广告、⚠️ 供应链事故、⚠️ 密钥泄露

**今日头号风险项目，也是本系列第一次遇到"作者在榜项目顶部自曝供应链安全事故"的案例**。
⚠️⚠️ **README 第一行就是重要安全公告**（原文大意）：*作者的开发环境被不明恶意软件感染，少量构建产物可能已受影响；检测到后已全盘擦除重建，现在所有构建都过 VirusTotal 扫描，F-Droid 版本发布前也会校验。**公钥可能已泄露**，因此更换了新公钥并提供了备份恢复指引。*
换句话说——**这是一个今天还在涨 247 星、33k Star 体量的项目，其作者刚刚公开声明签名密钥可能已失陷**。任何手上有旧版 APK 的用户都应当按 README 指引吊销 Google 账号授权并更新到新版。
抛开事故本身，SmartTube 是 Android TV / 电视盒子上最主流的开源 YouTube 客户端之一：SponsorBlock 集成、8K/60fps/HDR、可调速、看直播聊天、不依赖 Google 服务。README 同时声明 **Fire Stick 4k Select 及更新机型（亚马逊 VegaOS）已不再兼容**。
⚠️ 另一条硬提示：**绝不要从任何应用商店、APK 站点或博客下载**——README 明确说这些是他人上传、可能含恶意代码或广告，官方只走仓库 Releases 与 F-Droid。

### 7. Shubhamsaboo/awesome-llm-apps

- 地址：https://github.com/Shubhamsaboo/awesome-llm-apps
- 简介：100+ 开源 AI Agent、Agent Skills 与 RAG 应用，全部手工搭建并端到端测试，Apache-2.0。
- 语言：Python
- 今日新增：237 stars today
- 标签：应用合集、Agent Skills、RAG、教程生态、Apache-2.0

**全榜体量第二大的项目（13.7 万 Star）**，也是今天"经典项目稳态流量"的代表——+237 看着不起眼，但落在 13.7 万的基数上是 +0.17%，属于健康的日常曝光，不是脉冲。
值得留意的是它的进化方向：已经从早年的"应用合集"长成了**带质量门禁的技能仓库**。README 里 Agent Skills 一栏写着"每个 skill 都附带真实代码，并通过安全 + eval 的 CI 门禁"，一条命令装进 Claude Code / Codex / Cursor。几个技能的名字很能体现现在的口味——`project-graveyard`（找出你所有烂尾的副业项目并告诉你每个为什么死）、`first-reader`（模拟真实读者读你的草稿，报告他们在哪里失去兴趣）、`scope-creep-detector`（检查 diff 是否超出了它声称的意图）。
📌 这类"元技能"（审视开发者自己的行为，而不是帮开发者写代码）与本周早些时候 i-have-adhd、ponytail 那条线一脉相承，只不过换了个更轻松的外壳。

### 8. armory3d/armorpaint

- 地址：https://github.com/armory3d/armorpaint
- 简介：Graphics Creation Tools
- 语言：C
- 今日新增：237 stars today
- 标签：3D 绘制、PBR 贴图、开源图形工具、Blender 生态、游戏美术

昨日涨幅冠军（+391.7%）今日回吐三分之一，但**仍稳在 +237，是它连续第二日站上 200+**——说明昨天那波不是纯脉冲，有真实沉淀。
ArmorPaint 是 Armory3D 生态下的开源 PBR 3D 绘画工具，长期作为 Blender 的贴图绘制搭档。它的 About 简介只有 "Graphics Creation Tools" 四个词，朴素到近乎敷衍，但热度不靠文案。
📌 与 #1 gods-eye-view、#12 YuE 放一起看，今天**"看得见的创作工具"拿到 2,695 增量 / 47.1%**，是本榜第一大主题簇——不过其中 **84.1% 由 gods-eye-view 一个项目贡献**，单点驱动，暂不能算赛道成立。

### 9. Sonarr/Sonarr

- 地址：https://github.com/Sonarr/Sonarr
- 简介：Smart PVR for newsgroup and bittorrent users.
- 语言：C#
- 今日新增：228 stars today
- 标签：媒体自动化、PVR、Usenet·BT、经典项目、.NET

连续第二日在榜且逆势上涨三成。Sonarr 是运行了十几年的媒体库自动追剧 PVR，与 Radarr（电影）、Lidarr（音乐）同属一个生态，是自建 NAS/媒体中心的事实标准组件。
在 Agent 项目三天一换的榜单里，一个 15.9k Star 的 .NET 老项目稳在 +228，本身就是种对照——**它代表的那类"长周期、被长期信任的开源基础设施"**，热度来源和脉冲型项目完全不同。
⚠️ 合规提示：PVR 本身是中立工具，但索引与下载受版权内容受各地法律约束，请确保只用于你拥有合法权利的内容。

### 10. asgeirtj/system_prompts_leaks

- 地址：https://github.com/asgeirtj/system_prompts_leaks
- 简介：逐字捕获的泄露系统提示词——ChatGPT、Claude、Gemini、Grok 等聊天机器人在你发第一条消息之前收到的隐藏指令与规则。
- 语言：JavaScript
- 今日新增：216 stars today
- 标签：系统提示词、提示词泄露、厂商对比、持续更新、媒体引用

今天**最有"档案价值"的一个**。65k Star 的体量，本质上是一份持续维护的厂商系统提示词档案库，按厂商分目录（Anthropic / OpenAI / Google / xAI / Meta / Perplexity / Kimi / Misc），每条都标了捕获日期。
最近更新密度很高：Claude Code headless（Fable 5.1，9/5）、Codex GPT-6-Astra（9/4）、Claude Fable 5.1（9/1）、Grok 4.6（8/29）、Gemini 3.7 Flash（8/18）、Meta Muse Code（8/17）、Claude Cowork（8/17）。其中 **Claude Design 那一条甚至附带了完整提示词 + 53 个工具 + 22 个 skills + 10 个起始组件**。
📌 影响力已经出圈：README 顶部挂着两条引用——《华盛顿邮报》用它做了互动报道《看见 AI 背后的隐藏规则》（2026-05-11），欧洲政策研究中心 CEPS 用它做了实时数据看板（2026-07-10）。
⚠️ 使用提示：这些是**泄露内容**，不是官方发布。可用来理解各家 Agent 的行为边界与设计取舍，但把它当作"可直接抄的最佳实践"要谨慎——厂商随时会改，且这些提示词本就不是为外部消费而写的。

### 11. nab138/iloader

- 地址：https://github.com/nab138/iloader
- 简介：User friendly sideloader
- 语言：TypeScript
- 今日新增：209 stars today
- 标签：iOS 侧载、SideStore、配对文件、跨平台、桌面工具

**今日涨幅冠军**。昨天它还是全榜垫底的 +36（门槛线），一天之后翻到 +209——这是"日榜当日排名严重低估次日爆发"这一规律的又一个例证（该规律在 09-09 首次记录：当时涨得最猛的 i-have-adhd 前一日排第 12）。
iloader 是 iOS 侧载工具，把装 SideStore、导入证书、自动放置 pairing+lockdown 配对文件这些原本要手工倒腾的步骤做成图形界面，还带智能错误建议、配对文件管理、开发与证书 ID 查看/吊销。Windows / macOS / Linux / NixOS 全支持。
⚠️ README 反复强调**只有仓库和 iloader.app 是官方下载渠道**，Homebrew cask / AUR / COPR 均为社区维护的非官方包——侧载工具被投毒的代价是整台手机。
📌 合规提示：侧载本身在欧盟等地区受法规支持，但在其他地区可能违反 Apple 服务条款，请按所在地规则使用。

### 12. multimodal-art-projection/YuE

- 地址：https://github.com/multimodal-art-projection/YuE
- 简介：YuE2：前沿音乐生成，支持符号化编曲规划、零样本翻唱与 Agentic 音乐编辑。
- 语言：Python
- 今日新增：193 stars today
- 标签：音乐生成、符号化编曲、零样本翻唱、Agentic 编辑、48kHz 立体声

今天**技术上最硬核**的一个。YuE2 的路线和常见"文本直接出音频"不同：**AR–NAR Mixture-of-Transformers 主干先自回归预测"乐谱 + 语义 token"，再用 flow matching 生成声学潜变量，最后由 VAE 解码成 48 kHz 立体声（不做量化）**。创作、翻唱、编辑三者的差别只在于"乐谱从哪来"——模型自己生成、从录音转写、或编辑已有编曲。
Python API 是分阶段的 `plan()` → `generate_semantic()` → `synthesize()` → `decode()`，这意味着**中间产物（乐谱、语义 token）可读可改可复用**——这才是它能做 Agentic 编辑的根本原因：Agent 操作的是乐谱，不是波形。README 给的例子是《最后一班列车》走 9 步 14 个版本，从中文流行改成英文爵士，换了和声还加了萨克斯独奏，每一步的对话、乐谱、提示词、歌词都能回看。
⚠️ **门槛不低**：Linux + Python 3.12 + 支持 BF16 的 NVIDIA GPU + **24 GB 显存**，模型首次运行时从 Hugging Face 下载。想跑先掂量下显卡。

### 13. vxcontrol/pentagi

- 地址：https://github.com/vxcontrol/pentagi
- 简介：完全自主的 AI Agent 系统，能够执行复杂的渗透测试任务（Pentesting AGI）。
- 语言：Go
- 今日新增：193 stars today
- 标签：自主渗透、Docker 沙箱、20+ 工具、知识图谱、⚠️ 授权要求

今天安全主题里体量最大的一个（23.2k Star）。架构上的几个设计点值得看：
- **全操作跑在隔离的 Docker 沙箱里**，甚至专门有一节讲"给 Agent Docker 而不把宿主机交出去"；
- 内置 **20+ 专业工具**（nmap、metasploit、sqlmap 等）；
- **长期记忆 + 可选 Graphiti 知识图谱**（Neo4j）记录研究成果与成功路径；
- 多专家 Agent 委派（研究 / 开发 / 基础设施），小模型下还有执行监控与任务规划增强；
- 外部检索接了 Tavily、Firecrawl、Perplexity、Sploitus、Searxng 等，还能用内置浏览器抓最新信息。
⚠️ **合规红线**：这是**自主渗透测试系统**，只可在你拥有所有权或已获得明确书面授权的环境中使用。对未授权目标运行属违法行为，与工具是否开源无关。

### 14. SnailSploit/Claude-Red

- 地址：https://github.com/SnailSploit/Claude-Red
- 简介：面向 Claude 的攻击性安全技能库——即插即用的 `SKILL.md` 文件，把 Claude 变成具备上下文感知的红队操作员。
- 语言：Python
- 今日新增：99 stars today
- 标签：红队技能库、SKILL.md、130 skills、23 分类、⚠️ 授权要求

**今天结构最清晰的一"套"东西**——**130 个 skill、23 个分类**，每个 skill 就是一个结构化的 `SKILL.md`，按对话触发按需加载（不用就不占上下文）。分类覆盖面广到有点意外：Web 应用 16 个（OWASP Top 10、业务逻辑）、无线 14 个（802.11 / WPA2-3 / EAP / WPS / evil-twin / BLE / Zigbee / Z-Wave / LoRa / sub-GHz）、基础设施与红队 7 个（初始访问、EDR 规避、Windows 内核）、漏洞利用开发 6 个、模糊测试与漏洞研究 4 个，另有云、移动、IoT/ICS、容器与 K8s、CI/CD 流水线、密码学、权限提升、后渗透、取证与 C2、供应链、社会工程、网络攻击，以及一个 **AI 安全**（提示注入、越狱、RAG 投毒）。
Fork/Star 15.8%（543 / 3,444）偏高，说明 clone 下来实际使用的人不少。
⚠️ **合规红线（与 #13 相同且更直接）**：这是**攻击性**技能库，README 自己列出的适用场景是"授权红队、漏洞赏金、安全研究、CTF、操作员训练"。把它装进 Agent 不等于获得了攻击授权——**对未授权目标使用属违法行为**。
📌 值得注意的产业信号：Claude-Red 与 #13 pentagi 同天在榜，一个是"给 Agent 装攻击方法论"，一个是"让 Agent 自主执行渗透"。**攻防能力正在以 Skill 的形式被打包分发**，这是本系列此前没有出现过的形态。

### 15. Flowseal/zapret-discord-youtube

- 地址：https://github.com/Flowseal/zapret-discord-youtube
- 简介：（GitHub About 为空，以下据 README 补写）基于 zapret / WinDivert 的 Windows DPI 规避脚本集合，针对 Discord、YouTube 等站点提供多种策略批处理，可一键安装为系统服务。
- 语言：Batchfile
- 今日新增：52 stars today
- 标签：DPI 规避、WinDivert、Windows 脚本、⚠️ 合规风险、⚠️ 杀软误报

今日**门槛最低也最敏感**的一个，33k Star 的老牌俄区项目。用法就是解压后跑 `.bat`：手动策略 `general.bat`、装成服务 `service.bat`，作者建议逐个试 ALT / FAKE 等不同策略直到找到可用的那个。前置条件还要求先在浏览器或系统里开启 Secure DNS。
⚠️ **三条必须提醒**：
① **合规风险最高的一类工具**：本质是 DPI 深度包检测规避，在受管制网络环境中使用可能违反当地法律法规与服务条款。本条仅作技术存在性记录，**不构成任何使用建议**。
② **WinDivert 会触发杀软**：README 用大段警告说明 WinDivert 是流量拦截过滤驱动，本身不是病毒，但杀软普遍将其归为 `Not-a-virus:RiskTool.Multi.WinDivert` 并隔离，需要手动加白名单或关闭 PUA 检测。**看到这个报毒名先别慌，但也请想清楚你在装什么。**
③ README 顶部有 "ФЕЙКИ"（假冒）警告：作者声明除本 GitHub 页外没有任何 Telegram / YouTube 渠道，**任何以他名义在其他地方分发的都是假的**。这类项目被冒充投毒的概率很高，只从本仓库 Releases 下载。

### 16. max-sixty/worktrunk

- 地址：https://github.com/max-sixty/worktrunk
- 简介：用于 Git worktree 管理的 CLI，专为并行运行 AI Agent 而设计。
- 语言：Rust
- 今日新增：44 stars today
- 标签：Git worktree、并行 Agent、CLI、钩子自动化、构建缓存共享

今日门槛线，但**它是今天唯一一个"为 Agent 时代而生"的开发工具**，值得单独说一句。
问题抓得很准：Claude Code / Codex 这类 Agent 已经能跑长任务，一个人同时管 5-10 个是常态；git 原生 worktree 能给每个 Agent 独立工作目录，但 UX 很难用——光是开一个新 worktree 就要把分支名打三遍（`git worktree add -b feat ../repo.feat` 然后 `cd ../repo.feat`）。
Worktrunk 把它压成 `wt switch feat`、`wt switch -c -x claude feat`（创建并直接起 Claude）、`wt remove`、`wt list`。在此基础上还有：生命周期钩子（create / pre-merge / post-merge）、LLM 生成 commit message、一条命令走完 squash+rebase+merge+清理、带实时 diff 预览的交互选择器，以及**十个 worktree 共享 `target/` `node_modules/` 构建缓存而不用各建一遍**（APFS / btrfs / XFS 上生效）。
Fork/Star 3.5%（251 / 7,091）是全榜最低——典型的"装来用、不改代码"，符合工具型项目的健康特征。作者自述 2026 年初发布，目前已成为最流行的 git worktree 管理器。
📌 在 Agent 技能类项目今天集体掉榜的背景下，worktrunk 和 #14 Claude-Red 恰好是"Agent 基建"剩下的两个端点：**一个管怎么让多个 Agent 不打架，一个管给单个 Agent 装什么能力。**

## 观察

- bilawalsidhu/gods-eye-view 今日 2,265 stars today，居当日增量第 1 位。
- melgarafael/DeskcommCRM 今日 505 stars today，居当日增量第 2 位。
- alsk1992/CloddsBot 今日 377 stars today，居当日增量第 3 位。
