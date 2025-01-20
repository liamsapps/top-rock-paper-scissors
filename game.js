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

// console.log(getComputerChoice());
// console.log(getHumanChoice());
function playRound(humanChoice, computerChoice) {

	let message = "";

	if (humanChoice === "Rock" && computerChoice === "Scissors") {
		//console.log("Rock beats Scissors, human wins!");
		message = "Rock beats Scissors, human wins!";
		humanScore += 1;
	}
	else if (humanChoice === "Paper" && computerChoice === "Scissors") {
		//console.log("Scissors beats Paper, computer wins!");
		message = "Scissors beats Paper, computer wins!";
		computerScore += 1;
	}
	else if (humanChoice === "Scissors" && computerChoice === "Paper") {
		//console.log("Scissors beats Paper, human wins!");
		message = "Scissors beats Paper, human wins!";
		humanScore += 1;
	}
	else if (humanChoice === "Rock" && computerChoice === "Paper") {
		//console.log("Paper beats Rock, computer wins!");
		message = "Paper beats Rock, computer wins!";
		computerScore += 1;
	}
	else if (humanChoice === "Paper" && computerChoice === "Rock") {
		//console.log("Paper beats Rock, human wins!");
		message = "Paper beats Rock, human wins!";
		humanScore += 1;
	}
	else if (humanChoice === "Scissors" && computerChoice === "Rock") {
		//console.log("Rock beats Scissors, computer wins!");
		message = "Rock beats Scissors, computer wins!";
		computerScore += 1;
	}
	else {
		console.log("TIE, go again");	
	}

	//return winner ? humanScore : computerScore;
	return message;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
console.log("human score: " + humanScore);
console.log("computer score: " + computerScore);

