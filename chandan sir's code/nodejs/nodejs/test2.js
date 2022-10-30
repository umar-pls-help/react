var events = require('events');
var eventEmitter = new events.EventEmitter();
var eventEmitter1 = new events.EventEmitter();
var eventEmitter2 = new events.EventEmitter();

var myEventHandler = function () {
eventEmitter1.emit('scream1');
}

var myEventHandler1 = function () {
eventEmitter2.emit('scream2');
}

var myEventHandler2 = function () {
  console.log('I hear a scream!');
}



eventEmitter.on('scream', myEventHandler);
eventEmitter1.on('scream1', myEventHandler1);
eventEmitter2.on('scream2', myEventHandler2);


eventEmitter.emit('scream');