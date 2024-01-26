const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

let str = '';
for (const [index, name] of game.scored.entries()) {
    str += `Goal ${index + 1}: ${name}, `;
}
console.log(str);

const valArr = Object.values(game?.odds || {});
let sum = 0;
for (const el of valArr) {
    sum += el;
}
console.log(sum / valArr.length);

let str2 = '';
for (const [key, value] of Object.entries(game.odds)) {
    const team = key === 'x' ? 'drow' : `victory ${game[key]}`;
    str2 += `odd of ${team} : ${value} \n`;
}
console.log(str2);