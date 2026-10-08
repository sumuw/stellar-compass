---
title: GitHub 每日趋势榜 2026-09-19
description: 2026-09-19 GitHub Trending 榜首为 cloudflare/security-audit-skill，当日共收录 15 个项目。
date: '2026-09-19T08:00:00+08:00'
rankingKey: '2026-09-19'
slug: github-daily-2026-09-19
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

2026-09-19 GitHub Trending 共收录 15 个项目，榜首 cloudflare/security-audit-skill（3,162 stars today）。语言分布：TypeScript 3、Python 3、JavaScript 2、Go 2、Rust 2、HTML 1。

## 重点项目

### 1. cloudflare/security-audit-skill

- 地址：https://github.com/cloudflare/security-audit-skill
- 简介：A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings
- 语言：JavaScript
- 今日新增：3,162 stars today
- 标签：安全审计 Skill、Cloudflare 官方、六阶段流水线、独立证伪、四日在榜

**昨天留的判据是"明日若再跌则脉冲定性完成，若反弹回 3,500+ 则属高位震荡"。今天它两个条件都没满足：3,019 → 3,162，+4.7%，卡在中间。** 按本系列规则，这条判据只能继续挂起，明天是第三个观察点。
但它今天制造了另一项纪录：**单日增量占全榜 44.9%，超过 09-12 gods-eye-view 的 39.6%，是本系列最极端的一次头部虹吸。** 换句话说，今天这个榜单基本就是"这一个项目 + 十四个陪跑"。
更值得注意的是它自身的水位还在涨：Star 12,565 → **15,540**（跨过 1.5 万），Fork 678 → **849（+25.2%）**。**Fork 增速连续第二日超过 Star 增速**（今日 Star 增量方向 +4.7%，Fork +25.2%），这是"有人开始真的接入流程"而不是"只看不碰"的信号——比增量数字本身更健康。
流程设计（前三日已详述，此处只留骨架）：侦察产出 `architecture.md` + `coverage-ledger.json` → 覆盖率驱动的猎杀（按账本单元分派隔离 hunter + coverage critic 找缺口）→ 候选交给**全新 verifier** 尝试证伪 → 结构化输出（`confirmed` / `needs_validation` / `rejected`，按 `report-schema.json` 校验）→ 独立记录复核 → 目标中立报告。攻击面拆成 10 个独立文件，其中 `AI-AND-LLM.md` 直接覆盖提示注入与 Agent 工具链。
⚠️ **只对自有或已获书面授权的代码库运行。**

### 2. addyosmani/agent-skills

- 地址：https://github.com/addyosmani/agent-skills
- 简介：Production-grade engineering skills for AI coding agents.
- 语言：JavaScript
- 今日新增：547 stars today
- 标签：工程技能集、AI 编码 Agent、生产级、Chrome 团队、五日在榜

677 → 547（**-19.2%**），**连续三日锁在 656~680 的那条"最稳基线"今天被打破了。** 它在速览表里排 #2，但这是排名错觉——不是它涨了，是昨天排在它前面的 open-code-review(+2,724)、BrowserSkill(+1,319)、ECC(+965) 今天全部掉榜。
9.7 万 Star、10.6% Fork 率，Chrome 团队 Addy Osmani 出品，定位是给 AI 编码 Agent 用的生产级工程技能集（测试金字塔、代码审查、性能、安全加固一整套工程纪律）。当日涨幅 **+0.57%**，属大盘稳态水位。

### 3. anthropics/claude-code

- 地址：https://github.com/anthropics/claude-code
- 简介：Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows — all through natural language commands.
- 语言：TypeScript
- 今日新增：482 stars today
- 标签：终端编码 Agent、Anthropic 官方、14.6 万 Star、稳态流量、Fork 率全榜最高

442 → 482（**+9.0%，留存 6 席里涨幅第一**）。但必须说清楚：当日涨幅只有 **+0.33%**，14.6 万 Star 体量下的日常波动，这 +9.0% 没有产品含义，只是说明大盘水位今天基本没塌。
它的作用是刻度尺：**今天 12 个万星以上项目的当日涨幅全部 ≤3.11%**，其中 quiche 0.04%、everyone-can-use-english 0.08%、docling 0.14%、weekly 0.15% 四个都在 0.2% 以下。**结论：今天没有普涨，头部那 3,162 是 security-audit-skill 自己的事。**
Fork 率 16.3% 全榜最高——对一个官方 CLI 工具来说偏高，通常对应大量二次集成与内部改造。

