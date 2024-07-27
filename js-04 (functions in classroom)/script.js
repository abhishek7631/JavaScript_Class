// Basics of functions         ****************

// function hello() {
//   console.log("hello");
// }

// hello();
// hello();
// hello();
// hello();

// function printNmae() {
//   console.log("abhishek");
//   console.log("choudhary");
// }

// printNmae();

// function print1to5() {
//   for (let i = 0; i <= 5; i++) {
//     console.log(i);
//   }
// }

// print1to5();

// function isAdult() {
//   let age = 18;
//   if (age >= 18) {
//     console.log("adult");
//   } else {
//     console.log("not adult");
//   }
// }

// isAdult();

//creats a function that prints a poem.          ***************

// function printPoem() {
//   console.log("twinkle twinkle little star");
//   console.log("how i wonder that you are");
// }

// printPoem();

//create a function to roll dice and always display the value of the dice (1 to 6).         ******************

// function rolldice() {
//   let dice = Math.floor(Math.random() * 6) + 1;
//   console.log(dice);
// }

// rolldice();

// functions with arguments.                ******************

// function printInfo(name, age) {
//   console.log(`${name}'s age is ${age}`);
// }

// printInfo("abhishek", 23);

// function sum(a, b) {           *****************
//   console.log(a + b);
// }

// sum(12, 10);
// sum(2, 3);

// create a function that give us the average of three numbers.                 ******************

// function average(a, b, c) {
//   let avg = (a + b + c) / 3;
//   console.log(avg);
// }

// average(2, 4, 6);

// create a function that prints the multiplication table of a number.            ***************

// function printTbale(n) {
//   for (let i = n; i <= n * 10; i += n) {
//     console.log(i);
//   }
// }

// printTbale(73);

//return keyword            **************

// function sum(a, b) {
//   return a + b;
// }
// let res = sum(2, 3);
// console.log(res);

// create a function that returns the sum of the numbers from 1 to n.                      *******************

// function sumOfNumber(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// let num = parseInt(prompt("enter your first number"));
// console.log(sumOfNumber(num));

//create a function that returns the concatenation of all strings in an array.              **********************

// let str = ["hi", "hello", "bye", "!"];

// function concat(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     result += str[i];
//   }
//   return result;
// }

// console.log(concat(str));

// what will be the output.                ********************

// let greet = "hello";

// function changeGreet() {
//   let greet = "namsate";
//   console.log(greet);
//   function innerGreet() {
//     console.log(greet);
//   }
// }

// console.log(greet);
// changeGreet();

//function expression.    *******************

// let sum = function (a, b) {
//   return a + b;
// };

// console.log(sum(2, 2));

// *****

// let hello = function () {
//   console.log("hello");
// };

// console.log(hello());

// high order functions.     ****************
//(takes one or multiple functions as a arguments).

// function multipleGreet(fun, n) {
//   for (let i = 1; i <= n; i++) {
//     fun();
//   }
// }

// let greet = function () {
//   console.log("hello");
// };

// console.log(multipleGreet(greet, 2));

// high order functions.     ****************
//(return a functions).

// function oddEvenTest(request) {
//   if (request == "odd") {
//     return function (n) {
//       console.log(n % 2 !== 0);
//     };
//   } else if (request == "even") {
//     return function (n) {
//       console.log(n % 2 == 0);
//     };
//   } else {
//     console.log("wrong request");
//   }
// }

// let request = "even";

//Methods           ****************

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};

console.log(calculator.mul(2, 3));

//Q. Write a JavaScript function that returns array elements larger than a number.   ****************

// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;

// function getElements(arr, num) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(getElements(arr, num));

//Q.2 Write a JavaScript function to extract unique characters from a string.     ******************
