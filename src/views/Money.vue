<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
      <Tabs :data-source="recordTypeList"
            :value.sync="record.type"
      />
      <FormItem
          placeholder="在这输入备注"
          field-name="备注"
          @update:value="onUpdateNotes"
      />
<!--      :data-source.sync="tags"-->
      <Tags/>
      {{ recordList }}
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';
import Tabs from '@/components/Tabs.vue';


@Component({
  components: {FormItem, Tags, NumberPad,Tabs},
})

export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;

   record: RecordItem = {
    tags:[], notes: '', type: '-', amount: 0
  };
  created(){
    this.$store.commit('fetchRecords')
  }

  // onUpdateTags(value: string[]) {
  //   this.record.tags = value;
  // }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    this.$store.commit('creatRecord', this.record);
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