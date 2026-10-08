---
title: GitHub 每日趋势榜 2026-09-04
description: 2026-09-04 GitHub Trending 榜首为 mattpocock/skills，当日共收录 17 个项目。
date: '2026-09-04T08:00:00+08:00'
rankingKey: '2026-09-04'
slug: github-daily-2026-09-04
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

2026-09-04 GitHub Trending 共收录 17 个项目，榜首 mattpocock/skills（2,757 stars today）。语言分布：Python 7、JavaScript 2、TypeScript 2、Shell 1、C++ 1、Go 1。

## 重点项目

### 1. mattpocock/skills

- 地址：https://github.com/mattpocock/skills
- 简介：`Skills for Real Engineers. Straight from my .agents directory.` —— 面向真实工程师的技能集，直接取自作者的 `.agents` 目录。
- 语言：Shell
- 今日新增：2,757 stars today
- 标签：Agent 技能、TDD、架构治理、反 vibe coding、工程实践

今日登顶，且是**连续第三天加速**（+1,103 → +1,576 → +2,757，今日 +74.9%），三日累计 5,436。它针对工程师日常最疼的四个环节下手：需求不对齐 → `/grill-me`、`/grill-with-docs` 拷问式提问；表达冗长 → 建共享语言、维护 `CONTEXT.md` 与 ADR；代码不可靠 → `/tdd` 红-绿-重构、`/diagnosing-bugs` 系统排错；架构腐化 → `/to-spec`、`/improve-codebase-architecture`。立场非常鲜明：**反对 vibe coding**，用一组轻量可组合的技能替代 GSD / BMAD 那类重型流程。在昨日四套技能包同台、今日两套掉榜的背景下，它反而加速——说明竞争已经收敛到头部。

### 2. DietrichGebert/ponytail

- 地址：https://github.com/DietrichGebert/ponytail
- 简介：`Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.` —— 向 Claude Code / Codex / Copilot CLI / Gemini 注入"懒人资深开发者"思维的 Node.js 技能插件。
- 语言：JavaScript
- 今日新增：1,683 stars today
- 标签：Agent 技能、极简主义、降本、代码审查、做减法

**首次回落**（+2,138 → +1,683，-21.3%），结束连续两日霸榜，让出第一。核心方法论仍是**七级懒人阶梯**（跳过 → 复用 → 标准库 → 平台原生 → 依赖 → 单行 → 最小实现），逼 Agent 先回答"这段代码能不能不写"。作者给出的实测（Claude Code + FastAPI/React 对比基线）：代码行数 **-54%**（最高 94%）、token **-22%**、成本 **-20%**、时间 **-27%**。回落属高位自然衰减，绝对值仍是全榜第二，赛道热度没有实质变化。

### 3. fmtlib/fmt

- 地址：https://github.com/fmtlib/fmt
- 简介：`A modern formatting library` —— C++ 事实标准的格式化库，类型安全、高性能的 printf 替代品，设计已被吸纳进 C++20 `std::format`。
- 语言：C++
- 今日新增：681 stars today
- 标签：格式化、C++20、基础库、类型安全、高性能

连续第二日在榜，脉冲衰减中（+955 → +681，-28.7%）。昨日已排查过：**近三个月无新版本发布**（最近为 12.2.0，2026-06-16），这轮热度与版本无关，属于老牌基建的一次二次曝光。今日再留一席说明脉冲比预想的持续，但方向明确向下。真实信号仍然只有一个：存量巨头会被偶尔顶上日榜，且往往出现在新项目供给相对分散的时候。

### 4. affaan-m/ECC

- 地址：https://github.com/affaan-m/ECC
- 简介：Agent Harness 性能优化系统——为 Claude Code、Codex、Opencode、Cursor 等提供 Skills、instincts（直觉规则）、记忆、安全约束与研究优先的开发范式。
- 语言：JavaScript
- 今日新增：1,139 stars today
- 标签：Agent Harness、工程方法论、记忆系统、多平台、安全约束

