'use strict';

//Task 1
/*
let input;
const numbers = [];
let total = 0;

let userInput;



do {
    userInput = prompt('Type a number.');
    userInput = Number(userInput);

    if (Number.isNaN(userInput)) {
        alert(`This is not a number. Try again`);
        userInput = prompt('Type a number.');
    } else  {
        input = userInput;
        numbers.push(input);
    }
  
    } while (userInput); //true
    
    console.log(numbers);

let firstNumber = numbers[0];
for (let i = 1; i < numbers.length; i+= 1) {
    total =  firstNumber + numbers[i];
    firstNumber = total;
}
console.log(total);
*/



// Task 2
/*
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let logIn;

do {
    logIn = prompt('Enter your password');
    if (!logIn) break;

    if (passwords.includes(logIn)) {
        alert('Welcome!');
        break;
    } else if (!passwords.includes(logIn)) {
        attemptsLeft = attemptsLeft - 1;
        alert(`The password is incorrect. You have ${attemptsLeft} atempt(s) left.`);
        if (attemptsLeft === 0) {
            alert('You do not have  attempts anymore, for this reason, your account is blocked.')
            break;
        }
    }
} while (attemptsLeft > 0);
*/