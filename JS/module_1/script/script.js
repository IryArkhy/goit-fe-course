// Task 1


// let message;
// const ADMIN_PASSWORD = 'm4ng0h4ckz';
// let enter = prompt('Введите пароль');

// if (enter !== null) {
//     if (enter === ADMIN_PASSWORD) {
//         message = 'Добро пожаловать!';
//         alert(message);
// } else {
//     message = 'Доступ запрещен, неверный пароль!';
//     alert(message);
// } 
// } else {
//     message = 'Отменено пользователем!';
//     alert(message);
// }



// Task 2 

// let credits = 23580;
// const pricePerDroid = 3000;
// let enter = prompt ('Какое количество ремонтных дроидов Вы хотите преобрести?');
// const quantity = enter;
// let message;
// const totalPrice = enter * pricePerDroid;
// let leftover = credits - totalPrice;

// if (enter !== null) {
//  if (enter = Number && totalPrice <= credits) {
//     message = `Вы купили ${quantity} дроидов, на счету осталось ${leftover} кредитов.`
//     console.log(message);
// }  else if (totalPrice > credits) {
//     message = 'Недостаточно средств на счету!'
//     console.log(message);
// } } else {
// message = 'Отменено пользователем!';
// console.log(message);
// }






// Task 3


// const country = prompt('Введите страну для доставки...', '');
// let message;

// if (country !== null) {
//     const chosenCountry = country.toLowerCase();
//     let price;
//     switch (chosenCountry) {
//         case 'китай':
//             price = 100;
//             message = `Доставка в ${chosenCountry} будет стоить ${price} кредитов`
//             break;

//         case 'южная америка':
//             price = 250;
//             message = `Доставка в ${chosenCountry} будет стоить ${price} кредитов`
//             break;

//         case 'австралия':
//             price = 170;
//             message = `Доставка в ${chosenCountry} будет стоить ${price} кредитов`
//             break;

//         case 'индия':
//             price = 80;
//             message = `Доставка в ${chosenCountry} будет стоить ${price} кредитов`
//             break;

//         case 'ямайка':
//             price = 120;
//             message = `Доставка в ${chosenCountry} будет стоить ${price} кредитов`
//             break;
//         default :
//         message = `В вашей стране доставка не доступна`;
//     alert(message)
//     break;
//     }
//     alert(message)
// } else  {
//     const CANCEL = `Try again`;
//     console.log(CANCEL);
// }

