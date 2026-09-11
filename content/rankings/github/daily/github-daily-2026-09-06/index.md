---
title: GitHub 每日趋势榜 2026-09-06
description: 2026-09-06 GitHub Trending 榜首为 mattpocock/skills，当日共收录 18 个项目。
date: '2026-09-06T08:00:00+08:00'
rankingKey: '2026-09-06'
slug: github-daily-2026-09-06
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

2026-09-06 GitHub Trending 共收录 18 个项目，榜首 mattpocock/skills（2,206 stars today）。语言分布：TypeScript 6、JavaScript 5、Python 4、Shell 1、HTML 1、LLVM 1。

## 重点项目

### 1. mattpocock/skills

- 地址：https://github.com/mattpocock/skills
- 简介：Skills for Real Engineers. Straight from my `.agents` directory.
- 语言：Shell
- 今日新增：2,206 stars today
- 标签：Agent 技能、工程实践、反 vibe coding、TDD、个人方法论

Matt Pocock 把自己 `.agents` 目录原样开源的一套 Claude Code / Codex 技能。定位一直是"给真正写工程的人用的技能"，强调测试先行、小步提交、拒绝 vibe coding 式的一次性生成。今日 2,206 是它在榜期间的第二高值，稳居第一已连续两日，也是本周唯一一个四天都保持 2,000+ 量级的项目——在当前普遍回落的榜单里，它的稳定性比峰值更值得注意。

### 2. DietrichGebert/ponytail

- 地址：https://github.com/DietrichGebert/ponytail
- 简介：Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.
- 语言：JavaScript
- 今日新增：1,539 stars today
- 标签：做减法、代码极简、Agent 技能、降本、代码审查

"让 AI 像房间里最懒的资深工程师那样思考"——核心主张是不写代码的代码才是最好的代码，通过技能约束 Agent 优先复用、少造轮子、少写样板。今日 +1,539，较昨日 +2,813 回落 45.3%，让出榜首。回落幅度看起来大，但要注意它昨日是"一日夺回第一"的脉冲高点（-45% 之后仍有 1,539，仍高于 09-03 的 2,138 之外的多数日子），属于高位回踩而非掉队。

### 3. affaan-m/ECC

- 地址：https://github.com/affaan-m/ECC
- 简介：The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.
- 语言：JavaScript
- 今日新增：1,486 stars today
- 标签：Agent Harness、多平台、记忆系统、安全约束、工程方法论

跨 Claude Code / Codex / Opencode / Cursor 的 Agent Harness 优化系统，把技能、直觉（instincts）、记忆、安全策略打包成一套方法论。今日 +1,486，较昨日 +1,325 再涨 12.2%，是前八名中**唯一逆势上涨**的项目，也是三日连涨。Fork/Star 比 0.150 在头部里偏高，说明使用者倾向于 fork 改造而非单纯收藏，属"真的在用"型项目。

### 4. blader/humanizer

- 地址：https://github.com/blader/humanizer
- 简介：Agent skill that removes signs of AI-generated writing from text.
- 语言：Python
- 今日新增：748 stars today
- 标签：去 AI 味、文本改写、Agent 技能、写作、风格迁移

专门擦除"AI 写作痕迹"的技能——破折号堆砌、三段式排比、"不仅仅是……更是……"这类句式。今日 +748，较昨日 +988 回落 24.3%，与 ponytail 一起构成"做减法"赛道，两者合计 2,287 / 22.1%（昨日 3,801 / 29.5%）。赛道降温但仍占两成以上，是当前最稳定的细分方向之一。

### 5. cathrynlavery/diagram-design

- 地址：https://github.com/cathrynlavery/diagram-design
- 简介：38 editorial diagram types for Claude Code, Codex, and Pi. Self-contained HTML + SVG. No shadows. No Mermaid slop.
- 语言：HTML
- 今日新增：621 stars today
- 标签：图表生成、编辑级设计、HTML+SVG、Agent 技能、审美治理

38 类"编辑级"图表模板，自带 HTML+SVG、无阴影、明确拒绝 Mermaid 默认样式。今日 +621，较昨日 +852 回落 27.1%，结束了"连续两日翻倍"的陡峭增长，转入平台期。它的意义在于把 AI 输出治理从代码（ponytail）和文字（humanizer）推进到了**视觉输出**——三个方向正好覆盖 Agent 产物的三种形态。

### 6. magnitudedev/magnitude

- 地址：https://github.com/magnitudedev/magnitude
- 简介：Open source inference server that runs the best local models for your hardware, plugged into the agent you already use. Works with Pi, OpenCode, Hermes, OpenClaw, Codex, Claude Code, Oh My Pi, and Cline.
- 语言：TypeScript
- 今日新增：604 stars today
- 标签：本地推理、推理服务器、Agent 后端、离线、硬件自适应

