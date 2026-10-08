---
title: GitHub 每日趋势榜 2026-10-06
description: 2026-10-06 GitHub Trending 榜首为 tester-army/e2e，当日共收录 12 个项目。
date: '2026-10-06T08:00:00+08:00'
rankingKey: '2026-10-06'
slug: github-daily-2026-10-06
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

2026-10-06 GitHub Trending 共收录 12 个项目，榜首 tester-army/e2e（1,720 stars today）。语言分布：TypeScript 3、**Shell** 2、Python 2、JavaScript 2、C++ 1、**Cuda** 1。

## 重点项目

### 1. tester-army/e2e

- 地址：https://github.com/tester-army/e2e
- 简介：Next generation e2e testing framework for web and mobile apps.（面向 Web 与移动应用的下一代端到端测试框架。）
- 语言：TypeScript
- 今日新增：1,720 stars today
- 标签：自然语言写测试、Agent 驱动 App、Apache-2.0、第 3 次在榜、增量第二

在榜三日走出了一条教科书式的三级跳：**+344（10-04）→ +1,430（10-05）→ +1,720（今日，+20.3%）**。
昨天判断它"×4.16 已是全榜涨幅最大"，今天又在更高的基数上再涨两成，说明这不是单日脉冲。
总 Star 从 4,120 到 5,848，**真实增长 1,728，日榜计数器 1,720，两者只差 0.5%**（全榜吻合度最高的一项）。
日增速 **41.67% 是全榜第二高**（仅次于 rea）。
写法是用自然语言描述目标，让 Agent 操作应用，再用同一段测试里的 locator 与断言验收：
```ts
await agent.act('upgrade the workspace to the Pro plan');
await agent.assert('the invoice preview shows a prorated amount');
```
关键是"录制回放"：Agent 走过的步骤会被记录，下次重跑时**在应用未变更的前提下零模型调用**直接回放；
完全不含 Agent 步骤的测试则根本不需要模型。open issues 从昨日 21 升到 64——关注度涨得比维护速度快。
可用 `npx e2e telemetry disable` 或 `E2E_TELEMETRY_DISABLED=1` 关闭。Agent 步骤需自备订阅 / API key / 本地模型。
**Fork/Star 仅 4.4%，是全榜最低**——76 天 5,848 星但分叉极少，尚未经过大规模生产验证；
README 的 Status 段也写明"*e2e is in active development on the way to 1.0. APIs and config can still [change]*"。

### 2. mattpocock/skills

- 地址：https://github.com/mattpocock/skills
- 简介：Skills for Real Engineers. Straight from my .agents directory.（给真正做工程的人用的 Agent 技能，直接来自我自己的 .agents 目录。）
- 语言：**Shell**
- 今日新增：1,028 stars today
- 标签：反 vibe coding 技能集、grill-me 对齐、MIT、第 18 次在榜、隔 3 天回归

**第 18 次在榜，超过 affaan-m/ECC 的 17 次，成为本系列在榜次数最多的项目**（可比样本 11 次）。
上次在榜是 10-03（+750），隔 3 天回归且增量 +36.9%。它的立场很鲜明——README 开头就点名：
*"Approaches like GSD, BMAD, and Spec-Kit try to help by owning the process. But while doing so,
they take away your control and make bugs in the process hard to resolve."*
所以整套技能刻意做得**小、可改、可组合**，宣称与模型无关。核心是 `/grill-me` 与 `/grill-with-docs`——
开工前先让 Agent 反过来"拷问"你，把需求对齐再做，作者称这是他最受欢迎的两个技能。
安装分两条哲学：Claude Code 插件（只读托管包，随市场更新，等于订阅）与 skills.sh（把文件复制进仓库，归你所有、随便改）。
README 无 License 段（API 为 MIT）。首页顶部与正文中都嵌了作者 newsletter（aihero.dev）的推广位。
另外两条路由**不能同时装**，README 明确警告"installing both leaves you with every skill twice"。

### 3. earthtojake/text-to-cad

