// "use strict"

debugger
// let/const is not hoisted
// console.log(letVariable);

console.log(varVariable);
let letVariable = 'Global let variable';
var varVariable = 'Global var variable';

function funScope() {

    debugger
    console.log(varFunVariable);
    console.log(varBloVariable);
    let letFunVariable = 'function let variable';
    var varFunVariable = 'function var variable';

    const block = true;
    if (block) {

        console.log(varBloVariable);
        let letBloVariable = 'block let variable';
        var varBloVariable = 'block var variable';

        console.log(letVariable);
        console.log(varVariable);
        console.log(letFunVariable);
        console.log(varFunVariable);
        console.log(letBloVariable);
        console.log(varBloVariable);
    }

    console.log(letVariable);
    console.log(varVariable);
    console.log(letFunVariable);
    console.log(varFunVariable);
    console.log(varBloVariable);
}
funScope();
console.log(letVariable);
console.log(varVariable);

NormalFunction();

// Function Expression not hoisted
// ExpressionFunction();

function NormalFunction() {
    console.log('Normal function defination is hoisted to top');
}

const funExp = function ExpressionFunction() {
    console.log('function expression is not hoisted to top');
}
