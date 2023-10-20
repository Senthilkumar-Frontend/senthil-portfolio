// i/p [1,2,3,4,5,6,7,8,9];
// i/p 2
// o/p [3,4,5,6,7,8,9,1,2];

let inputArr = [1,2,3,4,5,6,7,8,9];

let rotateArray = (inputArr, rotateCount) => {

    for(let i = 0; i < rotateCount; i++) {
        let tempValue = inputArr.shift();
        inputArr.push(tempValue);
    }
    return inputArr;
}

console.log(rotateArray(inputArr, 2));
