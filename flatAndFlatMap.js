
const accounts = [
    {
        transactions: [100, 100, -600, 600, -1000],
    },
    {
        transactions: [700, 300, -600, -1000],
    },
    {
        transactions: [900, 200, -600, 700, -2000],
    },
    {
        transactions: [200, 500, -600]
    }
];

const transaction = accounts.map( ele => ele.transactions);
console.log(transaction);
const allTransactions = transaction.flat();
console.log(allTransactions);
const result = allTransactions.reduce((acc, ele) => {
    return acc + ele
}, 0);
console.log(result);

// method chaining
console.log(accounts.map( ele => ele.transactions).flat().reduce((acc, ele) => acc + ele, 0));

//useing flatMap
console.log(accounts.flatMap( ele => ele.transactions).reduce((acc, ele) => acc + ele, 0));


const arnds = ['A', 'B', 'C', 'D'];
arnds.splice(2);
console.log(arnds);
