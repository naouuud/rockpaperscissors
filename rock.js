function computerPlay() {
    let i = Math.floor(Math.random() * 3);
    if (i === 0) return "rock"; 
    else if (i === 1) return "paper";
    else return "scissors";
    }

function playRound(compy, human) {
    if (compy === 'rock') {
        if (human === "rock") return;
        else if (human === 'paper') return true;
        else return false;
        }
    if (compy === 'paper') {
        if (human === "paper") return;
        else if (human === 'scissors') return true;
        else return false;
        }
    if (compy === 'scissors') {
        if (human === "scissors") return;
        else if (human === 'rock') return true;
        else return false;
        }
    }

let playerScore = 0;
let computerScore = 0;
let round = 1;

function playGame(a, b) {
    console.log('Round ' + round + ':');
    const result = playRound(a, b);
        console.log('The computer has chosen ' + a + '.');
        console.log('The player has chosen ' + b + '.');
        if (result === true) {
            console.log('Player wins.');
            playerScore++;
        }
        else if (result===false) {
            console.log('Computer wins.');
            computerScore++;
        }
        else console.log ('It\'s a tie');
        console.log('Player score: ' + playerScore + '  Computer score: ' + computerScore);
    if (playerScore === 5) console.log('THE PLAYER IS VICTORIOUS!');
    if (computerScore === 5) console.log('THE COMPUTER IS VICTORIOUS!');
    round ++;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', () => 
                playGame(computerPlay(), button.className)));