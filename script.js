'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// // const getCountryData = function (country) {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     const html = `<article class="country">
// //   <img class="country__img" src="${data.flags.png}" />
// //   <div class="country__data">
// //     <h3 class="country__name">${data.name.common}</h3>
// //     <h4 class="country__region">${data.region}</h4>
// //     <p class="country__row"><span>👫</span>${(
// //       +data.population / 1000000
// //     ).toFixed(1)}</p>
// //     <p class="country__row"><span>🗣️</span>${
// //       Object.values(data.languages)[0]
// //     }</p>
// //     <p class="country__row"><span>💰</span>${
// //       Object.values(data.currencies)[0].name
// //     }</p>
// //   </div>
// // </article>`;
// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };

// // getCountryData('portugal');
// // getCountryData('denmark');

// ///////////////////////////////////////
// const renderCountry = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)}</p>
//     <p class="country__row"><span>🗣️</span>${
//       Object.values(data.languages)[0]
//     }</p>
//     <p class="country__row"><span>💰</span>${
//       Object.values(data.currencies)[0].name
//     }</p>
//   </div>
// </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };
// /*
// //https://countries-api-836d.onrender.com/countries/
// const getCountryAndNeighbour = function (country) {
//   //AJAX call first country
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     //Render the first country
//     renderCountry(data);
//     //Get neighbour country
//     const neighbour = data.borders?.[0];
//     if (!neighbour) return;

//     //AJAX call for neighbour country
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       //Render the first country
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('denmark');
// */

// // const getJSON = function (url, errorMsg = 'Something went wrong') {
// //   fetch(url).then(response => {
// //     if (!response.ok) {
// //       throw new Error(`${errorMsg} (${response.status})`);
// //     }

// //     return response.json();
// //   });
// // };
// // const renderError = function (msg) {
// //   countriesContainer.insertAdjacentText('beforeend', msg);
// //   countriesContainer.style.opacity = 1;
// // };
// // const request = fetch('https://restcountries.com/v3.1/name/portugal');
// // console.log(request);

// // const getCountryData = function (country) {
// //   //First country
// //   fetch(`https://restcountries.com/v3.1/name/${country}`)
// //     .then(response => {
// //       if (!response.ok) {
// //         throw new Error(`Country not found (${response.status})`);
// //       }

// //       return response.json();
// //     })
// //     .then(data => {
// //       renderCountry(data[0]);
// //       const neighbour = data[0].borders?.[0];
// //       if (!neighbour) return;

// //       //Second Country
// //       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
// //     })
// //     .then(response => response.json())
// //     .then(data => renderCountry(data[0], 'neighbour'))
// //     .catch(err => {
// //       alert(err);
// //       renderError(`Something went wrong ${err}`);
// //     });
// // };
// // getCountryData('dieieu');
// // btn.addEventListener('click', function () {
// //   getCountryData('portugal');
// // });

// const getJSON = function (url1, errorMsg = 'Something went wrong') {
//   fetch(url1).then(response => {
//     if (!response.ok) {
//       throw new Error(`${errorMsg} (${response.status})`);
//     }

//     return response.json();
//   });
// };
// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };
// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   //First country
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) throw new Error('No neighbour found');

//       //Second Country
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Contry not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       alert(err);
//       renderError(`Something went wrong ${err}`);
//     });
// };
// getCountryData('australia');
// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// console.log('Test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You win !!! :)');
//     } else {
//       reject('You lost your money :(');
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  try {
    //Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    //Reverse geocoding
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data. ');
    const dataGeo = await resGeo.json();
    //Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.countryName}`
    );
    const data = await res.json();
    // console.log(data);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
  } catch (err) {
    console.log(err);
    renderError(`Something went wrong, ${err.message}`);

    throw err;
  }
};
// const city = whereAmI();
// console.log(city);

console.log('1: Will get location ');

// whereAmI()
//   .then(city => console.log(`2:${city}`))
//   .catch(err => console.error(`2:${err.message}`))
//   .finally(() => console.log(`3:Finished getting location`));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2:${city}`);
  } catch (err) {
    console.error(`2:${err.message}`);
  }
  console.log(`3:Finished getting location`);
})();

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }
