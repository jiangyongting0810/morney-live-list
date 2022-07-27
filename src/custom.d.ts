type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number //数据类型 object | string
    createdAt?: string
}

type Tag = {
    id: string
    name: string
}

type RootState = {
    recordList: RecordItem[],
    tagList: Tag[],
    currentTag?: Tag
}
// type TagListModel = {
//     data: Tag[]
//     fetch: () => Tag[]
//     create: (name: string) => 'success' | 'duplicated'
//     update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
//     remove: (id: string) => boolean
//     save: () => void
// }


// interface Window {
//     store:{
//         tagList: Tag[];
//         createTag: (name: string) => void;
//         removeTag: (id: string) => boolean;
//         updateTag: TagListModel['update'];
//         // updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
//         findTag: (id: string) => Tag | undefined;
//         recordList: RecordItem[];
//         creatRecord:(record:RecordItem) =>void
//     }
// }
