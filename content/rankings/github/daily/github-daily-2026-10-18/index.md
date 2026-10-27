---
title: GitHub 每日趋势榜 2026-10-18
description: 2026-10-18 GitHub Trending 榜首为 MadsLorentzen/ai-job-search，当日共收录 13 个项目。
date: '2026-10-18T08:00:00+08:00'
rankingKey: '2026-10-18'
slug: github-daily-2026-10-18
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

今日榜单共 **13 个项目**（已回查 Trending 页面 `Box-row` 计数同为 13，非解析丢失），与昨日数量持平，但内部换掉了 4 席。

- **语言分布**：Python 6、TypeScript 4、Rust 1、Kotlin 1、未标注 1。Python 首次回到 6 席的绝对多数，靠的是两个"老牌回归"（ComfyUI、llm-course）加上语音与 CLI 两条本地路线。
- **本期主线：从「Agent 能做什么」回摆到「Agent 装什么」。** 前三名里有两个是插件/技能目录（claude-plugins-official、以及以第 4 名身份回归的 cursor/plugins），加上第 10 的 android/skills——昨日那条"Agent 外溢到私事"的线还在（ai-job-search 升至第 1），但今天真正的增量集中在**能力分发层**：各家不再比谁的模型强，比谁的目录里货全。
- **Skill 目录之战进入"仓库结构"层面**：cursor/plugins 今日回归就把牌摊开了——100+ 插件（17 个根级 + 84 个 `third_party/` SaaS 集成），插件 = `SKILL.md` + `.mdc` 规则 + `mcp.json` 三件套，且根目录同时维护 `.cursor-plugin/` 与 `.claude-plugin/` 两套清单。同一套 SKILL.md 被脚本复制到 Claude Code 的 harness 树里。**格式之争已经结束，现在是货架之争。**
- **增量冠军仍是 VoiceStudio（+2,098）**：连续第二日拿下日增第一，且今日第一名的 ai-job-search（+2,213）只比它高 5%。两个"非主线"项目（本地语音、本地求职）包揽增量前二，Agent 基础设施反而退到 350–600 区间——这是本轮榜单热度结构的一个明显转向。
- **老项目集体回潮**：opencode 升到第 3（+1,417，昨日 +576）、ComfyUI、llm-course 三个万星以上老仓库同日上榜，其中 llm-course 已 8 个月未推送仍是 8.4 万星。这一天的榜单不像"新东西爆发"，更像一次**存量重估**。
- **唯一的陌生面孔**：Kruk2/jasna（2.4k 星，+115）。做的是视频/图像马赛克区域的定点修复，本地 GPU 跑，两条模型路线（BasicVSR++ 免费快速 / LTX 细节更好）。它是今天唯一既非 Agent 也非 LLM 教育的新项目。

---

## 重点项目

### 1. MadsLorentzen/ai-job-search

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/MadsLorentzen/ai-job-search |
| 简介 | The job search that runs on your machine. AI job application framework built on Claude Code: evaluate postings, tailor CVs, write cover letters, prep interviews. Fork it and own it. |
| 语言 | Python |
| 总 Star | 52,746 |
| 今日新增 | 2,213 stars today |
| 标签 | Claude Code、求职自动化、Agent 工作流、LaTeX、本地优先 |

把 Claude Code 变成跑在本机的求职代理：`/scrape` 搜岗、`/rank` 批量打分、`/apply` 定制简历与求职信并自动编译 LaTeX 校验页数和 ATS 文本层、`/interview` 备面、`/outcome` 归档跟进。作者本人是地球物理学家，用这套流程投了 69 份定制申请拿到 20 场初面并转行 AI 工程师。今日从第 2 升到第 1，日增 +2,213 较昨日继续放大 58%。技术上最有意思的是 drafter-reviewer 双 Agent 互批，以及「绝不伪造经历」被写进流程硬约束。

### 2. anthropics/claude-plugins-official

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/anthropics/claude-plugins-official |
| 简介 | Official, Anthropic-managed directory of high quality Claude Code Plugins. |
| 语言 | Python |
| 总 Star | 42,586 |
| 今日新增 | 1,187 stars today |
| 标签 | Claude Code、AI 编程、插件市场、官方生态、MCP |

