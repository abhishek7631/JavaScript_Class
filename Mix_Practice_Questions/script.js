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

//Q.21  Write a function that converts an array of numbers into a single string, with each number separated by a comma.

// let arr = [1, 2, 3, 4];
// function arrayToString(arr) {
//   let joined = arr.join(",");
//   return joined;
// }
// console.log(arrayToString(arr));

//Q.22 Write a function that joins all elements of an array into a string with a hyphen (-) as the separator.
// let arr = [1, 2, 3, 4];
// function arrayToString(arr) {
//   let joined = arr.join("-");
//   return joined;
// }
// console.log(arrayToString(arr));

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

// let arr = [1, 2, 3, 4, 5];
// function removeElemet(arr) {
//   let res = arr.shift();
//   return res;
// }

// console.log(arr);
// console.log(removeElemet(arr));
// console.log(arr);

//Q.26  Write a function that adds a new element to the beginning of an array and returns the updated array.

// let arr = [1, 2, 3, 4, 5];
// function addElemet(arr) {
//   let res = arr.unshift(0);
//   return res;
// }

// console.log(arr);
// console.log(addElemet(arr));
// console.log(arr);

//Q.27  Write a function that deletes the third element of an array, keeping the array length unchanged.

// function deleteThirdElement(arr) {
//   if (arr.length >= 3) {
//     arr[2] = undefined;
//   }
//   return arr;
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(deleteThirdElement(arr));

//Q.28  Write a function that concatenates two arrays into a single array.

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let res = arr1.concat(arr2);
// console.log(res);

//Q.29  Write a function that sorts an array of numbers in ascending order.

// let arr = [2, 4, 0, 1, 7, 5, 6];

// let sort = arr.sort((a, b) => a - b);
// console.log(sort);

//Q.30  Write a function that removes two elements from an array starting at index 2 and returns the modified array.

// function removeElemet(arr) {
//   let res = arr.splice(2, 2);
//   return res;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(removeElemet(arr));
// console.log(arr);

//Q.31  Write a function that returns a portion of an array from index 1 to index 4.

// function removeElemet(arr) {
//   let res = arr.slice(1, 5);
//   return res;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(removeElemet(arr));
// console.log(arr);

//Q.32  Write a function that reverses the order of elements in an array.

// function reverseArr(arr) {
//   let newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(reverseArr(arr));

//Q.33  Write a function that checks if a specific value exists in an array.

// function checkValue(arr, value) {
//   if (arr.includes(value)) {
//     return `this ${value} value is exist`;
//   } else {
//     return `this ${value} value not is exist`;
//   }
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(checkValue(arr, 2));

//Q.34 Write a function that returns the index of the first occurrence of a specified value in an array.

// function findIndex(arr, value) {
//   return arr.indexOf(value);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(findIndex(arr, 7));

//Q.35  Write a function that returns the character at the 5th position in a string.

// function charAtFifth(str) {
//   let res = str.slice(5, 6);
//   return res;
// }

// let str = "abhishek";
// console.log(charAtFifth(str));

//Q.36  Write a function that returns the Unicode value of the first character in a string.

// let str = "A";

// function uniCode(str) {
//   let ascii = str.charCodeAt(0);
//   return ascii;
// }

// console.log(uniCode(str));

//Q.37  Write a function that replaces all occurrences of "apple" in a string with "orange".

// let str = "apple";

// function replace(str) {
//   let res = str.replaceAll("apple", "orange");
//   return res;
// }
// console.log(replace(str));

//Q.38  Write a function that extracts a substring from the 3rd character to the 7th character in a string.

// let str = "abhsihek";
// function extrcatString(str) {
//   let res = str.slice(3, 8);
//   return res;
// }

// console.log(extrcatString(str));
// console.log(str);

//Q.39  Write a function that splits a sentence into an array of words.

// let str = "abhishek";
// console.log(str);
// function splitSentence(str) {
//   let splited = str.split("");
//   return splited;
// }
// console.log(splitSentence(str));

//Q.40  Write a function that returns the first three characters of a string.

// let str = "Abhishk";

// function returnThreeChar(str) {
//   let newStr = "";
//   for (let i = 0; i < 3; i++) {
//     newStr += str[i];
//   }
//   return newStr;
// }
// console.log(returnThreeChar(str));

//extra code
//extra code
//extra code
//extra code
