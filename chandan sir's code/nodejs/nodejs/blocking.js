var fs = require("fs");
var data = fs.readFileSync('software.txt');

console.log(data.toString());
console.log("Program Ended");