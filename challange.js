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

const [player1, player2] = game.players;
console.log(player1);
console.log(player2);

const [gk, ...fk] = player1;  // use rest parameter
console.log(gk);
console.log(fk);

const allPlayers = [...player1, ...player2]; // spread operator
console.log(allPlayers);

const players1Final = [...player1, 'ajay', 'sopan', 'laxman'];
console.log(players1Final);

const {team1 , x: drow, team2} = game.odds;
console.log(team1);
console.log(drow);
console.log(team2);

function printGoals(...arr) {
    console.log(arr);
    for (let i = 0; i< arr.length; i++) {
        console.log(`${arr[i]} scored ${game.score}`);
    }
}
printGoals(...game.scored);

console.log(game.odds.team1 > game.odds.team2 && 'team1 is win');
console.log(game.odds.team1 < game.odds.team2 && 'team2 is win');