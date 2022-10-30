const fs = require('fs');
const data = fs.readFileSync('mongo.js'); // blocks here until file is read
console.log(data);
console.log("hello"); 