- 地址：https://github.com/earthtojake/text-to-cad
- 简介：Give your agent CAD superpowers.（给你的 Agent 装上 CAD 超能力。）
- 语言：Python
- 今日新增：620 stars today
- 标签：CAD 技能库、本地文件取材、MIT、第 4 次在榜、连续第三日

三日曲线 **+75 → +456 → +620（今日 +36.0%）**，是全榜唯一"连续三日单调放大"的留存项，
增量排名也从倒数第二升到第八。它不是一个"文生 CAD 模型"的推理项目，而是一组 **Agent 技能库**：
生成、检查、取材、切片、交付 CAD 与机器人描述文件（STEP / STL / URDF 等），全部基于**本地项目文件**处理。
**35 个 open issues 与 diagram-design 并列全榜最少**，17,791 星配这个维护负担相当干净。
依赖本地 build123d 0.11 / Open CASCADE 7.9，环境搭建成本不低。
**CAD 类错误在物理制造环节的代价远高于代码错误**，这一点 README 仍未作任何提示（连续第二日指出）。

### 4. boykopovar/AnyPS5

- 地址：https://github.com/boykopovar/AnyPS5
- 简介：Tool for automatic PS5 executables porting to Linux and Windows.（把 PS5 可执行程序自动移植到 Linux 与 Windows 的工具。）
- 语言：C++
- 今日新增：943 stars today
- 标签：PS5 可执行程序移植、relinker+PRX、GPL-2.0、第 2 次在榜、连续第二日

昨日 +994、今日 **+943（−5.1%）**，基本守住水位，是留存项里唯一的小幅回落。
它同时验证了 10-05 的判据 #6——**"首次在榜项目 ≥2 席留存"成立**（AnyPS5 与 openGym 都留下了）。
做法不是模拟：内含一个 **relinker** 把可执行程序转成目标系统原生格式，加上一套可动态链接的 **系统 prx 库**实现，
README 明确"**No emulation or separate runtime process**"。着色器重编译器能产出 SPIR-V。日增速 19.97%，64 天 5,664 星。
open issues 从 131 升到 **184**，是增量之外值得盯的数字。
*"intended for interoperability, research, preservation, and compatibility purposes"*，
声明不含、不分发、不要求受版权保护的软件、固件、**加密密钥**（cryptographic keys）或专有库，
并明确**由使用者自行保证所用 binary 的取得与使用符合适用法律与许可条款**——合法性完全落在使用者一侧。

### 5. pbakaus/impeccable

- 地址：https://github.com/pbakaus/impeccable
- 简介：The design language that makes your AI harness better at design.（让你的 AI 工具更懂设计的设计语言。）
- 语言：JavaScript
- 今日新增：947 stars today
- 标签：AI 前端设计语言、60 条确定性检测规则、Apache-2.0、第 7 次在榜、隔 2 天回归

第 7 次在榜（09-23 / 09-25 / 10-01 / 10-02 / 10-03 / 10-04 / 今日），隔 2 天回归，+947 与 10-04 的 +1,170 相比回落 19.1%，
但仍是增量第五。它起点是 Anthropic 的 frontend-design 技能，加的是三样东西：
`/impeccable init` 把产品事实写进 `PRODUCT.md`（受众、用途、约束、语气、证据），**24 个命令**构成共享设计词汇
（`polish` / `audit` / `critique` / `distill` / `bolder` / `quieter` 等），以及**60 条确定性检测规则**——
这部分"no LLM and no API key"就能跑。README 直指通病：*"Inter for everything, purple-to-blue gradients,
cards nested in cards, gray text on colored backgrounds"*。
更值得注意的是 README 自己的安全提示：*"In Claude Code, installed command hooks run independently of model-tool approval.
The first edit or Stop event can therefore download and cache the engine even if the session denies the model's launcher command."*
——**即使会话拒绝模型的启动命令，钩子也可能自行下载**。README 建议跑无人值守任务前先审查已装钩子，
或用 `--settings '{"disableAllHooks": true}'` 全部关掉。

### 6. thedotmack/claude-mem

