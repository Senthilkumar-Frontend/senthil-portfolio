/**
 * Given question is to change the Async await.
 * Here i used the promise handling which is a asynchronous handling.
 * .then, resolve, reject are the concepts in promise to handle the async methods.
 */

const main = () => {
  return getName()
    .then((name) => {
      console.log(`Hello ${name}!`);
      return getAge();
    })
    .then((age) => {
      let drink = age < 10 ? "milk" : "coke"; // Age restriction condition rendering
      console.log(`Have a ${drink}.`);
      return age < 10;
    })
    .catch(function (err) {
      console.log('Error:' + err );
      return null;
    });
}

/**
 * Asynchronous Functions
 */

//Async getName method.
const getName = () => {
  return Promise.resolve("CognentSoft");
}

//Async getAge method.
const getAge = () => {
  return Promise.resolve(9);
}

// Main method to execute the code.
main().then((res) => {
  console.log("Result:", res);
});
