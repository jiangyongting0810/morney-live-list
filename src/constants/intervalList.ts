const  intervalList =Object.freeze( [
    {text: '按天', value: 'day'},
    {text: '按周', value: 'week'},
    {text: '按年', value: 'month'},
])
export default intervalList

//常量会被.push()变动，可以使用Object.freeze的api,这样对象就不会被push