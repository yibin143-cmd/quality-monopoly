# 质量大富翁·事故快报版

## 本地运行
```bash
npm install
npm run dev
```
打开 http://localhost:3000。

## 部署到 Vercel
1. 将整个项目上传到 GitHub。
2. 在 Vercel 中选择 New Project，并导入该仓库。
3. Framework Preset 选择 Next.js，直接 Deploy。

## 增加题库
编辑 `app/page.tsx` 中的 `questions` 数组。`answer` 从 0 开始，例如正确答案为 B，则填 1。图片放到 `public/scenes/`，题目中使用 `/scenes/文件名.svg`。
