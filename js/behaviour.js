let randomizer = 3;
let computerSelection;
let playerSelection;
let message;                   
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(randomizer) {
    computerSelection = Math.floor(Math.random() * randomizer);
    if (computerSelection  === 0) {
        return "Rock";
    }
    else if (computerSelection  === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

getComputerChoice(randomizer);
// check if getComputerChoice works
console.log(getComputerChoice(randomizer));

function playRound(playerSelection, computerSelection) {

    if (playerSelection = rockButton && computerSelection === 1) {
        computerScore++;
        return message = "You Lose! Paper beats rock";
    }
    else if (playerSelection = "paper" && computerSelection === 2) {
        computerScore++;
        return message = "You Lose! Scissors beats paper";
    }
    else if (playerSelection = "scissors" && computerSelection === 0) {
        computerScore++;
        return message = "You Lose! Rock beats scissors";
    }
    else if (playerSelection = "rock" && computerSelection === 2) {
        playerScore++;
        return message = "You win! Rock beats scissors";
    }
    else if (playerSelection = "paper" && computerSelection === 0) {
        playerScore++;
        return message = "You win! Paper beats rock"
    }
    else if (playerSelection = "scissors" && computerSelection === 1) {
        playerScore++;
        return message = "You win! Scissors beats paper";
    }
    else if (playerSelection = "rock" && computerSelection === 0) {
        getComputerChoice(randomizer);
        return message = "Both rock! Again";
    }
    else if (playerSelection = "paper" && computerSelection === 1) {
        getComputerChoice(randomizer);
        return message = "Both paper! Again";
    }
    else if (playerSelection = "scissors" && computerSelection === 2) {
        getComputerChoice(randomizer);
        return message = "Both scissors! Again!";
    }
    else {
        getComputerChoice(randomizer);
        return message = "Enter rock or paper or scissors only!";
    }            


}   

/* function game() {

    if (playerScore > computerScore) {
        console.log(`You win with ${playerScore} wins!`);
    }
    else if (computerScore > playerScore) {
        console.log(`Computer wins with ${computerScore} wins.`);
    }
    else {
        console.log("The game is a draw");
    }
} */

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => { playerSelection = 5;});

// get input from player

/* const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
    playerSelection = "paper";
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
    playerSelection = "scissors";
}); */


/* // code to add event listener to all buttons with querySelectorAll
// buttons is a node list. It is an array-like object 
const buttons = document.querySelectorAll("button");

// use the forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each, add a "click" listener
    button.addEventListener("click", () => {
        alert(button.id);
    })
})
let elements = Array.from(nodeList); */

