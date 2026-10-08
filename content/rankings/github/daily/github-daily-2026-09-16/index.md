---
title: GitHub 每日趋势榜 2026-09-16
description: 2026-09-16 GitHub Trending 榜首为 alibaba/open-code-review，当日共收录 21 个项目。
date: '2026-09-16T08:00:00+08:00'
rankingKey: '2026-09-16'
slug: github-daily-2026-09-16
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

2026-09-16 GitHub Trending 共收录 21 个项目，榜首 alibaba/open-code-review（3,215 stars today）。语言分布：TypeScript 5、Python 5、JavaScript 3、Go 2、Swift 2、Rust 2。

## 重点项目

### 1. alibaba/open-code-review

- 地址：https://github.com/alibaba/open-code-review
- 简介：Fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.
- 语言：Go
- 今日新增：3,215 stars today
- 标签：AI 代码评审、确定性+Agent 混合、阿里开源、行级评论、多语言规则集

**今日最大信号，也是本系列第一个连续四个交易日加速的项目**：09-13 +438 → 09-14 +1,796 → 09-15 +2,751 → 09-16 +3,215，四日连涨且首次单日破 3,000。它真正的差别不在"再包一层 LLM"，而是**规则与模型分工**：内置 NPE、线程安全、XSS、SQL 注入的多语言规则集兜住确定性问题，LLM Agent 负责需要跨文件上下文的深度判断。
README 给了 AACR-Bench：50 个开源仓库、200 个真实 PR、10 种语言、80+ 高级工程师交叉标注的 1,505 条真值，结论是同模型下 F1 与 Precision 显著高于通用 Agent、**token 消耗约 1/9**，代价是 Recall 偏低（官方明说是"宁可少报不可噪报"的刻意取舍）。
Fork/Star 仅 7.1%，是全榜第二低——说明关注者以使用者为主而非二次开发者，这对工具类项目是健康信号。

### 2. JustVugg/colibri

- 地址：https://github.com/JustVugg/colibri
- 简介：Run frontier MoE models on hardware you already own — pure C, zero deps, experts streamed from disk. Tiny engine, immense model. 🐦
- 语言：C
- 今日新增：1,532 stars today
- 标签：MoE 推理、纯 C 零依赖、专家流式加载、消费级硬件、端侧

关键思路是把 MoE 的专家权重**留在磁盘上按需流式加载**，而不是整模型进显存，因此"tiny engine, immense model"。连续第三日在榜，今日 -24.7% 让出第一，但仍是本系列端侧推理方向最稳定的代表（09-14 +650 → 09-15 +2,035 → 09-16 +1,532）。
注意它和 voicebox 一样，README 的 contributors 里出现了 `@claude`——AI 参与开发在今天已不是需要特别标注的事。

### 3. cloudflare/security-audit-skill

- 地址：https://github.com/cloudflare/security-audit-skill
- 简介：A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings
- 语言：JavaScript
- 今日新增：1,249 stars today
- 标签：安全审计 Skill、Cloudflare 官方、六阶段流水线、独立验证、机器可读

**今日新上榜增量第一，也是本系列第一次有大厂把自家漏洞挖掘流水线开源成 Skill**。README 明确说这是 Cloudflare 那套漏洞发现 harness 的起点（那篇 *Build your own vulnerability harness* 博客），harness 后来长成了多阶段、全舰队运行的系统，这个 skill 是它演化出来的单仓起点。
六阶段设计值得单独看：① 侦察（产出 `architecture.md` + `coverage-ledger.json`）→ ② **覆盖率驱动的猎杀**（按账本单元分派隔离 hunter，另有 coverage critic 找缺口）→ ③ 候选验证（每个候选交给**全新的** verifier 尝试证伪）→ ④ 结构化输出（`confirmed` / `needs_validation` / `rejected` 三类，按 schema 校验）→ ⑤ 独立记录复核 → ⑥ 目标中立报告。
Fork/Star 5.9% 全榜最低，符合"skill 类项目以使用而非 fork 为主"的形态。

