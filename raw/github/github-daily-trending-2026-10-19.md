# GitHub 每日趋势榜 2026-10-19

> 数据归属日：2026-10-19（Asia/Shanghai）。抓取时点为 2026-10-20 凌晨，GitHub Trending 的 daily 为滑动 24 小时窗口，其中约八成 star 增量落在 10-19（美国东部时间）。

## 今日概览

今日榜单共 **12 个项目**（已回查 Trending 页面 `Box-row` 计数同为 12，非解析丢失），较昨日少 1 席，但内部换掉了 4 席。

- **语言分布**：Python 6、TypeScript 4、Rust 1、JavaScript 1。Python 连续第二日占 6 席的绝对多数，Kotlin 与"未标注"各消失一席。
- **本期主线：从「Agent 装什么」回摆到「Agent 烧多少」。** 昨日同台的三家官方插件/技能目录（claude-plugins-official、cursor/plugins、android/skills）**今日集体掉榜**，顶上来的是一条新线——**省上下文、省 token**：新上榜的 headroom（上下文压缩层，76k 星）直接把"同一个 Agent 任务少花一半 token"做成产品，ai-memory 则从昨日第 6 升到第 3。插件货架的战争打完了，账单开始到付。
- **增量冠军三连：ai-job-search（+3,860）**。昨日 +2,213 → 今日 +3,860，连续第三日在榜且日增再放大 74%，52.7k → 56.8k 星。一个求职框架能连续三日加速而不衰减，说明它承接的是长期没有工具覆盖的完整流程，而不是一个新鲜点子。今日 v1.7.3 发布。
- **老仓库靠版本放量**：ComfyUI 今日同日连发 v0.42.0（10-19 06:10 CST）与 v0.42.1（09:33 CST）两个版本，日增由 +155 跳到 **+1,011（6.5 倍）**，排名从第 13 直接升到第 4；orca 发 v1.4.230、ruflo 发 v3.57.1，日增同步抬升。今天的榜单**几乎每一席背后都有一个 10-19 的发布动作**。
- **4 个新面孔里 3 个不是工具**：headroom（压缩层，属工具）、os-taxonomy（Marble 的 K-12 课程知识图谱，1,591 微主题 / 3,225 条前置依赖）、Kronos（金融 K 线基础模型，已 6 个月未推送）、claude-code（本体仓库，v2.1.303 发布）。**其中 os-taxonomy 与 Kronos 卖的都是"资产"而非"软件"** —— 一个是结构化知识图谱，一个是预训练权重。
- **唯一的"非 AI"项目仍在视频侧**：jasna（视频马赛克修复）连续第二日在榜，日增由 +115 放大到 **+502（4.4 倍）**，排名从第 12 升到第 9，是今天放量比例最高的项目之一。

---

## 重点项目

### 1. MadsLorentzen/ai-job-search

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/MadsLorentzen/ai-job-search |
| 简介 | The job search that runs on your machine. AI job application framework built on Claude Code: evaluate postings, tailor CVs, write cover letters, prep interviews. Fork it and own it. |
| 语言 | Python |
| 总 Star | 56,848 |
| 今日新增 | 3,860 stars today |
| 标签 | Claude Code、求职自动化、Agent 工作流、LaTeX、本地优先 |

把 Claude Code 变成跑在本机的求职代理：`/scrape` 搜岗、`/rank` 批量打分、`/apply` 定制简历与求职信并自动编译 LaTeX 校验页数与 ATS 文本层、`/interview` 备面、`/outcome` 归档跟进。作者本人是地球物理学家，用这套流程投了 69 份定制申请拿到 20 场初面并转行 AI 工程师。**连续第三日在榜且日增三级跳：+1,397 → +2,213 → +3,860**，今日同步发布 v1.7.3。一个求职框架在没有持续营销的情况下日增还能再放大 74%，原因是它承接的是"简历—求职信—面试准备"这条长期没有任何工具覆盖的完整链路；技术上最有意思的仍是 drafter-reviewer 双 Agent 互批，以及"绝不伪造经历"被写进流程硬约束。