本地推理服务器，按你的硬件挑最优模型，然后接进你已经在用的 Agent（Pi / OpenCode / Hermes / Codex / Claude Code 等 8 个）。今日新增 604，相对于 3,523 的总量意味着**一天涨约 20.7%**（正确算法是 604/(3,523-604)，不是 604/3,523）。它是本期增长质量最高的项目之一——不追求替代某个 Agent，而是做所有 Agent 的本地模型后端。

### 7. anomalyco/opencode

- 地址：https://github.com/anomalyco/opencode
- 简介：The open source coding agent.
- 语言：TypeScript
- 今日新增：552 stars today
- 标签：编码 Agent、TUI、多模型、客户端服务端、开源

开源编码 Agent 的老牌选手，TUI + 客户端/服务端架构 + 多模型后端。今日 +552，较昨日 +725 回落 23.9%。在这个几乎被"技能包"占满的榜单里，opencode 是少数仍在增长的**运行时**项目（与之同类的只有 hermes-agent、ruflo、magnitude 四个），值得单独标记——技能包解决"怎么干"，运行时解决"谁来干"。

### 8. NousResearch/hermes-agent

- 地址：https://github.com/NousResearch/hermes-agent
- 简介：The agent that grows with you.
- 语言：Python
- 今日新增：520 stars today
- 标签：自我改进、长期记忆、自托管、多端接入、学习闭环

Nous Research 出品的"自带学习闭环"Agent：任务后自主沉淀技能、技能在使用中自我改进、FTS5 全文检索自己的历史会话、用 Honcho 建立跨会话的用户模型。兼容 agentskills.io 开放标准，可跑在 5 美元 VPS 上并用 Telegram 远程指挥。今日 +520，较昨日 +573 小幅回落 9.2%，是前八里跌幅最小的之一。Fork/Star 比 0.206 为全榜最高，部署改造率极高。

### 9. humanlayer/skills

- 地址：https://github.com/humanlayer/skills
- 简介：来自 HumanLayer 的 Claude Code 技能集合（仓库 About 为空，取自 README）。包含 `improve-claude-md`（用 `<important if>` 块重写 CLAUDE.md 提升指令遵循率）、`narrow-react-prop-types`、`build-iterated-agentic-loop`、`design-control-loop`（用控制论的传感器/控制器/执行器框架为你的代码库设计 Agent 控制回路）、`show-me` 五个技能。
- 语言：TypeScript
- 今日新增：451 stars today
- 标签：Claude Code、控制回路、CI 自动化、Agent 技能、React

昨日（+1,141）以"新上榜增量第一"姿态出现，今日 +451 回落 **60.5%**，是全榜跌幅最大的项目。这已经是连续第三天出现同一规律：单日暴涨的新项目次日普遍回吐 50%+。它本身仍有价值——把技能从"提示词技巧"推进到"Agent 控制回路 + 定时 CI 工作流"是榜单上独有的方向——但**判断趋势不能只看它上榜那天**。

### 10. BraveOPotato/FckSignups

- 地址：https://github.com/BraveOPotato/FckSignups
- 简介：A list of tools that are open-source, in-browser, and require no-signups!
- 语言：TypeScript
- 今日新增：436 stars today
- 标签：工具导航、免注册、浏览器端、开源替代、资源聚合

收录"开源 + 浏览器内可用 + 不用注册"的工具清单。今日从昨日 +50 暴涨到 +436（**+772%**），是全榜增幅之最，单日涨幅约 16.1%。一个纯资源列表能有这个量级，说明"不想注册、不想把数据交给 SaaS"的情绪在当前开发者群体里有相当强的共鸣。

### 11. ruvnet/ruflo

- 地址：https://github.com/ruvnet/ruflo
- 简介：The original agent meta-harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, RAG integration, and native Claude Code / Codex / Hermes integration.
- 语言：TypeScript
- 今日新增：276 stars today
- 标签：多智能体、Swarm、自学习记忆、元框架、MCP

即更名前的 **Claude Flow**——`npx ruflo init` 给 Claude Code 装一套"神经系统"：多 Agent 自组织成 swarm、跨会话记忆、联邦跨机通信、企业安全护栏，底层是 Rust 引擎 + Cognitum.One 架构。今日 +276，较昨日 +127 **翻倍（+117.3%）**，是留存入项中少数逆势翻红的。更名后仍沿用 `claude-flow` 的包名，初次接触容易混淆。

### 12. OpenWhispr/openwhispr

- 地址：https://github.com/OpenWhispr/openwhispr
- 简介：Voice-to-text dictation app with local (Nvidia Parakeet/Whisper) and cloud models (BYOK). Privacy-first and available cross-platform.
- 语言：JavaScript
- 今日新增：274 stars today
- 标签：语音转写、本地优先、隐私、跨平台、Electron

WisprFlow / Granola 的开源免费替代。按住热键说话、文字直接落到光标处；可选本地离线转写（Whisper / NVIDIA Parakeet，音频不出设备）或云端加速。除听写外还有会议转写（自动识别 Zoom/Teams/FaceTime + 本地说话人分离）、笔记语义搜索、MCP 服务器。技术栈 React 19 + Electron 41 + whisper.cpp + sherpa-onnx，MIT。今日新上榜 +274，单日涨幅约 4.0%。

