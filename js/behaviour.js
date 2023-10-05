let randomizer = 3;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let winner;

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

getComputerChoice(randomizer);
// check if getComputerChoice works
console.log(getComputerChoice(randomizer));

// get input from player
let playerSelection = prompt("Rock, Paper, Scissors:");

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === "rock" && computerSelection === 1) {
        computerScore++;
        return "You Lose! Paper beats rock";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === 2) {
        computerScore++;
        return "You Lose! Scissors beats paper";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === 0) {
        computerScore++;
        return "You Lose! Rock beats scissors";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === 2) {
        playerScore++;
        return "You win! Rock beats scissors";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === 0) {
        playerScore++;
        return "You win! Paper beats rock"
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === 1) {
        playerScore++;
        return "You win! Scissors beats paper";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === 0) {
        return "Shit! Again";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === 1) {
        return "Shit! Again";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === 2) {
        return "Shit! Again";
    }
    else {
        return "Enter rock or paper or scissors only!";
    }            
}
rounds++;
console.log(rounds);
playRound(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));

function game() {
    if (rounds <= 5)
    {
        playRound(playerSelection, computerSelection);
        if (playerScore++) {
            return console.log("You win");
        }
        else if (computerScore++) {
            return console.log("You lose");
        }
        else {
            return console.log("draw")
        }
    }

    
}
game();

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
 * function to play a single round of the game: funct playRound()
 * interface: none
 * inputs: playerSelection, computerSelection 
 * outputs: string that declares the winner "You Lose! Paper beats Rock"
 * steps: 
 * 1. Create a playerSelection variable that can be rock/paper/scissors
 * 2. Use conditionals to set case insensitivity
 * 3. Match the two parameters
 * 4. Return the output string that declares the winner "You Lose! Paper beats Rock"
 */

/**
 * function game()
 * interface: none
 * inputs: playRound(playerSelection, computerSelection);
 * outputs: play a 5 round game that keeps score and reports a winner or loser at the end of each round
 * steps:
 * 1. call playRound() to play a round
 * 2. use console.log() to display the results of the round
 * 3. keep the score in a variable
 * 4. do this 5 times (for 5 rounds) 
 * 5. report the winner at the end of the game
 */