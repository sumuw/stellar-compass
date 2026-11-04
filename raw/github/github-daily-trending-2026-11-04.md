# GitHub 每日趋势榜 2026-11-04

## 今日概览

今日共 16 条（回查 GitHub Trending 页面 `Box-row` 计数同为 16），日增合计 15,302。对比基期 11-03 的 13 席：留住 6 席（worktrunk、mattpocock/skills、floci、claude-mem、agent-desktop、Scrapling），7 席掉榜（colibri、heretic、portal-ai-plugins、ai-goofish-monitor、hex、Kronos、CC-Game-Studios），新入 10 席。

语言分布：**Python 7 席第一**，Rust、Shell、TypeScript 各 2 席，Java、C、C# 各 1 席。Python 七席横跨本体推理（auto-ontology）、SDD 工具（spec-kit）、代码审查（pr-agent）、短视频生成（MoneyPrinterTurbo）、爬虫（Scrapling）、新闻雷达（Horizon）与媒体技能包（scenario-labs/skills），主题之分散罕见。

今天最值得注意的信号有三条：

1. **大厂官方入场连续第二天，且占了榜首。** NVIDIA 官方的 auto-ontology（语义图推理层，+2,053）直取第 1；GitHub 官方的 spec-kit（147k 星）回归第 7；Vercel 的 agent-desktop 连续两天增量第一。继昨天 Vercel + Spotify 之后，官方基建从「入场」变成「占位」。
2. **「技能包」赛道出现名人对垒。** mattpocock/skills（313k 星）与 Y Combinator 掌门人 Garry Tan 的 gstack（139k 星）同榜，加上 scenario-labs/skills（Scenario 官方媒体生成技能包），「公开自己的 agent 配置」仍是流量密码，但头部已从个人教程作者扩展到名人/官方。
3. **排序与日增脱钩第三天上演。** 增量第一 agent-desktop（+2,463）只排第 6；增量第三 DiscImageStudio（+1,792）只排第 12；增量第二 Scrapling（+2,006）排第 14；而排第 2 的 worktrunk 仅 +524。

## 重点项目

### 1. NVIDIA/auto-ontology

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/NVIDIA/auto-ontology |
| 简介 | Auto Ontology is a Python framework for building semantic, graph-based reasoning layers over data. It enables deterministic query generation, better context retrieval, and more explainable AI for LLM and agent workflows. |
| 语言 | Python |
| 总 Star | 4,658 |
| 今日新增 | 2,053 stars today |
| 标签 | 本体、知识图谱、语义推理、LLM、Python |

NVIDIA 官方开源的语义层框架：在数据之上构建图结构的推理层，为 LLM/Agent 工作流提供确定性查询生成、更好的上下文检索与可解释性。继昨天 Vercel、Spotify 之后又一家大厂官方入场 Agent 数据基建，今天 +2,053 直取榜首，仓库当天仍在推送。

### 2. max-sixty/worktrunk

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/max-sixty/worktrunk |
| 简介 | Worktrunk is a CLI for Git worktree management, designed for parallel AI agent workflows |
| 语言 | Rust |
| 总 Star | 10,965 |
| 今日新增 | 524 stars today |
| 标签 | Git、worktree、CLI、Rust、Agent |

面向并行 AI agent 工作流的 Git worktree 管理 CLI，把「一个 agent 一棵 worktree」做成开箱即用的命令。连续第三天在榜，总星破万，是榜单上少有的慢热留存型条目。

### 3. mattpocock/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mattpocock/skills |
| 简介 | Skills for Real Engineers. Straight from my .agents directory. |
| 语言 | Shell |
| 总 Star | 313,102 |
| 今日新增 | 1,376 stars today |
| 标签 | AI、技能包、Shell、工程实践、Claude |

Matt Pocock（Total TypeScript 作者）公开的个人 .agents 技能目录，313,102 星为全榜总星第一。昨日隔期回归后继续在榜，技能包赛道头部地位稳固。

### 4. floci-io/floci

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/floci-io/floci |
| 简介 | Light, fluffy, and always free - The AWS Local Emulator alternative |
| 语言 | Java |
| 总 Star | 29,511 |
| 今日新增 | 1,082 stars today |
| 标签 | AWS、本地模拟、Java、云开发、测试 |

轻量免费的 AWS 本地模拟器（LocalStack 替代），主打零配置本地起服务。连续第三天在榜，29,511 星，当天仍在推送。

### 5. thedotmack/claude-mem

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/thedotmack/claude-mem |
| 简介 | Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More |
| 语言 | TypeScript |
| 总 Star | 112,717 |
| 今日新增 | 1,165 stars today |
| 标签 | AI、Agent、记忆系统、TypeScript、开发工具 |

