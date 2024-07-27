import { createRouter, createWebHashHistory } from 'vue-router'
import FeatureA from '@/views/FeatureA.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'FeatureA',
      path: '/feature_a',
      component: FeatureA
    }
  ]
})

export default router
