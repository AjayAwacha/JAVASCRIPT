const promise1 = Promise.resolve('promise1');
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise2')
    }, 1000)
});
const promise3 = Promise.reject(new Error('fail'));

// const promiseAllExample = Promise.all([promise1, promise2]);
// promiseAllExample.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// const promiseAllSettle = Promise.allSettled([promise1, promise2, promise3]);
// promiseAllSettle.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

const promiseAny = Promise.any([promise1, promise2]);
promiseAny.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})