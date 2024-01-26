
// const ajay = {
//     fullName: 'Ajay Awachar',
//     mass: 92,
//     height: 1.95
// };

// const sopan = {
//     fullName: 'Sopan Renge',
//     mass: 92,
//     height: 1.95
// };

// function calcBMI(obj) {
//     return obj.mass / obj.height * obj.height;
// }
// function printChallengeString() {
//     const ajayBMI = calcBMI(ajay);
//     const sopanBMI = calcBMI(sopan);
//     if (ajayBMI > sopanBMI) {
//         console.log(`${ajay.fullName}'s (${ajayBMI})BMI is heigher than ${sopan.fullName}'s (${sopanBMI})BMI`);
//     } else if (ajayBMI < sopanBMI) {
//         console.log(`${sopan.fullName}'s (${sopanBMI})BMI is heigher than ${ajay.fullName}'s (${ajayBMI})BMI`);
//     } else {
//         console.log(`both compatitor's BMI are same ${ajay.fullName}'s BMI is ${ajayBMI} and ${sopan.fullName}'s BMI is ${sopanBMI}`);
//     }
// }
// printChallengeString();

// Alternative way

const ajay = {
    fullName: 'Ajay Awachar',
    mass: 92,
    height: 2.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const sopan = {
    fullName: 'Sopan Renge',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

ajay.calcBMI();
sopan.calcBMI();

if (ajay.bmi > sopan.bmi) {
    console.log(`${ajay.fullName}'s (${ajay.bmi})BMI is heigher than ${sopan.fullName}'s (${sopan.bmi})BMI`);
} else if (sopan.bmi > ajay.bmi) {
    console.log(`${sopan.fullName}'s (${sopan.bmi})BMI is heigher than ${ajay.fullName}'s (${ajay.bmi})BMI`);
}