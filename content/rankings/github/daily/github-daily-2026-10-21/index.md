---
title: GitHub 每日趋势榜 2026-10-21
description: 2026-10-21 GitHub Trending 榜首为 cloudflare/security-audit-skill，当日共收录 12 个项目。
date: '2026-10-21T08:00:00+08:00'
rankingKey: '2026-10-21'
slug: github-daily-2026-10-21
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

今日榜单共 **12 个项目**（已回查 Trending 页面 `Box-row` 计数同为 12，非解析丢失），较昨日少 1 席，但内部换掉 **4 席**——是本周第一次出现"席位收缩 + 存量重排"而非扩容。

- **语言分布**：Python 5、TypeScript 3、JavaScript 2、Go 1、Rust 1。Python 连续第四日占多数但首次回落（6 → 6 → 7 → 5）；Go 与 Rust 各取回 1 席（freehire、ai-memory），是本周语言面最分散的一天。
- **本期主线：昨日那批「角色/技能文件」大面积退潮，留下的是能被验证的东西。** 昨日 13 席里有 5 个卖 `SKILL.md` / 人格文件 / 岗位插件，今天 agency-agents、knowledge-work-plugins、ruflo、opencode **集体掉榜**，只剩 security-audit-skill（升到第 1）与 ponytail（今日增量冠军）两个。**区别很有意思：活下来的这两个都带着可复核的流程产出**（三级结论、可对照的基准数字），掉的都是"目录与人格"。
- **今日最重要的结构变化是「经典基础设施回来了」。** supabase/supabase（第 7，新上榜）、twentyhq/twenty（第 8，新上榜）、vllm（由第 13 升到第 2）三个非 Agent 明星**同一天占据三个席位**，合计日增 1,053。过去一周这个榜几乎被 Agent 工具与技能层填满，今天第一次出现"底座与应用层同时回填"。
- **增量冠军：DietrichGebert/ponytail（+2,051）**，连续第二日放量且今日放大 47%（+1,396 → +2,051），171,394 星。这是它上榜四天里的最高值，也是本周首次有 "反增长叙事"的项目拿到日增第一——它卖的是**少写**。
- **security-audit-skill 登顶（+1,997）**：昨日以第 2 入榜（+1,680），今日升到第 1 且增量继续放大 19%。一个 36 天未推送的静态仓库连续两日拿到近两千日增，是"外部事件驱动"样本里最强的一个。
- **graphify 是今天增幅最大的存量项目**：+906 → **+1,434**（+58%），131,480 星，靠 10-20 16:29 CST 发的 v0.9.93 驱动。它与昨日同一位置比，是今天唯一"既提量又提 rank"的中间层项目。
- **今日释出动作最密的仍是 orca**：一天内连发 v1.4.235（10-20 22:52 CST）与 v1.4.237（10-21 07:25 CST），并**跨过 10 万星**（99,592 → 101,087）。
- **唯一值得警惕的信号**：ai-memory 时隔一日回归但日增从 +666 腰斩到 +303（10-17 起 +208 → +513 → +666 → 掉榜 → +303），是典型的"发布热度衰减曲线"。

---

## 重点项目

### 1. cloudflare/security-audit-skill

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cloudflare/security-audit-skill |
| 简介 | A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings |
| 语言 | JavaScript |
| 总 Star | 35,935 |
| 今日新增 | 1,997 stars today |
| 标签 | 安全审计、Agent 技能、Cloudflare、漏洞发现、机器可读报告 |

