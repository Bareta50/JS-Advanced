const obj = {};
const cat = { name: "Garfield" };
cat.type = "Orange";
cat.greeting = function () {
  console.log("Hello, do you have lazanja");
};
console.log(cat);

function Animal() {}
// const bird = new Animal();
// console.log(bird);

Animal.prototype.speak = () => {
  console.log("Woof!");
};
const dog = new Animal();
console.log(dog);

console.log(dog.__proto__ === Animal.prototype);
console.log(dog.__proto__.__proto__ === Object.prototype);
