console.log('Prototype Inheritance');
class Parent {
    parentMethod() {
        console.log('parentMethod');
    }
}

class Child extends Parent {
    childMethod() {
        console.log('childMethod');
    }
}

const c1 = new Child();
c1.parentMethod();
console.log(Child.prototype);