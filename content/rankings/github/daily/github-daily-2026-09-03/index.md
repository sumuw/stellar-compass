---
title: GitHub 每日趋势榜 2026-09-03
description: 2026-09-03 GitHub Trending 榜首为 fmtlib/fmt，当日共收录 19 个项目。
date: '2026-09-03T08:00:00+08:00'
rankingKey: '2026-09-03'
slug: github-daily-2026-09-03
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

2026-09-03 GitHub Trending 共收录 19 个项目，榜首 fmtlib/fmt（955 stars today）。语言分布：Python 6、JavaScript 3、Shell 2、HTML 2、TypeScript 2、C++ 1。

## 重点项目

### 1. fmtlib/fmt

- 地址：https://github.com/fmtlib/fmt
- 简介：`A modern formatting library` —— C++ 事实标准的格式化库，类型安全、高性能的 printf 替代品，其设计已被吸纳进 C++20 的 `std::format`。
- 语言：C++
- 今日新增：955 stars today
- 标签：格式化、C++20、基础库、类型安全、高性能

昨日 +3，今日 +955，跳了 300 多倍。查 releases，最近版本是 **12.2.0（2026-06-16）**，近三个月无新版——所以这不是版本发布驱动，而是老牌基建的一次流量脉冲（二次曝光 / 社区讨论带动）。fmt 的地位不需要 trending 背书，把它读成"今日 C++ 圈有大事"是误读。真实信号只有一个：**存量巨头偶尔会被顶上日榜，且往往是新项目供给相对分散的时候**。

### 2. mattpocock/skills

- 地址：https://github.com/mattpocock/skills
- 简介：`Skills for Real Engineers. Straight from my .agents directory.` —— 面向真实工程师的技能集，直接来自作者的 `.agents` 目录。
- 语言：Shell
- 今日新增：1,576 stars today
- 标签：Agent 技能、TDD、架构治理、反 vibe coding、工程实践

连续在榜且继续放大（+1,103 → +1,576，+43%）。Matt Pocock（TypeScript 教育圈知名作者）把工程习惯打包成小而可组合的技能，针对四大痛点：**需求不对齐** → `/grill-me`、`/grill-with-docs` 拷问式提问；**表达冗长** → 建共享语言、维护 `CONTEXT.md` 与 ADR；**代码不可靠** → `/tdd` 红-绿-重构、`/diagnosing-bugs` 系统化排错；**架构腐化** → `/to-spec`、`/improve-codebase-architecture`。定位明确：**反对 vibe coding**，用轻量技能替代 GSD / BMAD 那类重型流程。今日榜单上四套技能包同台，Agent Skills 已是不折不扣的事实标准层。

### 3. NousResearch/hermes-agent

- 地址：https://github.com/NousResearch/hermes-agent
- 简介：`The agent that grows with you` —— 自我改进型开源 AI Agent，自动创建与优化技能、持久化记忆。
- 语言：Python
- 今日新增：778 stars today
- 标签：自我改进、长期记忆、自托管、多端接入、MCP

Nous Research 出品，MIT 许可，24 万 Star。核心差异是 **closed learning loop（闭环学习）**：复杂任务后自主创建技能 → 技能在使用中自我改进 → 周期性把知识写入持久存储 → FTS5 全文检索 + LLM 摘要回溯历史会话 → 借 Honcho 建立跨会话的用户画像。7 种终端后端（本地 / Docker / SSH / Singularity / Modal / Daytona / Vercel Sandbox），Telegram / Discord / Slack / WhatsApp / Signal 远程指挥，内置 cron 与并行子代理，官方称可跑在 5 美元 VPS 上。今日 +47%，走势平稳向上，是本榜工程完整度最高的"长期 Agent"方案。

### 4. DietrichGebert/ponytail

- 地址：https://github.com/DietrichGebert/ponytail
- 简介：`Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.` —— 向 Claude Code / Codex / Copilot CLI / Gemini 注入"懒人资深开发者"思维的 Node.js 技能插件。
- 语言：JavaScript
- 今日新增：2,138 stars today
- 标签：Agent 技能、极简主义、降本、代码审查、做减法

今日增量第一，连续第二日霸榜且继续加速（+1,364 → +2,138，**+57%**），两日累计 3,502。核心是**七级懒人阶梯**（跳过 → 复用 → 标准库 → 平台原生 → 依赖 → 单行 → 最小实现），逼 Agent 先回答"这段代码能不能不写"。作者给出的实测（Claude Code + FastAPI/React，对比无技能基线）：代码行数 **-54%**（最高 94%）、token **-22%**、成本 **-20%**、时间 **-27%**。在全行业都在给 Agent 疯狂加能力的当口，反向做"减法"是稀缺品——这个数据如果可复现，对重度 Agent 用户非常值钱。

