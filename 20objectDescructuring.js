const obj = {
    // userName: 'Ajay Awachar',
    friends: ['Sopan', 'Deepak', 'Laxman', 'Kelash'],
    food: {
        breakfast: ['wadasamber', 'meduwada'],
        lunch: ['riceplate', 'dalkhichadi']
    },
    openingHr: {
        "sun": {
            open: 0, close: 12
        },
        "mon": {
            open: 0, close: 24
        },
        "tue": {
            open: 0, close: 13
        },
        "wed": {
            open: 0, close: 26
        },
        "thu": {
            open: 0, close: 12
        }
    }
};

// const {userName, friends} = obj;
// console.log(userName, friends);

// const {userName: myName, friends: myFriends} = obj;
// console.log(myName, myFriends);

const {userName = 'Default Value of Name', foodedited: myFood = {} } = obj;
console.log(userName, myFood);

let a = 100;
let b = 200;
const obj2 = {a: 10, b: 20, c: 30};
const {a: mya, b: myb} = obj2;  // a and b value not change
console.log(mya, myb);
({a, b} = obj2);
console.log(a, b);

// nested object
const { openingHr } = obj;
console.log(openingHr);
const {tue: {open: openEdited, close: ClosedEdited}} = openingHr
console.log(openEdited, ClosedEdited);

const obj4 = {
    firstName: 'Ajay',
    middlename: 'Sampatrao',
    lastname: 'Awachar',
    age: 25
};

function useObjdata({firstName = 'Default FName', age = 15, lastname = 'DeafultLastname', middlename}) {
    // console.log(obj);
    // const fName = obj.firstName;
    // console.log(fName);
    console.log(firstName);
    console.log(age);
    console.log(lastname);
    console.log(middlename);
}
useObjdata(obj4);

function useObjdata2(data) {
    // below is break if data come undefined
    const {lastname, age} = data;
    console.log(lastname);
    console.log(age);
}
useObjdata2(obj4);