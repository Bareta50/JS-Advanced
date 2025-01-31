// let question = document.getElementsByClassName("FAQ");
// //let answer = document.getElementsByClassName("FAQA");
// let i;
// for (i = 0; i <= question.length; i++){
//     function faq() {
//         question[i].addEventListener("click", function () {
//             this.classList.toggle("active");
//             let FAQA = this.nextElementSibling;
//             if (FAQA.style.display === "block") {
//                 FAQA.style.display = "none";
//             }
//             else {
//                 FAQA.style.display = "block";
//             }
//         });
//     }
// }

var coll = document.getElementsByClassName("FAQ");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var FAQA = this.nextElementSibling;
    if (FAQA.style.display === "block") {
      FAQA.style.display = "none";
    } else {
      FAQA.style.display = "block";
    }
  });
}