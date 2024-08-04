import { defineStore } from 'pinia'
import { queryData } from '../service/FeatureAService'
import type { PageData } from '@/type/PageData'
import { GridStore } from './GridStore'
import { ActionStore } from './ActionStore'


export const FeatureAStore = defineStore('feature-a', {
  state: () => ({
    count: 0,
  }),
  actions: {
    async findItems(formData: any) {
      console.log('findItems')
      const gridStore = GridStore()

      const params = {
        ...formData,
        ...gridStore.pageableUIParams
      }

      await queryData(params).then((res: any) => {
        if (res) {
          const pageData: PageData = res.data
          gridStore.setPageData(pageData)
        }
      }).catch((error) => {
        const actionStore = ActionStore()
        if (error.response && error.response.data) {
          actionStore.setResult({ message: error.response.data, messageType: 'fail' })
        } else {
          actionStore.setResult({ message: 'Failed to load query result.', messageType: 'fail' })
        }
      })
    }
  },
})