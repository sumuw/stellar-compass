# GitHub 每日趋势榜 2026-11-03

## 今日概览

今日共 13 条（回查 GitHub Trending 页面 `Box-row` 计数同为 13），日增合计 12,589。对比基期为 11-01 的 17 席 —— 中间 11-02 期（数据日 2026-11-02）未产出，属数据缺口，本期留存口径跨两天：17 席只留住 4 席（claude-mem、hex、Kronos、CC-Game-Studios），另有两席「隔期回归」（mattpocock/skills 10-31 曾在榜、heretic 更早曾上过榜）。

语言分布：**Python 4 席第一**，Rust 3 席，TypeScript 与 Shell 各 2 席，C 与 Java 各 1 席。Rust 三席全部是系统级工具（桌面 CLI、worktree CLI、语音听写），Python 四席全部是 AI/数据向（模型修改、爬虫、量化、电商监控）。

今天最值得注意的信号有三条：

1. **大厂官方密集入场 Agent 生态。** Vercel 官方实验室的 agent-desktop（computer use CLI，+3,791 增量全榜第一）与 Spotify 官方的 portal-ai-plugins（把内部工程门户接进 Claude Code / Codex / Cursor）同日上榜 —— Agent 基建正从个人开发者项目向大厂官方基础设施扩散。
2. **「把大模型搬进个人电脑」赛道换棒延续。** 11-01 的 FreeToken、AiSOC 掉榜，但 colibri（层级式 MoE 推理：热专家进 GPU、冷专家走 NVMe，纯 C 实现，47,369 星）接棒入榜，加上 hex（本地语音）继续在榜。
3. **排序与日增脱钩再现且更极端。** 增量第一的 agent-desktop（+3,791）只排第 2，增量第二的 Scrapling（+1,658）只排第 11，而排第 7 的 portal-ai-plugins 仅 +91。

## 重点项目

### 1. thedotmack/claude-mem

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/thedotmack/claude-mem |
| 简介 | Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More |
| 语言 | TypeScript |
| 总 Star | 112143 |
| 今日新增 | 1,139 stars today |
| 标签 | AI、Agent、记忆系统、开发工具、TypeScript |

给各类编码 Agent 补上跨会话记忆：记录会话内的全部行为、用 AI 压缩后回注到后续会话，支持 Claude Code、Codex、Copilot 等多种宿主。继 11-01 之后继续守住榜首，总星从 109,050 涨到 112,143，是 Agent 生态里最稳的头部存量，当天仍在推送。

### 2. vercel-labs/agent-desktop

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/vercel-labs/agent-desktop |
| 简介 | Computer use CLI for AI agents |
| 语言 | Rust |
| 总 Star | 13278 |
| 今日新增 | 3,791 stars today |
| 标签 | Agent、桌面控制、CLI、Rust、Vercel |

Vercel 官方实验室出品的 computer use CLI，让 AI agent 直接操作桌面应用。今日 +3,791 为全榜增量第一，仓库当天仍在推送 —— 大厂官方下场做 Agent 桌面基础设施的样本。

### 3. max-sixty/worktrunk

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/max-sixty/worktrunk |
| 简介 | Worktrunk is a CLI for Git worktree management, designed for parallel AI agent workflows |
| 语言 | Rust |
| 总 Star | 10623 |
| 今日新增 | 438 stars today |
| 标签 | Git、worktree、CLI、Rust、开发工具 |

面向并行 AI agent 工作流的 Git worktree 管理 CLI，把「一个 agent 一棵 worktree」的隔离实践做成开箱即用的命令行工具。当天有推送。

### 4. JustVugg/colibri

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/JustVugg/colibri |
| 简介 | A hierarchical inference engine for frontier MoE models: hot experts on the GPU (CUDA, Vulkan), warm ones in RAM, cold ones streamed from NVMe. Written in C, runs on the hardware you already own. |
| 语言 | C |
| 总 Star | 47369 |
| 今日新增 | 802 stars today |
| 标签 | 模型推理、MoE、显存优化、C、本地运行 |

