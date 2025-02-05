const europeans = document.getElementById("europ");
const neighbors = document.getElementById("neighbors");
const macedonia = document.getElementById("macedonia");
const search = document.getElementById("countrySearch");
const btnGO = document.getElementById("inputGo");
const btnClear = document.getElementById("inputClear");
const countryCardContainer = document.querySelector("#main");

btnClear.addEventListener("click", () => {
  clearScreen();
});
function clearScreen() {
  countryCardContainer.innerHTML = "";
}
class Country {
  constructor(flag, name, population, area, subregion) {
    this.flag = flag;
    this.name = name;
    this.population = population;
    this.area = area;
    this.subregion = subregion;
  }

  renderCard() {
    const postCard = document.createElement("div");
    postCard.classList.add("card", "round");
    postCard.innerHTML = `
      <div class="flag round"><img src="${this.flag}" alt="flag of ${this.name}" style ="width:100%; height:auto; "></div>
      <div class="name round"><h2>${this.name}</h2></div>
      <div class="info round"><p>${this.name} is a country located in ${this.subregion}, has an area of ${this.area} square km and a population of ${this.population}.</p></div>
      <div class="link round"><a href="https://en.wikipedia.org/wiki/${this.name}" target="_blank">Wiki</a></div>
    `;
    countryCardContainer.appendChild(postCard);
  }
}

async function fetchCountries(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Data fetch failed");

    const data = await response.json();
    const mappedCountries = data.map(
      (country) =>
        new Country(
          country.flags?.svg || country.flags?.png,
          country.name.common,
          country.population,
          country.area,
          country.subregion
        )
    );

    console.log(mappedCountries);
    return mappedCountries;
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}

async function displayCountries(url) {
  clearScreen();
  const countries = await fetchCountries(url);
  if (countries) countries.forEach((country) => country.renderCard());
}

document.addEventListener("DOMContentLoaded", () => {
  clearScreen();
  displayCountries("https://restcountries.com/v3.1/all");
});

europeans.addEventListener("click", () => {
  clearScreen();
  displayCountries("https://restcountries.com/v3.1/region/europe");
});

neighbors.addEventListener("click", () => {
  clearScreen();
  displayCountries(
    "https://restcountries.com/v3.1/alpha?codes=SRB,BGR,GRC,ALB,UNK"
  );
});

macedonia.addEventListener("click", () => {
  clearScreen();
  displayCountries("https://restcountries.com/v3.1/name/macedonia");
});

btnGO.addEventListener("click", () => {
  clearScreen();
  let query = search.value.trim();
  if (query) displayCountries(`https://restcountries.com/v3.1/name/${query}`);
});

/*
this is a buffer for ctrl+z
+++++++
+++++++
+++++++
+++++++
+++++++
*/
