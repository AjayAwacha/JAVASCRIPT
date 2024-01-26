// first way of creating object
// duplicate code is here and same structure use many times

const ajay = {
    name: 'Ajay',
    dob: 1997,
    calcAge: function() {
        return 2022 - this.dob;
    }
};

const sopan = {
    name: 'Sopan',
    dob: 1996,
    calcAge: function() {
        return 2022 - this.dob;
    }
}

console.log(ajay);
console.log(sopan);
console.log(`Age of ${ajay.name} is ${ajay.calcAge()}`);
console.log(`Age of ${sopan.name} is ${sopan.calcAge()}`);

// create object using coustructor function

function Person(name, dob) {
    this.name = name,
    this.dob = dob
    // this.calcAge = function() {
    //     console.log(2022 - this.dob);
    // }
}

const laxman = new Person('Laxman', 1997);
const suraj = new Person('Suraj', 1993);

console.log(laxman);
console.log(suraj);


// prototype

// add method to prototype object
Person.prototype.calcAge = function() {
    return 2022 - this.dob;
}
// add property to prototype object
Person.prototype.work = 'IT';

console.log(laxman);
console.log(suraj);
// console.log(laxman.calcAge());
// console.log(suraj.calcAge());

console.log(laxman.__proto__);
console.log(suraj.__proto__);

// it return true because dob is property suraj object
console.log(suraj.hasOwnProperty('dob'));

// it return false because it don't find in suraj object so it check inside suraj.__proto__ it contain 
// work property but not contain hasOwnProperty to check

console.log(suraj.hasOwnProperty('work'));

// console.log(laxman.__proto__ === Person.prototype);
// console.log(suraj.__proto__ === Person.prototype);

// protypical Inheritance on build in Object
console.log(suraj.__proto__);
console.log(suraj.__proto__.__proto__);
console.log(suraj.__proto__.__proto__.__proto__);

const arr = [3, 6, 12, 24, 3, 6, 24];
console.log(arr.__proto__);
console.log(Array.prototype);
console.log(Array.prototype === arr.__proto__);

// add method inside build in Array Object
Array.prototype.unique = function() {
    return [...new Set(this)];
}

console.log(Array.prototype);
console.log(arr.__proto__);
console.log(arr.unique());

// challange
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
    // this.accelator = function() {
    //     this.speed += 10;
    //     console.log(`new speed of car is ${this.speed} km/h`);
    // };
    // this.brake = function() {
    //     this.speed -= 10;
    //     console.log(`new speed of car is ${this.speed} km/h`);
    // };
}
Car.prototype.accelator = function() {
    this.speed += 10;
    console.log(`current speed of ${this.make} is ${this.speed} km/h`);
};
Car.prototype.brake = function() {
    this.speed -= 10;
    console.log(`current speed of ${this.make} is ${this.speed} km/h`);
};

const newCar = new Car('BMW', 120);
newCar.accelator();
newCar.brake();

// ES6 classes

// class declaration
// class PersonCL {};

// class Expression
// const PersonCL = class {}

class PersonCL {
    constructor(name, dob) {
        this.name = name;
        this.dob = dob;
        this.age = 0;
    }

    // all methods inside class, declared outside constructor are goes to prototype object of class
    calcAge() {
        return 2022 - this.dob;
    }
}

const p1 = new PersonCL('p1', 1998);
console.log(p1);
console.log(p1.calcAge());

// Getter and Setter Methods

class Account {
    constructor(name) {
        this.name = name;
    }

    // Without Getter and Setter
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    // With Getter and Setter
    get name() {
        // to remove name conflict use _name
        return this._name;
    }

    set name(name) {
        // to remove name conflict use _name
        this._name = name;
    }

    // static Methods
    // this method not added to prototype object
    static hey() {
        console.log('this is static method');
    }
}

const obj = new Account('Ajay');

// without Getter and Setter
// console.log(obj.getName());
// obj.setName('Sopan');
// console.log(obj.getName());

// using Getter and Setter
console.log(obj.name);
obj.name = 'Sopan';
console.log(obj.name);

console.log(obj);

// call static method
Account.hey();

// Object.create()
const user = {
    fName: 'Ajay',
    lName: 'Awachar',
    dob: 1997,
    age: function() {
        return 2022 - this.dob;
    }
}
console.log(user);

// create Object connscted to prototype object
const userProto = Object.create(user);
console.log(userProto);

// challange 2
class CarCL {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accessor() {
        this.speed += 10;
        console.log(`current speed of ${this.make} is ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 10;
        console.log(`current speed of ${this.make} is ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const bmw = new CarCL('BMW', 120);
bmw.accessor();
bmw.brake();

console.log(bmw.speedUS);
bmw.speedUS = 75;
console.log(bmw.speedUS);

// Inheritance btn classes
class PersonCls {
    constructor(name, dob) {
        this.name = name;
        this.dob = dob;
    }

    calcAge() {
        return 2022 - this.dob;
    }
}

class Student extends PersonCls {
    constructor(name, dob, course) {
        // with repeated code
        // this.name = name;
        // this.dob = dob;

        // without repeat code
        super(name, dob)
        this.course = course;
    }

    introduction() {
        console.log(`my name is ${this.name} my dob is ${this.dob} and i am studing ${this.course} course`);
    }
}
const std = new Student('Ajay Awachar', 1997, 'Full Stack Java Developer');
console.log(std);
console.log(std.calcAge());
std.introduction();

// Inheritance brn construction function

function PersonFun(name, dob) {
    this.name = name;
    this.dob = dob;
}
PersonFun.prototype.calcAge = function() {
    return 2022 - this.dob;
}

function StudentFun(name, dob, course) {
    PersonFun.call(this, name, dob); // add paret class Instance property
    this.course = course;
}
StudentFun.prototype = Object.create(PersonFun.prototype);
StudentFun.prototype.introduction = function() {
    console.log(`my name is ${this.name}, my dob is ${this.dob} and i am studing course ${this.course}`);
}


const stu_fun = new StudentFun('Ajay Awachar', 1997, 'Full Stack Java Developer');
console.log('----------------------------------');
console.log(stu_fun.calcAge());
stu_fun.introduction();

// inheritance of object

const person = {
    name: 'Ajay Awachar',
    dob: 1997,
    calcAge: function() {
        return 2022 - this.dob;
    }
}
const personProto = Object.create(person);
console.log(personProto);

const studentProto = Object.create(personProto);
studentProto.__proto__.info = function() {
    console.log(`my name is ${this.name} my dob is ${this.dob}`);
}
console.log(studentProto.calcAge());
studentProto.info();

