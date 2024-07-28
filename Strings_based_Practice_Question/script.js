//Q.1    JavaScript Program to Check Whether a String is Palindrome or Not     *******************************

// function checkPlaindrome(string) {
//   let len = string.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (string[i] !== string[len - 1 - i]) {
//       return `${string} is not palindrome`;
//     }
//   }
//   return `${string} is palindrome`;
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

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count += 1;
    }
  }

  return count;
}

let inputString = prompt("Enter your string");
console.log(
  `The number of vowels in the string is: ${countVowels(inputString)}`
);

//this code written by abhishek choudhary.
