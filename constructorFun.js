
class TestClassName {
    test_propName = 'test_propValue';

    testMethod() {
        console.log('test methods');
    }
}

console.log(TestClassName.prototype);
const t1 = new TestClassName();
console.log(t1.__proto__);
console.log(TestClassName.prototype === t1.__proto__);
t1.testMethod();