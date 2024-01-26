
const calcTip = bill => bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

const billArr = [125, 555, 44];

const tipArr = [calcTip(billArr[0]), calcTip(billArr[1]), calcTip(billArr[2])];
console.log(tipArr);

const totalBillArr = [calcTip(billArr[0]) + billArr[0], calcTip(billArr[1]) + billArr[1], calcTip(billArr[2]) + billArr[2]];
console.log(totalBillArr);