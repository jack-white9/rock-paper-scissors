// Basic game logic
function playRound(playerSelection, computerChoice) {
    if (
        playerSelection === "rock" && computerChoice === "paper" || 
        playerSelection === "paper" && computerChoice == "scissors" ||
        playerSelection === "scissors" && computerChoice === "rock"
        ) {
        playerLose();
    } else if (playerSelection === computerChoice) {
        playerDraw();
    } else if (
        playerSelection === "paper" && computerChoice === "rock" || 
        playerSelection === "scissors" && computerChoice == "paper" ||
        playerSelection === "rock" && computerChoice === "scissors"
        ) {
        playerWin();
    }
}

// Score counters
function playerLose() {
    computerScore = computerScore + 1;
    document.getElementById('resultText').innerHTML = 'You chose ' + playerChoice + ' but the computer chose ' + computerChoice + '. You lose.';
    document.getElementById('computerBoxScore').innerHTML = 'score: ' + computerScore;
}

function playerDraw() {
    document.getElementById('resultText').innerHTML = 'You both chose the same option. It\'s a draw!';
}

function playerWin() {
    playerScore = playerScore + 1;
    document.getElementById('resultText').innerHTML = 'The computer chose ' + computerChoice + ' but you chose ' + playerChoice + '. You win!';
    document.getElementById('playerBoxScore').innerHTML = 'score: ' + playerScore;
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

function runGame() {
    computerChoice = computerPlay();
    playRound(playerChoice, computerChoice);
    if (playerScore === 5) {
        alert('You were first to five. You won!')
    } else if (computerScore === 5) {
        alert('The computer was first to five. You lost.')
    }
}

function awaitUserClick() {
    const playerButtons = document.querySelectorAll('.playerButton');
    playerButtons.forEach((playerButton) => {
        playerButton.addEventListener('click', () => {

            // Reset computer colours
            computerRockButton.style.cssText = 'background: #726cff'
            computerPaperButton.style.cssText = 'background: #726cff'
            computerScissorsButton.style.cssText = 'background: #726cff'

            // Determine player choice
            switch (playerButton.id) {
                case 'playerRockButton':
                    playerChoice = 'rock';
                    break;
                case 'playerPaperButton':
                    playerChoice = 'paper';
                    break;
                case 'playerScissorsButton':
                    playerChoice = 'scissors';
                    break;
                default:
                    console.log('invalid');
                    break;
            };

            // Run game logic after selection is made
            runGame();
            
        });     
    });
}

let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

awaitUserClick();