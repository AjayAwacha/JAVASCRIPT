// 'use strict'

var windowObjectVariable = 420;

function normalFun(a) {
    // without strcit we can access variable
    // with strict this will be undefined
    console.log(arguments);
    console.log(this?.windowObjectVariable);
}
normalFun(10);

// this is not available in arrow function
// if we use this then this is point to parent of owner of object
// in below case owner of this is window and parent of window is window itself
const arrFunExp = () => {
    console.log('arrFunExp', this);
}
arrFunExp();

blockScopeExample();
function blockScopeExample() {
    if (true) {
        function Normal() {
            console.log('This function Hoist at top of scope');
        }
    }
}