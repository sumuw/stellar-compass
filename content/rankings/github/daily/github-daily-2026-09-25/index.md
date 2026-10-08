---
title: GitHub 每日趋势榜 2026-09-25
description: 2026-09-25 GitHub Trending 榜首为 paperclipai/paperclip，当日共收录 16 个项目。
date: '2026-09-25T08:00:00+08:00'
rankingKey: '2026-09-25'
slug: github-daily-2026-09-25
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

2026-09-25 GitHub Trending 共收录 16 个项目，榜首 paperclipai/paperclip（1,853 stars today）。语言分布：Python 7、TypeScript 2、Go 2、Shell 2、JavaScript 2、—（页面未标注主要语言） 1。

## 重点项目

### 1. paperclipai/paperclip

- 地址：https://github.com/paperclipai/paperclip
- 简介：The open-source app everyone uses to manage agents at work
- 语言：TypeScript
- 今日新增：1,853 stars today
- 标签：多 Agent 组织、组织架构与预算、Agent 培训、自托管、新上榜第一

今日榜首，也是本系列第 5 个"新上榜即登顶"的项目。README 里的定位句很值钱——"**If OpenClaw is an employee, Paperclip is the company**"：别人在做一个更强的 Agent，它在做一套让一堆 Agent 变成组织的东西。Node.js 服务端 + React UI，四大支柱分别是**任务管理**（审批与复核门禁、heartbeat 定时唤醒、从 diff/截图/测试验收）、**Agent 组织架构**（人机混合 org chart、职责与授权委派、scoped secrets、治理边界）、**Agent 员工培训**（Skill Studio、evals、质量指标、给 Agent 做"绩效评估"）、**Agentic OS**（跨 provider 运行时、沙箱与 MCP、SSO/GRC/RBAC、成本控制、审计追踪）。
最实在的一块是**成本治理**：按公司/Agent/项目/目标/issue/provider/model 多维统计 token 与花费，带警告阈值与硬停——超支自动暂停 Agent 并取消排队任务。README 直接点出它要解决的痛点："Runaway loops waste hundreds of dollars of tokens and max your quota before you even know what happened."。兼容 OpenClaw / Claude Code / Codex / Cursor 乃至裸 Bash 与 HTTP——"If it can receive a heartbeat, it's hired."
热度形态健康：**83,939 星体量下 +1,853、Fork/Star 18.1%**，既不是小基数脉冲也不是纯传播型（后者 F/S 通常 <6%）。
⚠️ 两个实际约束：它是**控制平面**，会集中持有各 provider 的 API key 与实例/公司级 secrets（README 提到加密本地存储与"敏感值不进 prompt，除非某次 scoped run 显式需要"），自托管的话这台服务器就是高价值目标；另外它要靠外部 LLM 跑记忆与决策，token 成本与出网都绕不开。

### 2. vectorize-io/hindsight

- 地址：https://github.com/vectorize-io/hindsight
- 简介：Hindsight: Agent Memory That Learns
- 语言：Python
- 今日新增：1,652 stars today
- 标签：Agent 记忆、会学习、反 RAG 与知识图谱、有论文有 benchmark、二日在榜

连续第二日在榜，**守住了 09-24 设的"明日仍在榜且守住 1,000 以上"这条判据**（+1,607 → +1,652，+2.8%），按本系列口径从"一次性脉冲"转入 `ax` 那种"脉冲转持续"的路径——这是昨天那条双向判据里最有价值的分支落定了。
能力面不变：核心是 **retain / recall / reflect 三操作** + observations + mental models & knowledge pages + memory banks，自我定位锋利——"Most agent memory systems focus on recalling conversation history. Hindsight is focused on making agents that **learn**, not just remember."。供应商 Vectorize 是做 RAG 管道的老玩家，所以它有**论文**（arXiv 2512.12818）、**公开 benchmark 站**（自称 LongMemEval SOTA，由 Virginia Tech Sanghani Center 与华盛顿邮报独立复现）、**MIT 许可**、以及 Docker / 外部 PostgreSQL / 裸机 pip 三种自托管路径。接入极轻：LLM Wrapper 两行代码，支持 25+ provider（`HINDSIGHT_API_LLM_PROVIDER`）。
⚠️ 今日**逐字复核**：默认启动命令仍是 `export OPENAI_API_KEY=sk-xxx`，**记忆的抽取与整理要走外部 LLM**，数据出网；README 首屏同时在推 Hindsight Cloud 托管版。

