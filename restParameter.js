"use strict"
// spread operator used right side of assignment operator
const [a, b, c, d] = [10, 20, ...[30, 40]];  // using array destructuring we get the element
console.log(a, b, c, d);

//rest element use left side of assignment operatoe
const [ele1, ele2, ...other] = [10, 20, 30, 40];
console.log(ele1, ele2, other);

const arr = [6, 3, 65, 7, 67];
const [arrEle1, arrEle2, ...restEle] = [...arr];
console.log(arrEle1, arrEle2, restEle);

// use rest parameter with object
const obj = {
    mon: {
        open: 10,
        close: 20
    },
    tue: {
        open: 20,
        close: 30
    },
    wed: {
        open: 30,
        close: 40
    },
    sun: {
        open: 1,
        close: 10
    },
    thur: {
        open: 40,
        close: 50
    },
    fri: {
        open: 50,
        close: 60
    }
}
const {sun: sundayObj} = obj;  // used object destructuring
console.log(sundayObj);

const {sun, ...otherDays } = obj;
console.log('sunday', sun);
console.log('other object', otherDays);

function testFirst(...paramArr) {
    console.log(paramArr);
}
testFirst(100, 200);
testFirst(100, 200, 300);
testFirst(100, 200, 300, 400);
testFirst(100, 200, 300, 400, 500);

const parameter = [9, 8, 7, 6, 5]
function testTwo(...restparam) {  //rest parameter
    console.log(restparam);
}
testTwo(...parameter);  // use spread operator here

function testThree(firstnum, secNum, ...otherNum) {
    console.log(firstnum);
    console.log(secNum);
    console.log(otherNum);
}
testThree(5, 67, 45, 23);