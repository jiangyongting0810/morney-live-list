import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const store = {
    recordList: recordListModel.fetch(),
    creatRecord: (record: RecordItem) => recordListModel.create(record),
    findTag(id: string) {
        return this.tagList.filter(t => t.id === id)[0];
    },
    tagList: tagListModel.fetch(),
    removeTag: (id: string) => {
        return tagListModel.remove(id);
    },
    createTag: (name: string) => {
        if (name) {
            const message = tagListModel.create(name);
            //每个error都有message,可以打印出来后判断
            if (message === 'duplicated') {
                window.alert('标签重复');
            } else if (message === 'success') {
                tagListModel.save();
                window.alert('添加成功');
            }
        }
    },
    updateTag: (id: string, name: string) => {
        return tagListModel.update(id, name);
    },

};

export default store;