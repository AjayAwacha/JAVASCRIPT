const arr = [4, 5, 6];

// const newArr = [1, 2, 3, arr[0], arr[1], arr[2]];
// console.log(newArr);

const newArr = [1, 2, 3, ...arr];
console.log(newArr);


// we will change array element
arr [1] = 44;
console.log(arr);
console.log(newArr);


const newArr2 = [...arr, 7, 8];
console.log(newArr2);

const arr2 = [1, 2, 3];

// concate two array
const combineArray = [...arr2, ...arr];
console.log(combineArray);

// using spread operator we can create shallow copy
const arrCopy = [...arr];
arr[1] = 55;
console.log('original Array', arr);
console.log('copied array', arrCopy);

const str = "AwacharAjay";
console.log(...str);

// real case use of spread operator
const parameterArr = [10, 30, 50, 70];
function getdata(a, b, c, d) {
    console.log(a, b, c, d);
}
getdata(...parameterArr);

//we can also use spread operator with object
const obj = {
    fName: 'Ajay',
    lName: 'Awachar',
    age: 25
};
const newObj = {wife: 'unknown',...obj, brother: 'Pramod', sister: 'Pooja'};
console.log(obj);
console.log(newObj);

// we can also create shallow copy of object
const objCopy = {...obj};
obj.age = 26;
console.log('original object',obj);
console.log('original object',objCopy);