层级式 MoE 推理引擎：热专家驻 GPU（CUDA/Vulkan）、温专家放内存、冷专家从 NVMe 流式加载，纯 C 实现面向已有硬件。47,369 星的大项目今天仍在推送，是「把大模型搬进个人电脑」赛道的本期代表。

### 5. mattpocock/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mattpocock/skills |
| 简介 | Skills for Real Engineers. Straight from my .agents directory. |
| 语言 | Shell |
| 总 Star | 311715 |
| 今日新增 | 1,164 stars today |
| 标签 | AI、技能包、开发工具、Shell、工程实践 |

Matt Pocock（Total TypeScript 作者）公开的个人 .agents 目录技能包，311,715 星为全榜总星第一。10-31 在榜、11-01 掉榜后本期回归，「技能包」赛道的退潮出现反复而非单向消退。

### 6. p-e-w/heretic

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/p-e-w/heretic |
| 简介 | Training-free language model modification: Remove censorship, suppress slop, reduce sycophancy, and more |
| 语言 | Python |
| 总 Star | 38952 |
| 今日新增 | 701 stars today |
| 标签 | LLM、模型修改、免训练、AI安全、Python |

免训练的语言模型修改工具：去除审查、抑制 slop、降低谄媚度等，直接在推理层面改模型行为。p-e-w 以极简单文件工具风格著称，当天有推送。

### 7. spotify/portal-ai-plugins

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/spotify/portal-ai-plugins |
| 简介 | （仓库未填写简介，以下来自 README：把 Spotify 内部开发者门户 Portal 接进 Claude Code、Codex、Cursor 等编码 agent 的官方插件） |
| 语言 | TypeScript |
| 总 Star | 3089 |
| 今日新增 | 91 stars today |
| 标签 | Spotify、插件、Claude Code、Agent、TypeScript |

把 Spotify 内部开发者门户 Portal 接进 Claude Code、Codex、Cursor 等编码 agent 的官方插件：服务目录自然语言检索、服务简报、诊断，以及 Fleetshift 批量任务；另附 shunt 插件把 IO 密集的杂活路由给更便宜的模型。大厂把内部工程平台 agent 化的样本。简介来自仓库 README 推测。

### 8. floci-io/floci

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/floci-io/floci |
| 简介 | Light, fluffy, and always free - The AWS Local Emulator alternative |
| 语言 | Java |
| 总 Star | 28996 |
| 今日新增 | 482 stars today |
| 标签 | AWS、本地模拟、云开发、Java、测试 |

轻量免费的 AWS 本地模拟器（LocalStack 替代），主打零配置本地起服务。28,996 星、当天有推送。

### 9. Usagi-org/ai-goofish-monitor

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Usagi-org/ai-goofish-monitor |
| 简介 | 基于 Playwright 和AI实现的闲鱼多任务实时/定时监控与智能分析系统，配备了功能完善的后台管理UI。帮助用户从闲鱼海量商品中，找到心仪产品。 |
| 语言 | Python |
| 总 Star | 16714 |
| 今日新增 | 228 stars today |
| 标签 | 爬虫、Playwright、电商监控、AI、中文 |

基于 Playwright 和 AI 的闲鱼多任务实时/定时监控与智能分析系统，自带后台管理 UI。⚠️ 最后推送 2026-10-10，已约 25 天未更新。

### 10. anomalyco/hex

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/anomalyco/hex |
| 简介 | Local voice dictation for mac, windows and linux |
| 语言 | Rust |
| 总 Star | 4723 |
| 今日新增 | 410 stars today |
| 标签 | 语音识别、本地运行、Rust、生产力、跨平台 |

本地语音听写工具（macOS 正式版、Windows/Linux beta）：按住快捷键说话、松手粘贴，识别全程在本机。11-01 在榜时 3,127 星，今天 4,723，两天再涨约 50%，仍在高频推送。

