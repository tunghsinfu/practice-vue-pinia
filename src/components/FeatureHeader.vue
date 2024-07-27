<template>
  <header class="title">
    <!-- <div > -->
      {{ title }}
    <!-- </div> -->
    <!-- <div class="message">
      <span :class="actionResult.messageType">{{ actionResult.message }}</span>
    </div> -->
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'FeatureHeader',
    props: {
        title: String,
        // actionResult: {
        //     type: Object,
        //     default () {
        //         return {
        //             message: '',
        //             messageType: ''
        //         }
        //     }
        // }
    }
})
</script>

<style scoped>
  header.title {
    font-size: 16px;
    color: #FFFFFF;
    background-color: #78B820;
    min-height: 25px;
    font-family: Verdana, Arial, sans-serif, MSPGothic, PMingLiU, UWKMJF;
    text-align: center;
    padding: 3px 0 0;
  }

  header.message {
    font-family: Verdana, Arial, sans-serif, MSPGothic, PMingLiU, UWKMJF;
    font-size: 11px;
    height: 20px;
    padding: 7px 10px;
  }

  .fail {
    color: red;
  }

  .success {
    color: #78b820
  }
</style>
