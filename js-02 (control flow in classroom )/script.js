//**********************     CLASS PRACTICE QUESTION    *****************************

// function name(name, age) {                   ********************
//   console.log(`${name}'s ${age}`);
// }

// name("abhishek", 23);

// let age = prompt("enter your age");        ********************

// if (age >= 20) {
//   console.log("you are adult so you can vote");
// } else {
//   console.log("you are miner , we can't allow for voting");
// }

// let age = 20;                         ********************
// let result = age >= 18 ? "you can vote" : "you are miner";
// console.log(result);

// let marks = 60;                 ********************
// let result = marks > 35 ? "you pass the exam" : "you fail tyhe exam";
// console.log(result);

// if (1 == 1) {                     ********************
//   console.log("true");
// } else {
//   console.log("false");
// }

// let marks = parseInt(prompt("enter your marks"));             ********************

// if (marks > 40) {
//   if (marks > 80) {
//     console.log("distinction");
//   } else {
//     console.log("average");
//   }
// } else {
//   console.log("you fail the exam");
// }

// function reuslt(marks) {                   ********************
//   if (marks > 40) {
//     if (marks > 80) {
//       console.log("distinction");
//     } else {
//       console.log("average");
//     }
//   } else {
//     console.log("you fail the exam");
//   }
// }

// reuslt(75);

// let day = prompt("enter your day");                  ********************

// switch (day) {
//   case "monday":
//     console.log("this is monady");
//     break;
//   case "tuesday":
//     console.log("this is tuesday");
//     break;
//   case "wednesday":
//     console.log("this is wednesday");
//     break;
//   case "thursday":
//     console.log("this is thursday");
//     break;
//   case "friday":
//     console.log("this is friday");
//     break;
//   case "saturday":
//     console.log("this is saturady");
//     break;
//   case "sunday":
//     console.log("this is sunday");
//     break;
// }

// let score = parseInt(prompt("Enter your marks"));                   ********************

// switch (true) {
//   case score <= 100 && score >= 90:
//     console.log("Grade A");
//     break;
//   case score <= 89 && score >= 80:
//     console.log("Grade B");
//     break;
//   case score <= 79 && score >= 70:
//     console.log("Grade C");
//     break;
//   case score <= 69 && score >= 60:
//     console.log("Grade D");
//     break;
//   case score <= 59 && score >= 0:
//     console.log("Grade F");
//     break;
//   default:
//     console.log("Not valid");
// }

