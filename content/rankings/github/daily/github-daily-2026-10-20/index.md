---
title: GitHub 每日趋势榜 2026-10-20
description: 2026-10-20 GitHub Trending 榜首为 MadsLorentzen/ai-job-search，当日共收录 13 个项目。
date: '2026-10-20T08:00:00+08:00'
rankingKey: '2026-10-20'
slug: github-daily-2026-10-20
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

2026-10-20 GitHub Trending 共收录 13 个项目，榜首 MadsLorentzen/ai-job-search（3,890 stars today）。语言分布：Python 7、TypeScript 3、JavaScript 2、Shell 1。

## 重点项目

### 1. MadsLorentzen/ai-job-search

- 地址：https://github.com/MadsLorentzen/ai-job-search
- 简介：The job search that runs on your machine. AI job application framework built on Claude Code: evaluate postings, tailor CVs, write cover letters, prep interviews. Fork it and own it.
- 语言：Python
- 今日新增：3,890 stars today
- 标签：Claude Code、求职自动化、Agent 工作流、LaTeX、本地优先

MadsLorentzen/ai-job-search

把 Claude Code 变成跑在本机的求职代理：`/scrape` 搜岗、`/rank` 批量打分、`/apply` 定制简历与求职信并自动编译 LaTeX 校验页数与 ATS 文本层、`/interview` 备面、`/outcome` 归档跟进。作者本人是地球物理学家，用这套流程投了 69 份定制申请拿到 20 场初面并转行 AI 工程师。**连续第四日在榜，日增曲线 +1,397 → +2,213 → +3,860 → +3,890，今日首次横盘**，累计星数突破 6 万（60,253）。值得注意的是今天它**没有新版本**（最近一版 v1.7.3 停在 10-19），仍拿到榜首——这在近两周的榜单里很少见，因为其余席位几乎都由发布动作驱动。技术上最有意思的仍是 drafter-reviewer 双 Agent 互批，以及"绝不伪造经历"被写进流程硬约束：这条约束既是它的道德卖点，也是它区别于所有"AI 一键投简历"产品的实际门槛。

### 2. cloudflare/security-audit-skill

- 地址：https://github.com/cloudflare/security-audit-skill
- 简介：A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings
- 语言：JavaScript
- 今日新增：1,680 stars today
- 标签：安全审计、Agent 技能、Cloudflare、漏洞发现、机器可读报告

cloudflare/security-audit-skill

**今日最重要的新面孔，也是今天唯一的"厂商官方出品"。** Cloudflare 把它内部那套漏洞发现 harness 的单仓库起点开源成了 coding-agent 技能——配套博客是《Build your own vulnerability harness》。跑一次审计分六阶段：①侦察（产出 `architecture.md` + `coverage-ledger.json`，把架构、信任边界、输入面、已有证据和确定性覆盖全部落到账本上）；②**覆盖度驱动的狩猎**（从账本单元分派互相隔离的 hunter，并用 coverage critic 找覆盖缺口）；③候选验证（每个候选交给一个**全新的 verifier，任务是否证伪它**）；④结构化输出（写 `findings.json` 并按 `report-schema.json` 校验）；⑤独立记录核验（换一批 Agent 复核最终引用，凡有实质替换再派一次独立 verifier）；⑥目标中立报告（导出 `REPORT.md` / `FINDINGS-DETAIL.md` / `NEEDS-VALIDATION.md`）。结论被硬性分成三级：**confirmed（有完整源码链路且有界可观察结果）、needs_validation（有精确未决事实且不给严重级别）、rejected（已被证伪）**——这套设计专门针对"Agent 安全审计报告里塞满似是而非的高危"这个通病。攻击面按文件拆分，共 11 类：内存安全/二进制、AI 与 LLM（提示注入、Agent/工具、输出处理）、Web 协议与认证、客户端、供应链与发布、云与部署、RPC 与消息、资源耗尽、数据隔离与生命周期、桌面/移动/本地 IPC。多次运行是**累加**的，会复用历史账本只打缺口。**注意：仓库最后一次推送停在 2026-09-14（36 天前），今日上榜由官方博客回流驱动而非版本动作**——这与同榜 6 个月未更新的 Kronos 是同一类"静态仓库被重新挖出"。

