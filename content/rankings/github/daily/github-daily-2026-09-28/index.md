---
title: GitHub 每日趋势榜 2026-09-28
description: 2026-09-28 GitHub Trending 榜首为 vectorize-io/hindsight，当日共收录 8 个项目。
date: '2026-09-28T08:00:00+08:00'
rankingKey: '2026-09-28'
slug: github-daily-2026-09-28
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

2026-09-28 GitHub Trending 共收录 8 个项目，榜首 vectorize-io/hindsight（4,413 stars today）。语言分布：TypeScript 3、Python 2、JavaScript 1、TeX 1、PLSQL（疑为 GitHub 对仓库内 SQL/PL-SQL 文件的误判，主体实为硬件 + FPGA + Python） 1。

## 重点项目

### 1. vectorize-io/hindsight

- 地址：https://github.com/vectorize-io/hindsight
- 简介：Hindsight: Agent Memory That Learns
- 语言：Python
- 今日新增：4,413 stars today
- 标签：Agent 记忆、会学习非只是想起、反 RAG、有论文有 benchmark、滚动窗口下降幅第一

仍居榜首，但它今天的价值不在排名，而在**暴露了一个被本系列默认了 24 期的错误假设**。对比同一天的两个时间点：
计数器**下降 107**，实际 Star 却**增加 2,566**。这只能有一个解释：**`stars today` 不是"当天累计新增"，而是滚动回看（或周期性重算）的窗口值**。这一条改写了对所有历史数据的读法——本系列过往所有"留存项涨跌"对比，掺的不是纯日内增量，而是两个不同时点滚动窗口的差值。第 3.1 节做了完整量化。
项目本身未变：核心是 **retain / recall / reflect 三操作** + observations + mental models & knowledge pages + memory banks；定位句是"Most agent memory systems focus on recalling conversation history. Hindsight is focused on making agents that **learn**, not just remember."。Vectorize 是做 RAG 管道的老玩家，因此它有**论文**（arXiv 2512.12818）、**公开 benchmark 站**、**MIT 许可**，Docker / 外部 PostgreSQL / 裸机 pip / Kubernetes Helm 四种部署路径，支持 25+ provider。
体量与 Fork/Star（13.4%）都健康，不像小基数传播型脉冲（后者 F/S 通常 <6%）。
⚠️ 今日**逐字复核** README：默认启动命令仍是 `export OPENAI_API_KEY=sk-xxx`，**记忆的抽取与整理要走外部 LLM、数据出网**；首屏同时在推 Hindsight Cloud 托管版。

### 2. debpalash/VoiceStudio

- 地址：https://github.com/debpalash/VoiceStudio
- 简介：VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.
- 语言：Python
- 今日新增：3,274 stars today
- 标签：本地语音全栈、646 语言、开源 ElevenLabs 替代、⚠️ AGPL-3.0、八度在榜

本系列第 8 次在榜，也是**全天两个快照里都稳定在前三**的唯一 AI 语音项目。它的完整轨迹：745 → 834 → 1,738 → 1,345 → 2,546 → 2,774 → 2,081（09-15）→ 掉榜 12 天 → 今早 +3,086 → 今晚 **+3,274**。
能力覆盖六块：语音克隆、语音设计、视频配音、听写、转写、有声书，**646 种语言**。Electron 桌面应用 + 本地模型管理，默认引擎 k2-fsa/OmniVoice 可替换。定位 "fully-local ElevenLabs alternative"——本地跑、远程服务可选、使用分析需同意。还有一条容易被忽略的能力：**Local API & MCP for agents**，可直接给 Agent 调。
⚠️ 今日**逐字复核** README 三条约束一字未改：① **AGPL-3.0**，本榜最严传染性许可；② "**Models have their own licenses; review them before commercial use**"；③ "**Clone voices only with permission**"——语音克隆的滥用风险（仿声诈骗）完全由使用者承担。安装为 `curl -fsSL https://voicestudio.sh/install | sh`。

### 3. paperclipai/paperclip