### 5. anthropics/skills

- 地址：https://github.com/anthropics/skills
- 简介：`Public repository for Agent Skills` —— Anthropic 官方的 Agent Skills 公共仓库。
- 语言：Python
- 今日新增：277 stars today
- 标签：Agent Skills、官方、参考实现、规范样本、Claude

新上榜，但 17.3 万 Star 的体量说明它早已是事实参考实现，今天才上日榜属于趋势的滞后反映。它的价值不在"多了几个技能"，而在于**官方如何定义 Skill 这件事本身**——对正在做 Agent 平台或自建技能体系的人，这是必读的规范样本。+277 相对体量偏低，属于存量项目的自然曝光。

### 6. affaan-m/ECC

- 地址：https://github.com/affaan-m/ECC
- 简介：Agent Harness 性能优化系统——为 Claude Code、Codex、Opencode、Cursor 等提供 Skills、instincts（直觉规则）、记忆、安全约束与研究优先的开发范式。
- 语言：JavaScript
- 今日新增：749 stars today
- 标签：Agent Harness、工程方法论、记忆系统、多平台、安全约束

连续多日在榜，今日 +45%（+516 → +749）。它不是单个工具，而是一整套"怎么让 Agent 稳定干好活"的方法论封装——Skills 负责能力、instincts 负责行为惯性、记忆负责跨会话连续性、安全约束负责边界。适合已经过了"能不能用"阶段、开始追求"稳定好用"的团队。

### 7. JuliusBrussee/caveman

- 地址：https://github.com/JuliusBrussee/caveman
- 简介：`why use many token when few token do trick` —— 用"穴居人说话"的方式，为 Claude Code 砍掉 65% token 的技能。
- 语言：Go
- 今日新增：545 stars today
- 标签：省 token、降本、Agent 技能、Proxy、Go

今日涨幅 +133%（+234 → +545）。和 ponytail 同属"给 Agent 做减法"赛道，但路径不同：**ponytail 让 Agent 少写代码，caveman 让 Agent 少说话**。分两层——Skill 层压缩输出（实测平均 1214 → 294 token，**-65%**，仅输出侧，整会话节省更低）；Proxy 层在 Agent 与模型供应商之间压缩读取输入（54 次 Claude Code 基准中输入 token 降 **33.2%**，18/18 结果正确，原文件存 SQLite 可恢复）。⚠️ 注意作者自己标注的例外：**HTML 场景输入反增 9.9%**，别无脑全开。`caveman learn` 还能分析本地历史定位 token 消耗点。

### 8. blader/humanizer

- 地址：https://github.com/blader/humanizer
- 简介：`Agent skill that removes signs of AI-generated writing from text` —— 去除文本中 AI 写作痕迹的 Agent 技能。
- 语言：Python
- 今日新增：1,214 stars today
- 标签：去AI味、文本改写、Agent Skills、写作、风格迁移

今日涨幅第二猛（+366 → +1,214，**+232%**），跨过 4 万 Star。它把维基百科《Signs of AI writing》提炼成 **35 条可检测模式**——破折号滥用、强行三段式、空洞的 -ing 分析、"not X but Y"、过度加粗、标题式大写、Chatbot 客套话、假意深刻等等。流程是：不把原文结构当圣旨先改一版 → 对照 35 条自纠 → 重写残留问题，并且**把改写过程展示给你看**而不是只给结果。硬规则是不编造事实：名字、数字、日期、引用必须来自原文，缺失就回头问你。给一段自己的文字还能做"声纹匹配"，照你的节奏和用词习惯改写。

### 9. google-research/timesfm

- 地址：https://github.com/google-research/timesfm
- 简介：Google Research 出品的预训练时间序列基础模型（Time Series Foundation Model），专用于时序预测。
- 语言：Python
- 今日新增：1,626 stars today
- 标签：时间序列、基础模型、零样本预测、Google、多元预测

今日涨幅第一（+326 → +1,626，**+399%**），跨过 3 万 Star。驱动力很明确：**2026 年 8 月发布的 TimesFM 3.0** 带来原生多元时序预测、协变量支持（仅过去 / 过去+未来两类）、零样本泛化能力增强，并在三大时序基础模型 benchmark 上取得领先。主干仍是"拿新数据直接跑、不用重新训练"的零样本范式。金融需求预测、零售补货、运维容量规划是它的主场。这是今日榜单上**唯一一个硬核科研型项目**，也是与 Agent 生态完全无关的少数派。

