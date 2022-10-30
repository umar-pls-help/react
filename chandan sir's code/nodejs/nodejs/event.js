var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected() {
   console.log('connection succesful.');
     // Fire the data_received event 
   //eventEmitter.emit('data_received');
}
// Bind the connection event with the handler
eventEmitter.on('connect', connectHandler);
 // Bind the data_received event with the anonymous function
eventEmitter.on('data', function() {
   console.log('data received succesfully.');

});

eventEmitter.on('terminate', function() {
   console.log('program terminated');

});

// Fire the connection event 
eventEmitter.emit('connect');
eventEmitter.emit('data');
eventEmitter.emit('terminate');

console.log("Program Ended.");