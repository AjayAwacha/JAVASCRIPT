// 1] private property
// 2] public property
// 3] private method
// 4] public method

class Account {

    // private property
    #pin;
    #transaction = []

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;

        console.log(`Thanks for creating Account mr. ${this.owner}`);
    }

    diposite(val) {
        this.#transaction.push(val);

        // to make method chainable
        return this;
    }

    withdrow(val) {
        this.diposite(-val);

        // to make method chainable
        return this;
    }

    // private method
    #approveLoan() {
        return true;
    }

    applyLoan(amount) {
        if(this.#approveLoan()) {
            console.log('Loan Approved');
            this.#transaction.push(amount);
        }

        // to make method chainable
        return this;
    }

    getTransaction() {
        return this.#transaction;
    }
}

const acc1 = new Account('Ajay', 'INR', 1111);
acc1.diposite(222);
acc1.diposite(420);
acc1.withdrow(230);
acc1.applyLoan(1000);
console.log(acc1);

// below fields must not accible from outside class
// console.log(acc1.#pin); 
// console.log(acc1.#transaction);
// console.log(acc1.#approveLoan()); 

// chaining
acc1.diposite(60).diposite(60).withdrow(100).applyLoan(76).withdrow(89);
console.log(acc1.getTransaction());

// final challange
class CarCL {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accessor() {
        this.speed += 10;
        console.log(`current speed of ${this.make} is ${this.speed} km/h`);

        //to make method chainable
        return this;
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

class EVCL extends CarCL {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery() {
        this.#charge += 10;
        console.log(`${this.make} charging is ${this.#charge}%`);
    }

    brake() {
        this.speed -= 10;
        console.log(`${this.make} going at ${this.speed} km/h, with charge at ${this.#charge}%`);
    }
}

const charge1 = new EVCL('Tesla', 120, 50);
console.log(charge1);
// console.log(charge1.#charge); //Not Accable from outside the class

charge1.accessor().chargeBattery();
charge1.brake();
