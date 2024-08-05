const playerChoicesList = document.querySelector('.player-choices');

function playRound(playerChoice, computerChoice) {
    if (computerChoice === playerChoice) {
        console.log('Tie');
    } else {

        if ((playerChoice === 'paper' && computerChoice === 'rock')
            || (playerChoice === 'rock' && computerChoice === 'scissors')
            || (playerChoice === 'scissors' && computerChoice === 'paper')) {
            playerWins();
        } else if ((computerChoice === 'paper' && playerChoice === 'rock')
            || (computerChoice === 'rock' && playerChoice === 'scissors')
            || (computerChoice === 'scissors' && playerChoice === 'paper')) {
            computerWins();
        }

    }
}

function playerWins() {
    console.log('Player wins!')
}

function computerWins() {
    console.log('Computer wins!')
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
        let playerChoice = target.id;

        let computerChoice = getComputerChoice();

        playRound(playerChoice, computerChoice)
    }
})