# GitHub 每日趋势榜 2026-10-31

## 今日概览

榜单 **14 条**，日增合计 **13,536 星**。已回查页面 `Box-row` 计数确认为 14，与解析结果一致，不是解析失败。

今天的结构可以一句话概括：**存量重新压过新面孔，「让多个 Agent 协同且可被调度」首次凑成四席，而昨天刚上榜的 Anthropic 官方技能包一天就掉榜。**

- **存量 9 席、新面孔 5 席**。10-30 的 15 席里留下来 9 席，掉榜 6 席（CopilotKit/OpenBot、expo/skills、macro-inc/macro、**anthropics/skills**、JetBrains/thinkrail、togg53192-cmd/jailbreaks）。存量合计 **+10,116（74.7%）**，新面孔 **+3,420（25.3%）** —— 存量占比从上期的 56.9% 大幅回升，新面孔占比回落到四分之一。
- **存量整体在退潮**：同样这 9 席在 10-30 合计 +11,434，今天 −11.5%。其中 **4 增 1 平 4 跌**：claude-mem **+51%**、lightpanda **+48%**、OpenMausBot **+46%**、t3code **+23%**；mattpocock/skills **+0.7%** 基本持平；下跌的是 DeepTutor **−55%**、superpowers **−47%**、impeccable **−42%**、ziwei-doushu **−3%**。
- **Anthropic 官方技能包「上榜一日游」**：anthropics/skills（18.5 万星，10-30 首次上榜 +295）今天即掉榜。这是本库记录里平台方技能包第一次在第二天就退出日榜，与 expo/skills 的境遇相同 —— 官方入场能换来单日关注，但换不来持续增量。
- **今天最强的簇是「Agent 协同 / 调度」，四席合计 +4,917（36.3%）**：Claude-Code-Game-Studios（49 个 Agent 的游戏工作室，+1,347）、t3code（远程操控本机 Agent 的控制面，+1,148）、OpenMausBot（本地 bot 团队，+1,304）、Orkas（16 个专家 Agent 的桌面团队，+1,118）。前三席分属完全不同的世界（游戏开发 / 远程控制 / 桌面聊天），却在同一天指向同一个需求：**Agent 已经多到需要一个调度层。**
- **技能包仍是默认形态，但形态在变**：4 席（mattpocock/skills、Claude-Code-Game-Studios、impeccable、superpowers）合计 **+4,231（31.3%）**。其中两个 30 万星量级的巨头（superpowers 31.0 万 / mattpocock 30.8 万）连续第二天同框，星数仅差约 1,700 —— 实验室方法论与个人实践两条路线几乎并驾齐驱。
- **「设计品味」赛道只剩 impeccable 一席，且热度显著退潮**：hallmark 与 ai-design-skills 已于上期掉榜，今天 impeccable 从全榜增量第一（+2,300）跌到 +1,339（−42%）。该赛道从上期的三席塌缩到一席后，唯一幸存者的增量也在腰斩。
- **语言分布**：TypeScript **5 席**继续第一（claude-mem、t3code、ziwei-doushu、OpenMausBot、OpenMAIC），Shell 3 席，Python 2 席，Rust / Zig / JavaScript / Swift 各 1 席。
- **排序与日增脱钩第六次确认（可判定为常态）**：第 2 名 mattpocock/skills 的 **+882 低于第 3–7 名全部五席**（+1,347 / +1,148 / +1,093 / +1,304 / +1,339）；第 8 名 superpowers 的 +663 也低于第 9 / 10 / 11 名。反过来，第 1 名 claude-mem 是今天**唯一同时拿到增量第一和排名第一**的项目 —— 这是本榜近期罕见的一次「两个第一重合」。

## 重点项目

### 1. thedotmack/claude-mem

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/thedotmack/claude-mem |
| 简介 | Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More |
| 语言 | TypeScript |
| 总 Star | 107,682 |
| 今日新增 | 1,723 stars today |
| 标签 | AI、Agent、记忆、上下文、TypeScript |

