
console.log(Math.sqrt(25));
console.log(5 ** 2);      // it same like 5 * 5
console.log(5 ** 3);      // it same like 5 * 5 * 5 //Exponentinal
console.log(Math.max(6, 10, 25, 5));
console.log(Math.min(6, 10, 25, 5));
console.log(Math.PI);

// Rounding Integer

// trunc method remove floating number
console.log(Math.trunc(14.9));
console.log(Math.trunc(14.1));

// floor
console.log(Math.floor(14.9));
console.log(Math.floor(14.1));

// trunc and floor method work similar for positive number
// but it wor different with negative number
console.log(Math.trunc(-14.1));
console.log(Math.floor(-14.1));

// round 
console.log(Math.round(14.9));
console.log(Math.round(14.1));

// ceil
console.log(Math.ceil(14.9));
console.log(Math.ceil(14.1));


// rounding decimal
console.log((3.8000494377344).toFixed(4));

// Reminder operator
console.log(10 % 2);
console.log(9 % 2);

console.log(10 % 2 === 0 ? `Even Number` : `odd number`);

// creating date with new Date

// 1] withou argument give date with Local timezone
console.log(new Date());

// 2] with string
// create date with UTC(cordinated universal timezone)
console.log(new Date('2022-12-21'));
console.log(new Date('2022-12-21T21:00:00.000Z'));


// only this string formate give time with local timezone
console.log(new Date('2022-12-21T21:00'));

// 3] by passing parameter
// create date with local timezone
console.log(new Date(2022, 11, 21));

// 4] passing milisecound from 1970 5hr 30min
// give date with Local timezone
console.log(new Date(0));


// UTC timezone means ahead of 5hr 30 min


// operation on date
const date1 = new Date(2022, 11, 10);
const date2 = new Date(2022, 11, 31);
comparingDate(date1, date2);

diffBtnDaysInDate(date1, date2);

function comparingDate(date1, date2) {
    const date1Milisecound = date1.getTime();
    const date2Milisecound = date2.getTime();
    // getTime method return milisecound from 1970 5hr 30min
    if(date1Milisecound > date2Milisecound) {
        console.log(`date1 is grater than date2`);
    } else if (date1Milisecound === date2Milisecound) {
        console.log(`date1 is equal to date2`);
    } else {
        console.log(`date2 is grater than date1`);
    }

    console.log(+date1, + date2);
    console.log(Number(date1), Number(date2));
    console.log(date1Milisecound, date2Milisecound);
}

function diffBtnDaysInDate(date1, date2) {
    const date1Milisecound = date1.getTime();
    const date2Milisecound = date2.getTime();

    const diffInMilisecound = Math.abs(date1Milisecound - date2Milisecound);

    const noOfDays = diffInMilisecound / (24 * 60 * 60 * 1000);

    console.log(noOfDays);
}

// setTimeout

const arr = ['first', 'secound', 'third', 'fourth', 'fifth', 'sixth'];
const bajriTimeout = setTimeout((...restParam) => {
    console.log(`here is your Bajri chi bhakar . and your parameter array is : ${restParam}`);
}, 3000, ...arr);

console.log('waiting...');
if (arr.includes('sixth')) {
    clearTimeout(bajriTimeout);
}


