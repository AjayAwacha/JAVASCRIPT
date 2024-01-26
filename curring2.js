function normal(a, b, c, d) {
    return a + b + c + d;
}
console.log(normal(10, 20, 30, 40));

function curring(a) {
    return function(b) {
        if (b === undefined) {
            return a;
        } else {
            return curring(a + b);
        }
    }
}
console.log(curring(10)(20)(30)(40)());