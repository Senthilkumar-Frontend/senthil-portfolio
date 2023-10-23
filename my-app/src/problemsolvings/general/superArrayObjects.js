// o/p
// [
//     { language: 'JavaScript', count: 2 },
//     { language: 'C++', count: 1 },
//     { language: 'TypeScript', count: 1 }
// ]

let arr = [
    { language: 'JavaScript' }, 
    { language: 'JavaScript' }, 
    { language: 'TypeScript' }, 
    { language: 'C++' }
] 

let resultData = {};

let countKeyOccurence = (inputData) => {
    let resultData = {};
    
    inputData.forEach(elem => {
        if(!resultData.hasOwnProperty(elem.language)) {
            resultData[elem.language] = 1;
        }
        else {
            resultData[elem.language] += 1;
        }
    })
    console.log(resultData);
}   

countKeyOccurence(arr);
