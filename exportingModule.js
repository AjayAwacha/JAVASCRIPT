console.log('Exporting Module');

// export single variable
export const any_arr = [1, 2, 3, 4, 5, 6];
const any_str = 'sdfs';

// export single method
export const testFun = function() {
    console.log(`this is text from exporting function ${any_str}`);
}

// export multiple variable
const varOne = 'one';
const varTwo = 'Two';
export {varOne, varTwo};

// exporting multiple variable
const oneFun = function() {
    console.log(`this is text from exporting function One`);
}
const twoFun = function() {
    console.log(`this is text from exporting function Two`);
}
export {oneFun, twoFun as editedMethod};

export default function() {
    console.log('this is export default function');
};