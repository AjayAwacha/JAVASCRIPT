class Mobile {
    //instance member ModelName and price
    constructor(name) {
        this.modelName = name;
        this.price = 6000;
    }
}

const samsung = new Mobile('samsung');
const nokia = new Mobile('nokia');

// prototype member
Mobile.prototype.color = 'red';

console.log(samsung, samsung.__proto__.color);
console.log(nokia, nokia.__proto__.color);

console.log(samsung.__proto__);
console.log(Mobile.prototype);
console.log(samsung.__proto__ === Mobile.prototype);

// iterate prototype member
console.log(Object.keys(samsung));
for(const a in samsung) {
    console.log(a);
}

// every object is associated with another object in javascript
let b = {};
console.log(b.__proto__  === Object.prototype);

console.log(Object.getPrototypeOf(b));
console.log(Object.getPrototypeOf(Object.prototype));

let b1 = new Object();
console.log(Object.getPrototypeOf(b1));
console.log(Object.getPrototypeOf(Object.prototype));

let b2 = new Array();
console.log(Object.getPrototypeOf(b2));
console.log(Object.getPrototypeOf(Array.prototype));
console.log(Object.getPrototypeOf(Object.prototype));

let b3 = [];
console.log(Object.getPrototypeOf(b3));
console.log(Object.getPrototypeOf(Array.prototype));
console.log(Object.getPrototypeOf(Object.prototype));

let b4 = new String();
console.log(Object.getPrototypeOf(b4));
console.log(Object.getPrototypeOf(String.prototype));
console.log(Object.getPrototypeOf(Object.prototype));
