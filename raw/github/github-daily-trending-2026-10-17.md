# GitHub 每日趋势榜 2026-10-17

> 数据归属日：2026-10-17（Asia/Shanghai）。抓取时点为 2026-10-18 凌晨，GitHub Trending 的 daily 为滑动 24 小时窗口，其中约八成 star 增量落在 10-17（美国东部时间）。

## 今日概览

今日榜单共 **13 个项目**（已回查 Trending 页面 `Box-row` 计数同为 13，非解析丢失），与昨日数量持平。

- **语言分布**：Python 5、TypeScript 4、Rust 2、JavaScript 1、Kotlin 1。Python 仍是 AI 技能与语音侧主力；TypeScript 全部集中在 Agent 客户端与 harness；Rust 由「系统工具」题材撑起且拿下了今日两个高增量席位之一。
- **本期主线：Agent 从「写代码」外溢到「管数据」和「办私事」**。昨日榜单的主题是 Skills 生态集体上榜，今天换了一批项目，但方向更清晰：记忆（ai-memory）、检索（xerj）、求职（ai-job-search）、语音（VoiceStudio）——Agent 正在接管原本不属于编程的工作流，而这些工作流的共同前提是**数据留在本地**。
- **本地优先（local-first）三连**：VoiceStudio（全本地 ElevenLabs 替代）、xerj（本地索引引擎，默认只绑 127.0.0.1）、ai-memory（默认零 LLM、默认离线）。三个项目同日上榜且各自是所在细分的第一梯队，指向同一条诉求——把 Agent 接进敏感数据（人声、代码库、简历）时，云端方案过不了心理门槛。
- **「交接」成为新关键词**：ai-memory 明确把「Claude Code 中断 → Codex 接手」当成一号场景，跨厂商上下文迁移第一次成为独立产品命题；Orca 则用 git worktree 把「多 Agent 并行 → 挑胜出方案」标准化。Agent 之间的协作层正在浮现。
- **Skills 生态延续但换血**：claude-plugins-official 连续第二日登顶，scientific-agent-skills、android/skills 仍在榜，但昨日的 superpowers、cursor/plugins 已退出 → 说明这波热度是真实的滚动关注，而非一日游。
- **增量冠军是唯一的非 Agent 项目**：VoiceStudio +2,135，比第二名（+1,397）高出 53%。它靠的是 ElevenLabs 涨价/封禁类现实痛点，与 AI Agent 主线无关，属于长期刚需型项目。

---

## 重点项目

### 1. anthropics/claude-plugins-official

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/anthropics/claude-plugins-official |
| 简介 | Official, Anthropic-managed directory of high quality Claude Code Plugins. |
| 语言 | Python |
| 总 Star | 41,604 |
| 今日新增 | 1,383 stars today |
| 标签 | Claude Code、AI 编程、插件市场、官方生态、MCP |

Anthropic 官方维护的 Claude Code 插件目录，分 `/plugins`（官方自研）与 `/external_plugins`（三方合作）两级，收录需过质量与安全审核。连续第二日登顶，且支持矩阵仍在扩——一个插件可同时携带 commands、agents、skills、hooks 和 MCP 配置，官方把它做成可信入口来收敛野生插件的信任问题。昨日同批上榜的 Cursor / superpowers 已掉出榜单，它却留下，说明这一席靠的是持续分发而非一次性曝光。

### 2. MadsLorentzen/ai-job-search

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/MadsLorentzen/ai-job-search |
| 简介 | The job search that runs on your machine. AI job application framework built on Claude Code: evaluate postings, tailor CVs, write cover letters, prep interviews. Fork it and own it. |
| 语言 | Python |
| 总 Star | 50,160 |
| 今日新增 | 1,397 stars today |
| 标签 | Claude Code、求职自动化、Agent 工作流、LaTeX、生产力 |

