"use strict"

// 1] this keyword point to owner of function in which they get called
const person = {
    fName: 'Ajay',
    lName: 'Awachar',
    dob: 1997,
    calcAge: function() {
        console.log('Normal Function',this);
        // return 2022 - this.dob;
    },
    arrowAge: () => {
        console.log('Arrow Function',this);
    }
}
person.calcAge();
person.arrowAge();

function normalFun() {
    console.log('normalFun ', this);
}
normalFun();
// 2] if we call function in regular
// without strct mode this point to window object
// with strct mode this will undefined

function fun() {
    console.log(this);
}
fun();
const funExp = function() {
    console.log(this);
}
funExp();

// 3] inside arrow function this is not available
// if we use this keyword than its point to its parent function this keyword
// we called its as lexical this

const arrFun = () => {
    console.log(this);
}
arrFun();

// outside any function this point to windows object
console.log('outside the function', this);

console.log('///////////////////////////////////////////////////////');
console.log('bind apply and call function');
const bindObj = {
    name: 'ajay',
    age: 18
}
const bindThisToFun = () => {
    console.log(this.name);
}
const newFun = bindThisToFun.bind(bindObj);
newFun();
bindThisToFun.call(bindObj);
bindThisToFun.apply(bindObj);