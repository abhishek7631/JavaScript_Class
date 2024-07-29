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

let arr = [1, 2, 3, 4, 5];

let res = arr.every((el) => {
  return el % 2 == 0;
});

console.log(res);

//or

let arr2 = [2, 4, 6];

let res2 = arr2.every((el) => {
  return el % 2 == 0;
});

console.log(res2);
