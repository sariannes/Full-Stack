const EventEmitter = require('events');

//CReate class
class MyEmitter extends EventEmitter {}

//init object
const myEmitter = new MyEmitter();

//event listener
myEmitter.on('event', ()=> console.log('Event fired'));

//init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');