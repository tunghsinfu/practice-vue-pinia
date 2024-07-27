import { defineStore } from 'pinia'
import { type PageData } from '@/type/PageData'
import { type PageableUIParams } from '@/type/PageableUIParams'

export const GridStore = defineStore('grid', {
  state: () => ({
    pageableUIParams: {
      sidx: 'ASC' as string,
      sord: '',
      page: 1,
      rows: 10
    } as PageableUIParams,
    pageData: {
      "total": 1,
      "previousPage": 1,
      "firstPage": 1,
      "lastPage": 0,
      "records": 0,
      "nextPage": 0,
      "pageSize": 10,
      "page": 1,
      "rows": null
    } as PageData
  }),
  actions: {
    // pageableUIParams
    setPageableUIParams(params: PageableUIParams) {
      this.pageableUIParams = params
    },
    setPageableUIRows(rows: number) {
      this.pageableUIParams.rows = rows
    },
    setPageableUISidx(sidx: "" | "ASC" | "DESC") {
      this.pageableUIParams.sidx = sidx
    },
    setPageableUISord(sord: string) {
      this.pageableUIParams.sord = sord
    },
    setPageableUIPage(page: number) {
      this.pageableUIParams.page = page
    },

    // pageData
    setPageData(pageData: PageData) {
      this.pageData = pageData
    },
    setPageNum(page: number) {
      this.pageData.page = page
    },
    setPageSize(pageSize: number) {
      this.pageData.pageSize = pageSize
    },
    setTotalNum(total: number) {
      this.pageData.total = total
    },
  },
})