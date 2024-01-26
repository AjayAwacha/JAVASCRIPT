var x = 10;
let y = 10;
const z = 10;

function var_duff() {
    console.log(x);
    // console.log(y);  TDZ
    // console.log(z);  TDZ
 
    var x = 100;
    let y = 100;
    const z = 100;

    console.log(x);
    console.log(y);
    console.log(z);

    if (true) {
        var x = 1000;
        let y = 1000;
        const z = 1000;

        console.log(x);
        console.log(y);
        console.log(z);
    }

    console.log(x);
    console.log(y);
    console.log(z);
}

var_duff();

console.log(x);
console.log(y);
console.log(z);