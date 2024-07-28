// 'this' in javascript.                ********************

// const student = {
//   name: "abhishek",
//   age: 23,
//   eng: 78,
//   phy: 98,
//   math: 87,
//   getAvg() {
//     let avg = (this.eng + this.phy + this.math) / 3;
//     console.log(avg);
//   },
// };

// console.log(student.getAvg());

// try and catch.               **********************

// console.log("hello");
// console.log("hello");
// console.log("hello");
// try {
//   console.log(a);
// } catch {
//   console.log("variable is not define");
// }

// console.log("hello");
// console.log("hello");
// console.log("hello");

//Arrow functions.                     ***************************

// const sum = (a, b) => {
//   console.log(a + b);
// };

// console.log(sum(2, 3));

// **************

// const cube = (n) => {
//   console.log(n * n * n);
// };

// console.log(cube(3));

// ***************

// const power = (a, b) => {
//   console.log(a ** b);
// };

// console.log(power(2, 4));

// Arrow functions (implicit return).              **********************

// const mul = (a, b) => a * b;      ***********

// console.log(mul(2, 3));

// const sum = (a, b) => a + b;    *************
// console.log(sum(2, 3));

// const cube = (n) => n * n * n;      ***********
// console.log(cube(2));

// set timeout.           ****************************

// console.log("hi there!");

// setTimeout(() => {
//   console.log("my Git repo..!");
// }, 4000);

// console.log("welcome to");

//  set interval.                       ********************

// console.log("hiii!");
// setInterval(() => {
//   console.log("this is abhishek choudhary");
// }, 2000);

// console.log("thank you..!");

// console.log("hiii!");
// let id = setInterval(() => {
//   console.log("this is abhishek choudhary");
// }, 2000);

// console.log("thank you..!");

// clearInterval(id);

// this with arrow function.               ********************

// const student = {
//   name: "abhishek",
//   marks: 98,
//   prop: this,
//   getName: function () {
//     console.log(this);
//     return this.name;
//   },
//   getMarks: () => {
//     console.log(this);
//     return this.marks;
//   },
//   getInfo1: function () {
//     setTimeout(() => {
//       console.log(this);
//     }, 2000);
//   },
//   getInfo2: function () {
//     setTimeout(function () {
//       console.log(this);
//     }, 2000);
//   },
// };

// console.log(student.getName());
// console.log(student.getMarks());
// console.log(student.getInfo1());
// console.log(student.getInfo2());

//Q.   write an arrow function that returns the square of a number 'n'.      ***********************

// const square = (n) => {    **************
//   return n * n;
// };

// console.log(square(2));

// const square1 = (n) => n * n;    **************
// console.log(square(3));

// const square2 = (n) => {     ****************
//   console.log(n * n);
// };

// console.log(square(4));

//Q.  write a function that prints "hello world" 5 times at interval of 2s each.           **************************

let id = setInterval(() => {
  console.log("hello world");
}, 2000);

setTimeout(() => {
  clearInterval(id);
}, 10000);
