/*
Callback function is a function that is passed as an argument to another function and is expected to be executed after some async operation is completed
 Callback functions are used very often during the development process
*/

let numsArr = [1, 2, 3, 4, 5];
// 1st way
// numsArr.forEach((num) => console.log(num));

//Both are the same

// 2nd way
// numsArr.forEach(function (num) {
//   console.log(num);
// });

// document.getElementById("btn").addEventListener("click", () => {
//   console.log("The button is clicked");
// });

function logMessage() {
  console.log("The button is clicked");
}

document.getElementById("btn").addEventListener("click", logMessage);

// MAKING API REQUESTS
const API_URL = "https://official-joke-api.appspot.com/jokes/programming/ten";

function getData(url, printFunction) {
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      printFunction(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

function printDataInConsole(data) {
  console.log(data);
}

getData(API_URL, printDataInConsole);

//ASYNC OPERATIONS

function asyncOp(callback) {
  console.log("STARTING...");
  setTimeout(() => {
    const result = "Completed";
    callback(result);
  }, 3000);
}
function callbackFunction(str) {
  console.log(str);
}

asyncOp(callbackFunction);
