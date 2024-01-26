function normalFun(a, b, c, d, e) {
    return a + b + c + d + e; 
}

function curry_version(x) {
    return function(y) {
        if (y === undefined) {
            return x;
        } else {
            return curry_version(x + y);
        }
    }
}

// console.log(normalFun(10, 20, 30, 40, 50));

const data = curry_version(10)(20)(30)(40)(50)();
console.log(data);
