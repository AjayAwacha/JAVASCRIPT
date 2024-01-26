function usingVar() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log("Using var:", i);
        }, 100);
    }
}

usingVar();