今日涨幅第三（+749 → +1,139，**+52.1%**），是留存项里唯一大幅逆势上扬的老面孔。它不是单个工具，而是一整套"怎么让 Agent 稳定干好活"的方法论封装——Skills 负责能力、instincts 负责行为惯性、记忆负责跨会话连续性、安全约束负责边界。在 ponytail / humanizer / VoiceStudio 集体回落的今天，ECC 与 mattpocock/skills 双双走强，共同点是：**两者都是"体系化方法论"而非"单点技巧"**。用户正在从"试新鲜技能"转向"沉淀稳定工作流"。

### 5. anthropics/skills

- 地址：https://github.com/anthropics/skills
- 简介：`Public repository for Agent Skills` —— Anthropic 官方的 Agent Skills 公共仓库。
- 语言：Python
- 今日新增：512 stars today
- 标签：Agent Skills、官方、参考实现、规范样本、Claude

连续第二日在榜且涨幅接近翻倍（+277 → +512，**+84.8%**），是今日留存项里涨幅第二。它的价值从来不在"多了几个技能"，而在于**官方如何定义 Skill 这件事本身**——对正在做 Agent 平台或自建技能体系的人，这是必读的规范样本。今日它与 mattpocock/skills 一起留下、其余两套技能包掉榜，可以读作：**用户目光正在从"看各家花样"收敛到"个人实践 + 官方规范"两端**。

### 6. blader/humanizer

- 地址：https://github.com/blader/humanizer
- 简介：`Agent skill that removes signs of AI-generated writing from text` —— 去除文本中 AI 写作痕迹的 Agent 技能。
- 语言：Python
- 今日新增：1,132 stars today
- 标签：去AI味、文本改写、Agent Skills、写作、风格迁移

**基本走平**（+1,214 → +1,132，-6.8%），稳在全榜第四、破千俱乐部成员。它把维基百科《Signs of AI writing》提炼成 **35 条可检测模式**——破折号滥用、强行三段式、空洞的 -ing 分析、"not X but Y"、过度加粗、标题式大写、Chatbot 客套话、假意深刻等。流程是：不把原文结构当圣旨先改一版 → 对照 35 条自纠 → 重写残留问题，且**把改写过程展示出来**而非只给结果。硬规则是不编造事实：名字、数字、日期、引用必须来自原文，缺失就回头问你。给一段自己的文字还能做"声纹匹配"。昨日 +232% 的暴增后没有崩，说明需求是真的。

### 7. NousResearch/hermes-agent

- 地址：https://github.com/NousResearch/hermes-agent
- 简介：`The agent that grows with you` —— 自我改进型开源 AI Agent，自动创建与优化技能、持久化记忆。
- 语言：Python
- 今日新增：721 stars today
- 标签：自我改进、长期记忆、自托管、多端接入、MCP

小幅回落（+778 → +721，-7.3%），但 Fork 绝对数 49,459 仍是全场最高，二次开发活跃度无人能及。核心差异是 **closed learning loop（闭环学习）**：复杂任务后自主创建技能 → 技能在使用中自我改进 → 周期性把知识写入持久存储 → FTS5 全文检索 + LLM 摘要回溯历史会话 → 借 Honcho 建立跨会话用户画像。7 种终端后端（本地 / Docker / SSH / Singularity / Modal / Daytona / Vercel Sandbox），Telegram / Discord / Slack / WhatsApp / Signal 远程指挥，内置 cron 与并行子代理，官方称可跑在 5 美元 VPS 上。本榜工程完整度最高的"长期 Agent"方案，走势平稳。

### 8. JuliusBrussee/caveman

- 地址：https://github.com/JuliusBrussee/caveman
- 简介：`🪨 why use many token when few token do trick` —— 用"穴居人说话"的方式，为 Claude Code 砍掉 65% token 的技能。
- 语言：Go
- 今日新增：503 stars today
- 标签：省 token、降本、Agent 技能、Proxy、Go

