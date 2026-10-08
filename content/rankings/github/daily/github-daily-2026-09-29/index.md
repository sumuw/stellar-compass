---
title: GitHub 每日趋势榜 2026-09-29
description: 2026-09-29 GitHub Trending 榜首为 debpalash/VoiceStudio，当日共收录 14 个项目。
date: '2026-09-29T08:00:00+08:00'
rankingKey: '2026-09-29'
slug: github-daily-2026-09-29
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

2026-09-29 GitHub Trending 共收录 14 个项目，榜首 debpalash/VoiceStudio（4,712 stars today）。语言分布：Python 4、TypeScript 4、Rust 2、TeX 1、C 1、HTML 1。

## 重点项目

### 1. debpalash/VoiceStudio

- 地址：https://github.com/debpalash/VoiceStudio
- 简介：开源、全本地的 ElevenLabs 替代方案——语音克隆、语音设计、视频配音、听写、转写与有声书制作，支持 646 种语言。
- 语言：Python
- 今日新增：4,712 stars today
- 标签：本地语音、语音克隆、Agent 接口、AGPL、多语言

本系列第 9 次在榜（09-01~09-04、09-13~09-15、09-28、今日），**+4,712 刷新其自身历史最高**（前高 3,274 @09-28，+43.9%），并从 #2 升到 #1。它的定位值得注意：既是面向人的桌面语音工作台（默认引擎 k2-fsa/OmniVoice），又同时提供 **Local API 与 MCP 供 Agent 调用**——是本期唯一把"多模态生成能力"直接做成 Agent 工具的项目。风险面也随之放大：AGPL-3.0 加"Clone voices only with permission"的自我约束，见 §3.7 第 1 条。

### 2. vectorize-io/hindsight

- 地址：https://github.com/vectorize-io/hindsight
- 简介：Hindsight: Agent Memory That Learns——面向 Agent 的记忆系统，强调"让 Agent 学习"而非仅"记住对话"。
- 语言：Python
- 今日新增：2,541 stars today
- 标签：Agent 记忆、长期学习、MCP、基准 SOTA、出网

第 4 次在榜（09-24、09-25、09-28、今日）。**今天它同时给出了本期最关键的一组对照**：计数器从 4,413 降到 2,541（**−1,872**），而 Star 总数从 40,260 涨到 42,330（**+2,070**）——**计数下降与真实 Star 上升同时发生**。这是 09-28 发现的「`stars today` 是滚动/重算窗口」在**跨日、同一时点（23:45）**下的第二次独立证据，也是当日最强的一次（昨天是 −107/+2,566 的日内切片）。README 主打 LongMemEval SOTA 与"已在 Fortune 500 生产使用"，但默认启动仍是 `export OPENAI_API_KEY=sk-xxx`，记忆抽取数据出网。

### 3. paperclipai/paperclip

- 地址：https://github.com/paperclipai/paperclip
- 简介：The open-source app everyone uses to manage agents at work——用看板管理一群 AI Agent 的开源编排系统。
- 语言：TypeScript
- 今日新增：2,412 stars today
- 标签：多 Agent 组织、预算治理、自托管、控制平面

第 3 次在榜。**本榜唯一 9 万星量级的项目**，94,126 星对应 2.63% 的当日涨幅，是典型的"大盘低活性"样本。定位很清晰：README 原话 "If OpenClaw is an _employee_, Paperclip is the _company_"——做 org chart、预算、治理、目标对齐。计数器 3,185 → 2,412（−24.3%），**连续第二日回落**。它集中持有各 provider 的 API key 与公司级 secrets，自托管机器即高价值目标，见 §3.7 第 4 条。

### 4. NVIDIA/OpenShell

- 地址：https://github.com/NVIDIA/OpenShell
- 简介：OpenShell is the safe, private runtime for autonomous AI agents——给自主 Agent 用的安全私有运行时。
- 语言：Rust
- 今日新增：978 stars today
- 标签：Agent 沙箱、内核级策略、形式化验证、厂商官方

**本系列 25 期以来第一个 NVIDIA 官方仓库**，也是今日 5 个全新面孔中增量最高的。做法与同类"给 Agent 加护栏"的项目不同：它**在内核层插桩**，对每次文件访问、系统调用、网络连接做运行时策略强制，并且在策略变更生效前用**形式化验证**预判"这次变更会放行哪些新访问"（如带凭据访问新主机、调用新 API 方法），命中则挂起等人工审批。Agent 全程看不到真实凭据，由 OpenShell 在批准端点上代为注入。Apache-2.0，但 README 明示 Windows 需 WSL 2（experimental）、且 0.1.x 才刚有 stable release cadence。

### 5. rohitg00/ai-engineering-from-scratch

