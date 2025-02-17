class Person{
    constructor(firstName, lastName,) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return`${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person{
    constructor(firstName,lastName, employeeId) {
        super(firstName, lastName)
        this.employeeId = employeeId;
    }
    getEmployeeInfo() {
        return `${this.getFullName()}`;
    }
}

// function Employee(firstName, lastName, employeeId) {
//     Person.call(this, firstName, lastName)
//     this.employee = employeeId;
// }
// // Set up Inheritance chain
// Employee.prototype = Object.create(Person.prototype)
// Employee.prototype.constructor = Employee;

// Employee.prototype.getEInfo = ()=> ...
class Dev extends Employee{
    constructor(firstName,lastName,employeeId, programmingLanguage)
    {
        super(firstName,lastName,employeeId)
        this.programmingLanguage = programmingLanguage;
    }
    code() {
        console.log(`${this.getFullName()} is codeing in ${this.programmingLanguage}`);
    }
}
// Manager extend Employee
// Represents a manager who can oversee a team of devs

class Manager extends Employee{
    constructor(firstName, lastName, employeeId) {
        super(firstName,lastName,employeeId)
        this.team = [];
    }

    // Adds a dev to the manager's team
    // check type safty
    addTeamMember(employee) {
        if(employee instanceof Dev)
        {
            this.team.push(employee)
            console.log(`${employee.getFullName()} added to ${this.getFullName()}`);
        }
        else {
            console.log(`Error: ${employee.getFullName()} is not a Developer and cannot be added to the team!`);
        }
    }


    listTeam() {
        console.log(`${this.getFullName()}'s Team`);
        this.team.forEach((Member) => {
            console.log(
                `- ${Member.getFullName()} (Dev in ${Member.programmingLanguage})`
            );
        })
    }
}

const john = new Dev("John", "Doe", 101, "JavaScript")
const jane = new Dev("Jane", "Doe", 102, "Python")
const mark = new Manager("Mark", "Stanton", 103)
const zack = new Employee("Zack", "Newfield", 104)

john.code();
jane.code();

mark.addTeamMember(john);
mark.addTeamMember(jane);
// mark.addTeamMember(zack);
mark.listTeam();