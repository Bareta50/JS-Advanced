//First class of Advanced Java Script
//Recap of JS Basic material
// function genbyThree() {
//     const divbyThree = [];
//     for (let i = 1; i <= 1000; i++)
//     {
//         if (i % 3 === 0) {
//             divbyThree.push(i);
//         }
//     }
//     console.log(divbyThree);
// }

// // genbyThree();

// function evenNums() {
//     const evenNumsArr = [];
//     for (let i = 4; i <= 1000; i += 2){
//         evenNumsArr.push(i);
//     }
//     console.log(evenNumsArr);
// }

// // evenNums();

// function allNumsThatEndWithOne() {
//     const endWithOneArr = [];
//     for (let i = 1; i <= 1000; i+= 10){
//         endWithOneArr.push(i);
//     }
//     console.log(endWithOneArr);
// }

// // allNumsThatEndWithOne();
// //--------------------------------------------------------------------

// // Object exersises

// class Students {
//     constructor(
//         firstName,
//         lastName,
//         birthYear,
//         academy,
//         grades = [],
//     ) { 
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthYear = birthYear;
//         this.academy = academy;
//         this.grades = grades;

//         this.getAge = function()
//         {
//             let thisYear = new Date().getFullYear;
//             let age = thisYear - this.birthYear;
//             return age;
//         };

//         this.getInfo = function () {
//             return `This student ${this.firstName} ${this.lastName} from the academy ${this.academy}`;
//         };
//         this.getGradeAv = function () {
//             let sum = 0;
//             for (let i = 0; i < this.grades.length; i++) {
//                 sum += this.grades[i];
//             }
//             return sum / this.grades.length;
//         };
       
//     };
// }

// let student1 = new Students("Filip", "Velichkovski", 2003, "Qinshift Coding Academy", [6, 5, 8, 6, 9]);
// // console.log(student1);
// //--------------------------------------------------------------------



// let body = document.getElementById("body");
// window.addEventListener("load",function() {
//     let red = Math.floor(Math.random() * 256);
    
//     let green = Math.floor(Math.random() * 256);
    
//     let blue = Math.floor(Math.random() * 256);
    
    
// console.log(red,green,blue);

//     document.body.style["backgroundColor"] = `rgb(${red},${green},${blue})`;
// } )


