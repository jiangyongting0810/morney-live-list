<template>
  <ul class="tabs" :class="{[classPrefix+'-tabs']:classPrefix}">
    <li v-for="item in dataSource" :key="item.value"
        class="tabs-item"
        :style="{height:height}"
        :class="{selected:item.value ===value,[classPrefix+'-tabs-item']:classPrefix}"
        @click="select(item)">{{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = { text: string, value: string }

@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array})
  dataSource!: { text: string, value: string }[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;
  @Prop({type: String, default: '64px'}) height!: string;

  select(item: DataSourceItem) {
    this.$emit('update:value', item.value);
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  background: rgba(12, 153, 255, 1);
  display: flex;
  text-align: center;
  font-size: 24px;

  &-item {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: white;

    &.selected {
      &.selected::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: rgba(255, 255, 255, 0.6);
      }
    }
  }
}
</style>