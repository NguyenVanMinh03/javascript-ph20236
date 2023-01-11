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

const [players1 ,players2] = game.players;
console.log(players1 , players2);


const [gk, ...fileddplayers] = players1;
console.log(gk,fileddplayers);



const allplayers = [...players1,...players2];
console.log(allplayers);

const  playersfinal = [...players1 , 'thiago' ,'coutinho','perissic' ];

const {
   odds:{team1 ,x:draw,team2}, 
} = game;
 console.log(team1 ,draw , team2);

 const printgoals = function (...players){
     console.log('');
     console.log(`${players.length} goals were scord`);
 }

printgoals (...game.scored);
team1 < team2 && console.log('team1 is more likely to win');
team1 > team2 && console.log('team2 is more likely to win');