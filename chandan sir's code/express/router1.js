var express = require('express');
var app = express();

app.get('/hello', function(req, res){
   res.send("Hello World!");
});

app.get('/hello1', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.get('/hello2', function(req, res){
   res.send("You just called the put method at '/hello'!\n");
});

app.listen(3000);