- 地址：https://github.com/paperclipai/paperclip
- 简介：The open-source app everyone uses to manage agents at work
- 语言：TypeScript
- 今日新增：3,185 stars today
- 标签：多 Agent 组织、成本与预算治理、Agent 培训与评估、⚠️ 集中持密钥、日内增幅第二

今早 +2,401，今晚 +3,185，**12.5 小时内 +32.7%**，同时 Star 从 90,271 涨到 92,040（+1,769，实打实的新增）。这是今天唯一在**两个时点都位于前四**且还在放大的 Agent 项目。
它 09-25 首次上榜即登顶（+1,853），今早已通过"第二日仍在榜且守住 1,000"的判据，今晚是**第三次观测仍在放大**——从"新上榜脉冲"到"可跟踪形态"这条升级线，现在是本系列里证据最厚的一条。
定位句很值钱："**If OpenClaw is an employee, Paperclip is the company**"——别人在做更强的 Agent，它在做一套让一堆 Agent 变成组织的东西。四大支柱：**任务管理**（审批与复核门禁、heartbeat 定时唤醒、从 diff/截图/测试验收）、**Agent 组织架构**（人机混合 org chart、职责与授权委派、scoped secrets、治理边界）、**Agent 员工培训**（Skill Studio、evals、质量指标）、**Agentic OS**（跨 provider 运行时、沙箱与 MCP、SSO/GRC/RBAC、成本控制、审计追踪）。
最实在的一块仍是**成本治理**：按公司/Agent/项目/目标/issue/provider/model 多维统计 token 与花费，带警告阈值与硬停——超支自动暂停 Agent 并取消排队任务。
⚠️ 今日**逐字复核**：MIT 许可确认。README 原句仍在："**Paperclip collects anonymous usage telemetry to help us understand how the product is used and improve it.**"；另有**独立的两项 opt-in**（不默认开启）——OpenTelemetry 服务端 traces，以及 Sentry 前后端错误监控，均靠设置环境变量才激活。真正的风险是它作为控制平面**集中持有各 provider 的 API key 与公司级 secrets（agent API keys、short-lived run JWTs、board users）**，自托管的话这台服务器就是高价值目标。

### 4. dream-num/univer

- 地址：https://github.com/dream-num/univer
- 简介：The Office Harness for AI Agents — Spreadsheets, Docs, Slides, Canvas, Relational Tables, and PDF in one runtime.
- 语言：TypeScript
- 今日新增：1,105 stars today
- 标签：Office Harness、表格文档幻灯片、Canvas 渲染、⚠️ PDF 仍标 coming soon、日内反转下行

今早报告根据 1,140 → 1,060 → 1,048 → 895 的"四点连续下行"判定它"进入下行通道"，**当晚就被推翻**：+1,105，比今早 +23.5%，比 09-25 的 +1,048 还高 5.4%。
这是本期最该记的一条教训：**今早那条判定本身没错，错的是把"一次快照"当成"一天的状态"**。按 6y 的规则，用由多点连成的曲线判趋势是对的；但今早的第四个点（895）取的是当天 11:20 的滚动窗口值，它并不代表整天。现在知道原因了——§3.1 会给出量化：这一整类"留存项目日涨跌"的结论，本系列都需要重新审视。
项目面未变：定位已从"开源 Office SDK"改为"**The Office Harness for AI Agents**"，把表格 / 文档 / 幻灯片 / Bases / Boards / PDF 统一到一个运行时，对外只暴露一个 Facade API（浏览器与 Node.js 通用），底子是插件架构 + Canvas 渲染 + 公式引擎。这条线正是本系列自 09-14 起在记的那件事：**不是让模型更强，而是把专业软件暴露成 Agent 能操作的表面**。
Apache-2.0，README 仍明确"Univer Pro is optional and is not required to use the public OSS SDK APIs"。
⚠️ 今日**逐字复核**：README 首屏仍写 "Spreadsheets · Documents · Presentations · Bases · Boards · **PDFs (coming soon)**"。它今天是本系列第 6 次在榜，逼近 6ee 记录的"5~6 天上限"。

### 5. mvschwarz/openrig

