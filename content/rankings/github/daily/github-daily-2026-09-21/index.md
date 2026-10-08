---
title: GitHub 每日趋势榜 2026-09-21
description: 2026-09-21 GitHub Trending 榜首为 Open-Dev-Society/OpenStock，当日共收录 12 个项目。
date: '2026-09-21T08:00:00+08:00'
rankingKey: '2026-09-21'
slug: github-daily-2026-09-21
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

2026-09-21 GitHub Trending 共收录 12 个项目，榜首 Open-Dev-Society/OpenStock（843 stars today）。语言分布：TypeScript 3、Python 3、Rust 3、HTML 1、Go 1、—（仓库无主语言） 1。

## 重点项目

### 1. Open-Dev-Society/OpenStock

- 地址：https://github.com/Open-Dev-Society/OpenStock
- 简介：OpenStock is an open-source alternative to expensive market platforms. Track real-time prices, set personalized alerts, and explore detailed company insights — built openly, for everyone, forever free.
- 语言：TypeScript
- 今日新增：843 stars today
- 标签：开源股票平台、实时行情与告警、Next.js 全栈、⚠️ AGPL-3.0、⚠️ 跨仓导流

Next.js App Router + shadcn/ui + Tailwind + Better Auth + MongoDB，行情走 Finnhub、图表用 TradingView 组件，是一个完整可自托管的股票追踪应用。技术栈没什么新鲜感，但"把付费金融终端的壳免费复刻一遍"这个定位吃到了稳定需求——它是今天唯一还站在 800 以上的项目，也是全榜涨幅绝对值第一。
需要注意两点，且都已逐字复核仍然存在：① README 顶部挂着同组织新项目 **kitbash** 的导流横幅（"Before you build, find out which parts already exist on GitHub"），与 09-14 ever-gauzy 完全同形态，**这部分热度不可读作产品采纳度上升**；② 许可为 **AGPL-3.0**，项目方在 README 里明确写着：修改、再分发或部署为 Web 服务都必须以相同许可开源并署名。商业集成前务必先过法务。
另：项目自陈"community-built and not a brokerage""market data may be delayed""nothing here is financial advice"，定位诚实。

### 2. trycua/cua

- 地址：https://github.com/trycua/cua
- 简介：Scale computer-use 2.0 with open-source drivers, cross-OS fleets, and benchmarks for training, evaluation, and data generation.
- 语言：HTML
- 今日新增：609 stars today
- 标签：Computer-Use 2.0、跨 OS 集群、本地 macOS VM、评测基准、二日回落

给"让 Agent 操作整台电脑"这件事补齐工程层：开源驱动、跨操作系统 fleet、以及用于训练/评测/数据生成的 benchmark 三件套。它是目前本系列里 Computer-Use 方向体量最大的项目（25.6k Star）。
昨天它刚以 +1,012（+164.2%）拿下留存涨幅第一，今天回落到 609（-39.8%）。这是 **"单日尖峰多为一次性脉冲"的第 13 次印证**（09-20 为第 12 次）——回落幅度不小，但**它没有掉榜，绝对值仍是全榜第二**，属于"脉冲退潮后留下真实底盘"，与那种一天归零的项目不是一回事。
昨天设的判据是"若守住 800 以上，C 簇（Agent 计算机使用）升级为可跟踪形态"——今天 609，未达标，该簇**今日不升级**（详见 3.3）。

### 3. BuilderIO/agent-native

- 地址：https://github.com/BuilderIO/agent-native
- 简介：A framework for building agentic apps
- 语言：TypeScript
- 今日新增：607 stars today
- 标签：Agent 应用框架、共享 Action 层、带 UI 的 Agent、BuilderIO、留存涨幅第一