给 Claude Code、Codex、Gemini、Copilot 等多个 Agent 做跨会话持久记忆：记录会话中 Agent 做过的一切，用 AI 压缩后把相关上下文注回以后的会话。10.8 万星的存量项目，+1,140 → +1,723（+51%），连续第二天在榜，且是今天唯一同时拿到「日增第一」与「排名第一」的项目。

### 2. mattpocock/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mattpocock/skills |
| 简介 | Skills for Real Engineers. Straight from my .agents directory. |
| 语言 | Shell |
| 总 Star | 308,251 |
| 今日新增 | 882 stars today |
| 标签 | Agent、技能包、工程方法论、Shell、开发者工具 |

Matt Pocock 把自己 .agents 目录里的技能直接开源，定位是「给真工程师用的技能」。30.8 万星，与 obra/superpowers（31.0 万）星数仅差约 1,700，两者连续第二天同榜。今天 +882 的日增量只排全榜第 10，却占着第 2 位 —— 是「排序与日增脱钩」的第六个样本。

### 3. Donchitos/Claude-Code-Game-Studios

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Donchitos/Claude-Code-Game-Studios |
| 简介 | Turn Claude Code into a full game dev studio — 49 AI agents, 72 workflow skills, and a complete coordination system mirroring real studio hierarchy. |
| 语言 | Shell |
| 总 Star | 31,071 |
| 今日新增 | 1,347 stars today |
| 标签 | Agent、游戏开发、技能包、多智能体、Shell |

把 Claude Code 变成一整个游戏开发工作室：49 个 AI Agent、72 个工作流技能，外加一套照搬真实工作室层级（主美 / 主程 / 制作人）的协作系统，覆盖 Unity、Unreal、Godot。2026-02 建仓，本次以 +1,347 首度上榜，是今天新面孔里增量最高的一席。⚠️ 最后推送 2026-10-19，热度集中在二次传播。

### 4. pingdotgg/t3code

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/pingdotgg/t3code |
| 简介 | T3 Code — an agent harness control surface: drive the agents on your machine (Claude Code, Codex, Cursor, Grok Build, OpenCode, Antigravity) from a mobile app, web app or desktop app. |
| 语言 | TypeScript |
| 总 Star | 35,133 |
| 今日新增 | 1,148 stars today |
| 标签 | Agent、控制面、远程开发、TypeScript、开发者工具 |

T3 Code —— 一个「Agent 调度控制面」：用 iOS / Android / Web / Electron 四个客户端远程操控本机上已装好的 Claude Code、Codex、Cursor、Grok Build、OpenCode、Antigravity。theo（t3.gg）出品，主打远程可用与完全开源可 fork。仓库 description 字段为空，本条简介取自仓库 README。3.5 万星，+930 → +1,148（+23%）。

### 5. Renhuai123/ziwei-doushu

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Renhuai123/ziwei-doushu |
| 简介 | 紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据 |
| 语言 | TypeScript |
| 总 Star | 12,233 |
| 今日新增 | 1,093 stars today |
| 标签 | 紫微斗数、命理、TypeScript、知识库、中文 |

紫微斗数开源排盘引擎，基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库与古籍原文数据。1.2 万星，+1,126 → +1,093（−3%），连续第二天在榜且增量基本持平，是今天唯一进入前十的中文命理向项目。

### 6. milind-soni/OpenMausBot

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/milind-soni/OpenMausBot |
| 简介 | Open-source Grok Bot alternative with a virtual machine that bots can use |
| 语言 | TypeScript |
| 总 Star | 9,487 |
| 今日新增 | 1,304 stars today |
| 标签 | Agent、桌面应用、聊天、TypeScript、开源替代 |

Grok Bot 的开源替代：侧边栏里每个 bot 都是一个本地跑着的真 Agent（Claude 或 Codex），各有自己的性格、模型、云电脑与已连接应用，能像联系人一样对话并逐项审批它的动作。Electron + React 19 写成，2026-08 建仓，主打本地优先、自带模型。+895 → +1,304（+46%）。

