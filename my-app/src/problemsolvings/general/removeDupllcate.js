// i/p [1,2,3,4,5,6,7,2,4,5,9];
// o/p [1,2,3,4,5,6,7,9]

let arr = [1,2,3,4,5,6,7,2,4,5,9];

let resultArr = [];

arr.forEach(elem => {
    if(!resultArr.includes(elem)) {
        resultArr.push(elem);
    }
})
console.log(resultArr);