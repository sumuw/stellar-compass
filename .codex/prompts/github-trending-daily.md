# GitHub 每日趋势榜 Prompt

## 任务目标

自动抓取 GitHub 每日趋势榜，为每个项目生成标签（≤5 个）和简评，按 Markdown 格式输出结构化报告。

## 执行步骤

### 1. 抓取原始数据

使用 `github-trending-reporter` 技能的 `fetch-trending.mjs` 脚本：

```bash
node <skill_dir>/fetch-trending.mjs --since daily --limit 25 --output ./trending-<date>
```

脚本输出 JSON 文件，含每个项目的：name、url、description、language、stars（总数）、delta（日增量）。

### 2. 生成标签（≤5 个/项目）

基于项目名称、简介、语言推断：
- 技术栈：AI、LLM、Agent、RAG、数据库、前端、后端
- 应用领域：自动化、安全、数据分析、生产力、开发工具、基础设施
- 项目类型：框架、库、开源
- 语言名可作为标签：Python、TypeScript、Rust、Shell

### 3. 生成简评（1-2 句/项目）

- 说明项目核心功能和亮点
- 客观简洁，不夸大
- 若简介为 Unknown，基于仓库名推测并注明

### 4. 生成报告

参考模板组装：今日概览 + 重点项目（表格 + 标签 + 简评）+ 观察总结。

### 5. Stellar Compass 集成（可选）

在含 `content/rankings/` 的项目中，生成 Hugo leaf bundle：
- `content/rankings/github/daily/github-daily-<date>/index.md` — front matter + 报告正文
- `content/rankings/github/daily/github-daily-<date>/ranking.json` — 结构化数据

## 质量标准

- 数据来源仅限 GitHub Trending 页面
- 标签精准，不超过 5 个
- 评论客观简洁
- 简体中文撰写（保留必要英文术语）
