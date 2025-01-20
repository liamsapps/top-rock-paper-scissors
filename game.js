// .CREATE variables named humanScore and computerScore in the global scope
// .INIT variables named humanScore and computerScore with the value of 0
let humanScore = 0;
let computerScore = 0;

function random () {
    let options = "Rock,Paper,Scissors".split(',');
    let result = options[Math.floor(Math.random() * 3)];
    return result;
}

// .GET computer choice (function)
function getComputerChoice() {
    return random();
}

// .GET human choice (function)
function getHumanChoice() {
    choice = prompt("Rock, Paper or Scissors");
    choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();
    return choice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());


