import { Ship } from './ship.js';

export { showBoard };

function showBoard(player, enemy = false) {
    let side = document.querySelector('.player-board');
    if (enemy) side = document.querySelector('.enemy-board');
    const board = player.board.arr;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const square = makeSquare(player, j, i, enemy);
            side.appendChild(square);
        }
    }
}

function makeSquare(player, x, y, enemy = false) {
    const content = player.board.arr[y][x];
    const square = document.createElement('div');
    square.setAttribute('x', x);
    square.setAttribute('y', y);
    (enemy) ? square.className = 'enemy-square' : square.className = 'square';
    if (content === 'hit') {
        square.className = 'hit-square';
        square.textContent = 'X';
    } else if (content === 'miss') {
        square.clasName = 'miss-square';
        square.textContent = '+';
    } else if (content instanceof Ship && !enemy) {
        square.style.backgroundColor = 'navy';
    }

    return square;
}

function updateBoard(player, x, y) {

}