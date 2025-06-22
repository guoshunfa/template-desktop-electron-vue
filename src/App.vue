<template>
  <div class="min-h-screen bg-gray-100">
    <!-- 导航菜单 -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-8">
            <!-- Logo -->
            <div class="flex items-center py-4">
              <span class="font-semibold text-gray-500 text-lg">Electron + Vue 模板</span>
            </div>
            <!-- 导航链接 -->
            <div class="hidden md:flex items-center space-x-1">
              <router-link 
                to="/" 
                class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                active-class="text-green-500 border-b-2 border-green-500"
              >
                首页
              </router-link>
              <router-link 
                to="/demo1" 
                class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                active-class="text-green-500 border-b-2 border-green-500"
              >
                演示页1
              </router-link>
              <router-link 
                to="/demo2" 
                class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                active-class="text-green-500 border-b-2 border-green-500"
              >
                演示页2
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- 页面内容 -->
    <main class="container mx-auto px-4 py-8">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>