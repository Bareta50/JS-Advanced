const person = {
  name: "John",
  age: 30,
  sayHello() {
    console.log(`Hey, my name is ${this.name}; I'm ${this.age}!`);
  },
};

person.sayHello();

const sample = { a: 1, b: 2, c: 3 };
console.log(Object.keys(sample));
console.log(Object.values(sample));

console.log(Object.entries(sample));

const team = {
  john: "Dev",
  sarah: "Dev",
  mike: "Dev",
  lisa: "Manager",
  tom: "junior",
};
function findMyRole(role) {
  return Object.entries(team)
    .filter(([name, job]) => job === role)
    .map(([name]) => name);
}

console.log(findMyRole("junior"));
