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

// let num = parseInt(prompt("enter your number"));      *********************

// let decimal = num.toString(2);
// console.log(`decimal number of ${num} is : ${decimal} `);

// function getbinary(decimal) {
//   if (decimal === 0) {
//     return "0";
//   }

//   let Binary = "";
//   while (decimal > 0) {
//     Binary += decimal % 2;
//     decimal = Math.floor(decimal / 2);
//   }
//   return Binary;
// }

// let decimal = prompt("enter your decimal number");

// console.log(getbinary(decimal));

//Q.6    JavaScript Program to Find ASCII Value of Character.             ***************************

// let char = prompt("enter your character");

// let asciiValue = char.charCodeAt(0);

// console.log(`the ascii value of ${char} is: ${asciiValue} `);

//Q.7    JavaScript Program to Set a Default Parameter Value For a Function.                   ***************************

//Set Default Parameter Value For a Function     *************
// function sum(x = 3, y = 5) {
//   return x + y;
// }

// console.log(sum());
// console.log(sum(10));
// console.log(sum(4, 7));

// Using Previous Parameter in Another Parameter     ***********

// function sum(x = 5, y = x + 2) {
//   return x + y;
// }

// console.log(sum());
// console.log(sum(10));
// console.log(sum(2, 3));

//Q.8   JavaScript Program to Check If a Variable is of Function Type.                ***************************

// function testVariable(Variable) {
//   if (typeof Variable === "function") {
//     console.log("the variavle is of function type");
//   } else {
//     console.log("the variable is not a function type");
//   }
// }

// let count = true;
// let x = function () {
//   console.log("hello");
// };

// testVariable(count);
// testVariable(x);

//Q.9     JavaScript Program to Pass Parameter to a setTimeout() Function.                ***************************
//Passing Parameter to setTimeout.         ***************

// function greet() {
//   console.log("hello abhishek");
// }

// setTimeout(greet, 3000);
// console.log("this message shown first");

//Passing Parameter to Function.            *******************

// function greet(x, y) {
//   console.log(x);
//   console.log(y);
// }

// setTimeout(greet, 3000, "hello", "abhishek");
// console.log("this message shown first");

//Q.10    JavaScript Program to Perform Function Overloading      ***************************

//Q.   JavaScript Program to Pass a Function as Parameter        ***************************

// function greet() {
//   return "hello";
// }

// function name(user, func) {
//   let message = func();
//   console.log(`${message} ${user}`);
// }

// name("abhishek", greet);
