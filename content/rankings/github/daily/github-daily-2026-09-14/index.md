---
title: GitHub 每日趋势榜 2026-09-14
description: 2026-09-14 GitHub Trending 榜首为 debpalash/VoiceStudio，当日共收录 20 个项目。
date: '2026-09-14T08:00:00+08:00'
rankingKey: '2026-09-14'
slug: github-daily-2026-09-14
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

2026-09-14 GitHub Trending 共收录 20 个项目，榜首 debpalash/VoiceStudio（2,774 stars today）。语言分布：Python 9、TypeScript 4、Rust 2、C 1、Go 1、JavaScript 1。

## 重点项目

### 1. debpalash/VoiceStudio

- 地址：https://github.com/debpalash/VoiceStudio
- 简介：VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.
- 语言：Python
- 今日新增：2,774 stars today
- 标签：语音克隆、本地部署、TTS·ASR、ElevenLabs 替代、646 语言

**首次夺冠。** 昨天是第 2 名，今天把 gods-eye-view 挤掉后登顶，且是"回归后连续第二日刷新自己的历史最高"——09-04 的 +1,345 是它此前的天花板，现在连续两天站上 2,500+。
增长质量也最扎实：单日涨幅 **10.74%（2,774 / 25,830）**，是全榜唯一"体量接近 3 万星还能两位数百分比增长"的项目；Fork/Star **12.2%（3,500 / 28,604）**，属于典型的"真的装下来用"。
卖点一句话讲得清：ElevenLabs 的完全本地开源替代，语音克隆、声音设计、视频配音、听写、转写、有声书一条龙，覆盖 646 种语言。不需要把声音数据交给任何云。
⚠️ 老提醒继续有效：**语音克隆可以冒充真人发声**，仅用于你拥有权利的声音或已明确授权的场景，用于欺诈／伪造／冒充在多数辖区违法。

### 2. JustVugg/colibri

- 地址：https://github.com/JustVugg/colibri
- 简介：Run frontier MoE models on hardware you already own — pure C, zero deps, experts streamed from disk. Tiny engine, immense model.
- 语言：C
- 今日新增：2,233 stars today
- 标签：MoE 推理、纯 C、零依赖、显存分层、消费级硬件

**今日涨幅冠军（+242.5%），从昨日第 4 直接跳到第 2。**
做的事很硬：用**纯 C、零引擎依赖**跑 744B～2.8T 参数的前沿 MoE 模型，把存储 / 内存 / 显存当成一个统一的推理层级（AI memory multitiering），experts 按需从磁盘流式加载。README 列出当前可跑九个家族：GLM-5.2/5.3（744B）、GLM-5.3-Flash（321B，带视觉）、Inkling（975B）、**Kimi K3（2.8T）**、DeepSeek V4 Flash（284B）、DeepSeek V4.1 Flash（552B）、Qwen3.8-Flash-Next、Qwen3.6、OLMoE——每个模型一个 C 文件，共用同一套 `coli chat` / `coli serve` / `coli web` 前端。
定位写得很克制且诚实：**"一个今天就能跑的推理引擎 + 一个开放研究平台"**，明确声明**速度没有 SLA，但语义有硬保证**（默认策略绝不静默改变模型输出）。这种"把不承诺的部分先说清楚"的写法在榜单里很少见。
Fork/Star **10.6%**，单日涨幅 **7.64%**，31,444 星。
⚠️ 两点实操提醒：① 首次运行要拉数十 GB 到 TB 级权重，先看磁盘和流量；② 别拿官方 benchmark 的绝对值当预期，性能随硬件与配置波动很大。

### 3. alibaba/open-code-review

- 地址：https://github.com/alibaba/open-code-review
- 简介：Fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.
- 语言：Go
- 今日新增：1,796 stars today
- 标签：AI 代码评审、行级评论、阿里开源、确定性+Agent 混合、多语言规则