- 地址：https://github.com/mvschwarz/openrig
- 简介：Multi-agent harness that runs Claude Code and Codex together as one system
- 语言：TypeScript
- 今日新增：781 stars today
- 标签：多 Agent 编排、Claude Code + Codex、YAML 定义团队、⚠️ 会改本机配置、日内 +585%

今天涨幅最猛的项目，也是**本系列第一次抓到完整日内加速曲线**的项目。它今早首次上榜时是 +114 / 1,066 星（当时排 #7），12.5 小时后变成 **+781 / 1,485 星**，`stars today` 涨 **+585.1%**，Star 总数实际增加 **419**。
⚠️ 注意：**增量 781 > Star 实际增量 419**，这个差额正好印证了滚动窗口的存在——窗口把它在上榜之前攒的星也算进来了。同理，它在一天内从中段冲到前五，靠的既有午后的真实加速，也有窗口口径的重算。**不能把它简单读成"半天涨了 585%"**。
概念仍是最锋利的一句："**A harness wraps a model. A rig wraps your harnesses.**"——Claude Code 和 Codex 本来互不相干，它把两者装进同一个 rig，用 YAML 定义 Agent 团队，一条命令 `rig up` 启动。要解决的是很具体的痛点：把这堆 AI 编码 Agent 从"一堆终端会话"变成**持久的、有组织的团队**，工作与上下文保持在固定地址上。底层靠 tmux 跑"座位"（seat），CLI 是 `rig up` / `rig send` / `rig ps --nodes` / `rig tui`，配 SQLite 与任务队列。Apache-2.0。
⚠️ 今日**逐字复核**，且**比今早多查到两条限定**：README 原文 "**Launching a rig writes provider hooks and workspace trust settings**" 一字未改，官方要求先读变更清单并备份相关文件；新增发现 "**Native Windows is not supported yet, and WSL2 has not been tested**"（仅 macOS / Linux）；此外要求 Node.js 20/22/24 + tmux，且 **Codex 需已完成登录鉴权**。具体写入项包括对 Claude Code 的 `~/.claude.json` 与 `.claude/settings.local.*`。1,485 星的极早期项目，接口变动快。

### 6. byoungd/up

- 地址：https://github.com/byoungd/up
- 简介：《人生进阶指南》——中文 | English 双语持续更新书稿，副标题"AI 时代终身学习指南"。（页面 About 为关键词堆叠串：An advanced guide which might benefit you a lot 🎉 . 韩先凯的人生进阶指南 … AI学习 AI指南 英语学习指南/英语学习教程/…）
- 语言：JavaScript
- 今日新增：310 stars today
- 标签：中文成长指南、AI 时代终身学习、CC BY-NC 4.0、书稿而非软件、低活性大盘样本

今日唯一的新上榜中文项目，作者韩先凯（笔名"离谱"，README 自述现任中国词元云计算有限公司董事长）。它**不是软件项目而是持续更新的书稿**：2017 年从《离谱的英语学习指南》起步，主题从英语扩展到 AI 学习、真实项目、创业复盘与身体恢复，提供中英文 EPUB / PDF 下载，并配了一份"读者实践回执"模板。
它反复练习一个六步循环：**发现问题 → 主动学习 → 与 AI 协作 → 完成真实任务 → 保存证据 → 复盘迁移**。README 里最实在的一句是作者给自己立的规矩——"**身份与商业关系会被写在明处；能力、产品与收入结果，只接受作品、用户、成本和时间留下的证据。**"
⚠️ 它今天真正的分析价值不在内容，而在**它把 §3.6 的"刻度尺"重新救了回来**：64,503 星的超大盘项目，当日涨幅只有 **0.48%**（全榜最低），和 PLFM_RADAR 的 0.57% 一起构成一组"体量巨大但今天几乎没动"的对照组。有了对照组，榜首三个项目 3.58%~12.31% 的涨幅才读得出"确实在热"，而不再是自证。
⚠️ 许可需留意，README 原文写明边界："本项目是**开放内容项目，不是 OSI 意义上的开源软件**：正文与作者内容采用 **CC BY-NC 4.0**，站点配置、检查脚本和构建代码采用 **MIT**。"——**NC（非商业）对二次分发是硬约束**，别按普通开源仓库理解。

