const button1 = document.getElementById("btn1");

let paragraph = document.getElementById("p");
let i = 0;
button1.addEventListener("click", function () {
    if (i === 0) {
        paragraph.style.fontFamily = "'Courier New', Courier, monospace";
        console.log("1");
        
    }
    else if (i === 1) {
        paragraph.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
        console.log("2");
        
    }
    else if (i === 2) {
        paragraph.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
        console.log("3");
      
    }
    i++;
    if (i >2) {
        i = 0;  
    }
    }
    
    
)