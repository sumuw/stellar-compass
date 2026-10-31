---
title: GitHub 每日趋势榜 2026-10-30
description: 2026-10-30 GitHub Trending 榜首为 thedotmack/claude-mem，当日共收录 15 个项目。
date: '2026-10-30'
rankingKey: '2026-10-30'
slug: github-daily-2026-10-30
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

榜单 **15 条**，日增合计 **15,307 星**。已回查页面 `Box-row` 计数确认为 15，与解析结果一致，不是解析失败。

> **数据口径说明**：本库缺少 2026-10-29 数据日（该期未运行），因此下文「存量 / 新面孔」划分与增幅变化全部以 **2026-10-28** 为基准，中间隔一天。

今天的结构可以一句话概括：**存量仍占主导但首次出现大面积掉榜，「设计品味」赛道从三席塌缩到一席，而 Anthropic 官方亲自下场发技能包。**

- **存量 7 席、新面孔 8 席**。10-28 的 14 席里留下来 7 席，掉榜 7 席（ai-design-skills、hallmark、cindy、nightly-labs/openbot、LinkSwift、RuView、the-craft-of-selfteaching）。存量合计 **+8,713（56.9%）**，新面孔 **+6,594（43.1%）** —— 存量占比从上期的 83.7% 大幅回落，新面孔首次接近一半。
- **存量 3 增 4 跌**：impeccable **+56%**、jailbreaks **+39%**、superpowers **+15%**；下跌的是 expo/skills **−82%**、macro **−46%**、thinkrail **−33%**、DeepTutor **−4%**。存量整体较 10-28 同样这 7 席（+7,814）仍涨 **11.5%**。
- **「设计品味」赛道四天后首次整条塌缩**：hallmark（上期 +2,109）与 ai-design-skills（上期 +1,938）双双掉榜，只剩 impeccable 一席 —— 而它今天拿到**全榜增量第一（+2,300）**。三条互斥路线里，「检测型」胜出，「生成时约束」与「整站交付」同时退场。
- **技能包仍是默认形态，但今天多了一个新变量**：5 席（impeccable、superpowers、expo/skills、mattpocock/skills、anthropics/skills）合计 **+4,768（31.1%）**。其中 **anthropics/skills** 是 Anthropic 官方仓库，18.5 万星，继 Expo 之后第二个平台方亲自维护的技能包。
- **语言分布**：TypeScript **6 席**重回第一（上期仅 3 席），Shell 3 席、Rust 2 席、Python 2 席、Zig 1 席、未识别主语言 1 席（jailbreaks 为纯文本素材库）。
- **今天最反常的一条**：expo/skills 以 **+38 星排在第 6 位**，压过 +1,126（第 5）、+930（第 9）与 +876（第 8）；macro +57 排第 7。**增量不足百星的两席都排在十位以内。**

## 重点项目

### 1. thedotmack/claude-mem

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/thedotmack/claude-mem |
| 简介 | Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More |
| 语言 | TypeScript |
| 总 Star | 106,255 |
| 今日新增 | 1,140 stars today |
| 标签 | AI、Agent、记忆、上下文、TypeScript |

给 Claude Code、Codex、Gemini、Copilot 等多个 Agent 做跨会话持久记忆：记录会话中 Agent 做过的一切，用 AI 压缩后把相关上下文注回以后的会话。10.6 万星的存量项目，本次以 +1,140 首次进入本日榜并直接排到第 1，指向「Agent 缺少长期记忆」这个尚未被解决的共性痛点。

### 2. milind-soni/OpenMausBot

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/milind-soni/OpenMausBot |
| 简介 | Open-source Grok Bot alternative with a virtual machine that bots can use |
| 语言 | TypeScript |
| 总 Star | 8,652 |
| 今日新增 | 895 stars today |
| 标签 | Agent、桌面应用、聊天、TypeScript、开源替代 |

Grok Bot 的开源替代：侧边栏里每个 bot 都是一个本地跑着的真 Agent（Claude 或 Codex），各有自己的性格、模型、云电脑与已连接应用，能像联系人一样对话并逐项审批它的动作。Electron + React 19 写成，2026-08 建仓，主打本地优先、自带模型，同时把自己定位成 Meta Muse、OpenAI dots、Manus Cue 的开源对照物。

