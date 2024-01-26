// import expDefFun, {any_arr, testFun, varOne, varTwo, oneFun, editedMethod} from './exportingModule.js';

// console.log('Importing Module');
// console.log(any_arr);
// testFun();
// console.log(varOne);
// console.log(varTwo);
// oneFun();
// editedMethod();

// import everiting inside single varlue
// import * as expFile from './exportingModule.js';

// console.log(expFile.any_arr);
// expFile.testFun();
// console.log(expFile.varOne);
// console.log(expFile.varTwo);
// expFile.oneFun();
// expFile.editedMethod();

// expDefFun();

import defVar, { single_variable, mul_varFirst, mul_varSecound, firFun, secFun } from "./exportingTest.js";

defVar.funOne();
defVar.funTwo();
console.log(single_variable, mul_varFirst, mul_varSecound);
firFun();
secFun();