### 7. pbakaus/impeccable

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/pbakaus/impeccable |
| 简介 | The design vocabulary for your coding agent. Steer with polish and bolder, review with critique and audit, catch AI slop before it ships. |
| 语言 | Rust |
| 总 Star | 98,141 |
| 今日新增 | 1,339 stars today |
| 标签 | 设计、AI、Rust、技能包、前端 |

给编码 Agent 用的设计词汇表：用 polish / bolder 引导，用 critique / audit 复核，在上线前拦住 AI 味。昨天拿到全榜增量第一（+2,300），今天 −42% 回落到 +1,339。「设计品味」赛道在 hallmark 与 ai-design-skills 掉榜后只剩它一席，但热度已明显退潮。

### 8. obra/superpowers

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/obra/superpowers |
| 简介 | An agentic skills framework & software development methodology that works. |
| 语言 | Shell |
| 总 Star | 309,978 |
| 今日新增 | 663 stars today |
| 标签 | Agent、技能框架、工程方法论、Shell、开发者工具 |

Agent 技能框架 + 一整套软件开发方法论。31.0 万星，是本榜存量最大的项目；+1,259 → +663（−47%），存量里跌幅第二。与 mattpocock/skills 连续第二天同榜，两者星数仅差约 1,700 —— 个人与实验室两条路线几乎并驾齐驱。

### 9. lightpanda-io/browser

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/lightpanda-io/browser |
| 简介 | Lightpanda: the headless browser designed for AI and automation |
| 语言 | Zig |
| 总 Star | 39,142 |
| 今日新增 | 929 stars today |
| 标签 | 浏览器、自动化、Zig、AI、基础设施 |

专为 AI 与自动化场景设计的无头浏览器，用 Zig 写成，主打比 Chromium 更轻的抓取 / 自动化底座。3.9 万星，+626 → +929（+48%），连续第二天在榜且逆势加速，是今天存量里增幅第三的一席，也是全榜唯一的 Zig 项目。

### 10. HKUDS/DeepTutor

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/HKUDS/DeepTutor |
| 简介 | DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/. |
| 语言 | Python |
| 总 Star | 52,692 |
| 今日新增 | 1,035 stars today |
| 标签 | AI、教育、个性化学习、Python、LLM |

香港大学 HKUDS 的终身个性化辅导系统，主打长期陪伴式的一对一教学。5.3 万星，+2,282 → +1,035（−55%），是今天存量里跌幅最大的一席但仍在榜内。与 OpenMAIC 同日上榜，构成本榜今天唯一一个成型的「教育」簇。

### 11. Orkas-AI/Orkas

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Orkas-AI/Orkas |
| 简介 | Orkas is an open-source (MIT), local-first AI team for your desktop: a Commander turns your goal into to-dos and coordinates 16 built-in specialist agents plus Claude Code, Codex, OpenCode, OpenClaw and Hermes, with projects, scheduled automations and connectors. Free app for macOS & Windows; built-in models or your own keys. |
| 语言 | JavaScript |
| 总 Star | 6,073 |
| 今日新增 | 1,118 stars today |
| 标签 | Agent、多智能体、桌面应用、本地优先、JavaScript |

开源（MIT）、本地优先的桌面 AI 团队：一个 Commander 把目标拆成待办，再调度 16 个内置专家 Agent，并可接入 Claude Code、Codex、OpenCode、OpenClaw、Hermes；带项目、定时自动化与连接器，macOS / Windows 免费应用。2026-04 建仓，本次以 +1,118 首度上榜。

### 12. THU-MAIC/OpenMAIC

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/THU-MAIC/OpenMAIC |
| 简介 | Open Multi-Agent Interactive Classroom — Get an immersive, multi-agent learning experience in just one click |
| 语言 | TypeScript |
| 总 Star | 42,154 |
| 今日新增 | 115 stars today |
| 标签 | AI、教育、多智能体、TypeScript、学术 |

