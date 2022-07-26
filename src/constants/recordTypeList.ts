const  recordTypeList =Object.freeze( [
    {text: '支出', value: '-'},
    {text: '收入', value: '+'},
])
export default recordTypeList

//常量会被.push()变动，可以使用Object.freeze的api,这样对象就不会被push