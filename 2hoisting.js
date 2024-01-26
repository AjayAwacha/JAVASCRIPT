// "use strict"

// variable
// only var variable is hoisted same behaviour with strct mode
// console.log(firstName);  //RE
// console.log(age);      //RE

console.log(lastName);

const firstName = 'Ajay';
let age = 25;
var lastName = 'Awachar';

// function
// only Normal function is get hoisted not other same behaviour with strict mode

first();
// sec();
// console.log(arrFun(10, 20));
function first() {
    console.log('this is normal function');
}
const sec = function secound() {
    console.log('this is function expression');
}
const arrFun = (a, b) => a + b;

