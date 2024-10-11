//Q.1  JavaScript Program to Solve Quadratic Equation.   *******************************************

// let a = prompt("enter the value of a");
// let b = prompt("enter the value b");
// let c = prompt("enter the value c");

// let d = b * b - 4 * a * c;

// console.log(`discriminant is: ${d}`);

// if (d > 0) {
//   root1 = (-b + Math.sqrt(d)) / (2 * a);
//   root2 = (-b - Math.sqrt(d)) / (2 * a);

//   console.log(`the root of the quadratic equation are ${root1} and ${root2}`);
// } else if (d == 0) {
//   root1 = root2 = -b / (2 * a);
//   console.log(`the root of the quadratic equation are ${root1} and ${root2}`);
// } else {
//   let realPart = (-b / (2 * a)).toFixed(2);
//   let imagPart = (Math.sqrt(-d) / (2 * a)).toFixed(2);

//   console.log(
//     `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
//   );
// }

//Q.2  Javascript Program to Check if a number is Positive, Negative, or Zero      *********************************

// let a = prompt("enter a number");

// if (a > 0) {
//   console.log(`${a} is a positive number`);
// } else if (a < 0) {
//   console.log(`${a} is a negative number`);
// } else if (a == 0) {
//   console.log(`${a} is a Zero number`);
// }

// Check Number Type with nested if...else  ***********

// let a = prompt("enter a number");

// if (a >= 0) {
//   if (a == 0) {
//     console.log(`${a} is a Zero number`);
//   } else {
//     console.log(`${a} is a positive number`);
//   }
// } else {
//   console.log(`${a} is a negative number`);
// }

//Q.3 Javascript Program to Check if a Number is Odd or Even.         ************************************************

// let num = prompt("enter your number");

// if (num % 2 == 0) {
//   console.log(`${num} is a even number`);
// } else {
//   console.log(`${num} is a odd number`);
// }

// Using Ternary Operator  *******

// let num = prompt("enter your number");

// let result = num % 2 == 0 ? `${num} is even number` : `${num} is odd number`;

// console.log(result);

//Q.4  JavaScript Program to Find the Largest Among Three Numbers           ***************************************

// let num1 = prompt("enter your first number");
// let num2 = prompt("enter your second number");
// let num3 = prompt("enter your third number");

// console.log(`these are the numbers: ${num1},${num2},${num3}`);

// if (num1 > num2 && num1 > num3) {
//   console.log(`${num1} is a largest number`);
// } else if (num2 > num3 && num2 > num1) {
//   console.log(`${num2} is a largest number`);
// } else if (num3 > num1 && num3 > num2) {
//   console.log(`${num3} is a largest number`);
// }

//Using Math.max()  ***********

// let num1 = prompt("enter your first number");
// let num2 = prompt("enter your second number");
// let num3 = prompt("enter your third number");

// let largest_number = Math.max(num1, num2, num3);
// console.log(`${largest_number} is a largest number`);

//Q.5   JavaScript Program to Check Prime Number.              *******************************

// let num = prompt("enter your number");

// if (num == 1) {
//   console.log(`${num} is neither prime nor composite number`);
// } else if (num < 0) {
//   console.log(`${num} is not a prime number`);
// } else {
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       var res = `${num} is not a prime number`;
//       break;
//     } else {
//       var res = `${num} is prime number`;
//     }
//   }
//   console.log(res);
// }

//Q.6   JavaScript Program to Print All Prime Numbers in an Interval          *************************************

// let startNum = prompt("enter your start number");
// let endNUm = prompt("enter your end number");

// console.log(`Prime numbers between ${startNum} and ${endNUm} are:`);

// for (let i = startNum; i <= endNUm; i++) {
//   let isPrime = true;

//   if (i <= 1) {
//     isPrime = false;
//   } else {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//   }

//   if (isPrime) {
//     console.log(i);
//   }
// }

