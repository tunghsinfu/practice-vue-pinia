<template>
    <!-- <div v-if="pageData.rows"> -->

    <el-pagination background v-model:current-page="page" v-model:page-size="pageSize" :page-sizes="[10, 20, 50]"
        layout="total, sizes, prev, pager, next, jumper" :total="pageData.records" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />

    <el-table :data="pageData.rows" style="width: 100%" @sort-change="changeSort">

        <el-table-column label="Action" width="100">
            <template #default="scope">
                <el-row :gutter="20">
                    <el-button size="small" @click="handleEdit(scope.row)">
                        Edit
                    </el-button>
                </el-row>
            </template>
        </el-table-column>

        <el-table-column v-for="column in columns" :label="column.label" :prop="column.prop"
            :key="column.key !== undefined ? column.key : column.prop"
            :sortable="column.sortable !== undefined ? column.sortable : true" />

    </el-table>
    <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores, mapState, mapActions } from 'pinia'

// import router from '@/router/index'

import { GridStore } from '@/stores/GridStore'


export default defineComponent({
    name: 'DataGrid',
    // router,
    // components: {
    //     PageBar
    // },
    props: {
        columns: {
            type: Array<any>,
            required: true
        }
    },

    computed: {
        ...mapStores(GridStore),
        ...mapState(GridStore, ['pageData', 'pageableUIParams']),
        page: {
            get() {
                return this.pageData.page
            },
            set(value: number) {
                this.setPageNum(value)
            }
        },
        pageSize: {
            get() {
                return this.pageData.pageSize
            },
            set(value: number) {
                this.setPageSize(value)
            }
        }
    },
    methods: {
        ...mapActions(GridStore, [
            'setPageableUIParams', 'setPageableUIRows', 'setPageableUISidx', 'setPageableUISord', 'setPageableUIPage', 'setPageData', 'setPageNum', 'setTotalNum'
        ]),
        handleEdit(row: any) {
            this.$emit('maintain', row)
        },
        changeSort(data: { column: any, prop: string, order: any }) {
            const sidx = data.order == null ? '' : (data.order === 'ascending' ? 'ASC' : 'DESC')
            // const sord = data.order == null ? '' : data.prop
            this.setPageableUISidx(sidx)
            this.setPageableUISord(data.prop)
            this.$emit('refresh')
        },
        handleSizeChange(size: number) {
            this.setPageableUIPage(1)
            this.setPageableUIRows(size)
            this.$emit('refresh')
        },
        handleCurrentChange(page: number) {
            // this.currentPage = page; // 觸發computed
            this.setPageableUIPage(page)
            this.$emit('refresh')
        }
    }
})
</script>