**本日最值得研究的一个工程方法论样本。**
它正面回答了"为什么通用 Agent 做不好代码评审"：① 覆盖不全——改动一大就选择性漏文件；② **位置漂移**——报告的问题和真实代码行对不上；③ 质量不稳——纯自然语言驱动的 Skill 难以调试，prompt 微调就大幅波动。根因是"纯语言驱动的架构缺少对评审过程的硬约束"。
解法是**确定性工程 × Agent 的混合分工**：不该出错的步骤交给工程逻辑（精确选文件、相关文件智能打包成隔离上下文的子 Agent、模板引擎做细粒度规则匹配、独立的评论定位与反思模块），该动态决策的部分留给 Agent（场景化 prompt、从大规模生产数据的工具调用轨迹里蒸馏出来的专用工具集）。
成绩单给得很具体：在 **50 个热门开源仓库 / 200 个真实 PR / 10 种编程语言**、由 80+ 资深工程师交叉标注出 **1,505 个 ground-truth 问题**的 benchmark（AACR-Bench，数据集已上 Hugging Face）上，同底层模型下**精确率和 F1 显著高于通用 Agent（Claude Code），token 只消耗约 1/9，且更快**——同时它坦白**召回率低于通用 Agent，这是刻意选的"宁可少报也不吵"的取舍**。
来历是阿里巴巴集团内部跑了两年多、服务数万名开发者、发现数百万缺陷后孵化开源；挂了 OpenSSF Best Practices **Gold** 徽章，支持 Claude Code / Codex / Cursor，Windows / macOS / Linux 全平台。除 diff 评审外 `ocr scan` 还能对整个目录做审计。
Fork/Star **7.3%**（全榜偏低，说明是"装来用"而非"拉下来改"），单日涨幅 **7.76%**。

### 4. ever-co/ever-gauzy

- 地址：https://github.com/ever-co/ever-gauzy
- 简介：Ever® Gauzy™ - Open Business Management Platform (ERP/CRM/HRM/ATS/PM)
- 语言：TypeScript
- 今日新增：1,095 stars today
- 标签：ERP·CRM·HRM、开源商业平台、TypeScript、⚠️ AGPL-3.0、跨仓导流

**本系列记录到的最大单日跳升：+1,787.9%**（此前纪录是 09-09 的 i-have-adhd +995.7%）。昨天它还是全榜最后一名（+58），今天排第 4。
⚠️ **但涨幅来源需要拆开看**：README 的 "What's New" 第一条不是 Gauzy 自身的功能更新，而是 **"我们刚发布了 Ever Works —— 一个 7×24 自主调研、交付和运维整个业务的 agentic runtime"**，并直接贴链接求 Star；第二条同样在推另一个兄弟项目 **Ever Teams**。也就是说，**这 +1,095 里相当一部分是同组织跨仓导流的流量，不是 Gauzy 这个功能被新用户采用了**。Fork/Star **17.0%** 全榜第三高，也更像"导流型点击"而非"落地部署"。
项目本身是真货：开源商业管理平台，覆盖 ERP / CRM / HRM / ATS / 项目管理 / 工时与生产力追踪，提供 headless API。
⚠️ 硬约束不变：**AGPL-3.0**，即使只做网络服务化（SaaS）也会触发源码开放义务，商用前务必找法务确认授权范围。

### 5. asgeirtj/system_prompts_leaks

- 地址：https://github.com/asgeirtj/system_prompts_leaks
- 简介：Extracted system prompts from Anthropic - Claude Fable 5.1, Opus 5, Claude Design, Claude Code. OpenAI - ChatGPT GPT-6-Astra, Codex. Google - Gemini 3.8 Flash, 3.1 Pro, Antigravity. xAI - Grok, Grok Bot, Cursor, Kimi and more! Updated regularly.
- 语言：JavaScript
- 今日新增：770 stars today
- 标签：系统提示词、提示词泄露、厂商对比、持续更新、⚠️ 非官方来源

榜单里最稳定的一个"底座型"项目：连续三日在榜，涨幅从 +270 → +727 → +770，**第三日增速明显放缓（+5.9%）**，符合"脉冲后进入稳态"的形态。
内容覆盖 Anthropic（Claude Fable 5.1 / Opus 5 / Claude Design / Claude Code）、OpenAI（GPT-6-Astra / Codex）、Google（Gemini 3.8 Flash / 3.1 Pro / Antigravity）、xAI Grok，以及 Cursor、Kimi 等，且持续更新。
Fork/Star **16.3%**，全榜第四高——这类仓库的 Fork 往往是"我要留一份快照"，不完全等于使用深度。
⚠️ 关键定性：内容是**泄露物而非官方发布**，厂商随时会改。适合用来理解各家行为边界与设计取舍，**不宜当"可直接抄的最佳实践"**。

