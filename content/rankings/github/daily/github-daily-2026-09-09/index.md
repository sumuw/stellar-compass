---
title: GitHub 每日趋势榜 2026-09-09
description: 2026-09-09 GitHub Trending 榜首为 ayghri/i-have-adhd，当日共收录 13 个项目。
date: '2026-09-09T08:00:00+08:00'
rankingKey: '2026-09-09'
slug: github-daily-2026-09-09
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

2026-09-09 GitHub Trending 共收录 13 个项目，榜首 ayghri/i-have-adhd（4,624 stars today）。语言分布：Python 4、JavaScript 3、TypeScript 3、HTML 1、无标注（纯笔记仓库） 1、Shell 1。

## 重点项目

### 1. ayghri/i-have-adhd

- 地址：https://github.com/ayghri/i-have-adhd
- 简介：A skill to stop your coding agent from burying the answer. ADHD-friendly output.
- 语言：Python
- 今日新增：4,624 stars today
- 标签：输出风格、Agent Skills、反废话、可读性、极简

昨日以 +422 排第 12 名新上榜，今日直接 **+4,624 登顶**——**本系列观测到的最大单日跳升**，一个项目独占全榜 **34.1%** 的增量。它不是工具，是三条规则：动作先行、步骤编号、不许说 "Hope this helps!"。副标题很体贴：*"ADHD-friendly outputs. No ADHD diagnosis needed!"*
一天 11 倍的曲线说明这个痛点被低估得有多彻底：**"Agent 把答案埋在一堆铺垫里"是几乎人人遇到、却没人做成技能的问题**。安装方式也贴合主张——不用记命令，把一句话粘进 CLI 即可：
> `Install the i-have-adhd skill/plugin from https://github.com/ayghri/i-have-adhd, refer to the repo's AGENTS.md for instructions.`
README 已本地化到 7 种语言（含简体中文）。
⚠️ 但必须冷静看：单日 11 倍是典型脉冲形态，本系列已五次证明"单日尖峰不可外推"，明天大概率大幅回落。

### 2. cathrynlavery/diagram-design

- 地址：https://github.com/cathrynlavery/diagram-design
- 简介：38 editorial diagram types for Claude Code, Codex, and Pi. Self-contained HTML + SVG. No shadows. No Mermaid slop.
- 语言：HTML
- 今日新增：2,286 stars today
- 标签：图表设计、编辑级审美、Agent Skills、反 Mermaid、自包含 SVG

09-08 以 +1,070 回归创新高，今日再翻倍到 +2,286，**连续第二日刷新自身纪录**，稳居第二。作者 Cathryn Lavery 的动机写得很实在：自己写文章时让 Claude 画图，拿到的永远是「generic rounded-box thing」，要么跟 Figma 搏斗 30 分钟，要么干脆不画了——于是做了这个技能。
技术取向很硬：**无构建步骤、无 JavaScript、无外部图片依赖**，全部静态 HTML+SVG，三种变体（minimal light / minimal dark / full-editorial）；能读你的网站在 60 秒内匹配品牌色。设计信条是"最高质量的一步通常是删除"——每个节点都得挣得自己的位置，强调色只留给最该看的 1~2 处，目标密度 4/10。
版本演进值得记：2.0 加 Loop（带共享记忆中枢的飞轮图），2.3 加语义系统模式与可选动效，2.5.10 一次加十种布局语法（桑基、鱼骨、Wardley 地图、看板、用户旅程、部署图、依赖图、UML 类图、故事地图、数据库模式）。
💡 榜单简介仍写 38 种，README 已更新为 **39 种**，支持端扩到 Claude Code、Codex、Factory Droid、Pi 及任何 Agent Skills 兼容宿主。

### 3. affaan-m/ECC

- 地址：https://github.com/affaan-m/ECC
- 简介：The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.
- 语言：JavaScript
- 今日新增：1,151 stars today
- 标签：Agent Harness、多平台、记忆系统、安全约束、工程方法论

**全场唯一连续九日在榜的项目（09-01 起每日在榜）**。在今日 61.5% 更替率的剧烈换血里，这个稳定性比单日排名更有信息量——昨日榜单 11 席掉榜、带走 72.9% 的增量，它还在。
定位是"Agent harness 的性能优化系统"，覆盖 skills / instincts / memory / security，支持 Claude Code、Codex、Opencode、Cursor 多平台，不绑定单一客户端。今日是唯一回落的老面孔（-19.3%），但幅度温和，属于正常波动。

### 4. Tencent/teamai-cli

- 地址：https://github.com/Tencent/teamai-cli
- 简介：Make Every Team AI Native
- 语言：TypeScript
- 今日新增：1,083 stars today
- 标签：团队协作、技能同步、MCP 管理、多客户端、腾讯开源

