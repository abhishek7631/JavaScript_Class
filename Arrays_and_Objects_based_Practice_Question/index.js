//Q.1  JavaScript Program to Shuffle Deck of Cards            **********************

// program to shuffle the deck of cards

// declare card elements
// const suits = ["Spades", "Diamonds", "Club", "Heart"];
// const values = [
//   "Ace",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "Jack",
//   "Queen",
//   "King",
// ];

// // empty array to contain cards
// let deck = [];

// // create a deck of cards
// for (let i = 0; i < suits.length; i++) {
//   for (let x = 0; x < values.length; x++) {
//     let card = { Value: values[x], Suit: suits[i] };
//     deck.push(card);
//   }
// }

// // shuffle the cards
// for (let i = deck.length - 1; i > 0; i--) {
//   let j = Math.floor(Math.random() * i);
//   let temp = deck[i];
//   deck[i] = deck[j];
//   deck[j] = temp;
// }

// console.log("The first five cards are:");

// // display 5 results
// for (let i = 0; i < 5; i++) {
//   console.log(`${deck[i].Value} of ${deck[i].Suit}`);
// }

//Q.2     JavaScript Program to Create Objects in Different Ways      *********************************

// const person = {
//   name: "John",
//   age: 20,
//   hobbies: ["reading", "games", "coding"],
//   greet: function () {
//     console.log("Hello everyone.");
//   },
//   score: {
//     maths: 90,
//     science: 80,
//   },
// };

// console.log(typeof person); // object

// // accessing the object value
// console.log(person.name);
// console.log(person.hobbies[0]);
// person.greet();
// console.log(person.score.maths);

//Q.3     JavaScript Program to Remove a Property from an Object        ***********************************

// program to remove a property from an object

// creating an object
// const student = {
//   name: "John",
//   age: 20,
//   hobbies: ["reading", "games", "coding"],
//   greet: function () {
//     console.log("Hello everyone.");
//   },
//   score: {
//     maths: 90,
//     science: 80,
//   },
// };

// // deleting a property from an object
// delete student.greet;
// delete student["score"];

// console.log(student);

//Q.4   JavaScript Program to Check if a Key Exists in an Object       **********************************

// program to check if a key exists

// const person = {
//   id: 1,
//   name: "John",
//   age: 23,
// };

// // check if key exists
// const hasKey = "name" in person;

// if (hasKey) {
//   console.log("The key exists.");
// } else {
//   console.log("The key does not exist.");
// }

//Q.5    JavaScript Program to Clone a JS Object       ****************************

// let person = {
//   name: "abhishek",
//   age: 23,
// };

// let clone = person;

// console.log((clone.name = "rohan"));

//Q.6   JavaScript Program to Loop Through an Object            ************************

// let student = {
//   name: "abhishek",
//   age: 23,
//   hobbies: ["reading", "games", "coding"],
// };

// for (let key in student) {
//   let value = student[key];
//   console.log(key + " - " + value);
// }

//Q.7    JavaScript Program to Merge Property of Two Objects        *************************

// let person = {
//   name: "abhishek",
//   age: 23,
// };

// let student = {
//   gender: "Male",
// };

// let mergeObject = { ...person, ...student };
// console.log(mergeObject);

//Q.8   JavaScript Program to Count the Number of Keys/Properties in an Object          *********************

// let student = {
//   name: "abhishek",
//   age: 23,
//   hobbies: ["reading", "games", "coding"],
//   gender: "Male",
// };

// let count = 0;

// for (let key in student) {
//   count++;
// }

// console.log(count);

//Q.9    JavaScript Program to Add Key/Value Pair to an Object      *************************

// let student = {
//   name: "abhishek",
//   age: 23,
// };

// console.log((student.gender = "male"));
// console.log(student);

//Q.10     JavaScript Program to Convert Objects to Strings     ***************************

// let student = {
//   name: "abhishek",
//   age: 23,
// };

// let result = String(student);
// console.log(result);

//Q.11    JavaScript Program to Replace all Instances of a Character in a String         ****************************

// let string = "Learning JavaScript Program";

// let splitString = string.split("a");

// console.log(splitString);

// let result = splitString.join("A");

// console.log(result);

//Q.12    JavaScript Program to Remove Specific Item From an Array                        ****************************

// function removeItemFromArray(arr, n) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== n) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// let arr = [1, 2, 3, 4, 5];

// console.log(removeItemFromArray(arr, 2));

//Q.13  JavaScript Program to Check if An Array Contains a Specified Value     ****************************

// let arr = ["you", "will", "learn", "javascript"];

// // let hasValue = arr.includes("javascript");
// let hasValue = arr.includes("Abhishek");

// if (hasValue) {
//   console.log("array contains a value");
// } else {
//   console.log("arr doest not contain a value");
// }

//repeat string questions ************************

//Q.9  JavaScript Program to Replace All Occurrences of a String      **********************

// let str = "i love coding ";

// let result = str.replaceAll("coding", "sleeping");

// console.log(result);

//Q.10   JavaScript Program to Create Multiline Strings               *****************************
