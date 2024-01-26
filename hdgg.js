function outer(a) {
    console.log(arguments[0]); 

    return function() {
        console.log(arguments[0]);  // inner function have its own argument
                                    // object
        console.log(a);
    }
}
const clouser = outer(10);
clouser();