### 3. google/ax

- 地址：https://github.com/google/ax
- 简介：Google's open agentic orchestration runtime
- 语言：Go
- 今日新增：1,386 stars today
- 标签：Google 官方、Agent 编排运行时、声明式 K8s、沙箱与网络围栏、四日在榜

连续第四日在榜（+2,324 → +1,542 → +1,376 → +1,386），**追平本系列"连续在榜"第二梯队**，且四天里有三天在 1,300 以上横盘——从脉冲坐实成了持续需求。四天累计已把 Star 从 9,907 推到 11,227。
形态上它是本榜少数"真的像基础设施"的项目：`ax.io/v1alpha1` 声明式 manifest，四个原语 `Task`（带 CPU/内存上限的隔离沙箱）、`Workspace`（预挂 Git 仓库 / MCP 服务器 / skill 包）、`Gateway`（出站流量锁成显式 host 白名单）、`Model`（平台自身用哪个 LLM）；`ax suspend/resume` 可暂停空闲 Agent 再从原处拉起，`ax ssh` 能钻进运行中的沙箱。目标是"单集群跑十亿级 Agent 任务"。
**当日涨幅 14.08% 是所有万星项目里最高的**，比万星刻度尺中位数（0.46%）高 30 倍——不是大盘带动，是单点真实放量。
⚠️ 今日**逐字复核** README 顶部 WARNING 仍在，原文"We will likely to introduce major breaking changes prior to a stable release"。它跑在 `agent-substrate/substrate` 之上提供沙箱执行，**substrate 昨日已掉榜、今日仍未回归** → "上下游同天在榜"这个候选形态第二次确认为单日巧合。自建集群成本高。

### 4. rohitg00/ai-engineering-from-scratch

- 地址：https://github.com/rohitg00/ai-engineering-from-scratch
- 简介：Learn it. Build it. Ship it for others.
- 语言：Python
- 今日新增：1,181 stars today
- 标签：AI 工程教程、523 课 20 阶段、十二语翻译、每课一件成品、⚠️ 留存涨幅第二

**留存涨幅第二（+281.0%）**——昨天它在 14 席里只排 #9（+310），今天 +1,181 冲到 #4。这是本系列"当日排名对次日无预测力"的第 12 次实证（详见 3.3）。
内容量是它最大的卖点：**523 节课 / 20 个阶段 / 约 342 小时**，覆盖 Python、TypeScript、Rust、Julia，每节课都要求产出一个可复用工件（一个 prompt、一个 skill、一个 agent 或一个 MCP server），MIT 许可。12 种语言的落地页直接提交在仓库里（英文为准，课文页在 `translations` 分支机翻）。README 给出的动机很具体："84% of students already use AI tools. Only 18% feel prepared to use them professionally."
作者对"刷星式教程"是有自觉的——偏实践而非概念，且把所有工件都做成能直接搬走的东西。
⚠️ 规模也带来约束：README 自陈 30 天 18.2 万次浏览 / 11.5 万读者，仓库 108KB 的 README 本身就在快速膨胀，课程与实际工具链的版本漂移需要自己留意。

### 5. dream-num/univer

- 地址：https://github.com/dream-num/univer
- 简介：The Office Harness for AI Agents — Spreadsheets, Docs, Slides, Canvas, Relational Tables, and PDF in one runtime.
- 语言：TypeScript
- 今日新增：1,048 stars today
- 标签：Office Harness、表格文档幻灯片、Canvas 渲染、Agent 装配层、三日在榜

