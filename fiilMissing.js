const arr = [1, 4, 8, 10];

for(let i = 1; i <= 10; i++) {
    if (!arr.includes(i)) {
        arr.push(i);
    }
}
console.log(arr.sort());