清华 MAIC 的开放多智能体互动课堂，一键生成沉浸式多智能体学习体验；配套 JCST'26 论文、在线 Demo（open.maic.chat），并已接入 OpenClaw 与本地模型方案 Lemonade。4.2 万星但今日仅 +115，是全榜增量最低的一席 —— 星量级与当日热度明显不匹配。

### 13. bregman-arie/devops-exercises

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/bregman-arie/devops-exercises |
| 简介 | Linux, Jenkins, AWS, SRE, Prometheus, Docker, Python, Ansible, Git, Kubernetes, Terraform, OpenStack, SQL, NoSQL, Azure, GCP, DNS, Elastic, Network, Virtualization. DevOps Interview Questions |
| 语言 | Python |
| 总 Star | 85,898 |
| 今日新增 | 341 stars today |
| 标签 | DevOps、面试、运维、题库、Python |

覆盖 Linux / Jenkins / AWS / SRE / Docker / K8s / Terraform 等的 DevOps 面试题与练习集，2019 年建仓、8.6 万星的老牌仓库。⚠️ 最后推送 2025-12-27，近 10 个月未更新，本次 +341 全靠二次传播并首度进入本日榜，属典型的老项目回潮而非新品。

### 14. vorssaint/vorssaint-utils

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/vorssaint/vorssaint-utils |
| 简介 | Free and open-source macOS menu bar toolkit. |
| 语言 | Swift |
| 总 Star | 31,826 |
| 今日新增 | 499 stars today |
| 标签 | macOS、菜单栏、Swift、系统工具、开源 |

免费开源的 macOS 菜单栏工具集：窗口切换、应用卸载、音量混音、系统监控、防休眠、Finder 增强等。2026-06 建仓，本次以 +499 首度上榜，是今天唯一与 AI / Agent 完全无关的项目。

## 观察

1. **存量回到主导，但这是一次「退潮中的主导」。** 存量占比从 56.9% 回升到 74.7%，可同样这 9 席的增量合计比前一天少 11.5%，且 4 席下跌、跌幅最大的 DeepTutor 达 −55%。所以今天的格局不是存量走强，而是新面孔更弱 —— 5 个新面孔只带来 +3,420，是近期偏低的一档。

2. **「Agent 协同 / 调度」第一次凑成四席，且解法完全不收敛。** Claude-Code-Game-Studios 用「工作室层级 + 角色分工」、Orkas 用「Commander 拆任务 + 16 个专家」、t3code 用「远程控制面」、OpenMausBot 用「多个 bot 当联系人」。四种互不相干的实现同时冲上日榜，说明需求真实但形态远未定型 —— 与两周前「设计品味」赛道三席互斥路线的情形同构。

3. **平台方入场换不来留存，这是第二次确认。** Expo 的 expo/skills 与 Anthropic 的 anthropics/skills 都在上榜次日掉榜。官方仓库能靠品牌拿到单日脉冲，但要留在日榜上仍需持续的增量来源；相比之下，个人维护的 mattpocock/skills 与实验室的 superpowers 已连续两天在榜。

4. **技能包的竞争已经进入「两个 30 万星正面相撞」的阶段。** superpowers（31.0 万）与 mattpocock/skills（30.8 万）相差不到 1 个百分点，且连续两天同框。这两个项目的定位并不冲突（一个是框架 + 方法论，一个是实战技能集），但争夺的是同一批用户的 `.agents` 目录。

5. **今天出现了两个必须标注时效的条目。** Claude-Code-Game-Studios 最后推送停在 2026-10-19，devops-exercises 停在 2025-12-27（近 10 个月），两者的增量都来自二次传播而非新进展。读榜时应把它们与当日有实际提交的 10 席区分开。

6. **非 AI 项目只剩一席，且是系统工具类。** vorssaint-utils（macOS 菜单栏工具集）是今天唯一与 AI / Agent 无关的条目。对比两周前榜单里还有网盘脚本、WiFi 感知等泛化主题，今天的 14 席里有 12 席可以直接挂到 Agent 生态上 —— 榜单的主题集中度在升高，而非泛化。
