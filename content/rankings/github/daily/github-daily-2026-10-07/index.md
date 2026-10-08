---
title: GitHub 每日趋势榜 2026-10-07
description: 2026-10-07 GitHub Trending 榜首为 morluto/rea，当日共收录 13 个项目。
date: '2026-10-07T08:00:00+08:00'
rankingKey: '2026-10-07'
slug: github-daily-2026-10-07
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

2026-10-07 GitHub Trending 共收录 13 个项目，榜首 morluto/rea（4,666 stars today）。语言分布：TypeScript 3、JavaScript 3、Shell 1、C++ 1、Python 1、HTML 1。

## 重点项目

### 1. morluto/rea

- 地址：https://github.com/morluto/rea
- 简介：Reverse engineer anything with agents, from app behavior down to native binaries.（用 Agent 逆向一切，从应用行为一路下探到原生二进制。）
- 语言：TypeScript
- 今日新增：4,666 stars today
- 标签：Agent 逆向工程、MCP 工具链、本地优先、MIT、增量第一

昨天判定它"首次在榜即头名"，今天它把 Amplification 的倍数直接写到了日志里：**+2,963 → +4,666（+57.5%）**，
总 Star 从 7,617 涨到 12,813，真实增量 5,196 甚至高于日榜计数器的 4,666（差 −10.2%，说明还有一部分星没被 24h 窗口圈进）。
日增速 **57.27% 全榜最高**。README 的结构也变好了：新增 Ubuntu/Ghidra/Hopper 的分语言安装说明与多条语言版本。
能力边界上它把自己讲得很清楚：**一个 MCP 打通原生二进制、JS/Electron 应用、.NET 程序集与网站四层**，
"分析工具与被启动的目标进程**都以你的用户权限运行**"，且明说 *"Process Capture records behavior and is not a security sandbox"*——
**它不是沙箱**。原生 UI 捕获依赖 macOS 的辅助功能与屏幕录制授权；静态 JS 分析不需要 Hopper/Ghidra，原生分析才需要，
setup 可在你同意后替你安装 Hopper（独立商业许可）。优点是默认纯本地：*"REA does not upload the app to a hosted analysis service"*。
> **⚠️ 合规使用提示**：逆向工程能力的合法性高度依赖你对目标是否有授权。用它分析第三方闭源程序前，
> 请先确认授权范围与适用法律（项目自身已在 Disclaimer 中把这一点交回给使用者）。

### 2. mattpocock/skills

- 地址：https://github.com/mattpocock/skills
- 简介：Skills for Real Engineers. Straight from my .agents directory.（给真正写代码的工程师用的技能集，直接从我的 .agents 目录里搬出来。）
- 语言：Shell
- 今日新增：1,406 stars today
- 标签：反 vibe coding 技能集、grill-me 对齐、MIT、第 18 次在榜、连续第二日

回归第二日就从 +1,028 涨到 **+1,406（+36.8%）**，重回破千俱乐部，是本系列在榜次数最多的项目。
它的卖点一如既往地反"氛围编程"：README 开篇就点名 **`grill-me` / `grill-with-docs`**——在动手前逼 Agent 反过来盘问你
需求细节，而不是直接吐代码。Fork/Star 8.38%，Fork 绝对数 23,382 为全榜最高。
需要注意：README 正文里挂着 newsletter 推广位；**open issues 由 10-06 报告记载的 419 变成今日 API 的 153**
（本日重新拉取 REST API 复核后仍为 153，差异疑为批量清理，已在数据说明记录待后续观察）。

### 3. boykopovar/AnyPS5

- 地址：https://github.com/boykopovar/AnyPS5
- 简介：Tool for automatic PS5 executables porting to Linux and Windows.（把 PS5 可执行程序自动移植到 Linux 与 Windows 的工具。）
- 语言：C++
- 今日新增：2,725 stars today
- 标签：PS5 可执行程序移植、relinker+PRX、GPL-2.0、第 3 次在榜、全榜涨幅第一

今日最大事件之一。**+943 → +2,725，涨幅 +189.0%，是全榜涨幅第一**，名次从昨日的第 5 位跳到第 2 位，
日增速 43.19%（2,725 / 6,309）仅次于 rea。它不是 AI 项目，靠的是硬核工程密度：
内置 **relinker**（把可执行文件转成目标系统原生格式）+ **自行实现的 PRX 系统库**，
README 明确写着 **"No emulation or separate runtime process"**（没有模拟层，也没有独立运行时进程），
着色器重编译器已能产出 **SPIR-V**（可用 SPIRV-Tools 校验），并给出了已验证游戏清单——
Dreaming Sarah 在 GTX 1050 Ti / i5-7500 上稳定 60 fps。
同量级 Community Note：它**明确不支持也不分发固件与密钥**，Disclaimer 写明仅用于互操作、研究、保存与兼容目的，
**合法性由使用者自行保证**（原文：*"It does not include, distribute, or require copyrighted software, firmware,
cryptographic keys, or proprietary libraries"*）。231 open issues 为全榜第二高。

