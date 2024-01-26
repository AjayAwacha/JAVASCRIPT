"use strict"

// console.log(x);
// console.log(y);
console.log(z);

let x = 10;
const y = 10;
var z = 10;

normal();

function normal() {
    console.log('Normal function');
}

// funExp();
// useExp();
const funExp = function useExp() {
    console.log('Function Expression');
}

// arrFun();
const arrFun = () => {
    console.log('Arrow Function');
}