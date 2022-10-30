const fs=require('fs');
const data=fs.readFile('mongo.js',(err,data)=>{
if(err) throw err;
console.log(data);


});

console.log("hello");