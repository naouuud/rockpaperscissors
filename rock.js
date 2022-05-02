function computerPlay() {
    let i = Math.floor(Math.random() * 3);
    if (i === 0) {
        changeColor('rock');
        return "rock";
    }
    else if (i === 1) {
        changeColor('paper');
        return "paper";
    }
    else {
        changeColor('scissors');
        return "scissors";
    }
}

const computerButtons = document.querySelectorAll('button.computer');

function changeColor(rps) {
    computerButtons.forEach(button => button.style.backgroundColor = null);
    const button = document.querySelector(`button.computer.${rps}`);
    button.style.backgroundColor = 'orange';
}

function playRound(compy, human) {
    if (compy === 'rock') {
        if (human === "player rock") return;
        else if (human === 'player paper') return true;
        else return false;
        }
    if (compy === 'paper') {
        if (human === "player paper") return;
        else if (human === 'player scissors') return true;
        else return false;
        }
    if (compy === 'scissors') {
        if (human === "player scissors") return;
        else if (human === 'player rock') return true;
        else return false;
        }
    }

function updateScore() {
    const score = document.querySelector('.score');
    score.innerHTML = `Player score: ${playerScore}<br>Computer score: ${computerScore}`;
    document.body.removeChild(score);
    document.body.appendChild(score);
}

const firstButton = document.querySelector('button');

function displayRound() {
    const round = document.querySelector('.round');
    round.textContent = `Round ${roundNumber}:`;
    document.body.removeChild(round);
    document.body.insertBefore(round, firstButton);
}

let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

function playGame(a, b) {
    roundNumber ++;
    const winner = document.querySelector('.winner');
    if (winner) document.body.removeChild(winner);
    const result = playRound(a, b);
        if (result === true) {
            playerScore++;
        }
        else if (result===false) {
            computerScore++;
        }
    if (playerScore === 5) {
        const winner = document.createElement('div');
        winner.classList.add('winner');
        winner.textContent = "The player is victorious!";
        document.body.appendChild(winner);
        playerScore = 0;
        computerScore = 0;
        roundNumber = 1;
        playerButtons.forEach(button => button.style.backgroundColor = null);
        computerButtons.forEach(button => button.style.backgroundColor = null);
    }
    if (computerScore === 5) {
        const winner = document.createElement('div');
        winner.classList.add('winner');
        winner.textContent = "The computer is victorious!";
        document.body.appendChild(winner);
        playerScore = 0;
        computerScore = 0;
        roundNumber = 1;
        playerButtons.forEach(button => button.style.backgroundColor = null);
        computerButtons.forEach(button => button.style.backgroundColor = null);
    }
    updateScore();
    displayRound();
}

const playerButtons = document.querySelectorAll("button.player");
playerButtons.forEach(button => button.addEventListener('click', () => {
                playerButtons.forEach(button => button.style.backgroundColor = null);
                button.style.backgroundColor = 'blue';
                playGame(computerPlay(), button.className);
            }));