// for (let i = 10; i > 0; i--) {     ****************************
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {   ***********
//   console.log(i * 2);
// }

// for (let i = 3; i <= 30; i = i + 3) {   ************
//   console.log(i);
// }

// function printTable(num) {           *****************
//   for (let i = 1; i <= 10; i++) {
//     console.log(i * num);
//   }
// }
// printTable(6);

// let num = parseInt(prompt("enter your table number"));  **************

// for (let i = num; i <= num * 10; i = i + num) {
//   console.log(i);
// }

// printing all the odd numbers  ****************

// for (let i = 1; i <= 20; i = i + 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {    ***********************
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// let i = 1;     ************************
// while (i <= 20) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// let myName = "abhishek";
// let guess = prompt("guess my name");
// while (guess != myName && guess != "quite") {
//   guess = prompt("wrong guess! please try agin");
// }
// if (guess == myName) {
//   console.log("congrats! you guess my name");
// } else {
//   console.log("you quit this guessing game");
// }

//Q. replace string.        ***************************

// let str = "hello , 12 world....!!!";

// function replace(para) {
//   return para.replace("12", "13");
// }
// console.log(replace(str));

// let str = "hello , 12 world....!!!";   *********************

// function replace(para) {
//   return para.replaceAll(" ", "");
// }
// console.log(replace(str));

//Q. sorting a alphabatically in order.             ********************

// let str = "javascript";

// let splited = str.split("");

// let sorted = splited.sort();

// let result = sorted.join("");

// console.log(result);

// let str = "abhishek";          *********************
// let splited = str.split("");
// let sorted = splited.sort();
// console.log(sorted);
// let result = sorted.join("");
// console.log(result);

//Q. replace string.        ***************************

// let str = "hello , 12 world....!!!";

// function replace(para) {
//   return para.replace("12", "13");
// }
// console.log(replace(str));

// let str = "hello , 12 world....!!!";   *********************

// function replace(para) {
//   return para.replaceAll(" ", "");
// }
// console.log(replace(str));

//Q. sorting a alphabatically in order.             ********************

// let str = "javascript";

// let splited = str.split("");

// let sorted = splited.sort();

// let result = sorted.join("");

// console.log(result);

// let str = "abhishek";          *********************
// let splited = str.split("");
// let sorted = splited.sort();
// console.log(sorted);
// let result = sorted.join("");
// console.log(result);

//Q.  remove character from the string except alphabet

// let str = "abhishek01Kumar02ChoUDhary";

// function remChar(str) {
//   let string = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[i].toUpperCase() || str[i] !== str[i].toLowerCase()) {
//       string += str[i];
//     }
//   }
//   console.log(string);
// }

// remChar(str);

//Q.

// let str = "abhishek";

// let string = "";

// for (let i = 0; i < str.length; i++) {
//   let tot = str[i];
//   if (!(tot == "a" || tot == "e" || tot == "i" || tot == "o" || tot == "u")) {
//     string += tot;
//   }
// }
// console.log(string);

//Q.

// let str = prompt("enter your string");
// function toggleCase(str) {
//   let togglestr = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char === char.toUpperCase()) {
//       togglestr += char.toLowerCase();
//     } else {
//       togglestr += char.toUpperCase();
//     }
//   }
//   return togglestr;
// }

// console.log(toggleCase(str));

//Q.

// let str = "abhishek";
// let res = 0;

// for (let i = 0; i < str.length - 1; i++) {
//   res++;
// }
// console.log(res);

//Q.

// let arr = [10, 20, 3, 5, 21, 17];

// res = arr.sort((a, b) => a - b);
// console.log(res);

//Q.

// let arr = [10, 20, 3, 5, 21, 17];
// res = arr.sort((a, b) => b - a);
// console.log(res);

//Q.

// let str = "abhishek";

// let vowel = ["a", "e", "i", "o", "u"];

// let res = "";

// for (let i = 0; i < str.length; i++) {
//   if (!vowel.includes(str[i])) {
//     res += str[i];
//   }
// }
// console.log(res);

//Q. a charcter is an alphabet or not

// let str = prompt("enter your charcter: ");

// function isAlphabet(char) {
//   if (char.length === 1 && /[a-zA-Z]/.test(char)) {
//     return `${char} is a alphabet`;
//   }
//   return `${char} is not a alphabet`;
// }

// console.log(isAlphabet(str));

//Q. code to find ASCII values of a character.

// let str = prompt("enter your character");

// let asciiValue = str.charCodeAt(0);
// console.log(`the ascii value of ${str} is : ${asciiValue}`);

//Q. check uppercase,lowercase and special charcter.

// let str = prompt("enter your string");

// function checkChar(char) {
//   if (char == char.toUpperCase() && char !== char.toLowerCase()) {
//     return `${str} is uppercase alphabet`;
//   } else if (char == char.toLowerCase() && char !== char.toUpperCase()) {
//     return `${str} is lowercase alphabet`;
//   } else {
//     return `${str} is special character`;
//   }
// }

// console.log(checkChar(str));

//Q.

// function isPosandNeg(num) {
//   if (num == 0) {
//     return `${num} is zero number`;
//   } else if (num > 0) {
//     return `${num} is positive number`;
//   } else if (num < 0) {
//     return `${num} is negative number`;
//   }
// }

// let num = prompt("enter your number");
// console.log(isPosandNeg(num));

//Q.

// function isEvenOdd(num) {
//   if (num % 2 == 0) {
//     return `${num} is even number`;
//   } else {
//     return `${num} is odd number`;
//   }
// }

// let num = prompt("enter your number");
// console.log(isEvenOdd(num));

//Q. rotating array from last one to first one.

// let n = 4;
// let a = [2, 4, 6, 8];

// function add(a, n) {
//   for (let i = 0; i < n; i++) {
//     a.unshift(a.pop());
//     console.log(a);
//   }
// }
// console.log(add(a, n));

//Q.

// function leapYear(year) {
//   if (year % 4 == 0) {
//     console.log("leap year");
//   } else {
//     console.log("not a leap year");
//   }
// }

// console.log(leapYear(2001));

//Q.  print star pattern.

function printstar(row) {
  for (let i = 1; i <= row; i++) {
    console.log("*".repeat(i));
  }
}

console.log(printstar(6));

//Q.

// let arr = [1, 4, 5, 3, 2, 7, 9, 6, 8];

// let res = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     if (arr[i] + arr[j] == 8) {
//       res.push([arr[i], arr[j]]);
//     }
//   }
// }

// console.log(res);

//Q. add a one string in the middle of the another string without inbuilt method.

// let a = "abhishek";    *********
// let b = " kumar";
// let res = a.concat(b);
// console.log(res);

let a = "you great";
let b = "must be";

console.log(a.slice(0, 3));
console.log(a.slice(4));

let merge = a.slice(0, 4) + b + " " + a.slice(4);
console.log(merge);

//**********************     CLASS PRACTICE QUESTION    *****************************

//****************************************  SELF PRACTICE QUESTION   *********************/

// let score = prompt("enter the marks: ");

// if (score>=90) {
//     console.log("Grade: A");
// }
// else if(score>=75){
//     console.log("Grade: B");
// }
// else if (score>=65){
//     console.log("Grade: C");
// }
// else {
//     console.log("you fail the exam");
// }

// let number = prompt("enter your number: ");

// if (number>0) {
//     console.log(`${number} is positive number`);
// }
// else {
//     console.log(`${number} is negative number`);
// }

// let age= prompt("enter your age: ");

// if(age>=18) {
//     console.log("you are adult");
// }
// else {
//     console.log("you are minor");
// }

// let number= prompt("enter your number: ");

// if(number%2==0){
//     console.log(`${number} is even number`);
// }
// else {
//     console.log(`${number} is odd number`);
// }

// let rating=prompt("enter your rate: ");

// if(rating<=2){
//     console.log("bad rating");
// }else if (rating>=4) {
//     console.log("good rating");
// }
// else {
//     console.log("average rating");
// }

// let marks = prompt("enter your marks: ");

// if(marks>=40){
//     if(marks>=80){
//         console.log("Distinction");
//     }
//     else{
//         console.log("passed");
//     }
// }
// else {
//     console.log("you fail the exam");
// }

// for(let i=1; i<6; i++){
//     console.log(i);
// }

// for(let i=5; i<=50; i=i+5) {
//     console.log(i);
// }

// let n=prompt("enter your number: ");
// let sum=0;
// for(let i=1; i<=n; i++){
//     sum+=i;
// }
// console.log(`sum ${sum}`);

// let fruits = ["apple","mango","banana"];

// for(let i=0; i<fruits.length;i++) {
//     console.log(fruits[i]);
// }

// let i=1;
// while (i<=3) {
//     console.log(i);
//     i++;
// }

// let i=3;
// do {
//     console.log(i);
//     i--;
// } while(i>0)

// let i=5;
// while(i<=50) {
//     console.log(i);
//     i=i+5;
// }

// let num=parseInt(prompt("enter number: "));

// let count = 1;

// while(count<=10){
//     let product = count * num;
//     console.log(`${num} * ${count} = ${product}`);
//     count++;
// }

// let num = 5;
// let count = 1;
// do {
//   let product = num * count;
//   console.log(product);
//   count++;
// } while (count <= 10);

// for (let i = 1; i <= 5; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }

// for (let i=1; i<=10; i++) {
//     if(i%2==0) {
//         continue;
//     }
//     console.log(i);
// }

// for (let i=1; i<=10; i++) {
//     if(i>4 && i<9) {
//         continue;
//     }
//     console.log(i);
// }

// let num=1;

// while(num<=10) {
//     if(num % 2 === 0){
//         ++num;
//         continue;

//     }
//     console.log(num);
//     ++num;

// }
