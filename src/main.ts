import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
//全局引入Nav
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/models/tagListModel';
import recordListModel from '@/models/recordListModel';


Vue.config.productionTip = false;

//全局引入Nav
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

// window.store = {
//     recordList: recordListModel.fetch(),
//     creatRecord: (record: RecordItem) => recordListModel.create(record),
//     findTag (id: string) {
//         return this.tagList.filter(t => t.id === id)[0];
//     },
//     tagList: tagListModel.fetch(),
//     removeTag: (id: string) => {
//         return tagListModel.remove(id);
//     },
//     createTag: (name: string) => {
//         if (name) {
//             const message = tagListModel.create(name);
//             //每个error都有message,可以打印出来后判断
//             if (message === 'duplicated') {
//                 window.alert('标签重复');
//             } else if (message === 'success') {
//                 window.alert('添加成功');
//             }
//         }
//     },
//     updateTag: (id: string, name: string) => {
//         return tagListModel.update(id, name);
//     }
// };
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
