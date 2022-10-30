const fs = require('fs');

const content = 'Some content!'

fs.writeFile('mongo.js', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})



fs.readFile('mongo.js', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log("hello"); // will run before console.log

