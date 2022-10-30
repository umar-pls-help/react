var net=require ("net");
var server = net.createServer();    
server.on('connection', handleConnection);
server.listen(9000, function() {    
  console.log('server listening to %j', server.address());  
});
function handleConnection(conn) {    
  var remoteAddress = conn.remoteAddress + ':' + conn.remotePort;  
  console.log('new client connection from %s', remoteAddress);
 conn.on('data', onConnData);  
 function onConnData(d) {  
    console.log('connection data from %s: %j', remoteAddress, d);  
    conn.write(d);  
  }
}
