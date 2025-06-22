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
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: () => import('../views/Demo2View.vue'),
    },
  ],
})

export default router
