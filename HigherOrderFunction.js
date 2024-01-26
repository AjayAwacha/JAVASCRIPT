
// pass function as an argument
function oneWord(str) {
    return str.replace(/ /g,'');
}
function firstWordUpperCase(str) {
    const [first, ...other] = str.split(' ');
    return first.toUpperCase() + ' ' + other.join(' ');
}
function transform(anyString, fun) {
    console.log(fun(anyString));
}
transform('this is test function transform', firstWordUpperCase);
transform('my name is Ajay Awachar', oneWord);


//return function as an argument
function greeding(inStr) {
    return function(str) {
        return `${inStr} ${str}`;
    }
}
const returnFun = greeding('hii');
console.log(returnFun('Ajay'));
console.log(returnFun('Sopan'));
