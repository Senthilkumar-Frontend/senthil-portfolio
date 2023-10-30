let obj = {
    firstName : 'Senthil',
    lastName : 'kumar'
}

let getFullName = function(country, state) {
    console.log(this.firstName + ' ' + this.lastName + ' ' + country + ' ' + state);
}

Function.prototype.myBind = function(...args) {
    let funcObj = this, params = args.slice(1);
    return function(...innerArg) {
        funcObj.apply(args[0],[...params, ...innerArg])
    }
}

let fullName = getFullName.myBind(obj, 'India');
fullName('Tamilnadu');