/********************************************************************************
 * Author: Liam Sirkett
 * Date: Feb.05/2025
 * Project: Rock Paper Scissors
 * Description: Create a Javascript console application to simulate playing
 * 			    a game of 'Rock Paper Scissors'
 * 				Create a UI for my 'Rock Paper Scissors' console app. 
 */

// required by node.js to use prompt in console - NO WORK !!!
// const prompt = require(‘prompt-sync’)();

let humanScore = 0;
let computerScore = 0;
let round = 1;

const divResults = document.querySelector("#results");
const divScores = document.querySelector("#scores");
const divHumanScore = document.querySelector("#human");
const divComputerScore = document.querySelector("#computer");
const btnRock = document.querySelector("#Rock");
const btnPaper = document.querySelector("#Paper");
const btnScissors = document.querySelector("#Scissors");
const btnPlayAgain = document.querySelector("#PlayAgain");

const pResult = document.createElement("p");
const pHuman = document.createElement("p");
const pComputer = document.createElement("p");

// ensure starting score is set to zero for both players
pHuman.textContent = humanScore;
pComputer.textContent = computerScore;
divHumanScore.appendChild(pHuman);
divComputerScore.appendChild(pComputer);

// used to return an option for the computer
function random () {
    let options = "Rock,Paper,Scissors".split(',');
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

function getComputerChoice() {
    return random();
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
	
	return `Round: ${round} ${message}`;
}

function checkForWinner() {
	if (humanScore === 5 || computerScore === 5) {
	// if (humanScore === 3 || computerScore === 3) {
		return (humanScore > computerScore) ? "HUMAN WINS!" : "COMPUTER WINS!";
	}
}

function resetGame() {
	humanScore = 0;
	computerScore = 0;
	round = 1;

	pHuman.textContent = humanScore;
	pComputer.textContent = computerScore;
	divHumanScore.appendChild(pHuman);
	divComputerScore.appendChild(pComputer);
}


function playGameAgain() {
	// enable buttons and add event listeners
	let buttons = document.querySelectorAll(".buttons");
	buttons.forEach((button) => {
		button.disabled = false;
		button.addEventListener("click", eventHandler);
	});

	// clear out div child elements, EXCEPT heading 
	divResults.replaceChildren(divResults.firstElementChild);

	// remove paragraphs (note: will be reinitialized, and appended, if user plays again)
	divHumanScore.removeChild(pHuman);
	divComputerScore.removeChild(pComputer);

	// remove event listeners and disable buttons
	btnPlayAgain.removeEventListener("click", playGameAgain);
	btnPlayAgain.disabled = true;

	resetGame();
}

function eventHandler() {
	// play a single round using button's id value ("Rock","Paper" or "Scissors") 
	// and computer's choice
	let result = playRound(this.id, getComputerChoice());
	
	let pResult = document.createElement("p");
	pResult.style.margin = '3px 0px';
	pResult.textContent = result;

	// update player scores after each round
	pHuman.textContent = humanScore;
	pComputer.textContent = computerScore;
	
	// add new result after each round 
	divResults.appendChild(pResult);
	
	let winner = checkForWinner();
	if (winner === "HUMAN WINS!" || winner === "COMPUTER WINS!") {
		// remove event listeners and disable buttons
		let buttons = document.querySelectorAll(".buttons");
		buttons.forEach((button) => {
			button.removeEventListener("click", eventHandler);
			button.disabled = true;
		});

		let pWinner = document.createElement("p");
		pWinner.textContent = winner;
		// adjust alignment of results -> set margin-bottom to match h3 margin
		pWinner.setAttribute("style", "margin: 0px 0px 18px 0px; color: green; font-weight: bold; font-size: 20px;");
		
		let refElement = divResults.firstElementChild;
		refElement.insertAdjacentElement("afterEnd", pWinner);

		// allow player option to play again
		btnPlayAgain.disabled = false;
		btnPlayAgain.addEventListener("click", playGameAgain);
	}
	round +=1 ;
}

btnRock.addEventListener("click", eventHandler);
btnPaper.addEventListener("click", eventHandler);
btnScissors.addEventListener("click", eventHandler);
btnPlayAgain.disabled = true;



