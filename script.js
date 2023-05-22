const CHOICES = ['rock', 'paper', 'scissors'];
const computerChoice = document.querySelector('#computer-choice');
const playerChoice = document.querySelector('#player-choice');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const resultText = document.querySelector('.result');
const tie =  document.querySelector('#tie');
const resetButton = document.querySelector('#play-again');
const cardInner = document.querySelector('.flip-card-inner');
const buttons = document.querySelectorAll('.button-stack button');

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomNumber];
}

function updateGameState(playerSelection, computerSelection) {
    computerChoice.textContent = `${computerSelection.toUpperCase()}`;
    playerChoice.textContent = `${playerSelection.toUpperCase()}`;
    tie.classList.toggle('hidden', playerSelection !== computerSelection);

    if ((playerSelection === 'rock' && computerSelection === 'paper') || 
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')) {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    } else if (playerSelection !== computerSelection) {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }
    showResult(parseInt(playerScore.textContent), parseInt(computerScore.textContent));
}

function showResult(playerScore, computerScore) {
    if (computerScore === 5 || playerScore === 5) {
        cardInner.classList.add('transform');
        if (computerScore === 5) {
            resultText.textContent = 'You lost!😢';
        } else {
            resultText.textContent = 'You won!🥳';
        }
    }
}

function handleClick(event) {
    const playerSelection = event.target.value;
    const computerSelection = getComputerChoice();
    updateGameState(playerSelection, computerSelection);
}

function resetGameState() {
    computerScore.textContent = 0;
    playerScore.textContent = 0;
    computerChoice.textContent = '';
    playerChoice.textContent = '';
    cardInner.classList.remove('transform');
}

resetButton.addEventListener('click', resetGameState);
buttons.forEach((button) => button.addEventListener('click', handleClick));