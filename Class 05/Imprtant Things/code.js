// "use strict";
// // delete variables
// let person = {
//   firstName: "Filip",
//   lastName: "Velichkovski",
// };
// let num = 10;
// console.log("Before", num);
// // delete num;
// // console.log("After", num); // Will throw the code

// // delete still works in strickt mode
// delete person.lastName;
// console.log(person);

// // eva() is evil
// // eval("let x = 10");
// // console.log(x);

// //Duplicate parametar

// // function example(a, b, a) {
// //   console.log(a);
// // }

// // example();

// // Trying to assign a value to an undeclared variable

// //undecleared = 42; // Can not use undeclared variables in "strict mode"

////   x-x-x-x-x Pure Functions x-x-x-x-x-x

// function addToTotalPure(value) {
//   let total = 10;
//   total += value;
//   return total;
// }
// let arr = [1, 2, 3];

// // Impure function

// function addToArr(elements) {
//   arr.push(elements);
// }

// console.log(arr);
// addToArr(4);
// console.log(arr);

// // -o-o-o-o-o-o

// // Pure Function

// function addtoArr(array, element) {
//   let newArray = [];
//   for (const e of array) {
//     newArray.push(e);
//   }
//   array.push(element);
//   return array;
// }

// // Impure functions change the DOM

let impureFuction = document.getElementById("impureFuction");
let i = 1;
impureFuction.addEventListener("click", function () {
  console.log(i);
  if (i === 1) {
    document.getElementById("Text").innerHTML = "!!This Changed!!";
  }
  i++;
  if (i > 2) {
    i = 1;
    document.getElementById("Text").innerHTML = "Notice!";
  }
});

// First Class Citizen Function
/*
function add(one, two) {
  return one + two;
}
const sumFunction = add;
console.log(sumFunction(9, 20));

const sayHello = (username) => {
  return `Hi there ${username}`;
};

function subtract(one, two) {
  return one - two;
}
function multiply(one, two) {
  return one * two;
}

function devide(one, two) {
  if (one === 0 || two === 0) {
    return "Cannot devide by zero";
  } else {
    return one / two;
  }
}
console.log(add(5, 5));
console.log(subtract(5, 5));
console.log(multiply(5, 5));
console.log(devide(5, 5));

//  x-x-x-x-x-x-x-x-x-x-x-x

function opperations(func, firstNum, secondNum) {
  return func(firstNum, secondNum);
}

const greetingGenerator = (language) => {
  switch (language) {
    case "english":
      return (name) => console.log(`Hello ${name}`);
    case "german":
      return (name) => console.log(`Hallo ${name}`);
    case "spanish":
      return (name) => console.log(`Hola ${name}`);
    case "unsuported":
      return (name) => console.log(`language not recognized`);
  }
};

const greetEN = greetingGenerator("english");
const greetGE = greetingGenerator("german");
const greetSP = greetingGenerator("spanish");
const greetNA = greetingGenerator("unsuported");
greetEN("Tommy");
greetGE("Hrman");
greetSP("Abuelita");
greetNA("Chong-Li");
*/