### 4. Tencent/WeKnora

- 地址：https://github.com/Tencent/WeKnora
- 简介：Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.
- 语言：Go
- 今日新增：1,201 stars today
- 标签：RAG 知识平台、腾讯开源、Auto-Wiki、多源接入、ReAct Agent

三条能力线并列：RAG 快速问答（日常查询）、ReAct Agent（自主编排检索 + MCP 工具 + 租户技能目录 + 会话级 Docker/E2B/Cube 沙箱 + 联网搜索，处理多步复杂任务）、以及全新的 **Wiki Mode**——让 Agent 把原始文档蒸馏成**自维护、互相链接的 markdown 知识库 + 交互式知识图谱**，带人工编辑、修订历史、一键回滚。
工程细节上有两个点比较实在：**跨会话长期记忆**（记住你是谁、你反复问什么）、**分块可编辑带版本历史**（检索分块能像文档一样编辑、diff、回滚）。多源接入覆盖飞书 wiki/飞书云盘/GitLab/腾讯 IMA/Notion/语雀/钉钉文档/RSS。
2.5 万 Star、13.8% Fork/Star，是本日体量最大的新上榜项目之一。

### 5. abue-ammar/tinycast

- 地址：https://github.com/abue-ammar/tinycast
- 简介：Tinycast — a tiny, fully native macOS launcher, hotkeys, and clipboard history.
- 语言：Swift
- 今日新增：1,076 stars today
- 标签：macOS 启动器、SwiftUI 原生、零第三方依赖、兼容 Raycast 扩展、AGPL-3.0

当日涨幅 +25.0%，在 5,374 Star 的基数上一天涨四分之一。卖点很明确：SwiftUI + AppKit、**零第三方依赖**、无 Electron、无遥测，官方称内存占用低于 100 MB。功能覆盖应用启动、全局/单应用热键、文件搜索、剪贴板历史（文本+图片）、内联计算器（含实时汇率与加密货币换算）、Quicklinks。
**真正的差异化是"跑真实 Raycast 扩展，用原生 SwiftUI 渲染"**——这等于直接继承了一个成熟扩展生态，而不必从零建自己的插件市场。这也是它最需要留意的地方：第三方扩展的执行边界和权限由谁来约束，README 未展开。
授权是 AGPL-3.0，且作者明确"免费且会一直免费"（因所在国无法使用 GitHub Sponsors，赞助走 Polar）。

### 6. NationalSecurityAgency/ghidra

- 地址：https://github.com/NationalSecurityAgency/ghidra
- 简介：Ghidra is a software reverse engineering (SRE) framework
- 语言：Java
- 今日新增：1,059 stars today
- 标签：逆向工程框架、NSA 开源、反汇编·反编译、老牌基建、稳态流量

连续第二日在榜，+755 → +1,059（**+40.3%**）。在 7.7 万 Star 的体量上当日涨幅 +1.4%，是今天所有"大盘项目"里涨得最猛的一个（其余全部在 0.8% 以下）——老牌基建出现这种级别的相对抬升通常对应一次版本发布或安全圈事件，本次未在 README 顶部看到公告，不作归因。
双用途属性，仅在自己拥有或已获授权的目标上使用。

### 7. affaan-m/ECC

- 地址：https://github.com/affaan-m/ECC
- 简介：The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.
- 语言：JavaScript
- 今日新增：1,046 stars today
- 标签：Agent Harness、技能与直觉、记忆系统、26 万 Star、长尾常客

掉榜一日后回归。它是本系列在榜次数最多的项目之一（09-09 记录时已"连续第九日在榜"），26 万 Star、Fork/Star 15.0%。
定位是"给 Agent 装装备"而非"给 Agent 定规矩"：skills、instincts、memory、security、research-first 开发，跨 Claude Code / Codex / Opencode / Cursor。今日增量 1,046 但当日涨幅仅 0.4%——**它是榜单里典型的"大盘稳态贡献者"**，绝对值好看、相对变化极小，读它要看总量而非涨幅。

### 8. alphaXiv/OpenResearch

