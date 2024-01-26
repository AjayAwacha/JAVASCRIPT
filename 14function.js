'use strict'
// functions are generally use to reuse the block of code

function printMe() {
    console.log('some line of text');
}
printMe();
printMe();

// if function don't return any value
const takeFunValue = printMe();
console.log(takeFunValue);  // if any function don't return anything then it return undefined

// if function return value
function processFood(apples, oranges) {
    const createdFood = `juice of ${apples} apples and ${oranges} oranges`;
    return createdFood;
}
const food = processFood(5, 0);
console.log(food);

// function declaration vs function expression

// function declaration
function calculateAge1(dob) {
    return 2022 - dob;
}
const myAge1 = calculateAge1(1997);
console.log(myAge1);

// function expression
const calculateAge2 = function(dob) {
    return 2022 - dob;
}
const myAge2 = calculateAge2(1997);
console.log(myAge2);

// difference btn function declaration and expression is that we can call function declaration
// before we defined it
// we can not call function expression before we define it

// Arrow function
const age = dob => 2022 - dob;
console.log(age(1997));

const remainingRetirmentYears = (dob, retirmentAge) => {
    const currentAge = 2022 - dob;
    const remainingYears = retirmentAge - currentAge;
    return remainingYears;
}
console.log(remainingRetirmentYears(1997, 65));

// difference btn regular function and arrow function is this is not bind with 
// arrow function and this is available in regular function

// calling Function inside function
function cutInPiece(noOfFruits) {
    return noOfFruits * 4;
}

function foodProcessor(apples, oranges) {
    const pieceOfApple = cutInPiece(apples);
    const pieceOfOrange = cutInPiece(oranges);
    const createdFood = `juice of ${pieceOfApple} piece of apples and ${pieceOfOrange} piece of oranges`;
    return createdFood;
}
const createdFood = foodProcessor(2, 4);
console.log(createdFood);
