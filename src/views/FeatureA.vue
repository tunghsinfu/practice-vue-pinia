<template>
  <form-table :table-data="tableData" v-model="formData">
    <template #buttonRow>
      <div @click="query" class="queryButton iconButtonOffWithBorder" nowrap="nowrap" valign="top">
        &nbsp;Query&nbsp;
      </div>
    </template>
  </form-table>

  <data-grid :columns="gridColumns" @refresh="query" @maintain="edit" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormTable from '@/components/FormTable.vue'
import DataGrid from '@/components/DataGrid.vue'
import { fetchOptionsFromEndpoint1, fetchOptionsFromEndpoint2 } from '@/service/FeatureAService'
import type GridColumn from '@/type/GridColumn'
import { FeatureAStore } from '@/stores/FeatureAStore'
import { createFormTableRow, type FormTableRow, type FormTableSelectField } from '@/type/FormTableItem'


export default defineComponent({
  name: 'FeatureA',
  data() {
    return {
      featureTitle: 'Feature A Title',
      tableData: [] as Array<FormTableRow>,
      formData: {} as Object,
      gridColumns: [
        { prop: 'COLUMN_A', label: 'Column A' },
        { prop: 'COLUMN_B', label: 'Column B' },
        { prop: 'COLUMN_C', label: 'Column C' },
        { prop: 'COLUMN_D', label: 'Column D' },
        { prop: 'COLUMN_E', label: 'Column E' },
        { prop: 'COLUMN_F', label: 'Column F' },
        { prop: 'COLUMN_G', label: 'Column G' }
      ] as Array<GridColumn>
    }
  },
  // watch: {
  //   GridStore: {
  //     handler(newValue, oldValue) {
  //       console.log(newValue)
  //     },
  //     immediate: true,
  //     deep: true
  //   }
  // },
  async mounted() {
    this.tableData = await this.fetchTableData();
  },
  methods: {
    async fetchTableData() {
      const optionA = await fetchOptionsFromEndpoint1()
      const optionB = await fetchOptionsFromEndpoint2()
      const rows = []
      rows.push(createFormTableRow([
        { type: 'text', name: 'fieldA', label: 'Text Input 1A' },
        { type: 'select', name: 'fieldB', label: 'Select Input 1A', options: optionA, defaultValue: 'option2' } as FormTableSelectField,
        { type: 'text', name: 'fieldC', label: 'Text Input 1B' },
        { type: 'select', name: 'fieldD', label: 'Select Input 1B', options: optionB } as FormTableSelectField
      ]));
      rows.push(createFormTableRow([
        { type: 'text', name: 'fieldE', label: 'Text Input 2A' },
        { type: 'select', name: 'fieldF', label: 'Select Input 2A', options: optionA } as FormTableSelectField,
        { type: 'text', name: 'fieldG', label: 'Text Input 2B' }
      ]));
      return rows
    },
    async query() {
      const featureAStore = FeatureAStore()
      await featureAStore.findItems(this.formData)
    },
    edit(row: any) {
      const params = {
        // dataId: row.COLUMN_A,
        ...row,
        ...this.formData
      }
      // console.log(JSON.stringify(params))

      // this.$router.push({ name: 'feature-a-maintain', params: { username: 'eduardo' } })
      // this.$router.push({ name: 'feature-a-maintain', params: { oops: 'gets removed' } })

      this.$router.push({ name: 'feature-a-maintain', query: params })
    },
  }
});
</script>


<style scoped>
.queryButton {
  height: 19px;
  width: 50px;
  overflow: hidden;
}

.iconButtonOffWithBorder {
  border-right: #afafaf 1px solid;
  border-bottom: #afafaf 1px solid;
  border-top: #efefef 1px solid;
  border-left: #efefef 1px solid;
  color: #000000;
  background-color: #f9f9f9;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 1px;
  padding-bottom: 1px;
  height: 18px;
  font: 11px Verdana, Arial, sans-serif;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  vertical-align: top;
  cursor: pointer;
}

.iconButtonOffWithBorder:hover {
  color: #0000ff;
  height: 18px;
  border-right: #000000 1px solid;
  border-bottom: #000000 1px solid;
  border-top: #dfdfdf 1px solid;
  border-left: #dfdfdf 1px solid;
  background-color: #fbfbfb;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 1px;
  padding-bottom: 1px;
  font: 11px Verdana, Arial, sans-serif;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  vertical-align: top;
  cursor: pointer;
  /* filter: ; */
}
</style>
