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
	
	// return message;
	return `Round: ${round} ${message}`;
	// console recognizes \n, but not HTML
	// return `Round: ${round} ${message}\ntesting\ntesting`;
	// neither console nor HTML recognizes <br>
	// return `Round: ${round} ${message}<br>testing<br>testing`;
}

function playGame() {
	// if (humanScore !== 3 && computerScore !== 3) {
	if (humanScore === 3 || computerScore === 3) {
		return (humanScore > computerScore) ? "HUMAN WINS!" : "COMPUTER WINS!";
	}
}

let humanScore = 0;
let computerScore = 0;
let round = 1;

console.log("human score: " + humanScore);
console.log("computer score: " + computerScore);

const div = document.querySelector("#results");
const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");

// function eventHandler(gameMove) {
function eventHandler() {
	let result = playRound(this.id, getComputerChoice());
	console.log(result);
	let para = document.createElement("p");
	para.textContent = result;
	let text1 = document.createTextNode(`	human score: ${humanScore}	`);
	let text2 = document.createTextNode(`	computer score: ${computerScore}`);
	para.appendChild(text1);
	para.appendChild(text2);
	div.appendChild(para);
	let winner = playGame();
	if (winner === "HUMAN WINS!" || winner === "COMPUTER WINS!") {
		let buttons = document.querySelectorAll("button");
		buttons.forEach((button) => {
			button.removeEventListener("click", eventHandler);
			button.disabled = true;
		});
		let para2 = document.createElement("p");
		para2.textContent = winner;
		div.appendChild(para2);
	}
	round +=1 ;
}

rock.addEventListener("click", eventHandler);
paper.addEventListener("click", eventHandler);
scissors.addEventListener("click", eventHandler);

// NO WORK
// rock.addEventListener("click", eventHandler("Rock"));
// paper.addEventListener("click", eventHandler("Paper"));
// scissors.addEventListener("click", eventHandler("Scissors"));


