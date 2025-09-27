const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('greet', () => {
  console.log('Hello there!');
});

console.log('Before event emit');
myEmitter.emit('greet'); // triggers the event
console.log('After event emit');
