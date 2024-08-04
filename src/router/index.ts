import { createRouter, createWebHashHistory } from 'vue-router'
import FeatureA from '@/views/FeatureA.vue'
import FeatureAMaintain from '@/views/FeatureAMaintain.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/feature_a',
      name: 'featureA',
      component: FeatureA
    },
    {
      path: '/feature_a/maintain',
      name: 'feature-a-maintain',
      component: FeatureAMaintain,
      // children: [{ path: '', name: 'user', component: UserHome }],
    },
  ]
})

export default router