Anthropic 官方维护的 Claude Code 插件目录，分 `/plugins`（官方自研）与 `/external_plugins`（三方合作）两级，收录需过质量与安全审核。连续第三日在榜，一个插件可同时携带 commands、agents、skills、hooks 和 MCP 配置。今日让位给 ai-job-search 退到第 2，但日增仍稳在 1,187——在竞品目录同日上架的情况下没有掉量，说明它已从「新闻」变成「入口」。

### 3. anomalyco/opencode

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/anomalyco/opencode |
| 简介 | The open source coding agent. |
| 语言 | TypeScript |
| 总 Star | 216,444 |
| 今日新增 | 1,417 stars today |
| 标签 | AI 编程、Agent、TypeScript、开源、开发者工具 |

开源编码 Agent 本体，21.6 万星。今日从第 12 跳到第 3，日增由 +576 放大到 +1,417。它本身没有新闻，是被生态推上来的：ruflo、Orca、ECC 的兼容名单里它都是一等公民，而今天榜单上同时有 3 个 harness/编排项目——Agent 运行时层越热闹，作为「被支持方」的本体就越容易被顺手 star。

### 4. cursor/plugins

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cursor/plugins |
| 简介 | Cursor plugin specification and official plugins |
| 语言 | TypeScript |
| 总 Star | 12,694 |
| 今日新增 | 351 stars today |
| 标签 | Agent Skills、Cursor、插件市场、SKILL.md、MCP |

Cursor 的插件规范与官方插件仓库（MIT），今日重回榜单。规格清晰：每个插件含 `.cursor-plugin/plugin.json` 清单 + `skills/`（带 frontmatter 的 SKILL.md）+ `rules/`（.mdc）+ `mcp.json`。规模是最值得记的数字——17 个根级插件 + 84 个 third_party SaaS 集成（Gmail、Salesforce、Playwright、GitHub、Shopify、QuickBooks、Robinhood…）共 100+。根目录同时存在 .cursor-plugin/ 与 .claude-plugin/ 两套清单，SKILL.md 作为跨客户端能力载体已无需再争。

### 5. ruvnet/ruflo

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/ruvnet/ruflo |
| 简介 | 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated |
| 语言 | TypeScript |
| 总 Star | 76,443 |
| 今日新增 | 502 stars today |
| 标签 | Agent、多智能体编排、TypeScript、RAG、开发者工具 |

老牌多智能体 harness，主打 swarm 编排与自适应记忆，内置向量 RAG 与 federation，并原生对接 Claude Code / Codex / Hermes。连续第三日在榜且排名从第 12 升到第 5，日增稳定在 400-500 区间。今天它是「多 Agent 自治协作」路线的代表，与第 7 的 Orca（并行 worktree + 人工挑胜出）形成对照。

### 6. akitaonrails/ai-memory

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/akitaonrails/ai-memory |
| 简介 | Solution for long term memory for agent coding CLIs and to facilitate handoff between different agent vendors |
| 语言 | Rust |
| 总 Star | 10,403 |
| 今日新增 | 513 stars today |
| 标签 | Agent 记忆、Rust、跨厂商交接、本地优先、MCP |

给 AI 编码 CLI 做长期记忆，并让不同厂商的 Agent 之间能无缝交接上下文——README 一号场景就是「Claude Code 跑到一半中断，换 Codex 在同一目录继续」。实现走 capture → consolidate → recall → handoff 四段：hooks 静默捕获并脱敏，session-end 把会话编译成可 git 版本化的 wiki/ markdown，检索融合 FTS5 + 实体 + 图 + 本地向量，全程默认零 LLM、不需要 API key。今日日增由 +208 放大到 +513，一天内跨过 1 万星。

### 7. stablyai/orca

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/stablyai/orca |
| 简介 | Orca is the place for working with a fleet of agents (e.g. Grok Bot, Claude Code). Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime. |
| 语言 | TypeScript |
| 总 Star | 96,471 |
| 今日新增 | 1,146 stars today |
| 标签 | Agent 编排、多智能体、TypeScript、开发者工具、worktree |