把 Claude Code 变成跑在本机的求职代理：`/scrape` 搜岗、`/rank` 批量打分、`/apply` 定制简历与求职信并自动编译 LaTeX 校验页数和 ATS 文本层、`/interview` 备面、`/outcome` 归档跟进。作者本人是地球物理学家，用这套流程投了 69 份定制申请拿到 20 场初面并转行 AI 工程师——这个"作者自用成功"的叙事是它今日冲到第 2 的直接原因。技术上最有意思的是 drafter-reviewer 双 Agent 互批，以及"绝不伪造经历"写进了流程约束里。

### 3. affaan-m/ECC

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/affaan-m/ECC |
| 简介 | The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond. |
| 语言 | JavaScript |
| 总 Star | 282,366 |
| 今日新增 | 1,145 stars today |
| 标签 | Agent、Claude Code、上下文工程、JavaScript、开发者工具 |

面向 Agent harness 的性能优化套件，把 skills、instincts、memory、security 四件事做成可迁移层，跨 Claude Code / Codex / OpenCode / Cursor 通用。28 万星体量还能连续两日保持千星以上日增，在今天的榜单里属于"稳定盘"——它不追热点，卖的是把 Agent 工程本身工程化。

### 4. HKUDS/CLI-Anything

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/HKUDS/CLI-Anything |
| 简介 | "CLI-Anything: Making ALL Software Agent-Native" -- CLI-Hub: https://clianything.cc/ |
| 语言 | Python |
| 总 Star | 53,986 |
| 今日新增 | 580 stars today |
| 标签 | CLI、Agent、Python、自动化、大模型工具链 |

港大 Data Intelligence Lab 的系列工作之一，主张给任意软件生成一层 CLI 外壳，让没有 API 的桌面/图形软件也能被 Agent 直接驱动。`/cli-anything <repo>` 走 7 阶段流水线产出 Click CLI（含 REPL、`--json` 输出、undo/redo），硬性要求调用真实软件后端而非降级替代；配套 CLI-Hub 做注册表与包管理。已覆盖 18 个主要应用、2,460+ 项测试全通过。

### 5. K-Dense-AI/scientific-agent-skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/K-Dense-AI/scientific-agent-skills |
| 简介 | Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 250,000+ scientists worldwide. 177 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard. |
| 语言 | Python |
| 总 Star | 52,178 |
| 今日新增 | 879 stars today |
| 标签 | Agent Skills、科研 AI、Python、LLM、生物医药 |

把科研流程打包成 177 个可复用 skill，覆盖生物、化学、医学与药物发现，并接了 100+ 科学数据库。价值不在模型能力而在领域流程的固化：把实验设计、文献检索、数据分析这类高专业度动作写成标准指令，让通用 Agent 直接获得领域工作流。连续两日在榜，是本轮 Skills 生态里最"垂直"也最难被替代的一个。

### 6. akitaonrails/ai-memory

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/akitaonrails/ai-memory |
| 简介 | Solution for long term memory for agent coding CLIs and to facilitate handoff between different agent vendors |
| 语言 | Rust |
| 总 Star | 9,854 |
| 今日新增 | 208 stars today |
| 标签 | Agent 记忆、Rust、跨厂商交接、本地优先、MCP |

给 AI 编码 CLI 做长期记忆，并让不同厂商的 Agent 之间能无缝交接上下文——README 的一号场景就是"Claude Code 跑到一半中断，换 OpenAI Codex 在同一目录继续，不用重新解释架构、失败的尝试和未决问题"。实现上走 capture → consolidate → recall → handoff 四段：hooks 静默捕获并脱敏，session-end 把会话编译成人类可读、可 git 版本化的 `wiki/` markdown，检索融合 FTS5 + 实体 + 图 + 本地向量，全程默认零 LLM、不需要 API key。今日刚发布 v3.1.1。上榜理由很直接：Agent 换工具的成本第一次被当成一个可以单独解决的产品问题。

### 7. android/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/android/skills |
| 简介 | AI 优化、模块化的 Android 开发指令集（SKILL.md 规范），用于让 Agent 遵循 developer.android.com 的官方最佳实践。（Trending 页面 description 抓取为 Unknown，此处依据仓库 README 补全） |
| 语言 | Kotlin |
| 总 Star | 8,383 |
| 今日新增 | 368 stars today |
| 标签 | Agent Skills、Android、Kotlin、官方生态、开发者工具 |

