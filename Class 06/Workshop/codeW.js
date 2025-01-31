const starwarsPeople = document.getElementById("popleBTN");
const starwarsShips = document.getElementById("ships");

const swapiPeople = async () => {
  const response = await fetch("https://swapi.py4e.com/api/people/");

  return response.json();
};

const swapiShips = async () => {
  const response = await fetch("https://swapi.py4e.com/api/planets/");
  console.log(response.json);
  return response.json();
};

// Swapi People from here-------->>
//XoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXo
//XoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXo
const getName = async () => {
  const response = await swapiPeople();
  console.log(response);
  return response.results.map((starName) => starName.name);
};

const getHeight = async () => {
  const response = await swapiPeople();
  console.log(response);
  return response.results.map((starHeight) => starHeight.height);
};

const getMass = async () => {
  const response = await swapiPeople();
  console.log(response);
  return response.results.map((starMass) => starMass.mass);
};

const getBirthYear = async () => {
  const response = await swapiPeople();
  console.log(response);
  return response.results.map((starBirth) => starBirth.birth_year);
};

const getGender = async () => {
  const response = await swapiPeople();
  console.log(response);
  return response.results.map((starGender) => starGender.gender);
};
//XoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXo
//XoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXo
// Swapi People to here     <<--------

//Swapi Ships from here----------->>
//XoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXo
//XoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXo

const getShipName = async () => {
  const response = await swapiShips();
  console.log(response);
  return response.results.map((shipName) => shipName.name);
};
const getShipModel = async () => {
  const response = await swapiShips();
  console.log(response);
  return response.results.map((shipModel) => shipModel.model);
};
const getShipManu = async () => {
  const response = await swapiShips();
  console.log(response);
  return response.results.map((shipManu) => shipManu.manufacturer);
};
const getShipCost = async () => {
  const response = await swapiShips();
  console.log(response);
  return response.results.map((shipCost) => shipCost.cost_in_credits);
};
const getShipLenght = async () => {
  const response = await swapiShips();
  console.log(response);
  return response.results.map((shipLenght) => shipLenght.length);
};
const getShipCrew = async () => {
  const response = await swapiShips();
  console.log(response);
  return response.results.map((shipCrew) => shipCrew.crew);
};

// Call Functions from here -------->>
//XoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXo
//XoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXoXo
starwarsPeople.addEventListener("click", function () {
  getName();
  getHeight();
  getMass();
  getBirthYear();
  getGender();
});
starwarsShips.addEventListener("click", function () {
  getShipName();
  getShipModel();
  getShipManu();
  getShipCost();
  getShipLenght();
  getShipCrew();
});
