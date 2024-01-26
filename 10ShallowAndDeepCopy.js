//primitive copy
// primitive value seprate value is created so not affect to original value
let a = 10;
let b = a;
console.log('Before change value : ',a, b);
b = 20;
console.log('After change value : ',a, b);

//Object copy
//seprate copy not create
let obja = {
    'first': 1,
    'secound': 2
};
//reference is copy to another object
let objb = obja;
console.log('Before change value : ',obja, objb);
objb.first = 11;
console.log('After change value : ',obja, objb);

//way of creating object
// spread operator
// deep copy create not change original object
let testA = {
    'first': 1,
    'secound': 2
};
// let testB = {...testA};   // one Level Deep Copy
// let testB = Object.assign(testA);  // Shallow Copy
// let testB = Object.assign({}, testA);  // one Level Deep copy
let testB = JSON.parse(JSON.stringify(testA));  // oure nested level deep copy
console.log('Before change value : ',testA, testB);
testB.first = 11;
console.log('After change value : ',testA, testB);
