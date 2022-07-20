import createId from '@/lib/idCreator';

const localStorageKeyName = 'tagList';

//关联上面的数据类型
const tagListModel: TagListModel = {
    data: [],
    create(name: string) {

        //判断标签是否重复
        //this.data =[{id:'1',name:'1'},{id:'2',name:'2'}]
        const names = this.data.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            return 'duplicated';
        }
        const id = createId().toString();
        this.data.push({id, name: name});
        this.save();
        return 'success';
    },
    update(id:string, name:string) {
        const idList = this.data.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicated';
            } else {
                const tag = this.data.filter(item => item.id === id)[0];
                tag.name = name;
                this.save();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    remove(id: string) {
        let index = -1;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i;
                break;
            }
        }
        //移除id
        this.data.splice(index, 1);
        //重新保存
        this.save();
        return true;
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