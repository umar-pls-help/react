var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.cookie('name', 'vidyavardhini').send('cookie set'); //Sets name = express
});

app.listen(3000);