<template>
  <feature-page :title="'Feature B Item:' + $route.params.id">
    {{ $route.params.id }}
  </feature-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FeaturePage from '@/components/FeaturePage.vue'


export default defineComponent({
  name: 'FeatureBMaintainItem',

  components: {
    FeaturePage
  },
});
</script>


<style scoped></style>
