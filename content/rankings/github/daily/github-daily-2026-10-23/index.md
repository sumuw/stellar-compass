---
title: GitHub 每日趋势榜 2026-10-23
description: 2026-10-23 GitHub Trending 榜首为 cloudflare/security-audit-skill，当日共收录 8 个项目。
date: '2026-10-23T08:00:00+08:00'
rankingKey: '2026-10-23'
slug: github-daily-2026-10-23
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

今日榜单共 **8 个项目**（已回查 Trending 页面 `Box-row` 计数同为 8，非解析丢失），是本周**最少的一次**，较昨日再少 1 席。但换血很凶：**换掉 6 席、新进 5 席**——不是整体降温，是主题在快速切换。

- **语言分布**：Python 3、JavaScript 2、C 1、Rust 1、TypeScript 1。Python 连续第六日居首，**Rust 首次出现**（NVIDIA/OpenShell）。
- **本期主线：榜单问的问题从「Agent 做得对不对」收窄到「Agent 能碰到什么」。** 过去一周的命题依次是"装什么"（10-17 插件生态）、"烧多少"（10-19 headroom）、"做得对不对"（10-21 安全审计 / 代码克制）；今天这一步走到底了——**安全与权限边界占了 8 席里的 4 席**，而且攻防治理三端第一次同日齐全：防御端 cloudflare/security-audit-skill（+2,706）、进攻端 SnailSploit/Claude-Red（+209）、运行时治理端 NVIDIA/OpenShell（+1,240），再加上因 **10-21 安全发布**上榜的 nodejs/node（+93）。
- **今日最重要的结构性变化：昨日记录的「底座回填」今天有了具体成因，但只对上一半。** nodejs/node 的上榜能直接对上官方公告（nodejs.org 首页与博客均挂出 "New security releases to be made available Wednesday, October 21, 2026"），是八席里唯一有官方发布可直接对应的事件驱动样本；而 php/php-src 连续第二日放量且加速（+423 → **+722**，+71%），第三方榜站同样记录它为 10-22 interpreter 类目增速第一，**但未查到对应的官方事件**，按规则不臆测原因。所以昨日"资金与注意力再平衡"的推测应修正为：**至少 nodejs 这一席是安全事件驱动，不是再平衡。**
- **增量冠军：cloudflare/security-audit-skill（+2,706）**。连续三日放大（+1,680 → +1,997 → +2,979）后今日首次回落 9%，但仍守在 2,700 以上，是本周唯一连续四日维持 2,000+ 日增的项目。仓库最后一次推送仍停在 2026-09-14。
- **新面孔里最重的一个：NVIDIA/OpenShell（+1,240，增量第二）**。NVIDIA 开源的自主 Agent 安全运行时，Apache 2.0，属 NVIDIA Agent Toolkit，在 GTC Berlin（10-20/21）期间密集发布，配套硬件侧还有 Sentry（BlueField-4 DPU 带外看门狗）。这是本榜近期少见的**由大厂官方主导**而非社区自发的 Agent 基础设施项目。
- **今日唯一与"安全/运行时"完全无关的条目是 OpenBMB/VoxCPM（+144）**——开源 TTS 模型线。它体量 40,201 星却只带来 +144，属"存量热度型"而非"事件驱动型"。
- **今日最"不像 AI 榜"的面孔：Renhuai123/ziwei-doushu（+547）**——紫微斗数开源排盘引擎。但它上榜靠的不是命理，而是它 10-15 发布的 v4.0 数据集（67.5 万张盘 × 13 维 = 877 万段解读、约 204 亿字）。它实质是**数据供给方，不是应用**。

---

## 重点项目

### 1. cloudflare/security-audit-skill

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cloudflare/security-audit-skill |
| 简介 | A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings |
| 语言 | JavaScript |
| 总 Star | 41,899 |
| 今日新增 | 2,706 stars today |
| 标签 | 安全审计、Agent 技能、Cloudflare、机器可读报告、漏洞发现 |

