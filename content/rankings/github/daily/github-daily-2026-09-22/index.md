---
title: GitHub 每日趋势榜 2026-09-22
description: 2026-09-22 GitHub Trending 榜首为 google/ax，当日共收录 8 个项目。
date: '2026-09-22T08:00:00+08:00'
rankingKey: '2026-09-22'
slug: github-daily-2026-09-22
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

2026-09-22 GitHub Trending 共收录 8 个项目，榜首 google/ax（2,324 stars today）。语言分布：Python 5、Go 2、TypeScript 1。

## 重点项目

### 1. google/ax

- 地址：https://github.com/google/ax
- 简介：Google's open agentic orchestration runtime
- 语言：Go
- 今日新增：2,324 stars today
- 标签：Google 官方、Agent 编排运行时、声明式 K8s、沙箱与网络围栏、⚠️ pre-stable

今天唯一的破千项目，也是本系列自 09-19 以来最强的单点。它的定位一句话就能说清：**"Agent 既不是无状态微服务，也不是跑完就结束的批处理任务"**——AX 按这个前提重新设计了一层调度，给出四个声明式原语：`Task`（带 CPU/内存上限的隔离沙箱）、`Workspace`（预挂 Git 仓库 / MCP 服务器 / skill 包，让每个 Agent 热启动）、`Gateway`（出站流量锁成显式 host 白名单）、`Model`（平台自身用哪个 LLM，凭据走 K8s secret）。全部写成 `ax.io/v1alpha1` manifest，一条 `ax apply` 下去。
三个细节值得单独记：① `ax suspend` / `ax resume` 可以**把空闲的 Agent 暂停再从原处拉起**——这跟排在第 2 的 substrate 是同一套能力；② `ax ssh` 能钻进运行中的沙箱看它在干什么，把"Agent 黑盒"打开了一个口子；③ **它明确跑在 Agent Substrate 之上**，README 里直接给了链接。
⚠️ 两个必须写在前面的事：README 顶部挂着 WARNING——核心概念、协议、规范仍在演进，**稳定版之前会有 major breaking changes**；部署需要先有一个 K8s 集群 + `ko` + 镜像仓库 + 可访问的 Agent Substrate 控制面。**这不是一个今天就能上生产的东西。**
另外 Fork/Star 只有 4.7%（全榜最低），是典型的"看的人远多于动手的人"——传播型热度，明天是证伪日。

### 2. agent-substrate/substrate

- 地址：https://github.com/agent-substrate/substrate
- 简介：Agent Substrate: the core system
- 语言：Go
- 今日新增：498 stars today
- 标签：高密度沙箱、gVisor 与 microVM、挂起恢复 <500ms、零信任隔离、非官方支持

新上榜第二，也是今天榜单上**唯一一个和榜首有明确上下游关系的项目**。核心思路是把大量"actor"（Agent 这类应用）映射到少量常驻的"worker"上——理由很直接：**Agent 大部分时间是空闲的**，所以可以重度超卖。官方 demo 是在 8 个物理 Pod 上多路复用约 250 个有状态 actor，README 声称 30x+ 超卖、sub-500ms 恢复、500+ 次/秒的挂起激活。
技术上它站在 Kubernetes 之上做调度（Pods 负责基础设施与 worker 生命周期），沙箱支持 microVM 和 gVisor 两种，自陈密度是标准容器运行时的 10 倍。框架无关是它最讨巧的一点：管的是标准 OCI 容器，所以 ADK、LangChain、Claude Code、CodeX、MCP 都能塞进去。
⚠️ README 首屏就写明：**这不是 Google 官方支持的产品，也不参与 Google 开源漏洞赏金计划**。贡献者里有 Google Kubernetes 的老面孔（thockin 等），但"官方支持"和"官方出品"是两回事，不要混。

### 3. mvt-project/mvt

- 地址：https://github.com/mvt-project/mvt
- 简介：MVT (Mobile Verification Toolkit) helps with conducting forensics of mobile devices in order to find signs of a potential compromise.
- 语言：Python
- 今日新增：441 stars today
- 标签：移动设备取证、iOS 与 Android、IOC 比对、Amnesty 安全实验室、二日在榜