### 11. D4Vinci/Scrapling

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/D4Vinci/Scrapling |
| 简介 | 🕷️ The BEST Web Scraping framework that handles everything from a single request to a full-scale crawl! |
| 语言 | Python |
| 总 Star | 95219 |
| 今日新增 | 1,658 stars today |
| 标签 | 爬虫、数据采集、反爬对抗、Python、框架 |

自述「从单次请求到全站抓取全覆盖」的爬虫框架，主打自适应选择器与反爬对抗。95,219 星老牌项目今日 +1,658 排增量第二，却只排第 11 位；当天有推送。

### 12. shiyu-coder/Kronos

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/shiyu-coder/Kronos |
| 简介 | Kronos: A Foundation Model for the Language of Financial Markets |
| 语言 | Python |
| 总 Star | 46602 |
| 今日新增 | 503 stars today |
| 标签 | 金融、时间序列、基础模型、量化、Python |

清华团队 AAAI'26 论文配套的 K 线基础模型：专用 tokenizer 把 120 亿条 K 线离散成 token 序列做自回归预训练。⚠️ 最后推送 2026-04-13，停更约 6.8 个月，热度来自论文与下游引用而非项目活跃度。

### 13. Donchitos/Claude-Code-Game-Studios

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Donchitos/Claude-Code-Game-Studios |
| 简介 | Turn Claude Code into a full game dev studio — 49 AI agents, 72 workflow skills, and a complete coordination system mirroring real studio hierarchy. |
| 语言 | Shell |
| 总 Star | 34843 |
| 今日新增 | 1,182 stars today |
| 标签 | AI、Agent、游戏开发、工作流、Shell |

把 Claude Code 组织成 49 个 AI agent + 72 个工作流技能的「游戏工作室」，照搬真实工作室层级分工。⚠️ 最后推送 2026-10-19，无新提交却持续在榜，今日 +1,182 纯靠二次传播。

## 观察

**一、留存口径跨两天：17 席只留 4 席。** 11-02 期（数据日 2026-11-02）未产出，属数据缺口，本期对比基期为 11-01。留榜的 4 席中 claude-mem（+1,139）与 hex（+410）仍在前 10，Kronos 与 CC-Game-Studios 靠惯性传播维持。11-01 的「设计品味」赛道（impeccable、superpowers 等）继续全军覆没，t3code（上期唯一高确定性增长）也掉榜了 —— 高增量并不等于持续留存。

**二、Agent 生态的玩家结构在换血。** 本期 Agent 相关席位（claude-mem、agent-desktop、worktrunk、mattpocock/skills、portal-ai-plugins、CC-Game-Studios、ai-goofish-monitor）里，出现了两个大厂官方（Vercel、Spotify）和一个个人技能包的回归。个人爆款冲高—退潮—偶发回归的节奏没有变，但底座性的位置（记忆、桌面控制、工程门户）正被有资源背书的官方项目占据。

**三、排序与日增脱钩的又一组极端样本。** 增量第一 agent-desktop（+3,791）排第 2；增量第二 Scrapling（+1,658）排第 11；排第 7 的 portal-ai-plugins 仅 +91。榜单名次与当日 star 增量无关，读榜时不要拿名次当天增量用。

**四、⚠️ 三个需标注时效的条目。**
- **shiyu-coder/Kronos**：最后推送 2026-04-13，停更约 6.8 个月，46,602 星的分量来自 AAAI'26 论文与下游引用。
- **Donchitos/Claude-Code-Game-Studios**：最后推送 2026-10-19，无新提交持续在榜。
- **Usagi-org/ai-goofish-monitor**：最后推送 2026-10-10，约 25 天未更新。

**五、基础设施与工具型老项目依旧占位。** mattpocock/skills（2026-02 创建，31 万星）、Scrapling（2024-10）、colibri（2026-07，47k 星）、floci（2026-02，29k 星）同榜，其中多数当天仍在推送 —— 日榜不只属于新爆款，存量项目被新一轮传播带入是常态。

**六、中文项目仅 1 席。** ai-goofish-monitor（闲鱼监控）是本期唯一中文项目，且已停更近一个月；上一期的 ziwei-doushu 等中文条目全部退出。
