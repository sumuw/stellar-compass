# GitHub 每日趋势榜 2026-10-28

## 今日概览

榜单从昨天的 11 条扩到 **14 条**，日增合计 **15,925 星**。已用回查页面 `Box-row` 计数确认为 14，与解析结果一致，不是解析失败。

今天的结构可以一句话概括：**存量首次在「留榜数」和「增量占比」上同时压过新面孔，且新面孔的形态彻底分化。**

- **存量 9 席、新面孔 5 席**。昨天 11 席里有 9 席留了下来，只掉榜 postiz-app、affaan-m/ECC 两个。存量合计 **+13,336（83.7%）**，新面孔只有 **+2,589（16.3%）**。这是连续第三天存量主导，但今天是第一次出现「留榜 9 席」这么高的留存率。
- **存量 6 增 3 跌**：DeepTutor +50%、superpowers +80%、jailbreaks +66%、openbot +33%、ai-design-skills +39%、impeccable +1%；下跌的是 cindy −49%、hallmark −26%、thinkrail −11%。存量整体较昨天的 9 席（+12,248）还涨了 8.9%，说明不是「回光返照式残留」而是真的在加速。
- **「技能包」占到 5 席、+6,826（43%）**：ai-design-skills、superpowers、hallmark、impeccable、expo/skills。这个形态已经从「新玩意」变成默认交付方式——而且今天出现了第一个**官方团队亲自下场**的技能包（expo/skills），此前只有个人或实验室在做。
- **语言分布**：Rust 3 席（macro、impeccable、RuView）、TypeScript 3 席（thinkrail、cindy、openbot）、Shell 2 席、未识别主语言 2 席（两个纯 Markdown 技能库）、Python / CSS / JavaScript / Jupyter Notebook 各 1 席。**Rust 第二次追平 TypeScript**，且三席之间毫无关联（协作套件 / 设计检测引擎 / WiFi 感知）。
- **今天最反常的一条**：macro-inc/macro 以 **+106 星排在第 5 位**，是全榜唯一没过百的增量，却压过了 +1,478 的 jailbreaks（第 10）和 +1,380 的 LinkSwift（第 11）。

## 重点项目

### 1. JetBrains/thinkrail

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/JetBrains/thinkrail |
| 简介 | Vibe code with pi in a lightweight, real IDE that customises itself around the way you work — The Vibe You Need |
| 语言 | TypeScript |
| 总 Star | 4,944 |
| 今日新增 | 1,075 stars today |
| 标签 | Agent、IDE、TypeScript、开发工具、JetBrains |

JetBrains InnovationHub 的 agentic IDE，用 pi coding agent 配 git worktree 工作区与 SPEC.md 图谱，让 IDE 反过来适配人的工作方式。昨天 +1,211 排第 10、今天 +1,075 升到第 1，是唯一连续三天留在榜首区的存量项目。

### 2. elayadesign/ai-design-skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/elayadesign/ai-design-skills |
| 简介 | 面向 AI 编码工具的设计技能集合（Claude Code / Cursor / Codex / Windsurf），目前只交付 landing-page-design 一项 |
| 语言 | 未识别（仓库为纯 Markdown 技能文档） |
| 总 Star | 10,988 |
| 今日新增 | 1,938 stars today |
| 标签 | 设计、AI、技能包、前端、Claude Code |

面向 Claude Code / Cursor / Codex / Windsurf 的设计技能集合，目前只交付了 landing-page-design 一项，从 intake 提问到页面结构、转化文案与完整视觉系统一次做完。昨天 +1,395 排第 1、今天 +1,938 排第 2 —— 增量涨 39% 位次却后移，是「排序与日增脱钩」的第四个样本。仓库纯 Markdown，GitHub 未识别主语言（简介来自仓库 README 推断，页面 description 为空）。

### 3. obra/superpowers

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/obra/superpowers |
| 简介 | An agentic skills framework & software development methodology that works. |
| 语言 | Shell |
| 总 Star | 307,342 |
| 今日新增 | 1,096 stars today |
| 标签 | Agent、框架、方法论、Shell、开发流程 |

30.7 万星的技能框架与开发方法论，把「先写计划再动手」固化成 Agent 可执行的工作流。昨天 +608 → 今天 +1,096（+80%），是存量 9 席里增幅第二，属于老项目接一层 Agent 接口后二次增长。

### 4. HKUDS/DeepTutor

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/HKUDS/DeepTutor |
| 简介 | DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/. |
| 语言 | Python |
| 总 Star | 47,812 |
| 今日新增 | 2,376 stars today |
| 标签 | AI、LLM、教育、Python、RAG |

终身个性化辅导系统，本榜唯一的纯教育类项目。全榜增量第一：昨天 +1,587 → 今天 +2,376（+50%），位次从第 9 升到第 4，是今天唯一同时拿到「增量第一 + 位次前进」的项目。