### 4. ayghri/i-have-adhd

- 地址：https://github.com/ayghri/i-have-adhd
- 简介：A skill to stop your coding agent from burying the answer. ADHD-friendly output.（一个阻止你的编码 Agent 把答案埋起来的技能，输出对 ADHD 友好。）
- 语言：Python
- 今日新增：620 stars today
- 标签：ADHD 友好输出、10 条输出规则、MIT、第 5 次在榜、连续第二日

隔 25 天回归后第二天就从 +318 涨到 **+620（+95.0%）**，是本系列的常青面孔（曾在 09-09 拿过 +4,624）。
它的内容极简——**10 条输出规则**（README 原文 *"10 rules"*），第一条就是 *"Lead with the next action"*：
先给下一步动作，再给解释。这在今天一堆"大而全的技能包"里反而是最容易落地的一个。
10-06 报告标注的"16 天未推送"今日已归零。

### 5. cathrynlavery/diagram-design

- 地址：https://github.com/cathrynlavery/diagram-design
- 简介：Editorial diagram design for Claude Code, Codex, GitHub Copilot, Factory Droid, and Pi. 42 diagram types. Self-contained HTML + SVG. No shadows. No Mermaid slop.（面向 Claude Code、Codex、GitHub Copilot、Factory Droid 与 Pi 的编辑级图表设计：42 种图表类型，自包含 HTML+SVG，无阴影，没有 Mermaid 那套糊弄产物。）
- 语言：HTML
- 今日新增：828 stars today
- 标签：42 种图表类型、自包含 HTML+SVG、MIT、第 8 次在榜、连续第二日

昨日刚以全榜末位（+227）回归，今日直接 **+828（+264.8%，全榜涨幅第二）**，从末位跳到第 6 位——
这是 6p 说的"刚进榜、计数器未填满"的典型反例：昨日的 +227 确实只是回归首日的半截数据，今天才补齐。
README 里最有意思的一段是品牌 token 提取：它会**读取你的站点**再建议一组色板，经你确认后写入
`references/style-guide.md`。托管安装方式下，包更新会覆盖这个文件，需要走 `~/.diagram-design/profiles/` 存 profile。

### 6. addyosmani/agent-skills

- 地址：https://github.com/addyosmani/agent-skills
- 简介：Production-grade engineering skills for AI coding agents.（面向 AI 编码 Agent 的生产级工程技能集。）
- 语言：JavaScript
- 今日新增：453 stars today
- 标签：生产级技能集、质量门禁、MIT、第 15 次在榜、隔 2 天回归

上次在榜是 10-04（+336），缺勤 10-05、10-06 两天后今天回来并拿到 +453，比缺勤前还高 34.8%。
它是今天 A 簇里唯一挂着完整 CI badge 与贡献者名录的技能包式仓库，README 的组织方式是"把资深工程师的工作流、
质量门禁与最佳实践编码成 Agent 可直接调用的技能"。Fork/Star **10.48%** 为 Agent 技能类里最高（skills 8.38%），
说明被二次分发的比例很高。停更 3 天是全榜第二长（仅次于 security-audit-skill 的 22 天）。

### 7. EpicGames/raddebugger

- 地址：https://github.com/EpicGames/raddebugger
- 简介：A native, user-mode, multi-process, graphical debugger.（原生、用户态、多进程的图形化调试器。）
- 语言：**C**
- 今日新增：82 stars today
- 标签：原生图形调试器、RDI+Linker、ALPHA、API=MIT、首次在榜

今天唯一的"老派硬核工具"，也是全榜唯一用 **C** 的项目。它由 Epic 维护，README 的自我介绍很克制：
**currently in *ALPHA***，且**目前只支持本地 Windows x64 + PDB**（Linux 与 DWARF 还在计划里）。
真正值得关注的是它带的另外两件东西：**RAD Debug Info（RDI）**——一个自研调试信息格式（PDB/DWARF 按需转换进 RDI），
以及**面向超大 PE/COFF 可执行文件优化性能的 RAD Linker**。也就是说它不只是个调试器，而是在替换整套原生工具链的调试层。
三个"倒数"同时落在它身上：Fork/Star **4.86%**（全榜第二低）、315 open issues（全榜第二高）、+82 增量（倒数第二）。
README 里没有 license 字样，许可信息只能以 API 的 MIT 为准。

