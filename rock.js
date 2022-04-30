console.log("Welcome to Rock, Paper, Scissors!");

function computerPlay() {
    let i = Math.floor(Math.random() * 3)
    // console.log(i);
    if (i === 0) {
        return "rock"; 
    } else if (i === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// fixed from recursive function to while loop
function playerPrompt() {
    let k = prompt("Select your weapon:", "");
    // console.log(k);
    if (k === null) {
        return;
    }
    k = k.toLowerCase();
    while (k !== 'rock' && k !== 'paper' && k !== 'scissors') {
        alert("This is an invalid weapon.\n\nPlease choose rock, paper or scissors.");
        k = prompt("Select your weapon:", "");
        if (k === null) {
            return;
        }
        k = k.toLowerCase();
    }
    console.log("The player has chosen " + k + ".");
    return k;
}

function playRound(a, b) {
//  if (b === 'a') {
//      alert("And now you understand recursion.")
//  }
//  console.log('Player selection is ' + b);
//  if (b === undefined) {
//  return;
//  }
    console.log('The computer has chosen ' + a + '.');
    if (a === 'rock') {
        if (b === "rock") {
//          alert("It's a tie!");
            return;
        } else if (b === 'paper') {
//          alert("You win! Paper beats rock!");
            return true;
        } else {
//          alert("You lose! Rock beats scissors!");
            return false;
        }
    }
    if (a === 'paper') {
        if (b === "paper") {
//          alert("It's a tie!");
            return;
        } else if (b === 'scissors') {
//          alert("You win! Scissors beat paper!");
            return true;
        } else {
//          alert("You lose! Paper beats rock!");
            return false;
        }
    }
    if (a === 'scissors') {
        if (b === "scissors") {
//          alert("It's a tie!");
            return;
        } else if (b === 'rock') {
//          alert("You win! Rock beats scissors!");
            return true;
        } else {
//          alert("You lose! Scissors beats paper!");
            return false;
        }
    }
}

function game() {
let computerScore = 0;
let playerScore = 0;
for (let i = 0; i < 5; i++) {
let computerSelection = computerPlay();
let playerSelection = playerPrompt();
if (playerSelection === undefined) {
    console.log("You have terminated the game.")
    return;
}
let result = playRound(computerSelection, playerSelection);
// console.log(result);
if (result === true) {
    playerScore++;
    console.log("The player has won round " + (i + 1) + ".");
}
else if (result === false) {
    computerScore++;
    console.log("The computer has won round " + (i + 1) + ".");
} 
else {
    console.log("Round " + (i + 1) + " was a tie.");
}
}
if (playerScore > computerScore) {
    console.log("Congratulations! You defeated the computer!");
}
else if (computerScore > playerScore) {
    console.log("Tough luck, the computer won!");
}
else {
    console.log("You tied with the computer. Try again next time.")
}
}

game();

// test
// another test