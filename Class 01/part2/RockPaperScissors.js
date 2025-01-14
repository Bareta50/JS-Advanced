let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let body = document.getElementById("body");
let result = document.getElementById("result");
let winner = document.getElementById("wins");
let looser = document.getElementById("losses");
let wins = 0;
let loss = 0;
rock.addEventListener("click", function () {
    // c == computer
    let c = Math.floor(Math.random() * 3)
    
    if (c === 0) {
        document.body.style.backgroundColor = "orange";
        result.innerHTML = "It's a tie!";
    }

    else if (c === 1) {
        loss++;
        document.body.style.backgroundColor = "red";
        result.innerHTML = "You lose!";
    }

    else if (c === 2) {
        wins++
        document.body.style.backgroundColor = "green";
        result.innerHTML = "You win!";
    }
    winner.innerHTML = wins;
    looser.innerHTML = loss;
    console.log(c);
});

paper.addEventListener("click", function () {
    // c == computer
    let c = Math.floor(Math.random() * 3)
    
    if (c === 0) {
        wins++
        document.body.style.backgroundColor = "green";
        result.innerHTML = "You win!";
    }

    else if (c === 1) {

        document.body.style.backgroundColor = "orange";
        result.innerHTML = "It's a tie!";
    }

    else if (c === 2) {
        loss++;
        document.body.style.backgroundColor = "red";
        result.innerHTML = "You lose!";
    }
    winner.innerHTML = wins;
    looser.innerHTML = loss;
    console.log(c);
});

scissors.addEventListener("click", function () {
    // c == computer
    let c = Math.floor(Math.random() * 3)
    
    if (c === 0) {
        loss++;
        document.body.style.backgroundColor = "red";
        result.innerHTML = "You lose!";
    }

    else if (c === 1) {
        wins++
        document.body.style.backgroundColor = "green";
        result.innerHTML = "You win!";
    }

    else if (c === 2) {
        document.body.style.backgroundColor = "orange";
        result.innerHTML = "It's a tie!";
    }
    winner.innerHTML = wins;
    looser.innerHTML = loss;
    console.log(c);
});