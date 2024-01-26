const throttling = function(fun, delay) {
    let lastExecutionTime = 0;
    return function() {
        const context = this;
        const arg = arguments;
        const currentTime = Date.now();

        if (currentTime - lastExecutionTime >= delay) {
            fun.apply(context, arg);
            lastExecutionTime = currentTime;
        }
    }
};

const userFun = function() {
    console.log('button handler');
}

const buttonHandler = throttling(userFun, 2000);

document.getElementById('throttling').addEventListener('click', buttonHandler)


