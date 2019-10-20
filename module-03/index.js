// Задание 1
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'javascript'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'javascript';
// user.premium = 'false';

// const keys = Object.keys(user);
// for(const key of keys){
//   console.log(`${key} - ${user[key]}`);
// }

// Задание 2
// Напиши функцию countProps(obj), считающую кол-во свойств
//  в объекте. Функция возвращает число - количество свойств.

// Вызовы функции для проверки работоспособности твоей реализации.

// function countProps(obj){
//   const value = Object.keys(obj)
//   console.log(obj);
//   return value.length;
// }


// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// Задание 3
// Напиши функцию findBestEmployee(employees), которая принимает 
// объект сотрудников и возвращает имя самого продуктивного 
// (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач 
// содержатся как свойства объекта в формате "имя":"кол-во задач".

// Вызовы функции для проверки работоспособности твоей реализации.

// function findBestEmployee(employees){
//   const workers = Object.keys(employees);
//   let bestEmployee = 0;
//   let name;
//   for(const worker of workers){
//     if(employees[worker] > bestEmployee){
//       bestEmployee = employees[worker];
//       // console.log(`${employees[worker]}`);
//       name = worker;
//     }
//   }
//   return name;
// }

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// Задание 4
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму запрплаты работников и возращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

// Вызовы функции для проверки работоспособности твоей реализации.
let personSalary = 0;
function countTotalSalary(employees){
  const salary = Object.keys(employees)
  for(const person of salary){
    personSalary += employees[person];
    console.log(`${person}: ${employees[person]}`);
  }
  return personSalary;
}

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя ключа
// . Возвращает массив значений определенного поля prop из каждого объекта в массиве.

// Вызовы функции для проверки работоспособности твоей реализации.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// function getAllPropValues(arr, prop){
//   const items = [];
//   for(const item of arr){
//     if(prop in item){
//       items.push(item[prop])
//     }
//   }
//   return items
// }

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// Задание 6
// Напиши функцию calculateTotalPrice(arr, productName),
//  которая получает массив объектов и имя продукта (значение свойства name).
//   Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

function calculateTotalPrice(arr, productName){
  let totalPrice = 0;
  for(const {name, price, quantity} of arr){
    if(name === productName){
      totalPrice = price*quantity;
    }
  }
  return totalPrice;
}

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const transactionsTypes = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод отвечающий за добавление суммы к балансу
//    * Создает объект транзакции и вызывает addTransaction
//    */
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = {
//       id: this.transactions.length + 1,
//       type: transactionsTypes.DEPOSIT,
//       amount,
//     }
//     this.addTransaction(transaction);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Создает объект транзакции и вызывает addTransaction
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if(amount > this.balance) {
//       return alert('Снятие такой суммы не возможно, недостаточно средств')
//     }

//     this.balance -= amount;
//     const transaction = {
//       id: this.transactions.length + 1,
//       type: transactionsTypes.WITHDRAW,
//       amount,
//     }

//     this.addTransaction(transaction);
//   },

//   /*
//    * Метод добавляющий транзацию в свойство transactions
//    * Принимает объект трназкции
//    */
//   addTransaction(transaction) {
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for(const transaction of this.transactions) {
//       if(transaction.id === id) {
//         return transaction;
//       }
//     }

//     alert('Транзакция не найдена');
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//   let total = 0;
//   for(const transaction of this.transactions) {
//     if(transaction.type === type) {
//       total += transaction.amount;
//     }
//   }
//   return total;
//   }
// };

// account.deposit(1400);
// account.withdraw(600);
// // account.withdraw(1600);

// console.log(account.transactions);

// console.log('account :', account);
// console.log('details :', account.getTransactionDetails());
// console.log('account.getTransactionTotal(type) :', account.getTransactionTotal(transactionsTypes.WITHDRAW));

// console.log('account.getBalance() :', account.getBalance());