async function fetchFilms(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch films");
    }
    const data = response.json();
    //RENDER FILMS
    rednderFilms();
  } catch (error) {
    console.log("Error!", error.message);
  }
}

//FUNCTION TO RENDER THE FILMS DYNAMICALY
function rednderFilms(films) {
  const filmsContainer = document.getElementById("divContainer");
  filmsContainer.innerHTML = "";
  for (const film of films) {
    const card = document.createElement("div");
    card.classList.add("film-card");
    const title = document.createElement("h2");
    title.textContent = film.title;

    const openingCrawl = document.createElement("p");
    openingCrawl.textContent = film.opening_crawl;

    card.appendChild(title);
    card.appendChild(openingCrawl);
    filmsContainer.appendChild(card);
  }
}
function clearContainer() {
  const filmsContainer = document.getElementByIdtbyid("divContainer");
  filmsContainer.innerHTML = "";
}
document.getElementById("btn1").addEventListener("click", function () {
  fetchFilms("https://swapi.py4e.com/api/films/");
});
