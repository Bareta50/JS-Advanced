// STACK VS HEAP MEMORY
/**
 *
 

console.log("Execute me befor SetTimeOut();");
setTimeout(() => {
  console.log("This is printed after!");
}, 5000);
console.log("This is executed also before SetTimeOut();");
*/

let elapsTime = 0;
stopwatch = null;

function start() {
  if (!stopwatch) {
    stopwatch = setInterval(() => {
      elapsTime++;
      console.log(`Elapsed Time--->: ${elapsTime}`);
    }, 1000);
  }
}
function stop() {
  clearInterval(stopwatch);
  stopwatch = null;
}
function reset() {
  stop();
  elapsTime = 0;
  console.log("Stopwatch reset!");
}

document.getElementById("start").addEventListener("click", function () {
  start();
});
document.getElementById("stop").addEventListener("click", function () {
  stop();
});

document.getElementById("reset").addEventListener("click", function () {
  reset();
});