多编码 Agent 的编排工作台：一个 prompt fan-out 给多个 Agent，各自跑在独立的 git worktree 里并行开工，最后在同一界面比对并合并胜出方案。自带订阅（BYOK），只做调度与并行，支持 30+ 种 CLI agent。桌面 + 移动伴侣 + SSH 远程运行时三形态。今日日增由 +829 升到 +1,146，逼近 10 万星；与 ai-memory 同时放量，指向 Agent 协作与交接层正从临时脚本变成独立产品。

### 8. HKUDS/CLI-Anything

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/HKUDS/CLI-Anything |
| 简介 | "CLI-Anything: Making ALL Software Agent-Native" -- CLI-Hub: https://clianything.cc/ |
| 语言 | Python |
| 总 Star | 54,529 |
| 今日新增 | 582 stars today |
| 标签 | CLI、Agent、Python、自动化、大模型工具链 |

港大 Data Intelligence Lab 的系列工作之一，主张给任意软件生成一层 CLI 外壳，让没有 API 的桌面/图形软件也能被 Agent 直接驱动。`/cli-anything <repo>` 走 7 阶段流水线产出 Click CLI（含 REPL、`--json` 输出、undo/redo），硬性要求调用真实软件后端而非降级替代；配套 CLI-Hub 做注册表与包管理。已覆盖 18 个主要应用、2,460+ 项测试全通过。连续第三日在榜，日增稳定在 580 左右。

### 9. debpalash/VoiceStudio

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/debpalash/VoiceStudio |
| 简介 | VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages. |
| 语言 | Python |
| 总 Star | 75,017 |
| 今日新增 | 2,098 stars today |
| 标签 | 语音合成、本地部署、ElevenLabs 替代、Python、多语言 |

开箱即用的 ElevenLabs 开源平替，覆盖语音克隆、音色设计、视频配音、听写、转写与有声书，标称支持 646 种语言，全部在本机跑。桌面端已切到 Electron，硬件支持从 NVIDIA CUDA、Apple Silicon MPS 一路覆盖到无独显的 CPU 小构建。连续第二日拿下日增第一（+2,135 → +2,098），是本轮榜单里唯一保持两日高位的非 Agent 项目，靠的是「声音不出本机 + 不再按字符付费」两条硬诉求。

### 10. android/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/android/skills |
| 简介 | AI 优化、模块化的 Android 开发指令集（SKILL.md 规范），用于让 Agent 遵循 developer.android.com 的官方最佳实践。 |
| 语言 | Kotlin |
| 总 Star | 8,721 |
| 今日新增 | 381 stars today |
| 标签 | Agent Skills、Android、Kotlin、官方生态、开发者工具 |

Google Android 官方维护的 Agent 技能库，遵循开放的 agent skills 标准，把开发者官网的最佳实践写成可被 Agent 加载的 SKILL.md。选题标准值得注意：只做评测显示 LLM 表现差的场景，不做 Jetpack Compose 基础这类模型已经很熟的部分。连续第三日在榜（+368 → +381），与今日第 4 的 cursor/plugins 同台——三家官方口径一致采用 SKILL.md，格式之争已彻底落定。（Trending 页面 description 抓取为 Unknown，此处依据仓库 README 补全）

### 11. mlabonne/llm-course

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mlabonne/llm-course |
| 简介 | Course to get into Large Language Models (LLMs) with roadmaps and Colab notebooks. |
| 语言 | Jupyter Notebook |
| 总 Star | 83,972 |
| 今日新增 | 81 stars today |
| 标签 | LLM、教程、学习路线、Jupyter、入门 |

Maxime Labonne 的 LLM 入门课程，分「LLM Fundamentals → LLM Scientist → LLM Engineer」三条路线，全程配 Colab notebook。今日是罕见样本：仓库最后一次推送是 2026-02-05，已 8 个月未更新，仍有 8.4 万星并以 +81 的日增回到榜单。上榜不由维护动作驱动，而是一轮新的入门需求——榜单里 Agent 工具越密集，越需要有人把底层原理讲清楚。

### 12. Kruk2/jasna

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Kruk2/jasna |
| 简介 | Jasna restores mosaics in videos and images — 自动定位并只重建画面中的马赛克区域，本地 GPU 运行，提供桌面应用与命令行。 |
| 语言 | Python |
| 总 Star | 2,356 |
| 今日新增 | 115 stars today |
| 标签 | 视频修复、超分辨率、本地 GPU、计算机视觉、Python |

