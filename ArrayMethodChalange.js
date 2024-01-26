
const dogAge = [16, 6, 10, 5, 6, 1, 4];


function calcHumanAverage(ages) {
    const humanAges = ages.map(ele => ele <= 2 ? ele * 2 : 16 + ele * 4);
    const adultHuman = humanAges.filter( ele => ele >= 18);
    const result = adultHuman.reduce((res, ele) => res + ele / adultHuman.length);
    return result;
}
console.log(calcHumanAverage(dogAge));

const ffghfh = [100, -200, 600, -56, 345, -87];

const result = ffghfh.filter(ele => ele > 0)
.map(ele => ele * 54)
.reduce((acc, ele) => {
    return acc + ele   
}, 0);
console.log(result);