### 3. stablyai/orca

- 地址：https://github.com/stablyai/orca
- 简介：Orca is the place for working with a fleet of agents (e.g. Grok Bot, Claude Code). Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.
- 语言：TypeScript
- 今日新增：1,559 stars today
- 标签：Agent 编排、多智能体、TypeScript、开发者工具、worktree

stablyai/orca

多编码 Agent 的编排工作台：一个 prompt fan-out 给多个 Agent，各自跑在**独立的 git worktree** 里并行开工，最后在同一界面比对并合并胜出方案。自带订阅（BYOK），不卖模型能力，只做调度与并行，支持 30+ 种 CLI agent；桌面 + 移动伴侣 + SSH 远程运行时三形态，Design Mode 可直接点选 Chromium 窗口里的 UI 元素送进 prompt。**今日一天内连发 v1.4.232（06:20 CST）与 v1.4.233（18:27 CST）**，日增 +1,559，累计 99,592 星——**距离 10 万星只差 408**。与昨日（+1,591）几乎持平，是这个榜位近期最稳的项目。作为对照：今日同榜的 ruflo 走"swarm 自治协作"，orca 走"并行 + 人工挑胜出"，两条多 Agent 路线已经连续多日同台且各自有独立受众。

### 4. DietrichGebert/ponytail

- 地址：https://github.com/DietrichGebert/ponytail
- 简介：Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.
- 语言：JavaScript
- 今日新增：1,396 stars today
- 标签：Agent 技能、代码质量、代码审查、Claude Code、Token 成本

DietrichGebert/ponytail

**今天最反直觉的项目。** 人设是"那个留着长马尾、比版本控制系统来得还早的高级工程师——你给他看五十行，他一言不发，换成一行"。Ponytail 5 把它装进 Agent：核心信条是**先找仓库里已经有的东西，能不写就不写**（官方示例：要一个日期选择器，无技能时 Agent 装库或手搓日历写出 335 行；Ponytail 发现仓库已有 `Input` 组件、而每个浏览器都自带日期选择器，于是写了一个 10 行文件）。它强调规则从来不是"最少 token"，而是"只写任务需要的，且绝不砍掉校验、错误处理、安全与无障碍"——**代码小是因为必要，不是因为打高尔夫**；省成本和降延迟只是副作用。实测（Claude Code 内同一 Agent 有无技能对照，39 个任务含真实 FastAPI + React 仓库，Opus 5.5，每组 5 轮，基准跑于 2026-10-07）：**代码量 -53%、时间 -41%、成本 -26%、token -45%**，而**有测试覆盖的风险逻辑从 68% 升到 98%**；盲评中 Ponytail 5 的回答以 110 : 67 胜过上一代；6 个安全任务 30 轮全过（少代码但没更不安全）。`/ponytail-review` 与 `/ponytail-audit` 在 v5 里被重写：前者**读变更触及的代码而非只读 diff**，对植入问题发现率 100%（无技能 87%），diff 之外的问题发现率 100%（无技能 78%）；后者给整个仓库排"先修这个"的优先级。仓库 2026-06 创建、MIT、适配 20 种 Agent，四个月做到 17 万星。**它和昨日上榜的 headroom 是同一枚硬币的两面：headroom 压的是输入侧的 token，ponytail 压的是输出侧的代码量——两者都在回答"Agent 用得起之后，下一步要管什么"。**

### 5. Comfy-Org/ComfyUI

- 地址：https://github.com/Comfy-Org/ComfyUI
- 简介：The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. The fastest local inference engine in the world.
- 语言：Python
- 今日新增：1,201 stars today
- 标签：扩散模型、图像生成、节点式工作流、Python、本地推理

