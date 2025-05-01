let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = `kamień`;

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

let playerMove = `papier`;

printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to kamień, to przegrywasz!');

console.log('randomNumber', randomNumber);