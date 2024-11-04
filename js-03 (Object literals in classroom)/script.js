//creating object literals.            ******************

// let student = {
//   name: "abhishek",
//   age: 23,
//   marks: 87,
// };

// console.log(student);

// const item = {
//   price: 100,
//   discount: 30,
//   colors: ["red", "blue", "green"],
// };

// console.log(item);

//creating a post.                    ******************

// const post = {
//   username: "@abhishek",
//   content: "this is my #first post",
//   like: 10,
//   repost: 5,
//   tags: ["@ayush", "@yoges"],
// };

// console.log(post);

//get values.                       ******************

// const post = {
//   username: "@abhishek",
//   content: "this is my #first post",
//   like: 10,
//   repost: 5,
//   tags: ["@ayush", "@yoges"],
// };

// console.log(post);

// console.log(post.content);
// console.log(post.like);
// console.log(post["tags"]);

///conversion in get values.                       ******************
//value automatic change into strings.

// let obj = {
//   1: "a",
//   2: "b",
//   true: "c",
//   null: "d",
//   undefined: "e",
// };

// console.log(obj);
// console.log(obj[1]);
// console.log(obj[2]);
// console.log(obj[null]);

// add/update value.                  ******************

// let student = {
//   name: "abhishek",
//   age: 23,
//   marks: 87,
//   city: "delhi",
// };

// console.log(student);
// console.log((student.city = "bhopal"));
// console.log((student.gender = "male"));
// console.log((student.marks = "A"));
// console.log(delete student.city);
// console.log((student.city = ["delhi", "pune", "bihar"]));

// console.log(student);

//nested objects(object of objects).                  ******************

// const classInfo = {
//   abhishek: {
//     grade: "A",
//     city: "pune",
//   },
//   ayush: {
//     grade: "B",
//     city: "aurangabaad",
//   },
//   yogesh: {
//     grade: "C",
//     city: "delhi",
//   },
// };

// console.log(classInfo);
// console.log(classInfo.abhishek);
// console.log(classInfo.ayush);
// console.log(classInfo.ayush.city);

//array of objects.                 ******************

// const classInfo = [
//   {
//     name: "abhsihek",
//     grade: "O",
//     city: "bihar",
//   },
//   {
//     name: "ayush",
//     grade: "A+",
//     city: "pune",
//   },
//   {
//     name: "yogesh",
//     grade: "A",
//     city: "Aurangabaad",
//   },
// ];

// console.log(classInfo);

// math object.                  ******************

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.abs(-12.34));
// console.log(Math.pow(2, 3));
// console.log(Math.floor(5.9999999)); //to round off nearest smallest integer value
// console.log(Math.floor(-5.5));
// console.log(Math.ceil(5.99999999)); //to round off nearest greatest integer value
// console.log(Math.ceil(-5.5));

// console.log(Math.random());

// random integers.      ******************

// let num = Math.random();
// let num1 = num * 10;
// let num3 = Math.floor(num1);
// let num4 = num3 + 1;
// console.log(num4);

// shorthand (random integers)   **********

// let num = Math.floor(Math.random() * 100) + 1;
// console.log(num);
// console.log("------------------");
// let num1 = Math.floor(Math.random() * 5) + 1;
// console.log(num1);

// number between 21 to 25     *************

// let n = Math.floor(Math.random() * 5) + 21;
// console.log(n);

// guessing game.             ********************
// const max = prompt("enter your max number");
// const random = Math.floor(Math.random() * max) + 1;
// let guess = prompt("guess number");

// while (true) {
//   if (guess == "quit") {
//     console.log("user Quit");
//     break;
//   }

//   if (guess == random) {
//     console.log("you are right. congrats! random number was", random);
//     break;
//   } else if (guess < random) {
//     guess = prompt("hint:your guess was too small. please try again!!");
//   } else {
//     guess = prompt("hint:your guess was too large. please try again!!");
//   }
// }

/* Qs1. Create a program that generates a random number representing a dice roll.        ***********************
[The number should be between 1 and 6] */

// let diceRoll = Math.floor(Math.random() * 6) + 1;
// console.log(diceRoll);

/* Qs2. Create an object representing a car that stores the following                  *********************
properties for the car:name,model,color.Print the car’s name. */

// const car = {
//   name: "volvo",
//   model: "12DR77",
//   color: ["red", "blue", "yellow"],
// };

// console.log(car);

/* Qs3. Create an object Person with their name,age and city.Edit their               **********************
city’s original value to change it to “NewYork”.Add a new property country and set 
it to the United States. */

const Person = {
  name: "abhishek",
  age: 23,
  city: "bihar",
};

console.log(Person);
console.log((Person.city = "NewYork"));
console.log(Person);
console.log((Person.country = "united states"));
console.log(Person);

// extra code
// extra code
// extra code
