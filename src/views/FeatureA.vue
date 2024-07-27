<template>
  <main>
    <form-table :table-data="tableData" v-model="formData">
      <template #buttonRow>
        <!-- <button type="button" @click="query">Query</button> -->
        <div id="Query_button" class="iconButtonOffWithBorder" nowrap="nowrap" valign="top">
          &nbsp;Query&nbsp;
        </div>
      </template>
    </form-table>

    <DataGrid :columns="gridColumns" @refresh="query" @maintain="edit" />

  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormTable from '@/components/FormTable.vue'
import DataGrid from '@/components/DataGrid.vue'
import { fetchOptionsFromEndpoint1, fetchOptionsFromEndpoint2 } from '../service/FeatureAService'
import type GridColumn from '@/type/GridColumn'

export default defineComponent({
  name: 'FeatureA',
  components: {
    FormTable
  },
  data() {
    return {
      featureTitle: 'Feature A Title',
      tableData: [] as Array<Object>,
      formData: {} as Object,
      gridColumns: [
        { prop: 'PROJECT_NAME', label: 'Project Name' },
        { prop: 'PROJECT_CODE', label: 'Project Code' },
        { prop: 'MARKETING_NAME', label: 'Sub Brand' },
        { prop: 'BOM_NAME', label: 'BOM Name' },
        { prop: 'BOM_STATUS', label: 'BOM Status' },
        { prop: 'PM', label: 'PM' },
        { prop: 'ODM', label: 'ODM' },
        { prop: 'BOM_ITEM_ID', label: 'Bom Item ID' }
      ] as Array<GridColumn>
    }
  },
  watch: {
    // queryButtonClass: {
    //   handler(newValue, oldValue) {
    //     console.log(newValue)
    //   },
    //   immediate: true,
    //   deep: true
    // }
  },
  async mounted() {
    this.tableData = await this.fetchTableData();
  },
  methods: {
    async fetchTableData() {
      const optionA = await fetchOptionsFromEndpoint1()
      const optionB = await fetchOptionsFromEndpoint2()
      const rows = [
        {
          items: [
            { type: 'text', name: 'fieldA', label: 'Text Input 1A' },
            { type: 'select', name: 'fieldB', label: 'Select Input 1A', options: optionA, defaultValue: 'option2' },
            { type: 'text', name: 'fieldC', label: 'Text Input 1B' },
            { type: 'select', name: 'fieldD', label: 'Select Input 1B', options: optionB }
          ]
        },
        {
          items: [
            { type: 'text', name: 'fieldE', label: 'Text Input 2A' },
            { type: 'select', name: 'fieldF', label: 'Select Input 2A', options: optionA },
            { type: 'text', name: 'fieldG', label: 'Text Input 2B' }
          ]
        }
      ]
      return rows
    },
    async query() {
      // await this.findItems(this.formData)
    },
    edit(row: any) {
      const params = {
        dataId: row.id,
        ...this.formData
      }
      // this.$router.push({ name: 'detail', query: params })
    },
  }
});
</script>


<style scoped>
#Query_button {
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
