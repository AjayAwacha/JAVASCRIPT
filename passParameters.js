const primitive = 'some primitive val';
const ref = {
    fullName: 'Ajay Awachar',
    passportNo: 2343534
};

function fun(str, obj) {
    str = 'edited string';
    obj.fullName = `mr. ` + obj.fullName;
}

fun(primitive, ref);

console.log(primitive);
console.log(ref);