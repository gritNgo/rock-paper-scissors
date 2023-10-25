let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;

const result = document.getElementById("result");
// array-like object nodelist
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.value;
        console.log(playerSelection);
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
        if (computerScore === 1) {
            result.textContent = "You lost. Try again."
        }
        else if (computerScore === 2) {
            result.textContent = "You lost. Try again."
        }
        else if (computerScore === 3) {
            result.textContent = "You lost. Try again."
        }
        else if (computerScore === 4) {
            result.textContent = "You lost. Try again."
        }
        else {
            result.textContent = "You lost. Computer wins."
        }
      }
      else {
        ++playerScore;
        if (playerScore === 1) {
            result.textContent = "You win! 4 more."
        }
        else if (playerScore === 2) {
            result.textContent = "You win! 3 more."
        }
        else if (playerScore === 3) {
            result.textContent = "You win! 2 more."
        }
        else if (playerScore === 4) {
            result.textContent = "You win! 1 more."
        }
        else {
            result.textContent = "You win the game!"
        }
      }
}   

function declareWinner() {

    if (playerScore > computerScore) {
        result.textContent = "You win the game!";
    }
    else if (computerScore > playerScore) {
        result.textContent = "Computer wins the game..."
    }
    else {
        result.textContent = "The game is a tie.";
    }
}