### 6. TauricResearch/TradingAgents

- 地址：https://github.com/TauricResearch/TradingAgents
- 简介：TradingAgents: Multi-Agents LLM Financial Trading Framework
- 语言：Python
- 今日新增：756 stars today
- 标签：多智能体、量化交易、LLM 金融、arXiv 论文、⚠️ 非投资建议

**10 万星级的老牌多智能体金融框架，回归即翻倍。**
有 arXiv 论文（2412.20138）背书，README 顶部挂 v0.4.0 发布公告，重点是修掉了 FRED 宏观数据、社交情绪和决策日志里的**前视偏差（look-ahead）/ point-in-time 问题**——这是量化回测里最容易做出"虚假高收益"的坑，能公开修这个是加分项。还提供 8 种语言的 README 翻译。
Fork/Star **19.2%**，全榜第二高；单日涨幅仅 **0.72%**（105,819 星体量下的稳态流量）。
⚠️ 三点必须说清：① 这是**研究框架，不是投资建议**，回测结果漂亮的策略在实盘上亏钱是常态；② 前视偏差这类问题即使修过也建议自己再验一遍数据时间对齐；③ 接真实券商 API 前先想清楚资金风险。

### 7. Panniantong/Agent-Reach

- 地址：https://github.com/Panniantong/Agent-Reach
- 简介：Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.
- 语言：Python
- 今日新增：640 stars today
- 标签：Agent 联网、多平台读取、零 API 费用、一条命令装、⚠️ 平台条款

**今天最"说人话"的一个项目。** 开篇直接列痛点：让 Agent 看 YouTube 教程拿不到字幕、搜推特评价要付费 API、抓 Reddit 被 403、看小红书必须登录、B 站被风控拦截——"这些不难实现，但是需要自己折腾配置"。
解法是把安装变成一句话："帮我安装 Agent Reach：\<url\>"，复制给 Agent，几分钟后它就能读推特、搜 Reddit、看 YouTube。更新同样一句话。**`agent-reach doctor`** 一条命令告诉你哪个通、哪个不通、怎么修。
设计上有个很聪明的点：**每个平台都是"首选 + 备选"多后端路由**，接入方式失效了自动换下一个，用户无感。README 给了实例：2026-06 yt-dlp 被 B 站风控封死 → 已切换到 bili-cli，用户零操作。平台表覆盖了网页 / YouTube / RSS / 全网搜索 / GitHub / Twitter / B 站 / Reddit / Facebook / Instagram / 小红书 / LinkedIn / V2EX / 雪球 / 小宇宙播客，且明确标注哪些"装好即用"、哪些"配置后解锁"。隐私上声明 Cookie 只存本地、不上传，Twitter 只接受用户手工导出的 Cookie。
⚠️ 三点：① **抓取受登录态保护的内容（小红书、Instagram、Facebook）触及平台服务条款**，且用它绕过风控本身有争议，仅限自有账号与合规用途；② README 顶部有一整块**带推广／ referral 属性的赞助位**（BrowserAct、腾讯云带 referral_code、CoreClaw 带 utm 参数），阅读时要区分项目能力和广告；③ "零 API 费用"指的是不用官方付费 API，不是零成本。

### 8. SnailSploit/Claude-Red

- 地址：https://github.com/SnailSploit/Claude-Red
- 简介：claude-red is a curated library of offensive security skills designed for the Claude skills system. Each skill is a structured SKILL.md file that primes Claude with expert-level methodology for a specific attack surface — from SQLi to shellcode, EDR evasion to exploit development.
- 语言：Python
- 今日新增：606 stars today
- 标签：红队技能库、SKILL.md、攻击面方法论、连续三日在榜、⚠️ 授权要求

