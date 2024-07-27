/* eslint-disable */
const PageStore = {
    namespaced: true,
    state: () => ({
        pageStoreMap: new Map<string, object>()
    }),
    getters: {
        getPageStore: (state: any) => (table: string) => {
            return state.pageStoreMap.get(table)
        }
    },
    mutations: {
        // pageData { table: string, data: PagableDataObj }
        setPageInfo (state: any, pageData: any) {
            state.pageStoreMap.set(pageData.table, pageData.data)
        },
        // pageInfo { table: string, page: number }
        setPage (state: any, pageInfo: any) {
            state.pageStoreMap.get(pageInfo.table).page = pageInfo.page
        },
        // pageInfo { table: string, total: number }
        setTotalPage (state: any, pageInfo: any) {
            state.pageStoreMap.get(pageInfo.table).total = pageInfo.total
        }
    }
}

export default PageStore
