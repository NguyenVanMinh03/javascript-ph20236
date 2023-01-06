const massMark = 78;
const heighMark = 1.69;
const massJohn = 92;
const heighJohn = 1.95;

const BMIMark = massMark / heighMark ** 2;
const BMIJohn = massMark / (heighJohn * heighJohn);
console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
    console.log(`Mark có số (${BMIMark}) lớn hơn John có số (${BMIJohn})!`) ;
} else {
     console.log(`John có số (${BMIJohn}) lớn hơn Mark có số (${BMIMark})!`) ;
}