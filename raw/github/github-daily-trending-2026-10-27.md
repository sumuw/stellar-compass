# GitHub 每日趋势榜 2026-10-27

## 今日概览

今日共 **11 个**项目上榜（昨日 14 个），合计日增 **14,384** 星——与昨日的 14,204 基本持平，但席位少了 3 个，热度更集中。

**结构上有两点值得先说。**

一是**存量第一次「全部留榜」**。昨日 14 席里今天保留下来 7 席，**没有一席掉到榜外**；其中 6 席增幅继续扩大，唯一回落的是 impeccable（+1,551 → +1,458，−6%，幅度极小）。7 席存量合计 +9,904，占全榜 **69%**。真正掉榜的是昨日另外 7 席：TradingAgents、VoiceStudio、microduck、Agent-Reach、huashu-design、NVIDIA/SkillSpector、andrej-karpathy-skills。

二是**「设计品味」赛道第四天成立，并且第一次包揽前两名**。空降第 1 的 `elayadesign/ai-design-skills`（+1,395）、第 2 的 `Nutlope/hallmark`（+2,859，全榜增量第一）、第 5 的 `pbakaus/impeccable`（+1,458）——三席合计 **+5,712，占全榜 40%**。赛道内部已分化出三条互斥路线：**整站交付**（ai-design-skills，从需求采集一路做到可交付落地页并导出动效）、**品味约束**（hallmark，20 套主题 + 57 道 slop-test 闸门）、**确定性检测**（impeccable，用 Rust 写可被规则校验的设计语言）。昨天刚出现的「第三条路线」huashu-design 今日掉榜，位置被 ai-design-skills 接走。

语言分布：TypeScript 4（openbot、cindy、postiz-app、thinkrail）、Unknown 2（ai-design-skills、jailbreaks），CSS / Rust / Shell / Python / JavaScript 各 1。TypeScript 重回第一。

## 重点项目

### 1. elayadesign/ai-design-skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/elayadesign/ai-design-skills |
| 简介 | A growing collection of design skills for AI coding tools — Claude Code, Cursor, Codex, Windsurf, and anything else that reads a markdown rules file.（抓取时页面未提供简介，此处按仓库 README 补齐） |
| 语言 | Unknown（纯 Markdown 技能库，无主语言） |
| 总 Star | 9,092 |
| 今日新增 | 1,395 stars today |
| 标签 | 设计技能、AI Agent、前端、提示工程、技能包 |

一套面向 AI 编码工具的设计技能集合，覆盖 Claude Code / Cursor / Codex / Windsurf / Cline，每个技能是一个自包含文件夹，装哪个用哪个。当前两个技能：`landing-page-design`（从需求采集问起，做页面结构、转化文案，再套一整套字体 / 间距 / 圆角 / 动效的视觉系统）和 `design-to-motion`（把静态设计稿做成逐像素对齐的动画展示，导出 MP4 与 GIF）。设计价值观集中在每个 SKILL.md 末尾一节，改一处即全局生效。MIT 许可。**今日以 +1,395 空降榜首**，是「设计品味」赛道里唯一走「整站交付」路线的一家。

### 2. Nutlope/hallmark

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Nutlope/hallmark |
| 简介 | Anti-AI-slop design skill for Claude Code, Cursor, and Codex. |
| 语言 | CSS |
| 总 Star | 38,791 |
| 今日新增 | 2,859 stars today |
| 标签 | 设计技能、AI Agent、前端、CSS、Claude Code |

Together AI 出品的反「AI 味」设计技能包：先给 brief 挑一个宏观骨架，再套 20 套主题之一，出码前跑 57 道 slop-test 闸门和一轮自我批判。`study` 这个动词最有意思——喂一张你喜欢的页面截图，它抽的是结构、字体搭配与色彩锚点，并明确拒绝像素级抄袭。**连续第四日在榜，今日 +2,859 登顶全榜增量第一**（昨日 +2,235，+28%），也是存量里唯一连续四天加速的项目。

### 3. nightly-labs/openbot

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/nightly-labs/openbot |
| 简介 | A local-first desktop workspace for persistent AI teammates. Run Codex, Claude, and Grok with dedicated workspaces, task queues, file sharing, browser control, and agent-to-agent collaboration. |
| 语言 | TypeScript |
| 总 Star | 2,322 |
| 今日新增 | 794 stars today |
| 标签 | AI Agent、多智能体、桌面应用、本地优先、TypeScript |

本地优先的桌面 Agent 工作台：每个 agent 是 Codex / Claude Code / Grok（及经 ACP 接入的 OpenCode、Gemini、Cursor、Cline）的一个独立持久会话，配自己的本地工作区、FIFO 任务队列（可暂停 / 恢复 / 取消，崩溃安全）、agent 间消息与受管文件传输、共享频道与显式委派，还有一个 agent 可打开并操控的内嵌浏览器。上下文监控会在线程撑爆模型窗口前自动压缩。macOS / Windows / Linux / Docker 均可跑。**两点需注意**：agent 默认以 `danger-full-access` + `approvalPolicy: never` 运行（首次授权后不再逐操作确认），且仓库是 **PolyForm Noncommercial 1.0.0**，商用需另谈授权。昨日 +312 → 今日 +794（+155%）。

