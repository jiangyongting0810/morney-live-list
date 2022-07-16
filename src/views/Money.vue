<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
      <Types :value.sync="record.type"/>
      <!--      <Types :value="record.type" @update:value="onUpdateType"/>-->
      <Notes @update:value="onUpdateNotes"/>
      <Tags :data-source.sync="tags" @update:selected="onUpdateTags"/>
      {{ record }}
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';

//声明一个类型
type Record = {
  tags: string[]
  notes: string
  type: string
  amount: number
}

@Component({components: {Tags, Notes, Types, NumberPad}})
export default class Money extends Vue {
  tags = ['购物', '食品', '出行', '生活'];
  recordList: Record[] = [];
  record: Record = {
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
    const record2 = JSON.parse(JSON.stringify(this.record));
    this.recordList.push(record2);
    console.log(this.recordList);

  }

  @Watch('recordList')
  onRecordListChange() {
    localStorage.setItem('recordList', JSON.stringify(this.recordList));
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