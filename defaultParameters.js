
const bookings = [];

const makeBooking = function (flightNo = 'ACFLI',
    noOfPassanger = 1,
    price = 199 * noOfPassanger) {
    // based on ES5
    // flightNo = 'AE';
    // noOfPassanger = 1;
    // price = 199 * noOfPassanger;

    const booking = {
        flightNo,
        noOfPassanger,
        price
    };
    bookings.push(booking);
    return bookings;
}
console.log(makeBooking());
console.log(makeBooking('FKJ56',2));