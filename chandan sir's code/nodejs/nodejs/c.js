var http = require('http');
var options = {
   host: 'localhost',
   port: '8081',
};
var callback = function(response) {
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      console.log(body);
   });
}
