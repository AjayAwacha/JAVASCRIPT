'use strict'
const arr = ['sopan', 'laxman', 'suraj', 'shubham', 'hanuman'];
console.log(arr.length);
console.log(arr[2]);

arr[1] = 'Sumeet';
console.log(arr);

// deleting array and object is not possible in strict mode
// delete arr;

function getVal() {
    return 10;
}
const age = 18;
const arr2 = [10 + 4, 'ajay', getVal(), age, age > 18 ? 18 : 20];
console.log(arr2);

// basic array methods
const temp = ['sopan', 'laxman', 'suraj', 'shubham', 'hanuman'];

// add elements
const newLength = temp.push('tanmay');
console.log(newLength);
const length = temp.unshift('soumya');
console.log(length);

// remove elements
const removedElement = temp.pop();
console.log(removedElement);
const element = temp.shift();
console.log(element);
console.log(arr);

// search element
console.log(arr.indexOf('suraj'));
console.log(arr.indexOf('dfff'));
console.log(arr.includes('suraj'));
console.log(arr.includes('dfff'));

