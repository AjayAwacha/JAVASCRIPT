
// or operator return whichever found first truthy value otherwise return last value
console.log(0 || 'ajay');
console.log(undefined || 0);
console.log('ajay' || 0);
console.log(0 || undefined);

console.log(0 && 'ajay');
console.log('ajay' && 0);
console.log(undefined && 0);
console.log(0 && undefined);

// use case in project
console.log('true' && false || 56);
console.log('true' && undefined || 56);
console.log(undefined && true || 56);
console.log(false && false || 67);
console.log(true && 'true' || 78);

const obj = {
    key : "value"
}
function fun() {
    console.log('this is some code here.');
}
// use case in project
if (obj.key) {
    fun();
}
// instead of doing above we can do
obj.key && fun();

// Nulish Operator
// its work same like or but it conside only null/undefined as falsy value not 0/NaN/false/''
// const val = 0;
// const val = 10 * 'dff';
// const val = false;
// const val = '';
const val = null;
// const val = undefined;
console.log(val ?? 10);

//Logical Assignment Operator
const rest1 = {
    open : 11,
    owner: 'ajay',
    employee: 56
}

const rest2 = {
    open : 12,
    owner: 'suraj',
}

// Logical and operator
// rest1.employee = rest1.employee && 10;
// rest2.employee = rest2.employee && 10;
// rest1.employee &&= 10;
// rest2.employee &&= 10;

// rest1.employee = rest1.employee || 10;
// rest2.employee = rest2.employee || 10;
rest1.employee ||= 10;
rest2.employee ||= 10;

console.log(rest1);
console.log(rest2);

