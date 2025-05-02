//let playerInput = prompt('Wybierz swój ruch 1: kamień, 2: papier, 3: nożyce');

document.getElementById("rock-button").addEventListener('click', () => playGame('1'));
document.getElementById("paper-button").addEventListener('click', () => playGame('2'));
document.getElementById("scissors-button").addEventListener('click', () => playGame('3'));
let counter = 0; 

const playGame = function (playerInput) {
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    const moveToObject = function (move) {
        if (move == '1') {
            return 'kamień';
        } else if (move == '2') {
            return 'papier';
        } else if (move == '3') {
            return 'nożyce';
        } else {
            printMessage('Nie ma takiego ruchu...');
            return 'wrongMove';
        }
    }


    const whoWon = function () {
        const computerMove = moveToObject(randomNumber);
        const playerMove = moveToObject(playerInput);
        counter = counter+1; 
        if (playerMove == 'wrongMove') return;

        if (computerMove == playerMove) {
            printMessage(`${counter}. Komputer wybrał ${computerMove}, Ty wybrałeś ${playerMove}. Remis!`)
        } else if ((computerMove == 'kamień' && playerMove == 'nożyce') ||
            (computerMove == 'papier' && playerMove == 'kamień') ||
            (computerMove == 'nożyce' && playerMove == 'papier')
        ) {
            printMessage(`${counter}. Komputer wybrał ${computerMove}, Ty wybrałeś ${playerMove}. Przegrywasz tą rundę...`)
        } else {
            printMessage(`${counter}. Komputer wybrał ${computerMove}, Ty wybrałeś ${playerMove}. Wygrywasz!`);
        }
    }

    whoWon();
}