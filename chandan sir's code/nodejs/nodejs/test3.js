var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('</form>');
    return res.end();
  
}).listen(8080);