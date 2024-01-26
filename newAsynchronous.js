// synchronous code
console.log('Start');
function synchronousCode() {
    console.log('Synchronous Test');
}
synchronousCode();
console.log("End");

// Asynchronous code
console.log('Start');

setTimeout(() => {
    console.log('Asynchronous Test');
}, 1000)
console.log("End");

// to handle asynchronous code previously we use callback
function fetchData(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          callback(xhr.responseText);
        }
      };
    
    xhr.open("GET", url);
    xhr.send();
}
function callbackExample(response) {
    // console.log('callback Text ', response);
}
fetchData('https://restcountries.com/v3.1/alpha/ind', callbackExample);

// creating a promise
const newProm = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('resolve');
        reject(new Error('Custom error'));
    }, 1000);
})

// Then method is called when promise is resolved
newProm.then((res) => {
    console.log('inside then ',res);
})
// catch method is called when it rejected
.catch((err) => {
    console.log('inside catch ', err);
})

//promise chain
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
}).catch((err) => {
    console.log(err);
});

// promise.all
const prom1 = new Promise((resolve, reject) => {
    resolve('resolve1');
});
const prom2 = new Promise((resolve, reject) => {
    reject('resolve2');
});
const prom3 = new Promise((resolve, reject) => {
    resolve('resolve3');
});
Promise.all([prom1, prom2, prom3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})

Promise.resolve('create already resolved promise');
Promise.resolve('create already rejected promise');