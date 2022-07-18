type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number //数据类型 object | string
    createdAt?: Date
}

type Tag = {
    id: string
    name: string
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated'
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean
    save: () => void
}
//window 要大写
interface Window {
    tagList: Tag[];
}
