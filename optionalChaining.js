const obj = {
    key: {
        jhg: null
    },
    demoFun: function(arg1, arg2) {
        return 'dfgvcbvn';
    }
}

// difference between && ?.
// ?. check if property present or not otherwise return undefined if all property not present
// if all property preset then only return actual vaue
// don't check next proprty only if he got null or undefined ('',NaN,undefined,false are not considered falsy value)
console.log((obj && obj.key && obj.key.jhg && obj.key.jhg.kjh) ?? 'execute when got falsy value');
console.log(obj?.key?.jhg?.kjh ?? 'execute when got falsy value');

//if function exist then only call
console.log(obj.demoFun?.(10, 20));
console.log(obj.sdgdfg?.()); // it don't give error
// obj.sdgdfg();  // it gives erroe 

const arr = null;
console.log(arr?.[0]);  // it gives undefined
// console.log(arr.length); it gives error

