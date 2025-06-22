<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold text-gray-800 mb-8">欢迎使用 Electron + Vue 模板</h1>
    <div class="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <p class="text-lg text-gray-600 mb-6">
        这是一个基于 Electron + Vue3 + Tailwind CSS 的桌面应用开发模板
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div class="p-4 bg-blue-50 rounded-lg">
          <h3 class="font-semibold text-blue-800 mb-2">⚡ 快速开发</h3>
          <p class="text-sm text-blue-600">Vue3 + Vite 热更新，开发体验极佳</p>
        </div>
        <div class="p-4 bg-green-50 rounded-lg">
          <h3 class="font-semibold text-green-800 mb-2">🎨 现代UI</h3>
          <p class="text-sm text-green-600">集成 Tailwind CSS，快速构建美观界面</p>
        </div>
        <div class="p-4 bg-purple-50 rounded-lg">
          <h3 class="font-semibold text-purple-800 mb-2">📦 易于打包</h3>
          <p class="text-sm text-purple-600">electron-builder 一键打包多平台</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
