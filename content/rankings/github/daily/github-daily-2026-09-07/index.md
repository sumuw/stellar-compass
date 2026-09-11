---
title: GitHub 每日趋势榜 2026-09-07
description: 2026-09-07 GitHub Trending 榜首为 affaan-m/ECC，当日共收录 14 个项目。
date: '2026-09-07T08:00:00+08:00'
rankingKey: '2026-09-07'
slug: github-daily-2026-09-07
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

2026-09-07 GitHub Trending 共收录 14 个项目，榜首 affaan-m/ECC（1,905 stars today）。语言分布：TypeScript 6、Python 4、JavaScript 3、Zig 1。

## 重点项目

### 1. affaan-m/ECC

- 地址：https://github.com/affaan-m/ECC
- 简介：The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.
- 语言：JavaScript
- 今日新增：1,905 stars today
- 标签：Agent Harness、多平台、记忆系统、安全约束、工程方法论

今日唯一破千项目，登顶。昨日 +1,486 → 今日 +1,905（**+28.2%**），在昨日冠亚军集体掉榜的断崖中成为唯一稳定极，连续在榜已达五日。定位是"Agent harness 的性能优化系统"，覆盖 skills / instincts / memory / security，且同时支持 Claude Code、Codex、Opencode、Cursor 多平台——这是它能穿越单日波动的原因：不绑定单一客户端。

### 2. microsoft/markitdown

- 地址：https://github.com/microsoft/markitdown
- 简介：Python tool for converting files and office documents to Markdown.
- 语言：Python
- 今日新增：771 stars today
- 标签：文档转换、Markdown、LLM 数据管线、微软、RAG 前置

老牌项目回榜，且一回来就是新上榜第一。把 PDF / PowerPoint / Word / Excel / 图片（EXIF + OCR）/ 音频（转写）/ HTML / CSV·JSON·XML / ZIP / YouTube URL / EPub 统一转成 Markdown。它的价值不在"转换"而在"喂 LLM 前的归一化层"——RAG 管线里最脏的一步。17.9 万 Star 说明早就是事实标准，今天的回榜更像是新一轮 Agent 应用把它重新拉回视野。

### 3. heygen-com/hyperframes

- 地址：https://github.com/heygen-com/hyperframes
- 简介：Write HTML. Render video. Built for agents.
- 语言：TypeScript
- 今日新增：734 stars today
- 标签：视频生成、HTML 转 MP4、Agent 技能、确定性渲染、开源框架

HeyGen 开源，本期最值得关注的新项目。路线与主流 AI 视频生成**相反**：不靠扩散模型"猜"画面，而是把 HTML/CSS/媒体/可寻址动画**确定性**渲染成 MP4。好处是可复现、可 diff、可进 CI——改一行 CSS 就得到可预期的一帧变化，这对需要批量产出或版本管理的场景是决定性的。同时提供 20 个 skills 供 Agent 按需加载（`/hyperframes` 是路由入口），`npx skills add heygen-com/hyperframes` 一条命令接进 Claude Code / Cursor / Codex。

### 4. coreyhaines31/marketingskills

- 地址：https://github.com/coreyhaines31/marketingskills
- 简介：Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.
- 语言：JavaScript
- 今日新增：602 stars today
- 标签：营销技能、Agent Skills、CRO、SEO、垂直职能

+172 → +602，一日翻 2.5 倍，连续三日在榜且逐日加速（09-04 上榜 → 09-06 +172 → 今日 +602）。覆盖转化率优化、文案、SEO、分析、增长工程，面向"技术型营销人和创始人"。
真正值得注意的是它的**商业化写法很干净**：技能库 MIT 免费，由 "Verified Partners" 赞助维持，合作方在 `tools/REGISTRY.md` 与 `tools/PARTNERS.md` 里披露，并明写"不影响核心技能推荐什么"。技能包赛道里把"赞助隔离"写成明规则的不多，这算是给后来者立了个样板。

### 5. The-Swarm-Corporation/AutoHedge

- 地址：https://github.com/The-Swarm-Corporation/AutoHedge
- 简介：Build your autonomous hedge fund in minutes. AutoHedge harnesses the power of swarm intelligence and AI agents to automate market analysis, risk management, and trade execution.
- 语言：Python
- 今日新增：541 stars today
- 标签：量化交易、多智能体、自动下单、Swarm、金融风险

