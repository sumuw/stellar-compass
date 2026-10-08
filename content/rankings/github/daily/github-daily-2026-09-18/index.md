---
title: GitHub 每日趋势榜 2026-09-18
description: 2026-09-18 GitHub Trending 榜首为 cloudflare/security-audit-skill，当日共收录 17 个项目。
date: '2026-09-18T08:00:00+08:00'
rankingKey: '2026-09-18'
slug: github-daily-2026-09-18
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

2026-09-18 GitHub Trending 共收录 17 个项目，榜首 cloudflare/security-audit-skill（3,019 stars today）。语言分布：TypeScript 6、JavaScript 4、Go 3、Python 2、Rust 2。

## 重点项目

### 1. cloudflare/security-audit-skill

- 地址：https://github.com/cloudflare/security-audit-skill
- 简介：A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings
- 语言：JavaScript
- 今日新增：3,019 stars today
- 标签：安全审计 Skill、Cloudflare 官方、六阶段流水线、独立证伪、三日在榜

**昨天明确写了"明天是关键的证伪日"，今天结论到齐：脉冲没有延续。** 完整曲线 09-16 +1,249 → 09-17 +3,606（+188.7%）→ 09-18 +3,019（**-16.3%**）。绝对量依然很大、依然第一、依然破千，但增量方向掉头了——这才是判读重点。
项目本身的水位在继续抬：Star 总数 9,806 → **12,565**，跨过 1.2 万；Fork 521 → 678（+30.1%），**Fork 增速第一次超过 Star 增速（-16.3%）**，说明开始有人把它接进自己的流程而不是只看。这是比增量数字更健康的信号。
流程设计（前两日已详述，此处只留骨架）：侦察产出 `architecture.md` + `coverage-ledger.json` → 覆盖率驱动的猎杀（按账本单元分派隔离 hunter + coverage critic 找缺口）→ 候选交给**全新 verifier** 尝试证伪 → 结构化输出（`confirmed` / `needs_validation` / `rejected`，按 `report-schema.json` 校验）→ 独立记录复核 → 目标中立报告。README 今日复核补充了两点：① 同一仓库多次运行是**累加**的，会复用旧账本和旧 findings 去补缺口；② 攻击面被拆成 10 个独立文件（内存安全与二进制、AI 与 LLM、Web 协议与认证、客户端、供应链与发布、云与部署、RPC 与消息、资源耗尽、数据隔离、桌面移动与本地 IPC），其中 `AI-AND-LLM.md` 直接覆盖提示注入与 Agent 工具链。
⚠️ **只对自有或已获书面授权的代码库运行。**

### 2. alibaba/open-code-review

- 地址：https://github.com/alibaba/open-code-review
- 简介：Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.
- 语言：Go
- 今日新增：2,724 stars today
- 标签：AI 代码评审、确定性+Agent 混合、阿里开源、行级评论、六日在榜

**昨天留下的判据是"判断它的标准应该是第六日是否还在榜，而不是是否守住第一"——今天：在榜，#2，✅ 成立。** 这是本系列第一个连续六个交易日在榜的项目。
但必须同样如实记下另一半：**连涨终结了**，而且是第一次出现绝对量下跌。完整曲线 09-13 +438 → 09-14 +1,796 → 09-15 +2,751 → 09-16 +3,215 → 09-17 +3,290 → 09-18 **+2,724（-17.2%）**。按本系列最可靠的读法（看连续三日斜率而非单日方向）：3,215 → 3,290 → 2,724 已经是**两点下行**，明天若继续跌，"平台期"才能确认；若反弹，则今天只是高位震荡。目前只能说"加速期结束"，不能说"趋势结束"。
产品侧无变化：内置 NPE / 线程安全 / XSS / SQL 注入多语言规则集兜确定性问题，LLM Agent 处理需要跨文件上下文的深度判断；AACR-Bench 为 50 个开源仓库 / 200 个真实 PR / 10 种语言 / 1,505 条人工交叉标注真值，官方口径是同模型下 F1 与 Precision 显著高于通用 Agent、token 消耗约 1/9，代价是 **Recall 偏低**（"宁可少报不可噪报"的刻意取舍）——不可替人工二审。

