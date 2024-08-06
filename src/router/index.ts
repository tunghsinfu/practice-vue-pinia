import { createRouter, createWebHashHistory } from 'vue-router'
import FeatureA from '@/views/FeatureA.vue'
import FeatureAMaintain from '@/views/FeatureAMaintain.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/feature_a',
      name: 'featureA',
      component: FeatureA,
      meta: { title: 'Feature A Title' },
      children: [{
        path: '/maintain',
        name: 'feature-a-maintain',
        component: FeatureAMaintain
      }],

    },
    // {
    //   path: '/feature_a/maintain',
    //   name: 'feature-a-maintain',
    //   component: FeatureAMaintain,
    //   // children: [{ path: '', name: 'user', component: UserHome }],
    // },
  ]
})

router.afterEach((to, from) => {

})

export default router
