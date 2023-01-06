const massMark = 78;
const heighMark = 1.69;
const massJohn = 92;
const heighJohn = 1.95;

const BMIMark = massMark / heighMark ** 2;
const BMIJohn = massMark / (heighJohn * heighJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);