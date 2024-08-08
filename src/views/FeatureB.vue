<template>
  <feature-page :title="'Feature B Title'">
    <form-table :table-data="tableData" v-model="formData">
      <template #buttonRow>
        <form-button @btn-click="query" />
      </template>
    </form-table>

    <data-grid :columns="gridColumns" @refresh="query" @maintain="edit" />

  </feature-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FeaturePage from '@/components/FeaturePage.vue'
import FormTable from '@/components/FormTable.vue'
import FormButton from '@/components/FormButton.vue'

import DataGrid from '@/components/DataGrid.vue'
import { fetchOptionsFromEndpoint1, fetchOptionsFromEndpoint2 } from '@/service/FeatureAService'
import type GridColumn from '@/type/GridColumn'
import { FeatureAStore } from '@/stores/FeatureAStore'
import { createFormTableRow, type FormTableRow, type FormTableSelectField } from '@/type/FormTableItem'

export default defineComponent({
  name: 'FeatureA',
  components: {
    FeaturePage, FormTable, DataGrid, FormButton
  },
  data() {
    return {
      // featureTitle: 'Feature B Title',
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
      console.log('featureAStore.$id=' + featureAStore.$id)
      await featureAStore.findItems(this.formData)
    },
    edit(row: any) {
      const params = {
        ...row,
        ...this.formData
      }
      this.$router.push({ name: 'feature-b-maintain', query: params })
    },
  }
});
</script>
