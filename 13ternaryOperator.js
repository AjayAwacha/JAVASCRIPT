
const age = 17;
// const drink = age > 18 ? 'wine' : 'water';
// console.log('i can drink ', drink);

let drink;
if (age > 18) {
    drink = 'wine';
} else {
    drink = 'wanter';
}
console.log('i can drink water', drink);

// inside string litral we can't use if statment but we can use ternary operator
console.log(`i can drink ${age > 18 ? 'wine' : 'water'}`);