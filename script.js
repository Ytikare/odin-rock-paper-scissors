const playerChoicesList = document.querySelector('.player-choices');
const resultsDiv = document.querySelector('.result');
const resetGameButton = document.querySelector('.reset-game');
const scoreboardPara = document.querySelector('.scoreboard');
const announcerMessagePara = document.querySelector('.announcer');
const playerButtons = document.querySelectorAll('.player-choices button');

const playerChoiceSpan = document.querySelector('.player > .choice');
const computerChoiceSpan = document.querySelector('.computer > .choice');


let playerWinsCount = 0;
let computerWinsCount = 0;


function playRound(playerChoice, computerChoice) {

    playerChoiceSpan.textContent = playerChoice;
    computerChoiceSpan.textContent = computerChoice;

    let roundResult = '';
    if (computerChoice === playerChoice) {
        roundResult = `Tie!`;
    } else {

        if ((playerChoice === 'paper' && computerChoice === 'rock')
            || (playerChoice === 'rock' && computerChoice === 'scissors')
            || (playerChoice === 'scissors' && computerChoice === 'paper')) {

            playerWinsCount++;
            roundResult = `Player wins the round!`;

        } else if ((computerChoice === 'paper' && playerChoice === 'rock')
            || (computerChoice === 'rock' && playerChoice === 'scissors')
            || (computerChoice === 'scissors' && playerChoice === 'paper')) {

            computerWinsCount++;
            roundResult = `Computer wins the round!`;

        }

        if (playerWinsCount == 5) {
            roundResult = `Player won the game!`;
            endGame();
        } else if (computerWinsCount == 5) {
            roundResult = 'Computer won the game!';
            endGame();
        }
    }

    scoreboardPara.textContent = `${playerWinsCount}:${computerWinsCount}`
    announcerMessagePara.textContent = message;
}


function endGame(){
    for (const button of playerButtons) {
        button.disabled = true;
    }
}


function getComputerChoice() {
    let random = (Math.random() * 10).toFixed(0);

    let result = random % 3;

    switch (result) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        default:
            return 'scissors';
    }

}

playerChoicesList.addEventListener('click', e => {
    let target = e.target;

    if (target.localName == 'button') {
        resultsDiv.style.display = 'flex';
        resetGameButton.style.display = 'block';

        let playerChoice = target.id;

        let computerChoice = getComputerChoice();

        playRound(playerChoice, computerChoice)
    }
})

resetGameButton.addEventListener('click', e => {
    playerWinsCount = 0;
    computerWinsCount = 0;

    resultsDiv.style.display = 'none';
    e.target.style.display = 'none';

    for (const button of playerButtons) {
        button.disabled = false;
    }
})