cloudflare/security-audit-skill<br><br>**今日登顶，也是本周唯一连续两日拿到近两千日增的静态仓库。** Cloudflare 把它内部那套漏洞发现 harness 的单仓库起点开源成了 coding-agent 技能，配套博客是《Build your own vulnerability harness》。跑一次审计分六阶段：①侦察（产出 `architecture.md` + `coverage-ledger.json`）；②覆盖度驱动的狩猎（从账本单元分派互相隔离的 hunter，配 coverage critic 找覆盖缺口）；③候选验证（每个候选交给一个**全新的 verifier，任务是证伪它**）；④结构化输出（写 `findings.json` 并按 `report-schema.json` 校验）；⑤独立记录核验；⑥目标中立报告。**结论被硬性分成 confirmed / needs_validation / rejected 三级**，专门针对"Agent 安全审计报告里塞满似是而非的高危"这个通病。**仓库最后一次推送仍停在 2026-09-14（37 天前）**，今日日增 +1,680 → **+1,997**（+19%），星数 33,899 → 35,935，即 Blog 回流在第二日仍在放大而非衰减——这与多数"外部事件驱动"上榜者第二天就回落不同，说明 Cloudflare 这篇博客正在持续被引用转载。攻击面按文件拆 11 类（含 AI 与 LLM：提示注入、Agent/工具、输出处理），多次运行累加并复用历史账本只打缺口。

### 2. vllm-project/vllm

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/vllm-project/vllm |
| 简介 | A high-throughput and memory-efficient inference and serving engine for LLMs |
| 语言 | Python |
| 总 Star | 94,810 |
| 今日新增 | 439 stars today |
| 标签 | LLM 推理、服务引擎、Python、基础设施、开源 |

vllm-project/vllm<br><br>**今日 rank 跃升最大的项目：第 13 → 第 2。** 高吞吐、省显存的 LLM 推理与服务引擎，开源模型上线的事实标准后端。**今日日增由 +98 放大到 +439（4.5 倍）**，是它近一周的最高值。值得注意的是**这个放量没有任何新版本支撑**——最近的 release 仍是 v0.32.0（10-18），今日 0 新增 tag。合理的解释是 v0.32.0 发布满三天后进入实际部署周期（装依赖、跑评测、写迁移笔记），这类"延后三天才体现的安装驱动型放量"在此前的 ComfyUI 上也见过（v0.42.x 发布后第二日反而更高）。它在今天榜单里的意义同样在结构而非增量：12 席里有 9 席直接或间接服务于 Agent，而 vllm 与 ComfyUI 是仅有的两个底层推理引擎席位，**今天两者同时回到腰部以上**。

### 3. stablyai/orca

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/stablyai/orca |
| 简介 | Orca is the place for working with a fleet of agents (e.g. Grok Bot, Claude Code). Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime. |
| 语言 | TypeScript |
| 总 Star | 101,087 |
| 今日新增 | 1,543 stars today |
| 标签 | Agent 编排、多智能体、TypeScript、开发者工具、worktree |

stablyai/orca<br><br>**今日跨过 10 万星**（99,592 → 101,087）。多编码 Agent 的编排工作台：一个 prompt fan-out 给多个 Agent，各自跑在**独立的 git worktree** 里并行开工，最后在同一界面比对并合并胜出方案；自带订阅（BYOK）不卖模型能力，支持 30+ 种 CLI agent，桌面 + 移动伴侣 + SSH 远程运行时三形态，Design Mode 可直接点选 Chromium 窗口里的 UI 元素送进 prompt。**今日连发 v1.4.235（10-20 22:52 CST）与 v1.4.237（10-21 07:25 CST）**，日增 +1,559 → +1,543，连续第七日稳定在 1,500 上下——这是本榜近期最"没有故事"的数字，也是它最硬的资产：在四周日增动辄翻倍/腰斩的项目中间，orca 是靠每日发布维持恒定基座的那一类。

### 4. headroomlabs-ai/headroom

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/headroomlabs-ai/headroom |
| 简介 | Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20% fewer tokens for coding agents, 60-95% fewer tokens for JSON, same answers. Library, proxy, MCP server. |
| 语言 | Python |
| 总 Star | 77,191 |
| 今日新增 | 477 stars today |
| 标签 | 上下文压缩、Token 成本、Agent 基础设施、MCP、Python |