**今天在方法论上最重要的一条：它是本系列第一个满足"连续三日在榜"标准的攻防 Skill 包项目。**
09-12 首次收录（+99，排第 14）→ 09-13 放大到 +507（+412.1%）→ 今日 +606，**三日连续放大、无一回落**。本系列 09-13 记录过"攻防能力正以 Skill 包形式被打包分发"这个形态，但当时只有两日；今天 pentagi 掉榜、只剩它一根独苗，反而让它独自满足了三日标准。
形态很清楚：不是工具，是**一本给 Claude 的攻击方法论教科书**——每个 skill 是一个结构化 SKILL.md，按攻击面组织（SQLi、shellcode、EDR 规避、漏洞利用开发等），把专家级套路直接灌进模型的上下文。
单日涨幅 **15.38%**（4,545 星），Fork/Star **13.6%**。
⚠️ 红线说死：**仅限授权红队、漏洞赏金、CTF 与安全研究；对未授权目标使用属违法行为。**

### 9. multimodal-art-projection/YuE

- 地址：https://github.com/multimodal-art-projection/YuE
- 简介：YuE2: frontier music generation with symbolic planning, zero-shot covers, and agentic music editing.
- 语言：Python
- 今日新增：578 stars today
- 标签：音乐生成、符号化编曲、零样本翻唱、Agentic 编辑、⚠️ 24GB 显存

路线和常见的"文本直接出音频"不同：**AR–NAR Mixture-of-Transformers 主干先自回归预测"乐谱 + 语义 token"，再用 flow matching 生成声学潜变量，最后由 VAE 解码成 48 kHz 立体声（不做量化）**。创作、翻唱、编辑三者的差别只在于"乐谱从哪来"——模型自己生成、从录音转写、或编辑已有编曲。这个设计让"改一段旋律但保留人声"这类操作成为可能，是它相对纯端到端方案的实际优势。
连续两日在榜且稳步放大，单日涨幅 **7.61%**，Fork/Star **11.0%**。
⚠️ 硬件门槛：Linux + Python 3.12 + BF16 NVIDIA GPU + **24 GB 显存**，跑之前先确认显卡。

### 10. huggingface/transformers

- 地址：https://github.com/huggingface/transformers
- 简介：🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio, and multimodal models, for both inference and training.
- 语言：Python
- 今日新增：528 stars today
- 标签：ML 框架、多模态、Hugging Face、事实标准、16.6 万 Star

**全榜体量最大（16.6 万星），今天从 +102 跳到 +528（+417.6%），是留存项里涨幅第二。**
这种量级的仓库日涨幅通常只有 0.1%~0.3%（今天 0.32%），能翻四倍基本只有两种可能：大版本发布，或某条重磅模型/新闻把流量引到整个生态。今天榜单里同时有 VoxCPM（#17）、YuE（#9）、colibri（#2）三个直接依赖它的项目在榜，**更可能是生态共振而非框架自身的单点事件**——本条为推断，未做独立核实。
Fork/Star **20.8%**，全榜最高，符合"事实标准"的地位。

### 11. 666ghj/MiroFish

- 地址：https://github.com/666ghj/MiroFish
- 简介：A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物
- 语言：Python
- 今日新增：524 stars today
- 标签：群体智能、多智能体推演、预测引擎、GraphRAG、⚠️ 预测效力未验证

**今天概念最激进的一个。** 用法是：上传种子材料（数据分析报告，或者干脆一个有意思的小说故事）+ 用自然语言描述预测需求 → 它返回一个详细预测报告和一个可深度交互的高保真数字世界。
流程分四步：**图谱构建**（种子抽取 + 个体/集体记忆注入 + GraphRAG 建图）→ **环境搭建**（实体关系抽取 + 人格生成 + Agent 配置注入）→ **并行模拟**（双平台并行 + 自动解析预测需求 + 动态时序记忆更新）→ 输出。README 里的演示案例是"武汉大学舆情模拟"和"**基于红楼梦前八十回数十万字推演遗失结局**"，还挂了在线 Demo。
愿景写得很清楚：宏观层是决策者的"零风险预演实验室"（政策、公关可先测），微观层是个人创意沙盒。仓库挂了盛大（Shanda）logo。
⚠️ 这是本日**最需要打折扣看**的项目：① "预测万物"是营销表述，**模拟推演的输出不等于预测准确性**，README 没有给出任何可验证的预测准确率 benchmark；② 用 LLM 生成的人格去模拟人类社会，存在已知的系统性偏差（模型立场、人格刻板化、涌现行为被误读为规律）；③ 若用于真实决策（如舆情、金融），**不能用它替代实证方法**。Fork/Star **15.5%** 偏高，72,955 星的体量也说明它已运营一段时间。