今天唯一的陌生面孔，也是唯一既非 Agent 也非 LLM 的新项目。Jasna 做视频与图像中马赛克区域的定点修复：自动定位马赛克块，只重建被遮挡部分、不动其余画面，可在 Segment Editor 手动圈选预览，也能实时播放修复结果而不落盘。两条模型路线——BasicVSR++ 免费且快，LTX 更慢但细节更好；另有 VR180 与静态图支持。全部本地 GPU 运行。2.4k 星 +115 的体量不大，但把视频超分做成了开箱应用。

### 13. Comfy-Org/ComfyUI

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Comfy-Org/ComfyUI |
| 简介 | The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. The fastest local inference engine in the world. |
| 语言 | Python |
| 总 Star | 138,532 |
| 今日新增 | 155 stars today |
| 标签 | 扩散模型、图像生成、节点式工作流、Python、本地推理 |

节点式扩散模型 GUI 与后端，把文生图/图生图的每一步拆成可拼接的节点，既给图形界面也给 API，是本地推理生态的事实基础设施。13.8 万星日增 155 属日常水位，今天上榜更可能是生态连带——VoiceStudio（第 9）与 jasna（第 12）同日上榜，都走「本地 GPU 跑生成/修复模型」路线，ComfyUI 作为这条路上最大的通用底座被一并带起。

## 观察

**1. 竞争焦点从模型能力转移到"谁的货架全"。** 今日前三里两个是插件目录，第 10 又是官方技能库。cursor/plugins 一次性亮出 100+ 插件（84 个是 Salesforce / Shopify / QuickBooks / Robinhood 这类 SaaS 集成），把竞争维度从"技能写得好不好"推到"你日常用的服务接没接"。更关键的是它同时维护 `.cursor-plugin/` 与 `.claude-plugin/` 两套清单并脚本生成 Claude Code 的 harness 树——**同一份 SKILL.md 已经开始跨客户端流通，能力层的可移植性第一次高于平台忠诚度。**

**2. 增量结构反转：Agent 主线让位给"个人刚需"。** 增量前二被 ai-job-search（+2,213）和 VoiceStudio（+2,098）拿走，两者都不是 Agent 基础设施；而 Agent 侧最高的是 opencode 的 +1,417 和 orca 的 +1,146，四席插件/harness 类项目全部落在 350–600。这与此前几日"Agent 项目垄断头部增量"的形态明显不同：当"装插件"变成日常操作，用户对基础设施的新奇感下降，而对**能直接解决自己一件事**的工具（找一份工作、录一段声音）的付费/关注意愿上升。

**3. 老项目回潮，今天更像存量重估而非新东西爆发。** opencode（21.6 万星，日增翻 2.5 倍）、ComfyUI（13.8 万星）、llm-course（8.4 万星，8 个月未推送）三个万星以上老仓库同日上榜，其中两个是被生态连带上来的（opencode 靠 harness 兼容名单，ComfyUI 靠本地生成路线集体上榜）。这类"老仓库放量"通常意味着榜单当下的新项目供给不足——真正的信号藏在第 12 名的 jasna 这类只有 2.4k 星的新面孔里。

**4. 「本地优先」从卖点变成默认配置。** ai-job-search（简历不出本机）、ai-memory（默认零 LLM、无需 API key）、VoiceStudio（声音不出本机、不按字符付费）、jasna（本地 GPU）、ComfyUI（本地推理）——今天 13 席里 5 席把"数据/算力留在本地"写进了核心叙事。两周前这还是差异化卖点，现在已经是这一层项目的入场券。

**5. Rust 席位收缩但质量不降。** 昨日 Rust 占 2 席（ai-memory、xerj），今日只剩 ai-memory 一席，但它的日增从 +208 放大到 +513 并跨过 1 万星。xerj 掉出榜单属于单日波动，不影响判断：这一层需要"常驻 + 并发 + 处理凭据"的项目仍在向 Rust 集中，只是供给本来就薄，席位会随单日热度抖动。
