function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection == "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
        playerLose();
    } else if (playerSelection === computerSelection) {
        playerDraw();
    } else {
        playerWin();
    }
}

function playerLose() {
    alert("You chose " + playerSelection + ", but the computer chose " + computerSelection + ". You lose.");
    computerScore = computerScore + 1;
}

function playerDraw() {
    alert("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". It's a draw.");
}

function playerWin() {
    alert("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". You win.");
    playerScore = playerScore + 1;
}

function computerPlay() {
    computerSelection = Math.floor(Math.random()*3) + 1;
    if (computerSelection === 1) {
        return "rock";
    } else if (computerSelection === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function humanPlay() {
    while(true) {
        playerSelection = prompt().toLowerCase();
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection == "scissors") {
            break;
        } else {
            alert("Please select a valid choice: Rock, paper, or scissors.");
        }
    }
    return playerSelection;
}


let computerScore = 0;
let playerScore = 0;
let computerSelection;
let playerSelection;

computerSelection = computerPlay();
playerSelection = humanPlay();
playRound(playerSelection, computerSelection);