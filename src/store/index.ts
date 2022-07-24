import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/idCreator';

Vue.use(Vuex);

type RootState = {
    recordList: RecordItem[],
    tagList: Tag[],
    currentTag?: Tag
}

const store = new Vuex.Store({
    state: {
        recordList: [] as RecordItem[],
        tagList: [] as Tag[],
        currentTag: undefined
    },
    mutations: {
        setCurrentTag(state, id: string) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            state.currentTag = state.tagList.filter(t => t.id === id)[0];

        },
        fetchRecords(state) {
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
        },
        creatRecord(state, record) {
            const record2: RecordItem = clone(record);
            record2.createdAt = new Date();
            //data存在才能push
            state.recordList.push(record2);
            store.commit('saveRecords');
            // recordStore.saveRecords();
        },
        saveRecords(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
        },
        fetchTags(state) {
            return state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
        },
        createTag(state, name: string) {
            const names = state.tagList.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                window.alert('标签名重复了');
                return 'duplicated';
            }
            const id = createId().toString();
            state.tagList.push({id, name: name});
            store.commit('saveTags');
            window.alert('添加成功');
            return 'success';
        },
        saveTags(state) {
            window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
        },

    }
});

export default store;
