//Q.1  Remove spaces from a string.

// function removeSpace(str) {
//   return str.replace(" ", "");
// }

// let str = "hello , 12 worl3d...!!!";
// let str = prompt("enter your string");                (using prompt)
// console.log(removeSpace(str));

//Q.2  Remove characters in a string except alphabets.

// function removeCharacter(str) {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[i].toUpperCase() || str[i] !== str[i].toLowerCase()) {
//       res += str[i];
//     }
//   }
//   return res;
// }

// // let str = "hello , 12 worl3d...!!!";
// let str = prompt("enter your string");                      (using prompt)
// console.log(removeCharacter(str));

//Q.3  Sorting a string in alphabetical order.

// function sortAlphabets(str) {
//   let splited = str.split("");
//   let sorted = splited.sort();
//   let res = sorted.join("");
//   return res;
// }

// let str = prompt("enter your string");
// console.log(sortAlphabets(str));

//Q.4  Extract vowels from a string.

// function extractVowel(str) {
//   let newString = "";
//   for (let i = 0; i < str.length; i++) {
//     let vowle = str[i];
//     if (
//       vowle == "a" ||
//       vowle == "e" ||
//       vowle == "i" ||
//       vowle == "o" ||
//       vowle == "u"
//     ) {
//       newString += vowle;
//     }
//   }
//   return newString;
// }

// let str = prompt("enter your string");
// console.log(extractVowel(str));

//Q.5 Remove vowels from a string.

// function removeVowel(str) {
//   let newString = "";
//   for (let i = 0; i < str.length; i++) {
//     let vowle = str[i];
//     if (
//       !(
//         vowle == "a" ||
//         vowle == "e" ||
//         vowle == "i" ||
//         vowle == "o" ||
//         vowle == "u"
//       )
//     ) {
//       newString += vowle;
//     }
//   }
//   return newString;
// }

// let str = prompt("enter your string");
// console.log(removeVowel(str));

//Q.6  Toggle each character in a string.

// function toggleCharacter(str) {
//   let newString = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char === char.toUpperCase()) {
//       newString += char.toLowerCase();
//     } else {
//       newString += char.toUpperCase();
//     }
//   }
//   return newString;
// }

// let str = prompt("enter your string");
// console.log(toggleCharacter(str));

//Q.7  Length of the string without using strlen() function.

// function strLength(str) {
//   let res = 0;
//   for (let i = 0; i <= str.length - 1; i++) {
//     res++;
//   }
//   return res;
// }

// let str = prompt("enter your string");
// console.log(strLength(str));

//Q.8  Program to Sort Array Elements in Ascending Order and Descending Order.

// let Array = [1, 4, 7, 2, 7, 10, 9, 16, 14];

// let res = Array.sort((a, b) => a - b);

// console.log(res);

//Q.9  Program to Sort Array Elements in Descending Order.

// let Array = [1, 4, 7, 2, 7, 10, 9, 16, 14];

// let res = Array.sort((a, b) => b - a);

// console.log(res);

//Q.10  Take out character which are not vovels.

// function notVowels(str) {
//   let res = "";
//   let vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < str.length; i++) {
//     if (!vowels.includes(str[i])) {
//       res += str[i];
//     }
//   }
//   return res;
// }

// let str = prompt("enter your string");
// console.log(notVowels(str));

//Q.11  A character is an alphabet or not.

// function alphabetOrNot(str) {
//   return str.toUpperCase() !== str.toLowerCase();
// }

// let str = prompt("enter your string");
// console.log(alphabetOrNot(str));

//Q.12  Code to find Ascii values of a character.

// function findAscii(char) {
//   let res = char.charCodeAt(0);
//   return res;
// }

// let char = prompt("enter your character:");
// console.log(findAscii(char));

//Q.13  To Check Uppercase, Lowercase or special character.

// function checkCharacter(str) {
//   if (str === str.toUpperCase() && str !== str.toLowerCase()) {
//     return "upper case character";
//   } else if (str === str.toLowerCase() && str !== str.toUpperCase()) {
//     return "lower case character";
//   } else {
//     return "special character";
//   }
// }

// let str = prompt("enter your character:");
// console.log(checkCharacter(str));

//Q.14  To Check Number is positive or negative.

// function checkPostiveNegative(num) {
//   if (num >= 0) {
//     return "number is positive integer";
//   } else {
//     return "number is negative integer";
//   }
// }

// let num = prompt("enter your number");
// console.log(checkPostiveNegative(num));

//Q.15  To Check number is even or odd.

// function checkEvenOdd(num) {
//   if (num % 2 == 0) {
//     return "number is even";
//   } else {
//     return "number is odd";
//   }
// }

// let num = prompt("enter your number");
// console.log(checkEvenOdd(num));

//Q.16  Rotating array from last one to 1st one.

// function rotateArray(arr) {
//   let newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr += arr[i];
//   }
//   return newArr;
// }

// console.log(rotateArray([2, 4, 6, 8]));

//Q.17 Write a program to print multiplication table of any number.

// function mulTable(num) {
//   for (let i = num; i <= num * 10; i += num) {
//     console.log(i);
//   }
// }

// let num = parseInt(prompt("enter your table number:"));
// console.log(mulTable(num));

//Q.18  sum of array of two numbers is 8.

// let arr = [1, 4, 5, 3, 2, 7, 9, 6, 8];

// let res = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     if (arr[i] + arr[j] === 8) {
//       res.push([arr[i], arr[j]]);
//     }
//   }
// }

// console.log(res);

//test question    ***********************

//Q.23  Write a function that removes the last element from an array and returns the modified array.

// let arr = [1, 2, 3, 4, 5];

// function removeLastEl(arr) {
//   let res = arr.pop();
//   return res;
// }
// console.log(arr);
// console.log(removeLastEl(arr));
// console.log(arr);

//Q.24  Write a function that adds a new element to the end of an array and returns the updated array.

// let arr = [1, 2, 3, 4, 5];
// function addElemet(arr) {
//   let res = arr.push(6);
//   return res;
// }

// console.log(arr);
// console.log(addElemet(arr));
// console.log(arr);

//Q.25  Write a function that removes the first element from an array and returns the modified array.

let arr = [1, 2, 3, 4, 5];
function removeElemet(arr) {
  let res = arr.shift();
  return res;
}

console.log(arr);
console.log(removeElemet(arr));
console.log(arr);