今天最值得看的一个。它的核心主张写得很清楚：**能力只定义一次，Agent 当工具调用，UI 从代码调用，两条路径共用同一套 validation、permissions 和 implementation**。README 里那句 "The agent does not click through the UI" 是点睛之笔——过去两年"给 Agent 配界面"的主流做法是让 Agent 去点按钮，而这个框架反过来说：Agent 压根不应该走 UI 这条路径，它应该和 UI 平级地调用同一个 action 层。
一条 `defineAction` 同时供 UI、Agent、HTTP、MCP、A2A、CLI 六个面使用，共享数据、共享应用状态（Agent 能收到当前页面/选中记录这类 UI 上下文）。这解决了 Agent 应用落地时最常见的撕裂：界面显示的和 Agent 实际做的对不上。
从数据看，它昨天才新上榜、只排 **#12（+89）**，今天直接 +582.0% 冲到 **#3**。这是 **"当日排名对次日无预测力"的第八次成立**——留存涨幅前三（agent-native / financial-services / coder）昨天分别排 #12、#10、#9，全部在后半段。

### 4. coder/coder

- 地址：https://github.com/coder/coder
- 简介：Secure environments for developers and their agents
- 语言：Go
- 今日新增：461 stars today
- 标签：自托管开发环境、Terraform 定义、Agent 沙箱、密钥不下发、五日在榜

老牌自托管开发环境项目，09-17 起连续第五日在榜（+204 → +478 → +406 → +382 → +461），今天逆势 +20.7%，是留存项里唯一"既在榜又在涨"的老面孔之一。
它在本系列里一直代表同一条路线：**不教 Agent 怎么写代码，而是给 Agent 圈一块可控的地**。工作区用 Terraform 定义，Agent 在隔离环境里循环跑，API key 不下发到工作区。README 标题已经从"云开发环境"改成了"Development Environments and AI Agents"，转向很明确。
今天榜单上"Agent 边界"这个问题同时出现了三种答案：coder 是**基础设施层**（隔离），ai-memory 是**记忆持久化层**，Codex-X 是**配置治理层**。三者互不冲突，是同一问题的不同切面。

### 5. anthropics/financial-services

- 地址：https://github.com/anthropics/financial-services
- 简介：Reference agents, skills, and data connectors for the financial-services workflows we see most — investment banking, equity research, private equity, and wealth management.
- 语言：Python
- 今日新增：425 stars today
- 标签：金融行业 Agent、Anthropic 官方、10 个岗位 Agent、⚠️ 非投资建议、二日在榜

Anthropic 官方把投行、股票研究、PE、财富管理四类工作流拆成具名 Agent：Pitch Agent（comps→precedents→LBO→pitch deck）、Market Researcher、Earnings Reviewer、Model Builder（DCF/LBO/三表，直接在 Excel 里出）、Valuation Reviewer、GL Reconciler、Month-End Closer、Statement Auditor、KYC Screener 等十个。
分发做了双通道：既能当 Claude Cowork 插件装，也能通过 Managed Agents API 挂到自己的工作流引擎后面，同一套 system prompt 和 skills。这种"一份内容两种交付"是企业级 Agent 分发里少见的做法。
Fork/Star 14.8% 是全榜最高——对一个 3.6 万 Star 的官方仓库来说偏高，说明大量用户在 fork 后自行改造成内部版本。
⚠️ README 顶部 IMPORTANT 框逐字复核仍在：*Nothing in this repository constitutes investment, legal, tax, or accounting advice... They do not make investment recommendations, execute transactions, bind risk.* 产出全部是"待合格专业人员复核的草稿"。这条不是客套，用之前必须读一遍。

### 6. Crosstalk-Solutions/project-nomad

- 地址：https://github.com/Crosstalk-Solutions/project-nomad
- 简介：Project NOMAD is an offline-first knowledge and education server. Wikipedia, thousands of books, courses, maps, and optional local AI, all running on hardware you own with no internet required.
- 语言：TypeScript
- 今日新增：360 stars today
- 标签：离线优先知识服务器、Kiwix + Ollama、自建硬件、⚠️ sudo 安装脚本、掉榜六日后回归