微降（+545 → +503，-7.7%），稳住十万星体量。和 ponytail 同属"给 Agent 做减法"赛道但路径不同：**ponytail 让 Agent 少写代码，caveman 让 Agent 少说话**。分两层——Skill 层压缩输出（实测平均 1214 → 294 token，**-65%**，仅输出侧）；Proxy 层在 Agent 与模型供应商之间压缩读取输入（54 次 Claude Code 基准中输入 token 降 **33.2%**，18/18 结果正确，原文件存 SQLite 可恢复）。⚠️ 作者自己标注的例外：**HTML 场景输入反增 9.9%**，别无脑全开。`caveman learn` 还能分析本地历史定位 token 消耗点。

### 9. magnitudedev/magnitude

- 地址：https://github.com/magnitudedev/magnitude
- 简介：开源推理服务器，为你的硬件挑选并运行最合适的本地模型，然后接进你已经在用的 Agent。兼容 Pi、OpenCode、Hermes、OpenClaw、Codex、Claude Code、Oh My Pi、Cline。
- 语言：TypeScript
- 今日新增：395 stars today
- 标签：本地推理、推理服务器、Agent 后端、离线、硬件自适应

**今日涨幅第一（+130 → +395，+203.8%）**，也是全榜最年轻的项目（仅 2,206 Star）。解决的是"Agent 帮你配本地模型"这件事——Agent 自己不知道你的硬件能跑什么量化、速度多少，Magnitude 先给机器做硬件画像（芯片 / 内存 / 带宽），推荐并下载最合适的模型，再做好投机解码与并发调优，最后改写你的 harness 配置。真正的卖点一句话说完：`magnitude docs onboarding`，把这段提示词发给 Agent，它自己走完全流程。特性：无 token 成本、无 API Key、全离线、模型按需加载 / 空闲或内存紧张时卸载、支持从 Hugging Face 拉目录外的 GGUF、Apache 2.0。支持 macOS / Linux，Windows 走 WSL。连续两日在榜且加速，是今日最值得盯的种子选手。

### 10. bikini/exploitarium

- 地址：https://github.com/bikini/exploitarium
- 简介：公开 Exploit PoC 与漏洞研究文章的**单一归档仓库**。作者自述归档时点上的条目均未被上报，并声明目的是吸引新人入行。
- 语言：Python
- 今日新增：68 stars today
- 标签：漏洞归档、PoC 集合、安全研究、合规敏感

新上榜，且是今日**增量最低**的项目（+68），但 Fork/Star 28.0% 全场并列最高——典型的"拉下来自己用"而非"点个星围观"，用户行为与其他项目完全不同。内容性质决定了它天然是小众高粘性仓库。此处仅作数据记录，不作任何推荐。

### 11. bannedbook/fanqiang

- 地址：https://github.com/bannedbook/fanqiang
- 简介：`翻墙-科学上网` —— 该仓库主体为收集整理跨境联网相关方法、工具与镜像的**资料导航集合**（Kotlin 仅为仓库标注语言，实际内容是文档与链接，并非可运行软件）。
- 语言：Kotlin（标注）
- 今日新增：735 stars today
- 标签：资源导航、资料聚合、合规敏感、文档仓库

连续第二日在榜且继续走强（+539 → +735，**+36.4%**），是留存项里涨幅第三。属长期存在的存量资源库而非新项目。此处仅作数据记录。

### 12. debpalash/VoiceStudio

- 地址：https://github.com/debpalash/VoiceStudio
- 简介：开源、完全本地的 ElevenLabs 替代方案——声音克隆、声音设计、视频配音、听写、转写、有声书制作，覆盖 646 种语言。
- 语言：Python
- 今日新增：1,345 stars today
- 标签：语音克隆、本地部署、TTS、ElevenLabs 替代、多语言

