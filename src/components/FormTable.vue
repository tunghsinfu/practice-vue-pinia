<template>
  <form>
    <table>
      <tbody>
        <tr>
          <td nowrap="nowrap">
            <slot name="buttonRow"></slot>
          </td>
        </tr>
        <tr v-for="(row, rowIndex) in tableData" :key="rowIndex" :class="getRowClass(rowIndex)">
          <td v-for="(item, itemIndex) in row.items" :key="'item-' + rowIndex + '-' + itemIndex"
            :colspan="getColspan(rowIndex, itemIndex)">
            <form-table-input :item="item" v-model="formData[item.name]" />
          </td>
        </tr>
        <slot name="footer"></slot>
      </tbody>
    </table>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormTableInput from '../components/FormTableInput.vue'

export default defineComponent({
  name: 'FormTable',
  components: {
    FormTableInput
  },
  props: {
    tableData: {
      type: Array,
      required: true
    } as any,
    modelValue: {
      type: undefined,
      required: true
    }
  },
  data() {
    return {
      formData: {}
    }
  },
  watch: {
    formData: {
      handler(newValue, oldValue) {
        this.$emit('update:modelValue', newValue)
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    getRowClass(rowIndex: number) {
      return rowIndex % 2 === 0 ? 'odd' : 'even';
    },
    getColspan(rowIndex: number, itemIndex: number) {
      let colspan = 1
      let maxRowLength = 0
      this.tableData.forEach((row: any) => {
        if (row.items.length > maxRowLength) {
          maxRowLength = row.items.length
        }
      })
      const rowLength = this.tableData[rowIndex].items.length
      if (rowLength === itemIndex + 1) {
        colspan = (maxRowLength - this.tableData[rowIndex].items.length) * 2 + colspan
      }
      return colspan
    }
  }
})
</script>

<style scoped>
table {
  border: 0;
  border-spacing: 0;
  width: 100%;
}

tr.odd {
  background-color: #ffffff;
}

tr.even {
  background-color: #e9e9e9;
}

td {
  font-family: Verdana, Arial, sans-serif, MSPGothic, PMingLiU, UWKMJF;
  font-size: 11px;
}

input[type=text],
select,
textarea,
button.multiselectItem {
  background-color: #ffffff;
  color: #000033;
  border-right: 1px solid #d3d3d3;
  border-top: 1px solid #808080;
  border-left: 1px solid #808080;
  border-bottom: 1px solid #d3d3d3;
  font-size: 11px;
  font-family: Verdana, Arial, sans-serif, MSPGothic, PMingLiU, UWKMJF;
  margin-left: 1px;
  margin-top: 1px;
  margin-right: 1px;
  margin-bottom: 1px;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
}
</style>