### 4. Open-Dev-Society/OpenStock

- 地址：https://github.com/Open-Dev-Society/OpenStock
- 简介：OpenStock is an open-source alternative to expensive market platforms. Track real-time prices, set personalized alerts, and explore detailed company insights — built openly, for everyone, forever free.
- 语言：TypeScript
- 今日新增：477 stars today
- 标签：开源股票平台、实时行情与告警、Next.js 全栈、⚠️ AGPL-3.0、⚠️ 跨仓导流

**今日新上榜第一（+477），定位是"昂贵的行情平台的开源替代品"**——实时价格追踪、个性化告警、公司基本面洞察。技术栈是标准的现代全栈组合：Next.js + TypeScript + Tailwind + shadcn/ui + Radix UI 做前端，Better Auth 做认证，MongoDB 存数据，Inngest 跑后台任务，Nodemailer 发邮件。
⚠️ **两个必须在读之前打折的信号**：
① **README 最顶部是一段同组织跨仓导流**——"New from Open Dev Society: **kitbash**. Before you build, find out which parts already exist on GitHub."。**这与 09-14 的 ever-gauzy 是完全同一个形态**（那个项目当天从 +58 跳到 +1,095 创下本系列最大单日跳升，次日即 -42.3%）。**涨幅应读作组织内流量互导，不可读作产品采纳度上升。**
② **AGPL-3.0 许可**，README 里写得很硬：修改、再分发或**以 Web 服务形式部署**，都必须以同一许可开放源码并署名原作者。这与榜单上多数 MIT/Apache-2.0 项目是两种完全不同的使用前提。

### 5. asciimoo/hister

- 地址：https://github.com/asciimoo/hister
- 简介：Your own search engine
- 语言：Go
- 今日新增：430 stars today
- 标签：个人搜索引擎、全文索引、本地优先、MCP 接口、二日在榜

842 → 430（**-48.9%，全榜跌幅第一**）。**这是本系列"单日尖峰多为一次性脉冲"的第 11 次印证**（计数沿用 09-18 的"第十次"；昨日它刚作为新上榜第一 +842，今日掉一半）。但要注意它没有掉榜，且绝对量 430 依然排在第 5，属于"脉冲退潮但退到一个还不错的平台"，不是归零。
产品本身：私人的全文搜索引擎，索引**你访问过的网页内容和你保留的文件内容**，然后从网页界面、终端或接了 MCP 的 AI 助手里搜回来。与"浏览器历史搜索"的区别是**索引全文而非标题 URL**，支持字段过滤、词组、通配、取反、别名和结果优先级。默认零遥测、不同步云端。客户端有 Web UI / TUI / CLI / MCP 四种。
**Fork/Star 4.1% 全榜最低**——配合仍在高位的 +430，说明今天看的人多、动手改的人极少，是典型的"围观型热度"。
⚠️ 索引内容明文存在服务器上，多人共享一台实例要先想清楚隔离边界。

### 6. coder/coder

- 地址：https://github.com/coder/coder
- 简介：Secure environments for developers and their agents
- 语言：Go
- 今日新增：406 stars today
- 标签：自托管开发环境、Terraform 定义、Agent 沙箱、密钥不下发、三日在榜

478 → 406（**-15.1%**）。**昨日报告明确写了"coder 与 Octop 明日大概率回落，若两者都继续涨才是真信号"——今天 coder 回落、Octop 直接掉榜，判据成立。**
回落之后它的绝对量（406）依然能排到 #6，三日曲线 09-17 +204 → 09-18 +478 → 09-19 +406，读作"跳升一次后稳在新平台"，比昨天那个 +134.3% 更可信。
README 标题今日复核为 `Self-Hosted Cloud Development Environments and AI Agents`（与前两日的"Development Environments and AI Agents"相比又收紧了一层"自托管"）。工作区用 Terraform 定义（EC2 / K8s Pod / Docker 容器），WireGuard® 隧道接入，空闲自动关停。
Agent 部分是它今天值得看的原因：**Coder Agents 的循环跑在你自己的控制平面里，工作区不放任何 API key**——"Bring any model + No LLM credentials in workspaces, user identity on every action + 集中式的模型治理、成本追踪、审计日志"。
⚠️ **今天的语境下要特别点出**：昨天与它同台构成"Agent 边界三种层级答案"的 BrowserSkill（触达层）和 Octop（行为层）**今天双双掉榜，只剩它一根独苗**（详见 3.5）。

