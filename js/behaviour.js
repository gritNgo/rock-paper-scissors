let message;                   
let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;

const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.value;

        playRound(playerSelection, computerSelection);

        if (playerScore === 5 || computerScore === 5) {
            declareWinner();
        }
    });
})

const myArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection === playerSelection) {"Tie game"}
    
    else if ((
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
      )) {
        ++computerScore;
      }
}   

function declareWinner() {

    if (playerScore > computerScore) {
        console.log(`You win with ${playerScore} wins!`);
    }
    else if (computerScore > playerScore) {
        console.log(`Computer wins with ${computerScore} wins.`);
    }
    else {
        console.log("The game is a draw");
    }
}