### 4. obra/superpowers

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/obra/superpowers |
| 简介 | An agentic skills framework & software development methodology that works. |
| 语言 | Shell |
| 总 Star | 306,331 |
| 今日新增 | 608 stars today |
| 标签 | AI Agent、技能框架、工程方法论、Shell、自动化测试 |

把软件工程方法论做成按需加载的技能库：TDD（RED-GREEN-REFACTOR）、系统化调试与根因追踪、苏格拉底式设计澄清、写计划、子 agent 并行开发、git worktree 隔离、代码评审与收尾。会话启动时注入引导技能，命中任务即**强制走流程**而非建议。支持 Claude Code / Codex / Cursor / Gemini / Pi / Hermes / Muse 等多宿主，还带一个 `diagnosing-superpowers` 技能——让 agent 读自己的会话 transcript 找出哪一步跑偏了。主语言是 Shell，因为它的活是把技能接进各种 CLI。MIT。由 Jesse Vincent 与 Prime Radiant 团队维护。

### 5. pbakaus/impeccable

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/pbakaus/impeccable |
| 简介 | The design language that makes your AI harness better at design. |
| 语言 | Rust |
| 总 Star | 90,370 |
| 今日新增 | 1,458 stars today |
| 标签 | 设计语言、AI Agent、Rust、前端、确定性检测 |

与 hallmark 同属「让 AI 做出来的界面像样」赛道，但路线相反：hallmark 给的是风格与品味约束，impeccable 给的是一套**能被确定性规则检测**的设计语言——主语言是 Rust，正因为要跑检测引擎。连续第四日在榜，今日 +1,458，是全部 7 席存量中**唯一微降**的一席（昨日 +1,551，−6%），幅度极小，属高位横盘而非掉队。

### 6. makecindy/cindy

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/makecindy/cindy |
| 简介 | Consider it done. The open-source AI agent that works out of the box · 想到，就能做到。开源、开箱即用的 AI Agent。 |
| 语言 | TypeScript |
| 总 Star | 7,392 |
| 今日新增 | 1,446 stars today |
| 标签 | AI Agent、开源、TypeScript、生产力、中文 |

定位「想到，就能做到」的开箱即用开源 AI Agent，中英双语介绍。昨日 +1,268 → 今日 +1,446（+14%），连续第三日在榜，位次从第 4 退到第 6 但增量继续走高。

### 7. gitroomhq/postiz-app

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/gitroomhq/postiz-app |
| 简介 | 📨 The ultimate agentic social media scheduling tool 🤖 |
| 语言 | TypeScript |
| 总 Star | 39,235 |
| 今日新增 | 953 stars today |
| 标签 | 社交媒体、自动化、AI Agent、MCP、TypeScript |

面向 Agent 的社媒排期平台：一个日历管 30+ 渠道（X、LinkedIn、Instagram、TikTok、YouTube、Reddit、Threads、Bluesky、Discord、Slack 等），Claude / ChatGPT / Cursor / Codex / OpenClaw 通过 **MCP server、CLI 或可安装技能**接入，Agent 起草并排期、内容先落进日历由人审批后才发出——官方的说法是「Agent 提议，人批准」。开源版 AGPL-3.0 自托管，渠道 / 帖子 / 成员无限；云版按档位计费。2023 年建仓的老项目，**今日最大跳变：昨日 +146 → 今日 +953（+553%）**，位次从倒数第三升到第 7。

### 8. affaan-m/ECC

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/affaan-m/ECC |
| 简介 | The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond. |
| 语言 | JavaScript |
| 总 Star | 290,762 |
| 今日新增 | 1,183 stars today |
| 标签 | Agent Harness、性能优化、AI Agent、开发者工具、技能包 |

面向 Claude Code / Codex / Opencode / Cursor 的 agent harness 优化系统，把技能、直觉（instincts）、记忆、安全和「先研究后动手」的开发流程打包成一层可安装的东西。昨日 +987 → 今日 +1,183（+20%）。另有配套的 ECC Tools GitHub App，可扫仓库历史自动生成项目专属的技能、规则、钩子与安全检查并发 PR。

### 9. HKUDS/DeepTutor

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/HKUDS/DeepTutor |
| 简介 | DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/. |
| 语言 | Python |
| 总 Star | 45,676 |
| 今日新增 | 1,587 stars today |
| 标签 | 教育、RAG、AI Agent、Python、知识库 |

香港大学 HKUDS 的 agent-native 终身个性化学习工作台。Chat / 提问 / 测验 / 深度研究 / 可视化 / 解题 / 课程学习 / 掌握路径 / 沉浸阅读共用同一个 capability runtime 与会话上下文，切模式不丢学习进度。多引擎 RAG 可选（LlamaIndex、GraphRAG、LightRAG、PageIndex，也支持接 Obsidian vault、Kiwix ZIM 档案），三层可审计记忆（L1 traces / L2 summaries / L3 synthesis），还能在对话中直接咨询本机的 Claude Code / Codex / Hermes 等 agent。Apache-2.0，`pip install -U deeptutor` 即可起全栈。有 arXiv 论文（2604.26962）。**今日以 +1,587 空降第 9，增量排全榜第三**，是本榜近期少见的教育场景项目。