Google Android 官方维护的 Agent 技能库，遵循开放的 agent skills 标准，把开发者官网的最佳实践写成可被 Agent 加载的 SKILL.md。它的选题标准值得注意：**只做评测显示 LLM 表现差的场景**，不做 Jetpack Compose 基础这类模型已经很熟的部分。这是继 Anthropic、Cursor 之后又一家官方下场维护技能目录，三家口径一致说明 SKILL.md 正在成为事实标准。

### 8. stablyai/orca

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/stablyai/orca |
| 简介 | Orca is the place for working with a fleet of agents (e.g. Grok Bot, Claude Code). Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime. |
| 语言 | TypeScript |
| 总 Star | 95,276 |
| 今日新增 | 829 stars today |
| 标签 | Agent 编排、多智能体、TypeScript、开发者工具、Electron |

多编码 Agent 的编排工作台：一个 prompt fan-out 给多个 Agent，各自跑在**独立的 git worktree** 里并行开工，最后在同一个界面比对并合并胜出方案。自带订阅（BYOK），不卖模型能力，只做调度与并行——支持 30+ 种 CLI agent，口号是"跑在终端里就能跑在 Orca 里"。桌面（Electron）+ 移动伴侣 + SSH 远程运行时三形态，还有 Design Mode 可直接点选 Chromium 窗口里的 UI 元素送进 prompt。9.5 万星仍在日增近千，是"Agent 之上再长一层"这条路线里最激进的一个。

### 9. anthropics/claude-code

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/anthropics/claude-code |
| 简介 | Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands. |
| 语言 | TypeScript |
| 总 Star | 151,633 |
| 今日新增 | 168 stars today |
| 标签 | AI 编程、Agent、TypeScript、CLI、开发者工具 |

Anthropic 的终端 Agent 编码工具本体。15 万星的量级日增 168 属于日常水位，今天它是被自己带起来的生态（claude-plugins-official 第 1）重新推上榜的——插件目录越热，用户越会顺手把主仓库也 star 一遍。

### 10. debpalash/VoiceStudio

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/debpalash/VoiceStudio |
| 简介 | VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages. |
| 语言 | Python |
| 总 Star | 73,069 |
| 今日新增 | 2,135 stars today |
| 标签 | 语音合成、本地部署、ElevenLabs 替代、Python、多语言 |

开箱即用的 ElevenLabs 开源平替，覆盖语音克隆、音色设计、视频配音、听写、转写与有声书，标称支持 646 种语言，全部在本机跑。桌面端已切到 Electron（macOS / Windows / Linux / ARM），硬件支持从 NVIDIA CUDA、Apple Silicon MPS 一路覆盖到无独显的 CPU 小构建。今日 +2,135 是榜单增量第一，且比第二名高出 53%——它是今天唯一一个与 Agent 主线无关的项目，靠的是"声音不出本机 + 不再按字符付费"这两条硬诉求。近期正在收 0.5.7 版本，社区音色市场刚以 submodule 形式落地。

### 11. anomalyco/opencode

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/anomalyco/opencode |
| 简介 | The open source coding agent. |
| 语言 | TypeScript |
| 总 Star | 215,125 |
| 今日新增 | 576 stars today |
| 标签 | AI 编程、Agent、TypeScript、开源、开发者工具 |

开源编码 Agent 本体，21.5 万星。在 ECC、ai-memory、Orca 的兼容列表里它都是一等公民，今天这几家同日上榜，它作为被支持方跟着回到榜上是合理的连带效应。

### 12. ruvnet/ruflo

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/ruvnet/ruflo |
| 简介 | 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated |
| 语言 | TypeScript |
| 总 Star | 75,995 |
| 今日新增 | 406 stars today |
| 标签 | Agent、多智能体编排、TypeScript、RAG、开发者工具 |

