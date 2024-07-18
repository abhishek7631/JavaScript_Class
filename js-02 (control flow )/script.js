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
