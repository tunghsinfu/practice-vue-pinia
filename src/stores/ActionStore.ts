import { defineStore } from 'pinia'
import type { ActionResult } from '@/type/ActionResult'

export const ActionStore = defineStore('action', {
    state: () => ({
        actionResult: {
            message: '' as string,
            messageType: '' as string
        } as ActionResult,
        loading: false as Boolean
    }),
    // mutations: {
    //     setActionResult(state: any, actionResult: ActionResult) {
    //         state.actionResult = actionResult
    //     },
    //     setLoading(state: any, data: any) {
    //         state.loading = data
    //     },
    // },
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
