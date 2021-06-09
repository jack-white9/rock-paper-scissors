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
    computerScore = computerScore + 1;
    alert("You chose " + playerSelection + ", but the computer chose " + computerSelection + ". You lose. \n(Player: " + playerScore + " | Computer: " + computerScore + ")");
}

function playerDraw() {
    alert("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". It's a draw. \n(Player: " + playerScore + " | Computer: " + computerScore + ")");
}

function playerWin() {
    playerScore = playerScore + 1;
    alert("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". You win. \n(Player: " + playerScore + " | Computer: " + computerScore + ")");
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
        playerSelection = prompt("Choose rock, paper, or scissors.").toLowerCase();
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection == "scissors") {
            break;
        } else {
            alert("Please select a valid choice: Rock, paper, or scissors.");
        }
    }
    return playerSelection;
}

function game() {
    let i;
    for (i = 0; i < 5; i++) {
        let computerSelection;
        let playerSelection;
        computerSelection = computerPlay();
        playerSelection = humanPlay();
        playRound(playerSelection, computerSelection);
    }
}

let computerScore = 0;
let playerScore = 0;

game();