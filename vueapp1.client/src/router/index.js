import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Index.vue'
import SongPage from '@/pages/SongPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/song/:id',   // 動態參數
    name: 'song',
    component: SongPage,
    props: true          // 把路由參數傳進 SongPage 當作 props
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
