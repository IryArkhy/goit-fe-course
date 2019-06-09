// Task 1


// let message;
// const ADMIN_PASSWORD = 'm4ng0h4ckz';
// let enter = prompt('Введите пароль');

// if (enter === null) {
//     message = 'Отменено пользователем!';
//     alert(message);
// } else if (enter === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
//     alert(message);
// } else if (enter !== ADMIN_PASSWORD ) {
//     message = 'Доступ запрещен, неверный пароль!';
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

// if (enter === null) {
//     message = 'Отменено пользователем!';
//     console.log(message);
// } else if (enter = Number && totalPrice <= credits) {
//     message = `Вы купили ${quantity} дроидов, на счету осталось ${leftover} кредитов.`
//     console.log(message);
// }  

// if (totalPrice > credits) {
//     message = 'Недостаточно средств на счету!'
//     console.log(message);
// }




// Task 3


// const country = prompt('Введите страну для доставки...', '');

// if (country) {
//     const chosenCountry = country.toLowerCase();
//     let price;
//     switch (chosenCountry) {
//         case 'китай':
//             price = 100;
//             break;

//         case 'южная америка':
//             price = 250;
//             break;

//         case 'австралия':
//             price = 170;
//             break;

//         case 'индия':
//             price = 80;
//             break;

//         case 'ямайка':
//             price = 120;
//             break;
//     }

//     let messageDeliveryConfirm = `Доставка в ${chosenCountry} будет стоить ${price} кредитов`;
//     let messageDeliveryDeclined = `В вашей стране доставка не доступна`;


//     if (chosenCountry === 'китай') {
//         console.log(messageDeliveryConfirm);
//     } else if (chosenCountry === 'южная америка') {
//         console.log(messageDeliveryConfirm);
//     } else if (chosenCountry === 'австралия') {
//         console.log(messageDeliveryConfirm);
//     } else if (chosenCountry === 'индия') {
//         console.log(messageDeliveryConfirm);
//     } else if (chosenCountry === 'ямайка') {
//         console.log(messageDeliveryConfirm);
//     } else {
//         console.log(messageDeliveryDeclined);
//     }
// }