- 地址：https://github.com/rohitg00/ai-engineering-from-scratch
- 简介：Learn it. Build it. Ship it for others.——从零学 AI 工程的结构化课程仓库。
- 语言：Python
- 今日新增：855 stars today
- 标签：AI 教程、523 课、学习路径、红队内容

第 4 次在榜（08-25、08-26、08-27、08-29、09-09、09-24、09-25、今日）。09-25 后掉榜两期，**今天以 +855 回归且高于 09-25 的水平**——是 09-28 §3.8 第 4 条判据"离榜项会不会杀回来"的正面答案之一。61,006 星 / 10,495 Fork 是全榜 Fork 绝对数第二高，但 1.42% 的当日涨幅说明它属于"长期关注型"而非爆发型。README 已达 108KB、523 课，含 MCP、Agent Skills、红队与 Many-Shot Jailbreaking 等教学内容。

### 6. VectifyAI/PageIndex

- 地址：https://github.com/VectifyAI/PageIndex
- 简介：📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG——用层级树索引 + LLM 推理检索取代向量检索。
- 语言：Python
- 今日新增：822 stars today
- 标签：无向量 RAG、树索引、推理检索、长文档

**本系列首次出现**。核心论点是"similarity ≠ relevance"：向量检索按语义相似召回，而专业文档需要的是相关性判定，相关性需要推理。做法是给每篇文档生成树状索引，再让 LLM 在树上做 agentic 搜索，从而得到可追溯、可解释、带上下文的检索结果，无需向量库、无需 chunking。主打场景是财报、法律文件、监管申报、技术手册、医学文献这类长文档。8 月新增的 SDK local mode 可完全本地跑（自带 LLM key），也可指向其 Cloud。**注意：README 未给出明确的开源许可声明**，且主打专业领域文档，见 §3.7 第 9 条。

### 7. mvschwarz/openrig

- 地址：https://github.com/mvschwarz/openrig
- 简介：Multi-agent harness that runs Claude Code and Codex together as one system——把多个编码 Agent 编成一个团队。
- 语言：TypeScript
- 今日新增：733 stars today
- 标签：多 Agent 编排、YAML 团队、tmux、早期项目

第 2 次在榜。昨天 09-28 §3.8 第 2 条判据要求它"第二日仍在榜"才升级为候选形态——**今天它过了这一关**（781 → 733，−6.1%，方向微降但席位守住）。README 的说法很形象："A harness wraps a model. A rig wraps your harnesses."——用 YAML 定义 Agent 团队，一条命令启动，Claude Code 与 Codex 在同一个 rig 里被当成一个系统管理。2,189 星的体量对应 50.34% 的当日涨幅，是全榜最高的相对增幅，也是**小基数效应**的典型样本（见 §3.6）。

### 8. dream-num/univer

- 地址：https://github.com/dream-num/univer
- 简介：The Office Harness for AI Agents——把表格、文档、幻灯片、Canvas、关系表、PDF 放进同一个运行时，供 AI Agent 操作。
- 语言：TypeScript
- 今日新增：692 stars today
- 标签：Office SDK、Agent 可操作表面、插件架构

**第 6 次在榜（09-22、09-23、09-24、09-25、09-28、今日）**，正好落在 6ee 记录的「连续在榜上限 5~6 天」边界。计数器 1,105 → 692（−37.4%），**连续第二日回落**，且今日 692 已低于 09-25 的 1,048。README 明确它不是"表格查看器"，而是给 SaaS / 内部工具 / AI 应用嵌入办公能力的 SDK，并配套 Univer Workspace 让"人和 Agent 在同一份文件里协作"。Apache-2.0，仍有 experimental API 与"PDFs (coming soon)"的标记。

### 9. cs341-illinois/coursebook

- 地址：https://github.com/cs341-illinois/coursebook
- 简介：Open Source Introductory Systems Programming Textbook for the University of Illinois——UIUC CS 341 系统编程课程的开源教材。
- 语言：TeX
- 今日新增：569 stars today
- 标签：系统编程教材、UIUC、开源课本、许可缺失

第 2 次在榜，**265 → 569（+114.7%）是今日留存项目里涨幅最大的一个**，也是唯一一个"掉榜后回归且连续两日放大"的项目（09-28 早间 +83、晚间 +265、今日 +569）。内容以 C 为主（"C is the de-facto language of the Linux Kernel"），目标是取代并标准化 Angrave 的原始 wikibook，提供 PDF / Markdown / HTML 三种导出。README 全文检索**未出现任何许可声明**，对一本供高校使用、可被第三方取用的教材而言是实质缺口，见 §3.7 第 8 条。

### 10. t8y2/dbx

