<template>
  <div>
    <label class="formItem">
      <span class="name">{{ this.fieldName }}</span>
      <input type="text"
             :value="value"
             @input="onValueChanged($event.target.value)"
             :placeholder="placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch,Prop} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  @Prop({default:''})readonly value!:string;

  //{required:true}表示必填
  @Prop({required:true})fieldName!:string;
  //?表示可能不存在
  @Prop()placeholder?:string

  @Watch('value')
  onValueChanged(value: string) {
    this.$emit('update:value',value);
  }
}
</script>

<style lang="scss" scoped>
.formItem {
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding: 8px;
  }
}
</style>