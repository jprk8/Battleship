import './style.css';
import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js';
import { Player } from './player.js';
import { showBoard, updateSquare } from './display-controller.js';

console.log('Battleship');

const player = new Player();
const enemy = new Player();

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
            enemy.board.receiveAttack(x, y);
            updateSquare(enemy, x, y);
        }
    });
}