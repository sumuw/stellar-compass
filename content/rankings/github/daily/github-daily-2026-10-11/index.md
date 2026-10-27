---
title: GitHub 每日趋势榜 2026-10-11
description: 2026-10-11 GitHub Trending 榜首为 morluto/rea，当日共收录 13 个项目。
date: '2026-10-11T08:00:00+08:00'
rankingKey: '2026-10-11'
slug: github-daily-2026-10-11
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

2026-10-11 GitHub Trending 共收录 13 个项目（已回查页面 `Box-row` 计数确认为 13，非解析丢失）。今日榜单延续并强化了昨日的 **Agent 工具链**主线：13 个项目里有 7 个直接服务于 AI 编码或创作 Agent——逆向工程 MCP、图表设计规范、上下文优化、"真实工程师 Skills"、官方知识工作插件、编码行为准则、AI 原生 PPTX。和昨天相比，这条主线从"让 Agent 写代码"进一步下沉到"给 Agent 配齐工程管理能力的每一环"。

增量曲线比昨天更陡峭。榜首 `morluto/rea` 单日 +25,784，是第二名的 4.4 倍，独自吃掉当天全部增量（39,719）的 **64.9%**；前两名合计占 79.6%。而榜单尾部是一批"呼吸级"的日常波动：`tensorflow` +24、`pytorch` +81、`transformers` +94、`flutter` +164 —— 这四个是超大存量框架，增量只反映常规生态活动，不构成热度信号。换言之，今天的榜单实质上是 **2 个真热点 + 11 个背景**，信号集中度比条目数看起来更高。

语言分布上 Python 以 4 席居首（其中 3 席是经典机器学习框架，1 席是新锐 AI 工作流），TypeScript 2 席、C++ 2 席，Rust / HTML / Shell / Dart 各 1 席，1 个项目未标注主语言。值得记录的信号有两条：一是 **C++ 的两席分属完全不同的世界**（游戏主机移植 vs 老牌 ML 框架），二是 **未标注语言的仓库今天排到了第 13** —— `multica-ai/andrej-karpathy-skills` 根本不是一个程序，而是一份约 50 行的 Markdown 准则，它同时发行 CLAUDE.md、SKILL.md 和 Cursor rules 三种形态。当配置文件本身能积累到 218k 星，"仓库"这个词的定义需要重新校准了。

**核心主题：从"帮 Agent 写代码"到"给 Agent 配齐工程装备"，并且这套装备正在标准化。**

| 维度 | 情况 |
|------|------|
| 收录项目数 | 13 |
| 当日增量合计 | 39,719 |
| 单日增量最高 | morluto/rea（+25,784，占全天 64.9%） |
| 语言 Top | Python 4、TypeScript 2、C++ 2、Rust 1、HTML 1、Shell 1、Dart 1、未标注 1 |
| 主题集中度 | 高（7/13 与 AI Agent 工具链直接相关） |
| Agent Skills 形态 | 3 个仓库（mattpocock/skills、hugohe3/ppt-master、multica-ai/andrej-karpathy-skills） |

## 重点项目

### 1. morluto/rea

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/morluto/rea |
| 简介 | Reverse engineer anything with agents, from app behavior down to native binaries. |
| 语言 | TypeScript |
| 总 Star | 69,470 |
| 今日新增 | 25,784 stars today |
| 标签 | AI Agent、MCP、逆向工程、二进制分析、TypeScript |

通过 MCP 把 Hopper、Ghidra、IDA 等逆向工具接给编码 Agent，让它在没有源码的前提下回答“某个功能是怎么实现的”，并且每条结论都附证据。10 月 8 日发布的 v6.0 补上了 EVM 字节码、Windows PE 原生分析和崩溃现场检查，随后 24 小时内又连发到 v6.3，这波密集发版是它今天单日 +25,784 直接封王的直接原因。需要注意的是，MIT 协议覆盖的是工具本身，分析对象的许可问题并不在其中。

### 2. boykopovar/AnyPS5

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/boykopovar/AnyPS5 |
| 简介 | Tool for automatic PS5 executables porting to Linux and Windows |
| 语言 | C++ |
| 总 Star | 26,298 |
| 今日新增 | 5,831 stars today |
| 标签 | C++、游戏移植、重链接、兼容层、逆向工程 |

完全不做模拟：PS5 用的是 AMD Zen 2 的 x86-64，指令无需翻译，项目因此改用 relinker 把 PS5 的 ELF 直接转成 Windows PE / Linux ELF，再自实现 PRX 系统库做动态链接，渲染侧把主机着色器重编译为 SPIR-V。这波热度的真正来源是有外部开发者基于它发布了 DeadCells-PS5-Native 0.1.0，号称首个作为原生 Windows 程序跑起来的 PS5 游戏（室内 55-60 FPS）。主项目作者仍坚持要等“至少一款游戏完整跑通”才发第一个 release。

