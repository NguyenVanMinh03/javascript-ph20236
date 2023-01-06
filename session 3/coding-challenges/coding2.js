const calctip = function (bill) {
     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill *0.2;
}


const bills = [125 , 555 , 44];
const tips = [calctip(bills[0]) , calctip(bills[1]),calctip(bills[2])] ;
const totals = [bills[0]+tips[0] , bills[1]+tips[1] ,bills[2]+tips[2]];
console.log(bills ,tips , totals);