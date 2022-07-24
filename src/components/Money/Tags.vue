<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <!--      :class="{selected}给class属性，然后做selected的判断-->
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected:selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component({
  computed: {
    tagList() {
      return this.$store.state.tagList;
    }
  }
})
export default class Tags extends Vue {


  //让ts知道是字符串数组

  // @Prop() readonly dataSource: string[] | undefined;

  selectedTags: string[] = [];

  created() {
    this.$store.commit('fetchTags');
  }

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:selected', this.selectedTags);
  }

  // tags = store.tagList;

  create() {
    const name = window.prompt('请输入标签');
    if (!name) {window.alert('内容不能为空');}
    this.$store.commit('createTag', name);
  }
}
</script>

<style lang="scss" scoped>


.tags {
  //占满全部
  flex-grow: 1;
  background: white;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      background: rgba(234, 236, 239, 1);
      $h: 24px;
      height: $h;
      border-radius: 18px;
      padding: 0 18px;
      margin-right: 12px;
      color: #333;
      line-height: $h;
      margin-top: 8px;

      &.selected {
        background: #0c99ff;
        box-shadow: 0 4px 10px rgba(12, 153, 255, 0.25);
        color: white;
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      border-bottom: 1px solid;
      color: #999;
    }
  }
}
</style>