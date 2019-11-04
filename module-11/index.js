// // Переключатель цветов
// // Есть массив цветов в hex-формате и кнопки Start и Stop.


// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];

// // Напиши скрипт, который после нажатия кнопки Start, раз в секунду
// //  меняет цвет фона body на случайное значение из массива
// //   используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// // warning Учти, на кнопку Start можно нажать бесконечное количество раз.
// //  Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// // Для генерации случайного числа (индекс элемента массива цветов),
// //  используй функцию randomIntegerFromInterval.

// const start = document.querySelector("[data-action= 'start']");
// const stop = document.querySelector("[data-action = 'stop']");
// const body = document.querySelector('body');


// let timer;
// stop.disabled = true;

// start.addEventListener('click', () => {
//     start.disabled = true;
//     stop.disabled = false;
//     timer = setInterval(() => {
//       const randomIntegerFromInterval = (min = 0, max = colors.length -1) => {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//       };    
//       body.style.backgroundColor = colors[randomIntegerFromInterval ()]
//     }, 1000);
// })



// stop.addEventListener('click', () => {
//     clearInterval(timer);
//     stop.disabled = true;
//     start.disabled  = false;
// })



// // Напиши функцию delay(ms), которая возвращает промис, переходящий
// //  в состояние "resolved" через ms миллисекунд. Значением исполнившегося промиса
// //   должно быть то кол-во миллисекунд которое передали во время вызова функции delay.

// const delay = ms => {
//  return new Promise((resolve) => {
//    setTimeout(() => {
//      resolve(ms)
//    }, ms);
//  })
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms


// // Задание 2
// // Перепиши функцию toggleUserState() так, чтобы она не использовала
// //  callback-функцию callback, а принимала всего два параметра allUsers и userName и возвращала промис.

// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );
// return new Promise((resolve) => resolve(updatedUsers))
// };

// const logger = updatedUsers => console.table(updatedUsers);


// /*
//  * Должно работать так
//  */
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);


// // Задание 3
// // Перепиши функцию makeTransaction() так, чтобы она не использовала
// //  callback-функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = (transaction) => {
//   const delay = randomIntegerFromInterval(200, 500);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const canProcess = Math.random() > 0.3;
  
//       if (canProcess) {
//         resolve([transaction.id, delay]);
//       } else {
//         reject(transaction.id);
//       }
//     }, delay);
//   })
// };

// const logSuccess = ([id, time]) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };


// /*
//  * Должно работать так
//  */
// makeTransaction({ id: 70, amount: 150 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 71, amount: 230 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 72, amount: 75 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 73, amount: 100 })
//   .then(logSuccess)
//   .catch(logError);


// Таймер обратного отсчета
// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты.
//  Такой плагин может использоваться в блогах и интернет-магазинах,
//   страницах регистрации событий, во время технического обслуживания и т. д.

// preview

// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы,
//  минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.


// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

//РЕШЕНИЕ ЧЕРЕЗ КЛАСС//
//========================================================
  const ourDays = document.querySelector("[data-value=days]");
  const ourHours = document.querySelector("[data-value=hours]");
  const ourMins = document.querySelector("[data-value=mins]");
  const ourSecs = document.querySelector("[data-value=secs]");

class CountdownTimer {
  constructor({ selector, targetDate}){
    this.selector = document.querySelector(`${selector}`);
    this.target = targetDate.getTime();
  };
  mySetInterval() {   
    setInterval(() =>{
        let currentTime = Date.now();
        let time = this.target - currentTime;
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        ourDays.textContent = String(days).padStart(3, '0');
        ourHours.textContent = String(hours).padStart(2, '0');
        ourMins.textContent = String(mins).padStart(2, '0');
        ourSecs.textContent = String(secs).padStart(2, '0');
    },1000)
  }
}
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 17, 2019'),
});
timer.mySetInterval();