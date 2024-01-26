"use strict";

const bill = [22, 292, 176, 440, 37, 105];
console.log(bill);

const getTip = (bill) =>
  bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

// create tip array
const tip = [];
for (let i = 0; i < bill.length; i++) {
  tip.push(getTip(bill[i]));
}
console.log(tip);

//create total amount array
const totalAmount = [];
for (let i = 0; i < bill.length; i++) {
  totalAmount.push(bill[i] + getTip(bill[i]));
}
console.log(totalAmount);

const avg = calcAverage(bill);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / bill.length;
}
console.log(avg);
