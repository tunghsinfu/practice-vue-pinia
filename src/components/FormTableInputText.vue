<template>
  <td align="right">
    {{ label }}
  </td>
  <td>
    <input type="text">
  </td>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormTableInputText',
  props: {
    label: {
      type: String,
      required: true
    }
  }
})
</script>
