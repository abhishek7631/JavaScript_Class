// let smallImages = document.getElementsByClassName("oldImg");

// for (let i = 0; i < smallImages.length; i++) {
//   smallImages[i] = "assets/spiderman_img.png";
//   console.log(`value is changed of ${i}`);
// }

// let para = document.getElementsByTagName("p")[1];
// console.log(para);

// query selectors   *************

// console.dir(document.querySelector("p"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a"));
// console.dir(document.querySelectorAll("div a"));

// let para = document.querySelector("p");
// console.dir(para);
// console.dir(para.innerHTML);
// console.dir(para.innerText);
// console.dir(para.textContent);

//manipulating attributes  ********************

// let img = document.querySelector("img");
// console.log(img.getAttribute("id"));

// let links = document.querySelectorAll(".box a");
// for (let i = 0; i < links.length; i++) {
//   links[i].style.color = "red";
// }

//classList     ************

// let img = document.querySelector("img");
// console.log(img.classList);

let head = document.querySelector("h1");
console.log(head.classList.add("abc"));

//class practice      *******************************************************

// let para = document.getElementById("para");
// console.log(para);
// function changePara() {
//   para.innerText = "this changed para";
// }
