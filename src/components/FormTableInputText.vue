<template>
  <td align="right">
    {{ fieldItem.label }}
  </td>
  <td>
    <input type="text" v-model="textValue">
  </td>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormTableInputText',
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
      textValue: String
    }
  },
  created() {
    this.textValue = this.fieldItem.defaultValue != null ? this.fieldItem.defaultValue : ''
  },
  watch: {
    textValue(newValue) {
      this.$emit('update:modelValue', newValue)
    }
  }

})
</script>
