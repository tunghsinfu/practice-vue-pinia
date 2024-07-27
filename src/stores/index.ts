import { createStore } from 'vuex'
import PageStore from '@/stores/PageStore'
import ActionStore from '@/stores/ActionStore'
import GridStore from '@/stores/GridStore'

export default createStore({
    modules: {
        pageInfo: PageStore,
        action: ActionStore,
        grid: GridStore
    },
    strict: true
})
