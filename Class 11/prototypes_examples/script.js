const me = {};
// this is the same as me
const me2 = Object.create({});

// Constructor Function
// Serves as a factory for creating new objects
function Person(name) {
  this.name = name;
  this.speak = function () {
    return `${this.name} is speaking! }`;
  };
}
function Persons(name) {
  this.name = name;
  this.talk = function () {
    return `${this.name} is talking! }`;
  };
}

let greeting = "Hello traveler";
let myNum = 10;
// console.log(greeting.prototype);
// undefined - we have prototype only on constructor functions
// console.log(greeting.__proto__);
console.log(myNum.__proto__);
console.log(Object.getPrototypeOf(greeting));
console.log(Object.getPrototypeOf(myNum));
console.log(Object.getPrototypeOf(Person));

const Me = new Person("Jill");
console.log(Me.speak());
Me.age = 30;
console.log(Me);

const you = new Person("Filip");
console.log(you);
console.log(Person);
console.log(Person.prototype);
console.log(Object.prototype);

console.log(Me.__proto__ === Person.prototype /*true*/);

function User(name, email) {
  this.name = name;
  this.email = email;
  this.isLogin = false;
  this.login = function () {
    console.log(`${this.name} has logged in!`);
  };
}

let bob = new User("Bob", "bobsky321@bmail.com");
bob.isAdmin = false;
let Jill = Object.create(new User("Jill", "jill@jmail.com"));
Jill.isPremium = true;
console.log(bob.isAdmin);
console.log(Jill.isPremium);

function Pet(name, sound) {
  this.name = name;
  this.sound = sound;
}

Pet.prototype.speak = () => {
  console.log(`${this.name} says, ${this.sound}`);
};

const Garfield = new Pet("Garfield", "Meow");
Garfield.speak();
