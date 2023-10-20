//Curry function sum(1)(2)(3)() - > should return 6

let sum = (a) => {
    return function(b) {
        return b ? sum(a + b) : a;
    }
};
console.log(sum(1)(2)(3)());