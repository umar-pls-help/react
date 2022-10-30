var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:

fs.appendFile(
'mongo.js',
'New access log entry',
error => {
if (error) {
console.error('error writing!', error)
}

fs.readFile('mongo.js', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

})

}).listen(8080);