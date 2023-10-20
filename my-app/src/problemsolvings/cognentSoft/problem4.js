// Flatten following array without using array.flat
// [1,2,[3,4], [5, [6, 7,[8,[9]]]]] into -> [1,2,3,4,5,6,7,8,9]

/**
 * Solved this problem using Recursion for inner array.
 */

let inputArr = [1,2,[3,4], [5, [6, 7,[8,[9]]]]];

let flattenArray = (inputArr, outputArr) => {
    inputArr.forEach(elem => {
        typeof elem === 'object' ? flattenArray(elem, outputArr) : outputArr.push(elem);
    });
    return outputArr;
}

console.log(flattenArray(inputArr, []));