### 8. thedotmack/claude-mem

- 地址：https://github.com/thedotmack/claude-mem
- 简介：Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More（为每个 Agent 提供跨会话的持久上下文——捕获 Agent 在会话中的一切行为，用 AI 压缩，再把相关上下文注回后续会话。支持 Claude Code、OpenClaw、Codex、Gemini、Hermes、Copilot、OpenCode 等。）
- 语言：TypeScript
- 今日新增：578 stars today
- 标签：跨会话记忆、上下文压缩、默认云端托管、Apache-2.0、连续第五日

连续第五日在榜，但 **+536 → +578，只涨 7.8%**，是全榜最"稳"也最缺乏弹性的一项——
在一个普遍放大的榜单里连续两日几乎不动，名次从上不去也下不来（增量降序第 8、页面第 8），
是今天唯一体现出"产品已过爆发期、转入稳态存量"的位置。
它的产品定位没变：**把你所有会话里的 Agent 行为全部捕获 → AI 压缩 → 注回未来会话**，
覆盖面已经铺到 Claude Code / OpenClaw / Codex / Gemini / Hermes / Copilot / OpenCode。
**默认是 CMEM Pro 云端托管记忆**，本地模式要显式开启；另有 **Cloud Sync** 会把记忆备份到 cmem.ai。
安装过程需要浏览器登录换取 memory key。把一整年的会话上下文交出去之前，值得先想清楚。

### 9. manaflow-ai/cmux

- 地址：https://github.com/manaflow-ai/cmux
- 简介：Open source Ghostty-based macOS terminal with vertical tabs and notifications for AI coding agents. Built for multitasking, organization, and programmability.（基于 Ghostty 的开源 macOS 终端，为 AI 编码 Agent 提供纵向标签页与通知。为多任务、组织性与可编程性而建。）
- 语言：Swift
- 今日新增：50 stars today
- 标签：Ghostty 系 macOS 终端、纵向标签页、GPL-3.0+BSL 双许可、首次在榜、全榜末位

今日末位 +50。按 6rr 的规矩做了间隔确认：**三份快照（23:47 / 23:49 / 23:50）的 `stars today` 一字未变（50/50/50）**，
Star 总数亦停在 27,743，因此判定为真实低值，不是"刚进榜计数器未填满"的伪值。
产品本身很讨巧：**原生 Swift + AppKit（非 Electron）**，直接读你现有的 `~/.config/ghostty/config` 拿主题字体颜色，
核心差异化是**通知环 + 通知面板**——当某个 pane 里的编码 Agent 需要你决策时，格子会亮蓝环、标签会亮起。
README 提供 18 种语言的翻译版本，是今日 README 国际化程度最高的项目。
但它是今天**许可项目里最复杂的一个**，详见 §3.6 第 2 条：**客户端 GPL-3.0-or-later，服务端系 BSL 1.1**。

### 10. trycua/cua

- 地址：https://github.com/trycua/cua
- 简介：Scale computer-use 2.0 with open-source drivers, cross-OS fleets, and benchmarks for training, evaluation, and data generation.（用开源驱动、跨操作系统集群与基准测试来规模化 computer-use 2.0，覆盖训练、评测与数据生成。）
- 语言：Rust
- 今日新增：229 stars today
- 标签：电脑操作 Agent、本地 VM 集群、MIT、第 4 次在榜、隔 15 天回归

09-21 之后隔 15 天回来。它的主张是"给 Agent 一台能用的电脑"：仓库里装着 **Cua Driver**（跨 macOS/Windows/Linux 的桌面操作驱动）、
**Lume**（Apple Silicon 上的本地 macOS/Linux 虚拟机）、**CUA-S1 决策模型**与 **Cua Bench** 评测基准。
README 自己划清了边界：*the source is MIT-licensed*，但**模型权重托管在 Hugging Face，每个模型卡/数据集各有自己的
scope、limitations 与 artifact-specific license**——用之前得逐个看。1,163 open issues 是全榜第三高。
运行前请留意：它会在你的机器上开虚拟机给 Agent 用，**资源占用与隔离边界需要自己划好**。

### 11. cloudflare/security-audit-skill