### 3. storytold/artcraft

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/storytold/artcraft |
| 简介 | ArtCraft is an intentional crafting engine for artists, designers, and filmmakers |
| 语言 | Rust |
| 总 Star | 14,091 |
| 今日新增 | 3,217 stars today |
| 标签 | Rust、AI 图像生成、创意工具、3D 合成、图像/视频生成 |

自称“给艺术家的 IDE”，把提示词抽卡改成可控的分镜作业：先在 2D/3D 画布里布景、用人体模型摆姿、kitbash 搭景，再调自家 62 个模型或 Grok、Midjourney、Sora 等外部模型出图出视频。Rust 实现承担的是场景图与节点编排的性能而不是套一层 Python 壳。单日 +3,217，是今天前五里唯一的创意赛道项目。

### 4. cathrynlavery/diagram-design

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cathrynlavery/diagram-design |
| 简介 | Editorial diagram design for Claude Code, Codex, GitHub Copilot, Cursor, Factory Droid, and Pi. 44 diagram types. Self-contained HTML + SVG. No shadows. No Mermaid slop. |
| 语言 | HTML |
| 总 Star | 48,797 |
| 今日新增 | 1,189 stars today |
| 标签 | 图表设计、Agent Skills、SVG、HTML、设计规范 |

给 Claude Code、Codex、Copilot、Cursor 等各家编码 Agent 一套统一的编辑级图表规范，覆盖 44 种图表类型，输出自包含 HTML + SVG，明确禁用阴影和 Mermaid 默认样式。随着 Agent 开始直接产出对外文档和演示材料，“把设计品味写成可被 Agent 执行的规则”这类仓库正在获得稳定的存量价值。

### 5. mksglu/context-mode

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mksglu/context-mode |
| 简介 | Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks. |
| 语言 | TypeScript |
| 总 Star | 26,255 |
| 今日新增 | 178 stars today |
| 标签 | AI Agent、MCP、上下文优化、开发者工具、SQLite |

只打“工具输出撑爆上下文”这一个点，但做得很完整：命令进沙箱执行、只有 stdout 回写上下文（官方数据 315 KB 降到 5.4 KB），同时把文件编辑、git 操作、报错和决策记进本地 SQLite FTS5 供 BM25 检索，会话压缩后不丢状态。已覆盖 Claude Code、Codex、Gemini CLI、Cursor 等 17 个平台。当日增量不高，属于稳定爬坡型。

### 6. mattpocock/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mattpocock/skills |
| 简介 | Skills for Real Engineers. Straight from my .agents directory. |
| 语言 | Shell |
| 总 Star | 284,286 |
| 今日新增 | 1,737 stars today |
| 标签 | Agent Skills、开发者工具、工程实践、AI 编程、Shell |

Matt Pocock 把自己 .agents 目录里真实在用的 Agent skills 原样开源，主打“给真实工程师用”而不是演示玩具。284k 星的超大存量仍能每天吸 1,737 星，说明把工程经验打包成可复用指令这种形态正处在主流化阶段。今日榜上已出现三个同形态仓库，形态之争基本定型。

### 7. flutter/flutter

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/flutter/flutter |
| 简介 | Flutter makes it easy and fast to build beautiful apps for mobile and beyond |
| 语言 | Dart |
| 总 Star | 179,458 |
| 今日新增 | 164 stars today |
| 标签 | Dart、跨平台、移动开发、UI 框架、开源 |

存量 179k 星的跨平台 UI 框架常青树。当日 +164 属于常规呼吸级别，一般来自版本节奏或路线图更新带来的短时关注，对当日趋势解读的意义有限。

### 8. tensorflow/tensorflow

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/tensorflow/tensorflow |
| 简介 | An Open Source Machine Learning Framework for Everyone |
| 语言 | C++ |
| 总 Star | 200,696 |
| 今日新增 | 24 stars today |
| 标签 | 机器学习、深度学习、框架、基础设施、C++ |

当日仅 +24，是今天榜单里增量最小的项目。这类超大规模老项目的日常加星几乎只反映 CI 与周边生态的自然活动，不宜当作热度信号来读。

### 9. hugohe3/ppt-master

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/hugohe3/ppt-master |
| 简介 | AI turns documents or topics into real, native PowerPoint decks—with native shapes, transitions and animations, data-backed charts and tables on demand, audio narration from speaker notes, and support for your own .pptx templates. · by Hugo He |
| 语言 | Python |
| 总 Star | 59,323 |
| 今日新增 | 515 stars today |
| 标签 | AI 编程、Python、PPTX、办公自动化、Agent Skills |