+137 → +541，连续三日在榜且加速（09-05 上榜 → 09-06 +137 → 今日 +541）。用群体智能 + Agent 串起市场分析、风控、执行三件事。体量很小（5,080 Star）却排到第 5，说明增量集中在真正在试的人身上。

### 6. BraveOPotato/FckSignups

- 地址：https://github.com/BraveOPotato/FckSignups
- 简介：A list of tools that are open-source, in-browser, and require no-signups!
- 语言：TypeScript
- 今日新增：497 stars today
- 标签：工具索引、免注册、开源、隐私、前端

全榜"最稳"的项目——连续两日在榜（+436 → +497），且是本期**实际涨幅最高**的一个（+15.7%，远超大基数项目的名义增量）。收录"浏览器打开即用、不用注册、不用邮箱、不追踪"的开源工具。
README 里一张"我们信什么 / 我们拒绝什么"的对照表立住了立场（反注册墙、反数据收割、默认开源、简单优于臃肿）。内容型清单项目通常脉冲一次就走，它能连续两日上涨属于反常，值得再看一天。

### 7. ruvnet/ruflo

- 地址：https://github.com/ruvnet/ruflo
- 简介：🌊 The original agent meta-harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems.
- 语言：TypeScript
- 今日新增：392 stars today
- 标签：Agent 元框架、多智能体、自学习记忆、联邦、Claude Code

+276 → +392，连续三日在榜且持续上行。定位讲得很清楚：**Agent = Model + Harness**，模型负责写，harness 负责工具、记忆、循环、沙箱与控制；Ruflo 只做后者。能力铺得很满——100+ 专业 agent、swarm 编排、自学习记忆、跨机器联邦通信、企业安全护栏，并原生接 Claude Code / Codex / Hermes。
体验上的关键设计是"你不用学"：README 明说不必掌握 314 个 MCP 工具和 26 条 CLI 命令，`npx ruflo init` 之后照常用 Claude Code，hooks 系统在后台自动路由、学习、协调。

### 8. openai/skills

- 地址：https://github.com/openai/skills
- 简介：Skills Catalog for Codex
- 语言：Python
- 今日新增：372 stars today
- 标签：技能目录、Codex、官方规范、Agent Skills、⚠️ 已弃用

