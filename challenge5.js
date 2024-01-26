
const calcAverage = (val1, val2, val3) => (val1 + val2 + val3) / 3;

function checkWinner() {
    const avgTeam1 = calcAverage(44, 23, 71);
    const avgTeam2 = calcAverage(88, 46, 141);
    console.log(avgTeam1);
    console.log(avgTeam2);
    if (avgTeam1 > avgTeam2 && avgTeam1 >= avgTeam2 * 2) {
        console.log('Team1 win');
    } else if (avgTeam2 > avgTeam1 && avgTeam2 >= avgTeam1 * 2) {
        console.log('team2 win');
    } else {
        console.log('No one win');
    }
}

checkWinner();