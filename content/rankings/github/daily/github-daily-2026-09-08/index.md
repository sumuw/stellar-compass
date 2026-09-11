---
title: GitHub 每日趋势榜 2026-09-08
description: 2026-09-08 GitHub Trending 榜首为 heygen-com/hyperframes，当日共收录 16 个项目。
date: '2026-09-08T08:00:00+08:00'
rankingKey: '2026-09-08'
slug: github-daily-2026-09-08
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

2026-09-08 GitHub Trending 共收录 16 个项目，榜首 heygen-com/hyperframes（2,628 stars today）。语言分布：Python 5、JavaScript 5、TypeScript 3、HTML 1、Shell 1、无标注（纯 Markdown） 1。

## 重点项目

### 1. heygen-com/hyperframes

- 地址：https://github.com/heygen-com/hyperframes
- 简介：Write HTML. Render video. Built for agents.
- 语言：TypeScript
- 今日新增：2,628 stars today
- 标签：视频生成、HTML 转 MP4、确定性渲染、Agent 技能、开源框架

昨日 +734 → 今日 +2,628，一日翻 2.6 倍直接登顶，是本期唯一破两千的项目。路线与主流 AI 视频生成**相反**：不靠扩散模型"猜"画面，而是把 HTML/CSS/媒体/可寻址动画**确定性**渲染成 MP4——可复现、可 diff、可进 CI，改一行 CSS 就得到可预期的一帧变化。对需要批量产出或版本管理的场景，这是决定性的。同时提供 20 个 skills 供 Agent 按需加载，`npx skills add heygen-com/hyperframes` 一条命令接进 Claude Code / Cursor / Codex。
HeyGen 作为商业视频平台把这条路线开源，说明"确定性渲染"在真实生产里已经被验证过，而不是实验室方案。

### 2. microsoft/markitdown

- 地址：https://github.com/microsoft/markitdown
- 简介：Python tool for converting files and office documents to Markdown.
- 语言：Python
- 今日新增：2,045 stars today
- 标签：文档转换、Markdown、LLM 数据管线、微软、RAG 前置

老牌项目连续第二日在榜，且加速（+771 → +2,045）。把 PDF / PowerPoint / Word / Excel / 图片（EXIF + OCR）/ 音频（转写）/ HTML / CSV·JSON·XML / ZIP / YouTube URL / EPub 统一转成 Markdown。价值不在"转换"而在"喂 LLM 前的归一化层"——RAG 管线里最脏的一步。18.1 万 Star 说明早是事实标准，这两天的回榜更像是新一轮 Agent 应用把它重新拉回视野。

### 3. affaan-m/ECC

- 地址：https://github.com/affaan-m/ECC
- 简介：The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.
- 语言：JavaScript
- 今日新增：1,426 stars today
- 标签：Agent Harness、多平台、记忆系统、安全约束、工程方法论

今日唯一回落的大基数项目（+1,905 → +1,426），把第一让给了 hyperframes。但它是**全场唯一连续六日在榜**的项目——在这样剧烈换血的榜单里，这个稳定性比单日排名更有信息量。定位是"Agent harness 的性能优化系统"，覆盖 skills / instincts / memory / security，同时支持 Claude Code、Codex、Opencode、Cursor 多平台，不绑定单一客户端，这正是它能穿越单日波动的原因。

### 4. cathrynlavery/diagram-design

- 地址：https://github.com/cathrynlavery/diagram-design
- 简介：38 editorial diagram types for Claude Code, Codex, and Pi. Self-contained HTML + SVG. No shadows. No Mermaid slop.
- 语言：HTML
- 今日新增：1,070 stars today
- 标签：图表设计、编辑级审美、Agent Skills、反 Mermaid、自包含 SVG

09-05 之后首次回归，一回来就 +1,070，超过此前峰值（09-05 的 +852）。作者 Cathryn Lavery 的动机写得很实在：自己写文章时让 Claude 画图，拿到的永远是"generic rounded-box thing"，要么跟 Figma 搏斗 30 分钟，要么干脆不画了——于是做了这个技能。
技术取向很硬：**无构建步骤、无 JavaScript、无外部图片依赖**，全部静态 HTML+SVG，三种变体（minimal light / minimal dark / full-editorial）；能读你的网站在 60 秒内匹配品牌色。设计信条是"最高质量的一步通常是删除"——每个节点都得挣得自己的位置，强调色只留给最该看的 1~2 处，目标密度 4/10。
版本演进也值得记：2.0 加了 Loop（带共享记忆中枢的飞轮图），2.3 加了语义系统模式与可选动效，2.5.10 一次加十种布局语法（桑基、鱼骨、Wardley 地图、看板、用户旅程、部署图、依赖图、UML 类图、故事地图、数据库模式）。