连续第二日在榜（177 → 441，**+149.2%，留存涨幅第一**），也是今天全榜唯一上涨幅度超过一倍的留存项。它是 Amnesty International 安全实验室 2021 年在 Pegasus Project 背景下发布的老牌取证工具，用来自动化采集 Android / iOS 设备上的入侵痕迹，并比对公开 IOC 库。
今天能涨近 1.5 倍，大概率和它自己的工程状态有关——README 顶部 IMPORTANT 声明 **v3 分支刚合并，引入了 breaking changes**，依赖旧输出格式的脚本会坏。这类"版本换代 + 老项目回潮"的组合，本系列在 09-12 的 SmartTube 上见过一次（那次是反向的负面公告）。
⚠️ 三点限制必须写清楚：① README 明确说这是**给技术人员和调查者用的取证研究工具，不是终端用户自评工具**；② **公开 IOC 不足以判定一台设备"干净"**，只靠公开指标会漏掉近期痕迹、制造虚假安全感；③ 它出自 Pegasus 调查语境，**双用途属性明显，只在授权设备上使用**。

### 4. anthropics/financial-services

- 地址：https://github.com/anthropics/financial-services
- 简介：Claude for Financial Services — 面向投行、股票研究、私募与财富管理的参考 Agent、技能与数据连接器（页面 About 为空，取自仓库 README 首段）
- 语言：Python
- 今日新增：436 stars today
- 标签：金融 Agent 合集、投行与私募流程、Cowork 插件、三日在榜、非投资建议

**连续第三日在榜**（236 → 425 → 436），是今天在榜天数最长的项目，走势也是最"不像脉冲"的一条——三天斜率 236→425→436，第二天跳升 80% 后第三天几乎走平，形态上更像稳定盘而非单日尖峰。
内容上它是 Anthropic 官方出的一套**金融工作流 Agent 目录**：Pitch Agent、Meeting Prep Agent、Market Researcher、Earnings Reviewer、Model Builder（DCF/LBO/三表/comps，直接落到 Excel）、Valuation Reviewer、GL Reconciler、Month-End Closer、Statement Auditor、KYC Screener。每个 Agent 都自包含，同时以 Cowork 插件和 Managed Agent 模板两种形态分发——**同一套 system prompt 和技能，你选它在哪儿跑**。另外还有 LSEG、S&P Global 参与共建的 partner 插件目录。
⚠️ README 顶部的 IMPORTANT 逐字复核**今天仍在**：不构成投资/法律/税务/会计建议；这些 Agent 只起草 analyst 工作产物（模型、备忘录、研报、对账），**不执行交易、不绑定风险、不入账、不做准入审批，每一份产出都停在人工签核前**。所有输出由使用方负责核验与合规。

### 5. dream-num/univer

- 地址：https://github.com/dream-num/univer
- 简介：The Office Harness for AI Agents — Spreadsheets, Docs, Slides, Canvas, Relational Tables, and PDF in one runtime.
- 语言：TypeScript
- 今日新增：202 stars today
- 标签：Office SDK、表格文档幻灯片、Canvas 渲染、公式引擎、Agent 装配层

国产开源的全栈 Office SDK（表格 / 文档 / 幻灯片 / 多维表 / 白板），插件架构 + Canvas 渲染 + 自研公式引擎，浏览器和 Node.js 共用一套 Facade API。
今天值得注意的不是它本身有多新（15k Star 的老项目），而是它**把自我定位改成了 "The Office Harness for AI Agents"**——README 首屏、仓库描述、站点 banner 三处统一换了这个说法。这是本系列里第一次看到"办公套件"主动把自己挂到 Agent 叙事上：不再把自己卖给 SaaS 产品做嵌入式编辑器，而是卖给 Agent 做**可执行、可编程的文档运行时**。
配合排在第 7 的 video-use（把视频剪辑变成 Agent 能操作的目录），今天榜单上出现了一个很清楚的苗头：**Agent 正在从"写代码"外溢到"操作专业软件"**。一个切办公文档，一个切视频时间线，都是把原本只有人能用的生产力软件暴露成 Agent 的可编程表面。

### 6. superdesigndev/treg