### 3. Tencent/BrowserSkill

- 地址：https://github.com/Tencent/BrowserSkill
- 简介：Let AI agents use your real, logged-in browser without interrupting your work. CLI + extension for browser automation across any shell-capable AI agent.
- 语言：TypeScript
- 今日新增：1,319 stars today
- 标签：浏览器 Agent、复用真实登录态、CLI+扩展、human-in-loop、腾讯开源

**今日全榜最稳的项目：1,350 → 1,319，只差 31 个（-2.3%）**，在一个整体 -31.1% 的日子里几乎纹丝不动。三日曲线 09-17 +1,350 → 09-18 +1,319，配合当日涨幅 +35.4%（今天新增相当于它总 Star 的三分之一），说明它还在早期扩散阶段，不是退潮。
机制值得再说一次，因为它解决的是浏览器 Agent 最别扭的那个点：不需要为 Agent 单独准备测试账号，**直接复用你已经登录的那个浏览器**；Agent 要碰某个标签页必须**显式借用、用完归还**，其余标签页不碰；碰到验证码、登录、确认弹窗这类只有人能过的步骤，交还给人接管再继续。CLI（`bsk`）+ 浏览器扩展两段式，任何能调 shell 的 Agent 都能用，README 里点名的适配清单已经列到 Cursor / Claude Code / Codex / OpenClaw / CodeBuddy / WorkBuddy / Pi / Hermes Agent / DeepSeek Harness 等九家。
运行环境：macOS（Apple Silicon + Intel）、Linux（x64/ARM64）、Windows x64；浏览器支持 Chrome 与 Edge，Firefox 在计划中。

### 4. affaan-m/ECC

- 地址：https://github.com/affaan-m/ECC
- 简介：The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.
- 语言：JavaScript
- 今日新增：965 stars today
- 标签：Agent Harness、技能与直觉、26 万 Star、⚠️ 仅官方渠道、长尾常客

1,173 → 965（**-17.7%**），回落幅度和榜首两强基本一致。注意它的当日涨幅只有 **+0.37%**——26 万 Star 的体量下，965 个增量本来就是稳态流量，所以这个"跌幅"更多反映昨天偏高，而不是今天出了问题。
⚠️ **README 顶部挂着一条官方安全警告，今日复核仍在**：只能从五个已验证渠道安装——GitHub 仓库 `github.com/affaan-m/ECC`、npm 包 `ecc-universal` 与 `ecc-agentshield`、GitHub App、插件 slug `ecc@ecc`、官网 `ecc.tools`。官方明确说第三方重传与非官方镜像不受维护、可能含恶意代码。**原因不难猜：26 万 Star + 15.0% 的 Fork 率，是仿冒的重灾区。**

### 5. asciimoo/hister

- 地址：https://github.com/asciimoo/hister
- 简介：Your own search engine
- 语言：Go
- 今日新增：842 stars today
- 标签：个人搜索引擎、全文索引、本地优先、浏览器扩展、MCP 接口

**今日新上榜第一（+842），也是今天唯一一个冲进前五的新项目。** 一句话概括：私人的全文搜索引擎，索引**你访问过的网页内容和你保留的文件内容**，然后从网页界面、终端或接了 MCP 的 AI 助手里搜回来。
它跟"浏览器历史搜索"的区别在于**索引的是全文而不是标题和 URL**，支持字段过滤、词组、通配、取反、别名和结果优先级。默认零遥测、不同步云端——浏览器扩展只把页面内容发给你自己配的那台 Hister 服务器；可选的语义搜索才会把文本发到你指定的 embeddings 端点。
接入路径做得很完整：Firefox / Chrome 扩展自动收录新访问页面，另外可以导入浏览器历史、索引本地目录、直接导入文件、挂爬虫。客户端有 Web UI / TUI / CLI / MCP 四种，还有多用户隔离。安装给到二进制、Homebrew、Docker、Nix 四条路。
⚠️ 索引内容是明文存在服务器上的，多人共享一台 Hister 时要先想清楚隔离边界。

