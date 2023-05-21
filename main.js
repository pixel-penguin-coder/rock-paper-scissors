// get random output from rock paper scissors
const getComputerChoice = () => {
    // create an array for the choices
    const choices = ['rock', 'paper', 'scissors'];
    // randomly get a choice from the Array
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

const playRound = (playerSelection, computerSelection) => {
    const playerSelectionLower = playerSelection.toLowerCase();
    if (playerSelectionLower === computerSelection) {
        return 'Tie!';
    }
    else if (playerSelectionLower === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock';
    } 
    else if (playerSelectionLower === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors';
    } 
    else if (playerSelectionLower === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper';
    } else {
        return 'You Win!';
    }
}

const game = () => {
    // initialize result
    let result = 0;
    // play 5 rounds, keep the score and report a winner or loser at the end of each round
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Rock, paper, scissors?");
        let gameResult = playRound(userInput, getComputerChoice());
        console.log(gameResult);
        if (gameResult === 'You Win!') {
            result++;
            console.log(result);
        }
        else {
            console.log(result);
        }
    }
    // announce the final winner
    if (result >= 3) {
        console.log(`You win ${result} matches out of 5!`);
    } else {
        console.log("You Lose against a computer!");
    }
}

game();
 