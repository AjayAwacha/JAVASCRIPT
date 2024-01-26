// what is debouncing

const debouncing = function (fun, delay) {
    let timer;
    return function () {
        const context = this;
        const arg = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fun.apply(context, arg)
        }, delay);
    }
}

const userFunction = function(event) {
    console.log(event.target.value);
    console.log('API Call');
}

const inputHandler = debouncing(userFunction, 2000);

document.getElementById('debouncing').addEventListener('input', inputHandler)