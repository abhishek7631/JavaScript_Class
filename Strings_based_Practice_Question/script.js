//Q.1    JavaScript Program to Check Whether a String is Palindrome or Not     *******************************

// function checkPlaindrome(string) {
//   let len = string.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (string[i] !== string[len - 1 - i]) {
//       return `${string} is not palindrome`;
//     } else {
//       return `${string} is palindrome`;
//     }
//   }
// }

// let str = prompt("enter your string");
// console.log(checkPlaindrome(str));

//Q.2  JavaScript Program to Sort Words in Alphabetical Order         ***********************

// let str = prompt("enter your string");

// let splited = str.split("");
// let sorted = splited.sort();
// let result = sorted.join("");
// console.log(result);

//Q.3  JavaScript Program to Replace Characters of a String         ***************************

// let str = "this code replace characters of string";

// let replaced = str.replace("code", "program");
// console.log(replaced);
// let replaced1 = str.replace("string", "123");
// console.log(replaced1);

//Q.4  JavaScript Program to Reverse a String      ***********************

// function reverseString(str) {
//   let newstr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newstr += str[i];
//   }
//   return newstr;
// }

// let string = prompt("enter your string");
// console.log(`reverse string of ${string} is:`, reverseString(string));

//Q.5  JavaScript Program to Check the Number of Occurrences of a Character in the String       **************************

// function countString(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) == letter) {
//       count += 1;
//     }
//   }
//   return count;
// }

// let str = prompt("enter your string");
// let letter = prompt("enter a letter to check");

// console.log(
//   `in this string ${str} , the letter of ${letter} is:`,
//   countString(str, letter)
// );

//Q.6  JavaScript Program to Convert the First Letter of a String into UpperCase.               ***************************

// without using function.
// let str = "abhishek";

// let capital = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(capital);

//using function.
// function capital(str) {
//   let capital = str.charAt(0).toUpperCase() + str.slice(1);
//   return capital;
// }

// let string = prompt("enter your string");
// console.log(capital(string));

//Q.7   JavaScript Program to Count the Number of Vowels in a String.     ***********************

// function countVowels(str) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count += 1;
//     }
//   }

//   return count;
// }

// let inputString = prompt("Enter your string");
// console.log(
//   `The number of vowels in the string is: ${countVowels(inputString)}`
// );

//Q.8  JavaScript Program to Check Whether a String Starts and Ends With Certain Characters.            *********************************

// function checkStartEndSame(str) {
//   if (str.length === 0) {
//     return `this is empty string`;
//   }

//   let startChar = str.charAt(0);
//   let endChar = str.charAt(str.length - 1);

//   if (startChar === endChar) {
//     return `the ${str} starts and ends with the same character`;
//   } else {
//     return `the ${str} starts and ends with the not same character`;
//   }
// }

// let str = prompt("enter your string");

// console.log(checkStartEndSame(str));

//2nd type        **************

// function checkStartEndSame(str) {
//   if (str.startsWith("s") && str.endsWith("g")) {
//     return `${str} start and end with same character`;
//   } else if (str.startsWith("s")) {
//     return `${str} starts with s but not g`;
//   } else if (str.endsWith("g")) {
//     return `${str} end withs g but not start with s`;
//   } else {
//     return `${str} does not start with s and end with g char`;
//   }
// }

// let str = prompt("enter your string");
// console.log(checkStartEndSame(str));

//Q.9    JavaScript Program to Replace All Occurrences of a String.          *********************

// let str = "this is my code";

// let res = str.replace("code", "pen");

// console.log(res);

//2nd type          *****************

// function replaceAllOccurances(str, find, replace) {
//   let result = "";
//   let i = 0;
//   while (i < str.length) {
//     if (str.substring(i, i + find.length) === find) {
//       result += replace;
//       i += find.length;
//     } else {
//       result += str[i];
//       i++;
//     }
//   }
//   return result;
// }

// let str = prompt("Enter your string");
// let find = prompt("Which substring or character do you want to replace?");
// let replace = prompt(
//   "With which substring or character do you want to replace it?"
// );

// let result = replaceAllOccurances(str, find, replace);
// console.log(result);

//Q.10   JavaScript Program to Create Multiline Strings.      ******************

// let message =
//   "this is a long message\n" +
//   "that spans across multiple line\n" +
//   "in the code";

// console.log(message);

//Q.  JavaScript Program to Format Numbers as Currency Strings.               ********************************

// function formatAsCurrency(amount) {
//   return amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
// }

// let amount = parseInt(prompt("enter your amount"));
// console.log(formatAsCurrency(amount));

//Q.11   JavaScript Program to Generate Random String.               **********************

// function genrateRandomString(length) {
//   let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let res = "";
//   for (let i = 0; i < length; i++) {
//     let randomIndex = Math.floor(Math.random() * char.length);
//     res += char[randomIndex];
//   }
//   return res;
// }

// console.log(genrateRandomString(5));
