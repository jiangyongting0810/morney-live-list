<template>
  <nav>
    <!--相当于a标签，下面切换的时候上面会变 -->
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">

export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>
@import'~@/assets/style/helper.scss';
//nav ,nav里面有item
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  flex-direction: row;

  > .item {
    padding: 2px 0;
    width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .icon {
      width: 32px;
      height: 32px;

    }
  }

  > .item.selected {
    color: $color-highlight;
  }
}
</style>