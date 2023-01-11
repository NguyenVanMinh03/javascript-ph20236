const game = {
     team1:'bayen munich',
     team2:'borussis  dortmund',
     players:[
          [
               'minh1',
               'minh2',
               'minh3',
               'minh4',
               'minh5',
               'minh6',
               'minh7',
               'minh8',
               'minh9',
               'minh10',
          ],
          [
               'minh11',
               'minh22',
               'minh33',
               'minh44',
               'minh55',
               'minh66',
               'minh77',
               'minh88',
               'minh99',
               'minh1010',
          ],
     ],
     socre:'4:0',
     scored:['minh','sơn','tiến','đức'],
     date:'nov 9th , 2037',
     odds:{
          team1: 1.33,
          x: 3.25,
          team2: 6.5,

     }
};

// 1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);
// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}