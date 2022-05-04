function computerPlay() { //generates random computer weapon
    let i = Math.floor(Math.random() * 3);
    if (i === 0) {
        return "rock";
    }
    else if (i === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(compy, human) { //compares computer and player selections
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

const right = document.querySelector(".right");

function updateScore() {
    const score = right.querySelector('.score');
    score.innerHTML = `Player score: ${playerScore}<br>Computer score: ${computerScore}`;
    right.removeChild(score);
    right.appendChild(score);
}

const left = document.querySelector(".left");

function updateRound() {
    const round = left.querySelector('.round');
    round.textContent = `Round ${roundNumber}`;
    left.removeChild(round);
    left.appendChild(round);
}

let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

const winner = document.querySelector(".winner");

function playGame(a, b) {
    roundNumber ++;
    const result = playRound(a, b); //calls playRound to determine round winner
        if (result === true) {
            playerScore++;
            const player = document.querySelector(`#${b}`);
            const compy = document.querySelector(`.computer.${a}`);
            player.style.backgroundColor = 'green';
            compy.style.backgroundColor = 'red';
        }
        else if (result===false) {
            computerScore++;
            const player = document.querySelector(`#${b}`);
            const compy = document.querySelector(`.computer.${a}`);
            player.style.backgroundColor = 'red';
            compy.style.backgroundColor = 'green';
        }
        else {
            const player = document.querySelector(`#${b}`);
            const compy = document.querySelector(`.computer.${a}`);
            player.style.backgroundColor = 'orange';
            compy.style.backgroundColor = 'orange';
        }
    updateScore(); 
    updateRound();
    if (playerScore === 5) {
        winner.textContent = "The player is victorious!";
        promptReset();
    }
    if (computerScore === 5) {
        winner.textContent = "The computer is victorious!";
        promptReset();
    }
}

const reset = document.querySelector(".reset");
const resetButton = document.createElement('button');

function promptReset() {
    resetButton.textContent = "Play again...";
    reset.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    reset.removeChild(resetButton);
    winner.textContent = "";
    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;
    updateScore();
    updateRound();
    playerButtons.forEach(button => button.style.backgroundColor = null);
    computerButtons.forEach(button => button.style.backgroundColor = null);
}

const computerButtons = document.querySelectorAll('button.computer');
const playerButtons = document.querySelectorAll("button.player");
playerButtons.forEach(button => button.addEventListener('click', (e) => startGame(e)));

function startGame(e) {
    computerButtons.forEach(button => button.style.backgroundColor = null);
    playerButtons.forEach(button => button.style.backgroundColor = null);
    e.srcElement.style.backgroundColor = 'blue';
    playGame(computerPlay(), e.srcElement.id);
}