const arr = ['first', 'sopan', 'laxman', 'ajay', 'deepak', 'pradumn'];
const numArr = [10, 400000, 20000, 70, 30];

console.log(arr.sort());
console.log(numArr.sort());


console.log("Assending order");
console.log(numArr.sort((a, b) => a - b));

console.log("Decending order");
console.log(numArr.sort((a, b) => b - a));

// way of creating array
const firstWay = [10, 20, 40];
console.log(firstWay);

const secoundWay = new Array(10, 20, 40);
console.log(secoundWay);

const thirdWay = new Array(3);
thirdWay.fill(10);
console.log(thirdWay);

const accounts = [
    {
        name: 'Sopan Renge',
        movements: [100, 1000, -600, 6000, -1000],
    },
    {
        name: 'Laxman Chawan',
        movements: [700, 3000, -600, -1000],
    },
    {
        name: 'Shree Kamle',
        movements: [900, 2000, -600, 700, -2000],
    },
    {
        name: 'Ajay Awachar',
        movements: [200, 5000, -600]
    }
];

// Practice 1
// sum of find all movements creadated balance
const allCreadatedBalance = accounts.flatMap(ele => ele.movements).filter(mov => mov > 0).reduce((acc, tran) => {
    return acc + tran;
}, 0);
console.log(allCreadatedBalance);

// Practice 2
// how many entries are creadated with more than and equal to 1000
console.log(accounts.flatMap(ele => ele.movements).filter(tran => tran >= 1000).length);

console.log(accounts.flatMap(ele => ele.movements).reduce((acc, mov) => mov >= 1000 ? acc + 1 : acc ,0));

//Practice 3
// create object contain sum of creadated and dibated balance
const balanceObj = accounts.flatMap(ele => ele.movements).reduce((acc, ele) => {
    ele > 0 ? acc.creadated += ele : acc.debated += ele;
    return acc; 
}, {creadated: 0, debated: 0})
console.log(balanceObj);

// Practice 4
// create a function which accept any string and convert them it capitalize
function convertCapatilize(str) {
    // const incomingNames = str.split(' ');
    // const formatedNames = incomingNames.map(name => name.at(0).toUpperCase() + name.slice(1));
    // return formatedNames.join(' ');

    // with method chaining
    return str.split(' ').map(name => name.at(0).toUpperCase() + name.slice(1).toLowerCase()).join(' ');
}
console.log(convertCapatilize('ajay sampatrao awachar'));
console.log(convertCapatilize('dfgd sdgd asdg'));


const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => {
    const recomandedFood = dog.weight ** 0.78 * 28;
    dog.recomandedFood = Math.trunc(recomandedFood);
});
console.log(dogs);

const sarahDogObj = dogs.find(dog => {
    return dog.owners.includes('Sarah');
});
console.log(sarahDogObj.recomandedFood > sarahDogObj.curFood ? `eating to little` : `eating to much` );

const dogWhoEatingToMuch = dogs.filter(dog => {
    return dog.curFood > dog.recomandedFood;
}).map(ele => ele.owners).flat();
console.log(dogWhoEatingToMuch);

const dogWhoEatingToLittle = dogs.filter(dog => {
    return dog.curFood < dog.recomandedFood;
}).map(ele => ele.owners).flat();
console.log(dogWhoEatingToLittle);

console.log(`${dogWhoEatingToMuch.join(' and ')} dogs eating to much and ${dogWhoEatingToLittle.join(' and ')} dogs eating to little`);

const exactEatRecomanded = dogs.some(ele => ele.curFood === ele.recomandedFood);
console.log(exactEatRecomanded);

//current > (recommended * 0.90) && current < (recommended * 1.10)
function checkWhetherEatOk() {
    const status = dogs.some(ele => ele.curFood > (ele.recomandedFood * 0.90) && ele.curFood < (ele.recomandedFood * 1.10));
    return status;
}
console.log(checkWhetherEatOk());