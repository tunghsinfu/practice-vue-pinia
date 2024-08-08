<template>
    <!-- <feature-header :title="featureTitle" /> -->
    <header class="title">
        {{ title }}
    </header>
    <main>
        <div class="message">
            <span :class="actionResult.messageType">{{ actionResult.message }}</span>
        </div>
        <slot></slot>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores, mapState, mapActions } from 'pinia'
import { FeaturePageStore } from '@/stores/FeaturePageStore'


export default defineComponent({
    name: 'FeaturePage',
    props: {
        title: String,
    },
    data() {
    },
    computed: {
        ...mapState(FeaturePageStore, ['actionResult', 'loading'])
    }
})
</script>