### 5. jo-inc/camofox-browser

- 地址：https://github.com/jo-inc/camofox-browser
- 简介：Stealth headless browser for AI agents — bypass Cloudflare, bot detection, and anti-scraping. Drop-in Puppeteer/Playwright replacement.
- 语言：JavaScript
- 今日新增：872 stars today
- 标签：反检测浏览器、Agent 抓取、Firefox 分支、指纹伪造、⚠️ 合规

昨日还是 +117 的尾部项目，一日翻 7.5 倍冲到第 5，涨幅全榜第一。站在 Camoufox（C++ 层做指纹伪造的 Firefox 分支）肩上，论证很有说服力：**stealth 插件本身就成了指纹**——所以不做 shim、不做 wrapper，直接在 C++ 实现层改 `navigator.hardwareConcurrency`、WebGL renderer、AudioContext、屏幕几何、WebRTC，JS 还没执行时值就已经是假的。
给 Agent 的接口是 REST：返回 accessibility snapshot（比裸 HTML 小约 90%）、稳定的 `e1/e2/e3` 元素引用、常用站点搜索宏；懒启动 + 空闲关闭把闲置内存压到 ~40MB，明确为"和你的其他服务挤一台机器"设计（树莓派 / $5 VPS 都能跑）。
今日与 browser-use（#14）形成呼应——**"给 Agent 一个能用的浏览器"这件事今天有两个独立解法同时在榜**，说明它是当前 Agent 落地最硬的卡点之一。

### 6. coreyhaines31/marketingskills

- 地址：https://github.com/coreyhaines31/marketingskills
- 简介：Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.
- 语言：JavaScript
- 今日新增：666 stars today
- 标签：营销技能、Agent Skills、CRO、SEO、垂直职能

连续四日在榜（09-04 上榜 → +172 → +602 → +666），是本期在榜时间第二长的老面孔。覆盖转化率优化、文案、SEO、分析、增长工程，面向"技术型营销人和创始人"。九月初以来通用技能包起起落落，它是唯一一个稳定爬升的垂直职能技能包。
商业化写法依然干净：技能库 MIT 免费，由 "Verified Partners" 赞助维持，合作方在 `tools/REGISTRY.md` 与 `tools/PARTNERS.md` 披露，并明写"不影响核心技能推荐什么"。

### 7. mksglu/context-mode

- 地址：https://github.com/mksglu/context-mode
- 简介：Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.
- 语言：TypeScript
- 今日新增：652 stars today
- 标签：上下文优化、MCP、会话记忆、Agent 基建、降本

+147 → +652，一日翻 3.4 倍。README 里先摆事实：一次 Playwright 快照 56KB、20 条 GitHub issue 59KB、一份访问日志 45KB——半小时后 40% 的上下文就没了；而 agent 压缩对话腾空间时又会忘掉正在编辑的文件、进行中的任务和你上一个请求。
四面同时下手：① **省**——沙箱化工具输出，315KB → 5.4KB（-98%）；② **续**——文件编辑/git/任务/错误/用户决策全进 SQLite，压缩时不回灌上下文，而是索引进 FTS5 用 BM25 按需取回；③ **Think in Code**——让模型写脚本去算，而不是把 50 个文件读进上下文去数函数，一个脚本替十次工具调用；④ 通过 MCP + hooks 强制路由到 17 个平台。
🔒 隐私设计加分：不加 `--continue` 时上一次会话数据立即删除，新会话就是干净的。

### 8. MoonTechLab/LunaTV

- 地址：https://github.com/MoonTechLab/LunaTV
- 简介：本项目采用 CC BY-NC-SA 协议，禁止任何商业化行为，任何衍生项目必须保留本项目地址并以相同协议开源
- 语言：TypeScript
- 今日新增：505 stars today
- 标签：影视聚合、Next.js、PWA、CC BY-NC-SA、⚠️ 版权风险

MoonTV 系影视聚合播放器（Next.js 14 + Tailwind + TypeScript），支持多源搜索、在线播放（HLS.js + ArtPlayer）、收藏与播放进度云端同步（Kvrocks/Redis/Upstash）、PWA 离线安装，以及实验性的视频切片广告跳过。连续三日在榜且逐日加速（+171 → +505）。

### 9. The-Swarm-Corporation/AutoHedge

