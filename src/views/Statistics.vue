<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval" height="40px"/>
    <ol>
      <li v-for="(group,index) in result" :key="index">
        <h3 class="title">{{ group.title }}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{ tagSting(item.tags) }} </span>
            <span class="notes">{{item.notes}}</span>
            <span>￥{{ item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<style scoped lang="scss">
h3 {
  margin-left: 16px;
}

%item {
  padding: 8px 16px;
  min-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.title {
  @extend %item
}

.record {
  background: white;
  @extend %item
}
.notes{
  margin-right: auto;
  margin-left: 8px;
}
</style>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import Vue from 'vue';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';


@Component({components: {Tabs}})
export default class Statistics extends Vue {
  // eslint-disable-next-line no-undef
  tagSting(tags:Tag[]) {
    return tags.length ===0 ?"无": tags.join(',');
  }

  get recordList() {
    // eslint-disable-next-line no-undef
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const {recordList} = this;
    type Item = RecordItem[]
    type HashTableValue = { title: string, items: Item }

    const hashTable: { [key: string]: HashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt!.split('T');
      hashTable[date] = hashTable[date] || {title: date, items: []};
      hashTable[date].items.push(recordList[i]);
    }
    console.log(hashTable);
    return hashTable;
  }

  created() {
    this.$store.commit('fetchRecords');
  }

  type = '-';
  interval = 'day';

  intervalList = intervalList;
  recordTypeList = recordTypeList;
}

</script>


<style scoped lang="scss">
::v-deep {
  .type-tabs-item {
    background: white;

    &.selected {
      background: rgba(12, 153, 255, 1);

      &::after {
        display: none;
      }
    }
  }

  .interval-tabs-item {
    //height: 40px;

  }
}

</style>

