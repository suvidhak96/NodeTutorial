const path=require('path')
// console.log(path.dirname('/home/epps/epps/Node/restAPI/PathModule/path.js'))
// console.log(path.extname('/home/epps/epps/Node/restAPI/PathModule/path.js'))
// console.log(path.basename('/home/epps/epps/Node/restAPI/PathModule/path.js'))
// console.log(path.parse('/home/epps/epps/Node/restAPI/PathModule/path.js'))
const a=path.parse('/home/epps/epps/Node/restAPI/PathModule/path.js')
// console.log(a.name)
console.log(a.root)
