<template>
  <div class="nav-wrapper">
    <div class="content">
      <p>Money首页</p>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Money',
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid green;
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