//Q.7  JavaScript Program to Find the Factorial of a Number         *************************************

// let num = parseInt(prompt("enter your number"));

// if (num < 0) {
//   console.log("factorial for negative number is does not exist");
// } else if (num == 0) {
//   console.log(`the factorial of ${num} is 1`);
// } else {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact = fact * i;
//   }
//   console.log(`factorial of ${num} is: ${fact}`);
// }

//Q.8   JavaScript Program to Display the Multiplication Table.        *******************************************

// let num = prompt("enter your number");

// for (let i = 1; i <= 10; i++) {
//   console.log(i * num);
// }

//second method                                     ****************
// let n = parseInt(prompt("enter your number: "));

// for (let i = n; i <= n * 10; i = i + n) {
//   console.log(i);
// }

// Multiplication Table Up to a Range

// let n = prompt("enter your number");

// let range = prompt("enter your range between 1 to 10");

// for (let i = 1; i <= range; i++) {
//   console.log(i * n);
// }

//Q.9   JavaScript Program to Print the Fibonacci Sequence.        ******************************

// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);

// for (let i = 0; i <= 4; i++) {
//   let temp = a + b;
//   a = b;
//   b = temp;
//   console.log(temp);
// }

// let num = prompt("enter your number");       ***************(input from user)

// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);

// for (let i = 0; i <= num; i++) {
//   let temp = a + b;
//   a = b;
//   b = temp;
//   console.log(temp);
// }

// function fibonacci(num) {           ****************(using function)
//   let a = 0;
//   let b = 1;
//   console.log(a);
//   console.log(b);

//   for (let i = 0; i <= num; i++) {
//     let temp = a + b;
//     a = b;
//     b = temp;
//     console.log(temp);
//   }
// }

// fibonacci(9);

//Q.10  JavaScript Program to Check Armstrong Number.         ***************************

// let number = prompt("enter your number");
// let temp = number;
// let sum = 0;
// while (temp > 0) {
//   let digit = temp % 10;
//   sum += digit ** 3;
//   temp = parseInt(temp / 10);
// }
// if (sum == number) {
//   console.log(`${number} is an armstrong number`);
// } else {
//   console.log(`${number} is not an armstrong number`);
// }

// let number = prompt("enter your number");              *******************(input from user)
// let numberOfDigit = number.length;
// let temp = number;
// let sum = 0;
// while (temp > 0) {
//   let digit = temp % 10;
//   sum += digit ** numberOfDigit;
//   temp = parseInt(temp / 10);
// }
// if (sum == number) {
//   console.log(`${number} is an armstrong number`);
// } else {
//   console.log(`${number} is not an armstrong number`);
// }

//Q.11  JavaScript Program to Find Armstrong Number in an Interval       ******************************************

// let a = prompt("enter your lower number");
// let b = prompt("entr your upper number");

// for (i = a; i <= b; i++) {
//   let temp = i;
//   let noOfDigits = i.toString().length;
//   let sum = 0;
//   while (temp > 0) {
//     let digit = temp % 10;
//     temp = parseInt(temp / 10);
//     sum += digit ** noOfDigits;
//   }
//   if (sum == i) {
//     console.log(i);
//   }
// }

//Q.12   JavaScript Program to Make a Simple Calculator          ***********************************

// let a = parseInt(prompt("enter your first value"));
// let opt = prompt("enter your operator like:+,-,*,/,%");
// let b = parseInt(prompt("enter your second value"));

// if (opt == "+") {
//   console.log(`${a}+${b}=${a + b}`);
// } else if (opt == "-") {
//   console.log(`${a}-${b}=${a - b}`);
// } else if (opt == "*") {
//   console.log(`${a}*${b}=${a * b}`);
// } else if (opt == "/") {
//   console.log(`${a}/${b}=${a / b}`);
// } else if (opt == "%") {
//   console.log(`${a}%${b}=${a % b}`);
// }

//Q.  make calculator in javascript using switch case.        ***************************

