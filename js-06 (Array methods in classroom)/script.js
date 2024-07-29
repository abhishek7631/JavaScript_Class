// array methods.       ***************

//forEach.     ********

// let arr = [1, 2, 3, 4, 5];

// let print = function (el) {
//   console.log(el);
// };

// arr.forEach(print);

//or (using arrow function)

// arr.forEach((el) => {
//   console.log(el);
// });

//or

//

//or

// let arr = [
//   { name: "abhishek", marks: 89 },
//   { name: "bhaskar", marks: 87 },
//   { name: "sudhakar", marks: 94 },
// ];

// arr.forEach((student) => {
//   console.log(student.marks);
// });

//map     ***********************

// let arr = [1, 2, 3, 4, 5];

// let double = arr.map(function (el) {
//   return el * 2;
// });

// console.log(double);

//or

// let double = arr.map((el) => {
//   return el * 2;
// });

// console.log(double);

//or

// let arr = [
//   { name: "abhishek", marks: 89 },
//   { name: "bhaskar", marks: 87 },
//   { name: "sudhakar", marks: 94 },
// ];

// let gpa = arr.map((el) => {
//   return el.marks / 10;
// });

// console.log(gpa);

// filter.      ************************

// let num = [2, 4, 1, 5, 6, 2, 7, 8, 9];

// let even = num.filter((el) => el % 2 == 0);

// console.log(even);

//or

// let odd = num.filter((el) => el % 2 != 0);

// console.log(odd);

//or

// let res = num.filter((el) => el < 5);

// console.log(res);

//every    ***********************

// let arr = [1, 2, 3, 4, 5];

// let res = arr.every((el) => {
//   return el % 2 == 0;
// });

// console.log(res);

//or

// let arr2 = [2, 4, 6];

// let res2 = arr2.every((el) => {
//   return el % 2 == 0;
// });

// console.log(res2);

// reduce.       ***********************

// let arr = [1, 2, 3, 4];

// let res = arr.reduce((res, el) => {
//   return res + el;
// });

// console.log(res);

//or

// let arr = [1, 2, 30, 4, 5, 6, 7, 8];

// let res = arr.reduce((max, el) => {
//   if (el > max) {
//     return el;
//   } else {
//     return max;
//   }
// });

// console.log(res);

//Q. cheack if all numbers in our array are multiples of 10 or not.    **********************
// let arr = [10, 20, 30, 40];

// let ans = arr.every((el) => {
//   return el % 10 == 0;
// });

// console.log(ans);

//Q.  create a function to find the minimum in an array.    **********

// let arr = [30, 56, 29, 56, 40, 12, 34, 67];

// let ans = arr.reduce((min, el) => {
//   if (min < el) {
//     return min;
//   } else {
//     return el;
//   }
// });

// console.log(ans);

// default parameters.     ********************

// function sum(a, b = 3) {
//   return a + b;
// }

// console.log(sum(3, 4));

//spread.       *******************

// console.log(..."abhishek");

// //or

// let arr = [1, 2, 4, 5, 55, 7, 8];
// console.log(Math.max(...arr));

//spread (array literals).                  ********************

// let arr = [1, 2, 3, 4, 5];

// let newArr = [...arr];

// or

// let char = "abhishek";

// let newChar = [...char];
//or

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];

// let res = [...odd, ...even];
// console.log(res);

//spread (object litrals).          **************

// let data = {
//   email: "abhishek@123",
//   password: "abcd123",
// };

// let datacopy = { ...data, id: 123 };

//rest.         ***********************

//Destructuring.           ************

// let names = ["tony", "bruce", "steve", "peter"];
// let [winner, runnerup] = names;
// console.log(winner, runnerup);

//or

// let names = ["tony", "bruce", "steve", "peter", "xyx", "abc"];
// let [winner, runnerup, ...others] = names;
// console.log(winner, runnerup);

//Destructuring (for objects).         *******************

const student = {
  name: "abhishek",
  class: "D",
  age: 23,
  subject: ["hindi", "english", "math"],
  username: "abhi@123",
  password: "abs@123",
};

let { username, password } = student;