连续第三日在榜，且是 09-23 那批暴涨项里**唯一一个还在的**（CLI-Anything 与 harness-sdk 今日双双掉榜）。三天增量 1,060 → 1,048，几乎没动——这是"需求型"而非"脉冲型"的典型形态。
注意它的定位已经改过：从"开源 Office SDK"变成了"**The Office Harness for AI Agents**"，把表格 / 文档 / 幻灯片 / Bases / Boards / PDF 统一到一个运行时里，对外只暴露一个 Facade API（浏览器与 Node.js 通用）。技术底子是插件架构 + Canvas 渲染 + 公式引擎。这条线正是本系列自 09-14 起一直在记的那件事：**不是让模型更强，而是把专业软件暴露成 Agent 能操作的表面**。
当日涨幅 6.10%，比万星刻度尺中位数（0.46%）高 13 倍 → 真实放量。
⚠️ PDF 支持 README 里仍标 "coming soon"；作为 SDK 嵌入自有产品，长期维护成本取决于你自己的集成深度。

### 6. mattpocock/skills

- 地址：https://github.com/mattpocock/skills
- 简介：Skills for Real Engineers. Straight from my .agents directory.
- 语言：Shell
- 今日新增：671 stars today
- 标签：技能包、反 vibe coding、27 万星、.agents 直出、巨物稳态

今日新上榜，但**不是新项目**——它是存量巨物，26.9 万星的盘子，当日涨幅 0.25% 属纯稳态，是"大盘里本来就有的那块"被计入今日窗口。定位一句话说清：作者把自己 `.agents` 目录里的东西直接开源，"Skills for Real Engineers"，与 vibe coding 划清界限。
它和下面的 superpowers、anthropics/skills、claude-plugins-official 一起，构成了今天**"Agent 技能/插件的分发渠道"这条线**（见 3.4 的 A 簇）。
⚠️ 技能包会实质改写 Agent 的行为方式，团队引入前需整包过一遍内容；存量体量这么大时，内部条目质量参差是常态。

### 7. obra/superpowers

- 地址：https://github.com/obra/superpowers
- 简介：An agentic skills framework & software development methodology that works.
- 语言：Shell
- 今日新增：465 stars today
- 标签：技能框架、开发方法论、29 万星、TDD、⚠️ 留存跌幅第一

全榜体量最大的项目（29.1 万星 / 2.6 万 fork），**留存跌幅第一（-23.3%）**，606 → 465。连续第二日在榜，但热度在退。
它提供的是"技能框架 + 软件开发方法论"的组合——不只是给 Agent 一堆 prompt，而是把 TDD、计划、代码审查这些流程固化成可加载的技能包。
⚠️ 29 万星 / 26,089 fork 的超高体量下，README 设有 "Commercial Services" 章节与社区引导；技能包会实质影响 Agent 的行为方式，团队引入前需过一遍内容。它在 29.1 万星体量下 +465（0.16%）仍能排到 #7，说明**腰部确实薄了**，而不是它自己变热了。

### 8. NVIDIA/Model-Optimizer

- 地址：https://github.com/NVIDIA/Model-Optimizer
- 简介：A unified library of SOTA model optimization techniques like quantization, distillation, pruning, neural architecture search, speculative decoding, etc.
- 语言：Python
- 今日新增：360 stars today
- 标签：模型压缩、量化·蒸馏·剪枝、TensorRT-LLM 配套、⚠️ pre-1.0、留存涨幅第一

**留存涨幅第一（+1,536.4%）**。昨天它是 14 席里的**末位（+22）**，且当时已按间隔抓取流程做过确认、判为真实低增量值——今天 +360。这是本系列"当日排名对次日无预测力"的第 12 次实证里最极端的一条（详见 3.3）：**末位项目第二天能涨 16 倍，头名项目第二天只涨 2.8%**。
能力面是标准的 NVIDIA 推理优化栈：量化、蒸馏、剪枝、NAS、投机解码，压缩后的模型交给 TensorRT-LLM / TensorRT / vLLM 部署。覆盖大模型与视觉生成模型。
⚠️ 今日**逐字复核**：README 明确"Model Optimizer is still pre-1.0"，deprecation 只给**约 1 个 release（~1 个月）的迁移期**——追新功能的代价是接口会变，长期脚本需锁版本。另外这是今天唯一一个"模型层"项目，G 簇之外它自己撑起了 E 簇的全部 360。

