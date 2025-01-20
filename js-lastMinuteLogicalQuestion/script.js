//Remove spaces from a string

// let str = "hello , 12 world...!!";
// console.log("before trim");
// console.log(str);
// function trimSpace(str) {
//   return str.replaceAll(" ", "");
// }
// console.log("after trim");
// console.log(trimSpace(str));

//Remove characters in a string except alphabets

let str = "hello , 12 world...!!";

function removeCharcters(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
      res += str[i];
    }
  }
  return res;
}

console.log(removeCharcters(str));
