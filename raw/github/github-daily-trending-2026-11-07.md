# GitHub daily趋势榜 2026-11-07

## 今日概览

榜单共 **15 席**（页面 Box-row 回查同为 15）。延续「技能包大盘 + AI 工具回潮」格局：**Agent Skills 赛道占据 4 席**（cloudflare/security-audit-skill、google/skills、mattpocock/skills、anthropics/skills），较昨日 5 席略减但仍是最大主题。AI 工具侧 Vercel agent-browser 重回榜首、OpenMausBot（开源 Grok Bot 替代）与中文项目 billion-context（上下文压缩）为新面孔。常青树回落至 4 席（prometheus、ruff、tailwindcss、zed），较昨日的 13 席大幅退潮。语言分布：Python 4、TypeScript 4、Rust 3、Go 2、JavaScript 1、Shell 1。留存 5/18（prometheus、ruff、zed、mattpocock/skills、google/skills）。中文项目 1 席（billion-context）。

## 重点项目

### 1. vercel-labs/agent-browser

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/vercel-labs/agent-browser |
| 简介 | Browser automation CLI for AI agents |
| 语言 | Rust |
| 总 Star | 46,732 |
| 今日新增 | 180 stars today |
| 标签 | AI、Agent、浏览器自动化、Rust、开发工具 |

Vercel 出面的 AI 代理浏览器自动化 CLI，用 Rust 写就、主打给 Agent 提供高速可控的网页操作能力。此前与 agent-desktop 双子星同榜，本期兄弟项目掉榜、本尊以稳定增量重回榜首，显示「Agent 操控浏览器」赛道热度仍在。

### 2. cloudflare/security-audit-skill

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cloudflare/security-audit-skill |
| 简介 | A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings |
| 语言 | JavaScript |
| 总 Star | 65,498 |
| 今日新增 | 2,088 stars today |
| 标签 | 安全、代码审计、Agent、技能包、Cloudflare |

今日**增量王 +2,088**。多阶段安全审计技能包，产出经独立验证的机器可读报告，是「技能包安全赛道」的代表作。⚠️ 注意：仓库最后推送停在 2026-09-14，**停更约 54 天**，本轮是纯惯性传播，实际代码已无近期维护。

### 3. google/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/google/skills |
| 简介 | Agent Skills for Google products and technologies |
| 语言 | Python |
| 总 Star | 23,306 |
| 今日新增 | 449 stars today |
| 标签 | Google、Agent、技能包、Python、官方开源 |

Google 官方 Agent Skills 仓库，覆盖 Google 产品与技术栈的代理技能。继首入榜后连续第三天在榜（+449），大厂官方背书的技能包正在成为该赛道的「标准件」，当日有活跃推送。

### 4. mattpocock/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mattpocock/skills |
| 简介 | Skills for Real Engineers. Straight from my .agents directory. |
| 语言 | Shell |
| 总 Star | 317,572 |
| 今日新增 | 1,111 stars today |
| 标签 | Agent、技能包、工程实践、Shell、开源 |

TypeScript 名师 Matt Pocock 的个人 .agents 目录直出技能包，总星 31.7 万为全榜第一。+1,111 增量连续多日稳定，是技能包赛道最有「个人 IP 带货」属性的样本；最近推送 11-05，维护节奏正常。

### 5. anthropics/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/anthropics/skills |
| 简介 | Public repository for Agent Skills |
| 语言 | Python |
| 总 Star | 188,675 |
| 今日新增 | 386 stars today |
| 标签 | Anthropic、Agent、技能包、Claude、官方开源 |

Anthropic 官方 Agent Skills 公共仓库（18.9 万星）。技能包赛道「祖师爷」级条目，与 Google 官方仓库同框印证：Agent Skills 已从社区玩法升级为大厂基础设施竞争的一部分，当日仍有推送。

### 6. meta/astryx

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/meta/astryx |
| 简介 | An open source design system that's fully customizable and agent ready |
| 语言 | TypeScript |
| 总 Star | 14,378 |
| 今日新增 | 185 stars today |
| 标签 | Meta、设计系统、前端、TypeScript、Agent |

Meta 开源的「Agent-ready」设计系统，主打完全可定制且原生适配 AI 代理调用。新面孔首次入榜，「设计系统 × Agent」是本周新出现的融合方向，值得前端生态关注；当日有活跃推送。

### 7. prometheus/prometheus

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/prometheus/prometheus |
| 简介 | The Prometheus monitoring system and time series database. |
| 语言 | Go |
| 总 Star | 67,407 |
| 今日新增 | 325 stars today |
| 标签 | 监控、时序数据库、基础设施、Go、云原生 |

监控与告警的事实标准，云原生生态基石。经典基建大盘成员，+325 的日常惯性增量稳定在榜，当日有推送；对多数团队而言它是「用了但不会点星」的隐形依赖。

### 8. sherlock-project/sherlock

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/sherlock-project/sherlock |
| 简介 | Hunt down social media accounts by username across social networks |
| 语言 | Python |
| 总 Star | 100,266 |
| 今日新增 | 1,819 stars today |
| 标签 | OSINT、安全、Python、数据分析、自动化 |

按用户名跨社交网络追踪账号的 OSINT 神器，总星破 10 万。+1,819 增量排全榜第三但榜单位次仅第 8，又一个「排序与增量脱钩」样本；数据时代的账号聚合需求让它长期是安全圈与隐私讨论的焦点工具。