- 地址：https://github.com/thedotmack/claude-mem
- 简介：Persistent Context Across Sessions for Every Agent — 捕获 Agent 在会话中的一切操作，用 AI 压缩，再把相关上下文注入后续会话。支持 Claude Code、OpenClaw、Codex、Gemini、Hermes、Copilot、OpenCode 等。
- 语言：TypeScript
- 今日新增：536 stars today
- 标签：跨会话记忆、上下文压缩、默认云端托管、Apache-2.0、连续第四日

四日曲线 +115 → +627 → +534 → **+536（+0.4%）**，是留存项里变化最小的一个，
"脉冲次日消化"之后进入平台期，增量排名第九。它解决的是 Agent 最实际的痛点：会话结束即失忆。
做法是完整捕获会话动作 → AI 压缩 → 按需回注，另有自然语言查询项目历史与 Cloud Sync 备份。
open issues 从 110 降到 93。
Local observer is opt-in: `--provider host`"*；安装时需浏览器登录（email magic link）换取 memory key；
Cloud Sync 会把记忆备份到 cmem.ai。可用 `<private>` 标签排除敏感内容，但**默认路径是把会话记忆交给第三方服务**。
（连续第三日在榜提示，表述未变。）

### 7. ayghri/i-have-adhd

- 地址：https://github.com/ayghri/i-have-adhd
- 简介：A skill to stop your coding agent from burying the answer. ADHD-friendly output.（一个让你的编码 Agent 不再把答案埋起来的技能，输出对 ADHD 友好。）
- 语言：Python
- 今日新增：318 stars today
- 标签：ADHD 友好输出、10 条输出规则、MIT、隔 25 天回归、16 天未推送

第 4 次在榜（09-08 / 09-09 / 09-11 / 今日），**隔了 25 天**才回来。它做的事极其简单也极其对症——
只有 **10 条规则**：先给下一步动作、多步骤必须编号、结尾只留一个具体下一步、压制跑题、每轮复述状态、
时间估算给分钟数、让进展可见、报错就事论事、列表最多 5 项、不要开场白与客套话。
README 的 Before/After 对照很能说明问题：Before 是一段"*Hope this helps!*"式的长篇铺垫，
After 是三行编号步骤加一句"*Next: paste the first failing line if any test fails.*"。
它基于 *The Adult ADHD Tool Kit*，但 README 明确"**Adapted for how an LLM should respond, not how a human should organize their day**"。
但它一个人只占全榜 2.72%，远低于 20% 的门槛（详见 §3.3 判据 #8）。
README 提供 10 种语言版本，安装走"把这句话粘进 CLI"的方式，改规则需要 fork 后替换整个插件源。

### 8. morluto/rea

- 地址：https://github.com/morluto/rea
- 简介：Reverse engineer anything with agents, from app behavior down to native binaries.（用 Agent 逆向一切，从应用行为一路下探到原生二进制。）
- 语言：TypeScript
- 今日新增：2,963 stars today
- 标签：Agent 逆向工程、MCP 工具链、本地分析、MIT、今日增量第一

**今日头号项目，也是本系列 31 期里第一个"逆向工程"主题的头名**。+2,963 比第二名 e2e 多 1,243，
日增速 **63.67% 是全榜最高**。它的形态是一个 **MCP 服务器**：接上之后你直接问 Agent
"弄明白 Notes 的搜索是怎么做的，给我看证据，再在我的项目里做一个类似的"——
Agent 自己去反编译、跟代码、取证、复现，README 说"*REA shows how it reached its conclusions*"，
并且**不声称能还原原始源码或自动克隆整个应用**。
覆盖面是本榜最广的之一：原生二进制、JavaScript / Electron 应用、.NET 程序集、网站、APK 静态分析、固件（Binwalk / Unblob 交给调用方自备）。
支持 12 种 Agent（Claude Code / Desktop、Codex、Cursor、Gemini CLI、Windsurf、Devin、OpenCode、Antigravity、Copilot CLI、Command Code、VS Code）。
demo 模式带厂商自定义限制；setup 可以在你同意后替你装 Hopper。② **默认只在本地分析**，
README 承诺"*REA does not upload the app to a hosted analysis service*"，快照文件也留在本地且仅 owner 可读。
③ 但**本地 ≠ 无风险**：README 写明分析工具与启动的目标进程**都以你的用户权限运行**，
macOS 上的原生 UI 捕获还依赖"辅助功能"与"屏幕录制"权限。
最关键的一点——**README 里找不到任何关于逆向工程合法性的提示**：免责声明类关键词**零命中**
（无"仅用于授权测试""请遵守当地法律""不构成……建议"之类表述），
而这款工具的能力边界恰恰高度依赖你对目标的权限。175 天、7,617 星，Fork/Star 11.1%。