### 5. macro-inc/macro

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/macro-inc/macro |
| 简介 | Macro is a unified workspace for teams: email, chat, docs, tasks, agents, calls, and CRM — @-linked together with shared AI memory. |
| 语言 | Rust |
| 总 Star | 5,359 |
| 今日新增 | 106 stars today |
| 标签 | Rust、协作、生产力、基础设施、Agent |

新上榜。把邮件、聊天、文档、任务、Agent、通话、CRM 合成一个工作区，内容之间用 @ 互链并共享团队级 AI 记忆。Rust + SolidJS 写成，团队自用两年后开源。+106 是全榜唯一没过百的增量，靠「一个系统取代 Slack+Linear+Notion+HubSpot」的叙事而非单点功能上榜。

### 6. Nutlope/hallmark

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Nutlope/hallmark |
| 简介 | Anti-AI-slop design skill for Claude Code, Cursor, and Codex. |
| 语言 | CSS |
| 总 Star | 40,554 |
| 今日新增 | 2,109 stars today |
| 标签 | 设计、AI、技能包、CSS、前端 |

反 AI 味（anti-slop）设计技能，用品味约束加 57 道 slop-test 卡住生成结果。昨天 +2,859 排第 2、今天 +2,109 排第 6（−26%），是「设计品味」赛道三席里唯一降温的一席，部分热度被同赛道的 ai-design-skills 分流。

### 7. pbakaus/impeccable

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/pbakaus/impeccable |
| 简介 | The design vocabulary for your coding agent. Steer with polish and bolder, review with critique and audit, catch AI slop before it ships. |
| 语言 | Rust |
| 总 Star | 92,404 |
| 今日新增 | 1,471 stars today |
| 标签 | 设计、AI、Rust、技能包、前端 |

给编码 Agent 用的设计词汇表：用 polish / bolder 引导，用 critique / audit 复核，在上线前拦住 AI 味。昨天 +1,458 → 今天 +1,471（+1%），是全榜最稳的一席；核心引擎用 Rust 写成以保证检测确定性，与 hallmark 的「生成时约束」、ai-design-skills 的「整站交付」构成同一赛道的三条互斥路线。

### 8. makecindy/cindy

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/makecindy/cindy |
| 简介 | Consider it done. The open-source AI agent that works out of the box · 想到，就能做到。开源、开箱即用的 AI Agent。 |
| 语言 | TypeScript |
| 总 Star | 8,007 |
| 今日新增 | 740 stars today |
| 标签 | AI、Agent、TypeScript、中文、自动化 |

中英双语定位的开源开箱即用 AI Agent。昨天 +1,446 → 今天 +740（−49%），是存量里跌幅最大的一席，一度冲高的热度正在回落。

### 9. nightly-labs/openbot

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/nightly-labs/openbot |
| 简介 | A local-first desktop workspace for persistent AI teammates. Run Codex, Claude, and Grok with dedicated workspaces, task queues, file sharing, browser control, and agent-to-agent collaboration. |
| 语言 | TypeScript |
| 总 Star | 3,156 |
| 今日新增 | 1,053 stars today |
| 标签 | Agent、TypeScript、桌面应用、本地优先、开发工具 |

本地优先的桌面工作区，让 Codex、Claude、Grok 各有独立工作区与任务队列，并支持文件共享、浏览器控制与 Agent 间协作。昨天 +794 → 今天 +1,053（+33%），是「多 Agent 编排从命令行走向桌面」的样本。

### 10. togg53192-cmd/jailbreaks

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/togg53192-cmd/jailbreaks |
| 简介 | LIST OF ALL MY JAILBREAKS（25+ 模型的系统提示词与越狱样本合集） |
| 语言 | 未识别（文本素材库） |
| 总 Star | 6,952 |
| 今日新增 | 1,478 stars today |
| 标签 | 安全、LLM、提示词、数据集、越狱 |

25+ 模型的系统提示词与越狱样本合集（简介来自仓库名推断，页面仅一句 LIST OF ALL MY JAILBREAKS）。昨天 +890 → 今天 +1,478（+66%），两天翻约 12 倍后仍在加速。属模型安全研究素材，不是工具。

### 11. hmjz100/LinkSwift

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/hmjz100/LinkSwift |
| 简介 | 一个基于 JavaScript 的网盘文件下载地址获取工具。基于【网盘直链下载助手】修改，支持 百度网盘 / 阿里云盘 / 中国移动云盘 / 天翼云盘 / 迅雷云盘 / 夸克网盘 / UC网盘 / 123云盘 八大网盘 |
| 语言 | JavaScript |
| 总 Star | 34,340 |
| 今日新增 | 1,380 stars today |
| 标签 | JavaScript、浏览器脚本、下载工具、中文、生产力 |

