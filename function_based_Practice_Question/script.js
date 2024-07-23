//Q.   Javascript Program to Generate a Random Number.        ***************************

// let a = Math.random();
// console.log(a);

// let a = Math.floor(Math.random() * 10) + 5;    **********
// console.log(a);

//Q.2    JavaScript Program to Find Sum of Natural Numbers Using Recursion.          ***************************

// let n = parseInt(prompt("enter your number"));
// function sum(num) {
//   if (num > 0) {
//     return num + sum(num - 1);
//   } else {
//     return num;
//   }
// }
// let res = sum(n);
// console.log(res);

//Q.3     JavaScript Program to Guess a Random Number.        ***************************

// function guessNumber() {
//   let random = Math.floor(Math.random() * 10) + 1;

//   let num = parseInt(prompt("guess a number from 1 to 10: "));

//   while (num !== random) {
//     num = parseInt(prompt("wrong guess! please try again"));
//   }

//   if (num == random) {
//     console.log("cograts! you guess the number");
//   }
// }

// guessNumber();

//Q.4     JavaScript Program to Find Factorial of Number Using Recursion.         ***************************

// function Factorial(num) {
//   if (num == 0) {
//     return 1;
//   } else {
//     return num * Factorial(num - 1);
//   }
// }
// let num = prompt("enter a number");
// if (num >= 0) {
//   let res = Factorial(num);
//   console.log(res);
// } else {
//   console.log("enter a positive number");
// }

// let n = prompt("enter your number");      ************
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact *= i;
// }
// console.log(fact);

//Q.5   JavaScript Program to Convert Decimal to Binary.        ***************************
