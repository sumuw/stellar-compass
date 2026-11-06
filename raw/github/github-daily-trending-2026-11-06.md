# GitHub 每日趋势榜 2026-11-06

## 今日概览

今日共 18 条（回查 GitHub Trending 页面 `Box-row` 计数同为 18），日增合计 9,531。对比基期 11-05 的 15 席：留住 4 席（auto-ontology、mattpocock/skills、lz4、google/skills），11 席掉榜（gstack、ai-goofish-monitor、Scrapling、agent-desktop、worktrunk、agent-browser、scenario-labs/skills、garden-skills、VibeVoice、floci、DiscImageStudio），新入 14 席。留存率 4/15，榜单从昨日的「留存型」格局一夜切换为「基建经典大盘」格局。

语言分布：**Rust 4 席第一**（zed、rust、nushell、ruff），C 3 席（mpv、lz4、openssl），Python 2 席（auto-ontology、google/skills），TypeScript 2 席（angular、vscode），Go 2 席（prometheus、etcd），JavaScript 2 席（react、cloudflare-security-audit-skill），Ruby、PHP、Shell 各 1 席。

今天最值得注意的信号有三条：

1. **「经典基建大盘」罕见成规模回榜。** zed、rails、mpv、rust、react、angular、symfony、prometheus、vscode、nushell、etcd、openssl、ruff 共 13 个基础软件常青树同日挤入 18 席榜单，且经 API 核实除 mpv（最后推送 11-05）外全部当天有推送。这类项目平时单日增量只有一两百星，今天集体上榜更像 Trending 排序算法的窗口效应，而非各自出了大新闻。
2. **Cloudflare 安全审计技能包成为当日增量王。** cloudflare/security-audit-skill 今日 +2,524 为全榜第一，总星已达 63,722 —— 一个 9 月中旬（最后推送 2026-09-14，约 54 天未更新）就停更的仓库靠惯性传播拿下增量冠军，「编码 Agent 安全审计」需求热度可见一斑。
3. **排序与日增脱钩再现极端形态。** 增量前三 cloudflare/security-audit-skill（+2,524）、mattpocock/skills（+2,058）、auto-ontology（+2,005）分列第 17、16、2 名，而榜首 zed 仅 +292、第 4 名 mpv 仅 +36 —— 名次与增量完全无关，读榜时仍须分开看。

## 重点项目

### 1. zed-industries/zed

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/zed-industries/zed |
| 简介 | Code at the speed of thought – Zed is a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter. |
| 语言 | Rust |
| 总 Star | 93,483 |
| 今日新增 | 292 stars today |
| 标签 | 编辑器、Rust、协作、开发工具、高性能 |

Atom 与 Tree-sitter 作者打造的高性能多人协作代码编辑器，Rust 编写。今日以 +292 的增量登顶榜首，是「名次与增量脱钩」的典型样本；当天有推送，93k 星的常青树。

### 2. NVIDIA/auto-ontology

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/NVIDIA/auto-ontology |
| 简介 | Auto Ontology is a Python framework for building semantic, graph-based reasoning layers over data. It enables deterministic query generation, better context retrieval, and more explainable AI for LLM and agent workflows. |
| 语言 | Python |
| 总 Star | 8,857 |
| 今日新增 | 2,005 stars today |
| 标签 | 本体、知识图谱、语义推理、LLM、Python |

NVIDIA 官方的语义层框架：在数据之上构建图结构推理层，为 LLM/Agent 工作流提供确定性查询生成与可解释性。连续第四天在榜（前三天均榜首，今日退居第 2），总星从 7,110 涨到 8,857，当天有推送。

### 3. rails/rails

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/rails/rails |
| 简介 | Ruby on Rails |
| 语言 | Ruby |
| 总 Star | 58,981 |
| 今日新增 | 152 stars today |
| 标签 | Web 框架、Ruby、全栈、MVC、经典 |

Ruby on Rails 官方仓库，全栈 MVC 框架的祖师爷级项目。今日随「经典基建大盘」回榜，当天有推送，+152 属其日常水位。