headroomlabs-ai/headroom<br><br>Agent 的"上下文压缩层"：在 tool 输出、日志、文件、RAG 片段进入 LLM 之前先压一遍，全程本机、prompt 与文件内容不外发。流水线 CacheAligner → ContentRouter → CCR 三段，按内容类型分派压缩器（JSON 走 SmartCrusher、代码走 AST 的 CodeCompressor、散文走自研 kompress-v2-base），CCR 本地留存原文供模型用 `headroom_retrieve` 回取。四组实测：代码搜索 17,199 → 13,597（省 21%）、SRE 故障排查 55,957 → 24,340（省 57%）、代码库探索 58,801 → 33,895（省 42%）、GitHub issue 分诊 46,067 → 32,429（省 30%）。**今日日增由 +555 回落到 +477（-14%）但 rank 反而从第 10 升到第 4**——不是它变强，而是今天掉榜的四个项目（ai-job-search、agency-agents、knowledge-work-plugins、opencode）日增都比它高。**它是本周主线的坐标原点**：压缩的输入/输出两侧如今都被占满（headroom 管输入 token，ponytail 管输出代码量），两者今天的位次第一次相邻。

### 5. DietrichGebert/ponytail

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/DietrichGebert/ponytail |
| 简介 | Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote. |
| 语言 | JavaScript |
| 总 Star | 171,394 |
| 今日新增 | 2,051 stars today |
| 标签 | Agent 技能、代码质量、代码审查、Claude Code、Token 成本 |

DietrichGebert/ponytail<br><br>**今日增量冠军。** 人设是"那个留着长马尾、比版本控制系统来得还早的高级工程师——你给他看五十行，他一言不发，换成一行"。核心信条：**先找仓库里已经有的东西，能不写就不写**（官方示例：要一个日期选择器，无技能时 Agent 装库或手搓日历写出 335 行；Ponytail 发现仓库已有 `Input` 组件、而每个浏览器都自带日期选择器，于是写了一个 10 行文件）。规则从来不是"最少 token"，而是"只写任务需要的，且绝不砍掉校验、错误处理、安全与无障碍"。实测（Claude Code 内同一 Agent 有无技能对照，39 个任务含真实 FastAPI + React 仓库，Opus 5.5，每组 5 轮，基准跑于 2026-10-07）：**代码量 -53%、时间 -41%、成本 -26%、token -45%，而有测试覆盖的风险逻辑从 68% 升到 98%**；盲评以 110 : 67 胜过上一代；6 个安全任务 30 轮全过。`/ponytail-review` 读变更触及的代码而非只读 diff，对植入问题发现率 100%（无技能 87%）。**今日日增 +1,396 → +2,051（+47%），星数突破 17 万**。注意它**今日无新版本**（最近 release v5.3.2 停在 10-16），四天里第二次在没有发布动作的情况下放量——这说明它的增长已经脱离发布节奏，进入引用扩散阶段。

### 6. Comfy-Org/ComfyUI

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Comfy-Org/ComfyUI |
| 简介 | The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. The fastest local inference engine in the world. |
| 语言 | Python |
| 总 Star | 141,435 |
| 今日新增 | 914 stars today |
| 标签 | 扩散模型、图像生成、节点式工作流、Python、本地推理 |

Comfy-Org/ComfyUI<br><br>节点式扩散模型 GUI 与后端，把文生图/图生图的每一步拆成可拼接的节点，既给图形界面也给 API，是本地推理生态的事实基础设施。**版本驱动的放量今天进入正常衰减第二天**：v0.42.0（10-18 22:10 CST）与 v0.42.1（10-19 01:33 CST）之后，日增曲线为 +1,011 → **+1,201** → **+914**，今日首次回落但仍守在第 6，累计 141,435 星。**在无任何新 release 的情况下维持九百日增**，说明这次版本带来的不只是"点星"而是真实安装量。它与第 2 的 vllm 同为今日榜单仅有的两个底层推理席位——上层 Agent 叙事再热闹，这两个底座今天都在榜，**可以判断这轮热度没有抽空底层**。

### 7. supabase/supabase

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/supabase/supabase |
| 简介 | The Postgres development platform. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications. |
| 语言 | TypeScript |
| 总 Star | 112,913 |
| 今日新增 | 509 stars today |
| 标签 | Postgres、后端即服务、开源、开发者平台、边缘函数 |

