import { defineStore } from 'pinia'
import { queryData } from '../service/FeatureAService'
import type { PageData } from '@/type/PageData'
import { useGridStore } from './GridStore'

// import { ActionStore } from './ActionStore'
// import { ActionStore } from '@/stores/ActionStore'

import { useFeaturePageStore } from '@/stores/FeaturePageStore'


export const FeatureAStore = defineStore('feature-a', {
  state: () => ({
    count: 0,
  }),
  actions: {
    async findItems(formData: any) {
      console.log('findItems')
      const gridStore = useGridStore()

      const params = {
        ...formData,
        ...gridStore.pageableUIParams
      }

      await queryData(params).then((res: any) => {
        if (res) {
          const pageData: PageData = res.data
          gridStore.setPageData(pageData)

          const store = useFeaturePageStore()
          store.setResult({ message: 'success', messageType: 'success' })
        }
      }).catch((error) => {
        // const actionStore = ActionStore()
        const store = useFeaturePageStore()
        if (error.response && error.response.data) {
          store.setResult({ message: error.response.data, messageType: 'fail' })
        } else {
          store.setResult({ message: 'Failed to load query result.', messageType: 'fail' })
        }
      })
    }
  },
})