### 7. trycua/cua

- 地址：https://github.com/trycua/cua
- 简介：Scale computer-use 2.0 with open-source drivers, cross-OS fleets, and benchmarks for training, evaluation, and data generation.
- 语言：HTML
- 今日新增：383 stars today
- 标签：Computer-Use 2.0、云桌面 Fleet、本地 macOS VM、评测基准、四件套

2.4 万 Star 的项目今天首次进入本系列榜单。定位一句话："**Give AI agents computers they can use.**" 它不提供 Agent，也不提供模型，**只提供"电脑"这一层**——开源桌面自动化驱动、隔离的云桌面、本地 macOS 虚拟机，以及评测 computer-use Agent 的基准。
四条产品线各管一段：**Cua Fleets**（在 run.cua.ai 供给隔离云桌面，从池子里领一台、跑命令、存截图）、**Cua Driver**（在 macOS / Windows / Linux 上检查和操作应用）、**Lume**（Apple Silicon 上的本地 macOS / Linux 虚拟机）、**Cua Bench**（造任务、评 Agent、导出轨迹）。
它提出的 **Computer-Use 2.0** 指的是 Agent 在同一次任务里**在代码、API 和图形界面之间来回切换**，而不是只会点屏幕。README 里的演示是：两个 Cua Driver 会话同时在 LibreOffice Calc 里选单元格、在 Inkscape 里选对象，而终端始终留在前台。
⚠️ 让 Agent 获得完整桌面控制权限，等于把图形界面的所有可达能力都交出去了——**必须在隔离环境（云 Fleet 或本地 VM）里运行，不要指向装着真实凭据的日常机器**；Fleets 走 run.cua.ai 云服务，需自行评估数据出域。

### 8. higgsfield-ai/higgsfield

- 地址：https://github.com/higgsfield-ai/higgsfield
- 简介：Fault-tolerant, highly scalable GPU orchestration, and a machine learning framework designed for training models with billions to trillions of parameters
- 语言：Jupyter Notebook
- 今日新增：325 stars today
- 标签：GPU 编排、大模型训练框架、ZeRO-3、GitHub Actions 驱动、⚠️ 需 sudo 免密

新上榜，4,793 Star，**当日涨幅 +7.27% 是全榜第二高**（仅次于榜首的 25.6%），也是今天唯一一个"规模小但热度集中"的项目。
它做的事：既是 GPU 工作负载管理器，也是训练框架，五项职能——给用户分配独占/非独占算力、支持 ZeRO-3 DeepSpeed 与 PyTorch FSDP（可分片到万亿参数）、启动执行监控大网络训练、用队列管理资源争用、通过 GitHub 与 GitHub Actions 做 ML 持续集成。
⚠️ **两个部署前提必须看清**：节点需 Ubuntu + SSH + **免密码 sudo 的非 root 用户**；官方只在 Azure / LambdaLabs / FluidStack 上测过。另外 **Fork/Star 18.5% 全榜最高**——配合 pip 包 `higgsfield==0.0.3` 这个很早的版本号，判断它经历过 fork 型扩散，热度形态需打个折。

### 9. anthropics/knowledge-work-plugins

- 地址：https://github.com/anthropics/knowledge-work-plugins
- 简介：Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork
- 语言：Python
- 今日新增：280 stars today
- 标签：Claude 插件、知识工作者、11 个职能包、企业连接器、四日在榜

300 → 280（**-6.7%**）。四日曲线 96 → 287 → 300 → **280**，在昨日的 +4.5% 之后掉头，但幅度很小，属高位横盘而非退潮。
它是"**Agent 能力按职能分发**"这条线目前最完整的官方实现：开源了 11 个按**岗位**而不是按**技术能力**切的插件——productivity / sales / customer-support / product-management / marketing / legal / finance / data / enterprise-search / bio-research / cowork-plugin-management。每个插件打包四件套：skills（领域知识）、connectors（数据源）、slash commands（显式调用）、sub-agents。
连接器覆盖很实：sales 接 HubSpot / Clay / ZoomInfo；finance 接 Snowflake / Databricks / BigQuery；legal 接 Box / Egnyte；bio-research 接 PubMed / bioRxiv / ChEMBL / Benchling。安装走 `claude plugin marketplace add anthropics/knowledge-work-plugins` 再 `claude plugin install sales@knowledge-work-plugins`。