### 9. pbakaus/impeccable

- 地址：https://github.com/pbakaus/impeccable
- 简介：The design language that makes your AI harness better at design.
- 语言：JavaScript
- 今日新增：326 stars today
- 标签：前端设计规范、24 条命令、61 条确定性规则、免 LLM 检测、反同质化

作者 pbakaus（jQuery UI 原班）做的一个"让 AI 编码工具的设计变好"的技能包。**1 个 skill、24 条命令、实时浏览器迭代、61 条确定性检测规则**。
起点是 Anthropic 的 frontend-design skill，它加了两件事：一是 `/impeccable init` 把持久产品真相写进 `PRODUCT.md`（受众、目的、运行上下文、约束、语气、证据），让后续命令不至于把"事实"和"视觉方向"混为一谈；二是 **61 条确定性规则 + LLM-only 的 critique 检查，其中确定性规则由 CLI 与浏览器扩展跑，不需要 LLM、不需要 API key**。
它要解决的问题说得很直白——"Every model trained on the same SaaS templates"，于是每个项目都长出同一批破绽：一律 Inter、紫到蓝的渐变、卡片套卡片、彩色底上的灰字、每个标题上方那个圆角方块图标。24 条命令里有 `bolder` / `quieter` / `distill` / `delight` / `overdrive` 这种可以直接对 Agent 下指令的设计词汇。
⚠️ 71,010 星体量下当日涨幅仅 0.46%，正好等于万星刻度尺的中位数 → 属稳态席位，不是当日热点。**它不产出投资决策，不触发金融类免责检索。**

### 10. derv82/wifit3

- 地址：https://github.com/derv82/wifit3
- 简介：Wifite but USB-only & cross-platform.
- 语言：Python
- 今日新增：168 stars today
- 标签：无线安全审计、纯 Python 无外部依赖、跨平台、⚠️ 双用途、仅授权设备

wifite 的重写版，限定 USB 网卡，跑在 Linux / macOS / Windows 上。三个卖点都很硬：**跨平台一致**（内置无线协议栈，规避内核驱动版本地狱与 Windows NDIS）、**零运行时依赖**（不装 aircrack-ng / reaver，纯 Python + PyUSB + Textual）、**多卡聚合**（多张网卡同时抓包，可指定一张专门注入）。
功能覆盖侦察（2.4/5GHz 跳频扫描、WPA3/SAE 过渡模式识别、VAP decloaking、厂商指纹）与攻击面（WPA/WPA2 握手、PMKID、EvilTwin WPA3 降级、WPS 的 PixieDust / PBC / PIN 爆破、WEP 全套）。支持 Atheros AR9271、MediaTek MT7610U/7612U/7921AU/7925U、Realtek RTL8812AU/8814AU/8821AU/8821CU 等芯片。
⚠️ **这是今日唯一的双用途安全工具，也是风险等级最高的一条**。README 的 "License & Disclaimer" 章节今日**逐字复核**仍在，原文："For use only on networks and equipment you own or are explicitly authorized to audit. wifit3 operates directly on USB hardware registers without kernel guardrails; use at your own risk." —— **仅可用于你拥有或已获明确书面授权的网络与设备**；且它直接操作 USB 硬件寄存器、无内核护栏，误用代价高于普通工具。

### 11. anthropics/skills

- 地址：https://github.com/anthropics/skills
- 简介：Public repository for Agent Skills
- 语言：Python
- 今日新增：155 stars today
- 标签：官方 Agent Skills、规范基线、Anthropic、17.8 万星、巨物稳态

