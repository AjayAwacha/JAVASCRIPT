let country = 'India';
let population = 140;
console.log(`my countery is ${country}`);
console.log(`india's population is ${population} cr.`);

let num = 6;
let str = 'pramod';
let bln = false;
let dlr;
let emptyValue = null;

console.log(num);
console.log(typeof num);
console.log(str);
console.log(typeof str);
console.log(bln);
console.log(typeof bln);
console.log(dlr);
console.log(typeof dlr);
console.log(emptyValue);
console.log(typeof emptyValue);

// dynamic typeing
let original = true;
console.log(original);
console.log(typeof original);
original = 'str';
console.log(original);
console.log(typeof original);

//only declaration is hoisted to top not initialization
let hoistingExample;
console.log(typeof hoistingExample);
hoistingExample = true;
console.log(typeof hoistingExample);

// declaring variable without keyword is not possible in strict mode
// suppose this is not strict mode 
// if we declare any variable without any keyword then js assign it global scope

// console.log(varWithoutKeyword); // not defined
function fun() {
    // console.log(varWithoutKeyword); // not defined 
    const isBlockScope = true;
    if (isBlockScope) {
        varWithoutKeyword = 'ajay';
    }
}

function fun2() {
    console.log('varWithoutKeyword', varWithoutKeyword);
}
fun();
fun2();
console.log(varWithoutKeyword);
