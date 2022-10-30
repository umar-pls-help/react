var events=require('events');

var eventEmitter =new events.EventEmitter();
var connectHandler=function connect()
{
console.log('connection successful');
eventEmitter.emit('received');
}

var receiveHandler=function receive()
{
console.log('received successful');
}


eventEmitter.on('received',receiveHandler);


eventEmitter.on('connection',connectHandler);
eventEmitter.emit('connection');