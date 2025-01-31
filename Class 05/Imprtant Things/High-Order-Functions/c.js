// Test data
const numbers = [2, 5, 8, 10, 15, 3, 7, 12, 17, 34, 53];

const mixedNumbers = [
  5, -3, 12, -8, 9, -4, 7, -1, 20, -15, 6, -10, 18, -2, 11, -13,
];

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

const students = ["Pane", "Stefan", "Olgica", "Ilina", "Filip"];
/*
numberes.forEach((num) => {
  console.log(nums);
});
*/

const numbersSquared = numbers.map((num) => num * num);
console.log(numbersSquared);

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const olderUsers = users.filter((user) => user.age > 30);
console.log(olderUsers);

const sum = numbers.reduce((acc, result) => acc + result, 0);
console.log(sum);
