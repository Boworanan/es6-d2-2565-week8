const path = require('path')
// const result = path.basename('/public/home/index.html','.html')//เอาเฉพาะชื่อแรก


// console.log(result)
// console.log(path.extname('app.js'))//เอาเฉพาะนามกสกุล
// console.log(path.extname('index.html'))


let pathTofile = path.format({
    dir:'public/home/js',
    base:'app.js'
})
let pathObj = path.parse('C:\Users\bowon\Desktop\WAVe\Study\week8\public\home\index.html')
console.log(pathObj);