Comfy-Org/ComfyUI

节点式扩散模型 GUI 与后端，把文生图/图生图的每一步拆成可拼接的节点，既给图形界面也给 API，是本地推理生态的事实基础设施。**昨日版本驱动的放量今天没有回落，反而继续走高**：v0.42.0（10-19 06:10 CST）与 v0.42.1（09:33 CST）之后，日增由 +1,011 再升到 **+1,201**，排名守在第 5，累计突破 14 万星（140,674）。在一个 13 席里 11 席是 Agent 相关项目的榜单上，它和 vllm 是仅有的两个"经典 AI 基础设施"席位——**而两者今天都在榜，说明这一轮 Agent 热潮并没有把底层推理层的注意力抽走，反而把它一起抬了上来**。

### 6. ruvnet/ruflo

- 地址：https://github.com/ruvnet/ruflo
- 简介：🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated
- 语言：TypeScript
- 今日新增：683 stars today
- 标签：Agent、多智能体编排、TypeScript、RAG、开发者工具

ruvnet/ruflo

老牌多智能体 harness，主打 swarm 编排与自适应记忆，内置向量 RAG 与 federation，并原生对接 Claude Code / Codex / Hermes。连续第五日在榜，**今日同步发 v3.59.0（14:31 CST）与 v3.59.1（17:26 CST）**，日增由 +564 抬到 +683，逆转了此前连续三日卡在 500–570 的横盘。它是"多 Agent 自治协作"路线的代表，与第 3 的 orca（并行 + 人工裁决）形成长期对照；今日榜单里它的位置还多了一层含义——新上榜的 security-audit-skill 走的是"隔离 hunter + 独立 verifier"，本质是 swarm 思路在安全审计领域的一次具体落地。

### 7. Graphify-Labs/graphify

- 地址：https://github.com/Graphify-Labs/graphify
- 简介：Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex, and Gemini CLI: local deterministic AST parsing, every edge explained, no vector store.
- 语言：Python
- 今日新增：906 stars today
- 标签：知识图谱、代码检索、AST、Claude Code 技能、多模态解析

Graphify-Labs/graphify

`/graphify .` 一条命令把任意目录（代码库、笔记、论文、截图、架构图、白板照片甚至其它语言的图片）用 Claude vision 抽概念与关系，连成一张可查询的知识图谱。**最大的主张是"不用向量库"**：走本地确定性 AST 解析，每条边都可解释来源；官方给的对照数字是**每次查询比直接读原始文件少 71.5 倍 token**，图谱以 `graph.json` 持久化、跨 session 复用，并明确区分"它找到的"和"它猜的"。输出目录同时给 `graph.html`（可交互、可点节点、按社区过滤）、`obsidian/`（直接当 Obsidian 库打开）、`wiki/`（`--wiki` 生成给 Agent 爬的索引 + 每社区一篇文章）、`GRAPH_REPORT.md`（枢纽节点、意外连接、建议追问）与 SHA256 `cache/`（重跑只处理变更文件）。还能 `/graphify add <arxiv 或 X 链接>` 直接把论文/推文收进图谱，以及 `query` / `path` / `explain` 三种查法。README 的定位句是"Karpathy 有个 `/raw` 文件夹专门丢论文、推文、截图和笔记——graphify 就是那个问题的答案"。仓库 2026-04 创建、今日 16:16 CST 仍有推送，13.0 万星。**它和昨日的 os-taxonomy 是一类：在全是 Agent 工具的榜单里，卖的是"结构化资产 + 检索层"，而不是又一个 Agent。**

### 8. anomalyco/opencode

- 地址：https://github.com/anomalyco/opencode
- 简介：The open source coding agent.
- 语言：TypeScript
- 今日新增：1,256 stars today
- 标签：AI 编程、Agent、TypeScript、开源、开发者工具

anomalyco/opencode

