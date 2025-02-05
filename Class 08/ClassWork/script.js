const btn = document.getElementById("GCB");
function getDocument() {
  return new Promise((resolve, reject) => {
    fetch("https://restcountries.com/v3.1/alpha/mkd").then((response) =>
      response.json()
    );
  });
}

async function getBorderingCountries(bordering) {
  console.log("Neighbours");
}

btn.addEventListener(
  "click",
  e(() => {
    e.preventDefault;
  })
);