### 10. averygan/reclip

- 地址：https://github.com/averygan/reclip
- 简介：`Download videos from almost any website. Lightweight, self-hosted media downloader with a clean web UI.` —— 自托管、轻量的影音下载器，带干净 Web UI。
- 语言：HTML
- 今日新增：123 stars today
- 标签：视频下载、自托管、yt-dlp、Web UI、极简

新上榜。本质是给 yt-dlp 套一层干净的 Web UI：粘贴 YouTube / TikTok / Instagram / X 等 1000+ 站点链接，选 MP4 或 MP3 与清晰度下载，支持批量粘贴与自动去重。技术极简是真的极简——**Flask 后端约 150 行 + 单文件原生前端，无框架、无构建步骤，全部依赖只有 Flask 和 yt-dlp 两个**；`./reclip.sh` 一条命令起在 8899 端口，也支持 Docker。Fork/Star 16.5% 偏高，说明用户是拉下来自己改而不是直接用。

### 11. bannedbook/fanqiang

- 地址：https://github.com/bannedbook/fanqiang
- 简介：`翻墙-科学上网` —— 该仓库主体为收集整理跨境联网相关方法、工具与镜像的**资料导航集合**（Kotlin 仅为仓库标注语言，实际内容是文档与链接，并非可运行软件）。
- 语言：Kotlin（标注）
- 今日新增：539 stars today
- 标签：资源导航、资料聚合、合规敏感、文档仓库

新上榜，5.2 万 Star，属于长期存在的存量资源库而非新项目。此处仅作数据记录。

### 12. addyosmani/agent-skills

- 地址：https://github.com/addyosmani/agent-skills
- 简介：`Production-grade engineering skills for AI coding agents.` —— 面向 AI 编码 Agent 的生产级工程技能集。
- 语言：JavaScript
- 今日新增：260 stars today
- 标签：Agent 技能、工程规范、代码质量、测试、性能优化

新上榜。Addy Osmani（Google Chrome 团队）出品，24 个技能覆盖开发全生命周期：代码质量、测试策略（TDD / 测试金字塔）、安全加固、性能优化、API 与接口设计、代码审查、CI/CD、调试与错误恢复等。与 mattpocock 那套"个人工程习惯"不同，这套更偏**团队规范与流程门禁**，适合作为组织内 Agent 编码的统一底噪。9.2 万 Star 在"技能包"类目里排前列。

### 13. ByteByteGoHq/system-design-101

- 地址：https://github.com/ByteByteGoHq/system-design-101
- 简介：`Explain complex systems using visuals and simple terms. Help you prepare for system design interviews.` —— 用图解和简单语言讲清复杂系统，辅助系统设计面试准备。
- 语言：（无主语言，纯图文资源库）
- 今日新增：158 stars today
- 标签：系统设计、面试准备、图解、分布式、学习资源

新上榜的老牌项目（8.8 万 Star）。ByteByteGo 出品，覆盖架构演进、数据库、缓存、消息队列、分布式一致性、服务治理等全套主题，是系统设计面试的标配读物。+158 属于长尾自然增长，没有事件驱动。亮点是它是今日榜单上**唯一与 AI / Agent 完全无关**的条目——在一片 Agent 声浪里显得格外清静。

### 14. magnitudedev/magnitude

- 地址：https://github.com/magnitudedev/magnitude
- 简介：开源推理服务器，为你的硬件挑选并运行最合适的本地模型，然后接进你已经在用的 Agent。兼容 Pi、OpenCode、Hermes、OpenClaw、Codex、Claude Code、Oh My Pi、Cline。
- 语言：TypeScript
- 今日新增：130 stars today
- 标签：本地推理、推理服务器、Agent 后端、离线、硬件自适应

**今日最年轻的项目**（仅 1,823 Star），新上榜。定位很讨巧，解决的是"Agent 帮你配本地模型"这件事——Agent 自己不知道你的硬件能跑什么量化、速度多少，Magnitude 先给机器做硬件画像（芯片 / 内存 / 带宽），推荐并下载最合适的模型，再做好投机解码与并发调优，最后改写你的 harness 配置。真正的卖点是一句话：`magnitude docs onboarding`，把这段提示词发给 Agent，它自己走完全流程。特性：无 token 成本、无 API Key、全离线、模型按需加载 / 空闲或内存紧张时卸载、支持从 Hugging Face 拉目录外的 GGUF、Apache 2.0。支持 macOS / Linux，Windows 走 WSL。增量只有 +130，但方向对——**本地推理接 Agent 是正在打开的口子**。