### 3. pbakaus/impeccable

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/pbakaus/impeccable |
| 简介 | The design vocabulary for your coding agent. Steer with polish and bolder, review with critique and audit, catch AI slop before it ships. |
| 语言 | Rust |
| 总 Star | 97,071 |
| 今日新增 | 2,300 stars today |
| 标签 | 设计、AI、Rust、技能包、前端 |

给编码 Agent 用的设计词汇表：用 polish / bolder 引导，用 critique / audit 复核，在上线前拦住 AI 味。+1,471 → +2,300（+56%），拿到全榜增量第一却只排第 3，是「排序与日增脱钩」的第五个样本；核心引擎用 Rust 写成以保证检测确定性。今天同赛道的 hallmark 与 ai-design-skills 双双掉榜，只剩它一席。

### 4. CopilotKit/OpenBot

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/CopilotKit/OpenBot |
| 简介 | Open-source AI coworkers that each get a computer of their own: a browser, files and tools, with every action decided before it happens and recorded after. Bring any AG-UI agent. |
| 语言 | TypeScript |
| 总 Star | 8,791 |
| 今日新增 | 706 stars today |
| 标签 | Agent、AG-UI、基础设施、TypeScript、企业 |

CopilotKit 出的开源「AI 同事」平台：每个同事配一台自己的电脑——带登录态的浏览器、独立文件与按授权给的工具，每个动作先决定后记录，通过 AG-UI 接入任意 Agent 栈。形态与 10-28 上榜的 nightly-labs/openbot 高度相似，但明确定位企业自托管（「你的公司真正能拥有的 AI 助手」），8 月建仓、目前 Beta。

### 5. Renhuai123/ziwei-doushu

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Renhuai123/ziwei-doushu |
| 简介 | 紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据 |
| 语言 | TypeScript |
| 总 Star | 11,206 |
| 今日新增 | 1,126 stars today |
| 标签 | TypeScript、紫微斗数、排盘引擎、中文、知识库 |

紫微斗数开源排盘引擎，基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库与古籍原文数据。今天 15 席里唯一与 AI、开发工具完全无关的项目，也是本榜罕见的「传统术数数字化」样本；+1,126 全部来自中文社媒传播，与榜单其余 14 席没有任何技术关联。

### 6. expo/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/expo/skills |
| 简介 | A collection of AI agent skills for working with Expo projects and Expo Application Services |
| 语言 | Shell |
| 总 Star | 3,897 |
| 今日新增 | 38 stars today |
| 标签 | 技能包、React Native、移动开发、开发工具、Expo |

Expo 官方出品的 Agent 技能集，覆盖 Expo / EAS / React Native / iOS / Android 的约束与工作流，通过官方插件市场与 skills CLI 双通道分发。+212 → +38（−82%），是存量 7 席里跌幅最大的一席，两天内热度基本退去；也是今天两个「增量不足百星却仍留榜」的样本之一。

### 7. macro-inc/macro

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/macro-inc/macro |
| 简介 | Macro is a unified workspace for teams: email, chat, docs, tasks, agents, calls, and CRM — @-linked together with shared AI memory. |
| 语言 | Rust |
| 总 Star | 5,876 |
| 今日新增 | 57 stars today |
| 标签 | Rust、协作、生产力、基础设施、Agent |

把邮件、聊天、文档、任务、Agent、通话、CRM 合成一个工作区，内容之间用 @ 互链并共享团队级 AI 记忆。+106 → +57（−46%），连续第二天以不足百星的增量留在榜上，靠「一个系统取代 Slack+Linear+Notion+HubSpot」的叙事而非单点功能维持席位。

### 8. mattpocock/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mattpocock/skills |
| 简介 | Skills for Real Engineers. Straight from my .agents directory. |
| 语言 | Shell |
| 总 Star | 307,487 |
| 今日新增 | 876 stars today |
| 标签 | 技能包、Shell、Agent、开发流程、TypeScript |