Anthropic 官方的 Agent Skills 公开仓库，17.8 万星的存量基线盘，当日涨幅 0.09% 是全榜最低——纯粹的"大盘里本来就有的那块"。
它的意义不在热度而在**它是规范基线**：今天榜上的 impeccable 就明说是从它的 frontend-design skill 出发做的。
⚠️ 无金融产出、无凭证代持，今日无专项风险；但作为会被 Agent 加载执行的技能包，团队引入前仍需过一遍内容。

### 12. androoAGI/starnet

- 地址：https://github.com/androoAGI/starnet
- 简介：A living pixel-art station where real AI agents do real work. Local-first desktop agent harness.
- 语言：JavaScript
- 今日新增：118 stars today
- 标签：像素风空间站、本地优先、真实调用非模拟、桌面端、当日涨幅第一

**当日涨幅 51.08% 是全榜第一，但基数只有 349 星**——按本系列的口径，这类百分比要和中位数（343）一起看才有意义，它排在 #12。
产品契约写得异常硬，值得一记：**"一个房间 = 一个按能力划界的团队，一条走廊 = 一条授权交接通道，一个摆放的物件 = 一次真实的能力授予"**，你画的布局就是 Agent 真正跑的工作流。它反复强调自己不是演示——真实模型调用、真实工具、真实花销，多 Agent 并发各有独立工作区与有界权限，并且"**界面绝不断言 harness 无法证明的状态**"（不模拟收益、不模拟已完成工作、不模拟花费）。
功能上有 Night Shift（离岗继续跑，每个 away-action 都留日志可审）、Task Briefs（把歧义变成一个带选项的具体问题而不是默默猜错）、OUTBOX（交付物落成真文件而非聊天滚动）、MCP 连接器、cron 调度、语音。密钥进 OS keychain，不进前端。
⚠️ 新项目（349 星 / 79 fork），**Fork/Star 22.6% 为全榜最高**，这种形态常见于"部署型/尝鲜型"项目，不等于生产就绪；密钥与花费都在本机，但 Night Shift 意味着**无人值守时 Agent 仍在花钱与调用工具**，需要自己设好缰绳。

### 13. kelseyhightower/kubernetes-the-hard-way

- 地址：https://github.com/kelseyhightower/kubernetes-the-hard-way
- 简介：Bootstrap Kubernetes the hard way. No scripts.
- 语言：—（页面未标注主要语言）
- 今日新增：105 stars today
- 标签：Kubernetes 手工部署、经典教程、非 AI、Fork 比全榜最高、巨物稳态

Kelsey Hightower 的经典教程，**Fork/Star 31.8% 是全榜最高**——这正是教学型 repo 的典型形态：人们 fork 下来跟着做一遍，而不是为了贡献代码。5 万星的存量，当日涨幅 0.21%，稳态席位。
今日榜上仅有的三个非 AI 项目之一（另两个是 wifit3 与 openbao）。
⚠️ 教学性质，无 AI 产出、无凭证处理，今日无专项风险。

### 14. anthropics/claude-plugins-official

- 地址：https://github.com/anthropics/claude-plugins-official
- 简介：Official, Anthropic-managed directory of high quality Claude Code Plugins.
- 语言：Python
- 今日新增：62 stars today
- 标签：官方插件目录、Claude Code、内部+第三方、⚠️ 装前须自判信任

Anthropic 官方维护的 Claude Code 插件 marketplace，分 `/plugins`（Anthropic 自研）与 `/external_plugins`（合作伙伴与社区第三方，需过质量与安全标准才收录）。安装方式 `/plugin install {plugin-name}@claude-plugins-official`。
插件结构是标准五件套：`.claude-plugin/plugin.json`（必需）+ 可选的 `.mcp.json`、`commands/`、`agents/`、`skills/`。一个工程细节值得记：README 明确**插件 `name` 是不可变 slug**，一旦发布就不能改（改了会让已安装的用户报 `plugin-not-found`），要改显示名用 `displayName`，真要改名得在 marketplace 顶层 `renames` 映射里登记让存量安装自动迁移。
⚠️ **README 顶部的警告今日逐字复核仍在**：Anthropic 不控制插件内含的 MCP server、文件或其他软件，也无法验证它们的行为是否符合预期或后续是否变更——**安装、更新、使用任何插件前，你必须自己先判断信任**。有 MCP server 的插件尤其要看清它要连什么。

