
const obj = {
    firstName: 'Ajay',
    lastName: 'Awachar',
    age: '25',
    job: 'Software developer',
    friends: ['sopan', 'Deepak', 'shubham', 'Suraj']
};

console.log(obj.firstName);
console.log(obj['firstName']);
const propName = 'firstName';
const name = "Name";
console.log(obj[propName]);
console.log(obj['first' + name]);

// const objPropName = prompt('enter any property name firstName/lastName/age/job/friends');
// console.log(`your entered property value is ${obj[objPropName]}`);

// we get object values using dot and bracket notation
// dot notation we used when we know exact property name
// if object property name comes dynamically than we must need to use bracket notation

const ajay = {
    firstName: 'Ajay',
    lastName: 'Awachar',
    hasDrivingLicense: false,
    dob: 1997,
    friends: ['Sopan', 'Laxman', 'Shrikant', 'Kelash'],
    // calcAge: function(dateOfBirth) {
    //     return 2022 - dateOfBirth;
    // }
    // calcAge: function() {
    //     // console.log(this);
    //     return 2022 - this.dob;
    // }
    calcAge: function() {
        const age = 2022 - this.dob;
        this.age = age;
        return age;
    },
    getInfoString: function() {
        console.log(`my name is ${this.firstName} my age is ${this.calcAge()} i can ${this.hasDrivingLicense ? 'drive a car' : "can't drive a car"}`);
    }
}

// console.log(ajay.calcAge(1997));
// console.log(ajay['calcAge'](1997));

// this inside object function is refered to object who called that function
// console.log(ajay.calcAge());
// console.log(ajay.calcAge());
// console.log(ajay.calcAge());
// console.log(ajay.calcAge());

console.log(ajay.calcAge());
console.log(ajay.age);
console.log(ajay.age);
console.log(ajay.age);

ajay.getInfoString();
