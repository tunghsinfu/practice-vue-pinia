<template>
  <td align="right">
    {{ fieldItem.label }}
  </td>
  <td>
    <select v-model="selectValue">
      <option v-for="(option, index) in fieldItem.options" :value="option.value" :key="index">
        {{ option.label }}
      </option>
    </select>
  </td>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormTableInputSelect',
  props: {
    fieldItem: {
      type: Object,
      required: true
    },
    modelValue: {
      type: undefined,
      required: true
    }
  },
  data() {
    return {
      selectValue: String
    }
  },
  created() {
    this.selectValue = this.fieldItem.defaultValue != null ? this.fieldItem.defaultValue : this.fieldItem.options[0].value
  },
  watch: {
    selectValue(newValue) {
      this.$emit('update:modelValue', newValue)
    }
  }

})
</script>