### 13. coreyhaines31/marketingskills

- 地址：https://github.com/coreyhaines31/marketingskills
- 简介：Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.
- 语言：JavaScript
- 今日新增：172 stars today
- 标签：营销、CRO、SEO、Agent 技能、增长工程

50+ 个营销技能，按 SEO/内容、CRO、文案、付费投放与衡量、增长留存、销售 GTM、策略七大类组织，所有技能执行前都先读 `product-marketing` 基线来理解产品与定位，技能之间还有交叉引用（如 `cro` ↔ `ab-testing` ↔ `copywriting`）。兼容 Claude Code / Codex / Cursor / Windsurf 及任何支持 Agent Skills 规范的 Agent。它的上榜意义在于——**技能包开始从工程岗扩散到非工程职能岗**。

### 14. aipoch/open-science

- 地址：https://github.com/aipoch/open-science
- 简介：开源、本地优先、模型无关的 AI 科研工作台，支持 macOS/Windows/Linux，含科学 Agent、Python/R 笔记本、数据连接器与可复现溯源。
- 语言：TypeScript
- 今日新增：145 stars today
- 标签：科研工作台、本地优先、可复现、模型无关、笔记本

主打"可复现科学"（reproducible science），带 Zenodo DOI（10.5281/zenodo.22252246），自称 BiomniBench-DA Public 50 榜首，Apache-2.0，提供中英日等多语 README。Fork/Star 比仅 0.063，为全榜最低——收藏远多于改造，符合科研工具类项目的典型画像。今日 +145，单日涨幅约 4.0%。

### 15. The-Swarm-Corporation/AutoHedge

- 地址：https://github.com/The-Swarm-Corporation/AutoHedge
- 简介：Build your autonomous hedge fund in minutes. AutoHedge harnesses the power of swarm intelligence and AI agents to automate market analysis, risk management, and trade execution.
- 语言：Python
- 今日新增：137 stars today
- 标签：量化交易、多智能体、Solana、风险敏感、Swarms

企业级自治对冲基金框架，多 Agent 流水线：Director 生成策略 → Quant 做技术/统计分析 → Risk Manager 定仓位 → Execution 下单，输出结构化 JSON 并全程日志。基于 Swarms 框架，当前**完整支持 Solana 全自动交易**，Coinbase 在路上。
> ⚠️ **风险提示**：该项目的配置里需要填 `WALLET_PRIVATE_KEY`（钱包私钥）并会真实下单。请仅在小额隔离钱包 + 只读/沙盒环境中试用，切勿把主钱包私钥写入任何 Agent 配置；此外自动化交易在多数司法辖区受金融监管约束，实盘前请确认合规。

### 16. Stremio/stremio-web

- 地址：https://github.com/Stremio/stremio-web
- 简介：Stremio - Freedom to Stream.
- 语言：JavaScript
- 今日新增：121 stars today
- 标签：流媒体、媒体中心、Web 客户端、开源、插件生态

Stremio 的 Web 客户端，开源流媒体中心，靠插件生态聚合内容源。本期唯一与 AI 完全无关的"常规开源软件"之一（另一个是 LLVM），+121 的增量也说明它更多是自然增长进榜。

### 17. openai/skills

- 地址：https://github.com/openai/skills
- 简介：Skills Catalog for Codex.
- 语言：Python
- 今日新增：44 stars today
- 标签：Agent 技能、Codex、官方、已废弃、规范参考

OpenAI 官方的 Codex 技能目录，分 `.system`（随 Codex 自动安装）/ `.curated` / `.experimental` 三级，可用 `$skill-installer` 按名安装。
> ⚠️ **重要**：README 顶部已明确标注 **"This repository is deprecated."**——官方要求改用 [openai/plugins](https://github.com/openai/plugins) 仓库，或按 Codex 官方的 *Build plugins* 指南创建 skill-only 插件。也就是说**这个仓库今日仍在榜，但已不再维护**，请不要把它当作现行参考实现；若要参考 OpenAI 的官方技能规范，应去看 openai/plugins。

### 18. llvm/llvm-project

- 地址：https://github.com/llvm/llvm-project
- 简介：The LLVM Project is a collection of modular and reusable compiler and toolchain technologies.
- 语言：LLVM
- 今日新增：35 stars today
- 标签：编译器、工具链、基础软件、C++、存量基建

编译器与工具链的基石项目。+35 就足以进入日榜，配合第 17 名 openai/skills 的 +44，直接说明了**今日榜单尾部的准入门槛极低**——这是判断"整体热度下行"最直观的信号，比总量数字更能说明问题。

## 观察

- llvm/llvm-project 今日 35 stars today，是当日增量最高的项目之一。
- openai/skills 今日 44 stars today，是当日增量最高的项目之一。
- Stremio/stremio-web 今日 121 stars today，是当日增量最高的项目之一。
