let randomizer = 3;
let computerSelection;
let playerSelection;

function getComputerChoice(randomizer) {
    computerSelection = Math.floor(Math.random() * randomizer);
    if (computerSelection === 0) {
        return "Rock";
    }
    else if (computerSelection === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
console.log(getComputerChoice(randomizer));

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper, Scissors:");
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection.ToLowerCase() === "paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats paper";
    }
    else if (playerSelection.ToLowerCase() === "scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats scissors";
    }
    else if (playerSelection.ToLowerCase() === "rock" && computerSelection === "Scissors") {
        return "You win! Rock beats scissors";
    }
    else if (playerSelection.ToLowerCase() === "paper" && computerSelection === "Rock") {
        return "You win"
    }
        
}


/**
 * getComputerChoice function
 * interface: none
 * inputs: none
 * outputs: random output of rock/paper/scissors
 * steps to get output: 
 * 1. Create a variable randomizer to store a random number upto and excluding 3 (0/1/2)
 *      that will equate to rock/paper/scissors respectively
 * 2. Create a function that stores the output of the randomization  using math functions
 *      inside the computerSelection variable
 * 3. For now, test this on the console using console.log(function())
 */

/**
 * function to play a single round of the game
 * interface: none
 * inputs: playerSelection, computerSelection 
 * outputs: string that declares the winner "You Lose! Paper beats Rock"
 * steps: 
 * 1. Create a playerSelection variable that can be rock/paper/scissors
 * 2. Use conditionals to set case insensitivity
 * 3. Match the two parameters
 * 4. Return the output string that declares the winner "You Lose! Paper beats Rock"
 */