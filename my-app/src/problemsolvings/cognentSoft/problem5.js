/**
 * Need to implement a publish-subscribe implementation.
 * Declared a eventHandler object initially.
 */

const eventHandlers = {};

//Call the callback according to the subscription.
const publish = (event, value) => {
  eventHandlers[event] &&  eventHandlers[event].forEach(callback => callback(value));
}

// Assign an anonymous function when this function is called.
const subscribe = (event, callback) => {
  //Initial check if the object is empty
  (!eventHandlers[event]) && (eventHandlers[event] = []);
  eventHandlers[event].push(callback);
}

//Subscribe to 'event1' with multiple callback functions
subscribe('event1', value => console.log('Subscriber1 :' + ' ' + value));
subscribe('event1', value => console.log('Subscriber2 :' + ' ' + value));
subscribe('event1', value => console.log('Subscriber3 :' + ' ' + value));

// Publish to 'event1'
publish('event1', 'CognentSoft MC Round');

