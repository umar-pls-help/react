var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var app = express();
var fs = require("fs");
var url = "mongodb://localhost:27017/";

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/adddata', function (req, res) {
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

app.get('/trydata', function (req, res) {
console.log("called");
//const queryObject = url.parse(req.url,true).query;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("vcet");
  var myobj = { name: "chandan", address: "Ratnagiri" };;
  dbo.collection("inft").insertOne(queryObject, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
//});   

      res.end( "1 document inserted" );
   });
})



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})