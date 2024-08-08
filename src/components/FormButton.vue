<template>
  <div @click="query" class="queryButton iconButtonOffWithBorder" nowrap="nowrap" valign="top">
    &nbsp;Query&nbsp;
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormTableInput',
  methods: {
    query() {
      this.$emit('btnClick')
    }
  }
})
</script>

<style scoped>
.queryButton {
  height: 19px;
  width: 50px;
  overflow: hidden;
}

.iconButtonOffWithBorder {
  border-right: #afafaf 1px solid;
  border-bottom: #afafaf 1px solid;
  border-top: #efefef 1px solid;
  border-left: #efefef 1px solid;
  color: #000000;
  background-color: #f9f9f9;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 1px;
  padding-bottom: 1px;
  height: 18px;
  font: 11px Verdana, Arial, sans-serif;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  vertical-align: top;
  cursor: pointer;
}

.iconButtonOffWithBorder:hover {
  color: #0000ff;
  height: 18px;
  border-right: #000000 1px solid;
  border-bottom: #000000 1px solid;
  border-top: #dfdfdf 1px solid;
  border-left: #dfdfdf 1px solid;
  background-color: #fbfbfb;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 1px;
  padding-bottom: 1px;
  font: 11px Verdana, Arial, sans-serif;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  vertical-align: top;
  cursor: pointer;
  /* filter: ; */
}
</style>
