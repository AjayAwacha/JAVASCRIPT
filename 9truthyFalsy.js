console.log('truthy and falsy values');
// in js there are six falsy values 0,'',undefined,null,NaN,false
// all other are truthy values
// in two scenario js implicitlly convert value into boolean
const zeroTest = 0;
const emptyStringTest = '';
let undefinedTest;
const nanTest = String('ajay');
const nullTest = null;
const emptyObject = {}; //true
const emptyArray = []; //true
if (emptyArray) {        // here type coercion happen and its value is false
    console.log('true block statment');
} else {
    console.log('false block statment');
}

// equality operator
console.log('18' == 18); // == is lose strict equal operator it internally perform type covercion
console.log('18' === 18); // === is strict equal operator

// const num = Number(prompt('enter any number'));
// if (num === 8) {
//     console.log('you entered number 8');
// } else if (num === 6) {
//     console.log('you enter number 6');
// } else {
//     console.log('your entered number is not 8 and 6');
// }

// Logical operator
const firstVal = false;
const secVal = true;
const thirdVal = true;
console.log(firstVal && secVal); // if both are true return true
console.log(firstVal || secVal); // one of them must true
console.log(firstVal || secVal && thirdVal); // && operator has higher precidency
console.log(!firstVal);
