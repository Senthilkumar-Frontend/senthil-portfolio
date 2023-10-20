/**
 * Partially did the implementation by studying and gets the output however.
 */

const promiseAll = (promises) => {
    return new Promise((resolve, reject) => {
      if(!Array.isArray(promises)) {
        reject(new TypeError('Promises argument Should be an array'));
        return;
      }
  
      let results = new Array(promises.length);
      let resolvedCount = 0;
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then(value => {
            results[index] = value;
            resolvedCount++;
            resolvedCount === promises.length && resolve(results);
          })
          .catch(error => {
            reject(error);
          });
      });
    });
  }
  

let promise_1 = Promise.resolve(1);
let promise_2 = Promise.resolve(2);
let promise_3 = Promise.resolve(3);
  
promiseAll([promise_1, promise_2, promise_3])
    .then(values => {
        console.log(values); 
    }).catch(error => {
        console.error(error);
    });
  