- 地址：https://github.com/alphaXiv/OpenResearch
- 简介：Turn your coding agents into research agents
- 语言：Rust
- 今日新增：1,036 stars today
- 标签：研究型 Agent、本地优先、多 Agent 兼容、桌面应用、Rust·Tauri

**今日当日涨幅第一（+33.8%），也是本日最重要的一条反向证据**。它在 09-15 新上榜 +593（+24.0%），当时报告按历史规律判断它"最符合次日大跌"，结果今日 +1,036（**+74.7%**）连续第二日上涨，直接打破规律。
形态是本地优先的桌面工作区（macOS/Windows beta/Linux），让 Claude Code、Codex 这类编码 Agent 去跑文献检索、形成假设、执行实验、产出研究产物；可接 LM Studio / oMLX / Ollama / 自定义端点与 OpenCode 用本地模型。
风险点仍然成立：基数小（4.1k Star / 261 Fork），README 上的 "#1 Repository of the Day" 是第三方 TrendShift 徽章不是 GitHub 官方排名，安装走 `curl -LsSf … | sh`。**至少要看到连续三日在榜才谈得上趋势**。

### 9. Lakr233/vphone-cli

- 地址：https://github.com/Lakr233/vphone-cli
- 简介：Boot a virtual iPhone via Apple's Virtualization.framework using PCC research VM infrastructure.（仓库 About 为空，此句取自 README 首行）
- 语言：Swift
- 今日新增：907 stars today
- 标签：iOS 虚拟化、Virtualization.framework、命令行、⚠️ 需放宽 SIP·AMFI、⚠️ 越狱变体

用 Apple 官方的 Virtualization.framework 配合 PCC 研究 VM 基础设施，在 Apple Silicon Mac 上跑起虚拟 iOS。一条 `vphone-cli vm create myphone` 走完下载 → 打补丁 → DFU 恢复 → 安装 → 首次启动全流程，另有 clone / export / import / rename 等完整 VM 生命周期命令（clone 用 APFS 快速克隆并刷新设备身份）。
⚠️ **前置条件很硬，也是本项目最大的风险**：需要 Apple Silicon + macOS 15+ + Xcode，并且**必须放宽 SIP/AMFI 才能给未签名二进制使用私有 PV=3 entitlements**；README 还提供了 `-V jb` 越狱变体。这会显著降低整机安全基线，且处于 Apple 授权条款的灰色地带，**不建议在任何存有生产数据或个人数据的机器上尝试**。

### 10. ever-co/ever-gauzy

- 地址：https://github.com/ever-co/ever-gauzy
- 简介：Ever® Gauzy™ - Open Business Management Platform (ERP/CRM/HRM/ATS/PM) - https://gauzy.co
- 语言：TypeScript
- 今日新增：771 stars today
- 标签：ERP·CRM·HRM、开源商业平台、TypeScript、⚠️ AGPL-3.0、跨仓导流

**今日最需要修正的一条**。09-14 报告判定其 +1,787.9% 来自同组织跨仓导流、不可读作产品采纳度；09-15 回落 -42.3% 被记为"如期退潮，判据对了"；**今日 +22.0% 回升，说明那条判断被推翻**——单日回落同样不等于趋势结束（详见 3.4 判据复核）。
Fork/Star 15.2% 是全榜最高，符合"部署型项目"特征（用户 clone 后自建而非贡献代码）。授权 AGPL-3.0，网络服务化同样触发源码开放义务，商用/SaaS 化前需法务确认。

### 11. multimodal-art-projection/YuE

- 地址：https://github.com/multimodal-art-projection/YuE
- 简介：YuE2: frontier music generation with symbolic planning, zero-shot covers, and agentic music editing.
- 语言：Python
- 今日新增：701 stars today
- 标签：音乐生成、符号化规划、零样本翻唱、Agent 可编辑、对标 Suno

