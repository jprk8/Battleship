import './style.css';
import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js';
import { Player } from './player.js';
import { showBoard } from './display-controller.js';

console.log('Battleship');

const player = new Player();
const enemy = new Player();

showBoard(player);
showBoard(enemy, true);

loadHitbox();

// load only on enemy board for now (player vs cpu)
function loadHitbox() {
    const enemySquares = document.querySelectorAll('.enemy-square');
    enemySquares.forEach((square) => {
        square.addEventListener('click', () => {
            console.log(`x:${square.getAttribute('x')} y:${square.getAttribute('y')}`);
            
        })
    });
}