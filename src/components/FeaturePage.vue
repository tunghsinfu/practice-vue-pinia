<template>
    <router-view v-slot="{ Component }">
        <!-- descendant pages  -->
        <component v-if="Component" :is="Component" :parent-title="featureTitle" />
        <!-- root page -->
        <template v-else>
            <div class="pageTitle">
                {{ featureTitle }}
            </div>
            <div class="pageMessage">
                <span :class="actionResult.messageType">{{ actionResult.message }}</span>
            </div>
            <slot />
        </template>
    </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'pinia'
import { useFeaturePageStore } from '@/stores/FeaturePageStore'


export default defineComponent({
    name: 'FeaturePage',
    props: {
        title: String,
        parentTitle: String
    },
    computed: {
        ...mapState(useFeaturePageStore, ['actionResult', 'loading']),
        featureTitle() {
            return this.title != null ? this.title : this.parentTitle as string
        }
    },
    mounted() {
        const store = useFeaturePageStore()
        store.setPageTitle(this.featureTitle)
        store.clearMessage()
    },
    // watch: {
    //     $route: {
    //         immediate: true,
    //         handler(to, from) {
    //             const store = useFeaturePageStore();
    //             store.clearMessage()
    //             // console.log('to.meta.title=' + to.meta.title)
    //             // this.featureTitle = to.meta.title
    //             // document.title = to.meta.title || 'Some Default Title';
    //         }
    //     }
    // },
})
</script>


<style scoped>
.pageTitle {
    font-size: 16px;
    color: #FFFFFF;
    background-color: #78B820;
    min-height: 25px;
    font-family: Verdana, Arial, sans-serif, MSPGothic, PMingLiU, UWKMJF;
    text-align: center;
    padding: 3px 0 0;
}

/* .pageMessage {
    font-family: Verdana, Arial, sans-serif, MSPGothic, PMingLiU, UWKMJF;
    font-size: 11px;
    height: 20px;
    padding: 7px 10px;
} */

.success {
    font-family: Verdana, Arial, sans-serif, MSPGothic, PMingLiU, UWKMJF;
    font-size: 11px;
    color: blue;
}

.fail {
    font-family: Verdana, Arial, sans-serif, MSPGothic, PMingLiU, UWKMJF;
    font-size: 11px;
    color: red;
}
</style>