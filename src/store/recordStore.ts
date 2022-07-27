import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';

//data类型不能为undefined这里用或者
// let data: RecordItem[] | undefined = undefined;

// function save() {
//     window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
// }

const recordStore = {
        recordList: [] as RecordItem[],
        fetchRecords() {
            this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
            return this.recordList;
        },
        saveRecords() {
            window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
        },
        creatRecord (record: RecordItem) {
            const record2: RecordItem = clone(record);
            record2.createdAt = new Date().toISOString();
            //data存在才能push
            this.recordList&&this.recordList.push(record2);
            recordStore.saveRecords();
        }
    }
;
recordStore.fetchRecords();

export default recordStore;