//Q.1  JavaScript Program to Solve Quadratic Equation.   *******************************************

// let a = prompt("enter the value of a");
// let b = prompt("enter the value b");
// let c = prompt("enter the value c");

// let d = b * b - 4 * a * c;

// console.log(`discriminant is: ${d}`);

// if (d > 0) {
//   root1 = (-b + Math.sqrt(d)) / (2 * a);
//   root2 = (-b - Math.sqrt(d)) / (2 * a);

//   console.log(`the root of the quadratic equation are ${root1} and ${root2}`);
// } else if (d == 0) {
//   root1 = root2 = -b / (2 * a);
//   console.log(`the root of the quadratic equation are ${root1} and ${root2}`);
// } else {
//   let realPart = (-b / (2 * a)).toFixed(2);
//   let imagPart = (Math.sqrt(-d) / (2 * a)).toFixed(2);

//   console.log(
//     `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
//   );
// }

//Q.2  Javascript Program to Check if a number is Positive, Negative, or Zero      *********************************

// let a = prompt("enter a number");

// if (a > 0) {
//   console.log(`${a} is a positive number`);
// } else if (a < 0) {
//   console.log(`${a} is a negative number`);
// } else if (a == 0) {
//   console.log(`${a} is a Zero number`);
// }

// Check Number Type with nested if...else  ***********

// let a = prompt("enter a number");

// if (a >= 0) {
//   if (a == 0) {
//     console.log(`${a} is a Zero number`);
//   } else {
//     console.log(`${a} is a positive number`);
//   }
// } else {
//   console.log(`${a} is a negative number`);
// }

//Q.3 Javascript Program to Check if a Number is Odd or Even.    ************************************************

// let num = prompt("enter your number");

// if (num % 2 == 0) {
//   console.log(`${num} is a even number`);
// } else {
//   console.log(`${num} is a odd number`);
// }

// Using Ternary Operator  *******

// let num = prompt("enter your number");

// let result = num % 2 == 0 ? `${num} is even number` : `${num} is odd number`;

// console.log(result);

//Q.4  JavaScript Program to Find the Largest Among Three Numbers     ***************************************

// let num1 = prompt("enter your first number");
// let num2 = prompt("enter your second number");
// let num3 = prompt("enter your third number");

// console.log(`these are the numbers: ${num1},${num2},${num3}`);

// if (num1 > num2 && num1 > num3) {
//   console.log(`${num1} is a largest number`);
// } else if (num2 > num3 && num2 > num1) {
//   console.log(`${num2} is a largest number`);
// } else if (num3 > num1 && num3 > num2) {
//   console.log(`${num3} is a largest number`);
// }

//Using Math.max()  ***********

let num1 = prompt("enter your first number");
let num2 = prompt("enter your second number");
let num3 = prompt("enter your third number");

let largest_number = Math.max(num1, num2, num3);
console.log(`${largest_number} is a largest number`);