### 9. milind-soni/OpenMausBot

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/milind-soni/OpenMausBot |
| 简介 | Open-source Grok Bot alternative with a virtual machine that bots can use |
| 语言 | TypeScript |
| 总 Star | 16,848 |
| 今日新增 | 1,986 stars today |
| 标签 | AI、Agent、开源替代、虚拟机、TypeScript |

开源版 Grok Bot 替代品，内置一个 Bot 可直接使用的虚拟机环境。+1,986 增量居全榜第二，「给 Bot 一台电脑用」的思路踩中了 Agent 自主执行的风口，新面孔首入榜即高增量。

### 10. astral-sh/ruff

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/astral-sh/ruff |
| 简介 | An extremely fast Python linter and code formatter, written in Rust. |
| 语言 | Rust |
| 总 Star | 50,939 |
| 今日新增 | 350 stars today |
| 标签 | Python、Linter、代码格式化、Rust、开发工具 |

用 Rust 写的极速 Python 检查器与格式化器，已逐步取代 flake8/black 成为 Python 工程默认选择。常青树成员，当日有推送，+350 属日常水位。

### 11. tailwindlabs/tailwindcss

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/tailwindlabs/tailwindcss |
| 简介 | A utility-first CSS framework for rapid UI development. |
| 语言 | TypeScript |
| 总 Star | 98,403 |
| 今日新增 | 181 stars today |
| 标签 | 前端、CSS、框架、TypeScript、设计 |

原子化 CSS 框架王者，总星逼近 10 万。前端「常青大盘」成员，+181 惯性增量；最近推送 11-06，v4 时代的生态地位依旧稳固。

### 12. mbillow/localthings

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mbillow/localthings |
| 简介 | Control your Samsung appliances from Home Assistant over your home network, with no cloud account. |
| 语言 | Python |
| 总 Star | 1,028 |
| 今日新增 | 184 stars today |
| 标签 | 智能家居、Home Assistant、物联网、Python、隐私 |

让三星家电通过**本地局域网**接入 Home Assistant、完全绕开云端账号。总星刚破千的小项目靠解决「厂商云锁定」痛点单日 +184 冲榜，是智能家居去云化社区情绪的典型爆发；当日有推送。

### 13. zed-industries/zed

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/zed-industries/zed |
| 简介 | Code at the speed of thought – Zed is a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter. |
| 语言 | Rust |
| 总 Star | 94,222 |
| 今日新增 | 1,119 stars today |
| 标签 | 编辑器、Rust、开发工具、协作、高性能 |

Atom/Tree-sitter 团队打造的高性能多人协作编辑器。+1,119 增量在编辑器类里相当显眼，常青树中今日增量最高的一席；AI 编辑器混战背景下，「本地极速 + 协作」路线仍有稳定拥趸，当日有推送。

### 14. ranxianglei/billion-context

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/ranxianglei/billion-context |
| 简介 | A context-compression plugin for month-long single sessions (billions of tokens), small context windows (a 100K context is enough) and token savings (5x fewer tokens). 上下文压缩插件，月级长会话，兼容小窗口（100k 上下文足矣）省 token（省 5 倍 token）. billion-context is all you need |
| 语言 | TypeScript |
| 总 Star | 4,564 |
| 今日新增 | 185 stars today |
| 标签 | AI、LLM、上下文压缩、长会话、TypeScript |

中文开发者的上下文压缩插件：让月级长会话在 10 万级小上下文窗口里跑通，token 消耗直降 5 倍。「长会话成本焦虑」是 Agent 落地的真实痛点，个人项目首入榜即获稳定增量；当日有推送。

### 15. dsx-ai-factory/nvke

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/dsx-ai-factory/nvke |
| 简介 | NVIDIA Kubernetes Engine (NVKE). A management plane for GPU Kubernetes on bare metal. |
| 语言 | Go |
| 总 Star | 515 |
| 今日新增 | 125 stars today |
| 标签 | NVIDIA、Kubernetes、GPU、基础设施、Go |

NVIDIA Kubernetes Engine：裸金属 GPU K8s 的管理平面。总星仅 515 的早期项目单日 +125 冲进榜单，GPU 集群调度是 AI 基建绕不开的环节，「NVIDIA 官方名头 + 早期稀缺性」驱动了本轮关注。

## 观察

1. **技能包赛道仍是最大主题但热度略降**：4 席（昨日 5 席），且除 cloudflare 外增量普遍收敛（google +449、anthropics +386）。值得警惕的是增量王 cloudflare/security-audit-skill **停更 54 天**仍在爆发（+2,088），技能包传播的「惯性窗口」比代码仓库更长。
2. **AI 工具从「模型层」转向「执行层」**：agent-browser（浏览器）、OpenMausBot（虚拟机）、billion-context（上下文压缩）、nvke（GPU 底座）全部指向 Agent 的执行与资源瓶颈，而非模型本身。
3. **常青树退潮**：昨日 13 席常青树今天只剩 4 席，且除 zed（+1,119）外增量均在 200-400 区间；趋势榜的「基建大盘日」已过。
4. **排序与增量继续脱钩**：增量前三 cloudflare（+2,088）、OpenMausBot（+1,986）、sherlock（+1,819）分列第 2、9、8 位；榜首 agent-browser 仅 +180。
5. **时效标注**：cloudflare/security-audit-skill 停更约 54 天（09-14 后无推送）；mattpocock/skills 最近推送 11-05；其余 13 席当日或隔日均有活跃推送。
