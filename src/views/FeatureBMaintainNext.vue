<template>
  <feature-page :title="'Feature B Next'">
    NEXT
  </feature-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FeaturePage from '@/components/FeaturePage.vue'


export default defineComponent({
  name: 'FeatureBMaintainNext',
  components: {
    FeaturePage
  },
});
</script>


<style scoped></style>
