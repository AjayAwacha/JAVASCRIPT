
// we can create set using any iterable
// object are not iterable
const setFirst = new Set(['one', 'two', 'three', 'three', 'two', 'four', 'one']);
console.log(setFirst);

setFirst.add('ten');
console.log(setFirst);
setFirst.delete('ten');
console.log(setFirst);

// setFirst.clear();

console.log(setFirst.has('tee'));
console.log(setFirst.size);
console.log(setFirst);

//remove duplicate element from array
const uniqueEle = [...new Set(['as', 'hg', 'nb', 'nb', 'hg'])];
console.log(uniqueEle);