开源编码 Agent 本体，21.9 万星，从第 2 落到第 8 但日增几乎没动（+1,310 → +1,256）。近期只有 v1.19.3（10-16）一个例行版本，今天的上榜动力依旧来自生态连带：ruflo、orca、ponytail（明确标了适配 20 种 Agent）、agency-agents 的兼容名单里它都是一等公民。**今日 13 席中有 6 席是"跑在 Agent 之上"的技能/插件/人格**——这一层越热闹，作为被支持方的本体就越容易被顺手 star，这也解释了为什么 21 万星的老仓库还能稳定有千级日增。

### 9. msitarzewski/agency-agents

- 地址：https://github.com/msitarzewski/agency-agents
- 简介：A complete AI agency at your fingertips - From frontend wizards to Reddit community ninjas, from whimsy injectors to reality checkers. Each agent is a specialized expert with personality, processes, and proven deliverables.
- 语言：Shell
- 今日新增：590 stars today
- 标签：Agent 人格、角色库、提示工程、跨平台安装、开发者工具

msitarzewski/agency-agents

**"AI 广告公司"式的人格库**：每个 agent 文件包含身份与性格特质、核心使命与工作流、带代码示例的技术交付物、成功指标与沟通风格，按部门分目录（工程、社区、创意等），既有前端向导也有"Reddit 社区忍者"和"现实检验员（reality checker）"。起源于一条 Reddit 帖子，2025-10 创建，一年做到 16.2 万星。最近的重要变化是**从仓库变成了产品**：官方出了桌面应用 **Agency Agents**（macOS / Linux / Windows，agencyagents.app），可浏览全部名录并一键装进 Claude Code、Cursor、Codex、Gemini CLI、OpenCode、Qwen、Osaurus 且自动更新；命令行入口保留 `./scripts/install.sh --tool claude-code`。**它是今日"技能/角色文件"层的典型样本：仓库本身几乎不含可执行代码（主语言是 Shell，全是安装脚本），值钱的是那一批 `.md` 角色定义**——这正好呼应昨日观察到的"值钱的东西从代码移到了数据/内容"，只是这里的内容是人格与流程。

### 10. headroomlabs-ai/headroom

- 地址：https://github.com/headroomlabs-ai/headroom
- 简介：Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20% fewer tokens for coding agents, 60-95% fewer tokens for JSON, same answers. Library, proxy, MCP server.
- 语言：Python
- 今日新增：555 stars today
- 标签：上下文压缩、Token 成本、Agent 基础设施、MCP、Python

headroomlabs-ai/headroom

Agent 的"上下文压缩层"：在 tool 输出、日志、文件、RAG 片段进入 LLM 之前先压一遍，压缩全程跑在本机，prompt 与文件内容不外发。流水线为 CacheAligner → ContentRouter → CCR 三段，按内容类型分派压缩器（JSON 走 SmartCrusher、代码走 CodeCompressor 走 AST、散文走自研 kompress-v2-base 模型），CCR 在本地留存原文供模型用 `headroom_retrieve` 回取完整文本。四组实测：代码搜索 17,199 → 13,597（省 21%）、SRE 故障排查 55,957 → 24,340（省 57%）、代码库探索 58,801 → 33,895（省 42%）、GitHub issue 分诊 46,067 → 32,429（省 30%）；延迟 0.21ms p50（10K token JSON），并在 GSM8K / TruthfulQA / SQuAD v2 / BFCL 上给出同精度结论。三种接入方式（Python 库 / `headroom wrap claude` 包装 Agent / 零改动的 drop-in proxy）。**昨日以"今日最重要的新面孔"上榜（+317），今日日增放大到 +555（+75%）但排名从第 7 落到第 10**——不是它变弱了，而是今天新增的 6 席里有 4 席日增都在 900 以上。**它仍是这条线的坐标原点**：昨天刚被判定为本周主战场的"token 成本"，今天就迎来了同方向的 ponytail（省输出侧代码量），两条线合并成一条更清楚的主线。

### 11. anthropics/knowledge-work-plugins

