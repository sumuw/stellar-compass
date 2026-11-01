---
title: GitHub 每日趋势榜 2026-11-01
description: 2026-11-01 GitHub Trending 榜首为 thedotmack/claude-mem，当日共收录 17 个项目。
date: '2026-11-01'
rankingKey: '2026-11-01'
slug: github-daily-2026-11-01
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

今日共 17 条（回查 GitHub Trending 页面 `Box-row` 计数同为 17），日增合计 13,245。上期 14 席只留住 6 席（42.9%），掉榜 8 席，是近期留存率最低的一次；但增量仍是存量主导 —— 6 席存量贡献 8,296（62.6%），11 席新面孔只贡献 4,949（37.4%）。

语言分布上 **TypeScript 与 Python 各 5 席并列第一**，Rust 2 席，Zig / Shell / Jupyter Notebook / C++ 各 1 席，另有 1 席无主语言。这与近期"TypeScript 独大"的格局不同，Python 一侧全部来自**模型与数据**类项目（Kronos、AiSOC、kornia、FreeToken）加一个老牌清单库（public-apis），TS 一侧则几乎全在 **Agent 生态**（claude-mem、t3code、OpenMausBot、OpenBot）+ 一个中文民俗项目（ziwei-doushu）。

今天最值得注意的信号有两条：

1. **"把语音留在本地"第一次出现同榜两席。** cjpais/Handy（3.6 万星，Tauri v2）与 anomalyco/hex（3,127 星，Rust）都是完全离线、无需 API key 的语音转文字应用，且不共用技术栈细节 —— Handy 走 Tauri，hex 是 Swift 版用 Rust 重写。hex 两天内从约 724 星涨到 3,127，是新面孔里跳得最快的一个。
2. **"把大模型搬进个人电脑"同样成双。** FlashML-org/FreeToken（伯克利 / UT Austin 团队）要在消费级显卡上以交互速度跑千亿参数 MoE，beenuar/AiSOC 则把 SOC 的推理默认锁在本地 Ollama 3B、告警不出机器。两者路线无关，但指向同一个诉求：**不联网也能用上大模型**。

## 重点项目

### 1. thedotmack/claude-mem

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/thedotmack/claude-mem |
| 简介 | Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More |
| 语言 | TypeScript |
| 总 Star | 109,050 |
| 今日新增 | 1,527 stars today |
| 标签 | AI、Agent、记忆系统、开发工具、TypeScript |

给各类编码 Agent 补上跨会话记忆：记录会话内的全部行为、用 AI 压缩后回注到后续会话，支持 Claude Code、Codex、Gemini、Copilot 等多种宿主。连续三期留在榜首，是本期唯一守住的头部存量。

### 2. lightpanda-io/browser

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/lightpanda-io/browser |
| 简介 | Lightpanda: the headless browser designed for AI and automation |
| 语言 | Zig |
| 总 Star | 39,996 |
| 今日新增 | 827 stars today |
| 标签 | 浏览器、自动化、AI、Zig、基础设施 |

用 Zig 写的无头浏览器，专为 AI 与自动化场景设计，主打启动快、内存占用低。今天仍在推送，是本期少数当天还有提交的存量项目。

### 3. shiyu-coder/Kronos

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/shiyu-coder/Kronos |
| 简介 | Kronos: A Foundation Model for the Language of Financial Markets |
| 语言 | Python |
| 总 Star | 45,281 |
| 今日新增 | 611 stars today |
| 标签 | 金融、时间序列、基础模型、量化、Python |

清华团队 AAAI'26 论文配套的 K 线基础模型：用专用 tokenizer 把 45 家交易所、120 亿条 K 线记录离散成 token 序列做自回归预训练。论文自述价格序列预测 RankIC 比主流时序基础模型高 93%、波动率预测 MAE 低 9%。⚠️ 仓库最后一次推送是 2026-04-13，已停更约 6.7 个月，今天的热度来自下游引用而非项目自身更新。

