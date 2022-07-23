import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore';

const store = {


    //...表示拷贝值过来（浅拷贝）
    ...recordStore,
    ...tagStore
};

export default store;