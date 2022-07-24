<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
          <span>{{ tag.name }}</span>
          <Icon name="right"/>
        </router-link>

      </div>
      <div class="createTag-wrapper">
        <Button class="createTag" @click="createTag">新增标签</Button>
      </div>
    </Layout>
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';

// store.fetchTags();
@Component({
  components: {Button},
  computed:{
    tags(){
      return this.$store.state.tagList
    }
  }
})
export default class Labels extends Vue {
  beforeCreate(){
    this.$store.commit("fetchTags")
  }

  createTag() {
    const name = window.prompt('请输入标签');
    if (!name) {window.alert('内容不能为空');}
    this.$store.commit('createTag', name);
  }
}
</script>
<style lang="scss" scoped>
.createTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}

.tags {

  background: white;
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    svg {
      width: 24px;
      height: 24px;
      color: #666;
      margin-right: 16px;
    }
  }

}
</style>