<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
      <Types :value.sync="record.type"/>
      <FormItem
          placeholder="在这输入备注"
          field-name="备注"
          @update:value="onUpdateNotes"
      />
      <Tags :data-source.sync="tags" @update:selected="onUpdateTags"/>
      {{ recordList }}
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';


const recordList: RecordItem[] = recordListModel.fetch();


@Component({components: {FormItem, Tags, Types, NumberPad}})
export default class Money extends Vue {
  tags = window.tagList;
  recordList: RecordItem[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    recordListModel.create(this.record);
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save();
  }
}
</script>


<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
</style>