TypeScript 教育者 Matt Pocock 把自己的 .agents 目录直接开源成技能集合。30.7 万星，与 obra/superpowers（30.9 万星）几乎持平，是今天全榜星级最高的两个项目——一个个人仓库在量级上追平头部社区框架，本身值得标注；2026-02 建仓，+876 是新面孔里第三高。

### 9. pingdotgg/t3code

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/pingdotgg/t3code |
| 简介 | T3 Code —— agent harness 控制面：用 iOS / Android / Web / Electron 桌面端远程操控本机的 Claude Code、Codex、Cursor、Grok Build、OpenCode 与 Antigravity（页面 description 为空，简介来自仓库 README） |
| 语言 | TypeScript |
| 总 Star | 32,739 |
| 今日新增 | 930 stars today |
| 标签 | Agent、TypeScript、远程控制、开发工具、开源 |

自称「agent harness 控制面」：装上后可用 iOS / Android 应用、网页或 Electron 桌面端远程操控本机已登录的 Claude Code、Codex、Cursor、Grok Build、OpenCode、Antigravity。作者是 T3 Stack 的 Theo，2026-02 建仓、3.27 万星，+930 是新面孔里第二高。README 明确写「不卖任何东西」，定位是对标 Codex 桌面端、Conductor、Cursor Glass 的开源方案。

### 10. HKUDS/DeepTutor

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/HKUDS/DeepTutor |
| 简介 | DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/. |
| 语言 | Python |
| 总 Star | 51,776 |
| 今日新增 | 2,282 stars today |
| 标签 | AI、LLM、教育、Python、RAG |

终身个性化辅导系统，本榜唯一的纯教育类项目。+2,376 → +2,282（−4%），位次从第 4 落到第 10，但增量仍居全榜第二；总星 47,812 → 51,776，是唯一连续多期留在榜上且没有掉头的教育项目。

### 11. anthropics/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/anthropics/skills |
| 简介 | Public repository for Agent Skills |
| 语言 | Python |
| 总 Star | 185,324 |
| 今日新增 | 295 stars today |
| 标签 | 技能包、Agent、Python、官方、标准 |

Anthropic 官方的 Agent Skills 公开仓库，18.5 万星，2025-09 建仓。继 expo/skills 之后第二个由平台方自己维护的技能包，也是迄今分量最重的一个——「谁来为 Agent 写规则」从社区行为变成平台责任，今天由模型厂商亲自确认。+295 的增量不高，但象征意义是本期最大的。

### 12. JetBrains/thinkrail

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/JetBrains/thinkrail |
| 简介 | Vibe code with pi in a lightweight, real IDE that customises itself around the way you work — The Vibe You Need |
| 语言 | TypeScript |
| 总 Star | 6,582 |
| 今日新增 | 722 stars today |
| 标签 | Agent、IDE、TypeScript、开发工具、JetBrains |

JetBrains InnovationHub 的 agentic IDE，用 pi coding agent 配 git worktree 工作区与 SPEC.md 图谱，让 IDE 反过来适配人的工作方式。+1,075 → +722（−33%），位次从第 1 落到第 12，是连续多期占据榜首区后首次跌出；总星 4,944 → 6,582，基数仍在扩大，属正常降温而非失速。

### 13. togg53192-cmd/jailbreaks

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/togg53192-cmd/jailbreaks |
| 简介 | LIST OF ALL MY JAILBREAKS（25+ 模型的系统提示词与越狱样本合集） |
| 语言 | Unknown |
| 总 Star | 11,018 |
| 今日新增 | 2,055 stars today |
| 标签 | 安全、LLM、提示词、数据集、越狱 |

25+ 模型的系统提示词与越狱样本合集（页面仅一句 LIST OF ALL MY JAILBREAKS，简介来自仓库名推断）。+1,478 → +2,055（+39%），总星 6,952 → 11,018，翻约 12 倍后仍在加速，是存量里增幅第二。属模型安全研究素材而非工具，热度来自话题性，不应按「活跃项目」解读。

### 14. obra/superpowers

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/obra/superpowers |
| 简介 | An agentic skills framework & software development methodology that works. |
| 语言 | Shell |
| 总 Star | 309,435 |
| 今日新增 | 1,259 stars today |
| 标签 | Agent、框架、方法论、Shell、开发流程 |

