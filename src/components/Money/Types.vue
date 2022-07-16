<template>
  <div>
    <ul class="types">
      <li :class="type === '-'  && 'selected'"
          @click="selectType('-')">支出
      </li>
      <li :class="type === '+' &&'selected'"
          @click="selectType('+')">收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  @Prop() readonly type!: string;

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.$emit('update:value', type);
  }

  @Watch('type')
  onTypeChanged(value: string) {
    this.$emit('update:value', value);
  }
}
</script>

<style lang="scss" scoped>
.types {
  background: rgba(12, 153, 255, 1);
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
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