### 9. deepseek-ai/DeepGEMM

- 地址：https://github.com/deepseek-ai/DeepGEMM
- 简介：DeepGEMM: clean and efficient BLAS kernel library on GPU（清洁高效的 GPU BLAS 内核库。）
- 语言：**Cuda**
- 今日新增：363 stars today
- 标签：FP8/FP4 GEMM 内核、DeepJIT 运行时编译、MIT、首次在榜、600 天老项目

**首次在榜，也是今日唯一与 Agent 生态完全无关的新面孔**（另两个非 Agent 项目 AnyPS5、openGym 都是留存）。
它是 DeepSeek 开源的 GEMM 内核库，把现代大模型的关键计算原语——FP8 / FP4 / BF16 GEMM、
带通信重叠的 fused MoE（Mega MoE）、lightning indexer 的 MQA 打分、HyperConnection——收进一套 CUDA 代码。
**全部内核通过 DeepJIT 在运行时编译，安装期不需要 CUDA 编译**。README 宣称"性能匹配或超过专家手工调优的库"，
并给出 H800 上 **1,550 TFLOPS** 的历史锚点。今日榜上唯一使用 **Cuda** 作为主语言的项目
（31 期历史语言分布里 Cuda 也是首次出现）。
且需要支持 C++20 `<format>` 的编译器。README 明确"输入转置或 FP8 转换等操作需由使用者自行处理或融合进前序内核"，
库自带的 PyTorch 工具函数"可能更慢"。**6 天未推送**、149 open issues。
另注：09-30 刚发布 **DeepGEMM-Ascend** 分支（昇腾），主仓 README 只给了链接，未在本次抓取范围内复核。

### 10. msitarzewski/agency-agents

- 地址：https://github.com/msitarzewski/agency-agents
- 简介：A complete AI agency at your fingertips - From frontend wizards to Reddit community ninjas, from whimsy injectors to reality checkers. Each agent is a specialized expert with personality, processes, and proven deliverables.（一整个 AI 代理公司尽在指尖——从前端巫师到 Reddit 社区忍者，从"奇思妙想注入者"到"现实校验官"。每个 Agent 都是有性格、有流程、有明确交付物的专才。）
- 语言：**Shell**
- 今日新增：621 stars today
- 标签：AI 人格代理库、交付物导向、MIT、第 5 次在榜、连续第二日

第 5 次在榜（08-11 / 08-12 / 08-13 / 10-05 / 今日），昨日刚隔 53 天回归，今日**连续第二日且 +4.4%**，
说明这次回归不是一次性。总 Star **157,638 是全榜最高**，Fork 25,411（Fork/Star 16.1%）。
它卖的不是代码而是"人格 + 流程 + 交付物"：每个 Agent 都有专属语气、工作方式和可验收的产出。
另出了桌面 App（macOS / Linux / Windows），一键把整个名册装进 Claude Code、Cursor、Codex、Gemini 等。
**Shell 作为主要语言**在今日榜单里有两席（另一席是 mattpocock/skills）。
名册里包含不少"社交平台运营"类角色（如 Reddit 社区运营），批量投入真实社区前需自行评估平台规则。
**184 个 open issues 与 AnyPS5 并列全榜最高之一**。
关键词扫描命中 "presale"，经人工核销为职位名 **"Government Digital Presales Consultant"（政府数字化售前顾问）**，属误报。

