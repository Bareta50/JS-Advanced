const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function () {
  let colorInput = document.getElementById("colorInput").value;
  const body = document.getElementById("body");
  console.log(colorInput);
  body.style.backgroundColor = colorInput;
});
