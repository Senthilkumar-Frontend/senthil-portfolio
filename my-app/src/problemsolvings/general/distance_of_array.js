
let arr1 = [2,1,100,3];
let arr2 = [-5,-2,10,-3,7];
let d = 6;

const distanceOfArray = (arr1, arr2, d) => {
    let resultCount = 0;

    for(let i = 0; i < arr1.length; i++) {
        let compCount = 0;
        for(let j = 0; j < arr2.length; j++) {
            Math.abs(arr1[i] - arr2[j]) > d &&  compCount++;
        }
        compCount == arr2.length && resultCount++;
        
    }
    return resultCount
}

console.log(distanceOfArray(arr1, arr2, d));