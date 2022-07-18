//内部的0保底是字符串，外部保底不是NaN等内容
let id: number = parseInt(window.localStorage.getItem('idMax') || '0') || 0;

function createId() {
    id++;
    return id;
}

export default createId;