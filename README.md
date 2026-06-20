# Citywalk · 城市漫步闯关打卡

基于 Next.js 构建的城市漫步路线网站，以闯关打卡的形式游玩城市。

## 技术栈

- **框架**: Next.js 14 (App Router) + TypeScript
- **样式**: Tailwind CSS（民国风配色方案）
- **部署**: 静态导出（`output: export`）

## 项目结构

```
citywalk/
├── app/
│   ├── layout.tsx              # 根布局
│   ├── page.tsx                # 首页（路线列表）
│   ├── globals.css             # 全局样式 + Tailwind
│   └── routes/
│       └── [slug]/
│           ├── page.tsx        # 动态路线页（服务端）
│           └── RouteClient.tsx # 路线客户端组件
├── components/
│   ├── Sidebar.tsx             # 左侧边栏（路线导航）
│   ├── Hero.tsx                # 路线 Hero 区
│   ├── ProgressBar.tsx         # 顶栏打卡进度条
│   ├── RouteOverview.tsx       # 路线总览时间线
│   ├── CheckpointCard.tsx      # 关卡打卡卡片
│   ├── CompletionPanel.tsx     # 通关恭喜面板
│   └── Toast.tsx               # 打卡提示弹窗
├── data/
│   └── routes/
│       ├── index.ts            # 路线汇总 + 工具函数
│       └── nanjing-mochou-tongjun.ts  # 南京·莫愁童寯路线
├── lib/
│   ├── types.ts                # 类型定义
│   └── context.tsx             # 打卡状态 Context
├── tailwind.config.ts          # Tailwind 配置（民国风色板）
└── package.json
```

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建静态站点
npm run build
# 产物在 out/ 目录
```

## 添加新路线

在 `data/routes/` 下新建 `.ts` 文件，参考 `nanjing-mochou-tongjun.ts` 的数据结构，然后在 `data/routes/index.ts` 中引入即可。

## 路线数据结构

每条路线包含：
- **info**: 基本信息（标题、地区、城市、统计等）
- **overviewStops**: 沿途站点列表
- **checkpoints**: 闯关关卡（每关包含建筑表格、故事、打卡任务）
- **completion**: 通关信息

## 打卡状态

打卡数据存储在浏览器 localStorage 中，不同路线使用独立的存储键值。
