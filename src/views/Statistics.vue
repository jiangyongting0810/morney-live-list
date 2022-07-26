<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval" height="40px"/>
    type:{{ type }}
    interval:{{ interval }}
  </Layout>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import Vue from 'vue';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';

@Component({components: {Tabs}})
export default class Statistics extends Vue {
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
  .interval-tabs-item{
    //height: 40px;

  }
}

</style>