- 地址：https://github.com/cloudflare/security-audit-skill
- 简介：A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings（供编码 Agent 使用的多阶段安全审计技能，产出经过独立验证、机器可读的结论。）
- 语言：JavaScript
- 今日新增：538 stars today
- 标签：六阶段安全审计、机器可读结论、MIT、第 6 次在榜、停更 22 天

09-16~09-20 连续五日在榜后，隔 16 天今天回来并保持 +538 的中等偏上热度。它最有价值的不是"AI 找漏洞"这个提法，
而是**把审计流程工程化了六道工序**：侦察（画架构/信任边界/输入面）→ 覆盖率驱动的猎杀 → 候选一的独立证伪 →
结构化输出（confirmed / needs_validation / rejected 三档写成 findings.json）→ **独立记录复核** → target-neutral 报告。
每一步都有 `.cjs` 校验脚本兜着（coverage ledger 与 findings schema），"命中即证据"这件事被显式区分了三档结论。
这直接推翻了一个旧结论：10-06 依据 Agent-Reach 得出"20 天大致是本榜对停更项目的容忍上限"，
**本项目在停更 22 天的情况下重返榜单并拿到 538**——停更耐受度上限需要上调。
> **⚠️ 合规使用提示**：这是实打实的攻击面枚举工具。README 中 authorization / permission 关键词 **0 命中**，
> 未提供目标授权的取得方式与合规须知；对不属于自己的目标使用前请务必先拿到书面授权。

### 12. tester-army/e2e

- 地址：https://github.com/tester-army/e2e
- 简介：Next generation e2e testing framework for web and mobile apps.（面向 Web 与移动应用的下一代端到端测试框架。）
- 语言：TypeScript
- 今日新增：1,391 stars today
- 标签：自然语言写测试、Agent 驱动 App、Apache-2.0、第 4 次在榜、唯一负增长留存项

三级跳之后第一次回落：**+344（10-04）→ +1,430（10-05）→ +1,720（10-06）→ +1,391（今日，−19.1%）**，
是 8 个留存项里**唯一负增长**的那个。放在绝度量上看仍然是全榜第 5、仍破千，且日增速 24.39% 排第四。
真实的 Star 增量是 1,246，比计数器低 11.6%——两套口径的差异今日在它身上偏大。
README 自述仍在通往 1.0（*"e2e is in active development on the way to 1.0. APIs and config can still change between minor releases"*），
Fork/Star **4.43% 为全榜最低**（7,094 星只有 314 个 fork），说明使用者几乎不分叉、纯消费。
风险控制提示（连续第三日）：**CLI 默认开启匿名遥测**，README 明示不含测试内容、应用内容与凭据，
可 `npx e2e telemetry disable` 或 `E2E_TELEMETRY_DISABLED=1` 关闭，并有单独的 telemetry 字段清单页面。

### 13. DuarteSantos8/openGym

- 地址：https://github.com/DuarteSantos8/openGym
- 简介：Self-hosted gym & body-weight tracker — plan routines, log workouts (supersets, warm-ups, cardio), see which muscles are trained, fatigued or detrained, import from FitNotes/Strong/Hevy, passkey login. Your data, your server.（自托管的健身与自重训练追踪器——规划训练日程、记录训练（超级组、热身、有氧）、查看哪些肌群被练到/疲劳/退化，支持从 FitNotes/Strong/Hevy 导入，passkey 登录。你的数据，在你的服务器上。）
- 语言：JavaScript
- 今日新增：1,494 stars today
- 标签：自托管健身追踪、passkey 登录、AGPL-3.0、第 3 次在榜、增量第三

连续第三日在榜，+1,419 → +1,494，稳在中高位，日增速 29.52%（全榜第三）。
它是今天纯 Adoption 角度最健康的项目：**Fork/Star 13.41% 为全榜最高**（6,555 星 / 879 fork），
配置也写得最实用——`./data` 一把梭就能备份全部，`secret` 是会话 cookie 的签名密钥，
支持从 FitNotes / Strong / Hevy 与 Apple Health 导入。
隐私项是它的老问题：持续记录训练与身体数据，但 README 的**免责声明 / 数据合规类关键词连续第三日 0 命中**。
优点是 passkey 那条写得很硬：*"Passkey private keys never reach the server"*（私钥永远不上服务器）。

## 观察

- morluto/rea 今日 4,666 stars today，居当日增量第 1 位。
- boykopovar/AnyPS5 今日 2,725 stars today，居当日增量第 2 位。
- DuarteSantos8/openGym 今日 1,494 stars today，居当日增量第 3 位。