给各类编码 Agent 补上跨会话记忆：记录会话行为、AI 压缩后回注后续会话，支持 Claude Code、Codex、Copilot 等多种宿主。自 11-01 榜首起连续四天在榜，总星 112,717，当天仍在推送。

### 6. vercel-labs/agent-desktop

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/vercel-labs/agent-desktop |
| 简介 | Computer use CLI for AI agents |
| 语言 | Rust |
| 总 Star | 14,806 |
| 今日新增 | 2,463 stars today |
| 标签 | Agent、桌面控制、computer use、Rust、Vercel |

Vercel 官方实验室的 computer use CLI，让 AI agent 直接操作桌面。今日 +2,463 为全榜增量第一却只排第 6，昨天 +3,791 也只排第 2 —— 连续两天增量王，排序与日增脱钩的极端样本；总星两天从 13,278 涨到 14,806。

### 7. github/spec-kit

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/github/spec-kit |
| 简介 | 💫 Toolkit to help you get started with SDD or any other process! |
| 语言 | Python |
| 总 Star | 147,211 |
| 今日新增 | 810 stars today |
| 标签 | 规格驱动开发、SDD、GitHub官方、Python、开发流程 |

GitHub 官方的 spec-driven development 工具包（spec → plan → tasks → implement 流水线）。147,211 星老牌项目回归榜单，官方基建再占一席，当天仍有推送。

### 8. The-PR-Agent/pr-agent

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/The-PR-Agent/pr-agent |
| 简介 | 🚀 PR Agent: The Original Open-Source PR Reviewer. This project is not the Qodo free tier. |
| 语言 | Python |
| 总 Star | 14,680 |
| 今日新增 | 279 stars today |
| 标签 | 代码审查、PR、AI、开源、Python |

AI 代码审查的原始开源项目、Qodo 的社区维护前身，README 特意强调「这不是 Qodo 的开源免费版」。2023 年创建的老仓库，增量温和但身份特殊。

### 9. harry0703/MoneyPrinterTurbo

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/harry0703/MoneyPrinterTurbo |
| 简介 | 利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow. |
| 语言 | Python |
| 总 Star | 138,855 |
| 今日新增 | 615 stars today |
| 标签 | AI、短视频生成、自动化、Python、中文 |

老牌中文项目：输入主题或关键词，用 AI 大模型 + 自动化工作流一键生成高清短视频。138,855 星常青树，靠持续传播长期霸榜而非短期爆发。

### 10. garrytan/gstack

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/garrytan/gstack |
| 简介 | Use Garry Tan's exact Claude Code setup: 23 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA |
| 语言 | TypeScript |
| 总 Star | 139,262 |
| 今日新增 | 285 stars today |
| 标签 | Claude Code、技能包、Agent、TypeScript、名人配置 |

Y Combinator 掌门人 Garry Tan 公开自己的 Claude Code 配置：23 个工具分别扮演 CEO、设计师、工程经理、发布经理、文档工程师和 QA。139,262 星，「名人效应 × 技能包」与 mattpocock/skills 同榜对垒。

### 11. FareedKhan-dev/kimi-k3-in-c

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/FareedKhan-dev/kimi-k3-in-c |
| 简介 | A 2.78-trillion-parameter Kimi K3 running inference on a single CPU in 8.24 GB of RAM. Portable C99: no BLAS, no framework, no GPU. |
| 语言 | C |
| 总 Star | 10,206 |
| 今日新增 | 351 stars today |
| 标签 | 模型推理、MoE、本地运行、C、极限优化 |

纯 C99 在单 CPU + 8.24 GB 内存上跑 2.78 万亿参数的 Kimi K3，无 BLAS、无框架、无 GPU。「把大模型搬进个人电脑」赛道在 colibri 掉榜后的接棒者。⚠️ 最后推送 2026-10-02，已约 33 天未更新。

### 12. JiaFeiMiao-K-Cat/DiscImageStudio

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/JiaFeiMiao-K-Cat/DiscImageStudio |
| 简介 | 全能的光盘盘面可见图像生成与刻录工具：用刻录光驱在 DVD / CD / 单层蓝光盘上刻蚀出肉眼可见的图像（多平台，C#/.NET 10，GPL-3.0）。（仓库未填写简介，此段来自 README） |
| 语言 | C# |
| 总 Star | 6,453 |
| 今日新增 | 1,792 stars today |
| 标签 | 光盘刻录、图像生成、C#、.NET、创意工具 |

冷门赛道玩出花：任何刻录光驱都能在 DVD/CD/单层蓝光盘面刻蚀出肉眼可见的图像，中文项目、GPL-3.0 开源。今天 +1,792 冲到全榜增量第三，创意硬件工具的传播样本。简介来自仓库 README 推测。

