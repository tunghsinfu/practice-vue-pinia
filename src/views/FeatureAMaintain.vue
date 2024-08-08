<template>
  <feature-page>
    <form-table :table-data="tableData" v-model="formData">
      <template #buttonRow>
        <button @click="submit">submit</button>
      </template>
    </form-table>
  </feature-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FeaturePage from '@/components/FeaturePage.vue'
import FormTable from '@/components/FormTable.vue'
import { createFormTableRow } from '@/type/FormTableItem'

export default defineComponent({
  name: 'FeatureAMaintain',
  components: {
    FeaturePage, FormTable
  },
  data() {
    return {
      formData: {} as Object,
      tableData: [] as Array<Object>
    }
  },
  mounted() {
    // Get value from Route query
    const routeQuery = this.$route.query
    this.tableData.push(createFormTableRow([
      { type: 'text', name: 'COLUMN_A', label: 'Column A', defaultValue: routeQuery.COLUMN_A as string },
      { type: 'text', name: 'COLUMN_B', label: 'Column B', defaultValue: routeQuery.COLUMN_B as string },
      { type: 'text', name: 'COLUMN_C', label: 'Column C', defaultValue: routeQuery.COLUMN_C as string }]))
    this.tableData.push(createFormTableRow([
      { type: 'text', name: 'COLUMN_D', label: 'Column D' },
      { type: 'text', name: 'COLUMN_E', label: 'Column E' },
      { type: 'text', name: 'COLUMN_F', label: 'Column F' }]))
    this.tableData.push(createFormTableRow([
      { type: 'text', name: 'COLUMN_G', label: 'Column G' }]))
  },
  methods: {
    submit() {

    },
    back() {

    }
  }
});
</script>


<style scoped></style>
