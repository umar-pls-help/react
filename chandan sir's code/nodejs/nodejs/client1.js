var net = require("net"); 
var client = new net.Socket(); 
var host="localhost";  
var port=9000;
client.connect( port, host, () => { 
console.log("client connected to ${host}:${port}"); 
client.write("Hello, I am ${client.address().address}"); 
}); 
client.on('data', (data) => {     
    console.log(`Client received: ${data}`); 
}); 