supabase/supabase<br><br>**今日最重要的新面孔，也是本榜近期少见的"非 AI 原生"项目。** Postgres 开发平台，把数据库、认证、存储、实时订阅、边缘函数与向量（pgvector）打包成一套后端，是 Firebase 的开源替代。仓库 2019 年创建、11.3 万星，**今日@pushed_at 为 10-21 21:05 UTC（即抓取前几分钟仍在提交）**，是本期唯一"抓取时还在活动"的仓库。需要注意的是它**今日同样没有新 release**（最近一次 v1.26.08 停在 08-07），+509 属于 11 万星量级的稳态流入。它的上榜含义在结构：**过去一周的榜单几乎被 Agent 工具填满，今天 supabase + twenty 两个"正经业务系统"同一天进场**，说明在 Agent 热潮里，承担数据落地的应用层基础设施并没有失焦——Agent 写出来的东西最终还是要落进一张 Postgres 表里。

### 8. twentyhq/twenty

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/twentyhq/twenty |
| 简介 | The open alternative to Salesforce, designed for AI. |
| 语言 | TypeScript |
| 总 Star | 59,070 |
| 今日新增 | 105 stars today |
| 标签 | CRM、开源替代、TypeScript、NestJS、GraphQL |

twentyhq/twenty<br><br>Salesforce 的开源替代，定位"为 AI 设计的 CRM"，5.9 万星。技术栈是 NestJS + React 的 TypeScript monorepo，数据层 Postgres + GraphQL API，同时支持自托管。**今日发 v2.50.0（10-21 10:13 UTC）**，是本榜今日唯一由当日新版本驱动的项目；该版本含一处破坏性变更——把 app 权限重命名并落地为 Workspace Apps 与 User Apps 并在服务端强制 User Apps，另含 workspace credits per seat 计费与自定义角色 gating 的准备性改动（Member identity、self-host grant、原子化角色删除）。**日增 +105 是今日榜单最低值**，能进榜靠的是版本号而非增量，性质与昨日的 vllm 相同。它与第 7 的 supabase 构成同一件事：**今天是 Agent 榜难得的一次"应用层回补"**。

### 9. shiyu-coder/Kronos

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/shiyu-coder/Kronos |
| 简介 | Kronos: A Foundation Model for the Language of Financial Markets |
| 语言 | Python |
| 总 Star | 42,764 |
| 今日新增 | 570 stars today |
| 标签 | 金融大模型、时间序列、K 线、基础模型、量化 |

shiyu-coder/Kronos<br><br>**首个开源的金融 K 线基础模型**，在 45+ 全球交易所的数据上预训练。架构两阶段：先用专用 tokenizer 把连续多维 OHLCV 量化成**层级离散 token**，再用大型自回归 Transformer 在这些 token 上预训练，成为可服务多种量化任务的统一模型——设计目标明确指向金融数据高噪声、低信噪比的特性，区别于通用时间序列基础模型。论文已被 **AAAI 2026 接收**，并放出微调脚本与在线 Demo。仓库 2025-07 创建，今日 42,764 星。**日增 +719 → +570（-21%），rank 由第 12 升到第 9**。最近一次推送仍停在 2026-04-13（6 个月无更新），它昨日是被本榜标记为"静态仓库被重新挖出"的样本，今日放量回落但位次反而上升——**这印证了昨日那条观察：这个榜里"今天上榜"不等于"今天有新东西"，判断前要看 pushed_at。**

### 10. strelov1/freehire

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/strelov1/freehire |
| 简介 | freehire — the open-source search engine for job seekers |
| 语言 | Go |
| 总 Star | 2,312 |
| 今日新增 | 396 stars today |
| 标签 | 求职搜索、招聘聚合、Go、Meilisearch、自托管 |

