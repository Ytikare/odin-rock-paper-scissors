function init() {
    getComputerChoice();
}

let computerChoice = 'a';

function getComputerChoice() {
    let random = (Math.random() * 10).toFixed(0);

    console.log(random)
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