⚠️ **今日最需要标注的陷阱。** 涨幅全榜第一（+44 → +372，翻了 8 倍多），但仓库 README 顶部第一行就是：
> **This repository is deprecated.** For current Codex skill and plugin examples, use the [OpenAI Plugins repository](https://github.com/openai/plugins).
官方已把 Codex 的技能与插件示例迁到 `openai/plugins`，自建技能应看官方的 Build plugins 指南。**热度与可用性在这里完全脱钩**——照着这个仓库写技能，方向就是错的。本项目 09-06 即以 +44 在榜且当时已标注弃用，今日弃用状态经复核仍然存在。

### 9. bytedance/deer-flow

- 地址：https://github.com/bytedance/deer-flow
- 简介：An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours.
- 语言：Python
- 今日新增：188 stars today
- 标签：SuperAgent、子智能体、沙箱、字节、长期任务

字节开源，DeerFlow 2.0 是**彻底重写**，与 v1 不共享任何代码；原来的 Deep Research 框架仍在 `main-1.x` 分支维护。定位从"深度研究"升级成 "super agent harness"：子智能体 + 记忆 + 沙箱 + 可扩展 skills + 消息网关，目标是分钟到小时级的长周期任务。

### 10. MoonTechLab/LunaTV

- 地址：https://github.com/MoonTechLab/LunaTV
- 简介：本项目采用 CC BY-NC-SA 协议，禁止任何商业化行为，任何衍生项目必须保留本项目地址并以相同协议开源
- 语言：TypeScript
- 今日新增：171 stars today
- 标签：影视聚合、Next.js、PWA、CC BY-NC-SA、⚠️ 版权风险

MoonTV 系影视聚合播放器（Next.js 14 + Tailwind + TypeScript），支持多源搜索、在线播放（HLS.js + ArtPlayer）、收藏与播放进度云端同步（Kvrocks/Redis/Upstash）、PWA 离线安装、以及实验性的视频切片广告跳过。

### 11. mksglu/context-mode

- 地址：https://github.com/mksglu/context-mode
- 简介：Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.
- 语言：TypeScript
- 今日新增：147 stars today
- 标签：上下文优化、MCP、会话记忆、Agent 基建、降本

本期"问题定义写得最锋利"的项目。它在 README 里先摆事实：一次 Playwright 快照 56KB、20 条 GitHub issue 59KB、一份访问日志 45KB——半小时后 40% 的上下文就没了；而 agent 压缩对话腾空间时又会忘掉正在编辑的文件、进行中的任务和你上一个请求。
四面同时下手：① **省**——沙箱化工具输出，315KB → 5.4KB（-98%）；② **续**——文件编辑/git/任务/错误/用户决策全进 SQLite，压缩时不回灌上下文，而是索引进 FTS5 用 BM25 按需取回；③ **Think in Code**——让模型写脚本去算，而不是把 50 个文件读进上下文去数函数，一个脚本替十次工具调用；④ 通过 MCP + hooks 强制路由到 17 个平台。
🔒 隐私设计加分：不加 `--continue` 时上一次会话数据立即删除，新会话就是干净的。

### 12. pascalorg/editor

- 地址：https://github.com/pascalorg/editor
- 简介：Create and share 3D architectural projects.
- 语言：TypeScript
- 今日新增：136 stars today
- 标签：3D 建筑设计、WebGPU、R3F、MCP、开源

浏览器里的 3D 建筑编辑器（React Three Fiber + WebGPU）。`npx @pascal-app/cli editor` 一条命令起本地编辑器，并在后台拉起一个**已认证的 MCP 服务**，自动选无冲突的 loopback 端口，项目存在 `~/.pascal/data/pascal.db`；配置 Agent 执行 `pascal mcp connect` 即可接入。
这意味着 Agent 可以直接操作 3D 场景——是"Agent 控制 GUI 应用"的少见样本，而且落在**建筑**而非编程领域。和 hyperframes 一起看，今天榜单出现了明显的"让 Agent 产出非文本、非代码成果"的方向。

### 13. jo-inc/camofox-browser

- 地址：https://github.com/jo-inc/camofox-browser
- 简介：Stealth headless browser for AI agents — bypass Cloudflare, bot detection, and anti-scraping. Drop-in Puppeteer/Playwright replacement.
- 语言：JavaScript
- 今日新增：117 stars today
- 标签：反检测浏览器、Agent 抓取、Firefox 分支、指纹伪造、⚠️ 合规

站在 Camoufox（一个在 C++ 层做指纹伪造的 Firefox 分支）肩上。它的论证很有说服力：**stealth 插件本身就成了指纹**——所以不做 shim、不做 wrapper，直接在 C++ 实现层改 `navigator.hardwareConcurrency`、WebGL renderer、AudioContext、屏幕几何、WebRTC，JS 还没执行时值就已经是假的。
给 Agent 的接口是 REST：返回 accessibility snapshot（比裸 HTML 小约 90%）、稳定的 `e1/e2/e3` 元素引用、常用站点搜索宏；懒启动 + 空闲关闭把闲置内存压到 ~40MB，明确为"和你的其他服务挤一台机器"设计（树莓派 / $5 VPS 都能跑）。还有会话隔离、Netscape 格式 cookie 导入、文件上传目录、住宅代理 + GeoIP 自动时区。

### 14. lightpanda-io/browser

- 地址：https://github.com/lightpanda-io/browser
- 简介：Lightpanda: the headless browser designed for AI and automation
- 语言：Zig
- 今日新增：116 stars today
- 标签：无头浏览器、Zig、Agent 基建、高性能、非 Chromium

不是 Chromium 分支，不是 WebKit 补丁，是**用 Zig 从零写的新浏览器**。官方基准（AWS EC2 m5.large，933 个真实联网页面）：100 页峰值内存 **123MB vs Headless Chrome 2GB**（约 1/16），执行时间 **5s vs 46s**（约 9 倍）。对 Agent 场景的意义很直接——抓取是 Agent 调用最频繁也最容易成为瓶颈的一环，把内存和延迟压一个数量级，等于把并发 Agent 数抬高一个数量级。
今日与 camofox 形成漂亮的对位：**一个走"绕开检测"，一个走"重写引擎"**——同一问题的两条相反技术路线同天上榜。另外这是本期唯一的 Zig 项目，也是 Rust/Go/C++ 全部缺席的一天里，唯一出现在系统层的语言。

## 观察

- lightpanda-io/browser 今日 116 stars today，是当日增量最高的项目之一。
- jo-inc/camofox-browser 今日 117 stars today，是当日增量最高的项目之一。
- pascalorg/editor 今日 136 stars today，是当日增量最高的项目之一。
