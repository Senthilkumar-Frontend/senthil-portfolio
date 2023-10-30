//ouput ['Senthilkumar Natesan', 'Vivel Subramaniam', 'Tamilselvan Subasingarajan', ' Jaidev ravi']

let inputArr = [
    {
        firstName : 'Senthilkumar',
        lastName : 'Natesan',
        age : '23'
    },
    {
        firstName : 'Vivek',
        lastName : 'Subramaniam',
        age : '23'
    },
     {
        firstName : 'Tamilselvan',
        lastName : 'Subasingarajan',
        age : '24'
     },
     {
        firstName : 'Jaidev',
        lastName : 'ravi',
        age : '24'
     }
]

let resultObj = inputArr.reduce((accum, curr) => {
    if(!accum[curr.age]) {
        accum[curr.age] = 1
    }
    else {
        accum[curr.age] += 1;
    }
    return accum;
}, {})

console.log(resultObj);



