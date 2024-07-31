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
