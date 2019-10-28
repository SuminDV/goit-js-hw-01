// Задание 1
// Объяви две переменные хранящие название и цену товара: name и price
// Присвой переменным следующие характеристики товара (сразу при объявлении)
// название: Генератор защитного поля
// цена: 1000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
// Присвой товару новую цену - 2000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.

// const name = "Generator shielding field";
// let price = 1000;

// console.log(`Choosed ${name}, price for item ${price} credits`);
// price = 2000;

// console.log(`Choosed ${name}, price for item ${price} credits`);


// Задание 2
// Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе)
//  и ordered (единиц товара в заказе).
// Сравни эти значения и по результатам выведи:
// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

// const total = 100;
// const ordered = 50;
// let message;

// if(total < ordered) {
// console.log('On stock not enough products');
// }
// else {
//   console.log('Order comlite, wait for manager call')
// }


// Задание 3
// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате.
//  При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD,
//  записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось,
//  записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// let userInput = prompt('Write password')
// if (userInput === null) {
//   message = 'Canceled by user';
// }

// else if(userInput === ADMIN_PASSWORD) {
//   message = "You're welcome";
// }
// else {
//   message = 'Wrong password. Access denied';
// }

// alert(message);


// Задание 4
// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой).
//  Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку.
//   Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов
//  которые пользователь хочет купить и сохранить в переменную.
// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету,
// выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету
//  и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// const credits = 23580;
// let pricePerDroid = 3000;
// let totalPrice;
// let message;

// let userInput = prompt('Droids count');
// if (userInput === null) {
//   console.log(message = 'Cancelled by user');
// } else {
//   totalPrice = pricePerDroid * userInput;
//   console.log('totalPrice :', totalPrice);
  
//   if (totalPrice > credits) {
//     message = 'Not enough credits on account';
//   } else {
//     console.log(message = `You bought ${userInput} droids, on account ${credits - totalPrice} credits`);
//   }
// }
  
// alert(message);



// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
//  Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch.
//  Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение
//  'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// const China = 'China';
// const Chili = 'Chili';
// const Australia = 'Australia';
// const India = 'India'; 
// const Yamaika = 'Yamaika';


// let userInput = prompt('Choose country of delivery');

// switch(userInput.toLowerCase()) {
//   case China.toLowerCase():
//   let China_price = 100;
//   alert(`Delivery in ${China} will cost ${China_price} credits`);
//   break
//   case Chili.toLowerCase():
//   let Chili_price = 250;
//   alert(`Delivery in ${Chili} will cost ${Chili_price} credits`);
//   break
//   case Australia.toLowerCase():
//   let Australia_price = 170;
//   alert(`Delivery in ${Australia} will cost ${Australia_price} credits`);
//   break
//   case India.toLowerCase():
//   let India_price = 80;
//   alert(`Delivery in ${India} will cost ${India_price} credits`);
//   break
//   case Yamaika.toLowerCase():
//   let Yamaika_price = 120;
//   alert(`Delivery in ${Yamaika} will cost ${Yamaika_price} credits`);
//   break

//   default:
//     alert('Delivery in your country is not available')
// }

// console.log(userInput);


// Задание 6
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор,
//  пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число.
//  Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel,
//  показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// Делать проверку того, что пользователь ввел именно число,
// а не произвольный набор символов, не нужно. Если хочешь, в случае некорректного ввода,
// показывай alert с текстом 'Было введено не число, попробуйте еще раз',
// при этом результат prompt плюсовать к общей сумме не нужно,
// после чего снова пользователю предлагается ввести число в prompt.

let total = 0;
let userInput;

while(userInput !== null) {
userInput = prompt('write number');
if(!Number.isNaN(Number(userInput)) && Number(userInput) > 0) {
  let isNumber = Number(userInput);
  total = total + isNumber;
  console.log(`${total}`);
}
else if(Number.isNaN(Number(userInput))) {
  alert('Writing not a number, try again')
}
}
alert(`Total sum of numbers = ${total}`);










// while(userInput !== null) {
//   userInput = prompt('Write number');
//   if (!Number.isNaN(Number(userInput)) && Number(userInput) > 0) {
//     let isNumber = Number(userInput);
//       console.log('isNumber', isNumber);
//       total = total + isNumber;
//   }
//   console.log(total);
// }
// alert(`All number sum = ${total}`)

  