### 4. mpv-player/mpv

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mpv-player/mpv |
| 简介 | 🎥 Command line media player |
| 语言 | C |
| 总 Star | 37,849 |
| 今日新增 | 36 stars today |
| 标签 | 媒体播放器、C、命令行、跨平台、极客 |

命令行媒体播放器，以轻量、可脚本化、解码能力全面著称。今日仅 +36 星却排第 4，是全榜「名次与增量脱钩」最极端的条目；最后推送 11-05。

### 5. rust-lang/rust

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/rust-lang/rust |
| 简介 | Empowering everyone to build reliable and efficient software. |
| 语言 | Rust |
| 总 Star | 121,361 |
| 今日新增 | 186 stars today |
| 标签 | Rust、系统编程、内存安全、编译器、经典 |

Rust 语言官方仓库。今日随基建大盘回榜，当天有推送，121k 星的系统级常青树。

### 6. react/react

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/react/react |
| 简介 | The library for web and native user interfaces. |
| 语言 | JavaScript |
| 总 Star | 252,200 |
| 今日新增 | 244 stars today |
| 标签 | React、前端、UI 库、JavaScript、经典 |

React 官方仓库，Web 与原生 UI 领域的事实标准。252k 星为全榜总星第一，当天有推送，随基建大盘回榜。

### 7. angular/angular

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/angular/angular |
| 简介 | Deliver web apps with confidence 🚀 |
| 语言 | TypeScript |
| 总 Star | 101,285 |
| 今日新增 | 128 stars today |
| 标签 | Angular、前端、框架、TypeScript、企业级 |

Google 维护的前端框架，企业级 Web 应用的常青选择。当天有推送，+128 属日常水位。

### 8. symfony/symfony

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/symfony/symfony |
| 简介 | The Symfony PHP framework |
| 语言 | PHP |
| 总 Star | 31,378 |
| 今日新增 | 89 stars today |
| 标签 | PHP、Web 框架、组件化、经典、后端 |

PHP 生态最重要的组件化框架之一。今日随基建大盘回榜，当天有推送。

### 9. prometheus/prometheus

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/prometheus/prometheus |
| 简介 | The Prometheus monitoring system and time series database. |
| 语言 | Go |
| 总 Star | 67,116 |
| 今日新增 | 140 stars today |
| 标签 | 监控、时序数据库、可观测性、Go、云原生 |

云原生监控事实标准与时间序列数据库。当天有推送，67k 星的基建常青树。

### 10. google/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/google/skills |
| 简介 | Agent Skills for Google products and technologies |
| 语言 | Python |
| 总 Star | 22,787 |
| 今日新增 | 532 stars today |
| 标签 | 技能包、Agent、Google、官方、Python |

Google 官方的 Agent Skills 仓库，覆盖 Google 产品与技术栈。连续第二天在榜（昨日首入），当天有推送，是技能包赛道目前的官方头部之一。

### 11. microsoft/vscode

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/microsoft/vscode |
| 简介 | Visual Studio Code |
| 语言 | TypeScript |
| 总 Star | 194,954 |
| 今日新增 | 295 stars today |
| 标签 | 编辑器、IDE、TypeScript、微软、经典 |

Visual Studio Code 官方仓库。当天有推送（当日仍有持续集成），195k 星的编辑器霸主随基建大盘回榜。

### 12. lz4/lz4

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/lz4/lz4 |
| 简介 | Extremely Fast Compression algorithm |
| 语言 | C |
| 总 Star | 12,626 |
| 今日新增 | 313 stars today |
| 标签 | 压缩算法、C、高性能、嵌入式、经典 |

极快速无损压缩算法，以「压缩率换速度」的定位广泛用于数据库与存储层。连续第三天在榜（+16 → +313 显著放量，当天有推送），疑似新版发布带动持续回流。

### 13. nushell/nushell

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/nushell/nushell |
| 简介 | A new type of shell |
| 语言 | Rust |
| 总 Star | 40,918 |
| 今日新增 | 177 stars today |
| 标签 | Shell、结构化数据、Rust、CLI、创新交互 |

「新型 shell」：把管道里的数据当结构化表格处理，命令输出可直接筛选排序。当天有推送，40k 星。