老牌多智能体 harness，主打 swarm 编排与自适应记忆，内置向量 RAG 与 federation，并原生对接 Claude Code / Codex / Hermes。连续两日在榜——今天榜单里 Orca 走"并行 worktree 让人挑"，ruflo 走"多 Agent 自治协作"，两条路线的分歧值得持续观察。

### 13. xerj-org/xerj

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/xerj-org/xerj |
| 简介 | XERJ is the new way for AI to search data. Its autoindex capability activates agents to know your data without the token waste of grep and sed. One command indexes code, docs, logs and PDFs for search, RAG, security audits and agent memory, using 40x fewer tokens than grep. Elasticsearch compatible, so existing clients just work. |
| 语言 | Rust |
| 总 Star | 7,707 |
| 今日新增 | 1,102 stars today |
| 标签 | Agent 检索、Rust、RAG、Elasticsearch 兼容、本地索引 |

用 Rust 重写、兼容 Elasticsearch wire 协议（Apache-2.0，避开 ES 的 SSPL）的本地检索引擎。`xerj autoindex <目录>` 一条命令把代码、文档、日志、PDF（还含 EPUB、Jupyter Notebook）变成索引，`xerj search` / `xerj def` 直接返回 `file:line` 级片段，避免把整个文件塞进上下文。官方 16 次对照实验给的数字是：相比 grep 驱动 agent，输出 token 从 26,477 降到 9,982，成本 $3.27 → $1.58，解决率 16/16 持平。安全默认很硬——新节点只绑 127.0.0.1，非 loopback 且无 TLS 直接拒绝启动。今日 +1,102 是榜单增量第三，对一个 7.7k 星的新项目来说是爆发式增长。

---

## 观察

**1. Agent 的战场从"写得出来"转向"接得住数据"。** 今天 13 个席位里有 5 个（ai-memory、xerj、VoiceStudio、CLI-Anything、ECC）本质上都在解决同一件事：Agent 要碰真实数据，但真实数据既不能全量塞进上下文（token 太贵），也不能交给云端（隐私与合规）。xerj 用 file:line 级检索砍 token，ai-memory 用本地 wiki + 零 LLM 默认值守住数据，VoiceStudio 干脆把整条语音链路搬回本机。这条线在昨日榜单上是不存在的。

**2.「交接」第一次被单独拎出来做产品。** ai-memory 的 README 把"Claude Code 中断 → Codex 接手"写成一号场景，Orca 的 worktree 并行 + diff 批注解决的是"多个 Agent 的成果怎么合并"。这两件事在两个月前还只是用户自己写脚本应付的琐事，今天已经各有一个高星项目在承接。它意味着 Agent 生态开始从"单工具比拼"进入"多工具共存"阶段。

**3. Skills 生态在换血而不是退潮。** 昨日 7 席，今日 4 席（claude-plugins-official、scientific-agent-skills、android/skills，加上 harness 层的 ECC）——superpowers 和 cursor/plugins 掉了，但 claude-plugins-official 连庄第一、scientific-agent-skills 留在前五。这说明热度是滚动的：用户不是一次性围观，而是在持续追踪"哪家官方出了什么"。三家官方（Anthropic / Google Android / Cursor）口径一致地采用 SKILL.md 规范，格式之争基本落定。

**4. 唯一的非 AI 项目拿走了增量冠军。** VoiceStudio +2,135，比第二高出 53%。它提醒我们榜单里始终存在一条与 Agent 无关的主线：把原本昂贵或垄断的 SaaS 能力本地化。这条线的驱动力是成本和可控性，不依赖模型迭代，生命周期通常比 AI 热点长。

**5. Rust 的两个席位都不是"用 Rust 重写"的玩具。** xerj 选 Rust 是为了产出单文件跨平台二进制 + 长期运行的本地守护；ai-memory 同样需要常驻服务、并发处理 hooks 和严格的供应链管控（`cargo deny` / `cargo audit` 进 CI）。它们共同的特征是：要常驻、要并发、要处理凭据。这正是当前 Agent 基础设施层最缺的一类项目。