YuE2 的核心不是"直接生成波形"，而是**先产出旋律与和弦的符号化计划，再按计划渲染成完整歌曲**（人声 + 伴奏）。这意味着旋律与和弦变成了人/Agent 可读、可检查、可编辑的显式控制量——官方称之为 white-box music generation。由此派生两个能力：零样本翻唱（把转写出的歌重新演绎成新风格）与 agentic 编辑（通过对话改谱面、配器、歌词，且用同一个生成 checkpoint）。
README 自陈在 WildSongBench 上 best-of-8 达 6.9632 SongBench 均分，与 Suno v5/v6 可比；团队正在跑公开盲听投票（Music Arena）。另有配套的 Agent skill 入口。
风险：零样本翻唱与风格迁移涉及音乐版权，商用前确认授权。

### 12. SnailSploit/Claude-Red

- 地址：https://github.com/SnailSploit/Claude-Red
- 简介：claude-red is a curated library of offensive security skills designed for the Claude skills system. Each skill is a structured SKILL.md file that primes Claude with expert-level methodology for a specific attack surface — from SQLi to shellcode, EDR evasion to exploit development.
- 语言：Python
- 今日新增：699 stars today
- 标签：攻击性安全 Skill、Claude Skills、SQLi·Shellcode、EDR 规避、⚠️ 授权要求

掉榜一日后回归（09-15 记录为 +606，09-16 +699）。把攻防能力打包成结构化 SKILL.md 分发，覆盖从 SQL 注入到 shellcode、从 EDR 规避到漏洞利用开发。
⚠️ **与今天的 security-audit-skill 构成一组有意思的对照**：同样是"把安全方法论做成 Agent Skill"，一个是防御方的六阶段审计 + 独立证伪 + 机器可读结论，一个是攻击方的方法论库。**只在自己拥有或已明确书面授权的目标上使用**，这是不可越过的红线。

### 13. addyosmani/agent-skills

- 地址：https://github.com/addyosmani/agent-skills
- 简介：Production-grade engineering skills for AI coding agents.
- 语言：JavaScript
- 今日新增：656 stars today
- 标签：工程技能集、AI 编码 Agent、生产级、Chrome 团队、长尾常客

连续第二日在榜且 +85.3%（354 → 656），是留存 6 席里涨幅第二大的。9.5 万 Star、Fork/Star 10.6%，是本系列出现频次最高的技能包之一。
定位稳定：面向生产环境的工程纪律（质量门禁、测试金字塔、安全、性能、代码审查），不是提示词技巧合集。今日增量绝对值不小但当日涨幅仅 0.7%，同样属于**大盘稳态贡献者**。

### 14. jamiepine/voicebox

- 地址：https://github.com/jamiepine/voicebox
- 简介：The open-source AI voice studio. Clone, dictate, create.
- 语言：TypeScript
- 今日新增：409 stars today
- 标签：本地语音 I/O、声音克隆、ElevenLabs·WisprFlow 替代、7 TTS 引擎、23 语言

新上榜。README 的定位讲得很清楚：ElevenLabs 占据语音 I/O 环路的**输出**半边，WisprFlow 占据**输入**半边，Voicebox 两边都做，用内置的本地 LLM 做润色并配 per-profile persona，全程在本机运行。
配置：7 个 TTS 引擎（Qwen3-TTS、Qwen CustomVoice、LuxTTS、Chatterbox Multilingual/Turbo、HumeAI TADA、Kokoro）、零样本声音克隆或 50+ 预设音色、23 种语言、后期效果链（变调/混响/延迟/合唱/压缩/滤波）、副语言标签（`[laugh]` `[sigh]` `[gasp]`）。隐私卖点是模型、声音数据与录音都不出本机。
⚠️ 声音克隆能力天然带声纹滥用风险，部署时留意知情同意与用途边界。
注：这与本系列此前多日在榜的 **debpalash/VoiceStudio** 是**两个不同的项目**（后者今日掉榜）。

### 15. roboflow/supervision

- 地址：https://github.com/roboflow/supervision
- 简介：We write your reusable computer vision tools. 💜
- 语言：Python
- 今日新增：217 stars today
- 标签：计算机视觉工具库、可复用组件、检测·跟踪、模型无关、老牌基建

