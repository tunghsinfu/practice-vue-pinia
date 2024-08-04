<template>
  <form-table-input-text v-if="item.type === 'text'" :field-item="item" v-model="fieldValue" />
  <form-table-input-select v-else-if="item.type === 'select'" :field-item="item" v-model="fieldValue" />
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
      fieldValue: String
    }
  },
  watch: {
    fieldValue(newValue) {
      this.$emit('update:modelValue', newValue)
    }
  }
})
</script>
