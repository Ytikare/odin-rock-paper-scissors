function init() {
    getComputerChoice();
    getHumanChoice();
}

let computerChoice = '';
let humanChoice = '';

function getComputerChoice() {
    let random = (Math.random() * 10).toFixed(0);

    let result = random % 3;

    switch (result) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
    }

}


function getHumanChoice() {
    let input = prompt(`Choice between "rock", "paper" or "scissors". If you didn\'t choose any of the options or left the field black, "rock" is chosen by default`).toLocaleLowerCase();

    switch (input) {
        case "rock":
        case "paper":
        case "scissors":
            humanChoice = input;
            break;

        default:
            humanChoice = 'rock';
            break;
    }
}