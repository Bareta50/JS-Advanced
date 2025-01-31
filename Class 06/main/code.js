// Example
/* */
const fetchUsers = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/users");

  return response.json();
};

//Exersise 1 Get users by Name

const getUserNames = async () => {
  console.log("Exersise 1");
  const users = await fetchUsers();
  console.log(users);
  return users.map((user) => user.username);
};

async function runTests() {
  console.log("Usernames:", await getUserNames());
}

// getUserNames();

runTests();

// Exersise 2 Get users by City

const getUsersByCity = async () => {
  console.log("Exersise 2");

  const users = await fetchUsers();
  return users.filter((user) => user.address.city === "Gwenborough");
};

// Exersise 3 Get emails of users with websites (filter + map)
const getUserEmails = async () => {
  console.log("Exersise 3");
  const users = await fetchUsers();
  return users.filter((user) => user.website).map((user) => user.email);
};
// Exersise 4 Get user company names
const getUserCompanyNames = async () => {
  console.log("Exersise 3");
  const users = await fetchUsers();
  return users
    .filter((user) => user.company.name.toLowerCase().startsWith("r"))
    .map((user) => user.company.name);
};
(async () => {
  console.log("Usernames:", await getUserNames());
  console.log("User City:", await getUsersByCity());
  console.log("User Email:", await getUserEmails());
  console.log("User Company Names:", await getUserCompanyNames());
})();
