<template>
  <!-- <feature-header :title="featureTitle" /> -->
  <!-- <main> -->
    <!-- <router-view v-slot="{ Component }"> -->
      <!-- <component :is="Component" ref="currentComponent" @hook:mounted="updateTitle"></component> -->

      <!-- <component :is="Component" ref="currentComponent"></component> -->

    <!-- </router-view> -->

    <router-view/>
  <!-- </main> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { RouterView } from 'vue-router'
// import FeatureHeader from '@/components/FeatureHeader.vue'

export default defineComponent({
  name: 'App',
  data() {
    return {
      featureTitle: ''
    };
  },
  // components: {
  //   FeatureHeader
  // },
  // watch: {
    // $route() {
    //   this.updateTitle();
    // }
    // $route: {
    //   immediate: true,
    //   handler(to, from) {
        // console.log('to.meta.title=' + to.meta.title)
        // this.featureTitle = to.meta.title
        // document.title = to.meta.title || 'Some Default Title';
  //     }
  //   }
  // },
  methods: {
    // updateTitle() {
    //   this.$nextTick(() => {
    //     const componentInstance: any = this.$refs.currentComponent;
    //     if (componentInstance && componentInstance.featureTitle) {
    //       this.featureTitle = componentInstance.featureTitle;
    //     }
    //   });
    // }
  },
  mounted() {
    // this.updateTitle();
  }
})
</script>