一个"把整套知识基础设施塞进自己家硬件"的 Docker 编排方案：Kiwix 提供离线维基/医学参考/电子书，Kolibri 提供可汗学院课程，ProtoMaps 提供离线地图，CyberChef 做加解密分析，本地 AI 走 Ollama + Qdrant（RAG），FlatNotes 记笔记，还有一键应用目录和社区跑分榜。
它是榜单里少见的"非 AI 主体 + AI 可选"的项目，也因此是本系列今天非 AI 侧体量最大的一个。
⚠️ 安装方式仍是 `curl ... | sudo bash`（README 明确写 "sudo/root privileges are required"），且只支持 Debian 系（推荐 Ubuntu 26.04 LTS），Windows 用户走 WSL2。拿到 root 的远程脚本，装之前建议先读一遍脚本内容。
数据备注：09-14 曾以 +26（末位 #20）上榜，今天 +360 回归，+1,284.6%。

### 7. zhouxiaoka/autoclip

- 地址：https://github.com/zhouxiaoka/autoclip
- 简介：AutoClip : AI-powered video clipping and highlight generation · 一款智能高光提取与剪辑的二创工具
- 语言：Python
- 今日新增：266 stars today
- 标签：AI 视频高光剪辑、字幕驱动定位、桌面 + Docker + MCP、多模型可选、新上榜

面向访谈、播客、课程、直播回放的长视频切条工具：导入本地视频或 YouTube/B 站链接（可带 SRT 字幕）→ 从字幕提取大纲、话题时间线、精彩度评分和片段标题 → 自动生成切片与合集 → 导出，内置抖音、小红书、YouTube Shorts、B 站四种平台预设，支持烧录字幕和标题卡。
模型层做的是"自由选择"：通义千问、OpenAI 兼容接口、Gemini、硅基流动，以及 Ollama / LM Studio 本地模型，可以完全不花钱跑。使用方式三选一：桌面安装包（内置 Python 和 FFmpeg）、Docker Web 界面、CLI/MCP。v1.3.1 起界面和文档支持 8 种语言。
它是今天唯一一个"AI 当生产力工具直接产出成品"的项目——不谈 Agent、不谈技能包，就是剪视频。在这个榜单里属于稀有物种。
Fork/Star 19.3% 是全榜最高，对工具类项目而言通常是"部署型刷量"或"大量二次分发"的信号，配合二创场景看，后者可能性更大，但排名位数本身不说明质量。

### 8. ruanyf/weekly

- 地址：https://github.com/ruanyf/weekly
- 简介：科技爱好者周刊，每周五发布
- 语言：—（仓库无主语言）
- 今日新增：221 stars today
- 标签：科技周刊、每周五发布、中文社区、10 万 Star、稳态流量

阮一峰的每周科技周刊，从 2018 年更新至今，10.4 万 Star。今天 +221，掉榜一天后回归（09-19 为 +151，+46.4%）。
它在这份榜单里的作用是**刻度尺**：10 万 Star 的纯内容仓库、当日涨幅 0.21%，是今天所有项目里最低的。当一个"没有任何产品动作"的仓库还能稳定贡献 200+ Star，说明这份榜单的长尾本身就是由这类稳态流量垫起来的。09-19 它排 #11、今天排 #8，波动很小。

### 9. akitaonrails/ai-memory

- 地址：https://github.com/akitaonrails/ai-memory
- 简介：Solution for long term memory for agent coding CLIs and to facilitate handoff between different agent vendors
- 语言：Rust
- 今日新增：217 stars today
- 标签：跨 Agent 长期记忆、Markdown 为真相源、零 LLM 调用、MIT、新上榜

本系列第一次出现"给 Agent 做记忆持久化"的项目，而且方案相当克制。
它解决的问题描述得很具体：你在 Claude Code 里干到一半，切到 OpenAI Codex 继续，就得把架构、踩过的坑、待办重讲一遍。ai-memory 的做法是——**handoff 是一个 typed protocol，不是约定**：类型化、有归属、且 claimed exactly once（不会两个 Agent 重复接同一个活）。支持 20+ harness（Claude Code、Codex、Cursor、Gemini CLI、OpenCode、Grok、Devin、Kimi、Kiro 等）。
三个设计选择值得单独说：① **真相源是 git 托管的 markdown wiki**，数据库只是可重建的派生索引，没有 vector store 要伺候，可以 grep、可以用 Obsidian 打开、可以 rsync；② **默认路径零 LLM 调用**，capture/检索/handoff 全程不需要 API key，靠生命周期钩子静默记录提示词、工具调用、会话边界，并在 typed privacy boundary 处做脱敏；③ 多用户 auth、按人归因、审计日志全部内置而非付费档。
MIT 许可、单二进制、purge 命令会写清楚"删除"到底删了什么。是本系列里工程诚实度最高的项目之一。