### 14. etcd-io/etcd

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/etcd-io/etcd |
| 简介 | Distributed reliable key-value store for the most critical data of a distributed system |
| 语言 | Go |
| 总 Star | 52,570 |
| 今日新增 | 123 stars today |
| 标签 | 分布式、键值存储、一致性、Go、基础设施 |

分布式系统关键数据的可靠键值存储，Kubernetes 的元数据底座。当天有推送，随基建大盘回榜。

### 15. openssl/openssl

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/openssl/openssl |
| 简介 | General purpose TLS and crypto library |
| 语言 | C |
| 总 Star | 31,265 |
| 今日新增 | 24 stars today |
| 标签 | TLS、加密、C、安全、经典 |

通用 TLS 与密码学库，互联网安全的地基。今日仅 +24 星排第 15，脱钩样本之一；当天有推送。

### 16. mattpocock/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mattpocock/skills |
| 简介 | Skills for Real Engineers. Straight from my .agents directory. |
| 语言 | Shell |
| 总 Star | 316,583 |
| 今日新增 | 2,058 stars today |
| 标签 | AI、技能包、Shell、工程实践、Claude |

Matt Pocock（Total TypeScript 作者）公开的个人 .agents 技能目录，316,583 星为全榜总星第一。连续第四天在榜，今日 +2,058 为增量第二；最后推送 11-05。

### 17. cloudflare/security-audit-skill

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cloudflare/security-audit-skill |
| 简介 | A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings |
| 语言 | JavaScript |
| 总 Star | 63,722 |
| 今日新增 | 2,524 stars today |
| 标签 | 安全审计、技能包、Agent、Cloudflare、官方 |

Cloudflare 官方的编码 Agent 安全审计技能：多阶段审计 + 独立验证的机器可读结果。今日 +2,524 为全榜增量第一、总星已达 63,722。⚠️ 最后推送 2026-09-14（约 54 天未更新），靠惯性传播爆发。

### 18. astral-sh/ruff

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/astral-sh/ruff |
| 简介 | An extremely fast Python linter and code formatter, written in Rust. |
| 语言 | Rust |
| 总 Star | 50,615 |
| 今日新增 | 213 stars today |
| 标签 | Linter、代码格式化、Python、Rust、开发工具 |

Rust 编写的极速 Python linter 与格式化器，Astral 出品。当天有推送，50k 星的 Python 工具链常青树。

## 观察

**一、榜单一夜切换为「经典基建大盘」。** 昨日还以 AI 新贵和技能包为主（留存 9/16 为近期最高），今天 18 席中 13 席是 zed/rails/rust/react/vscode/openssl 这类基础软件常青树，AI 新贵几乎清场（只剩 auto-ontology、两个 skills 仓库和 cloudflare 审计技能）。Trending 排序算法的窗口效应在这类日子里非常明显，单日榜单的代表性强弱要打折扣看。

**二、留存跌到 4/15，昨日 AI 新贵全军掉榜。** gstack、Scrapling、agent-desktop/browser、VibeVoice、floci、DiscImageStudio 等 11 席全部离场，印证了此前判断：这批「单点爆发型」条目留存本就不稳，叠加今天的算法窗口切换，掉榜幅度被放大。

**三、技能包赛道仍有 3 席，但结构变化。** mattpocock/skills（316k，总星第一）、google/skills（22k，官方）、cloudflare/security-audit-skill（63k，官方垂类）继续在榜，个人侧只剩 Matt Pocock 一人。cloudflare 这个「停更 54 天仍日增 2,524」的样本说明该赛道的流量高度集中于头部官方仓库。

**四、⚠️ 时效标注。** cloudflare/security-audit-skill 最后推送 2026-09-14（约 54 天未更新），是全榜唯一明显停更条目；mpv 最后推送 11-05、mattpocock/skills 最后推送 11-05，其余 15 席当天（11-06）均有推送。

**五、中文项目 0 席。** 昨日的 DiscImageStudio、ai-goofish-monitor、garden-skills 三席全部掉榜，今日无中文项目在列。