### 6. addyosmani/agent-skills

- 地址：https://github.com/addyosmani/agent-skills
- 简介：Production-grade engineering skills for AI coding agents.
- 语言：JavaScript
- 今日新增：677 stars today
- 标签：工程技能集、AI 编码 Agent、生产级、Chrome 团队、四日在榜

**本榜最"钉死"的一条曲线：09-15 +354 → 09-16 +656 → 09-17 +680 → 09-18 +677。** 连续三天落在 656~680 这个 3.7% 宽的区间里，在一个人人上蹿下跳的日榜里非常罕见——这是典型的**大盘稳态流量**，不是脉冲。
9.6 万 Star、10.6% Fork 率，Chrome 团队 Addy Osmani 出品，定位是给 AI 编码 Agent 用的生产级工程技能集（测试金字塔、代码审查、性能、安全加固一整套工程纪律）。**它今天的价值主要不是"热度"，而是当刻度尺**：一条几乎不动的线，正好量出其他项目今天到底是真涨还是真跌。

### 7. TencentCloud/Octop

- 地址：https://github.com/TencentCloud/Octop
- 简介：A smarter, self-hosted AI assistant — multi-user, multi-agent.
- 语言：Python
- 今日新增：571 stars today
- 标签：自托管助手、多用户多 Agent、IM 渠道接入、行为护栏、ACP 双向

386 → 571（**+47.9%，留存涨幅第二**）。昨日排 #14，今天 #7——**又一次印证"当日排名对次日无预测力"**。
今日读 README 补充的实质内容：**它是一个"家庭/小团队共用一台机器"形态的自托管平台**。单进程 `octop run` 起四个面：Web Dashboard、CLI、IM 渠道（飞书 / 钉钉 / QQ / Discord / 企业微信）、cron 定时任务，共享 `~/.octop/` 下的一个控制面数据库（默认 SQLite，可选 PostgreSQL）。
最有辨识度的三点：① **多用户 + 专家库 + MBTI 人格模板**（16 套模板 + 互动测验），可以给每个 Agent 配不同角色，一个管理员账号全家用；② **安全是内建的一层**——JWT 多用户隔离、工具审批、shell 命令护栏、PII 脱敏，数据不出本机；③ **ACP 双向**，可以把编码任务委派给 OpenCode / Claude Code，带权限闸门。
另外它还塞了 Browser AI+（无头 Chromium）、Terminal AI+（浏览器里的交互式 shell）、**远程桌面**（Linux/Windows/macOS 实时画面与输入）。功能面铺得很宽，属于"一个进程解决一整层"的路线。
⚠️ 能远程桌面 + 能执行 shell，这两项叠加意味着部署时必须认真处理网络暴露面，别直接挂在公网。

### 8. coder/coder

- 地址：https://github.com/coder/coder
- 简介：Secure environments for developers and their agents
- 语言：Go
- 今日新增：478 stars today
- 标签：云开发环境、Terraform 定义、Agent 沙箱、密钥不下发、三日连涨

**今日留存涨幅第一：204 → 478，+134.3%。昨日排 #19（倒数第二）。** 三日曲线 09-17 +204 → 09-18 +478，配合昨日"前三名之外无预测力"的规律，这是本周最典型的一次低位跳升。
昨日报告记录过它把 README 标题改成了"Development Environments and AI Agents"；**今日复查，标题已变为 `Self-Hosted Cloud Development Environments and AI Agents`**，正文第一句也定稿为 "a self-hosted platform for cloud development environments and AI coding agents"。定位还在收紧，但方向没变：工作区用 Terraform 定义（EC2 / K8s Pod / Docker 容器），WireGuard® 隧道接入，空闲自动关停省钱。
Agent 部分是它今天值得看的原因：**Coder Agents 的循环跑在你自己的控制平面里，工作区不放任何 API key**——"Bring any model + No LLM credentials in workspaces, user identity on every action + 集中式的模型治理、成本追踪、审计日志"。这正好回答了 09-17 提出的那个问题（"Agent 能动手之后，边界画在哪儿"）：**它的答案是把 Agent 关进你自己的基础设施里，凭据留在控制平面一侧。**
与同日在榜的 Octop（行为护栏）、BrowserSkill（触达最小化）正好构成三种不同层级的答案。

