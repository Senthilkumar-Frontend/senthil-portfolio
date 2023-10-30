// Output 15
let arr = [1,2,3,4,5];

// Reduce method Implementation
console.log(arr.reduce((accum, elem) => {
    console.log(elem);
    accum = accum + elem;
    return accum;
}, 0))

// Map method Implementation
console.log(arr.map(elem => {
    return elem * 2
}))

// Filter method Implementation
console.log(arr.filter(elem => {
    return elem%2 == 0;
}))