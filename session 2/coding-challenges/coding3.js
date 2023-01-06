

const caheo = (96 + 108 + 89) / 3;
const gau = (109 + 95 + 123) / 3;
console.log(caheo , gau);


if (gau > caheo && gau>=100) {
     console.log('gau là người chiến thắng')
}else if (caheo > gau && caheo>=10) {
     console.log('caheo là người chiến thắng')
}else if(caheo == gau && gau>=100  && caheo>=100){
console.log('both win the trophy')
}else{
     console.log('no one win the trophy')   
}