### 7. cs341-illinois/coursebook

- 地址：https://github.com/cs341-illinois/coursebook
- 简介：Open Source Introductory Systems Programming Textbook for the University of Illinois
- 语言：TeX
- 今日新增：265 stars today
- 标签：UIUC 系统编程教材、CS 341、多格式自动构建、开源教科书、⚠️ README 未标许可

今日技术含量最"正统"的一个：UIUC **CS 341 System Programming** 课程使用的开源系统编程教材，全部示例用 C（README 原话："C is the de-facto language of the Linux Kernel"），假定读者已有编程语言基础并熟悉汇编指令。它是对 Angrave 早期 wikibook 实验的标准化重写，目标写得很实在——提升严谨度、加引用/脚注/延伸阅读/术语表、并导出 PDF / Markdown / HTML 三种格式、"automagically build so writers can focus on writing"（CI 自动构建）。
今天是本系列第一次抓到它，2,331 星、+265，当日涨幅 12.83% 排全榜第二——注意这个涨幅是**小基数效应**（2,331 星 vs openrig 的 1,485 星同量级），不能和 Hindsight 12.31%（40,260 星）混为一谈。**这正是"当日涨幅"比"增量"更需要配着体量看的例子。**
⚠️ 今日按 6kk 检索 README 全文：**0 命中 license / creative commons / CC-BY / copyright 任何许可声明**。作为一本供高校课程使用、可被第三方自由取用的教材，README 不写许可是实实在在的落地障碍（你不能确定能否重印、改编、商用）——列为今日风险第 4 条。

### 8. NawfalMotii79/PLFM_RADAR

- 地址：https://github.com/NawfalMotii79/PLFM_RADAR
- 简介：Open-source, low-cost 10.5 GHz PLFM phased array RADAR system
- 语言：PLSQL（疑为 GitHub 对仓库内 SQL/PL-SQL 文件的误判，主体实为硬件 + FPGA + Python）
- 今日新增：145 stars today
- 标签：开源相控阵雷达、10.5 GHz、双版本 3km 与 20km、MIT + CERN-OHL-P、⚠️ Alpha 且无监管免责

AERIS-10，今日门槛最高也最"离网"的一个项目，把雷达这件向来属于军工与大型厂商的事做成了可复现的开源硬件。关键参数：**10.5 GHz**、脉冲线性调频（Pulse LFM）、两个版本——AERIS-10N（Nexus，8×16 贴片阵列，**3 km**）与 AERIS-10E（Extended，32×16 介质填充缝隙波导阵列，**20 km**）；**±45° 方位与俯仰全电扫**，片上 FPGA 做脉冲压缩 / Doppler FFT / MTI / CFAR，配 Python GUI、地图集成、GPS/IMU 实时校正，模块化分成电源管理、频率合成、RF 三块板。
许可设计值得单独说一句：README 特意解释为何**硬件与软件用两份不同许可**——硬件 **CERN-OHL-P**、软件 **MIT**，原因是社区指出 MIT 对实体硬件缺乏法律保护。这个判断是对的，也很少见。
⚠️ 三条硬约束：① 状态徽标写明 **Status: Alpha** + **Features: Work in Progress**；② 按 6kk 检索 README 全文，**Safety / Regulatory / warning / disclaimer / risk / FCC 全部 0 命中**——这是一台 **10.5 GHz 主动发射的无线电设备**，README 却没有任何频谱许可与合规提示。各国对 10 GHz 频段发射的许可要求差异极大且普遍严格，"照着图纸焊一台然后开机"在多数地区很可能违法。**列为今日风险第 1 条。** ③ Fork/Star **22.9%** 为全榜最高，配合 25,656 星的规模，这个比例明显高于正常开源项目（通常 <20%），叠加 Alpha 状态，**建议对留存星数的构成持保留态度**。

## 观察

- vectorize-io/hindsight 今日 4,413 stars today，居当日增量第 1 位。
- debpalash/VoiceStudio 今日 3,274 stars today，居当日增量第 2 位。
- paperclipai/paperclip 今日 3,185 stars today，居当日增量第 3 位。
