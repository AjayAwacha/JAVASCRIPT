'use strict'

// make XML http request
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/alpha/ind');
request.send();

request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    console.log(data);
})


// calback hell
// proble with callback hell is to much duplicate code
// very hard to understand and maintain may create buge in our code
// setTimeout(()=> {
//     console.log('1 sec completed');
//     setTimeout(()=> {
//         console.log('2 sec completed');
//         setTimeout(()=> {
//             console.log('3 sec completed');
//             setTimeout(()=> {
//                 console.log('4 sec completed');
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000);

// to solve this callback hell problem we use promises in js

// const response = fetch('https://restcountries.com/v3.1/alpha/ind');
// console.log(response);

function getCountryDataByCode(code) {
    const res = fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    // res.then(data => data.json(), err => console.log(err))
    res.then(data => {
        if (!data.ok) {
            throw new Error('country code not found');
        }
        console.log(data);
        return data.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
}
// getCountryDataByCode('ind');
// we can handle promise using then method

const btn = document.getElementById('country');
btn.addEventListener('click', () => {
    getCountryDataByCode("sdfgdf");
})

// challange
// function whereAmI(lat, long) {
//     let reverseGeocodingData;
//     const rgData = fetch(`https://geocode.xyz/${lat},${long}?geoit=xml&auth=your_api_key`);
//     rgData
//     .then(res => {
//         console.log(res);
//     })
//     .then(data => {
//         reverseGeocodingData = data;
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     return reverseGeocodingData;
// }
// console.log(whereAmI(51.50354, -0.12768));


// Event Loop in Practice
console.log('start test');
setTimeout(() => {
    console.log('0 sec completed.');
}, 0);
const prom = new Promise((resolve, reject) => {
    resolve('promise resolve')
})
prom.then((res) => {
    console.log(res);
});
console.log('end test');

// creating promise
const prom2 = new Promise((resolve, reject) => {
    const status = true;
    if (status) {
        resolve('promise resolve2');
    } else {
        reject('promise reject2');
    }
})
prom2.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

const wait = function(time) {
    return new Promise((resolve) => {
        setTimeout(resolve(`i am wait for ${time} sec`), time * 1000);
    });
}

wait(1).then((resp) => {
    console.log(resp);
    return wait(2);
}).then((resp) => {
    console.log(resp);
    return wait(3);
}).then((resp) => {
    console.log(resp);
    return wait(4);
}).then((resp) => {
    console.log(resp);
});

console.log('---------------------------------------------');
//consuming promises with async await
// handling error using try catch
async function getCountryDataByCodeModifiedWay(code) {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        const response = await res.json();
        console.log(response);
    } catch (err){
        console.log(err);
    }
}
getCountryDataByCodeModifiedWay('ind');
console.log('this is text');
