import menu from './menu.js';
// import handlebars from '.../../handlebars/dist/'
import dishes from '../templates/dishes.hbs';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuItems = dishes(menu);
// console.log(menuItems);

const body = document.querySelector('body')
const our = document.querySelector('.switch__input')
const menuDishes = document.querySelector('.menu');
menuDishes.insertAdjacentHTML('afterbegin', menuItems);
console.log(menuDishes);

// let ourTheme = localStorage.getItem('theme');
// ourTheme = localStorage.setItem('theme', Theme.DARK);
// console.log('ourTheme', ourTheme);

if (localStorage.getItem('Theme') === null) {
  localStorage.setItem('Theme', Theme.LIGHT)
 }
if (localStorage.getItem('Theme') === Theme.DARK) {
  body.classList.add(Theme.DARK);
  our.checked = true;
 }
if (localStorage.getItem('Theme') === Theme.LIGHT) {
  body.classList.add(Theme.LIGHT);
  our.checked = false;
 }

body.addEventListener('input', e => {
  if(e.target.checked === true) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK )
  }
  else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT)
  }
})


// вещаем обработчик клик на body - если да то присвоить тему лайт/дарк
// для джейсон меняем расширение js и убираем экспорт дефолт


