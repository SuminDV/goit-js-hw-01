import fetchCountries from './fetchCountries';
import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import debounce from 'lodash.debounce'

const input = document.querySelector('.input');
console.log(input);
const ul = document.querySelector('.country');
console.log(ul);
input.addEventListener('input',
debounce( e => {
  fetchCountries(e.target.value)
    .then(data =>{
      if(data.length <= 11 && data.length !== 1 ){
        PNotify.defaults.icons = "material";
      PNotify.alert({
          title: 'To many matches found.',
          text: 'Please enter a more specific query!',
          addClass: 'custom nonblock',
          delay: 2000,
          icon: true
        });
      return data.reduce((acc, item) => {
        acc += `<li>${item.name}</li>`;
        return ul.innerHTML = acc;
      }, '')
    } else
      if (data.length === 1 ){
        return data.reduce((acc, item) => {
          acc += `<h2 class="coutry__title">${item.name}</h2><div class="country__wrapper"><div class=“left__side”>
          <p><span style="font-weight: bold">Capital:</span>${item.capital}</p>
          <p><span style="font-weight: bold">Population:</span>${item.population}</p>
          <p><span style="font-weight: bold">Languages:</span></p>
          </div><div class="right__side"><img src="${item.flag}" width="500" height="400" alt="Flag"></div>`;
          return ul.innerHTML = acc;
        }, '')}
        else {return ''}
    })
    .catch(err => console.log(err));
}), 500);