strelov1/freehire<br><br>**今天最值得细看的中小型项目（今日唯一 Go 席位，也是本期唯一低于 5,000 星的项目）。** 主张非常干脆：**每个职位都直连雇主源头**——直接爬取企业自己的 ATS（Workday、Greenhouse、Lever、Ashby、iCIMS 等 124 个平台）而非二手聚合器，因此没有猎头转帖、没有死链，每条记录都链回原始招聘页。规模：聚合 **330 万+ 在招职位、47 万+ 公司、320 个来源**（含 97 个 Telegram 频道）；同一职位被发到三个板会按稳定 key 折叠成一条。技术栈 Go + Fiber + PostgreSQL/pgvector + Meilisearch + SvelteKit 前端，MIT 许可且全部可自托管；LLM 相关能力（适配度分析、简历改写）通过 langchaingo 接任意 OpenAI 兼容端点，不绑定厂商。**最有意思的是它的 facet 纪律：分面信息来自人工词典而非模型猜测，猜不出就什么都不返回。** 另一个亮点是 **ghost job 检测**（`internal/job/ghost/`，不到 500 行 Go）：区分结构性证据与结果性证据，用"沉默阶梯" + 14 天过期戳来做标签，缺数据时宁可不判。产品侧还配了 ATS 安全模板的简历构建器、确定性的简历↔职位打分、投递看板、免密钥公开 API、CLI 与给 Claude Desktop 的 MCP server。仓库 2026-06 创建，8-26 上过 Product Hunt，今日 2,312 星。**它与昨日掉榜的 ai-job-search 恰好是同一条跑道的两端：一个是"用 Agent 帮你投"，一个是"先把职位数据本身做干净"。**

### 11. akitaonrails/ai-memory

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/akitaonrails/ai-memory |
| 简介 | Solution for long term memory for agent coding CLIs and to facilitate handoff between different agent vendors |
| 语言 | Rust |
| 总 Star | 12,257 |
| 今日新增 | 303 stars today |
| 标签 | Agent 记忆、Rust、跨厂商交接、本地优先、MCP |

akitaonrails/ai-memory<br><br>**时隔一日回归（10-17/18/19 三连后昨日掉榜），但日增明显衰减。** 给 AI 编码 CLI 做长期记忆，让不同厂商的 Agent 之间无缝交接——README 的一号场景就是"Claude Code 跑到一半中断，换 OpenAI Codex 在同一目录继续，不用重新解释架构、失败的尝试和未决问题"。支持 20+ 种 harness（Claude Code、Codex、Cursor、Gemini CLI、OpenCode、Grok、Devin、Kimi、Kiro 等）写进同一份共享记忆，handoff 是带 owner 且**只被认领一次**的类型化协议；`ai-memory run` 还能把上一个 harness 的可见历史以私有临时投影交给下一个 Agent，远端服务器只收到 harness 与 session 标识、不收 transcript 正文。**日增曲线 +208 → +513 → +666 →（掉榜）→ +303**，两日内星数 11,244 → 12,257。**今日 10-20 20:29 CST 发了 v3.1.2**，但增量只有此前峰值的 46%——典型的版本热度衰减曲线，可作为后面对照基准：**日均 300 左右大概率是它脱离发布驱动后的自然水位。**

### 12. Graphify-Labs/graphify

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Graphify-Labs/graphify |
| 简介 | Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex, and Gemini CLI: local deterministic AST parsing, every edge explained, no vector store. |
| 语言 | Python |
| 总 Star | 131,480 |
| 今日新增 | 1,434 stars today |
| 标签 | 知识图谱、代码检索、AST、Claude Code 技能、多模态解析 |

Graphify-Labs/graphify<br><br>**今日增幅最大的存量项目：+906 → +1,434（+58%）。** `/graphify .` 一条命令把任意目录（代码库、笔记、论文、截图、架构图、白板照片甚至其它语言的图片）抽概念与关系连成可查询知识图谱。**最大主张是"不用向量库"**：走本地确定性 AST 解析，每条边都可解释来源，官方给的数字是**每次查询比直接读原始文件少 71.5 倍 token**；图谱以 `graph.json` 持久化、跨 session 复用，并明确区分"它找到的"和"它猜的"。输出目录同时给 `graph.html`（可交互、按社区过滤）、`obsidian/`（直接当 Obsidian 库打开）、`wiki/`、`GRAPH_REPORT.md` 与 SHA256 `cache/`（重跑只处理变更文件）。**今日放量由 v0.9.93（10-20 16:29 CST）驱动**，与昨日同一 release 相比增量反而更高——说明这个版本在被二次传播。仓库 2026-04 创建、13.1 万星。**它今天是"检索层"这条线的唯一代表**：在全是 Agent 工具与技能文件的榜单里，它卖的是结构化资产 + 可解释检索，而不是又一个 Agent。

