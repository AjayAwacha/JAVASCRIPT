function outer() {
    debugger
    let outerVarible = 'outerVarible';

    return function inner() {
        debugger
        console.log('outerVarible ', outerVarible);
    }
}

const innerRef = outer();
innerRef();