### 4. pingdotgg/t3code

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/pingdotgg/t3code |
| 简介 | Unknown |
| 语言 | TypeScript |
| 总 Star | 37,603 |
| 今日新增 | 3,100 stars today |
| 标签 | Agent、开发工具、远程控制、TypeScript、开源 |

Theo（T3 / Ping Labs）团队的编码 Agent 控制台：自己不跑模型，而是把 Codex、Claude Code、Cursor、Grok、OpenCode 等各自为战的 CLI 收进同一个界面，每个会话隔离在独立 git worktree，桌面/网页/手机都能接管。仓库未填写简介，以上基于官网 t3.codes 与仓库信息。今日全榜增量第一（+3,100，较上期 +170%），却只排第 4 位。

### 5. milind-soni/OpenMausBot

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/milind-soni/OpenMausBot |
| 简介 | Open-source Grok Bot alternative with a virtual machine that bots can use |
| 语言 | TypeScript |
| 总 Star | 10,424 |
| 今日新增 | 919 stars today |
| 标签 | AI、Agent、机器人、虚拟机、TypeScript |

开源的 Grok Bot 替代方案，核心是给每个 bot 配一台虚拟机，让多个 bot 各自独立运行、互不干扰。

### 6. public-apis/public-apis

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/public-apis/public-apis |
| 简介 | A collective list of free APIs |
| 语言 | Python |
| 总 Star | 494,454 |
| 今日新增 | 298 stars today |
| 标签 | API、数据资源、开发资源、Python、开源 |

免费 API 合集，本期全榜总星数最高的条目（49.4 万）。一个 2016 年创建的老牌清单库能进日榜前十，通常意味着刚经历一轮新的传播或教材引用。

### 7. cjpais/Handy

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cjpais/Handy |
| 简介 | A free, open source, and extensible speech-to-text application that works completely offline. |
| 语言 | Rust |
| 总 Star | 36,430 |
| 今日新增 | 383 stars today |
| 标签 | 语音识别、本地运行、生产力、Rust、跨平台 |

完全离线的语音转文字应用，基于 Tauri v2，不需要联网也不依赖 API key，识别全程在本机完成。

### 8. Donchitos/Claude-Code-Game-Studios

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Donchitos/Claude-Code-Game-Studios |
| 简介 | Turn Claude Code into a full game dev studio — 49 AI agents, 72 workflow skills, and a complete coordination system mirroring real studio hierarchy. |
| 语言 | Shell |
| 总 Star | 32,117 |
| 今日新增 | 970 stars today |
| 标签 | AI、Agent、游戏开发、工作流、Shell |

把 Claude Code 包装成由 49 个 AI agent、72 个工作流技能和一套协调系统组成的“游戏工作室”，刻意照搬真实工作室的层级分工。⚠️ 仓库最后推送停在 2026-10-19，本期是它连续第二天在榜而没有新提交。

### 9. kornia/kornia

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/kornia/kornia |
| 简介 | 🐍 Geometric Computer Vision Library for Spatial AI |
| 语言 | Python |
| 总 Star | 11,737 |
| 今日新增 | 88 stars today |
| 标签 | 计算机视觉、空间AI、几何、Python、库 |

面向空间 AI 的几何计算机视觉库。今天增量只有 88 却排在第 9 位，是本期排序与日增脱钩最极端的样本。

### 10. beenuar/AiSOC

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/beenuar/AiSOC |
| 简介 | Open-source AI Security Operations Center: alert fusion, LLM-agent triage, MITRE ATT&CK investigation, and a replayable decision ledger for every agent step. Self-hostable, runs with no API keys, MIT licensed. Ships an MCP server for Claude, Cursor and Continue. |
| 语言 | Python |
| 总 Star | 6,133 |
| 今日新增 | 436 stars today |
| 标签 | 安全、Agent、SOC、MITRE ATT&CK、Python |

