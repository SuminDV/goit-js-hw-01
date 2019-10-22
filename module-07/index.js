// Задание 1
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
//  то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories,
//  найдет и выведет в консоль текст заголовка элемента (тега h2)
//   и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// const ourCategories = document.querySelector('#categories');
// const liItem = document.querySelectorAll('.item');
// console.log(`В списке ${liItem.length} категории`);
// console.log('liItem', liItem);
// liItem.forEach(el => {
//   console.log('Category', el.querySelector('h2').textContent)
//   console.log('Quantity', el.querySelectorAll("li").length);
// })

// Задание 2
// В HTML есть пустой список ul#ingredients.

// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// const ulIngredients = document.querySelector('#ingredients');

// const fragment = document.createDocumentFragment();

// ingredients.forEach(el => {
//   const li = document.createElement('li');
//   li.textContent = el;
//   console.log(li);
//   ulIngredients.append(li)
// })
// ulIngredients.appendChild(fragment);
// let sum = '';
// const list = document.querySelector('#ingredients');
// ingredients.forEach(el => {
//   sum += `<li>${el} </li>`;
// })
// list.insertAdjacentHTML('afterbegin', sum)


// Напиши скрипт, который для каждого элемента массива ingredients
//  создаст отдельный li, после чего вставит все li за одну операцию
//   в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

// Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// Используй массив объектов images для создания тегов img вложенных в li.
//  Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ul = document.querySelector('#gallery');
let imgStr = '';
images.forEach(el => {
  const img = document.createElement('img');
  // img.src = el.url;
  imgStr += `<li><img src=${el.url} alt=${el.alt}></li>`;
});
ul.insertAdjacentHTML('afterbegin', imgStr)

// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const newValue = document.querySelector("#value");
const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');

newValue.textContent = 0;
increment.addEventListener("click", () => newValue.textContent= +(newValue.textContent) +1);
decrement.addEventListener("click", () => newValue.textContent= +(newValue.textContent) -1);

// Задание 5
// Напиши скрипт который, при наборе текста в инпуте 
// input#name-input (событие input), подставляет его текущее значение в 
// span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// const input = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");

// function getName() {
//   output.textContent= input.value;
//   if(input.value === "") {
//     output.textContent = "незнакомец"
//   }
// }
// input.addEventListener("input", getName);

// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте,
//  проверял его содержимое на правильное количество символов.


// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// const input = document.getElementById('validation-input');
// input.addEventListener('input',() => {
//  if(input.value.length === 6) {
//    input.classList.remove('invalid');
//    input.classList.add('valid');
//  } else {
//    input.classList.add('invalid')
//   }
// })




// Задание 7
// Напиши скрипт, который реагирует на изменение значения
//  input#font-size-control (событие input) и изменяет инлайн-стиль 
//  span#text обновляя свойство font-size. В результате при 
//  перетаскивании ползунка будет меняться размер текста.

const input = document.getElementById('font-size-control');
const valText = document.getElementById('text');
input.value = 14;
input.addEventListener ('input', function() {
  valText.style.fontSize = `${input.value}px`;
})
