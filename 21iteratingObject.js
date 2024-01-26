const obj = {
    name: 'sdfd',
    mob: 6456546456,
    openingHour: {
        mon: {
            open: 09,
            close: 12
        },
        tue: {
            open: 19,
            close: 22
        },
        wed: {
            open: 04,
            close: 24
        },
        thu: {
            open: 18,
            close: 45
        }
    }
}

const keyArr = Object.keys(obj.openingHour);
let str = `given restaurant open in ${keyArr.length} days. `;
for (const ele of keyArr) {
    str += `${ele} `;
}
console.log(str);

const valArr = Object.values(obj.openingHour);
for(const {open, close} of valArr) {
    console.log(open, close);
}

const keyValArray =  Object.entries(obj.openingHour);
for(const [key, {open, close}] of keyValArray) {
    console.log(key);
    console.log(open);
    console.log(close);
}