### 2. anomalyco/opencode

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/anomalyco/opencode |
| 简介 | The open source coding agent. |
| 语言 | TypeScript |
| 总 Star | 217,669 |
| 今日新增 | 1,310 stars today |
| 标签 | AI 编程、Agent、TypeScript、开源、开发者工具 |

开源编码 Agent 本体，21.8 万星，继续稳在第 2（昨日第 3，+1,417）。它本身近期只有 v1.19.3（10-16）一个例行版本，今天的上榜动力来自生态连带：ruflo、Orca、headroom、CLI-Anything 的兼容名单里它都是一等公民，而今日 12 席中有 5 个是 harness / 编排 / 压缩层——**Agent 运行时层越热闹，作为"被支持方"的本体就越容易被顺手 star**。这也解释了为什么 21 万星的老仓库还能持续有千级日增。

### 3. akitaonrails/ai-memory

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/akitaonrails/ai-memory |
| 简介 | Solution for long term memory for agent coding CLIs and to facilitate handoff between different agent vendors |
| 语言 | Rust |
| 总 Star | 11,244 |
| 今日新增 | 666 stars today |
| 标签 | Agent 记忆、Rust、跨厂商交接、本地优先、MCP |

给 AI 编码 CLI 做长期记忆，并让不同厂商的 Agent 之间能无缝交接上下文——README 的一号场景就是"Claude Code 跑到一半中断，换 OpenAI Codex 在同一目录继续，不用重新解释架构、失败的尝试和未决问题"。实现上走 capture → consolidate → recall → handoff 四段：hooks 静默捕获并脱敏，session-end 把会话编译成人类可读、可 git 版本化的 `wiki/` markdown，检索融合 FTS5 + 实体 + 图 + 本地向量，全程默认零 LLM、不需要 API key。**日增连续三日放大：+208 → +513 → +666**，发布 v3.1.1 后两个工作日内从 1.04 万涨到 1.12 万星。今日榜单里它与 headroom 一前一后，指向同一件事：上下文不再是免费的，省上下文正在成为一层独立产品。

### 4. Comfy-Org/ComfyUI

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Comfy-Org/ComfyUI |
| 简介 | The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. The fastest local inference engine in the world. |
| 语言 | Python |
| 总 Star | 139,584 |
| 今日新增 | 1,011 stars today |
| 标签 | 扩散模型、图像生成、节点式工作流、Python、本地推理 |

节点式扩散模型 GUI 与后端，把文生图/图生图的每一步拆成可拼接的节点，既给图形界面也给 API，是本地推理生态的事实基础设施。**今日是版本驱动上榜而非生态连带**：10-19 同日连发 v0.42.0（06:10 CST）与 v0.42.1（09:33 CST），日增由昨日的 +155 放大到 +1,011（6.5 倍），排名从第 13 直接跃到第 4。13.9 万星的量级上一次出现千级日增已是数月前——在 AI 视频/图像生成这一层，ComfyUI 仍是唯一同时被"模型侧迭代"和"应用层创新"（今日同榜的 jasna 就走本地 GPU 修复路线）双向拉动的老底座。

### 5. ruvnet/ruflo

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/ruvnet/ruflo |
| 简介 | 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated |
| 语言 | TypeScript |
| 总 Star | 77,106 |
| 今日新增 | 564 stars today |
| 标签 | Agent、多智能体编排、TypeScript、RAG、开发者工具 |

老牌多智能体 harness，主打 swarm 编排与自适应记忆，内置向量 RAG 与 federation，并原生对接 Claude Code / Codex / Hermes。连续第四日在榜，日增稳定在 500–570 区间，今日同步发 v3.57.1。今天榜单上它是"多 Agent 自治协作"路线的代表，与第 6 的 Orca（并行 worktree + 人工挑胜出）形成对照；而与第 3 的 ai-memory 相比，它把记忆当作 swarm 的内部能力，ai-memory 则把记忆做成跨厂商的可迁移资产——**同一个"记忆"概念正在分化成内部状态和外部资产两条产品路线**。

### 6. stablyai/orca

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/stablyai/orca |
| 简介 | Orca is the place for working with a fleet of agents (e.g. Grok Bot, Claude Code). Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime. |
| 语言 | TypeScript |
| 总 Star | 98,102 |
| 今日新增 | 1,591 stars today |
| 标签 | Agent 编排、多智能体、TypeScript、开发者工具、worktree |