30.9 万星的技能框架与开发方法论，把「先写计划再动手」固化成 Agent 可执行的工作流。+1,096 → +1,259（+15%），连续第二期加速，是存量里最稳的一席；与今天新上榜的 mattpocock/skills 星级几乎持平，两者代表同一形态的两条来源（社区框架 vs 个人实践）。

### 15. lightpanda-io/browser

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/lightpanda-io/browser |
| 简介 | Lightpanda: the headless browser designed for AI and automation |
| 语言 | Zig |
| 总 Star | 38,380 |
| 今日新增 | 626 stars today |
| 标签 | Zig、浏览器、自动化、AI、基础设施 |

专为 AI 与自动化设计的无头浏览器，用 Zig 写成，主打比 Chromium 低一个数量级的内存占用与启动开销。2023-02 建仓的老项目，在 Agent 需要大量并发网页操作的当下被重新翻出来，是今天唯一的「基础设施层回归」样本，也是本榜唯一的 Zig 项目。

## 观察

1. **Anthropic 官方入场，是本期最大信号。** `anthropics/skills` 以 18.5 万星上榜，虽然只有 +295，但它把一个问题定死了：**Agent Skills 已经从社区约定变成平台级交付物。** 时间线很清晰——10-28 是 Expo（框架官方），今天是 Anthropic（模型厂商官方）。加上同日上榜的 `mattpocock/skills`（个人实践，30.7 万星）与 `obra/superpowers`（社区框架，30.9 万星），今天一张榜上同时站着**官方、社区、个人**三种来源的技能包，且后两者星级几乎相等。这已经不是趋势，是既成事实。

2. **「设计品味」赛道四天后塌缩，胜出的是检测型。** hallmark（+2,109）与 ai-design-skills（+1,938）在上期还是该赛道的前两名，今天双双掉榜，只剩 impeccable 一席——而它今天拿到**全榜增量第一（+2,300）**。三条互斥路线中，「生成时约束」（hallmark）与「整站交付」（ai-design-skills）同时退场，「上线前检测」（impeccable）独自存活并加速。**合理解释：约束型方案要求人在生成流程里配合，检测型方案可以事后加在已有流程上，摩擦更小。**

3. **「排序与日增脱钩」第五次确认，且今天出现双极端。** 增量第一的 impeccable（+2,300）只排第 3；另一端 expo/skills **+38 排第 6**、macro **+57 排第 7**，都压过了 +1,126（第 5）、+930（第 9）、+876（第 8）。**引用本榜时不能把位次当作热度排序**——这条已经连续五期成立，可判定为常态。

4. **今天有一组可以合并读的三席：claude-mem、OpenMausBot / OpenBot、t3code。** 它们分别解决「Agent 记不住上次做了什么」「Agent 没有自己的身份与机器」「人不在电脑前怎么控制 Agent」——**记忆、身份、控制面这三层配套在同一天集中出现**，指向的是同一个转变：Agent 正在从「被调用的工具」变成「需要被管理的同事」。今天榜单里 AI 相关项目的重心，已经从「Agent 能做什么」移到「怎么管好一堆 Agent」。

5. **两个需要标注时效的项目。** `ziwei-doushu` 是紫微斗数排盘引擎，今天 15 席里唯一与 AI、开发工具完全无关的项目，+1,126 全靠中文社媒传播，不应被读成技术趋势；`jailbreaks` 是文本素材库而非工具，热度来自话题性。此外 `expo/skills`（+38）与 `macro`（+57）**留榜但热度已退**——留榜不等于活跃。

6. **TypeScript 以 6 席重回语言第一**（上期 3 席），且用途高度分散：Agent 记忆、聊天式 Agent 桌面端、企业 Agent 平台、术数排盘、Agent 控制面、agentic IDE。**TS 已经不是「前端语言」，而是「给 Agent 做外壳的默认语言」。** Rust 2 席（设计检测引擎、协作套件）继续稳定，Zig 凭 lightpanda 首次以基础设施身份出现。
