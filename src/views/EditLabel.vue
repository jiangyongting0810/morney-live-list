<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';

@Component
export default class EditLabel extends Vue {
  created() {
    //this.$route来自vue.d.ts文件
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    //也可以用find
    const tag = tags.filter(t => t.id === id)[0]
    if (tag){
      console.log(tag);
    }else {

      //防止用户退不了不用push

      (this as any).$router.replace('/');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>