多编码 Agent 的编排工作台：一个 prompt fan-out 给多个 Agent，各自跑在**独立的 git worktree** 里并行开工，最后在同一个界面比对并合并胜出方案。自带订阅（BYOK），不卖模型能力，只做调度与并行——支持 30+ 种 CLI agent。桌面 + 移动伴侣 + SSH 远程运行时三形态，Design Mode 可直接点选 Chromium 窗口里的 UI 元素送进 prompt。**今日发 v1.4.230，日增由 +1,146 升到 +1,591，逼近 10 万星**（98,102），增量仅次于榜首。它的持续放量说明"一个人同时指挥多个 Agent"已经从极客玩法变成可购买的工作方式。

### 7. headroomlabs-ai/headroom

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/headroomlabs-ai/headroom |
| 简介 | Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20% fewer tokens for coding agents, 60-95% fewer tokens for JSON, same answers. Library, proxy, MCP server. |
| 语言 | Python |
| 总 Star | 76,178 |
| 今日新增 | 317 stars today |
| 标签 | 上下文压缩、Token 成本、Agent 基础设施、MCP、Python |

**今日最重要的新面孔。** 定位是 Agent 的"上下文压缩层"：在 tool 输出、日志、文件、RAG 片段进入 LLM 之前先压一遍，压缩全程跑在本机，prompt 与文件内容不外发。流水线为 CacheAligner → ContentRouter → CCR 三段，按内容类型分派压缩器（JSON 走 SmartCrusher、代码走 CodeCompressor 走 AST、散文走自研 kompress-v2-base 模型），CCR 在本地留存原文供模型用 `headroom_retrieve` 回取完整文本。它给的四组实测是今天最值得记的数字：**代码搜索 17,199 → 13,597（省 21%）、SRE 故障排查 55,957 → 24,340（省 57%）、代码库探索 58,801 → 33,895（省 42%）、GitHub issue 分诊 46,067 → 32,429（省 30%）**；延迟 0.21ms p50（10K token JSON），并在 GSM8K / TruthfulQA / SQuAD v2 / BFCL 上给出同精度结论。三种接入方式（Python 库 / `headroom wrap claude` 包装 Agent / 零改动的 drop-in proxy）覆盖了从"改代码"到"改配置"的全光谱。仓库 2026-01 创建、9 个月做到 7.6 万星，今日带 Trendshift "#1 Repository of the Day" 徽章上榜——**它的出现本身就是信号：当 Agent 进入日常使用，第一份到付的账单是 token。**

### 8. withmarbleapp/os-taxonomy

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/withmarbleapp/os-taxonomy |
| 简介 | Unknown（Trending 页面 description 抓取为 Unknown，此处依据仓库 README 补全） |
| 语言 | JavaScript |
| 总 Star | 6,063 |
| 今日新增 | 301 stars today |
| 标签 | 知识图谱、教育科技、开放数据集、课程体系、DAG |

教育科技公司 Marble（withmarble.com）开源的 **K-12 学习知识图谱 v1**。它不是软件，是一份结构化数据资产：**1,591 个微主题**（每个含通俗描述、掌握证据 criteria、概念/程序/表征/语言/元认知五类之一、学科+领域、适龄区间）、**3,225 条前置依赖关系**（有向无环图，每条边标注 hard/soft 并附一句理由）、对齐到 NGSS / Common Core / 英国国家课程等原始课标，另有 1,051 条覆盖数理学科的教学研究记录（其余 540 个主题本次无研究，README 明确声明"缺失不等于否定"）。学科分布：科学 547、数学 504、英语 286、历史 90、个人与社会发展 88、生活技能 37、计算 21、学会学习 18。数据全部为 `data/` 下的 UTF-8 JSON，附 JSON Schema 与 SHA-256 校验清单，可视化为可交互的 3D 图谱。仓库 2026-07 创建、今日仍有推送，6.0k 星 +301。**在一份几乎全是 Agent 工具的榜单里，它是唯一的"开放知识资产"席位** —— 也是 AI 教育产品开始把课程内容层开源、只在上层做应用的明确信号。

