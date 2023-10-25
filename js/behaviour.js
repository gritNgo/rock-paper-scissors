let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;

const result = document.getElementById("result");
result.setAttribute('style', 'white-space: pre;');

const buttons = document.querySelectorAll("button"); // array-like object "nodelist"

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.value;
        playRound(playerSelection, computerSelection);

        if (playerScore === 5 || computerScore === 5) {
            declareWinner();
            resetGame();
        }
    }); 
})

const computerChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection === playerSelection) {"Tie game"}
    
    else if ((
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
      )) {
        ++computerScore;

        if (computerScore === 1) {
            result.textContent += `You lost. COMPUTER: ${computerScore}, YOU: ${playerScore}\r\n`;
        }
        else if (computerScore === 2) {
            result.textContent += `You lost. COMPUTER: ${computerScore}, YOU: ${playerScore}\r\n`
        }
        else if (computerScore === 3) {
            result.textContent += `You lost. COMPUTER: ${computerScore}, YOU: ${playerScore}\r\n`
        }
        else if (computerScore === 4) {
            result.textContent += `You lost. COMPUTER: ${computerScore}, YOU: ${playerScore}\r\n`
        }
      }
      else {
        ++playerScore;
        if (playerScore === 1) {
            result.textContent += `You win! YOU: ${playerScore}, COMPUTER: ${computerScore}\r\n`
        }
        else if (playerScore === 2) {
            result.textContent += `You win! YOU: ${playerScore}, COMPUTER: ${computerScore}\r\n`
        }
        else if (playerScore === 3) {
            result.textContent += `You win! YOU: ${playerScore}, COMPUTER: ${computerScore}\r\n`
        }
        else if (playerScore === 4) {
            result.textContent += `You win! YOU: ${playerScore}, COMPUTER: ${computerScore}\r\n`
        }
      }
}   

function declareWinner() {

    if (playerScore > computerScore) {
        result.textContent += "You win the game!\r\n";
    }
    else if (computerScore > playerScore) {
        result.textContent += "Computer wins the game.\r\n"
    }
}

const resetButton = document.createElement("button");
function resetGame() {
    resetButton.textContent = "Play again";
    result.appendChild(resetButton);
    resetButton.addEventListener("click", () => {
        location.reload();
    });
}


