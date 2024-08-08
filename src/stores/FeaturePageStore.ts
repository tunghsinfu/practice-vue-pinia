import { defineStore } from 'pinia'
import type { ActionResult } from '@/type/ActionResult'

export const FeaturePageStore = defineStore('feature-page', {
    state: () => ({
        actionResult: {
            message: '' as string,
            messageType: '' as string
        } as ActionResult,
        loading: false as Boolean
    }),
    actions: {
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