### 9. Kruk2/jasna

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Kruk2/jasna |
| 简介 | Video restoration tool |
| 语言 | Python |
| 总 Star | 2,851 |
| 今日新增 | 502 stars today |
| 标签 | 视频修复、超分辨率、本地 GPU、计算机视觉、Python |

做的是**视频与图像中马赛克区域的定点修复**：自动定位画面里的马赛克块，只重建被遮挡的部分、不动其余画面，可在 Segment Editor 里手动圈选并预览，也能在 Video Player 里实时播放修复结果而不落盘。两条模型路线——BasicVSR++ 免费且快，LTX 更慢但细节更好（仅 NVIDIA、面向支持者）；另有 VR180 视频与 SD 1.5 静态图支持。全部在本地 GPU 运行，有桌面应用与命令行两种入口。**连续第二日在榜，日增由 +115 放大到 +502（4.4 倍），排名从第 12 升到第 9**，v0.11.2 于 10-17 发布后开始发酵。2.9k 星的体量不大，但它是今日唯一既非 Agent 也非 LLM 的项目，且把过去只在 research repo 里出现的视频超分能力做成了开箱应用。

### 10. HKUDS/CLI-Anything

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/HKUDS/CLI-Anything |
| 简介 | "CLI-Anything: Making ALL Software Agent-Native" -- CLI-Hub: https://clianything.cc/ |
| 语言 | Python |
| 总 Star | 55,164 |
| 今日新增 | 607 stars today |
| 标签 | CLI、Agent、Python、自动化、大模型工具链 |

港大 Data Intelligence Lab 的系列工作之一，主张给任意软件生成一层 CLI 外壳，让没有 API 的桌面/图形软件也能被 Agent 直接驱动。`/cli-anything <repo>` 走 7 阶段流水线产出 Click CLI（含 REPL、`--json` 输出、undo/redo），硬性要求调用真实软件后端而非降级替代；配套 CLI-Hub 做注册表与包管理。已覆盖 18 个主要应用、2,460+ 项测试全通过。**连续第四日在榜，日增稳定在 580–610**（+582 → +607），是近期榜单里位置最稳的项目之一——注意它最近一个正式版本还停在 6 月的 v0.4.0，热度完全来自主线提交与生态口碑而非版本发布。

### 11. anthropics/claude-code

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/anthropics/claude-code |
| 简介 | Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands. |
| 语言 | TypeScript |
| 总 Star | 152,589 |
| 今日新增 | 167 stars today |
| 标签 | AI 编程、Agent、CLI、TypeScript、开发者工具 |

Anthropic 官方的终端编码 Agent 本体仓库，15.3 万星。**时隔多日重回榜单，触发点是 v2.1.303 于 10-19 06:26 CST 发布**（一次性打包 darwin/linux/win32 全平台二进制并附 SHASUMS256）。日增 +167 在 15 万星量级属于日常水位，上榜靠的是发布动作而非热度爆发。值得注意的是 README 已明确把 npm 安装标记为 deprecated、改推安装脚本与 brew/winget——**它正在从"npm 包"收敛为"官方分发的产品"**，与昨天那批插件目录一起，构成 Claude Code 生态从工具向平台迁移的完整图景。

### 12. shiyu-coder/Kronos

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/shiyu-coder/Kronos |
| 简介 | Kronos: A Foundation Model for the Language of Financial Markets |
| 语言 | Python |
| 总 Star | 41,568 |
| 今日新增 | 355 stars today |
| 标签 | 金融大模型、时间序列、K 线、基础模型、量化 |

**首个开源的金融 K 线基础模型**，在 45+ 全球交易所的数据上预训练。架构是两阶段：先用专用 tokenizer 把连续多维 OHLCV 量化成**层级离散 token**，再用大型自回归 Transformer 在这些 token 上预训练，从而成为可服务多种量化任务的统一模型——设计目标明确指向金融数据高噪声、低信噪比的特性，区别于通用时间序列基础模型。论文已被 **AAAI 2026 接收**，并放出微调脚本与在线 Demo。仓库 2025-07 创建，累计 4.2 万星。今日上榜属于**静态仓库被重新挖出**：最近一次推送停在 2026-04-13，已 6 个月无更新，日增 +355 不由维护动作驱动，而是又一轮"金融基础模型"需求回流时把这份最老的开源实现重新顶了上来——与昨日 8 个月未推送仍上榜的 llm-course 是同一类样本。

