<template>
  <td align="right">
    {{ label }}
  </td>
  <td>
    <select @change="changeSelect" v-model="selectValue">
      <option v-for="(option, index) in options" :value="option.value" :key="index">
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
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array<any>,
      required: true
    },
    defaultValue: {
      type: String
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
    this.selectValue = this.defaultValue != null ? this.defaultValue : this.options[0].value
  },
  watch: {
    selectValue(newValue) {
      this.$emit('update:modelValue', newValue)
    }
  }

})
</script>
