const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice(arr) {
    
    const randomIndex = Math.floor(Math.random(choice) * choice.length);
    const randomChoice = choice[randomIndex];
    return randomChoice;
}

function playRound(computerSelection, playerSelection) {
    
    const playerChoice = prompt("Please choose between Rock, Paper, or Scissors");

    if (playerChoice === 'rock' & computerSelection === 'paper') {
        return 'You Lose';
    } else if (playerChoice === 'paper' & computerSelection === 'rock') {
        return 'You Win';
    } else if (playerChoice === 'scissors' & computerSelection === 'paper') {
        return 'You Win';
    } else if (playerChoice === 'paper' & computerSelection === 'scissors') {
        return 'You lose';
    }
    else {
        return 'Ditto'
    }
}

console.log(playRound(getComputerChoice(choice)));