---

## 观察

**1. 竞争焦点从「货架」切到「账单」。** 昨日同台的三家官方插件/技能目录（claude-plugins-official、cursor/plugins、android/skills）**今日同时掉榜**，这在过去两周是第一次。顶上来的 headroom 直接对着 token 成本：同一个 SRE 排查任务把 55,957 token 压到 24,340，且给出 GSM8K / TruthfulQA / SQuAD v2 / BFCL 四组同精度数据来自证"省了但不掉点"。ai-memory 同日升到第 3（+666），思路一致——不让模型重复读已经读过的东西。**当"装插件"变成日常操作，用户立刻会撞上第二堵墙：上下文太贵。** 这条线大概率是下一周的主战场。

**2. 版本发布几乎解释了今天所有席位。** 12 席里至少 7 席在 10-19 有明确的发布/推送动作：ComfyUI 同日两版（v0.42.0 + v0.42.1）把日增从 +155 拉到 +1,011（6.5 倍）、orca v1.4.230（+1,591）、ai-job-search v1.7.3（+3,860）、ruflo v3.57.1（+564）、claude-code v2.1.303、os-taxonomy 当日推送。反过来看，唯一没有新版本却日增翻 4.4 倍的 jasna（v0.11.2 于 10-17）和 6 个月未更新的 Kronos，说明**今天的榜单里"存量重估"只剩两席，其余都是真实的产品动作驱动**——这与昨日"更像存量重估"的判断正好反转。

**3. 新面孔正在从"工具"变成"资产"。** 今日 4 个新面孔中，os-taxonomy（1,591 微主题 + 3,225 前置边的课程知识图谱）和 Kronos（K 线基础模型权重）**卖的都是数据/权重资产而非软件**：前者明确声明 540 个主题"无研究记录，缺失不等于否定"，后者 6 个月未推送仍被挖出。共同点是**开源的是底层资产层，商业化留在上层应用**（Marble 卖的是基于这套图谱的产品）。这与 10-18 记录的"能力层可移植性高于平台忠诚度"是同一趋势的另一面：值钱的东西从代码移到了数据。

**4. 榜单正在向"Agent 基础设施"单调收敛，且出现内部分层。** 12 席里 9 席直接服务 Agent（harness、编排、记忆、压缩、CLI 化、本体），只剩 ComfyUI、jasna、Kronos 三个"传统"项目。内部分层已经清楚：最上层是 orca / ruflo（编排与并行），中间是 headroom / ai-memory（成本与状态），最下是 CLI-Anything（把没有 API 的软件接进来）。**每层都有独立产品且互相兼容（opencode 在所有兼容名单里都是一等公民）** —— 这是生态成熟而非泡沫的特征。

**5. 「本地优先」彻底变成入场券而非卖点。** ai-job-search（简历不出本机）、ai-memory（默认零 LLM、无需 API key）、headroom（"compression runs on your machine; no prompt or file content is sent anywhere"，并自带 CCR 本地原文留存）、VoiceStudio 的同类叙事、jasna（本地 GPU）、ComfyUI（本地推理）——今日 12 席里 6 席把"数据/算力留在本地"写进核心叙事。上周这还是差异化卖点，现在已经是这一层项目的默认配置，不写的反而是少数。

**6. Rust 仍在 1 席但持续走强，Python 的 6 席里没有一个是"胶水"。** ai-memory 连续三日放量（+208 → +513 → +666）并稳住 Rust 唯一席位，验证"常驻 + 并发 + 处理凭据"的项目继续向 Rust 集中。而 Python 的 6 席分别做求职自动化、扩散模型推理、上下文压缩、视频修复、CLI 生成、金融基础模型——**全部是重计算或重领域逻辑，没有一个是脚本层**。榜单的语言结构正在从"用什么写"变成"算什么"。
