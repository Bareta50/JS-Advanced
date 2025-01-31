const users = [
  {
    id: 1,
    name: "Alice",
    age: 28,
    occupation: "Software Engineer",
    gender: "female",
  },
  { id: 2, name: "Bob", age: 35, occupation: "Data Scientist", gender: "male" },
  {
    id: 3,
    name: "Charlie",
    age: 22,
    occupation: "Graphic Designer",
    gender: "male",
  },
  {
    id: 4,
    name: "David",
    age: 42,
    occupation: "Marketing Manager",
    gender: "male",
  },
  {
    id: 5,
    name: "Eva",
    age: 31,
    occupation: "Product Manager",
    gender: "female",
  },
];

let coppyArrUsers = users.slice();

const sortUsers = users.sort((a, b) => a.name.localeCompare(b.name));
const sortUsersReverse = coppyArrUsers.sort((a, b) =>
  b.name.localeCompare(a.name)
); // Sorts users alphabeticaly( if a then b => a,b,c,d,e... ; if b then a => z,y,x,w,....)
console.log(sortUsers);
console.log(sortUsersReverse);

// EVERY

// Checs all fufill a condition

const areAllUsersAdults = users.every((user) => user.age >= 18);
console.log(areAllUsersAdults);

// SOME

const ocupationUsers = users.some(
  (user) => user.occupation === "Marketing Manager"
);
console.log(ocupationUsers);

// FIND

const findUser = users.find((user) => user.age === 22);
console.log(findUser);
