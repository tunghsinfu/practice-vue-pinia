<template>
  <div>
    <form-table-input-text v-if="item.type === 'text'" :label="item.label" />
    <form-table-input-select v-if="item.type === 'select'" :label="item.label" :options="item.options" :defaultValue="item.defaultValue"
      v-model="selectValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormTableInputSelect from '@/components/FormTableInputSelect.vue'
import FormTableInputText from '@/components/FormTableInputText.vue'

export default defineComponent({
  name: 'FormTableInput',
  components: {
    FormTableInputSelect,
    FormTableInputText
  },
  props: {
    item: {
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
  watch: {
    selectValue(newValue) {
      this.$emit('update:modelValue', newValue)
    }
  }
})
</script>
