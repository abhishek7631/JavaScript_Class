//Array Methods Assignment Questions.

//Question 1:
//Convert the array arr = [1, 2, 3, 4, 5] into a string with each element separated by a hyphen (-).

// let arr = [1, 2, 3, 4, 5];
// let str = arr.toString();
// console.log(str);
// let joined = arr.join("-");
// console.log(joined);

//Question 2:
//Join the array names = ["Alice", "Bob", "Charlie"] into a single string with each name separated by a comma (,).

// let arr = ["Alice", "Bob", "Charlie"];

// let joined = arr.join(",");

// console.log(joined);

//Question 3:
//Remove the last element from the array arr = [1, 2, 3, 4, 5].

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let Remove = arr.pop();
// console.log(Remove);
// console.log(arr);

//Question 4:
//Add the number 6 to the end of the array arr = [1, 2, 3, 4, 5].

// console.log("before adding number:");
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log("add number in end:");
// let added = arr.push(6);
// console.log(added);
// console.log("after adding number:");
// console.log(arr);

//Question 5:
//Remove the first element from the array arr = [1, 2, 3, 4, 5].

// console.log("before removing the number:");
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let remove = arr.shift();
// console.log("remove number:");
// console.log(remove);
// console.log("after removing the number");
// console.log(arr);

//Question 6:
//Add the number 0 to the beginning of the array arr = [1, 2, 3, 4, 5].

// console.log("before adding the number:");
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let addNumber = arr.unshift(0);
// console.log(addNumber);
// console.log("after adding the number");
// console.log(arr);

//Question 7:
//Delete the element at index 2 from the array arr = [1, 2, 3, 4, 5].

// console.log("before deleting the element:");
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let Delete = arr.splice(2, 1);
// console.log("delete index 2 element:");
// console.log(Delete);
// console.log("after deleting the element:");
// console.log(arr);

//Question 8:
//Merge the arrays arr1 = [1, 2, 3] and arr2 = [4, 5, 6].

// console.log("this is arr1:");
// let arr1 = [1, 2, 3];
// console.log(arr1);
// console.log("this is arr2:");
// let arr2 = [4, 5, 6];
// console.log(arr2);
// console.log("after merging both arrays:");
// let mergeArray = arr1.concat(arr2);
// console.log(mergeArray);

// Question 9:
//Sort the array arr = [5, 3, 8, 1, 2] in ascending order.

// console.log("this is our array:");
// let arr = [5, 3, 8, 1, 2];
// console.log(arr);
// console.log("after sort the array:");
// let sorted = arr.sort();
// console.log(sorted);

//Question 10:
//Remove 2 elements starting at index 1 from the array arr = [1, 2, 3, 4, 5] and insert the numbers 6 and 7 at that position.

// console.log("this is our array:");
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log("delete two elements from index 1:");
// let result = arr.splice(1, 2, 6, 7);
// console.log(result);
// console.log("this is new array:");
// console.log(arr);

// //Question 11:
// //Create a new array from arr = [1, 2, 3, 4, 5] containing elements from index 1 to 3.

// console.log("this is our array:");
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// console.log("this is new array containing elements from 1 to 3:");
// let newArr = arr.slice(0, 3);
// console.log(newArr);

//Question 12:
//Reverse the elements of the array arr = [1, 2, 3, 4, 5].

// console.log("this is our array:");
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let Reverse = arr.reverse();
// console.log("after reverse the array:");
// console.log(Reverse);

//Question 13:
//Check if the array arr = [1, 2, 3, 4, 5] contains the number 3.

// console.log("this is our array:");
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// let checkArr = arr.includes(3);
// console.log(checkArr);
// console.log("if output give true, it means array contains 3 elements");

//Question 14:
//Find the index of the first occurrence of the number 3 in the array arr = [1, 2, 3, 4, 5].

// console.log("this is our array:");
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log("index of the first occurence of the number 3 is:");
// let index = arr.indexOf(3);
// console.log(index);

//String Methods Assignment Questions.

//Question 1:
//Get the character at index 2 in the string str = "hello".

// console.log("this is our string:");
// let str = "hello";
// console.log(str);
// console.log("character at index 2 is:");
// let char = str.charAt(2);
// console.log(char);

//Question 2:
//Get the Unicode of the character at index 1 in the string str = "hello".

// console.log("this is our string:");
// let str = "hello";
// console.log(str);
// console.log("unicode of index 1 character is:");
// let uniCode = str.charCodeAt(1);
// console.log(uniCode);

//Question 3:
//Replace all occurrences of the word "apple" with "orange" in the string str = "apple apple".

// console.log("this is our string:");
// let str = "apple apple";
// console.log(str);
// console.log("this is the output after replace the string:");
// let replaced = str.replaceAll("apple", "orange");
// console.log(replaced);

//Question 4:
//Extract the part of the string str = "hello world" from index 0 to 5.

// console.log("this is our string:");
// let str = "hello world";
// console.log(str);
// console.log("after extract the string from 0 to 5 is:");
// let extract = str.slice(0, 5);
// console.log(extract);

//Question 5:
//Split the string str = "a,b,c" into an array of substrings separated by a comma.

// console.log("this is our string:");
// let str = "a,b,c";
// console.log(str);
// console.log("array of substrings:");
// let splited = str.split(",");
// console.log(splited);

//Question 6:
//Extract 4 characters from the string str = "hello world" starting at index 6.

// console.log("this is our string");
// let str = "hello world";
// console.log(str);
// console.log("extract 4 character starting at index 6 is :");
// let extract = str.slice(6, 10);
// console.log(extract);

//Question 7:
//Extract characters from the string str = "hello world" from index 2 to 7.

// console.log("this is our string:");
// let str = "hello world";
// console.log(str);
// console.log("extract character from index 2 to 7 is :");
// let extract = str.slice(2, 7);
// console.log(extract);

//Question 8:
//Get the length of the string str = "hello".

// console.log("this is our string:");
// let str = "hello";
// console.log(str);
// console.log("length of the string is :");
// let leng = str.length;

// console.log(leng);

//Question 9:
//Convert the string str = "HELLO" to lowercase.

// console.log("this is our string:");
// let str = "HELLO";
// console.log(str);
// let result = str.toLowerCase();
// console.log("convert to lowerCase:");
// console.log(result);

//Question 10:
//Convert the string str = "hello" to uppercase.

console.log("this is our string:");
let str = "hello";
console.log(str);
let result = str.toUpperCase();
console.log("convert to upperCase");
console.log(result);
