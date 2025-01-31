// console.log("Hello World!");

// // Basic function structure

// function printFullName(fName = "Filip", lName = "Velichkovski") {
//   //   const firstName = "Filip";
//   //   const lastName = "Velichkovski";
//   if (!fName || !lName) {
//     return `Hello ${fName} ${lName}`;
//   }
// }

// printFullName();

// // Anonimous functions
// function clickButton() {
//   console.log("The button has been clicked!");
// }
// const button = document.getElementById("button");
// button.addEventListener("click", clickButton);

// //-------------------

// const calculateArea = function (width, height) {
//   return width * height;
// };

// console.log(calculateArea(400, 500));

// // Use as calback

// const array = [
//   2,
//   4,
//   5,
//   function () {
//     return 2 + 5 - 7;
//   },
// ];

// console.log(array);
// console.log(array[3]());

// // Arrow functions

// // function square(x) {
// //     return x * x;
// // }
// const square = (x) => x * x;
// console.log("Arrow function in action: ", square(2));

// const add = (a, b) => a + b;
// console.log(add(5, 10));

// // Multiple lines need curly bcackets and explicit terms

// const calculate = (a, b) => {
//   const result = a * b;
//   return result * 2;
// };
// console.log(calculate(5, 5));
// // Arrow function cannot be used in objects!
// const test = {
//   name: "Anne",
//   myFunction: () => {
//     console.log(this.name);
//     console.log(this);
//   },
// };
// test.myFunction();

// function createFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }

//==============================================================================
//==============================================================================

// const createFullName = (firstNmae, lastName) => `${firstNmae} ${lastNmae}`;
// const createFName = (firstNmae, lastName) => {
//   return `${firstNmae} ${lastNmae}`;
// };

// function isPositive(number) {
//   if (number > 0) return true;
//   else if (number === 0) return number;
//   return false;
// }
// console.log(isPositive(-9));

// // const temp = (degree) => {
// //   if (degree > 25) return `hot`;
// //   return `cold`;
// // };
// const temp = (degree) => (degree > 25 ? "hot" : "cold");
// console.log(temp(10));

// // A function that counts vowels

// function countVowles(text) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let character of text.toLowerCase()) {
//     if (vowels.includes(character)) count++;
//   }
//   return count;
// }

// console.log(countVowles("AEIOU"));

// // Selfe invoced functions

// // (IIFE)????
// //Imidetly Invoked Function Expression

// (function () {
//   console.log(`I run imideatly!`);
// })();

// (function (num1, num2) {
//   console.log(num1 + num2);
// })(27, 83);

function factoriel(n) {
  if (n <= 1) return 1;
  return n * factoriel(n - 1);
}

console.log(factoriel(170.6)); // if num is > 170.6 Infinity returns
