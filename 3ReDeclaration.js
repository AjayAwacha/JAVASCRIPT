"use strict"

console.log(varVariable);
let letVariable = 'Global let variable';
var varVariable = 'Global var variable';
console.log(letVariable);
console.log(varVariable);

function reDeclaration() {
    // console.log(letVariable);
    // we can't access letVariable because let variable are not hoisted
    // yes i know letVariable is global variable and it must accessble 
    // but same variable is created here and its let variable we must not access here before decalre

    console.log(varVariable);
    let letVariable = 'function let variable';
    var varVariable = 'function var variable';
    console.log(letVariable);
    console.log(varVariable);

    const block = true;
    if (block) {
        // console.log(letVariable);
        // let vatible must not access before decalre it

        console.log(varVariable);
        let letVariable = 'block let variable';
        var varVariable = 'block var variable';
        console.log(letVariable);
        console.log(varVariable);
    }

    console.log(letVariable);
    console.log(varVariable);
}
reDeclaration();
console.log(letVariable);
console.log(varVariable);