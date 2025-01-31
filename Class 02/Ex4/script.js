const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let ul = document.getElementById("listElement");
  ul.removeChild(ul.firstChild);
});
