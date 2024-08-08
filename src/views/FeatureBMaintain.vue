<template>
  <feature-page :title="'Feature B maintain'">
    <button @click="next">next</button>
    <button @click="back">back</button>
  </feature-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FeaturePage from '@/components/FeaturePage.vue'


export default defineComponent({
  name: 'FeatureBMaintain',
  components: {
    FeaturePage
  },
  methods: {
    next() {
      // Replace current location
      this.$router.push({ name: 'feature-b-next' })
    },
    back() {
      // Traverse history
      this.$router.go(-1)
    }
  }
});
</script>


<style scoped></style>
