let obj = {
    firstName : 'Senthil',
    lastName : 'kumar'
}

let getFullName = function() {
    console.log(this.firstName + ' ' + this.lastName);
}

// getFullName.call(obj);

Function.prototype.myCall = function(...args) {
    return args[0];
}

getFullName.myCall(obj);