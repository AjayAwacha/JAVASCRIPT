const arr = ['first', 'secound', 'third', 'fourth', 'fifth', 'sixth'];

for(const item of arr) console.log(item);

for(const index in arr) console.log(index);

for(const ele of arr.entries()) {
    console.log(ele);
}

for(const [index, ele] of arr.entries()) {
    console.log(`${index} and element is ${ele}`);
}
