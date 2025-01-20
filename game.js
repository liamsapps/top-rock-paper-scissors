console.log("Hello World!");
// .CREATE variables named humanScore and computerScore in the global scope
// .INIT variables named humanScore and computerScore with the value of 0
let humanScore = 0;
let computerScore = 0;

function random () {
    let options = "Rock,Paper,Scissors".split(',');
    // let result = options[options.indexOf(Math.floor(Math.random() * 3))];
    let result = options[Math.floor(Math.random() * 3)];
    return result;
}

// .GET computer choice (function)
function getComputerChoice() {
    // console.log(random());
    return random();
}

console.log(getComputerChoice());


