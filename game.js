/********************************************************************************
 * Author: Liam Sirkett
 * Date: Jan.20/2025
 * Project: Rock Paper Scissors
 * Description: Create a Javascript console application to simulate playing
 * 			    a game of 'Rock Paper Scissors'
 */

// required by node.js to use prompt in console - NO WORK !!!
// const prompt = require(‘prompt-sync’)();

// used to return an option for the computer
function random () {
    let options = "Rock,Paper,Scissors".split(',');
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

function getComputerChoice() {
    return random();
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors");
	choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();
	while (choice !== "Rock" && choice !== "Paper" && choice !== "Scissors") {
		choice = prompt("YOU MUST CHOOSE: Rock, Paper or Scissors");
		choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();
	}
    
    return choice;
}

function playGame() {

	let humanScore = 0;
	let computerScore = 0;
	
	let round = 0;
	
	while (humanScore !== 3 && computerScore !== 3) {
		let humanSelection = getHumanChoice();
		let computerSelection = getComputerChoice();

		while (humanSelection === computerSelection) {
			humanSelection = getHumanChoice();
			computerSelection = getComputerChoice();
		}
		console.log(`human: ${humanSelection}`);
		console.log(`computer: ${computerSelection}`);

		let message = playRound(humanSelection, computerSelection);

		if (message !== "TIE, go again") {
			round += 1;
			console.log(`Round #${round}: ${message}`);
		} 
	}

	function playRound(humanChoice, computerChoice) {

		let message = "";

		if (humanChoice === "Rock" && computerChoice === "Scissors") {
			message = "Rock beats Scissors, human wins!";
			humanScore += 1;
		}
		else if (humanChoice === "Paper" && computerChoice === "Scissors") {
			message = "Scissors beats Paper, computer wins!";
			computerScore += 1;
		}
		else if (humanChoice === "Scissors" && computerChoice === "Paper") {
			message = "Scissors beats Paper, human wins!";
			humanScore += 1;
		}
		else if (humanChoice === "Rock" && computerChoice === "Paper") {
			message = "Paper beats Rock, computer wins!";
			computerScore += 1;
		}
		else if (humanChoice === "Paper" && computerChoice === "Rock") {
			message = "Paper beats Rock, human wins!";
			humanScore += 1;
		}
		else if (humanChoice === "Scissors" && computerChoice === "Rock") {
			message = "Rock beats Scissors, computer wins!";
			computerScore += 1;
		}
		else {
			message = "TIE, go again";	
		}
		
		return message;
	}

	console.log("human score: " + humanScore);
	console.log("computer score: " + computerScore);
	return (humanScore > computerScore) ? "HUMAN WINS!" : "COMPUTER WINS!";
}

console.log("PLAYING ROCK PAPER SCISSORS");
console.log(playGame());

