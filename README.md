# Stellar Compass

Stellar Compass 是一个由 Hugo 生成的中文静态排行榜博客，用于整理 GitHub、AI 与数字文化趋势。站点提供分类导航、按日期倒序的榜单归档、日榜/周榜/月榜周期页、Markdown 解读、结构化榜单明细、RSS 和 GitHub Pages 自动部署。

线上地址：<https://sumuw.github.io/stellar-compass/>

## 项目目录

```text
content/rankings/    排行榜 leaf bundle 内容
layouts/             Hugo 页面模板和公共 partial
assets/css/          由 Hugo Pipes 处理的样式
static/              图片、robots.txt 等静态文件
scripts/             Hugo 包装器、内容校验和导入脚本
tests/               内容、导入器和构建产物测试
.github/workflows/   GitHub Pages 构建与部署
```

## 安装与开发

需要 Node.js 22 或更高版本，以及 Hugo 0.165.0。Windows 环境可通过项目脚本下载并校验固定版本：

```powershell
npm ci
npm run setup:hugo
npm run dev
```

开发服务器默认地址为 <http://127.0.0.1:1313/>。`setup:hugo` 将 Hugo 安装到被 Git 忽略的 `.tools/hugo/`；如果 PATH 中已有 Hugo，项目包装器会优先使用它。

## 校验与构建

```powershell
npm run validate:content
npm test
npm run build
npm run test:site
```

`test:site` 读取 `public/`，因此必须在生产构建后运行。也可以一次执行完整检查：

```powershell
npm run check
```

## Leaf bundle 内容契约

每篇榜单是一个 leaf bundle，目录中必须同时存在 `index.md` 和 `ranking.json`：

```text
content/rankings/<category>/<period>/<slug>/
├─ index.md
└─ ranking.json
```

`index.md` 的 front matter 必须包含 `title`、`description`、`date`、`rankingKey`、`categories`、`periods`、`tags` 和 `draft`。周榜用可排序的真实日期填写 `date`，用 `YYYY-Www` 格式填写展示键 `rankingKey`。

```yaml
---
title: "GitHub 每日趋势榜 2026-08-20"
description: "AI 编程与开发者工具是今日榜单的主要看点。"
date: 2026-08-20T08:00:00+08:00
rankingKey: "2026-08-20"
categories: ["github"]
periods: ["daily"]
tags: ["GitHub", "开源", "AI"]
draft: false
---
```

`ranking.json` 必须包含 `category`、`period`、`date`、`source`、`sourceUrl` 和 `items`。每个榜单项必须提供连续的 `rank`，以及非空的 `name`、HTTPS `url` 和 `description`；可选字段包括 `language`、`stars`、`delta`、`tags` 和 `comment`。分类只允许 `github`、`movie`、`tv`、`ai`、`other`，周期只允许 `daily`、`weekly`、`monthly`。Markdown 与 JSON 中的分类、周期和日期键必须一致。

新增或修改 bundle 后运行：

```powershell
npm run validate:content
```

## 从参考项目导入

导入器接受参考项目目录和当前 Hugo 项目目录。它会转换 Markdown front matter，并把每篇榜单写成独立 leaf bundle：

```powershell
node scripts/import-reference-rankings.mjs "D:\work\workspace\codex\my" "."
npm run validate:content
```

导入器不会静默覆盖内容不一致的现有文件；确认需要覆盖时显式追加 `--overwrite`。导入逻辑的独立测试可用 `npm run test:import` 执行。

## GitHub Pages

首次部署前，在 GitHub 仓库进入 **Settings > Pages**，将 **Build and deployment** 的 **Source** 设为 **GitHub Actions**。之后推送到 `main` 会运行 `.github/workflows/hugo.yml`，也可在 **Actions > Deploy Hugo site to Pages** 手动触发。

workflow 固定使用 Hugo 0.165.0，并依次安装依赖、校验内容、运行测试、使用 Pages 提供的 base URL 构建站点、检查 `public/`，最后部署到 `github-pages` environment。