连续第四日上榜，今日增量冠军（+2,706），较昨日 +2,979 回落 9%——三日连续放大后首次回落，但仍守在 2,700 以上。Cloudflare 把内部漏洞发现 harness 的起点开源成 coding-agent 技能，一次审计跑六阶段，结论硬性分成 confirmed / needs_validation / rejected 三级，直接针对「Agent 安全审计报告塞满似是而非的高危」这个通病。仓库最后推送仍停在 2026-09-14（40 天前），却连续四日维持 2,000+ 日增——是本周唯一靠方法论博客而非版本发布维持热度的样本。

### 2. php/php-src

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/php/php-src |
| 简介 | The PHP Interpreter |
| 语言 | C |
| 总 Star | 41,534 |
| 今日新增 | 722 stars today |
| 标签 | PHP、语言运行时、C、开源、基础设施 |

连续第二日在榜，且日增由昨日 +423 加速到 +722（+71%），排名由第 1 退到第 2——退位不是因为衰减，而是榜首增量更高。PHP 解释器官方仓库，C 语言实现，41,534 星。对一个有近三十年历史、提交节奏极其稳定的仓库来说，连续两日维持 400+ / 700+ 属明显异常放量；第三方榜站同样记录它为 10-22 interpreter 类目增速第一，可交叉印证放量是持续的而非单日噪声。但本期未检索到对应的官方事件（版本发布公告 / RFC / 安全公告），按规则不臆测原因。

### 3. anthropics/knowledge-work-plugins

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/anthropics/knowledge-work-plugins |
| 简介 | Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork |
| 语言 | Python |
| 总 Star | 32,153 |
| 今日新增 | 643 stars today |
| 标签 | Claude、插件生态、知识工作、Python、Agent |

日增由昨日 +303 翻倍到 +643（+112%），排名由第 2 退到第 3。Anthropic 官方为 Claude Cowork 准备的插件仓库，面向律师、财务、研究等「知识工作」岗位。它是 10-17 那批第三方「岗位插件目录」里唯一活到今天的一个，关键区别在于它是官方仓库、插件有明确的产品内使用入口（Cowork），不是空货架。连续两日加速也说明：在「技能文件」浪潮整体退潮的一周里，唯一还在增长的是有真实产品承接的那个。

### 4. NVIDIA/OpenShell

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/NVIDIA/OpenShell |
| 简介 | OpenShell is the safe, private runtime for autonomous AI agents. |
| 语言 | Rust |
| 总 Star | 18,699 |
| 今日新增 | 1,240 stars today |
| 标签 | Agent 运行时、沙箱、安全策略、Rust、NVIDIA |

今日新上榜且增量第二（+1,240），是本期最重的新面孔。NVIDIA 开源的自主 Agent 安全运行时，Apache 2.0，属 NVIDIA Agent Toolkit。核心架构决策是进程外策略强制：不靠行为提示词约束 Agent，而是在 Agent 运行的环境上强制约束——即使 Agent 被攻陷也无法绕过，等于把浏览器标签页模型搬到 Agent 上。防护分四层：文件系统（Landlock）、网络（仅批准目的地、可热重载）、进程（非特权身份 + seccomp）、Provider 凭据（只在授权端点解析占位符）。一条命令即可让 Claude Code、Codex、Copilot CLI、OpenClaw 等零改动跑进去。硬件侧同日发布的还有 Sentry——跑在 BlueField-4 DPU 上的带外看门狗，越界时毫秒级隔离。这是本榜近期少见的由大厂官方主导而非社区自发的项目。

### 5. Renhuai123/ziwei-doushu

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Renhuai123/ziwei-doushu |
| 简介 | 紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据 |
| 语言 | TypeScript |
| 总 Star | 6,818 |
| 今日新增 | 547 stars today |
| 标签 | TypeScript、命理、数据集、知识工程、古籍数字化 |

