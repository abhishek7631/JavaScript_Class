// Basics of functions         ****************

// function hello() {
//   console.log("hello");
// }

// hello();
// hello();
// hello();
// hello();

// function printNmae() {
//   console.log("abhishek");
//   console.log("choudhary");
// }

// printNmae();

// function print1to5() {
//   for (let i = 0; i <= 5; i++) {
//     console.log(i);
//   }
// }

// print1to5();

// function isAdult() {
//   let age = 18;
//   if (age >= 18) {
//     console.log("adult");
//   } else {
//     console.log("not adult");
//   }
// }

// isAdult();

//creats a function that prints a poem.          ***************

// function printPoem() {
//   console.log("twinkle twinkle little star");
//   console.log("how i wonder that you are");
// }

// printPoem();

//create a function to roll dice and always display the value of the dice (1 to 6).         ******************

// function rolldice() {
//   let dice = Math.floor(Math.random() * 6) + 1;
//   console.log(dice);
// }

// rolldice();

// functions with arguments.                ******************

// function printInfo(name, age) {
//   console.log(`${name}'s age is ${age}`);
// }

// printInfo("abhishek", 23);

// function sum(a, b) {           *****************
//   console.log(a + b);
// }

// sum(12, 10);
// sum(2, 3);

// create a function that give us the average of three numbers.                 ******************

// function average(a, b, c) {
//   let avg = (a + b + c) / 3;
//   console.log(avg);
// }

// average(2, 4, 6);

// create a function that prints the multiplication table of a number.            ***************

function printTbale(n) {
  for (let i = n; i <= n * 10; i += n) {
    console.log(i);
  }
}

printTbale(73);