**四日连涨后首次回落**（+745 → +834 → +1,738 → +1,345，-22.6%），但仍稳居破千俱乐部、全榜第三。卖点足够硬：全本地、不上传、646 语言，覆盖克隆 / 设计 / 配音 / 听写 / 转写 / 有声书全链路。四天内 Star 从 1.4 万涨到 1.71 万，这轮涨势的斜率虽已放缓，但绝对量级仍在高位——是今日榜单上**唯一与 Agent 生态无关且能稳定破千**的项目。

### 13. google-research/timesfm

- 地址：https://github.com/google-research/timesfm
- 简介：Google Research 出品的预训练时间序列基础模型（Time Series Foundation Model），专用于时序预测。
- 语言：Python
- 今日新增：340 stars today
- 标签：时间序列、基础模型、零样本预测、Google、多元预测

**今日跌幅第一**（+1,626 → +340，**-79.1%**）。这个回落很值得记录：昨日它涨幅 +399%、被列为"今日亮点"，今天就还回去近八成——**说明日榜的单日尖峰绝大多数是一次性脉冲，不能当作趋势外推**。技术面本身没有变化：**TimesFM 3.0**（2026 年 8 月发布）带来原生多元时序预测、协变量支持（仅过去 / 过去+未来两类）、零样本泛化增强，在三大时序基础模型 benchmark 上领先；主干仍是"拿新数据直接跑、不用重新训练"的零样本范式。金融需求预测、零售补货、运维容量规划是它的主场。项目是好项目，只是今天没那么多人点星。

### 14. radixark/miles

- 地址：https://github.com/radixark/miles
- 简介：`Miles is an enterprise-facing reinforcement learning framework for LLM and VLM post-training, forked from and co-evolving with slime.` —— 面向企业的 LLM / VLM 后训练强化学习框架，fork 自 slime 并与之协同演进。
- 语言：Python
- 今日新增：55 stars today
- 标签：强化学习、后训练、大模型、分布式、SGLang

新上榜，**今日增量垫底（+55）但技术密度全场最高**，是典型的"冷启动期硬核基建"。技术栈是 **SGLang 做高吞吐 rollout + Megatron-LM 做可扩展训练**（另有 PyTorch FSDP2 后端可选）。关键能力：全异步 RL（rollout 与训练解耦、可配 on/off-policy）；**P2P RDMA 权重更新**，万亿参数模型（如 Kimi-K2.6）新权重秒级下发；MXFP8 / NVFP4 低精度训练（另有 FP8 / INT4 QAT / BF16 / FP16）；LoRA 与 multi-LoRA；**TITO（token-in-token-out）** 消除 rollout 与训练间的 detokenize/retokenize 往返；**R3（Rollout Routing Replay）** 重放 rollout 期的专家路由，消除 MoE 路由错配导致的大规模训练不稳；SGLang 引擎挂掉可原地恢复、无需重启。Day-0 支持 DeepSeek-V4、Kimi-K3、GLM-5.2、Inkling、Nemotron；硬件覆盖 NVIDIA GB300/GB200/B300/B200/H200/H100/A100 与 AMD MI300X/MI325/MI350/MI355X（ROCm）。算法支持 GRPO / GSPO / PPO / REINFORCE++ / SFT / on-policy distillation，另有 Miles-diffusion 支持扩散模型。v0.1 已于 2026 年 8 月发布。+55 的增量与它的体量完全不匹配——**如果你在做后训练，这是今日榜单上最该记住的名字**。

### 15. anomalyco/opencode

- 地址：https://github.com/anomalyco/opencode
- 简介：`The open source coding agent.` —— 开源 AI 编码 Agent。
- 语言：TypeScript
- 今日新增：314 stars today
- 标签：编码 Agent、TUI、多模型、客户端服务端、开源

