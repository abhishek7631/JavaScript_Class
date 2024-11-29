//Q.1  JavaScript Program To Print Hello World.    *******************************************

// console.log("hello world");

// alert("hello world");

//Q.2  JavaScript Program to Add Two Numbers       *******************************************

// let a = 10;
// let b = 20;

// let sum = a + b;

// console.log(`sum is ${a} + ${b} = ${sum}`);

//  using prompt

// let num1 = parseInt(prompt("enter a first number"));
// let num2 = parseInt(prompt("enter a first number"));

// let sum = num1 + num2;
// console.log(`sum is ${num1} + ${num2} = ${sum} `);

//Q.3  JavaScript Program to Find the Square Root       *******************************************

// let num = 16;
// let result = Math.sqrt(num);
// console.log(result);

//  using prompt

// let num = prompt("enter your number");

// let result = Math.sqrt(num);
// console.log(`square root of ${num} is ${result}`);

//Q.4  JavaScript Program to Calculate the Area of a Triangle       *******************************************

// let b = prompt("enter your base");
// let h = prompt("enter your hight");

// let area = (1 / 2) * b * h;

// console.log(`area of triangle is ${area}`);

// Area When All Sides are Known

// let a = parseInt(prompt("enter your side1 number"));
// let b = parseInt(prompt("enter your side2 number"));
// let c = parseInt(prompt("enter your side3 number"));

// let s = (a + b + c) / 2;

// console.log(`semi perimeter is ${s}`);

// let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

// console.log(`the area of triangle is ${area}`);

//Q.5  JavaScript Program to Swap Two Variables       *******************************************

//using temporary value

// let a = prompt("enter your number for a");
// let b = prompt("enter your number for b");

// console.log(`before swapping number a is: ${a}`);
// console.log(`before swapping number b is: ${b}`);

// console.log("---------------------------");
// let temp = a;
// a = b;
// b = temp;

// console.log(`after swapping number a is: ${a}`);
// console.log(`after swapping number b is: ${b}`);

//Using Destructuring assignment

// let a = prompt("enter your number for a");
// let b = prompt("enter your number for b");

// console.log(`before swapping number a is: ${a}`);
// console.log(`before swapping number b is: ${b}`);

// [a, b] = [b, a];

// console.log(`after swapping number a is: ${a}`);
// console.log(`after swapping number b is: ${b}`);

//  Using Arithmetic Operators

// let a = parseInt(prompt("enter your number for a"));
// let b = parseInt(prompt("enter your number for b"));

// console.log(`before swapping number a is: ${a}`);
// console.log(`before swapping number b is: ${b}`);

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(`after swapping number a is: ${a}`);
// console.log(`after swapping number b is: ${b}`);

//Q.6  JavaScript Program to Convert Kilometers to Miles           *******************************************

// let Kilometers = prompt("enter your kilometer");

// let miles = Kilometers * 0.621371;

// console.log(`${Kilometers} kilometers is equal to ${miles} miles.`);

//Q.7  Javascript Program to Convert Celsius to Fahrenheit         *******************************************

// let celsius = prompt("enter your celsius");

// let fahrenheit = celsius * 1.8 + 32;

// console.log(
//   `${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`
// );

//Q.8  Work With Constants        *******************************************

// const a = 5;
// console.log(a);

// {
//   const a = 50;
//   console.log(a);
// }

// console.log(a);

// const arr = ["abhishek", "chandan", "rahul"];
// console.log(arr);

// arr[3] = "john";

// console.log(arr);

//Q.9  JavaScript Program to Write to Console           *******************************************

//program to write to console

console.log(8);

// passing string

console.log("abhishek");

//passing variable

const x = "hello";
console.log(x);

// passing function

function name() {
  return "hello abhishek";
}

console.log(name());

// passing object

const obj = {
  name: " abhishek",
  rollNo: "3053",
  class: "D",
};

console.log(obj);

//extra code
//extra code
//extra code
