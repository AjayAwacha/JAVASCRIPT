
(function () {
    console.log('This is regular function and execute immediatlly');
})();

(() => console.log('this is arraw function and invove immediatlly'))();

// closures function

function secureBooking() {

    let passangerCount = 0;

    return function() {
        passangerCount++;
        console.log(`passangers count is :: ${passangerCount}`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();


// closure Ex 1

let f;

const a = function() {
    const n = 23;
    f = function() {
        console.log(n * 2);
    }
}

const b = function() {
    const m = 50;
    f = function() {
        console.log(m * 2);
    }
}

a();
f();

// re-assigning f variable with another function having access to another function outer scope
b();
f();


// Example 2

const boardingPassangers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function() {
        console.log(`we are complete bording of passanger there are three group each have ${perGroup} passangers`);
    }, wait * 1000);

    console.log(` wait for ${wait} secounds`);
}

boardingPassangers(180, 6);