新上榜，本榜唯一的中文工具类项目。由「网盘直链下载助手」改写的网盘直链获取脚本，覆盖百度、阿里、移动、天翼、迅雷、夸克、UC、123 共八大网盘。3.4 万星的存量项目靠改版重新增长，+1,380 在新面孔里排第一。

### 12. expo/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/expo/skills |
| 简介 | A collection of AI agent skills for working with Expo projects and Expo Application Services |
| 语言 | Shell |
| 总 Star | 3,523 |
| 今日新增 | 212 stars today |
| 标签 | 技能包、React Native、移动开发、开发工具、Expo |

新上榜。Expo 官方出品的 Agent 技能集，覆盖 Expo / EAS / React Native / iOS / Android 的约束与工作流，通过官方插件市场与 skills CLI 双通道分发。是继 JetBrains、obra、elayadesign 之后又一个「官方亲自下场发技能包」的样本。

### 13. ruvnet/RuView

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/ruvnet/RuView |
| 简介 | π RuView turns commodity WiFi signals into real-time spatial intelligence, vital sign monitoring, and presence detection — all without a single pixel of video. |
| 语言 | Rust |
| 总 Star | 100,925 |
| 今日新增 | 596 stars today |
| 标签 | Rust、物联网、信号处理、AI、边缘计算 |

新上榜，10.1 万星。把普通 WiFi 的 CSI 信号变成实时空间感知：人形 DensePose、呼吸与心率监测、存在检测，全程不采集一像素视频。附带 ESP32 固件与 HuggingFace 预训练模型，是「感知层从视觉转向射频」的代表作。

### 14. xiaolai/the-craft-of-selfteaching

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/xiaolai/the-craft-of-selfteaching |
| 简介 | One has no future if one couldn't teach themself. |
| 语言 | Jupyter Notebook |
| 总 Star | 18,455 |
| 今日新增 | 295 stars today |
| 标签 | 教育、自学、中文、Jupyter Notebook、开源 |

新上榜。李笑来 2019 年建仓的《自学是门手艺》，用 Jupyter Notebook 写成。最后推送停在 2026-05-20（已近半年未更新），+295 全靠二次传播；也是今天 14 席里唯一与 AI 完全无关的项目。

## 观察

1. **「排序与日增脱钩」第四次出现，可以判定为常态。** 增量第一的 DeepTutor（+2,376）只排第 4；第 1 名 thinkrail +1,075 不到它的一半；hallmark +2,109 排第 6，低于 +1,471 的 impeccable（第 7）。今天还多了一个极端样本：macro +106 排第 5，压过 +1,478（第 10）和 +1,380（第 11）。**引用本榜时不能把位次当作热度排序。**

2. **「设计品味」赛道进入第四天，三条互斥路线同台且首次出现分流。** ai-design-skills（整站交付，+1,938）、hallmark（品味约束 + 57 道 slop-test，+2,109，−26%）、impeccable（Rust 确定性检测，+1,471，+1%）合计 **+5,518（34.6%）**，占比从昨天的 40% 降到 35%。赛道还在，但内部开始分化：生成时约束（hallmark）在让位给交付型（ai-design-skills）与检测型（impeccable）。

3. **技能包 5 席占 43%，并出现了第一个「官方团队」玩家。** 此前上榜的技能包都来自个人或实验室（obra、elayadesign、Nutlope、pbakaus），今天 expo/skills 是第一个由平台方（Expo）自己维护并走官方插件市场分发的。**「谁来为 Agent 写规则」这件事正在从社区行为变成平台责任**——JetBrains/thinkrail 也是同一趋势的另一面（把 Agent 直接做进 IDE）。

4. **新面孔的形态彻底分化，是今天最值得记的一点。** 五个新面孔分属五个完全不同的世界：macro（协作套件）、LinkSwift（中文网盘脚本）、expo/skills（移动开发技能包）、RuView（WiFi 射频感知）、the-craft-of-selfteaching（中文自学教材，且已半年未更新）。昨天新面孔还能归到「Agent + 设计」两个筐里，今天完全不能。**这更像是榜单本身的泛化，而不是某个赛道在爆发。**

5. **两个需要标注时效的项目。** the-craft-of-selfteaching 最后推送 2026-05-20，已近半年未更新，+295 完全来自二次传播；jailbreaks 是文本素材库而非工具，热度来自话题性而非实用性。两者都不应被当作「活跃项目」解读。

6. **Rust 第二次追平 TypeScript（各 3 席）。** 且三席毫无关联——协作套件、设计检测引擎、WiFi 感知固件。Rust 正在从「系统语言」变成「需要确定性或性能的任何地方」的默认选择，包括本该是 TS 天下的前端工具链。