### 9. anthropics/claude-code

- 地址：https://github.com/anthropics/claude-code
- 简介：Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster through natural language commands.
- 语言：TypeScript
- 今日新增：442 stars today
- 标签：终端编码 Agent、Anthropic 官方、14.6 万 Star、稳态流量、Fork 率高

538 → 442（-17.8%）。**当日涨幅 +0.30%**——14.6 万 Star 的体量下这就是日常水位，涨跌幅本身没有信息量。
它的用处是当**刻度尺**：今天包括它在内的 9 个万星以上项目，当日涨幅全部 ≤1.23%（supabase 0.12% / claude-code 0.30% / ECC 0.37% / OpenSpec 0.43% / supermemory 0.47% / anki 0.57% / agent-skills 0.71% / rustfs 0.91% / knowledge-work-plugins 1.23%）。**结论：今天没有普涨。** 榜单头部三强的放量是真实增量，不是水涨船高。
Fork 率 16.2% 全榜最高，这个数字对一个官方 CLI 工具来说偏高，通常意味着大量二次集成与内部改造。

### 10. anthropics/knowledge-work-plugins

- 地址：https://github.com/anthropics/knowledge-work-plugins
- 简介：Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork
- 语言：Python
- 今日新增：300 stars today
- 标签：Claude 插件、知识工作者、11 个职能包、企业连接器、Cowork

287 → 300（**+4.5%**），在 9 个留存项目里是第三位上涨的，也是留存 3 涨 6 跌里唯一"小涨"的那个。三日在榜（96 → 287 → 300）。
今日核 README 补一个此前没写清的点：**它开源了 11 个按"岗位职能"而不是"技术能力"切的插件**——productivity / sales / customer-support / product-management / marketing / legal / finance / data / enterprise-search / bio-research / cowork-plugin-management。每个插件打包的是四件套：skills（领域知识）、connectors（数据源）、slash commands（显式调用）、sub-agents。
连接器覆盖很实：sales 接 HubSpot / Clay / ZoomInfo；finance 接 Snowflake / Databricks / BigQuery；legal 接 Box / Egnyte；bio-research 接 PubMed / bioRxiv / ChEMBL / Benchling。安装走 `claude plugin marketplace add anthropics/knowledge-work-plugins` 再 `claude plugin install sales@knowledge-work-plugins`。

### 11. Fission-AI/OpenSpec

- 地址：https://github.com/Fission-AI/OpenSpec
- 简介：Spec-driven development (SDD) for AI coding assistants.
- 语言：TypeScript
- 今日新增：298 stars today
- 标签：规格驱动开发、制品引导工作流、棕地友好、纯 Markdown、6.9 万 Star

6.9 万 Star 的老项目今天首次进入本系列榜单，+298。
它给自己定的哲学是五条：**fluid not rigid / iterative not waterfall / easy not complex / built for brownfield not just greenfield / scalable from personal projects to enterprises**——重点是第四条，明确为"存量代码库"设计，而不是只适合新项目。
工作流是四条斜杠命令：`/opsx:explore`（先探查现状）→ `/opsx:propose`（生成 `proposal.md` + `specs/` + `design.md` + `tasks.md`）→ `/opsx:apply`（按任务清单实施）→ `/opsx:archive`（归档并回写规格）。规格本身是纯 Markdown，用 `ADDED Requirements` + `WHEN/THEN` 场景描述，不引入新语法。

### 12. rustfs/rustfs