### 13. MichaelCade/90DaysOfDevOps

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/MichaelCade/90DaysOfDevOps |
| 简介 | This repository started out as a learning in public project for myself and has now become a structured learning map for many in the community. We have 3 years under our belt covering all things DevOps, including Principles, Processes, Tooling and Use Cases surrounding this vast topic. |
| 语言 | Shell |
| 总 Star | 30,346 |
| 今日新增 | 156 stars today |
| 标签 | DevOps、学习路线、教程、Shell、社区 |

DevOps 三月学习地图，从个人 learning-in-public 长成 30,346 星的社区经典，覆盖原理、流程、工具与用例。⚠️ 最后推送 2026-06-24，停更约 4.4 个月，靠惯性传播在榜。

### 14. D4Vinci/Scrapling

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/D4Vinci/Scrapling |
| 简介 | 🕷️ The BEST Web Scraping framework that handles everything from a single request to a full-scale crawl! |
| 语言 | Python |
| 总 Star | 96,352 |
| 今日新增 | 2,006 stars today |
| 标签 | 爬虫、数据采集、反爬对抗、Python、框架 |

自适应选择器 + 反爬对抗的爬虫框架。昨天 +1,658 排第 11，今天增量涨到 +2,006 名次反而掉到第 14 —— 排序与增量脱钩的又一例。96,352 星，当天仍在推送。

### 15. Thysrael/Horizon

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Thysrael/Horizon |
| 简介 | 📡 Your own AI-powered news radar. Generates daily briefings in English & Chinese. \| 用 AI 构建你专属的新闻雷达 |
| 语言 | Python |
| 总 Star | 12,436 |
| 今日新增 | 121 stars today |
| 标签 | AI、新闻雷达、信息聚合、Python、中英双语 |

用 AI 构建个人专属新闻雷达，自动生成中英双语每日简报 —— 与本站同类的「AI 信息聚合」玩法。12,436 星，昨天仍有推送。

### 16. scenario-labs/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/scenario-labs/skills |
| 简介 | Get production-ready images, video, audio, and 3D from any AI agent: skills that pick the right model, price before spending, and keep characters and brands consistent through the Scenario MCP, plus expert teams that drive Blender, Maya, ZBrush, Unreal, and Unity. |
| 语言 | Python |
| 总 Star | 2,349 |
| 今日新增 | 224 stars today |
| 标签 | MCP、媒体生成、AIGC、Python、3D |

Scenario 官方技能包：让任意 AI agent 直接产出图片/视频/音频/3D，先选模型再估价、花前报价，通过 Scenario MCP 保持角色与品牌一致性，另附驱动 Blender/Maya/ZBrush/Unreal/Unity 的专家团队。媒体生产 agent 化的官方样本。

## 观察

**一、留存 6/13，掉榜 7 席全是「单点爆发型」。** 11-03 的 13 席留住 6 席：worktrunk、mattpocock/skills、floci、claude-mem、agent-desktop、Scrapling。掉榜的 7 席（colibri、heretic、portal-ai-plugins、ai-goofish-monitor、hex、Kronos、CC-Game-Studios）多为单日冲高条目；其中 Kronos 与 CC-Game-Studios 本就是停更项目，掉榜符合预期。留存席位共同点：当天全部有推送 —— 「当天在推」是留存的最强预测因子。

**二、大厂官方从入场走向占位。** NVIDIA（auto-ontology 榜首）、GitHub（spec-kit）、Vercel（agent-desktop 增量王）三家官方同榜，加上昨天的 Spotify，连续两天出现 2 家以上官方项目。Agent 生态的基建位置（语义层、桌面控制、开发流程、工程门户）正系统性落入有资源背书的官方项目手中。

**三、「技能包」赛道升维成名人/官方竞技场。** mattpocock/skills（313k）、gstack（139k，YC 掌门人）、scenario-labs/skills（Scenario 官方）同榜。公开个人 agent 配置的玩法没有退潮，而是从「教程作者晒目录」升级为「名人晒整套组织架构」「官方晒产品化技能包」。

**四、⚠️ 两个需标注时效的条目。** FareedKhan-dev/kimi-k3-in-c 最后推送 2026-10-02（约 33 天未更新），MichaelCade/90DaysOfDevOps 最后推送 2026-06-24（停更约 4.4 个月）—— 两者均靠惯性传播在榜。

**五、中文项目 3 席，为近几期最多。** DiscImageStudio（光盘刻录图像）、MoneyPrinterTurbo（短视频生成）、Horizon（中英双语新闻雷达）—— 且 DiscImageStudio 以 +1,792 冲进增量前三。

**六、排序与日增脱钩持续。** 增量前三（agent-desktop +2,463、auto-ontology +2,053、Scrapling +2,006）分列第 6、第 1、第 14；名次与当日增量依旧无关，读榜时不要拿名次当天增量用。