新上榜，20.4 万星的体量级选手。形态是**终端 TUI 优先**，同时提供桌面应用（macOS / Windows / Linux，Beta）与客户端-服务端架构。内置两个可 `Tab` 切换的 agent：**build**（默认，全权限开发）与 **plan**（只读，默认拒绝文件编辑、执行 bash 前询问，适合探索陌生代码库与规划改动），另有 `general` 子代理处理复杂检索与多步任务。安装渠道极全：npm / bun / pnpm / yarn、Homebrew、Scoop、Chocolatey、pacman、AUR、mise、Nix 全覆盖。README 提供 22 种语言版本，社区化程度相当高。今日榜单上 hermes-agent、ECC 都把它列为适配目标，magnitude 也把它列入兼容清单——**它已经是 Agent 生态里的一个"被适配层"**，这个位置比 Star 数更能说明问题。

### 16. clshortfuse/renodx

- 地址：https://github.com/clshortfuse/renodx
- 简介：`RenoDX, short for "Renovation Engine for DirectX Games"` —— DirectX 游戏的画质翻新引擎，一套游戏模组工具集。
- 语言：HLSL
- 今日新增：759 stars today
- 标签：游戏模组、画质增强、ReShade、DirectX、着色器

新上榜且增量高居第六（+759），是今日**唯一与 AI / Agent 完全无关却排在头部**的项目。技术上很聪明：**它不 patch 游戏 exe，而是基于 ReShade 的 add-on 系统**——因此不必逐个适配游戏版本，兼容性天然很宽。能力覆盖替换着色器、注入 buffer、叠加 overlay、升级 swapchain、升级纹理资源、把用户配置写盘。附带三个实用工具：帧率限制器 addon、开发套件 addon（帮助构建自己的 addon）、以及 **Shader Model 6.0+ 反编译器 `decomp.exe`**。Fork/Star 仅 4.0% 说明用户几乎全是"直接装来用"的玩家而非开发者。在一片 Agent 声浪里，这种纯硬核图形项目能冲到 +759，是今日榜单健康度的一个好信号。

### 17. cathrynlavery/diagram-design

- 地址：https://github.com/cathrynlavery/diagram-design
- 简介：`38 editorial diagram types for Claude Code, Codex, and Pi. Self-contained HTML + SVG. No shadows. No Mermaid slop.` —— 为 Agent 提供 38 种编辑级图表类型，自包含 HTML + SVG，无阴影，拒绝 Mermaid 默认样式。
- 语言：HTML
- 今日新增：426 stars today
- 标签：图表生成、Agent Skills、编辑级设计、HTML+SVG、审美治理

新上榜，今日**最值得注意的新面孔**。它解决的痛点非常精准：**Agent 画出来的图很丑**。默认走 Mermaid 的 Agent 产出往往带着廉价感——阴影、圆角、配色全不对。这个项目给 Claude Code / Codex / Factory Droid / Pi 等 Agent Skills 兼容主机提供 **38 种图表类型**（README 内实际列出 39 种），含 Architecture、Sequence、State machine、ER、Timeline、Swimlane、Quadrant、Radar、Sankey、Fishbone、Wardley map、Kanban、User journey、UML class、Story map、Database schema 等，每种都有 **minimal light / dark / full-editorial** 三种静态变体。设计规则定得很死也很专业：**单强调色、1–2 个焦点元素**；三字体组合（Instrument Serif / Geist / Geist Mono）；**1px 线、无阴影、圆角 ≤10px**；坐标间距均被 4 整除；默认静态无 JS。支持从 draw.io / Mermaid 重绘，导出 SVG / PNG，输出须通过 `self_check.py` 自检。安装走各客户端的市场命令（Claude Code 为 `/plugin marketplace add cathrynlavery/diagram-design`）。**这是"给 Agent 做减法 / 治理"主线的新分支——从治理代码、治理文字，扩展到了治理视觉输出。**

## 观察

- mattpocock/skills 今日 2,757 stars today，居当日增量第 1 位。
- DietrichGebert/ponytail 今日 1,683 stars today，居当日增量第 2 位。
- debpalash/VoiceStudio 今日 1,345 stars today，居当日增量第 3 位。
