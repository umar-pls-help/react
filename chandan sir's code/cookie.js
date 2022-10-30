var express = require('express'); 
var app = express(); 
var port = 3000
app.get('/', function(req, res){
 res.cookie('name111', 'anish1').send('cookie set'); 
//Sets name = express 
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })