// module wrapper function, every js file  has private scope  so if we want to use file in another
// file we need to use export.module

(function(){const a=require('fs')
const name='suvi'
console.log(name)})()