// i/p let ob = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };

// o/p {
//     Company: 'GeeksforGeeks',
//     Address: 'Noida',
//     contact: -999999908,
//     'mentor.HTML': 'GFG',
//     'mentor.CSS': 'GFG',
//     'mentor.JavaScript': 'GFG'
//   }

let inputObj = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91-999999999,
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG"
    }
};

let flatten= (obj, str) => {
    result='';
    for(let key in obj) {
        result += typeof obj[key] === 'string' ? str + '' + key +': ' + obj[key] + '\n' : flatten(obj[key], str ? str + '' + key : key);
    }
    return result;
}

console.log(flatten(inputObj, ''));