## 观察

**1. 「技能/角色文件」层今日完成了一次自我筛选，筛选标准是"能否被复核"。** 昨日 13 席里 5 个是技能/人格/岗位插件，今天只剩 2 个：security-audit-skill（升第 1）与 ponytail（今日增量冠军）。掉榜的 agency-agents（人格库）、knowledge-work-plugins（11 个岗位包）、ruflo（swarm harness）、opencode（Agent 本体）**共同点是卖"身份与流程描述"**；留下的两个**共同点是产出可被独立验证的东西**——前者把结论硬性分成 confirmed / needs_validation / rejected，并有独立 verifier 专门负责证伪；后者给 39 个任务 × 5 轮对照的具体百分比。**这与昨日观察 #2 的预测方向一致，只是收敛速度比预期快一天**：宣布生态的那批已经退场，交付可读产出的那批留在台上。

**2. 底层与应用层同时回填，是今天最容易被忽略的结构变化。** 12 席里，vllm（第 2）、ComfyUI（第 6）是两个推理底座，supabase（第 7）、twenty（第 8）是两个业务/数据层应用，**合计日增 1,967，占今日榜单日增的 15%**。过去两周这个位置几乎被 Agent 编排与技能文件占满，今天第一次出现"两头同时有人"。这里有一层因果：**Agent 写得越多，落数据的地方就越重要**——supabase 与 twenty 今天都不是靠 AI 卖点上榜（supabase 无新 release、twenty 发的是权限重构），却被吸进同一个榜单。

**3. 成本叙事今天出现第三块拼图：从 token 和代码量，扩到了"职位/数据要干净"。** headroom（压输入 token）、ponytail（压输出代码量）之后，freehire 以完全不同的方式呼应同一件事——它靠"只收源头数据 + 分面不猜 + ghost job 检测的沉默阶梯"把脏活放在前面。**三者共享同一种工程伦理表达：headroom 强调 same answers，ponytail 强调 never cut validation/security/accessibility，freehire 强调"猜不出就什么都不返回"。** 这是本周一以贯之的东西：**拒绝用编造换取观感上的完整。**

**4. 今日释出密度比昨日低，但 rank 变化更大。** 昨日两个连用两版（orca、ruflo）；今天只有 orca 连发（v1.4.235 / v1.4.237）与 twenty 发 v2.50.0。真正推动位次的是**外部事件与既存版本的滞后效应**：security-audit-skill（37 天未推送，靠博客回流连涨两天）、vllm（第 13 → 第 2，靠 v0.32.0 发布后第三天的安装潮）、Kronos（6 个月未推送，仍在第 9）。**累计占今日日增的 20%**。→ 结论仍是 10-20 那条：**看这个榜要先看 pushed_at 和 release 日期，rank 本身说明不了新鲜度。**

**5. 衰减曲线第一次被完整记录（ai-memory）。** +208 → +513 → +666 → 掉榜 → +303，配合 v3.1.2（10-20）这个时间点，可以清楚看到"发布 → 峰值 → 腰斩 → 回落"的三日周期。这条曲线的价值在于提供了一个标尺：**当一个项目日增从峰值腰斩且当日有新版发布时（如今天的 +303 与 v3.1.2），它已进入存量口碑阶段而非发现阶段**，后续判断应该看绝对值稳不稳，而不是有没有新版。

**6. Python 5 席的语言标签依旧失真，今日样本更极端。** 昨天已记录 knowledge-work-plugins 被标成 Python 其实全是配置；今天 graphify 的 `/graphify` 是给 Claude Code / Cursor / Codex / Gemini CLI 的技能（主产物是 Markdown 与 JSON），ComfyUI 是推理引擎。此外 ai-memory 标 Rust、freehire 标 Go，两者都是 CLI/Agent 侧工具。**本期没有任何一席是"因为它用某语言才上榜"**——继续做语言分布统计时，应该把它当作"生态健康度"而非"技术选型"来读。