- 地址：https://github.com/superdesigndev/treg
- 简介：OpenRouter for agent tools. 3,000+ catalogued endpoints across 60+ providers.
- 语言：Python
- 今日新增：197 stars today
- 标签：工具版 OpenRouter、3000+ 端点、按次计费、凭证服务端注入、curl 管道安装

把 OpenRouter 的商业模式原样搬到"工具"上：**一个 base URL + 一个 token，Agent 就能调用 3,000+ 个已编目的第三方端点**（SEO 与外链、社交与趋势、人与公司富化、广告、抓取、图片视频生成），按需计费，最低一分钱起，不用自己一家家去开通订阅。
它真正解决的问题说得挺实在：Agent 需要的工具全在没人愿意为单次运行买的订阅后面（Semrush $139/月、Moz $99/月、Crunchbase $99/月、Apollo $59/席位），或者在根本没有公开 API 的邀请制后面。treg 替你持有账号，按次拆卖。
设计上有两条硬规则值得记：① 代理**只做转发、不建模上游**，所以上游 API 变了客户端不用改；② **鉴权在服务端注入，调用方永远拿不到密钥**——你团队自己的 key 优先级最高且不计流量。
⚠️ 风险也在这两条上：它把大量第三方凭证集中在自己这一侧，等于**单点信任 + 单点故障**；目录里含抓取、外链、社媒数据等灰色地带端点，合规边界要自己判断。安装方式是 `curl -fsSL https://treg.to/install.sh | sh`，管道执行远程脚本，建议先看脚本再跑。

### 7. browser-use/video-use

- 地址：https://github.com/browser-use/video-use
- 简介：Edit videos with coding agents
- 语言：Python
- 今日新增：155 stars today
- 标签：Agent 剪视频、ffmpeg 编排、字幕与调色、渲染自评估、需 ElevenLabs key

browser-use 团队的新东西，思路非常"Agent 原生"：**把一文件夹原始素材丢给 Claude Code，聊天，拿回 `final.mp4`**。没有预设、没有菜单，Agent 自己写 ffmpeg 链。
具体做七件事：删填充词（`umm`/`uh`）和废片段、逐段自动调色、每个剪切点加 30ms 音频淡入淡出、按样式烧字幕（默认两个词一组大写）、用 HyperFrames / Remotion / Manim / PIL 生成动画叠加层（**每个动画开一个并行子 Agent**）、**在每个剪切边界自我评估渲染结果再给你看**、把会话记忆写进 `project.md` 让下周接着来。
最后一条"session memory 落盘"是它区别于其他视频 Agent 的地方——它默认你把剪辑当成跨会话的长期项目，而不是一次性任务。
⚠️ 装的时候 Agent 会找你要 **ElevenLabs API key**，还要本地 ffmpeg；README 里多处引导到付费的 Browser Use Cloud / Box；"self-evaluates the rendered output" 是它自陈的能力，没有第三方评测佐证。

### 8. davila7/claude-code-templates

- 地址：https://github.com/davila7/claude-code-templates
- 简介：CLI tool for configuring and monitoring Claude Code
- 语言：Python
- 今日新增：33 stars today
- 标签：Claude Code CLI、配置与监控、模板市场、推广位较多、当日 +0.11%

3 万 Star 的 Claude Code 周边 CLI，主打配置与监控。今天以 +33 上榜，是继 09-19 的 +5、09-20 的 +32 之后本系列第三次见到"三十 Star 量级就能进日榜"——**准入门槛在这三天里一直很低**，这是席位收缩的直接读数，不是项目本身有什么动静。
⚠️ 需要提醒的是它的 README 结构：顶部挂了 Bright Data（带返利追踪链接）、Z.AI、Neon、Vercel OSS 等多个赞助徽章，正文中间还有一整块赞助商推荐位。**项目本身可用，但 README 的商业内容密度偏高，读的时候要知道哪些是广告。**另外连续多日都是这类低增量，说明它现在的热度是存量流量而非新增关注。

## 观察

- google/ax 今日 2,324 stars today，居当日增量第 1 位。
- agent-substrate/substrate 今日 498 stars today，居当日增量第 2 位。
- mvt-project/mvt 今日 441 stars today，居当日增量第 3 位。
