//input [1,2,3,4,2,10,44,32,19]
//outpu 44

let arr = [1,2,3,4,2,10,44,32,19];

let maxVal = arr.reduce((accum, curr) => {
    curr > accum && (accum = curr);
    return accum;
}, 0)

console.log(maxVal)