### 10. cactus-compute/needle

- 地址：https://github.com/cactus-compute/needle
- 简介：Automation foundation model for tiny devices: 2-bit, 8-29 MB, tool calls, structured extraction and embeddings on phones, wearables, smart homes, robots, cars and microcontrollers.
- 语言：Python
- 今日新增：207 stars today
- 标签：端侧基础模型、8-29 MB、工具调用、结构化抽取、校准置信度

新上榜，11,484 Star。它的取舍说得很直白：**整个模型是一个 8~29 MB 的二进制，主动放弃通用聊天能力，换取在移动端工具调用上打赢比它大 10 倍的模型，在抽取上打平大 2~3 倍的。**
只做三件事：① **工具调用**——给它你应用暴露的函数，它挑对的、把参数从用户的话里填满；要两件就按顺序给你两次调用，遇到没有工具覆盖的请求返回**空列表而不是瞎猜**；② **结构化抽取**——声明一个形状、丢进乱文本、拿回带类型的字段（发票、预订、通知、表单），解码语法保证输出可解析；③ **文本嵌入**——同一模型返回句向量，应用可以在本地搜索、匹配、路由。
架构叫 Laddered Simple Attention Network（Needle 3）：Monarch Hadamard MLP 替代 FFN、带因果卷积抽头的 GQA 注意力、gather 读取的 engram n-gram 记忆、多通道超连接，**训练时保证从 2 层到 20 层的每个深度都是一个可部署模型**——大部分参数压在 engram 里，所以 121M 的模型只做 50M 的算术。每次响应都带一个**学习出来的校准置信度分数**，README 单列一篇讲怎么按"执行 / 确认 / 拒绝"来路由这个分数。
用法极简：`pip install cactus-needle`，一个 `@needle.tool` 装饰器，函数签名给参数类型、docstring 当工具描述。

### 11. ruanyf/weekly

- 地址：https://github.com/ruanyf/weekly
- 简介：科技爱好者周刊，每周五发布
- 语言：—
- 今日新增：151 stars today
- 标签：科技周刊、每周五发布、中文、10 万 Star、非 AI

阮一峰的科技爱好者周刊，每周五发布，10.3 万 Star。今日 +151，当日涨幅 **+0.15%**，标准稳态流量，与产品动态无关。
今天它的意义在于**分母**：本系列反复强调"单日占比变化主要反映分母结构，不可读作赛道强弱"，而它就是那个分母的构成部分。**今天 9 个新上榜里 4 个是非 Agent 项目**（它、everyone-can-use-english、quiche、OpenStock），这是 Agent 严格口径从昨日 85.7% 回落到 75.6% 的直接原因。

### 12. docling-project/docling

- 地址：https://github.com/docling-project/docling
- 简介：Get your documents ready for gen AI
- 语言：Python
- 今日新增：94 stars today
- 标签：文档解析、PDF 深度理解、多格式导出、MCP 服务、LF AI & Data

6.7 万 Star，MIT 许可，现属 LF AI & Data 基金会项目。今日 +94，**当日涨幅 +0.14% 是全榜倒数第三**——老项目稳态上榜，不是新热点。
能力面很宽：解析 PDF / DOCX / PPTX / XLSX / HTML / EPUB / Apple Pages / WAV / MP3 / WebVTT / Box Notes / 邮件（EML、MSG）/ 图片 / LaTeX 等；PDF 侧做页面布局、阅读顺序、表格结构、代码、公式、图片分类；统一成 `DoclingDocument` 表示，可导出 Markdown / HTML / DocTags / 无损 JSON，还支持 USPTO 专利、JATS 论文、XBRL 财报等专用 XML schema。近期新增**视频解析**（MP4/AVI/MOV/MKV/WebM，出 ASR 转写 + 代表帧）、ODF 与 XBRL。
对 Agent 场景最关键的两点：① **有官方 MCP server**，任何 Agent 都能直接接；② 支持**本地执行与气隙环境**，敏感数据不必出网。生态集成已覆盖 LangChain / LlamaIndex / CrewAI / Haystack。

### 13. yynxxxxx/Codex-X

