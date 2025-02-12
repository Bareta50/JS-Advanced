// Inheritance
function Person(id, first, last, age) {
  this.id = id;
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.getFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
  };
}

function Employee(id, first, last, age, division) {
  Object.setPrototypeOf(this, new Person(id, first, last, age));
  this.division = division;
  this.work = function () {
    console.log(
      `The person [${this.firstName} ${this.lastName}] works in ${this.division}.`
    );
  };
}

let Employee1 = new Employee(1, "Filip", "Velichkovski", 21, "iT");
console.log(Employee1);
