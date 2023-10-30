let nameObj = {
    firstName : 'Senthil',
    lastName : 'kumar',
}

let getFullName = function(state, country) {
    return `${this.firstName} ${this.lastName} from  ${state} ${country}` ;
}

let fullNameCall = getFullName.call(nameObj, 'Tamilnadu', 'India');
let fullNameApply = getFullName.apply(nameObj, ['Tamilnadu', 'India']);
let fullNameBind = getFullName.bind(nameObj, 'Tamilnadu', 'India');

console.log(fullNameCall);
console.log(fullNameApply);
console.log(fullNameBind())