- 地址：https://github.com/rustfs/rustfs
- 简介：RustFS is an open-source, S3-compatible high-performance object storage system supporting migration and coexistence with other S3-compatible platforms such as MinIO and Ceph.
- 语言：Rust
- 今日新增：298 stars today
- 标签：对象存储、S3 兼容、Rust 实现、Apache-2.0、MinIO 替代

+298 新上榜，3.3 万 Star，是今天榜单上**唯一的纯基建、也是唯一的存储类项目**。
定位很直接：用 Rust 重写 MinIO 的形态，但避开 AGPL——**Apache-2.0 许可**，面向数据湖 / AI / 大数据负载。README 的功能状态表做得相当克制：S3 核心、分布式模式、版本控制、对象锁（WORM）、服务端加密、生命周期、桶复制、站点复制、IAM/OIDC/SSO、Keystone 认证、Swift API、审计日志、K8s Helm 全部标 ✅ Available；**S3 Tables（Iceberg REST Catalog）与 MinIO 磁盘格式兼容两项明确标 🧪 Preview**，并且注明 MinIO 加密过的对象 RustFS 读不了。
⚠️ KMS 的 `Local` / `Static` 后端官方标注仅供开发测试，生产要用 Vault（KV2/Transit）或 AWS KMS。

### 13. ankitects/anki

- 地址：https://github.com/ankitects/anki
- 简介：Anki is a smart spaced repetition flashcard program
- 语言：Rust
- 今日新增：177 stars today
- 标签：间隔重复、记忆卡片、老牌开源、Rust·Qt、非 AI

间隔重复记忆卡片软件 Anki，桌面版源码仓库。3.1 万 Star，今日 +177，当日涨幅 **+0.57%**——标准的稳态流量。
今天它的作用不是"项目"，而是**对照组**：在一个 Agent 项目占绝对多数的榜单里，它提醒我们日榜上始终有一批与 AI 完全无关的经典项目在正常流动（09-16 它曾以 +50 在榜）。这类项目的存在，是判断"赛道占比"时分母结构变化的来源。

### 14. ahmedkhaleel2004/gitdiagram

- 地址：https://github.com/ahmedkhaleel2004/gitdiagram
- 简介：Free, simple, fast interactive diagrams for any GitHub repository
- 语言：TypeScript
- 今日新增：145 stars today
- 标签：仓库架构图、交互式、一键换 URL、私库支持、有赞助位

把任意公开或私有 GitHub 仓库在几秒内转成交互式架构图；最省事的用法是**把 GitHub 网址里的 `hub` 换成 `diagram`** 直接打开。
它跟一般"画目录树"的工具区别在于产出的是**系统级架构图**：抓默认分支、递归文件树和 README，再取**经过边界裁剪的源码片段**（优先实质性运行时模块、长文件跨段采样、保留 import 绑定），交给模型产出 groups/nodes/edges/路径的严格图结构，然后在浏览器里做**确定性编译**成 Mermaid——图上的每个组件都能点回 GitHub 上真实的文件或目录。私库支持在浏览器本地填 fine-grained token，token 只随同源请求发送，不嵌进公开图链接。
技术栈：Next.js 16 App Router + React 19 + TypeScript + Tailwind + Radix UI，生成接口是同源 Route Handler（Vercel Bun 运行时），产物存 Cloudflare R2，配额与取消用 Upstash Redis。
⚠️ README 里有明确的 **Sponsor slot 赞助位**；托管版会有成本估算与配额，自托管需要自备 OpenAI / OpenRouter key。

### 15. supermemoryai/supermemory

- 地址：https://github.com/supermemoryai/supermemory
- 简介：Memory and context engine + app that is extremely fast, scalable, and can be run fully locally. The Memory API for the AI era.
- 语言：TypeScript
- 今日新增：140 stars today
- 标签：记忆与上下文引擎、三大 benchmark 第一、可自托管、MCP、连接器