- 地址：https://github.com/anthropics/knowledge-work-plugins
- 简介：Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork
- 语言：Python
- 今日新增：262 stars today
- 标签：Claude Cowork、岗位插件、企业工作流、Anthropic、连接器

anthropics/knowledge-work-plugins

Anthropic 官方开源的一批**岗位职能插件**，主战场是 Claude Cowork（同时兼容 Claude Code）。主张是：Cowork 让 Claude 交付成品，而插件进一步告诉 Claude"该怎么干"——用哪些工具和数据源、关键流程怎么走、暴露哪些 slash 命令。每个插件打包了该职能所需的 skills、connectors、slash commands 与 sub-agents，共开源 **11 个**：productivity、sales、customer-support、product-management、marketing、legal、finance、data（Snowflake / Databricks / BigQuery）、enterprise-search、bio-research（PubMed / bioRxiv / ChEMBL / Benchling 等）以及 cowork-plugin-management（用于自建或改造插件）。**真正的卖点写在 README 里：开箱只是起点，威力来自按公司定制——你自己的工具、术语和流程**。仓库 2026-01 创建，今日 07:38 CST 仍有推送，3.1 万星。**这标志着厂商竞争点从"模型/CLI"下沉到"岗位流程包"**：昨天掉榜的三家插件目录是空货架，今天 Anthropic 端出来的是 11 个带着真实连接器清单的具体岗位包。

### 12. shiyu-coder/Kronos

- 地址：https://github.com/shiyu-coder/Kronos
- 简介：Kronos: A Foundation Model for the Language of Financial Markets
- 语言：Python
- 今日新增：719 stars today
- 标签：金融大模型、时间序列、K 线、基础模型、量化

shiyu-coder/Kronos

**首个开源的金融 K 线基础模型**，在 45+ 全球交易所的数据上预训练。架构两阶段：先用专用 tokenizer 把连续多维 OHLCV 量化成**层级离散 token**，再用大型自回归 Transformer 在这些 token 上预训练，成为可服务多种量化任务的统一模型——设计目标明确指向金融数据高噪声、低信噪比的特性，区别于通用时间序列基础模型。论文已被 **AAAI 2026 接收**，并放出微调脚本与在线 Demo。仓库 2025-07 创建，累计 4.2 万星。**连续第二日在榜且日增翻倍（+355 → +719）**，但最近一次推送仍停在 2026-04-13，已 6 个月无更新——与今日第 2 的 security-audit-skill（36 天未推送）同属"静态仓库被重新挖出"，只是 Kronos 的日增反而更高。这说明当前市场对"垂直领域基础模型"的需求仍在回流，而它是最老也最完整的一份开源实现。

### 13. vllm-project/vllm

- 地址：https://github.com/vllm-project/vllm
- 简介：A high-throughput and memory-efficient inference and serving engine for LLMs
- 语言：Python
- 今日新增：98 stars today
- 标签：LLM 推理、服务引擎、Python、基础设施、开源

vllm-project/vllm

高吞吐、省显存的 LLM 推理与服务引擎，是开源模型上线的事实标准后端。**今日以 +98 的极低日增挂在榜尾**——这个数字在 9.4 万星量级属于日常水位，能进榜靠的是 v0.32.0（10-18 发布）带来的持续安装与引用，而非爆发。它在今天榜单里的意义不在增量，而在**结构**：13 席里 11 席直接或间接服务于 Agent，剩下两个席位正是 vllm 与 ComfyUI——一个是语言模型推理底座，一个是图像/视频生成底座。**当上层全是 Agent 编排与技能时，底层推理引擎仍在稳定上榜，说明这轮热度是"全栈同步"，不是"上层抽空下层"。**

## 观察

- MadsLorentzen/ai-job-search 今日 3,890 stars today，居当日增量第 1 位。
- cloudflare/security-audit-skill 今日 1,680 stars today，居当日增量第 2 位。
- stablyai/orca 今日 1,559 stars today，居当日增量第 3 位。
