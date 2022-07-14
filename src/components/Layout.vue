<template>
  <div class="layout-wrapper">
    <div class="content"  :class="classPrefix && `${classPrefix}-content`">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  props:['classPrefix'],
  name: 'Layout'
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  //出滚动条，让下方导航固定
  overflow: auto;
  //让内容尽量占满
  flex-grow: 1;
}
</style>