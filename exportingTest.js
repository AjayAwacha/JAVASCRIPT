export const single_variable = 'Export Single variable';

const mul_varFirst = 'multiple variable var1';
const mul_varSecound = 'multiple variable var2';

export {
    mul_varFirst,
    mul_varSecound
}


export function regularFunction() {
    console.log('regular Function');
}

export const funExpression = function() {
    console.log('Function Expression');
}

const firFun = function() {
    console.log('First Function');
}

const secFun = function() {
    console.log('Secound Function');
}

export {
    firFun,
    secFun
}


export default {
    funOne: firFun,
    funTwo: secFun
}