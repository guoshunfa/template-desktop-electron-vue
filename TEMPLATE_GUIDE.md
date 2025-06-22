# 模板使用指南

## 🚀 如何使用此模板

### 1. 克隆模板
```bash
git clone git@github.com:guoshunfa-templates/template-desktop-electron-vue.git your-project-name
cd your-project-name
```

### 2. 修改项目信息
- 更新 `package.json` 中的项目名称、描述、作者等信息
- 更新 `README.md` 中的项目说明
- 替换 `public/icon.ico` 为您的应用图标
- 修改 `index.html` 中的标题

### 3. 安装依赖
```bash
bun install
```

### 4. 开发
```bash
bun run start
```

### 5. 构建打包
```bash
bun run build:electron
```

## 📋 需要自定义的文件

1. **package.json** - 修改应用信息
2. **public/icon.ico** - 替换应用图标
3. **index.html** - 修改应用标题
4. **src/views/** - 添加您的页面
5. **README.md** - 更新项目说明

## 🔧 常用命令

```bash
# 开发模式
bun run start

# 构建前端
bun run build

# 打包应用
bun run electron:build

# 预览构建结果
bun run preview
```

## 📞 技术支持

如有问题，请联系：
- 作者：郭顺发
- 网站：https://guoshunfa.com
- 微信：guoshunfa1
