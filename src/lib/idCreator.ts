//内部的0保底是字符串，外部保底不是NaN等内容
let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;

function createId() {
    id++;
    //把id存到 localStorage中
    window.localStorage.setItem('_idMax', id.toString());
    return id;

}

export default createId;