### 15. Imbad0202/academic-research-skills

- 地址：https://github.com/Imbad0202/academic-research-skills
- 简介：`Academic Research Skills for Claude Code: research → write → review → revise → finalize` —— 学术研究技能集。
- 语言：Python
- 今日新增：498 stars today
- 标签：学术研究、Agent Skills、论文流水线、写作辅助、同行评审

连续多日在榜的老面孔，但今日**首次回落**（+801 → +498，-38%），热度见顶迹象。它把论文写作拆成五段式流水线，本质是把"导师带学生做研究"的流程固化成 Skill。4.6 万 Star 的体量说明科研群体对 Agent 写作工具的接受度已经跨过临界点。

### 16. Gitlawb/openclaude

- 地址：https://github.com/Gitlawb/openclaude
- 简介：`runs anywhere. uses anything` —— 开源终端编码 Agent CLI，支持 OpenAI 兼容 API、Gemini、GitHub Models、Codex OAuth、Ollama、Atomic Chat 等云端与本地后端。
- 语言：TypeScript
- 今日新增：453 stars today
- 标签：编码 Agent、CLI 工具、多模型后端、MCP、反锁定

连续多日霸榜的老面孔，今日回落（+776 → +453，-42%）。核心卖点仍然是**后端无关**——一套终端工作流跑遍云端与本地模型，不绑死任何厂商，统一提供 prompts / tools / agents / MCP / 斜杠命令 / 流式输出。28.0% 的 Fork/Star 比依旧全榜第一，二次开发活跃度远超围观度，大量用户是拉分支自己改。想摆脱单一厂商锁定的终端党值得一看。

### 17. debpalash/VoiceStudio

- 地址：https://github.com/debpalash/VoiceStudio
- 简介：开源、完全本地的 ElevenLabs 替代方案——声音克隆、声音设计、视频配音、听写、转写、有声书制作，覆盖 646 种语言。
- 语言：Python
- 今日新增：1,738 stars today
- 标签：语音克隆、本地部署、TTS、ElevenLabs 替代、多语言

今日增量第二，且是**连续第三波上扬**（+745 → +834 → +1,738，今日 +108%），三天内 Star 从 1.4 万跨到 1.58 万，涨势完全没有衰减迹象。卖点足够硬：全本地、不上传、646 语言，覆盖克隆 / 设计 / 配音 / 听写 / 转写 / 有声书全链路。

### 18. f/prompts.chat

- 地址：https://github.com/f/prompts.chat
- 简介：`f.k.a. Awesome ChatGPT Prompts.` —— 分享、发现、收集社区 Prompt，免费开源，可自托管以保证组织内数据完全私密。
- 语言：HTML
- 今日新增：201 stars today
- 标签：Prompt 合集、社区、自托管、开源、隐私

新上榜的老牌项目（16.9 万 Star），前身就是最著名的 Awesome ChatGPT Prompts，现已更名并强化自托管能力，组织可以私有化部署、数据不出内网。在 Agent Skills 大行其道的当下回榜，有点"手工 Prompt 工程"的怀旧意味——但也说明无论工具怎么演进，"把一句话写好"仍然是绕不开的基础功。

### 19. obra/superpowers

- 地址：https://github.com/obra/superpowers
- 简介：`An agentic skills framework & software development methodology that works.` —— Agent 技能框架与软件开发方法论。
- 语言：Shell
- 今日新增：470 stars today
- 标签：Agent 技能框架、开发方法论、子代理、工作流、工程流程

新上榜，28.1 万 Star 为全场最高。它不是单个技能，而是**技能框架 + 开发方法论**：把头脑风暴、写计划、TDD、系统化调试、代码审查、并行子代理调度、Git worktree 隔离等环节编排成可复用的完整工作流。三者定位可以这么区分——**mattpocock/skills 是个人工程习惯，addyosmani/agent-skills 是团队规范门禁，superpowers 是流程编排层**（定义 Agent 应该怎么走完一整个开发闭环）。今日四套技能包同台，信号很强。

## 观察

- DietrichGebert/ponytail 今日 2,138 stars today，居当日增量第 1 位。
- debpalash/VoiceStudio 今日 1,738 stars today，居当日增量第 2 位。
- google-research/timesfm 今日 1,626 stars today，居当日增量第 3 位。
