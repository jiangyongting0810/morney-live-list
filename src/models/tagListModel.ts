const localStorageKeyName = 'tagList';
type TagListModel = {
    data: string[]
    fetch: () => string[]
    create: (name: string) => 'success'|'duplicated'
    save: () => void
}
//关联上面的数据类型
const tagListModel: TagListModel = {
    data: [],
    create(name: string) {
        //判断标签是否重复
        if (this.data.indexOf(name) >= 0) {
            return 'duplicated';
        }
        this.data.push(name);
        this.save();
        return 'success';
    },
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data;
    },
    //save不接受参数参数直接从this.data来
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
};
export default tagListModel;