// let num1 = parseInt(prompt("enter your first number: "));

// console.log(`this is your value1: ${num1}`);
// let oper = prompt("choose operator +,-,*,/,%: ");
// console.log(`this is your operator: ${oper}`);
// let num2 = parseInt(prompt("enter your seconfd number: "));
// console.log(`this is your value2: ${num2}`);

// switch (oper) {
//   case "+":
//     result = num1 + num2;
//     console.log(`sum is: ${num1} + ${num2} = ${result}`);
//     break;
//   case "-":
//     result = num1 - num2;
//     console.log(` sub is: ${num1} - ${num2} = ${result}`);
//     break;
//   case "*":
//     result = num1 * num2;
//     console.log(`mul: ${num1} * ${num2} = ${result}`);
//     break;
//   case "/":
//     result = num1 / num2;
//     console.log(`div: ${num1} / ${num2} = ${result}`);
//     break;
//   case "%":
//     result = num1 % num2;
//     console.log(`mod: ${num1} % ${num2} = ${result}`);
//     break;
// }

//Q.13   JavaScript Program to Find the Sum of Natural Numbers.       **********************************

// let n = prompt("enter your number");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(`the sum of natural number is: ${sum}`);

//Q.   Sum of Natural Numbers Using while Loop       **********************

// let num = prompt("enter your number");
// let sum = 0;
// let i = 1;
// while (i <= num) {
//   sum += i;
//   i++;
// }
// console.log(`the sum of natural number is: ${sum}`);

//Q.14    JavaScript Program to Check if the Numbers Have Same Last Digit.      *****************************

// let a = prompt("enter your first number");
// let b = prompt("enter your second number");
// let c = prompt("enter your third number");

// let result1 = a % 10;
// let result2 = b % 10;
// let result3 = c % 10;

// console.log("last digit number is: " + result1, result2, result3);

// if (result1 == result2 && result1 == result3) {
//   console.log(`${a} ${b} and ${c} having same last digit number `);
// } else {
//   console.log(`${a} ${b} and ${c} having not same last digit number `);
// }

//Q.15      JavaScript Program to Find HCF or GCD         ***********************************

// let num1 = prompt("enter your first number");
// let num2 = prompt("enter your second number");

// for (let i = 1; i <= num1 && i <= num2; i++) {
//   if (num1 % i == 0 && num2 % i == 0) {
//     hcf = i;
//   }
// }
// console.log(`HCF of ${num1} and ${num2} is ${hcf}.`);

//Q.16      JavaScript Program to Find LCM               ********************************

// let num1 = prompt("enter your first number");
// let num2 = prompt("enter your second number");

// let min = num1 > num2 ? num1 : num2;

// while (true) {
//   if (min % num1 == 0 && min % num2 == 0) {
//     console.log(`the lcm of ${num1} and ${num2} is ${min}`);
//     break;
//   }
//   min++;
// }

//Q.17  JavaScript Program to Find the Factors of a Number      ******************************************

// let num = prompt("enter your number");

// console.log(`the factors of ${num} is: `);

// for (let i = 1; i <= num; i++) {
//   if (num % i == 0) {
//     console.log(i);
//   }
// }

//Q.18      JavaScript Program to Display Fibonacci Sequence Using Recursion.            ***********************************

// function fibonacci(num) {
//   if (num < 2) {
//     return num;
//   } else {
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
// }

// const nTerms = prompt("Enter the number of terms: ");

// if (nTerms <= 0) {
//   console.log("Enter a positive integer.");
// } else {
//   for (let i = 0; i < nTerms; i++) {
//     console.log(fibonacci(i));
//   }
// }

//extra code   **************

// const nTerms = prompt("Enter the number of terms: ");

// if (nTerms <= 0) {
//   console.log("Enter a positive integer.");
// } else {
//   for (let i = 0; i < nTerms; i++) {
//     console.log(fibonacci(i));
//   }
// }
