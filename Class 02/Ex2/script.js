const button2 = document.getElementById("btn2");
button2.addEventListener("click", function () {
  const unorderedList = document.getElementById("itemList");
  const newListItem = document.createElement("li");
  newListItem.textContent = "New-Item";
  unorderedList.appendChild(newListItem);
});
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  const unorderedList = document.getElementById("itemList");
  const newListItem = document.createElement("li");
  unorderedList.removeChild(unorderedList.firstChild);
});
