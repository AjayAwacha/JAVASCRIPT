
const stringName = "Ajay";
const age = 20;
const job = "Software Developer";

const str = "my name is " + stringName + " i'm " + age + " years old. my job is " + job;
console.log(str);

const strTemplateLitral = `my name is ${stringName} i'm ${age} years old. my job is ${job}`;
console.log(strTemplateLitral);

const multiLineStr = "this is first line \n this is secound line \n last line.";
console.log(multiLineStr);

const multiLineStrTempLitral = `this is first line
this is secound
last`;
console.log(multiLineStrTempLitral);

// type conversion (we manually convert one type of value to another)
const input = '1997';
const year = Number(input) + 18;
console.log("you will be 18 years in the year of ", year);
const nanExample = Number('ajay');
console.log(nanExample);
console.log(typeof nanExample);

const strExample = 27;
const result = String(strExample) + 78;
console.log(result);

// type coercion
// implicitly javascript convert one type of value to another
console.log('my age is ' + 26);
console.log('55' + 10);
console.log('55' - 10);
console.log('55' - '10');
console.log('55' * 2);
console.log('55' / 2);

let n = '10' + 1;
n = n - 1;
console.log(n);

// + operator trigger coercion and convert integer into string
// other operator trigger coercion and convert string into integer