走的是在 AI IDE 里跑一条工作流的路子：丢进 PDF / DOCX / 网页或一段文字，产出 DrawingML 原生形状的真实 PPTX，每个元素都能在 PowerPoint 里点开直接改，而不是每页一张图。近期新增原生幻灯片动画、由备注生成语音旁白、数据可回溯的原生图表表格，以及跟随用户自有模板。作者是财务背景（CPA / CPV），项目定位因此相当务实。

### 10. pytorch/pytorch

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/pytorch/pytorch |
| 简介 | Tensors and Dynamic neural networks in Python with strong GPU acceleration |
| 语言 | Python |
| 总 Star | 104,115 |
| 今日新增 | 81 stars today |
| 标签 | Python、深度学习、张量计算、GPU、框架 |

当日 +81。作为动态图深度学习框架的事实默认选项，其日增常年稳定在几十到一两百之间，属于基线水位。

### 11. huggingface/transformers

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/huggingface/transformers |
| 简介 | 🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio, and multimodal models, for both inference and training. |
| 语言 | Python |
| 总 Star | 167,183 |
| 今日新增 | 94 stars today |
| 标签 | Python、机器学习、多模态、预训练模型、推理/训练 |

当日 +94。文本、视觉、音频、多模态模型的事实标准接口层，每当有重量级新模型上线，这里通常会同步出现一波小幅关注。

### 12. anthropics/knowledge-work-plugins

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/anthropics/knowledge-work-plugins |
| 简介 | Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork |
| 语言 | Python |
| 总 Star | 28,747 |
| 今日新增 | 626 stars today |
| 标签 | AI Agent、Claude、插件生态、知识工作、Python |

Anthropic 官方放出的插件仓库，明确面向 Claude Cowork 里的知识工作者场景。官方身份叠加 Cowork 的推广节奏，让它今天在一众社区项目里稳稳拿到 +626。后续值得观察的是，官方插件生态会不会收敛成知识工作场景的标准分发形态。

### 13. multica-ai/andrej-karpathy-skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/multica-ai/andrej-karpathy-skills |
| 简介 | A single CLAUDE.md file to improve Claude Code behavior, derived from Andrej Karpathy's observations on LLM coding pitfalls. |
| 语言 | Unknown |
| 总 Star | 218,162 |
| 今日新增 | 279 stars today |
| 标签 | Agent Skills、编码准则、CLAUDE.md、工程实践、AI 编程 |

把 Karpathy 那篇病毒式帖子提炼成约 50 行的四条行为准则：先思考、简单优先、外科手术式修改、目标驱动执行，同时发行 CLAUDE.md、SKILL.md 和 Cursor rules 三种形态，方便在不同工具里落地。原始整理者是 forrestchang，multica-ai 这个 fork 目前维护更活跃。当日未标注主语言，因为它本质上就不是一个“程序”。

## 观察

**一、Agent 工具链从"写代码"下沉到"管工程量"。** 昨天的主线是让 Agent 能开工（Skills、插件、评审工具），今天更进一步：`context-mode` 管上下文预算、`diagram-design` 管产出排版、`knowledge-work-plugins` 管岗位分工。工具链的每一次细化，本质是在替 Agent 承担原本属于"工程师直觉"的那部分工作。

**二、"一份配置文件"正在成为 GitHub 的一等公民。** 今天榜单里 `mattpocock/skills`（Shell）、`multica-ai/andrej-karpathy-skills`（未标注语言）、`cathrynlavery/diagram-design`（HTML）三个仓库的实质内容都不是可执行程序，而是给 AI 读的规范文本。它们合计坐拥超过 55 万 star。GitHub 正在成为 Agent 行为规范的分发渠道。

**三、头部集中度提醒：不要把条目数当成信号强度。** 13 条看起来比昨天多，但 64.9% 的增量集中在一个项目上，尾部四个框架合计仅 +363。真正具备当日新闻价值的只有 REA（v6 系列密集发版）和 AnyPS5（首个原生 PS5 游戏 demo 落地）两件事。

**四、警惕单一消息源的叙事放大。** AnyPS5 官方尚未发布任何 release，今天的热度完全来自外部开发者的 DeadCells 衍生物流出。这类"主项目被下游成果带火"的模式，热度可持续性取决于主项目能否交出自己的第一个 release。

**五、许可证问题开始浮出水面。** 今天榜单里同时出现两个"合法性边界"案例：REA 的 MIT 不覆盖被分析对象，context-mode 的许可证已从 MIT 迁到 Elastic License 2.0（source-available 而非严格开源）。在 Agent 工具链大规模采用前，这两类问题会被反复讨论。