可自托管的开源 AI 安全运营中心：告警聚合、LLM agent 分诊、MITRE ATT&CK 调查，并把 agent 每一步的提示词、工具调用与理由写进可重放的“调查账本”。默认跑本地 Ollama 3B，无需 API key，告警数据不出机器。⚠️ 各二手源对规则数量（947 / 2,530 / 2,603）与版本号说法不一，以仓库自述为准。

### 11. Renhuai123/ziwei-doushu

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Renhuai123/ziwei-doushu |
| 简介 | 紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据 |
| 语言 | TypeScript |
| 总 Star | 13,032 |
| 今日新增 | 953 stars today |
| 标签 | 传统文化、紫微斗数、排盘、TypeScript、中文 |

紫微斗数开源排盘引擎，按倪海厦《天纪》体系实现，含完整排盘算法、四化系统、格局知识库与古籍原文数据。

### 12. anomalyco/hex

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/anomalyco/hex |
| 简介 | Local voice dictation for mac, windows and linux |
| 语言 | Rust |
| 总 Star | 3,127 |
| 今日新增 | 1,329 stars today |
| 标签 | 语音识别、本地运行、Rust、生产力、隐私保护 |

Kit Langton 的本地语音听写工具：按住快捷键说话、松手即把转写文本粘贴进当前应用，识别全程在本机完成、音频不出机器。Rust 重写自原先的 Swift 版本，macOS（Apple Silicon）为正式版，Windows 与 Linux 处于 beta。10-29 时约 724 星，今天已到 3,127，两天内跨了一个量级。

### 13. CopilotKit/OpenBot

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/CopilotKit/OpenBot |
| 简介 | Open-source AI coworkers that each get a computer of their own: a browser, files and tools, with every action decided before it happens and recorded after. Bring any AG-UI agent. |
| 语言 | TypeScript |
| 总 Star | 9,452 |
| 今日新增 | 178 stars today |
| 标签 | AI、Agent、自动化、桌面环境、TypeScript |

给每个开源 AI“同事”配一台电脑（浏览器、文件、工具），每个动作执行前决策、执行后留痕，可接入任意 AG-UI agent。较 10-30 在榜时的热度已明显回落。

### 14. togg53192-cmd/jailbreaks

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/togg53192-cmd/jailbreaks |
| 简介 | LIST OF ALL MY JAILBREAKS |
| 语言 | Unknown |
| 总 Star | 12,856 |
| 今日新增 | 730 stars today |
| 标签 | 提示词、数据集、文本素材、安全 |

收录各类越狱提示词的文本素材集，不是工具。⚠️ 仓库无主语言、内容为纯文本，上榜靠的是二次传播而非功能迭代。

### 15. patchy631/ai-engineering-hub

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/patchy631/ai-engineering-hub |
| 简介 | In-depth tutorials on LLMs, RAGs and real-world AI agent applications. |
| 语言 | Jupyter Notebook |
| 总 Star | 40,134 |
| 今日新增 | 573 stars today |
| 标签 | LLM、RAG、教程、教育、Jupyter Notebook |

LLM、RAG 与真实场景 AI agent 应用的深度教程合集，以 Jupyter Notebook 为主要载体。

### 16. FlashML-org/FreeToken

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/FlashML-org/FreeToken |
| 简介 | FreeToken brings datacenter-scale model serving to your desktop. Run massive models locally, fast and efficiently. |
| 语言 | Python |
| 总 Star | 15,324 |
| 今日新增 | 232 stars today |
| 标签 | 模型推理、MoE、本地运行、Python、基础设施 |

边缘侧 MoE 推理引擎，目标是在消费级 PC 上以交互速度跑 2,800 亿参数级开源大模型。伯克利 / UT Austin 团队（Song Han、Matei Zaharia、Ion Stoica 等参与），Apache-2.0，提供 OpenAI/Anthropic 兼容端点可直接接入 Codex、Claude Code。论文自述在 RTX 5090 上以 22–25 tok/s 跑 DeepSeek-V4-Flash、在 8GB 显存的 RTX 4060 笔记本上以 39.3 tok/s 跑 35B 模型，为 llama.cpp / Ollama 等基线的 1.5–2.3 倍。

