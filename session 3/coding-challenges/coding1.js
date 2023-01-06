const calcavetage = (a,b,c) => (a+b+c)/3;
console.log (calcavetage(3,4,5));


let scoredolphins = calcavetage(44,23,71);
let scorekoalas = calcavetage(65,54,49);
console.log (scoredolphins , scorekoalas);

const checkwinner = function (avgdolphins , avgkoalas) {
     if (avgdolphins >= 2 * avgkoalas) {
          console.log(  `dolphins win (${avgdolphins }) vs ${avgkoalas}`);
          
     } else if(avgkoalas >= 2 * avgdolphins ){
          console.log(  `koalas win ${avgkoalas} vs ${avgdolphins }`);
     } else{
          console.log('no team wins ...');

     }
}

checkwinner (scoredolphins,scorekoalas);
checkwinner (576 , 111);

scoredolphins = calcavetage(85,54,41);
scorekoalas = calcavetage(23,34,27);

console.log (scoredolphins,scorekoalas);
checkwinner(scoredolphins,scorekoalas);