### 10. mvt-project/mvt

- 地址：https://github.com/mvt-project/mvt
- 简介：MVT (Mobile Verification Toolkit) helps with conducting forensics of mobile devices in order to find signs of a potential compromise.
- 语言：Python
- 今日新增：177 stars today
- 标签：移动设备取证、Amnesty 安全实验室、IOC 检测、⚠️ 双用途、新上榜

由 **Amnesty International 安全实验室**在 2021 年 Pegasus Project 期间发布，配合一整套取证方法论，用于自动化采集 Android / iOS 设备上的入侵痕迹，并支持用公开 IOC（indicators of compromise）比对已知间谍软件活动。
README 顶部挂着两条必须看的提示，均已逐字复核：① **v3 分支已合并，引入 breaking changes**，下游脚本可能失效（issue #757）；② 明确声明"这是给技术人员和调查者用的取证研究工具，需要数字取证知识和命令行能力，**不是给终端用户自评用的**"，担心设备安全应寻求专业协助。
还有一条容易被忽略的警告：**公开 IOC 不足以判定一台设备是"干净的"**——仅依赖公开指标会漏掉新近痕迹并造成虚假安全感。
⚠️ 合规：这是典型的双用途工具。请只对你拥有或已获得明确授权的设备使用。

### 11. yynxxxxx/Codex-X

- 地址：https://github.com/yynxxxxx/Codex-X
- 简介：OpenAI Codex 桌面端/CLI 的可视化管理工具，具有 Provider/API 切换、会话同步、提示词注入、Skills/MCP 管理、TOML 配置可视化的跨平台工具。
- 语言：Rust
- 今日新增：79 stars today
- 标签：Codex 可视化管理、Provider 切换、Skills 与 MCP、⚠️ 提示词含"破甲/逆向"、掉一日回归

把 Codex 桌面端/CLI 散落在各个文件里的配置集中到一个桌面界面：提示词模板分类管理（内置 5 套，支持导入 Markdown）、多个官方登录与第三方 API 命名切换（可从 cc-switch 导入）、会话同步与按项目路径整理、Skills 与 MCP 集中管理、查看 `config.toml` 与 `auth.json`、按日期和模型看 Token 用量趋势。
09-19 曾以 +64 上榜（#13），今天 +79 回归（+23.4%）。
⚠️ 两点需要注意，均已复核仍在：① 它**直接读写 `auth.json`**（登录凭据文件），这类工具的可信边界要自己把关；② README 的提示词分类里明确列有 **"破甲 / 逆向"** 一类。工具本身中性，但调用方需自行承担合规责任。

### 12. cloudflare/quiche

- 地址：https://github.com/cloudflare/quiche
- 简介：🥧 Savoury implementation of the QUIC transport protocol and HTTP/3
- 语言：Rust
- 今日新增：69 stars today
- 标签：QUIC 与 HTTP/3、Rust 实现、Cloudflare 官方、网络基建、掉一日回归

Cloudflare 的 QUIC / HTTP/3 Rust 实现，是支撑其边缘网络的基础组件之一，属于"不会成为头条但一直在跑"的那类基建。
09-19 曾以 +5（末位 #15）上榜，今天 +69 回归。它与今天榜单上所有 AI/Agent 项目毫无关系，是纯网络传输层——这类老牌基建出现在日榜尾部，通常是"脉冲退潮日尾部被万星老项目填满"形态的一部分（09-12 首次记录过同一现象）。

## 观察

- Open-Dev-Society/OpenStock 今日 843 stars today，居当日增量第 1 位。
- trycua/cua 今日 609 stars today，居当日增量第 2 位。
- BuilderIO/agent-native 今日 607 stars today，居当日增量第 3 位。
