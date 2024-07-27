import { ActionResult } from '@/type/ActionResult'
/* eslint-disable */
const ActionStore = {
    namespaced: true,
    state: () => ({
        actionResult: {
            message: '' as string,
            messageType: '' as string
        } as ActionResult,
        loading: undefined
    }),
    mutations: {
        setActionResult (state: any, actionResult: ActionResult) {
            state.actionResult = actionResult
        },
        setLoading(state: any, data: any) {
            state.loading = data
        },
    },
    actions: {
        clearMessage ({ commit }) {
            commit('setActionResult', { message: '', messageType: '' })
        },
        openLoading({ commit }) {
            // ElLoading.service({ fullscreen: true })
            commit('setLoading', true)
        },
        closeLoading({ commit, state }) {
            commit('setLoading', false)
            // state.loading.close()
        }
    }
}

export default ActionStore