### 17. hyprwm/Hyprland

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/hyprwm/Hyprland |
| 简介 | Hyprland is an independent, highly customizable, dynamic tiling Wayland compositor that doesn't sacrifice on its looks. |
| 语言 | C++ |
| 总 Star | 39,314 |
| 今日新增 | 91 stars today |
| 标签 | 桌面环境、Wayland、窗口管理器、C++、基础设施 |

独立开发的动态平铺 Wayland 合成器，强调高度可定制且不牺牲观感。今天增量仅 91，是榜单上老牌基础设施项目的典型形态：日常低频增长、偶发冲榜。

## 观察

**一、排序与日增脱钩第七次确认，且本期出现极端样本。** 全榜增量第一是 pingdotgg/t3code（+3,100），却只排第 4；而排第 9 的 kornia 只增长 88、排第 17 的 Hyprland 只增长 91，两者都比它们前面好几席的增量低一个量级。榜单名次不是按当日 star 增量排的，这一点应视为常态，读榜时不要拿名次当天增量用。

**二、留存率跌到近期最低，但存量仍是增量的主体。** 上期 14 席里 8 席掉榜（mattpocock/skills、impeccable、superpowers、DeepTutor、Orkas、OpenMAIC、devops-exercises、vorssaint-utils），包括"设计品味"赛道仅存的 impeccable 与两个技能包大户双双出局 —— 10-30 那次"技能包 + 设计品味"的集中冲榜，两天后几乎全部退潮。反过来，留下的 6 席里 5 席在衰减（claude-mem −11.4%、ziwei-doushu −12.8%、lightpanda −11.0%、OpenMausBot −29.5%、CC-Game-Studios −28.0%），唯一逆势的是 t3code（+170%）。

**三、t3code 是本期唯一的高确定性增长。** 在全员衰减的背景里拿到 +3,100，来源清楚：10-15 刚发布 v0.1.0（重建后的 Orchestrator V2 首个稳定版），支持一个 agent 在另一个供应商上启动子 agent、中途换供应商、MCP server 与定时任务，移动端同时覆盖 iOS/Android。它不做模型也不做代码生成，卖点是"你已有的那些 Agent，换个地方能继续用"。

**四、⚠️ 三个需标注时效的条目。**
- **shiyu-coder/Kronos**：最后推送 2026-04-13，停更约 6.7 个月。45,281 星的分量来自 AAAI'26 论文与下游引用，不是项目活跃度；官方 README 自己也声明示例回测仅为演示、非生产级量化系统。
- **Donchitos/Claude-Code-Game-Studios**：最后推送 2026-10-19，连续第二天在榜而没有新提交。
- **togg53192-cmd/jailbreaks**：无主语言的纯文本素材集，无功能可迭代，热度全靠二次传播。
- 另有 cjpais/Handy（10-27）与 FlashML-org/FreeToken（10-30）为轻微滞后，属正常开发节奏。

**五、老牌基础设施仍在榜上占位。** public-apis（2016 年创建，49.4 万星）、Hyprland（2022）、kornia（2018）、lightpanda（2023）、ai-engineering-hub（2024）五个创建于 2024 年及更早的项目同榜，其中 public-apis 与 lightpanda 今天仍在推送。日榜并不只属于新项目，这类条目通常是被某一轮新传播带进来的。

**六、Agent 生态仍是最大公约数，但形态在扩散。** 17 席里可直接挂到 Agent 生态的有 6 席（claude-mem、t3code、OpenMausBot、CC-Game-Studios、OpenBot、AiSOC），与前几期持平；但它们的分工已经完全不同 —— 记忆、控制台、bot 团队、虚拟工作室、给 bot 配电脑、给 SOC 做分诊。同一批注意力正在被摊到越来越多互不重叠的细分位置上。
