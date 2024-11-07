import './style.css';
//import { Ship } from './ship.js';
//import { Gameboard } from './gameboard.js';
import { Player } from './player.js';
import { showBoard, updateSquare, updateShipCount, announceWinner } from './display-controller.js';

console.log('Battleship');

const player = new Player('Human');
const enemy = new Player('Computer');
let gameover = false;

showBoard(player);
showBoard(enemy, true);

loadHitbox();

// load only on enemy board for now (player vs cpu)
function loadHitbox() {
    const enemyBoard = document.querySelector('.enemy-board');
    enemyBoard.addEventListener('click', (event) => {
        const square = event.target;
        if (square.classList.contains('enemy-square')) {
            const x = square.getAttribute('x');
            const y = square.getAttribute('y');
            const { result, sunk } = enemy.board.receiveAttack(x, y);
            updateSquare(enemy, x, y, true);
            if (sunk) updateShipCount(enemy, true);
            if (enemy.board.life === 0) {
                // endgame and announce winner
                disableBoard();
                announceWinner(player);
            }
            // computer plays after a miss
            if (!result) {
                disableBoard();
                cpuPlay();
                enableBoard();
            }
        }
    });
}

// use to switch turns
function disableBoard() {
    const enemyBoard = document.querySelector('.enemy-board');
    enemyBoard.classList.add('disable');
}

function enableBoard() {
    const enemyBoard = document.querySelector('.enemy-board');
    enemyBoard.classList.remove('disable');
}

function cpuPlay() {
    // generate random x and y
    let attackDone = false;
    let x = Math.floor(Math.random() * 9);
    let y = Math.floor(Math.random() * 9);
    const board = player.board.arr;
    while (!attackDone) {
        if (board[y][x] != 'miss' && board[y][x] != 'hit') {
            player.board.receiveAttack(x, y);
            updateSquare(player, x, y, false);
            attackDone = true;
        } else {
            x = Math.floor(Math.random() * 9);
            y = Math.floor(Math.random() * 9);
        }
    }
}