### 15. shy3130/tick-stock-panel

- 地址：https://github.com/shy3130/tick-stock-panel
- 简介：TSP 自托管、零运维的 A 股「选股 + 监控 + 回测」量化工作台 | LLM 能力驱使策略定制 + 个股分析 + 复盘 | 自由接入第三方数据源与个性化扩展数据 | 个人开源
- 语言：Python
- 今日新增：31 stars today
- 标签：A 股量化工作台、选股·监控·回测、数据源插件化、⚠️ 明确不做荐股、免责完整

自托管、零运维的 A 股量化工作台，四件事：选股（Polars 毫秒级扫全 A）、监控（全时段异动）、回测、LLM 驱动的复盘与个股分析。
工程上最有意思的是**数据源的能力路由**：多源插件化、任意接入第三方数据源，各数据集按源声明的**能力**独立路由，注册表集中定义、可扩展，而且是 **fail-closed**（源未声明 `pct_unit` 就直接拒绝）——同一数据集随时换源，指标与回测口径不变。
合规意识是本项目最值得表扬的地方，也是本系列见过的金融类项目里做得最好的一档。README 顶部 IMPORTANT 明确："本项目以**个人开源**为主进行开发维护……仅供学习研究使用"、"**不作为投资软件或者看盘软件**"、"**明确不做**：不对标同花顺 / 通达信，不内置「AI 荐股 / 涨停预测」"；文末有完整免责声明："本项目仅供**学习与量化研究**，**不构成任何投资建议**。回测结果不代表未来收益。A 股有风险，入市需谨慎。数据准确性以数据源官方为准。"；并且**每条 AI 回答完成后固定附风险提示与数据口径提示**。
⚠️ 按 6kk 做了免责声明检索，本项目**命中且完整**，不触发"免责缺失"这条风险。仍需记住：回测结果不代表未来收益，实盘前请自行验证策略与数据口径。README 首屏含 RunningHub 赞助位（第三方大模型 API 推广），与项目本身无关但需注意是商业推广。

### 16. openbao/openbao

- 地址：https://github.com/openbao/openbao
- 简介：OpenBao is a software solution to manage, store, and distribute sensitive data including secrets, certificates, and keys.
- 语言：Go
- 今日新增：16 stars today
- 标签：密钥与证书管理、非 AI、OpenSSF 托管、开放治理、末位（历史第三低）

末位 **+16，是 24 期可比数据里历史第三低**（前低：+3 @09-02、+5 @09-19）。已按流程做过间隔抓取复核——两次快照（间隔约 80 秒、换 UA）**逐项完全一致**，是真实低增量值而非"刚进榜计数器未填满"的伪值。
项目本身是管理、存储、分发敏感数据（密钥、证书、密钥材料）的方案，挂在 OpenSSF 之下、按开放治理原则由社区运营。从页面 built-by 名单看，维护者里有 jefferai、armon、cipherboy、vishalnayak 等原 Vault 团队的成员。协作公开：OpenSSF 邮件列表、GitHub Discussions、Linux Foundation Zulip 上按工作组分频道（namespaces / pkcs11 / scalability / supply / ui）。支持动态密钥（如按需生成带有效权限的 AWS keypair）。
⚠️ 今日无新增风险项，但**密钥管理系统本身就是要害**：自托管意味着这台机器就是最高价值目标，升级与备份需按安全流程走。README 开头即是负责任披露邮箱 `openbao-security@lists.openssf.org`。

## 观察

- paperclipai/paperclip 今日 1,853 stars today，居当日增量第 1 位。
- vectorize-io/hindsight 今日 1,652 stars today，居当日增量第 2 位。
- google/ax 今日 1,386 stars today，居当日增量第 3 位。
