import menu from './menu';
// import handlebars from '.../../handlebars/dist/'
import dishes from '../templates/dishes.hbs';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuItems = dishes(menu);
console.log(menuItems);

const body = document.querySelector('body')
const menuDishes = document.querySelector('#menu');
console.log(menuDishes);
menuDishes.insertAdjacentHTML('afterbegin', menuItems);

let ourTheme = localStorage.getItem('theme');
ourTheme = localStorage.setItem('theme', Theme.DARK);
console.log('ourTheme', ourTheme);

body.addEventListener('input', e => {
  if(e.target.nodeName === true) {
    body.add('theme', Theme.DARK)
  } else {body.add('theme', Theme.LIGHT)}
})


// вещаем обработчик клик на body - если да то присвоить тему лайт/дарк
// для джейсон меняем расширение js и убираем экспорт дефолт