### 10. JetBrains/thinkrail

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/JetBrains/thinkrail |
| 简介 | Vibe code with pi in a lightweight, real IDE that customises itself around the way you work — The Vibe You Need |
| 语言 | TypeScript |
| 总 Star | 3,864 |
| 今日新增 | 1,211 stars today |
| 标签 | Agentic IDE、开发工具、TypeScript、Git Worktree、规范驱动 |

JetBrains InnovationHub 的开源 agentic IDE（Apache-2.0）。它自己不写 agent，而是给 pi coding agent 套一层真正的 IDE：每个任务是一个 git worktree，多 agent 并行互不污染主分支；项目知识存在一张互相引用的 SPEC.md 图谱里，由 agent 自行维护，让「设计意图」活过一次会话。10-24 登 HN 首页后爆发（+52 → +1,156），今日 +1,211（+5%）**进入稳定平台期**，连续第三日在榜。

### 11. togg53192-cmd/jailbreaks

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/togg53192-cmd/jailbreaks |
| 简介 | LIST OF ALL MY JAILBREAKS |
| 语言 | Unknown |
| 总 Star | 5,371 |
| 今日新增 | 890 stars today |
| 标签 | 提示工程、AI 安全、越狱、大语言模型、研究 |

收录 25+ 模型（Claude、Gemini、Grok、GLM、DeepSeek、Kimi、Qwen、Gemma、GPT-OSS）的 31 条系统提示、人格锁与 AGENTS.md，官方定位是「研究指令层级与策略覆盖如何影响模型行为」——可复制进客户端自定义指令，也可直接当仓库根的 AGENTS.md 用。热度曲线异常陡：10-24 +70 → 10-25 +192 → 10-26 +857 → **10-27 +890**，两天内翻了约 12 倍，日均 fork 约 99 次。⚠️ 属对抗性输入集合，用于他人服务可能违反其使用条款；本条仅作趋势记录，不构成使用建议。

## 观察

**1. 存量 7 席全部留榜，无一掉队。** hallmark +28%、openbot +155%、postiz-app +553%、ECC +20%、cindy +14%、thinkrail +5%，仅 impeccable −6%。这与昨日「存量全面压过新面孔」是同一现象的延续，但今天更进一步——**一个都没丢**。合计 +9,904 占 69%。过去两周「上榜即衰减」的规律已被连续三天反转，这批项目正处在扩散期。

**2. 「设计品味」赛道第四天，第一次包揽前两名。** ai-design-skills（整站交付）第 1、hallmark（品味约束 + 闸门）第 2、impeccable（Rust 确定性检测）第 5，三席合计 +5,712 占全榜 **40%**。昨天刚出现的第三条路线 huashu-design（中文 + 可编辑 PPTX）今日掉榜，位置由 ai-design-skills 接走——**同一赛道内部开始出现席位换手**，说明竞争已从"有没有"进入"哪条路线更好"。

**3. 排序与日增脱钩第三次确认，可判定为常态。** 第 1 名 ai-design-skills +1,395 少于第 2 名 hallmark +2,859；第 9 名 DeepTutor +1,587 高于第 4–8 名中的四席；第 11 名 jailbreaks +890 高于第 4 名 superpowers +608。→ 引用「第几名」时应同时给出增量，位次不等于热度排序。

**4. 安全侧只剩一席，且性质从「防」变成「探」。** 昨日的 NVIDIA/SkillSpector（安装前扫技能包漏洞）今日掉榜，补位的是 togg53192-cmd/jailbreaks——收集各模型的系统提示与越狱提示。同一块注意力从「怎么防住 Agent」滑向「模型边界到底在哪」。

**5. 教育场景第一次上榜。** DeepTutor（+1,587）是本榜近期第一个教育类项目，且读数最"厚"：共用 runtime 的十个学习模式 + 多引擎 RAG + 三层可审计记忆 + 有 arXiv 论文。它的出现把「Agent 用在哪」从写代码、做设计、管社媒再推开一格。

**6. 两个「老项目被 Agent 化改造后重新获客」的样本。** postiz-app（2023 年建仓，+146 → +953）与 superpowers（总星 30.6 万，+608）——前者给日历加了 MCP server 让 Agent 来排期，后者把方法论做成跨宿主的技能框架。**存量产品接一层 Agent 接口，就能重新进入增长曲线**，这可能是明年最普遍的改造路径。

**7. 技能包仍是默认形态，但今天这批都带「可复核产出」。** 11 席里 6 席是技能包或方法论（ai-design-skills、hallmark、superpowers、impeccable、ECC、thinkrail），合计 +8,716 占 61%。与 10-21 那批「只卖身份与流程描述」的插件不同，今天这批都给出能被检验的东西：闸门、检测规则、worktree 隔离、SPEC.md 图谱、导出的动画文件。
