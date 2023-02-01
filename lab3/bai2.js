const checkDogs = function (dogsJulia, dogsKate) {
     const dogsJuliaCorrected = dogsJulia.slice();
     dogsJuliaCorrected.splice(0, 1);
     dogsJuliaCorrected.splice(-2);
   
     const dogs = dogsJuliaCorrected.concat(dogsKate);
     console.log(dogs);
     dogs.forEach(function (dog, i) {
       if (dog >= 3) {
         console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
       } else {
         console.log(`Dog number ${i + 1} is still a puppy 🐶`);
       }
     });
   };
   
   checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);