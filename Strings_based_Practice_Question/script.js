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

function reverseString(str) {
  let newstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newstr += str[i];
  }
  return newstr;
}

let string = prompt("enter your string");
console.log(`reverse string of ${string} is:`, reverseString(string));