本期最值得关注的新项目，也是**榜单上第一个把"个人 Agent 技能"升级为"团队基础设施"的项目**。核心命题很直接：现在每个人各自的 skills / rules / MCP 都是自己的，团队无法共享——TeamAI 用**一个 git 仓库当团队的共享经验库**来解这个问题。
用法分两端：管理员建一个共享仓库（GitHub / GitLab / GitCode / CNB / TGit 或私有 Git 服务），`teamai init <repo-url>`；成员在自己项目里跑同一条命令（或 `--scope user` 装到 `~/`）。初始化后，**每次 AI 会话自动拉取管理员发布的最新 skills / rules / hooks / MCP / env，无需手动同步**。没有现成仓库？用 [teamai-hub](https://github.com/teamai-hub) 组织里预置了生产级技能、规则和 review agents 的模板。
产品架构三层：**Team Execution**（`init`/`pull`/`push`、skills、rules、agents、hooks、MCP、env）→ **Team Context**（beta，recall、learnings、codebase graph、teamwiki）→ **Team Improvement**（beta，基于摩擦的 share-learnings、sessions、digest、dashboard）。
客户端覆盖 Claude Code、Codex、**CodeBuddy、WorkBuddy**、OpenCode、Cursor 等，MIT 协议，`npm install -g teamai-cli` 即可装。
📌 数据备注：Star 仅 2,794 却冲到第 4，单日新增占其总 Star 的 38.8%（+1,083 / 2,794）——**极早期项目的高斜率放量**，值得继续观察能否维持。这是本期唯一进入头部的中国团队项目。

### 5. liquidslr/system-design-notes

- 地址：https://github.com/liquidslr/system-design-notes
- 简介：Notes of the book System Design Interview - An Insider's Guide
- 语言：无标注（纯笔记仓库）
- 今日新增：910 stars today
- 标签：系统设计、面试笔记、学习资源、架构、经典教材

本期唯一与 Agent 完全无关的项目，却排到第 5——**在 Agent 相关内容占九成的榜单里，这个位置本身就是信号**。内容是 Alex Xu《System Design Interview – An Insider's Guide》的读书笔记。
Fork/Star = 3,370 / 17,722 = **19.0%**，全榜最高（正常区间是 6%~15%）。对笔记类仓库这不难解释：Fork 是"我要照着记一份"，不是"我要贡献代码"，Fork 率高属正常。
📌 判断：这类经典学习资源的回榜通常有周期性（面试季 / 开学季），不宜读作技术趋势。它更像是今天榜单的一个对照样本——**Agent 之外，基础功仍在被大量消费**。

### 6. obra/superpowers

- 地址：https://github.com/obra/superpowers
- 简介：An agentic skills framework & software development methodology that works.
- 语言：Shell
- 今日新增：690 stars today
- 标签：开发方法论、技能框架、TDD、子智能体、多客户端

全榜 Star 总数第一（28.4 万），09-08 回归后连续第二日在榜且继续加速。它的主张不是"多给你几个技能"，而是**改变 Agent 的默认行为**：一旦 Agent 察觉你在构建东西，不直接写代码，而是先退一步问你到底要做什么；从对话里挤出一份规格，切成能读完的小块给你确认；你签字后才出实现计划——明确要求写给"热情但品味差、没判断力、没项目上下文、还讨厌写测试"的初级工程师看，强调真红/绿 TDD、YAGNI、DRY；你说"开始"之后才进入 subagent-driven development，让子智能体逐项推进并互相审查，连续自主工作数小时不偏离计划。
安装覆盖面仍是本期最广的：Claude Code、Antigravity、Codex App/CLI、Cursor、Devin CLI、Factory Droid、Gemini CLI、GitHub Copilot CLI、Grok Build CLI、Kimi Code、OpenCode、Pi、Hermes Agent 共 14 个客户端。
💡 提示：技能是自动触发的，不需要手动调用——这点和"技能目录型"仓库（#8）的用法完全不同。

### 7. freestylefly/awesome-gpt-image-2

- 地址：https://github.com/freestylefly/awesome-gpt-image-2
- 简介：Prompt as Code | GPT-Image2 工业级提示词引擎与模板库，530+ 个案例逆向工程，20+ 套工业级模板，并提炼出 Skills，持续更新中
- 语言：JavaScript
- 今日新增：612 stars today
- 标签：提示词工程、GPT-Image2、模板库、逆向工程、图像生成

把提示词当代码管——**530+ 个真实案例逆向工程 + 20+ 套工业级模板 + 提炼成 Skills**，中文项目，本期唯一进入头部的图像生成类内容。最有价值的是它的证据链：不是给结论，而是把"原图 + 完整提示词 + 生成记录"一起存档，可复现可对照。
GPT Image 2.5 专区做得也扎实：Sunburst（生成与精确编辑）与 Flare（快速日常生成）两个模型，附 4 个真实复现案例（#532 柠檬广告、#527 里约立体透视、#523 曼哈顿水彩、#510 比熊店铺图标），每个都保留原始 gallery 图并用完整 gallery 提示词重跑一遍，还带可拖拽对比分割条。
配套站点 [gpt-image2.canghe.ai](https://gpt-image2.canghe.ai/) 可按风格/场景筛选、复制完整提示词、登录 Google 后试生成。
⚠️ 作者已明确标注：**原始生成条件与确切模型 ID 未经验证，演示样例单独标记**——把它当"提示词模式库"用，别当"官方参数表"用。

### 8. openai/plugins

- 地址：https://github.com/openai/plugins
- 简介：OpenAI Plugins
- 语言：JavaScript
- 今日新增：505 stars today
- 标签：插件示例、Codex、官方规范、Agent Skills、官方继任者

**昨日报告的头号风险点，今天自己反转了。** 09-08 它是全榜最后一名（+45），被已弃用的 `openai/skills`（+490）压了 10.9 倍。今日 `openai/skills` **直接掉榜**，而 `openai/plugins` 从 +45 涨到 **+505（+1,022%）**，涨幅全榜第一。
结构是规范化的：每个插件位于 `plugins/<name>/`，必带 `.codex-plugin/plugin.json` 清单，可选 `skills/`、`.app.json`、`.mcp.json`、插件级 `agents/`、`commands/`、`hooks.json`、`assets/`；默认市场在 `.agents/plugins/marketplace.json`。官方点名的完整示例包括 `figma`（Code to Canvas / Code Connect / 设计系统规则）、`notion`、`build-ios-apps`、`build-macos-apps`、`build-web-apps`、`expo`、`netlify`、`remotion`、`google-slides`。
✅ **结论更新**：自建 Codex 技能请以本仓库与官方 [Build plugins](https://developers.openai.com/codex/plugins/build) 指南为准。昨天的"热度倒挂"在一天内完成修正——**这也是本系列第一次看到"错误热度"被市场自行纠正**，比昨天的警示更有意思。

### 9. pascalorg/editor

- 地址：https://github.com/pascalorg/editor
- 简介：Create and share 3D architectural projects.
- 语言：TypeScript
- 今日新增：442 stars today
- 标签：3D 建筑设计、WebGPU、R3F、MCP、开源

浏览器里的 3D 建筑编辑器（React Three Fiber + WebGPU），09-07 上榜一次（+136）后掉榜，今日以 3.3 倍的强度回归。`npx @pascal-app/cli editor` 一条命令起本地编辑器，并在后台拉起一个**已认证的 MCP 服务**，自动选无冲突的 loopback 端口，项目存在 `~/.pascal/data/pascal.db`；配置 Agent 执行 `pascal mcp connect` 即可接入——**"把专业桌面软件变成 Agent 可调用的 MCP 工具"是它区别于普通 3D 编辑器的地方**。
⚠️ **安装注意（README 明确提示）**：npm 的 `beta` tag 目前解析到 `@pascal-app/cli@1.0.0-beta.1`，**早于仓库里的 read-only furniture candidate 输入**。要用该能力需装 GitHub release 里的预发布包 `1.0.0-beta.1.agent-skills.0`（对应 commit `aa653f2`），并自己校验 SHA256。npm 装到的是旧运行时——别凭 npm 版本判断功能边界。

### 10. vastsa/PI-Desktop

- 地址：https://github.com/vastsa/PI-Desktop
- 简介：Local-first AI coding agent desktop: Electron + Rust host core + pi Agent Harness + user-installable plugins
- 语言：TypeScript
- 今日新增：393 stars today
- 标签：本地优先、桌面 Agent、Electron+Rust、权限审查、⚠️ 早期预览

**"给 Agent 一个自己的工作台"**——目前大多数 coding agent 寄生在终端、编辑器插件或托管服务里，PI-Desktop 要做的是独立桌面工作区。三条主张写得很清楚：No PI-Desktop account / No mandatory relay / No editor lock-in。
技术栈 Electron + Rust host core + pi Agent Harness + 可安装插件。能力上：自带模型（OpenAI / Anthropic / 本地模型 / 任意 OpenAI 兼容 API，可配多 provider 按会话切换）；**默认可审查**——Agent 能读文件、改代码、跑命令，但特权操作必须经过它的权限层，diff 与命令输出都可见，可逐会话决定自治度；可扩展 Skills、MCP servers、Subagents 与插件（插件能贡献 tools、commands、panels、themes、services、skills 乃至全新工作区体验）。三种模式：**Agent** 直接干、**Plan** 等你批准冻结的实现计划、**Goal** 等你批准最终产出。
📌 1,520 Star 却进前十，单日新增占总 Star 的 25.9%（+393 / 1,520），与 #4 teamai-cli 同属**极早期高斜率**样本。
⚠️ **状态提示**：README 顶部标注 **Early Preview**——"已可用于真实编码工作流，但 API、扩展接口与部分桌面行为仍会演进"。生产环境慎用。

### 11. rohitg00/ai-engineering-from-scratch

- 地址：https://github.com/rohitg00/ai-engineering-from-scratch
- 简介：Learn it. Build it. Ship it for others.
- 语言：Python
- 今日新增：382 stars today
- 标签：AI 教程、523 课、从零实现、开源课程、MIT

**523 节课、20 个阶段、约 342 小时**，覆盖 Python / TypeScript / Rust / Julia，MIT 协议。定位不是"看 AI"，是"手搓 AI"——每节课都产出一个可复用产物：一个 prompt、一个 skill、一个 agent 或一个 MCP server。
开场数据抓得很准：> **84% 的学生已在用 AI 工具，但只有 18% 觉得自己在专业上准备好了。** 这个课程就是补这个缺口。
入口设计体贴：不用先扫完 523 课，按目标直达（"我要建 Agent" → Phase 14 Agent Engineering → The Agent Loop；"我要在真实仓库上用 coding agent" → Agent-Assisted Engineering 路径）。README 顶部注明近 30 天 11.4 万读者 / 18.2 万次浏览（截至 2026-08-29）。
作者是 [Agent Memory](https://github.com/rohitg00/agentmemory)（#1 持久化记忆项目）的作者，内容可信度有背书。

### 12. TauricResearch/TradingAgents

- 地址：https://github.com/TauricResearch/TradingAgents
- 简介：TradingAgents: Multi-Agents LLM Financial Trading Framework
- 语言：Python
- 今日新增：367 stars today
- 标签：多智能体、量化交易、LLM 框架、金融研究、⚠️ 非投资建议

10.4 万 Star 的老牌多智能体金融交易框架，Fork/Star 19.2%（全榜最高之一，但研究型框架的 Fork 率高属正常——大家是 fork 去改策略）。维护很活跃，CHANGELOG 密密麻麻：v0.4.0（2026-08）修了 FRED 宏观数据、社交情绪与决策日志记忆的**前视偏差 / point-in-time 问题**，加了可工作的 CLI checkpoint 续跑、Trader 价格锚定，以及 GPT-5.6 / GLM-5.3；v0.3.1 修 Alpha Vantage 前视过滤与图路由崩溃安全；v0.3.0 建立数据访问契约并扩 provider 注册（NVIDIA、Kimi、Groq、Mistral、Bedrock 与任意 OpenAI 兼容端点）。
**"专修前视偏差"这一点是它比同类项目严肃的地方**——回测里最常见的自欺就是用了当时拿不到的数据。
⚠️ **风险提示**：这是**研究与回测框架**，不是自动下单机器人（与前几天上榜的 AutoHedge 需填真实私钥不同，性质更温和）。但仍然：① 多智能体 LLM 的输出不构成投资建议；② 历史回测表现不代表未来收益，先跑只读 / 模拟模式验证；③ 接真实券商前确认 API 权限范围与属地合规。

### 13. earthtojake/text-to-cad

- 地址：https://github.com/earthtojake/text-to-cad
- 简介：A library of agent skills for CAD, CAE and CAM
- 语言：Python
- 今日新增：97 stars today
- 标签：CAD·CAE·CAM、Agent Skills、STEP 导出、机器人描述、工业软件

把 Agent Skills 推进到**工业软件领域**——覆盖 CAD / URDF / SRDF·MoveIt2 / SDF 仿真几组技能，从本地项目文件生成、检查、切片到交付 CAD 与机器人描述产物，支持 STEP / STL / 3MF 导出。
技术上刻意选择"生成中间格式而非图片"：产出的是 **STEP（可进 CAD 软件的实体模型）**这类工业标准格式，不是好看的渲染图。这是它能落到真实工程流程里的关键——**图片不能进产线，STEP 能**。有正式文档站 [texttocad.dev](https://www.texttocad.dev) 与测试 CI，MIT 协议。
📌 位置说明：+97 是全榜最低，但它是今天**唯一进入制造业/机器人领域的技能库**。与 #9 pascalorg/editor 一起看，今天出现了两个"Agent 进入专业工程软件"的样本，合计 +539——方向很窄但很实。

## 观察

- ayghri/i-have-adhd 今日 4,624 stars today，居当日增量第 1 位。
- cathrynlavery/diagram-design 今日 2,286 stars today，居当日增量第 2 位。
- affaan-m/ECC 今日 1,151 stars today，居当日增量第 3 位。
