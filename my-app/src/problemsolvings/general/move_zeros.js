// i/p [0,1,0,3,12] or [1,0,0,4,5]
// o/p [1,3,12,0,0] or [1,4,5,0,0]

const moveZeros = (inpArr) => {
    for(let i = 0; i < inpArr.length; i++) {
        if(inpArr[i] == 0 && i == inpArr.length - 1) {
            return;
        }
        else {
            if(inpArr[i] == 0) {
                inpArr.splice(i, 1);
                inpArr.push(0);
                moveZeros(inpArr);
            }
        }
    }
    return inpArr;
}

console.log(moveZeros([1,0,0,4,5]));