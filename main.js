function playRound(playerSelection, computerSelection) {
    if (
        playerSelection === "rock" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection == "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock"
        ) {
        playerLose();
    } else if (playerSelection === computerSelection) {
        playerDraw();
    } else if (
        playerSelection === "paper" && computerSelection === "rock" || 
        playerSelection === "scissors" && computerSelection == "paper" ||
        playerSelection === "rock" && computerSelection === "scissors"
        ) {
        playerWin();
    }
}


function playerLose() {
    computerScore = computerScore + 1;
    console.log('lose')
}

function playerDraw() {
    console.log('draw')
}

function playerWin() {
    playerScore = playerScore + 1;
    console.log('win')
}


function computerPlay() {
    computerInt = Math.floor(Math.random()*3) + 1;
    if (computerInt === 1) {
        const computerRockButton = document.querySelector('#computerRockButton');
        computerRockButton.style.cssText = 'background: #ffffbf';
        return 'rock';
    } else if (computerInt === 2) {
        const computerPaperButton = document.querySelector('#computerPaperButton');
        computerPaperButton.style.cssText = 'background: #ffffbf';
        return 'paper';
    } else {
        const computerScissorsButton = document.querySelector('#computerScissorsButton');
        computerScissorsButton.style.cssText = 'background: #ffffbf';
        return 'scissors';
    }
}

function playerPlay() {
    const playerButtons = document.querySelectorAll('.playerButton');
    playerButtons.forEach((playerButton) => {
        playerButton.addEventListener('click', () => {
            switch (playerButton.id) {
                case 'playerRockButton' :
                    playerChoice = 'rock';
                case 'playerPaperButton':
                    playerChoice = 'paper';
                case 'playerScissorsButton':
                    playerChoice = 'scissors';
            };
            console.log(playerChoice);
        });     
    });
}

function game() {
    computerSelection = computerPlay();
    playerPlay();
    playRound(playerChoice, computerSelection);
}

let computerSelection;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

game();