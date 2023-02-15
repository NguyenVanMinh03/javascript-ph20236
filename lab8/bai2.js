const whereAmI = function (lat, lng) {
     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
       .then(res => {
         if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
         return res.json();
       })
       .then(data => {
         console.log(data);
         console.log(`You are in ${data.city}, ${data.country}`);
   
         return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
       })
       .then(res => {
         if (!res.ok) throw new Error(`Country not found (${res.status})`);
   
         return res.json();
       })
       .then(data => renderCountry(data[0]))
       .catch(err => console.error(`${err.message} 💥`));
   };
   whereAmI(52.508, 13.381);
   whereAmI(19.037, 72.873);
   whereAmI(-33.933, 18.474);

const wait = function (seconds) {
     return new Promise(function (resolve) {
       setTimeout(resolve, seconds * 1000);
     });
   };
   
   const imgContainer = document.querySelector('.images');
   
   const createImage = function (imgPath) {
     return new Promise(function (resolve, reject) {
       const img = document.createElement('img');
       img.src = imgPath;
   
       img.addEventListener('load', function () {
         imgContainer.append(img);
         resolve(img);
       });
   
       img.addEventListener('error', function () {
         reject(new Error('Image not found'));
       });
     });
   };
   
   let currentImg;
   
   createImage('img/img-1.jpg')
     .then(img => {
       currentImg = img;
       console.log('Image 1 loaded');
       return wait(2);
     })
     .then(() => {
       currentImg.style.display = 'none';
       return createImage('img/img-2.jpg');
     })
     .then(img => {
       currentImg = img;
       console.log('Image 2 loaded');
       return wait(2);
     })
     .then(() => {
       currentImg.style.display = 'none';
     })
     .catch(err => console.error(err));
   
   
   ///////////////////////////////////////
   // Consuming Promises with Async/Await
   // Error Handling With try...catch
   
   const getPosition = function () {
     return new Promise(function (resolve, reject) {
       navigator.geolocation.getCurrentPosition(resolve, reject);
     });
   };
   