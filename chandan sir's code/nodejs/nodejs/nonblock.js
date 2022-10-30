const fs = require('fs');
fs.readFile('mongo12333333.js', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log("hello"); // will run before console.log
