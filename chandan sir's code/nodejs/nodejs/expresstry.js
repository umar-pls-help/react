const express = require('express')
var MongoClient = require('mongodb').MongoClient;
const app = express()
const port = 3050
var url = "mongodb://localhost:27017/";

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/getdata', (req, res) => {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("vcet");
  var myobj = { name: "VCET" };
  dbo.collection("inft").find(myobj).toArray(function(err, res) {
    if (err) throw err;
    console.log(res);
    
	
	db.close();
  });
});
  res.send('1 record inserted')
})

app.get('/putdata', (req, res) => {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("vcet");
  var myobj = { name: "VCET", address: "KT marg Vasai" };
  dbo.collection("inft").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
  res.send('1 record inserted')
})








app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})