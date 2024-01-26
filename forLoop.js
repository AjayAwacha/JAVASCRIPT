
// for loop avaoid manual repeatation of data

for(let i = 1; i <= 10; i++) {
    console.log(`this is loop repeatation number ${i}`);
}

const arr = ['ajay', 25, true, null, undefined];
for(let i = 0; i < arr.length ; i++) {
    console.log(arr[i]);
}

// const typeArr = [];
// for(let i = 0; i < arr.length ; i++) {
//     typeArr.push(typeof arr[i]);
// }
// console.log(typeArr);

// const dobArray = [1991, 2000, 1997, 1993];
// const ageArray = [];
// for(let i = 0; i < dobArray.length ; i++) {
//     ageArray.push(2022 - dobArray[i]);
// }
// console.log(ageArray);

// for(let i = 0; i < arr.length ; i++) {
//     if (typeof arr[i] === 'string') continue;
//     console.log(arr[i]);
// }

for(let i = 0; i < arr.length ; i++) {
    if (typeof arr[i] === 'boolean') break;
    console.log(arr[i]);
}

// backware loop
console.log('original array', arr);
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// loop inside loop
const doubleLoop = [
    'ajay', ['sopan', 'laxman', 'suraj', 'sonu', 'depu'], 25, true
];
for (let i = 0; i< doubleLoop.length; i++) {
    if (typeof doubleLoop[i] === 'object') {
        const friendsArr = doubleLoop[i];
        for (let j = 0; j < friendsArr.length; j++) {
            console.log(friendsArr[j]);
        }
        continue;
    }
    console.log(doubleLoop[i]);
}

// while loop
let index = 1;
while(index <= 10) {
    console.log(`index value is ${index}`);
    index++;
}