### 11. DuarteSantos8/openGym

- 地址：https://github.com/DuarteSantos8/openGym
- 简介：Self-hosted gym & body-weight tracker — plan routines, log workouts (supersets, warm-ups, cardio), see which muscles are trained, fatigued or detrained, import from FitNotes/Strong/Hevy, passkey login. Your data, your server.（自托管的健身与自重训练追踪器：规划每周计划、按引导完成训练、记录每一组与体重，看清哪些肌群被练到、疲劳或退化；可从 FitNotes / Strong / Hevy 导入；passkey 登录。数据在你自己手上。）
- 语言：JavaScript
- 今日新增：1,419 stars today
- 标签：自托管健身追踪、passkey 登录、AGPL-3.0、第 2 次在榜、增量第三

**+1,419（−1.7%）守住破千，从昨日的全榜第一退到增量第三**（被 rea 与 e2e 超过）。
它同时是 10-05 判据 #7 的正面答案——**两个日增速破 50% 的项目（openGym 63.42% / e2e 53.16%）今日双双仍在千级**，
"小体量项目一次性爆发"的假设被排除。卖点是数据主权：自托管、passkey 登录、可从 FitNotes / Strong / Hevy 与 Apple Health 导入、
随时导出单个 JSON。README 那句"*no account on someone else's server, no subscription, no ads, no telemetry*"是它的定位声明。
但 README 中免责声明 / 数据合规类关键词**零命中**（仍无"不构成医疗建议"之类的表述，连续第二日指出）。
正向的一点：README 明确 *"Passkey private keys never reach the server"*（私钥留在手机安全硬件或密码管理器里），
但 `secret` 环境变量是会话 cookie 签名密钥，需与 `./data` 一并备份。open issues 从 131 升到 157。

### 12. cathrynlavery/diagram-design

- 地址：https://github.com/cathrynlavery/diagram-design
- 简介：Editorial diagram design for Claude Code, Codex, GitHub Copilot, Factory Droid, and Pi. 42 diagram types. Self-contained HTML + SVG. No shadows. No Mermaid slop.（给 Claude Code、Codex、GitHub Copilot、Factory Droid、Pi 用的编辑级图表设计：42 种图表类型，自包含 HTML + SVG，无阴影，没有 Mermaid 那套糊弄货。）
- 语言：**HTML**
- 今日新增：227 stars today
- 标签：42 种图表类型、自包含 HTML+SVG、MIT、第 6 次在榜、隔 27 天回归

第 6 次在榜（08-13 / 09-04 / 09-05 / 09-06 / 09-08 / 09-09 / 今日），**隔了 27 天**回归，
落在全榜末位 +227——注意这是**31 期里最高的末位值**，所以"末位"今天并不等于"弱"。
它治的是一个具体痛点：让 Claude 画张架构图，拿回来的是一堆通用圆角方框，跟站点其余部分毫无关系。
产出是**自包含 HTML + SVG，无构建步骤、无 JS、无外部图片依赖**，每种图型都有 minimal light / minimal dark / full-editorial 三个变体。
42 种类型覆盖到 Sankey、鱼骨图、Wardley map、看板、用户旅程、部署图、依赖图、UML 类图、故事地图、数据库 schema。
它还能**把 draw.io / Mermaid / Excalidraw 的源文件按指定格式、尺寸与详略重画**。
**29 个 open issues 是全榜最少**（与 text-to-cad 的 35 同处最低档）。
"*The highest-quality move is usually deletion*"，目标密度 4/10，强调色只留给最该被看到的 1~2 处；
反过来说，需要密集信息展示（如全量数据表格）的场景并不在它的射程内。
技能会把品牌 token 写进 `references/style-guide.md`，**会读取你的站点**来配色，并校验 WCAG AA 对比度。

## 观察

- morluto/rea 今日 2,963 stars today，居当日增量第 1 位。
- tester-army/e2e 今日 1,720 stars today，居当日增量第 2 位。
- DuarteSantos8/openGym 今日 1,419 stars today，居当日增量第 3 位。