### 12. tech-leads-club/agent-skills

- 地址：https://github.com/tech-leads-club/agent-skills
- 简介：The secure, validated skill registry for professional AI coding agents. Extend Antigravity, Claude Code, Cursor, Copilot and more with absolute confidence.
- 语言：TypeScript
- 今日新增：506 stars today
- 标签：技能注册表、安全扫描、Snyk、多 Agent、MCP

**踩在一个真痛点上**：技能市场里"超过 13% 的 skill 含关键漏洞"（引自 Snyk 的 agent-scan 报告），它要做的是经过验证、测试、加固的**可信技能注册表**，覆盖 Antigravity / Claude Code / Cursor / Copilot，并提供 MCP Server。
工程规范度很高：TypeScript 100%、Nx Cloud、semantic-release、Node ≥ 22、npm 包 `@tech-leads-club/agent-skills`。单日涨幅 **9.31%**，Fork/Star **8.6%**。
⚠️ 冷静看两点（与昨日一致）：① 那个 13.4% 来自 **Snyk 自己的报告，属利益相关方数据**，方向可信但数值需独立验证；② "已扫描"不等于"无风险"，注册表本身也是一个新的信任集中点——它只是把信任从市场转移到了这个仓库的维护者身上。

### 13. ruvnet/RuView

- 地址：https://github.com/ruvnet/RuView
- 简介：π RuView turns commodity WiFi signals into real-time spatial intelligence, vital sign monitoring, and presence detection — all without a single pixel of video.
- 语言：Rust
- 今日新增：370 stars today
- 标签：WiFi 感知、穿墙检测、生命体征、Home Assistant、⚠️ 隐私敏感

**"用 WiFi 看穿墙壁"**——把普通路由器已经充满空间的无线电波当成传感器，检测人、测呼吸和心率、追踪移动、监控房间，**穿墙、全黑、无摄像头、无可穿戴设备**。README 一句话概括："Just physics."
落地路径做得意外地务实：原生对接四大智能家居生态——**Home Assistant**（一个 `--mqtt` 标志即可接入 HA-DISCO）、**Apple Home / HomePod**（作为可发现的 HAP-1.1 桥）、**Google Home** 与 **Amazon Alexa**（经 HA 桥或 Matter 端点）。每个节点暴露 **21 个实体**（11 个原始信号 + 10 个推断语义状态：有人睡着、可能遇险、房间活跃、老人久未活动异常、会议进行中、浴室占用、跌倒风险升高、离床、无移动、跨房间移动等），另附 3 个 HA Blueprint。Siri / Google Assistant / Alexa 可以直接语音播报各房间存在与生命体征，零自定义 skill。
Rust 实现，9.4 万星，Fork/Star **13.3%**，单日涨幅仅 **0.40%**（典型大仓稳态流量）。
⚠️ **本日隐私敏感度最高的项目**：能力本质是"在对方不知情、无摄像头的情况下感知其位置与生命体征"。即使用于老人看护等正当场景，**在他人住所或未经告知的共享空间部署，在多数辖区会触及隐私与监控法律红线**。仅用于自有空间并明确告知在场人员。

### 14. peetzweg/opendisplay

- 地址：https://github.com/peetzweg/opendisplay
- 简介：Free, open-source Sidecar/Duet alternative — use your iPhone or iPad as a true second monitor for your Mac over USB or WiFi. Low latency H.264, Retina HiDPI, touch input.
- 语言：Swift
- 今日新增：314 stars today
- 标签：副屏扩展、Sidecar 替代、USB 低延迟、Retina、免订阅

