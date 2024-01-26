const globalVariable = 'globalVariable';

function funFirst() {
    const funFirstvariable = 'funFirstvariable';
    console.log(globalVariable);
    console.log(funFirstvariable);
    funSecound();
}

function funSecound() {
    const funSecoundvariable = 'funSecoundvariable';
    console.log(globalVariable);
    // console.log(funFirstvariable); // not defined
}

funFirst();