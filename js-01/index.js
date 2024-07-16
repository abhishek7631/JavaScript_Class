// var a = 10;
// var b = 10;
// var c = "abhishek";
// var d = 1.414;
// console.log(a + b + 8);

// console.log(typeof a);
// console.log(typeof c);
// console.log(typeof d);

// const post = {
//   userName: "@abhishek7631",
//   content: "this is my first post",
//   like: 20,
//   comments: 10,
//   tags: ["@ayush", "@yogesh"],
//   repost: 6,
// };

// console.log(post);

// let str = "abhsihek";
// console.log(str.toLowerCase());

// let a = "abhishek";
// let b = 10;
// let c = 3.141;
// let d = true;
// let e = undefined;
// let f = null;

// console.log(a, b, c, d, e, f);
// console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f);

// let student = {
//   name: "abhsihek",
//   phoneNumber: "121212212",
//   marks: 90,
// };

// let str = "abhi";
// str = "abhi" + 1;

// console.log(typeof str);

// let age = 45;
// if (age > 18) {
//   console.log("you can drive");
// } else {
//   console.log("you can not drive");
// }

// let age = 11;
// if (age > 10 && age < 20) {
//   console.log("Yes, your age lies between 10 and 20");
// } else {
//   console.log("Your age not lies between 10 and 20");
// }

// let num = 21;
// if (num % 2 == 0) {
//   console.log("yes, number is divisible is 2");
// } else if (num % 3 == 0) {
//   console.log("number is divisible is 3");
// } else {
//   console.log("you are enter another number except divisible by 2 and 3");
// }

// {
//   let age = 29;
//   result = age > 18 ? "you can drive" : "you can not drive";
//   console.log(result);
// }

// let n = prompt("enter number");
// n = parseInt(n);
// for (let i = n; i <= n * 10; i = i + n) {
//   console.log(i);
// }

// for (let i = 1; i <= 50; i++) {
//   console.log(i);
// }

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
// }

// console.log(sum);

// let a=5;
// let b=3;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// let a=2;

// let b=3;

// a+=b; //a=a+b;

// a-=b; //a=a-b;

// a*=b; //a=a*b;

// console.log(a);

console.log(2 == 2);
console.log(2 == "2");
console.log(2 === "2");

console.log("____________________");

console.log(2 !== "2");
console.log(4 !== "2");

console.log("____________________");

console.log(2 > 4);
console.log(4 > 2);

const a = false;
const b = false;

console.log("____________________");

const c = a ? "hello" : "fellow";

console.log(c);

console.log("____________________");

let text1 = "Abhishek";
let text2 = "Choudhary";

let result = text1 + " " + text2;
console.log(result);

let text3 = "what a very ";
text3 += "nice day";
console.log(text3);

console.log("____________________");
let s = 2;
let t = 2;
let u = 3;
let v = 4;
let w = 4;
console.log(s == t && v == w);
console.log(s == t || v == u);
console.log(s == t && v == u);
console.log(s == w || v == u);

let z;
console.log(z);

console.log("____________________");

const student = {
  name: "abhishek",
  age: 23,
  roll: "developer",
  id: 22432,
};

console.log(student);

console.log("____________________");

const post = {
  userName: "@abhishek7631",
  followers: "326",
  following: "20",
  like: "20",
  comments: "10",
};
post.salary = "100k";
delete post.salary;
console.log(post);