**今天最"小而美"的一个。** 动机写得极有说服力：把 iPhone/iPad 变成 Mac 副屏本是已解决的问题，但**每个选项都有个"但是"**——Apple Sidecar 免费却要求同一 Apple ID、不支持 iPhone、且只认特定硬件对；Duet Display 转了订阅制；Luna Display 要买硬件狗。OpenDisplay 补的就是那个缺失选项：**免费、开源、无账号、无狗**。
技术上不是玩具：**真正的显示扩展**（macOS 把它当真实第二显示器，可拖窗口、可在系统设置里排列），不是镜像；**USB 有线走 macOS 内置 usbmuxd** 达到最低延迟，插上就用、不依赖网络；WiFi 模式靠 Bonjour 零配置发现；Retina/HiDPI、H.264 低延迟管线、触摸与滚动输入回传都已可用。README 还直接劝退想自己写的人："难的部分（虚拟显示创建、低延迟 H.264 管线、USB 传输、输入注入）已经做完了，来贡献吧。"
Swift 实现，单日涨幅 **10.11%**，Fork/Star **7.1%**（偏低，符合"装来用"的终端工具类项目）。

### 15. reconurge/flowsint

- 地址：https://github.com/reconurge/flowsint
- 简介：A modern platform for visual, flexible, and extensible graph-based investigations. For cybersecurity analysts and investigators.
- 语言：TypeScript
- 今日新增：279 stars today
- 标签：OSINT、图数据库、可视化调查、Apache-2.0、⚠️ 合规使用

开源 OSINT 图探索工具，定调是"为道德调查、透明与可验证而设计"，顶上除了 License 徽章还专门挂了 **Ethical Software** 徽章并配有独立的 `ETHICS.md`——这在 OSINT 工具里是加分项，说明作者把滥用问题当一等公民处理。
部署用 Docker + Make（Linux/macOS），Windows 走 cmd/PowerShell 的 bat 流程，门槛不高。README 自己承认"仍在早期开发、很需要社区帮助"。
Apache-2.0，单日涨幅 **3.51%**，Fork/Star **12.4%**。
⚠️ OSINT 的老问题不变：**聚合公开数据会拼出可识别个人的画像**，用于人肉搜索、骚扰或未经授权的调查在多数辖区违法。用它之前先读 `ETHICS.md`，且注意目标辖区的数据保护法规。

### 16. localsend/localsend

- 地址：https://github.com/localsend/localsend
- 简介：An open-source cross-platform alternative to AirDrop
- 语言：Dart
- 今日新增：213 stars today
- 标签：局域网传文件、AirDrop 替代、全平台、无服务器、Flutter

**今天最"日用"的一个。** 免费开源、跨平台，通过 REST API + HTTPS 加密在局域网内互传文件和消息，**不需要互联网、不需要第三方服务器**——这也是它相对各种"云盘中转"方案的核心优势（快、且不经由他人服务器）。
Flutter/Dart 实现，覆盖 Android / iOS / macOS / Windows / Linux，9.1 万星。Fork/Star **5.6%**（全榜偏低，终端用户型项目的正常形态），单日涨幅 **0.23%**，是典型的经典项目稳态流量。
属于那种"不需要解释为什么会上榜"的项目：**跨平台文件互传是个长期未被解决好的刚需**，AirDrop 只在苹果生态内闭环。

### 17. OpenBMB/VoxCPM

- 地址：https://github.com/OpenBMB/VoxCPM
- 简介：VoxCPM2: Tokenizer-Free TTS for Multilingual Speech Generation, Creative Voice Design, and True-to-Life Cloning
- 语言：Python
- 今日新增：204 stars today
- 标签：无分词器 TTS、扩散自回归、多语种、声音克隆、中文团队

**今天语音赛道的第三个样本**（与 VoiceStudio #1、YuE #9 同台），技术路线是三者里最"反主流"的：**完全去掉离散分词器**，用端到端的**扩散自回归架构**直接生成连续语音表征，绕开 tokenization 带来的信息瓶颈，追求更自然、更有表现力的合成。
出自 OpenBMB（MiniCPM 团队），有 arXiv 技术报告（2606.06928）、HF Space 在线 Demo、ReadTheDocs 文档，权重同时上了 Hugging Face 和 ModelScope。3.7 万星，Fork/Star **11.4%**，单日涨幅 **0.55%**。
⚠️ 与 VoiceStudio 同样的提醒：**"True-to-Life Cloning"意味着可高度还原真人音色**，仅用于你拥有权利的声音或已获授权的场景。

