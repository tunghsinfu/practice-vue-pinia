import { defineStore } from 'pinia'
import type { ActionResult } from '@/type/ActionResult'

export const useFeaturePageStore = defineStore('feature-page', {
    state: () => ({
        pageTitle: '' as string,
        actionResult: {
            message: '' as string,
            messageType: '' as string
        } as ActionResult,
        loading: false as Boolean
    }),
    actions: {
        setPageTitle(title: string) {
            this.pageTitle = title
        },
        setResult(result: ActionResult) {
            this.actionResult = result
        },
        clearMessage() {
            const result: ActionResult = { message: '', messageType: '' }
            this.actionResult = result
        },
        openLoading() {
            this.loading = true
        },
        closeLoading() {
            this.loading = false
        }
    }
})