3 万 Star，今日 +140，当日涨幅 +0.47%（稳态）。
核心主张很硬：自称在 **LongMemEval、LoCoMo、ConvoMem** 三大 AI 记忆 benchmark 上均为第一，**Recall@15 95% 且上下文压缩 99.4%，用户画像调用约 50ms**。能力覆盖从事实抽取、时间变更与矛盾处理、自动遗忘，到混合检索（RAG + Memory 单次查询）、多模态抽取（PDF / OCR / 视频转写 / AST 感知的代码切分），以及 Google Drive / Gmail / Notion / OneDrive / GitHub 连接器。
两条用法：给 AI 工具装持久记忆（Claude Code / Cursor / Codex / OpenCode 等的插件与 MCP server，插件本身也开源），或者一条命令自托管跑在本机——`curl -fsSL https://supermemory.ai/install | bash`，可接任意模型或用 Ollama 全离线。
⚠️ 自托管脚本是 `curl | bash`，按惯例建议先看脚本内容再执行；benchmark "第一"为项目自述口径。

### 16. supabase/supabase

- 地址：https://github.com/supabase/supabase
- 简介：The Postgres development platform. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications.
- 语言：TypeScript
- 今日新增：128 stars today
- 标签：Postgres 平台、Firebase 开源替代、11 万 Star、稳态流量、非 AI

Postgres 开发平台，用开源企业级组件重做 Firebase 的能力集：托管 Postgres、认证授权、自动生成 REST/GraphQL API、实时订阅、Edge Functions、文件存储，以及 AI + 向量/嵌入工具箱。
11 万 Star，今日 +128，**当日涨幅 +0.12% 是全榜最低**——今天 9 个万星项目里最"冷"的一个。和 anki（#13）、rustfs（#12）一起，构成今天 3 个非 AI 项目里的两个。

### 17. tradesdontlie/tradingview-mcp

- 地址：https://github.com/tradesdontlie/tradingview-mcp
- 简介：AI-assisted TradingView chart analysis — connect Claude Code to your TradingView Desktop for personal workflow automation
- 语言：JavaScript
- 今日新增：64 stars today
- 标签：图表 MCP 桥接、CDP 本地控制、Pine Script、⚠️ Fork 率全榜最高、非官方

**今日末位（+64），也是今天唯一需要重点标注数据异常的项目。**
它做的事：通过 Chrome DevTools Protocol 连你本机正在运行的 TradingView Desktop，让 Claude Code 获得"看和操作图表"的能力——改标的、切周期、缩放、增删指标，以及 Pine Script 的编写/注入/编译/调试迭代。
**安全设计反而写得比多数项目认真**，README 顶部四段提示：① 与 TradingView Inc. 无隶属/背书关系；② 需要**有效的付费订阅**，不绕过任何付费墙或访问控制；③ 所有数据在本机处理，不外传；④ 走的是 Electron 调试接口访问的**未公开内部 API**，TradingView 任一版本更新都可能失效。调试端口默认关闭，必须你自己显式加 `--remote-debugging-port=9222` 才会生效。README 还单列一节"本工具不做的事"，明确**不执行真实交易**（仅限图表交互）。
⚠️ **两个必须点出的异常**：**Fork/Star 42.4%，是第二名（claude-code 16.2%）的 2.6 倍、全榜中位数（8.7%）的近 5 倍**。这种量级的 Fork 率通常对应"克隆即部署"的使用形态而非贡献型 fork，配合末位 +64 的极低增量，热度形态不健康——**不要因为它在榜就认为它被广泛采用**。其次，它依赖未公开内部 API，稳定性无保障。
另外它附带一份 RESEARCH.md，把定位说清楚了：这是研究"LLM Agent 如何与专业交易界面交互以辅助人类决策"的**接口层**，不是交易机器人。

## 观察

- cloudflare/security-audit-skill 今日 3,019 stars today，居当日增量第 1 位。
- alibaba/open-code-review 今日 2,724 stars today，居当日增量第 2 位。
- Tencent/BrowserSkill 今日 1,319 stars today，居当日增量第 3 位。