### 18. dani-garcia/vaultwarden

- 地址：https://github.com/dani-garcia/vaultwarden
- 简介：Unofficial Bitwarden compatible server written in Rust, formerly known as bitwarden_rs
- 语言：Rust
- 今日新增：110 stars today
- 标签：密码管理器、Bitwarden 兼容、自托管、Rust、⚠️ 自担安全责任

Bitwarden 客户端 API 的第三方服务器实现，用 Rust 写成，**兼容官方 Bitwarden 客户端**——这是它全部价值所在：官方服务资源占用重，自托管场景下这个替代品可以跑在树莓派级别的硬件上。6.7 万星，AGPL-3.0，Docker 镜像生态成熟。
Fork/Star **4.8%**（全榜最低之一），单日涨幅 **0.16%**，纯稳态流量。
⚠️ 两条：① **"非官方"意味着兼容性与安全性没有官方背书**，官方客户端更新后可能出现短暂不兼容，升级前先看 release notes；② **自托管密码库 = 你的全部凭据由你自己负责运维**，备份、TLS、访问控制、漏洞补丁全在你身上，配置不当的暴露实例比用云服务更危险。

### 19. rlaope/oh-my-hermes

- 地址：https://github.com/rlaope/oh-my-hermes
- 简介：All in one plugin for Hermes Agent ⚚ the coding intelligence, a long-term memory system and model optimized workflow packages
- 语言：Python
- 今日新增：52 stars today
- 标签：Hermes Agent 插件、长期记忆、工作流编排、证据边界、早期项目

给 **NousResearch/hermes-agent** 做的一体化插件，定位值得单独说一句：**"Install once. Keep Hermes. Add a stronger operating layer."** —— 它明确不替换 Hermes、也不在其后藏一个编码执行器，而是在 Hermes 原生 skill 之上加一层"操作系统"：**框定问题 → 选择工作流与证据闸门 → 把原生 skill 当作能力在受管控的路径里执行**。README 反复强调 "explicit evidence boundaries"（显式证据边界）和 "an honest record of what actually happened"（如实记录实际发生了什么）。
这个方向本身是当下 Agent 工程里很关键的一条线——**不是让 Agent 更能干，而是让它干的事可被追责、可被验证**。但项目只有 1,884 星/+52，是全榜倒数第二，明显处于早期，先观察不推荐直接上生产。
Fork/Star **8.1%**，单日涨幅 **2.84%**。

### 20. Crosstalk-Solutions/project-nomad

- 地址：https://github.com/Crosstalk-Solutions/project-nomad
- 简介：Project NOMAD is an offline-first knowledge and education server. Wikipedia, thousands of books, courses, maps, and optional local AI, all running on hardware you own with no internet required.
- 语言：TypeScript
- 今日新增：26 stars today
- 标签：离线优先、知识服务器、自建部署、本地 AI、⚠️ curl·bash 安装

**本系列记录的末位门槛新低：+26**（此前最低是 09-11 的 +36）。3.7 万星的老项目以 +26 上榜，本身就是一个信号——**今天榜单的尾部准入条件非常宽松**（关于这一点详见 3.1）。
做的事是"永不离线的知识与教育服务器"：维基百科、数千本书籍、课程、地图，加可选的本地 AI，全部跑在你自己的硬件上、完全不需要互联网。安装是纯终端流程，**只需要 sudo/root 权限跑一条 `curl … | bash`**，装完通过浏览器访问，因此也可以当无桌面的服务器用。支持 Ubuntu 26.04 LTS（推荐）、24.04 LTS、Debian 12。有独立官网、Discord 和公开的 benchmark 排行榜。
单日涨幅 **0.07%**，是纯稳态流量里的稳态。
⚠️ 两点：① 安装是 **`curl | bash` + sudo/root**，执行前务必先读脚本内容；② 自带本地 AI 意味着较大的磁盘与算力开销，装之前确认硬件。

## 观察

- debpalash/VoiceStudio 今日 2,774 stars today，居当日增量第 1 位。
- JustVugg/colibri 今日 2,233 stars today，居当日增量第 2 位。
- alibaba/open-code-review 今日 1,796 stars today，居当日增量第 3 位。