新上榜。5 万 Star 的 CV 基建，提供与模型无关的检测/分割/跟踪结果处理、标注可视化、区域计数、数据集格式转换等可复用组件。当日涨幅 0.4%，典型稳态流量。

### 16. anthropics/claude-code

- 地址：https://github.com/anthropics/claude-code
- 简介：Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.
- 语言：TypeScript
- 今日新增：155 stars today
- 标签：终端编码 Agent、Anthropic 官方、14.5 万 Star、稳态流量、Fork 率全榜最高

14.5 万 Star，Fork/Star 16.1% 为全榜最高。当日涨幅 0.1%，是今天"刻度尺"里最典型的大盘样本。

### 17. supabase/supabase

- 地址：https://github.com/supabase/supabase
- 简介：The Postgres development platform. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications.
- 语言：TypeScript
- 今日新增：118 stars today
- 标签：Postgres 开发平台、开源后端、10.9 万 Star、稳态流量、非 AI

新上榜。10.9 万 Star，当日涨幅 0.1%。今日 21 席里的非 AI 项目之一。

### 18. cline/cline

- 地址：https://github.com/cline/cline
- 简介：Autonomous coding agent as an SDK, IDE extension, or CLI assistant.
- 语言：TypeScript
- 今日新增：102 stars today
- 标签：自主编码 Agent、SDK·IDE·CLI、6.8 万 Star、稳态流量、人工确认

新上榜。6.8 万 Star，提供三种集成形态（SDK / IDE 扩展 / CLI）。以"每一步人工确认"的执行模式著称，与全自动 harness 路线形成对照。当日涨幅 0.15%。

### 19. anthropics/knowledge-work-plugins

- 地址：https://github.com/anthropics/knowledge-work-plugins
- 简介：Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork
- 语言：Python
- 今日新增：96 stars today
- 标签：Claude 插件、知识工作者、11 个职能包、企业连接器、Cowork

Anthropic 开源 11 个面向具体职能的插件（productivity / sales / customer-support / product-management / marketing / legal / finance 等），**每个插件打包 skills + connectors + slash commands + sub-agents**。面向 Claude Cowork，同时兼容 Claude Code。
它的思路值得记一句：官方明说开箱只是"给该岗位一个强起点"，真正的价值在于**按公司自己的工具、术语、流程去定制**。连接器覆盖 Slack、Notion、Asana、Linear、Jira、HubSpot、Intercom、Figma、Amplitude、Microsoft 365 等一大批企业 SaaS。
⚠️ 这类插件的实质是把企业内部数据源接到模型上下文里，启用前需过一遍数据外发与权限边界。

### 20. rlaope/oh-my-hermes

- 地址：https://github.com/rlaope/oh-my-hermes
- 简介：All in one plugin for Hermes Agent ⚚ the coding intelligence, a long-term memory system and model optimized workflow packages
- 语言：Python
- 今日新增：74 stars today
- 标签：Hermes Agent 插件、长期记忆、工作流包、小基数、NousResearch 生态

新上榜。给 NousResearch 的 Hermes Agent 提供长期记忆系统 + 按模型优化的工作流包。基数很小（2.5k Star / 180 Fork），+74 的绝对量在今日榜单里垫底区间，属于"边缘上榜"，暂不作为趋势信号。

### 21. ankitects/anki

- 地址：https://github.com/ankitects/anki
- 简介：Anki is a smart spaced repetition flashcard program
- 语言：Rust
- 今日新增：50 stars today
- 标签：间隔重复、记忆卡片、开源老牌、稳态流量、非 AI

末位 +50，定义了今天的上榜门槛。3 万 Star 的老牌非 AI 项目，当日涨幅 0.16%。

## 观察

- alibaba/open-code-review 今日 3,215 stars today，居当日增量第 1 位。
- JustVugg/colibri 今日 1,532 stars today，居当日增量第 2 位。
- cloudflare/security-audit-skill 今日 1,249 stars today，居当日增量第 3 位。