- 地址：https://github.com/The-Swarm-Corporation/AutoHedge
- 简介：Build your autonomous hedge fund in minutes. AutoHedge harnesses the power of swarm intelligence and AI agents to automate market analysis, risk management, and trade execution.
- 语言：Python
- 今日新增：494 stars today
- 标签：量化交易、多智能体、自动下单、Swarm、金融风险

连续四日在榜（09-05 上榜 → +137 → +541 → +494），今天首次小幅回落，但仍是榜单上少有的"非技能包类"稳定项目。用群体智能 + Agent 串起市场分析、风控、执行三件事。体量很小（5,555 Star）却稳在前十，说明增量集中在真正在试的人身上。

### 10. openai/skills

- 地址：https://github.com/openai/skills
- 简介：Skills Catalog for Codex
- 语言：Python
- 今日新增：490 stars today
- 标签：技能目录、Codex、官方规范、Agent Skills、⚠️ 已弃用

⚠️ **本期最尖锐的一条（见 #16）。** 这个仓库 README 第一行就是：
> **This repository is deprecated.** For current Codex skill and plugin examples, use the [OpenAI Plugins repository](https://github.com/openai/plugins). If you want to add your own skills to Codex, follow the [Build plugins](https://developers.openai.com/codex/plugins/build) guide.
也就是说，官方指定的继任者 `openai/plugins` **今天就在这个榜单上（#16）**，而它的热度是 +45——**弃用仓库的热度是官方替代品的 10.9 倍**。这是"GitHub 热度 ≠ 正确性"最直白的一个样本：榜单排的是社交传播速度，不是文档新鲜度。照着 #10 写技能，方向就是错的。
本项目 09-06 起连续三日在榜且期间已两次标注弃用，今日弃用状态经复核仍然存在。

### 11. obra/superpowers

- 地址：https://github.com/obra/superpowers
- 简介：An agentic skills framework & software development methodology that works.
- 语言：Shell
- 今日新增：446 stars today
- 标签：开发方法论、技能框架、TDD、子智能体、多客户端

全榜 Star 总数第一（28.3 万），09-03 之后首次回归。它的主张不是"多给你几个技能"，而是**改变 Agent 的默认行为**：一旦 Agent 察觉你在构建东西，不直接写代码，而是先退一步问你到底要做什么；从对话里挤出一份规格，切成能读完的小块给你确认；你签字后才出实现计划——明确要求写给"热情但品味差、没判断力、没项目上下文、还讨厌写测试"的初级工程师看，强调真红/绿 TDD、YAGNI、DRY；你说"开始"之后才进入 subagent-driven development，让子智能体逐项推进并互相审查，连续自主工作数小时不偏离计划。
安装覆盖面是本期最广的：Claude Code、Antigravity、Codex App/CLI、Cursor、Devin CLI、Factory Droid、Gemini CLI、GitHub Copilot CLI、Grok Build CLI、Kimi Code、OpenCode、Pi、Hermes Agent 共 14 个客户端。
💡 提示：技能是自动触发的，不需要你手动调用——这点和"技能目录型"仓库（#10 / #16）的用法完全不同。

### 12. ayghri/i-have-adhd

- 地址：https://github.com/ayghri/i-have-adhd
- 简介：A skill to stop your coding agent from burying the answer. ADHD-friendly output.
- 语言：Python
- 今日新增：422 stars today
- 标签：输出风格、Agent Skills、反废话、可读性、极简

本期最有意思的新项目，也是一个"自我描述即文档"的范例——仓库名就是产品需求。它解决的是一个所有人都遇到过但没人做成技能的痛点：**Agent 把答案埋在一堆铺垫里**。规则只有三条：动作先行、步骤编号、不许说 "Hope this helps!"。副标题写得很体贴：*"ADHD-friendly outputs. No ADHD diagnosis needed!"*
安装方式也贴合它的主张——不需要记命令，直接把一句话粘进 CLI：
> `Install the i-have-adhd skill/plugin from https://github.com/ayghri/i-have-adhd, refer to the repo's AGENTS.md for instructions.`
README 已本地化到 7 种语言（含简体中文）。
与 #13 放在一起看，今天榜单上出现了两个**不教 Agent 新能力、只约束 Agent 表达方式**的项目，合计 +747。这是"做减法"路线在本期的具体形态。

### 13. multica-ai/andrej-karpathy-skills

- 地址：https://github.com/multica-ai/andrej-karpathy-skills
- 简介：A single CLAUDE.md file to improve Claude Code behavior, derived from Andrej Karpathy's observations on LLM coding pitfalls.
- 语言：无标注（纯 Markdown）
- 今日新增：325 stars today
- 标签：CLAUDE.md、Karpathy、极简主义、约束式提示、中文版

把 Karpathy 对 LLM 编码陋习的观察，压成**一个 CLAUDE.md 文件、四条原则**，并且每条都明确对应一个具体毛病：
这四条本质上是一份**反 LLM 默认倾向清单**，比通用"写好代码"类提示词锋利得多——它列的是模型的失败模式，不是人的期望。作者还做了中文版（`README.zh.md`）。
📌 数据备注：21.1 万 Star 是本期第二大（仅次于 superpowers），Fork/Star 10.2% 落在正常区间，未见明显异常；但对于一个单文件仓库，这个量级值得继续观察一两天。

### 14. browser-use/browser-use

- 地址：https://github.com/browser-use/browser-use
- 简介：🌐 Make websites accessible for AI agents. Automate tasks online with ease.
- 语言：Python
- 今日新增：320 stars today
- 标签：浏览器 Agent、网页自动化、MCP、云托管、老牌项目

11.3 万 Star 的老牌浏览器 Agent 框架回榜。主张朴素——让 Agent 像人一样用浏览器：开页面、点按钮、打字、填表，你描述任务它完成。README 里带了 `mcp-name: com.browser-use/browser-use` 声明，可作为 MCP server 直接挂载；同时提供云托管版本（cloud.browser-use.com）。
与 #5 camofox 对位看很有意思：**camofox 解决"网页不让我抓"**，**browser-use 解决"抓到之后怎么用"**。前者是基础设施层的对抗，后者是应用层的编排。两者同日在榜，且 camofox 涨幅（+645%）远高于 browser-use（新上榜）——说明当下瓶颈更集中在前者。

### 15. viarotel-org/escrcpy

- 地址：https://github.com/viarotel-org/escrcpy
- 简介：📱 Display and control your Android device graphically with scrcpy.
- 语言：JavaScript
- 今日新增：173 stars today
- 标签：Android 投屏、scrcpy GUI、多机控制、MCP、⚠️ 部分付费

给 scrcpy 套上图形界面（Electron），功能铺得很满：内嵌镜像窗口自动适配分辨率与方向、键盘映射（触摸/摇杆/滑动/滚动/自动化）、单窗口同时控制多台设备并广播输入、可拖拽重排的控制栏（旋转/截图/应用/文件/终端/AI 助手/自动化）、无线 ADB + 局域网自动发现 + Gnirehtet 反向共享网络、可视化多机窗口编排。
值得单独说的是它的 **Copilot**：基于 MCP 协议的 AI 助手，用自然语言控制 Android 设备，支持多模型对话；另有可视化自动化脚本编排，带屏幕图像识别与跨设备批量执行。这是"MCP 下沉到桌面 GUI 工具"的一个少见样本。

### 16. openai/plugins

- 地址：https://github.com/openai/plugins
- 简介：OpenAI Plugins
- 语言：JavaScript
- 今日新增：45 stars today
- 标签：插件示例、Codex、官方替代、Agent Skills、新仓库

本期排在最后一名，但它是**这份榜单上最该被点开的一个仓库**——因为它是 #10 `openai/skills` 的官方指定继任者。
结构是规范化的：每个插件位于 `plugins/<name>/`，必带 `.codex-plugin/plugin.json` 清单，可选 `skills/`、`.app.json`、`.mcp.json`、插件级 `agents/`、`commands/`、`hooks.json`、`assets/`；默认市场在 `.agents/plugins/marketplace.json`（API key 登录用户另有 `api_marketplace.json`）。
官方点名的完整示例包括：`figma`（Code to Canvas / Code Connect / 设计系统规则）、`notion`（规划/调研/会议/知识采集）、`build-ios-apps`、`build-macos-apps`、`build-web-apps`、`expo`、`netlify`、`remotion`、`google-slides`。
⚠️ **把 #10 和 #16 一起看**：已弃用的 `openai/skills` 今日 +490，官方继任者 `openai/plugins` 今日 +45 —— **弃用仓库的热度是替代品的 10.9 倍**。如果你是按榜单热度决定看哪个仓库，你会看错那个。自建 Codex 技能请直接看官方的 Build plugins 指南与本仓库。

## 观察

- openai/plugins 今日 45 stars today，是当日增量最高的项目之一。
- viarotel-org/escrcpy 今日 173 stars today，是当日增量最高的项目之一。
- browser-use/browser-use 今日 320 stars today，是当日增量最高的项目之一。