今日新上榜（+547），是八席里唯一与 AI 基础设施、安全、运行时都无关的条目，但上榜靠的不是算命，而是 10-15 发布的 v4.0 解读数据集：67.5 万张命盘 × 13 维 = 877 万段解读、约 204 亿字，CC BY 4.0——下载量远超 star 数对应的通常转化，说明下载者里大量是不点 star 的 AI 与数据从业者，它实质是命理 RAG 与微调的语料供给方。工程上真正值得看的是两件事：把古书里「看情况」的规则拆成 required / bonus / breaking 三层可判定条件（34 个格局，每条标注古籍出处）；以及给夏令时判定写了「神谕差分 + 1930–1995 逐日穷举 + 变异测试」的回归测试——理由是时辰两小时一档，差一小时命宫身宫大限会整个换掉。作者是一个人 + AI（最新提交 co-author 署名 claude），底层排盘调用 iztro，自建的是知识层；README 主动公开开源边界（断语库、AI 解读 prompt、后端 API 均闭源）。已存在未修 issue：generateChart 会静默忽略出生地经度参数。许可四层嵌套，倪海厦原话为 CC BY-NC-SA 非商用。

### 6. SnailSploit/Claude-Red

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/SnailSploit/Claude-Red |
| 简介 | claude-red is a curated library of offensive security skills designed for the Claude skills system. Each skill is a structured SKILL.md file that primes Claude with expert-level methodology for a specific attack surface — from SQLi to shellcode, EDR evasion to exploit development. |
| 语言 | Python |
| 总 Star | 8,367 |
| 今日新增 | 209 stars today |
| 标签 | 进攻性安全、红队、Agent 技能、渗透测试、MIT |

今日新上榜（+209），与 security-audit-skill 构成「攻防两端同台」——这是本榜第一次同时出现进攻与防御两个安全技能库。78 个结构化 SKILL.md、23 个分类：Web 16 项、无线 14 项（含 BLE、Zigbee/Thread/Matter、Z-Wave、LoRaWAN/sub-GHz，这个广度很少有单一工具尝试）、基础设施与红队 7 项、漏洞利用开发 6 项、模糊测试 4 项。设计核心是按对话触发词按需加载，用不到的不占上下文。需要说清它的性质：它不发布工具或利用代码，发布的是方法论，定位为授权红队、众测、安全研究与 CTF。正因为它只是提示词，对防守方同样有价值——这些文件等于一份「对手在 AI 辅助下会怎么推理」的清单，可直接用于检测工程讨论。

### 7. OpenBMB/VoxCPM

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/OpenBMB/VoxCPM |
| 简介 | VoxCPM2: Tokenizer-Free TTS for Multilingual Speech Generation, Creative Voice Design, and True-to-Life Cloning |
| 语言 | Python |
| 总 Star | 40,201 |
| 今日新增 | 144 stars today |
| 标签 | TTS、语音合成、声音克隆、多语言、开源模型 |

今日新上榜（+144），增量是八席里倒数第二低，却是体量第三大的仓库（40,201 星）。OpenBMB（MiniCPM 团队）的开源 TTS 模型线，VoxCPM2 走 tokenizer-free 路线——不用音素词典或离散音频 codebook，直接把文本映射到连续语音表示，长文本与中英混排的发音韵律更好。2B 参数、2M+ 小时多语训练、30 种语言 + 9 种中国方言、原生 48kHz 输出。一个模型覆盖文本合成、Voice Design（自然语言描述一个新声音、无需参考音频）、可控克隆三种工作流，Apache 2.0。它上榜的意义在于形态：144 的增量说明它不是今天才火，而是这条开源语音线已积累到能在任意一天挤进日榜的存量热度。

### 8. nodejs/node

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/nodejs/node |
| 简介 | Node.js JavaScript runtime ✨🐢🚀✨ |
| 语言 | JavaScript |
| 总 Star | 122,799 |
| 今日新增 | 93 stars today |
| 标签 | Node.js、JavaScript、运行时、开源、基础设施 |

今日新上榜，+93 是八席里最低的一档，但它是本期唯一有官方公告可直接对上的事件驱动样本。nodejs.org 首页横幅与官方博客均挂出「New security releases to be made available Wednesday, October 21, 2026」，对应 v26.12.0（Current）与 v24.22.0 'Krypton'（LTS）两条线的安全更新。对 122,799 星的巨型仓库来说，+93 的日增几乎可以忽略——它在日榜上的位置靠的是安全发布当日开发者集中关注，而不是增长。它与 php/php-src 一起让今天成为本周第二个「两个语言运行时同日在榜」的日子，但两者成因完全不同：一个公告驱动的一次性冲量，一个原因不明的持续放量。