- 地址：https://github.com/yynxxxxx/Codex-X
- 简介：OpenAI Codex 桌面端/CLI 的可视化管理工具，具有 Provider/API 切换、会话同步、提示词注入、Skills/MCP 管理、TOML 配置可视化的跨平台工具。
- 语言：Rust
- 今日新增：64 stars today
- 标签：Codex 可视化管理、Provider 切换、提示词模板、Tauri 2、⚠️ 改配置文件

新上榜，3,346 Star，MIT 许可，Tauri 2 + React 18 + TypeScript + Rust + SQLite 的跨平台桌面工具（Windows / macOS / Linux）。
它解决的是一个很具体的痛点：**当你同时用 Codex 桌面端、CLI、第三方 API、Skills/MCP 和多套提示词时，配置散落在不同文件里。** 它把这些集中到一个界面：提示词像插件一样分类管理（内置 5 套模板、可导入 Markdown、一键启停，还支持"保留原提示词追加"或"替换原提示词"两种注入方式）、多 Provider 命名管理与一键切换（含连接检测、模型拉取测试、从 cc-switch 导入）、本地会话的同步/检查/搜索/按项目路径分组、Skills 与 MCP 可视化启停（可从 ZIP 安装 Skill）、`config.toml` 与 `auth.json` 集中查看、以及按日期与模型看的 Token 用量趋势（子代理用量归入主会话）。
⚠️ **两点要标**：① 它直接读写 `config.toml` 与 `auth.json`（**即登录凭据所在文件**），重要写入前会自动备份，但用之前应先确认备份机制生效；② README 的功能表里**提示词分类明确列出"破甲 / 逆向"一类**，这类提示词模板涉及绕过模型护栏的用途，采用前请先想清楚合规边界。
另外它支持在设置里勾选"开启 1M 上下文窗口"（需模型支持）。

### 14. ZuodaoTech/everyone-can-use-english

- 地址：https://github.com/ZuodaoTech/everyone-can-use-english
- 简介：人人都能用英语
- 语言：TypeScript
- 今日新增：31 stars today
- 标签：AI 英语学习、Enjoy App、影音跟读、中文开源书、非 Agent

新上榜，3.8 万 Star。今日 +31，**当日涨幅 +0.08% 是全榜最低**——纯稳态流量，上榜本身不代表今天有任何新增采纳。
项目本体是李笑来《人人都能用英语》的开源书 + 配套的新版 **Enjoy App**；README 的自我定位一句话讲得很清楚："**AI 是当今世界上最好的外语老师，Enjoy 做 AI 最好的助教。**" 形态有三个：网页版（enjoy.bot 直接用）、浏览器插件（支持 YouTube 与 Netflix，可在 Chrome 商店装）、桌面版（预告中）。
今天它的角色和 ruanyf/weekly 一样是**分母**：一个面向 C 端、与 Agent 工程完全无关的成熟中文项目，正常流动。

### 15. cloudflare/quiche

- 地址：https://github.com/cloudflare/quiche
- 简介：🥧 Savoury implementation of the QUIC transport protocol and HTTP/3
- 语言：Rust
- 今日新增：5 stars today
- 标签：QUIC 与 HTTP/3、Rust 实现、Cloudflare 官方、老牌基建、末位门槛

**今日末位，+5。** Cloudflare 的 QUIC 传输协议与 HTTP/3 Rust 实现，1.19 万 Star 的老牌网络基建，与 AI 无关。
⚠️ **数据可信度先说清楚**：按本系列 6p 的流程做了三次间隔抓取（23:45、23:48、23:52），**增量三次一字未变（始终是 +5），而 Star 总数在缓慢增长**（11,917 → 11,918）。所以这不是"刚进榜、计数器未填满"的伪值，而是**真实的极低日增量**——只是今天榜单的尾部门槛塌到几乎归零，才让它挤了进来。
**+5 是本系列历史第二低的末位门槛，仅高于 09-02 的 +3**（第三低是 09-05 的 +17）。这个数字本身就是今天最重要的结构性信号之一：详见 3.1。

## 观察

- cloudflare/security-audit-skill 今日 3,162 stars today，居当日增量第 1 位。
- addyosmani/agent-skills 今日 547 stars today，居当日增量第 2 位。
- anthropics/claude-code 今日 482 stars today，居当日增量第 3 位。
