
// problem statment 
/* 
calculate Average of two team
those average is grater win the trofi but must have average grater than 100
if both team have same average and more than 100 than both team win the trifi
if none of them average grater than 100 no one will win
  */

const ajayAverage = (10 + 112 + 90) / 3;
const sopanAverage = (10 + 200 + 89) / 3;
console.log(ajayAverage, sopanAverage);

if (ajayAverage > sopanAverage && ajayAverage >= 100) {
    console.log('Ajay Win Trofi');
} else if (sopanAverage >  ajayAverage && sopanAverage >= 100) {
    console.log('sopan win the trofi');
} else if (ajayAverage === sopanAverage && ajayAverage >= 100) {
    console.log('both win the match')
} else {
    console.log('No one will');
}