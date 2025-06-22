# Electron + Vue3 桌面应用模板

一个基于 Electron + Vue3 + Tailwind CSS 的现代化桌面应用开发模板，适合快速搭建跨平台桌面应用。

## 项目目的

- 提供一个现代化的 Electron + Vue3 桌面应用开发模板
- 集成 Tailwind CSS 样式框架，支持快速 UI 开发
- 采用 Vue Router 进行路由管理，支持多页面应用
- 使用 Bun 运行时和包管理，提升开发效率
- 快速启动新的桌面应用项目，减少重复配置工作

## 技术栈

- **Electron** - 跨平台桌面应用框架
- **Vue3** - 渐进式前端框架（选项式 API）
- **Vue Router** - Vue.js 官方路由管理器
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Vite** - 下一代前端构建工具
- **Bun** - 快速的 JavaScript 运行时和包管理器
- **Electron Builder** - 应用打包工具

## 文件结构

```
template-desktop-electron-vue/
├── .git/                          # Git 版本控制
├── .gitignore                     # Git 忽略文件配置
├── bun.lock                       # Bun 锁定文件
├── node_modules/                  # 依赖包目录
├── package.json                   # 项目配置文件
├── tailwind.config.js            # Tailwind CSS 配置
├── vite.config.js                # Vite 配置文件
├── jsconfig.json                 # JavaScript 配置
├── index.html                    # HTML 入口文件
├── README.md                     # 项目说明文档
├── electron/                     # Electron 主进程文件
│   ├── main.js                   # 主进程入口文件
│   └── preload.js               # 预加载脚本
├── public/                       # 公共静态资源
│   └── favicon.ico              # 网站图标
└── src/                         # 源代码目录
    ├── App.vue                  # 根组件
    ├── main.js                  # Vue 应用入口
    ├── assets/                  # 静态资源
    │   ├── base.css            # 基础样式
    │   ├── logo.svg            # Logo 图标
    │   └── main.css            # 主样式文件（包含 Tailwind）
    ├── components/              # 公共组件目录
    ├── router/                  # 路由配置
    │   └── index.js            # 路由定义
    └── views/                   # 页面视图
        ├── HomeView.vue        # 首页
        ├── Demo1View.vue       # 演示页面1
        └── Demo2View.vue       # 演示页面2
```

## 功能特点

- ✅ 现代化技术栈（Electron + Vue3 + Tailwind CSS）
- ✅ 热重载开发环境
- ✅ 路由管理支持多页面
- ✅ 组件化开发结构
- ✅ 响应式设计
- ✅ 一键打包多平台
- ✅ 代码规范和注释
- ✅ 易于扩展和维护

## 快速开始

### 1. 安装依赖

```bash
# 使用 Bun（推荐）
bun install

# 或使用 npm
npm install
```

### 2. 开发模式

```bash
# 启动开发环境（Vue + Electron）
bun run start

# 或者分别启动
bun run dev        # 启动 Vue 开发服务器
bun run electron . # 启动 Electron 应用
```

### 3. 构建打包

```bash
# 构建前端代码
bun run build

# 打包 Electron 应用
bun run electron:build

# 或一键构建+打包
bun run build:electron
```

## 开发指南

### 添加新页面

1. 在 `src/views/` 目录下创建新的 Vue 组件
2. 在 `src/router/index.js` 中添加路由配置
3. 在 `src/App.vue` 中添加导航链接

### 样式开发

- 使用 Tailwind CSS 工具类进行样式开发
- 全局样式在 `src/assets/main.css` 中定义
- 组件样式使用 Tailwind 类名或 scoped 样式

### 组件开发

- 使用 Vue3 选项式 API 开发组件
- 组件放在 `src/components/` 目录下
- 每个组件添加详细注释说明用途和参数

### Electron 主进程

- 主进程代码在 `electron/main.js`
- 预加载脚本在 `electron/preload.js`
- IPC 通信示例已包含在模板中

## 可用脚本

| 命令 | 描述 |
|------|------|
| `bun run start` | 启动开发环境（Vue + Electron） |
| `bun run dev` | 启动 Vue 开发服务器 |
| `bun run build` | 构建前端代码 |
| `bun run electron:dev` | 启动 Electron 开发模式 |
| `bun run electron:build` | 打包 Electron 应用 |
| `bun run electron:pack` | 打包应用到目录（不生成安装包） |
| `bun run preview` | 预览构建后的应用 |

## 打包配置

项目使用 electron-builder 进行打包，支持：

- **Windows**: NSIS 安装包
- **macOS**: DMG 磁盘镜像
- **Linux**: AppImage 格式

打包配置在 `package.json` 的 `build` 字段中定义。

## 示例代码

### 路由配置示例

```javascript
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: () => import('../views/Demo1View.vue'),
    }
  ],
})

export default router
```

### 页面组件示例

```vue
<!-- src/views/Demo1View.vue -->
<template>
  <div class="text-center">
    <h1 class="text-3xl font-bold text-blue-600 mb-4">演示页面 1</h1>
    <div class="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <p class="text-gray-600">这是第一个演示页面</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo1View'
}
</script>
```

## 开发规范

- 使用 Vue3 选项式 API
- 组件名使用 PascalCase
- 文件名使用 PascalCase.vue
- 样式优先使用 Tailwind CSS 类名
- 关键功能添加详细注释
- 单个方法代码行数不超过 10 行

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的改动 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

- 作者：郭顺发
- 网站：https://guoshunfa.com
- 微信：guoshunfa1

---

**开始构建你的下一个桌面应用吧！** 🚀
