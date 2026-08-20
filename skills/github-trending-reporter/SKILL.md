---
name: github-trending-reporter
description: 抓取 GitHub Trending 页面并整理为结构化 Markdown 报告，含项目标签和简评
version: 1.0.0
read_when:
  - 需要抓取 GitHub 每日/每周/每月趋势榜
  - 需要生成 GitHub Trending 结构化报告
  - 需要为 GitHub 热门项目生成标签和评论
---

# GitHub Trending Reporter

## 概述

抓取 GitHub Trending 页面，解析热门仓库数据，生成含项目标签（≤5 个）和简评的结构化 Markdown 报告。

本技能分两阶段执行：
1. **脚本阶段**（`fetch-trending.mjs`）：机械抓取 + HTML 解析，输出原始 JSON
2. **Agent 阶段**：基于原始 JSON 生成标签、简评和最终 Markdown 报告

## 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `since` | string | `daily` | 时间范围：`daily` / `weekly` / `monthly` |
| `language` | string | 空（全部） | 编程语言过滤，如 `python`、`typescript` |
| `limit` | integer | `25` | 抓取项目数量上限 |
| `output` | string | `./trending-output` | 输出文件路径前缀（生成 `.json` 和 `.md`） |

## 执行流程

### 第一步：抓取原始数据

```bash
node <skill_dir>/fetch-trending.mjs --since daily --limit 25 --output ./trending-2026-08-20
```

脚本输出 `trending-2026-08-20.json`，结构如下：

```json
{
  "date": "2026-08-20",
  "since": "daily",
  "language": "all",
  "sourceUrl": "https://github.com/trending?since=daily",
  "items": [
    {
      "rank": 1,
      "name": "owner/repo",
      "url": "https://github.com/owner/repo",
      "description": "项目简介原文",
      "language": "Python",
      "stars": 110504,
      "delta": "2,221 stars today",
      "tags": [],
      "comment": ""
    }
  ]
}
```

此时 `tags` 和 `comment` 为空，需要 Agent 填充。

### 第二步：Agent 生成标签和简评

读取 JSON 后，为每个项目生成：

**标签规则（≤5 个）：**
- 从项目名称、简介、语言推断技术栈和应用领域
- 常用标签参考：AI、LLM、Agent、RAG、自动化、开发工具、基础设施、前端、后端、数据库、安全、数据分析、开源、生产力、框架、库
- 语言名本身可作为标签（如 Python、TypeScript、Rust）
- 标签应精准，避免泛化（不要用"项目"、"工具"这类无意义标签）

**简评规则：**
- 1-2 句话，中文撰写
- 说明项目核心功能、亮点或值得关注的理由
- 客观简洁，不夸大
- 若简介为空（`Unknown`），基于仓库名和语言做合理推测，并注明"简介来自推测"
- 关注趋势信号：为什么这个项目今天会上榜

### 第三步：生成 Markdown 报告

参考 `template-report.md` 模板，组装最终报告。

报告结构：
1. **今日概览**：总结当日榜单趋势（语言分布、主题集中度、值得注意的信号）
2. **重点项目**：每个项目以二级标题呈现，含信息表格 + 标签 + 简评
3. **观察**：跨项目趋势总结

### 第四步（可选）：Stellar Compass 集成

如果当前项目是 Stellar Compass（含 `content/rankings/` 目录），额外生成 Hugo leaf bundle：

```
content/rankings/github/<period>/github-<period>-<date>/
  index.md       # front matter + 报告正文
  ranking.json   # 结构化数据
```

`index.md` front matter 格式：

```yaml
---
title: GitHub 每日趋势榜 <date>
description: <一句话总结>
date: '<date>T08:00:00+08:00'
rankingKey: '<date>'
slug: github-<period>-<date>
categories:
  - github
periods:
  - <period>
tags:
  - GitHub
  - 开源
  - 趋势
draft: false
---
```

`ranking.json` 格式：

```json
{
  "category": "github",
  "period": "<period>",
  "date": "<date>",
  "source": "github-trending",
  "sourceUrl": "https://github.com/trending?since=<period>",
  "items": [...]
}
```

## 注意事项

- GitHub Trending 页面可能因地区或时间不同而内容不同
- 脚本使用正则解析 HTML，GitHub 页面结构变更可能导致解析失败
- 抓取频率建议不超过每日一次，避免被限流
- 如脚本返回 0 个项目，检查网络连接和 GitHub 页面结构是否变更
- **Windows 注意**：Git Bash 下 `~` 不会被 Node.js 正确展开，项目内调用用项目相对路径 `skills/github-trending-reporter/fetch-trending.mjs`
- 脚本无外部依赖，仅需 Node.js 18+（内置 `fetch`）
