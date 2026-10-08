# raw/ — 每日榜单原始报告归档

存放两个自动化榜单任务的**原始报告**（未解析的 Markdown），随代码一起纳入 Git，
用于追溯每日榜单的数据来源，也是解析脚本的输入目录。

## 目录约定

```text
raw/github/github-daily-trending-<YYYY-MM-DD>.md
raw/film-radar/daily-film-radar-<YYYY-MM-DD>.md
```

文件名中的日期即榜单日期，解析脚本据此生成对应日期的 leaf bundle。
同名文件不会覆盖已生成的 bundle，除非显式传 `--overwrite`。

## 解析

```bash
node scripts/import-github-trending.mjs raw/github
node scripts/import-film-radar.mjs raw/film-radar
```

两个脚本默认就读取上述目录，参数可省略。解析产物落在
`content/rankings/<category>/daily/<slug>/`。

## 关于 outputs/

项目根下的 `outputs/` 已被 `.gitignore` 忽略，只用于临时产物（截图、调试文件），
不应作为归档目录。
