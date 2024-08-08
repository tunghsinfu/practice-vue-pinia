import { createRouter, createWebHashHistory } from 'vue-router'
import FeatureA from '@/views/FeatureA.vue'
import FeatureAMaintain from '@/views/FeatureAMaintain.vue'
import FeatureB from '@/views/FeatureB.vue'
import FeatureBMaintain from '@/views/FeatureBMaintain.vue'
import FeatureBMaintainNext from '@/views/FeatureBMaintainNext.vue'
import FeatureBMaintainItem from '@/views/FeatureBMaintainItem.vue'


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
    {
      path: '/feature_b',
      name: 'featureB',
      component: FeatureB,
      children: [{
        path: 'maintain',
        name: 'feature-b-maintain',
        component: FeatureBMaintain,
        children: [{
          path: 'next',
          name: 'feature-b-next',
          component: FeatureBMaintainNext,
        }, {
          path: 'itme/:id',
          name: 'feature-b-itme',
          component: FeatureBMaintainItem,
        }]
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