- 地址：https://github.com/t8y2/dbx
- 简介：25 MB 轻量级跨平台数据库客户端，支持 MySQL、PostgreSQL、SQLite、Redis、MongoDB、DuckDB、SQL Server、达梦等 100+ 数据库，内置 AI、MCP Server、CLI、桌面端与 Docker。
- 语言：Rust
- 今日新增：460 stars today
- 标签：数据库客户端、100+ 数据源、MCP、中文作者

**本系列首次出现**。今日榜上少见的"纯工具"项目，且是中文作者、README 中英双语。覆盖面很广（国产库达梦、OceanBase、openGauss、GaussDB、KingbaseES、TDengine 都在支持列表里），内置 AI 助手会在执行前审查 AI 生成的 SQL，并把权限分成 `read_only` / `safe_write` / `high_risk_write` 三档。Apache-2.0。它和 PageIndex、openship 一起构成今天"新面孔多为成熟工具而非新概念"的一面。

### 11. oblien/openship

- 地址：https://github.com/oblien/openship
- 简介：Self-hosted deployment platform（带内置 CI/CD）：指向一个仓库，它负责构建、发布、路由与 TLS 终结。
- 语言：TypeScript
- 今日新增：436 stars today
- 标签：自托管部署、CI/CD、SSH 控制面、Apache-2.0

**本系列首次出现**。有意思的是它的部署形态选择：控制面可以跑在**桌面应用里**（只在应用打开时运行，不在常驻服务器上留任何东西、不暴露公网），需要 push-to-deploy 或团队协作时才装常驻服务端；也可以完全自托管或用其 Cloud。README 强调"no login, no terminal, no public surface"。对 MCP 的处理比较克制：只有显式 opt-in 的路由才暴露为工具，每次调用都重新校验权限，凭据/令牌路由永远不能变成工具。Apache-2.0，附 SECURITY.md 与 safe-harbor 政策。

### 12. willfaust/Madeira

- 地址：https://github.com/willfaust/Madeira
- 简介：Run x86-64 Windows PC games on jailed iOS via FEX-Emu + Wine + DXMT——在未越狱 iPhone 上跑 Windows PC 游戏。
- 语言：C
- 今日新增：229 stars today
- 标签：Wine on iOS、FEX-Emu、侧载、研究项目

**09-28 早间在榜、当晚掉榜、今日回归**——是"掉榜不是衰退证据"的又一例。技术栈是 Wine（ARM64EC）+ FEX-Emu（x86-64→ARM64）+ DXMT（D3D11→Metal），全部跑在**单个 Mach 进程**里，wineserver 作为线程而非独立进程。README 自陈 "This is a research project, not a product"，Thumper 与 ULTRAKILL 可玩，其余多数只能低帧率进入游戏。限制很硬：JIT 需调试器附加 → **不能上架 App Store，只能侧载**；免费 Apple ID 签名 **7 天过期，需每周重建重装**。GPL-3.0-or-later，且所用 fork 与上游许可不一致。见 §3.7 第 3 条。

### 13. averygan/reclip

- 地址：https://github.com/averygan/reclip
- 简介：Download videos from almost any website——轻量、自托管的媒体下载器，带干净的 Web UI。
- 语言：HTML
- 今日新增：114 stars today
- 标签：yt-dlp 下载器、自托管、单文件后端

第 3 次在榜（09-01、09-03、09-04、今日），**隔了 24 期才回来**，是本系列间隔最久的一次回归。技术上极简：后端是**约 150 行的单个 Python 文件**（Flask + yt-dlp），前端是单文件原生 HTML/CSS/JS，无构建步骤，两个依赖。README 里有明确的 Disclaimer："intended for personal use only... respect copyright laws and the terms of service"。1.17% 的当日涨幅在 9,899 星体量下属于低位。

### 14. rakyll/hey

- 地址：https://github.com/rakyll/hey
- 简介：HTTP load generator, ApacheBench (ab) replacement——HTTP 压测工具。
- 语言：Go
- 今日新增：31 stars today
- 标签：HTTP 压测、ab 替代、老牌工具

**本系列首次出现**，也是全榜唯一一个"老项目"——rakyll/hey 是 2016 年前后就广为人知的 Go 压测工具（原名 boom，因二进制名冲突改名 hey）。20,415 星对应 **0.15% 的当日涨幅**，是本期最低。这个数字本身很有价值：**它证明今天不是大盘普涨**——同为 2 万星量级，univer 是 3.30%、dbx 是 2.16%，而 hey 只有 0.15%。按 6q 的口径，hey 与 ai-engineering（1.42%）一起构成今天"体量大但没动"的对照组，使"热"重新可判。

## 观察

- debpalash/VoiceStudio 今日 4,712 stars today，居当日增量第 1 位。
- vectorize-io/hindsight 今日 2,541 stars today，居当日增量第 2 位。
- paperclipai/paperclip 今日 2,412 stars today，居当日增量第 3 位。
