let playerInput = prompt('Wybierz swój ruch 1: kamień, 2: papier, 3: nożyce');

let randomNumber = Math.floor(Math.random() * 3 + 1);

function moveToObject(move) {
    if(move == '1') {
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

function whoWon() {
    const computerMove = moveToObject(randomNumber);
    const playerMove = moveToObject(playerInput);

    if(playerMove == 'wrongMove') return;

    if(computerMove == playerMove) {
        printMessage('Remis!')
    } else if ((computerMove == 'kamień' && playerMove == 'nożyce') ||
               (computerMove == 'papier' && playerMove == 'kamień') || 
               (computerMove == 'nożyce' && playerMove == 'papier')
    ) {
        printMessage('Przegrywasz tą rundę...')
    } else {
        printMessage('Wygrywasz!');
    }
}

whoWon();