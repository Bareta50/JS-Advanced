const globalVariable = "I am accessible everywhere";

function someFunction() {
  console.log(globalVariable);
}
someFunction();

function outer() {
  const message = "Hello from outer";
  function inner() {
    console.log(message);
    const innerMessage = "Hello from inner";
    console.log(innerMessage);
  }
  inner();
  console.log("I am not accessable outside my function");
}

outer();
