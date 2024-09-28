import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/index.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach(async (to,form) => {
  return true
})

export default router
