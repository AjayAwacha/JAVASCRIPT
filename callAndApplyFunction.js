
function booking(fullName, seatNo) {
    console.log(`${fullName} book a ticket with seat No: ${seatNo} airline name: ${this.airline} and code: ${this.code}`);
    const bkkingObj = {
        airline: this.airline,
        code: this.code,
        fullName,
        seatNo
    }
    this.bookings.push(bkkingObj);
}

const spiceJect = {
    airline: 'spicejet',
    code: 'SPICE-102',
    bookings: [],
    // booking(fullName, seatNo) {
    //     console.log(`${fullName} book a ticket with seat No: ${seatNo} airline name: ${this.airline} and code: ${this.code}`);
    //     const bkkingObj = {
    //         airline: this.airline,
    //         code: this.code,
    //         fullName,
    //         seatNo
    //     }
    //     this.bookings.push(bkkingObj);
    // }
}

const airAsia = {
    airline: 'airAsia',
    code: 'as-100',
    bookings: [],
}

// const bookTicket = spiceJect.booking;
const bookTicket = booking;

// spiceJect.booking('Ajay Awachar', 420);
// spiceJect.booking('Sopan Renge', 421);

// here inside bookTicket methods this will point to spiceJect object

// bookTicket.call(spiceJect, 'Ajay Awachar', 420);
// bookTicket.apply(spiceJect, ['Akshay Kumar', 100]);

// bookTicket.call(airAsia, 'Sopan Renge', 421);
// bookTicket.apply(airAsia, ['Kumar Sanu', 101]);

// using bind method
// bind method return function with bind this
const bookAS = bookTicket.bind(airAsia);
const bookSJ = bookTicket.bind(spiceJect);

bookAS('Ajay Awacahr', 01);
bookAS('Sopan Renge', 02);

bookSJ('Kumar Sanu', 04);
bookSJ('Akshay Kumar', 05);

console.log(spiceJect);
console.log(airAsia);

// with event handler

spiceJect.plans = 300;
spiceJect.buyPlan = function() {
    console.log(this);
    this.plans++;
    console.log(this.plans);
}
// we can not use call and apply methods here because they call the function 
// we can use bind method because they return a function
document.getElementById('buy').addEventListener('click', spiceJect.buyPlan.bind(spiceJect));

console.log(spiceJect);

// bind with arrow function
const addTax = (val, rate) => val + val * rate;
console.log(addTax(0.1, 100));

const bndTax = addTax.bind(null, 0.6);
// call methods with val 0.6
console.log(bndTax(200));
console.log(bndTax(300));

function testAddTax(val) {
    return function(rate) {
        return val + val * rate;
    }
}
const testAddTax23 = testAddTax(2.3);
console.log(testAddTax23(200));
console.log(testAddTax23(300));