## 观察

1. **榜单连续第三日收缩（13 → 12 → 9 → 8），但收缩的方式是快速换血而非整体降温。** 今日换掉 6 席、新进 5 席。掉的那六个（ponytail、graphify、supabase、fastapi、claude-howto、PCL）分属"代码克制""知识图谱""后端平台""Web 框架""教程""游戏启动器"六个完全不同的方向，没有任何共同点——**这说明退潮的是"10 月中那波 Agent 工具集中曝光"整批，而不是某个细分方向。**
2. **今日最清晰的信号是主题切换：从"Agent 做得对不对"到"Agent 能碰到什么"。** 安全与权限边界占 8 席中的 4 席，且攻防治理三端齐全：防御端找漏洞（security-audit-skill）、进攻端给方法论（Claude-Red）、运行时端做强制（OpenShell），外加一个因安全发布上榜的运行时（nodejs/node）。**这不是同一个方向的三家公司，而是三个不同层次——应用层、知识层、运行时层——在同一天各自到位。** 一个技术方向出现分层，通常意味着它开始从话题变成基础设施。
3. **昨日"底座回填 = 资金与注意力再平衡"的推测，今天应被修正一半。** nodejs/node 的上榜能直接对上 10-21 官方安全发布公告，是纯事件驱动；而 php/php-src 连续两日放量（+423 → +722）且被第三方榜站交叉印证，但未查到任何官方事件。同一天两个运行时上榜，成因完全不同——**这说明把"非 AI 基础设施上榜"笼统归为一类趋势是错误的，必须先分辨是公告驱动还是真实放量。**
4. **大厂官方主导的 Agent 基础设施回来了。** NVIDIA/OpenShell（+1,240）是本期最重的新面孔，也是本榜近期少见的由大厂主导而非社区自发的项目：配套文档站、硬件侧 Sentry、Anthropic / Microsoft / CrowdStrike / Salesforce 等一列合作方。对照过去一周榜单上"一个人 + AI 写出来的 SKILL.md"们（今日的 security-audit-skill、Claude-Red 仍是这个形态），**同一天里两种形态都在榜，且大厂那一个的增量是个人项目的六倍**——Agent 基础设施这一层正在从草根往厂商手里集中。
5. **"外驱上榜者"的衰减规律新增一个关键变量：载体形态。** 通例是第二天回落 20–50%（本周多个版本发布型样本验证）。security-audit-skill 是明显的例外：+1,680 → +1,997 → +2,979 → **+2,706**，连续三日放大后今日才首次回落 9%。它同样处于 40 天未推送的静态状态，差别在于载体是**一篇可反复引用转载的方法论博客**，而不是一次性的版本发布。这个区分对判断"某项目上榜能火几天"有直接预测价值。
6. **今日最"不像 AI 榜"的条目，恰恰是 AI 时代最典型的产物。** ziwei-doushu 是个紫微斗数排盘引擎，但它的作者是"一个人 + Claude"（最新提交 co-author 直接署名 claude），它把古籍里"看情况"的规则拆成可判定的三层条件，还给夏令时判定写了"神谕差分 + 逐日穷举 + 变异测试"的回归测试。**它上榜的真正原因是那个 204 亿字的数据集**——在 AI 语境下，命理项目的护城河不是算法（算法开源、底层还依赖 iztro），而是语料。这与本周榜单上"能被复核的产出胜过流程描述"那条线是同一件事：**能被别人拿去用的东西，才是值钱的。**

---

> 数据说明：本报告抓取自 GitHub Trending `since=daily` 页面，`Box-row` 回查计数为 8，与实际解析条目数一致。总 Star 与日增均为抓取时点快照。项目背景信息经实时检索核实；php/php-src 的上榜原因未检索到官方事件，报告中已如实标注为"未查到"，未作推测。
