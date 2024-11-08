import './style.css';
import { Ship } from './ship.js';
//import { Gameboard } from './gameboard.js';
import { Player } from './player.js';
import {
  showBoard,
  updateSquare,
  updateShipCount,
  announceWinner,
  deleteBoard,
} from './display-controller.js';

const status = document.querySelector('.status');
let gameResult = document.querySelector('.game-result');
let player = new Player('Player');
let enemy = new Player('Computer');

player.board.loadDefault();
enemy.board.randomPlacement();
showBoard(player);
showBoard(enemy, true);

const start = document.querySelector('button.start');
const reset = document.querySelector('.reset');

start.addEventListener('click', () => {
  loadHitbox();
  status.textContent = '';
  gameResult.textContent = 'Battle!';
  start.style.display = 'none';
  reset.style.display = 'block';
});

reset.addEventListener('click', () => {
  player = new Gameboard();
  enemy = new Gameboard();
  deleteBoard('left');
  deleteBoard('right');
  player.board.loadDefault();
  enemy.board.randomPlacement();
  showBoard(player);
  showBoard(enemy, true);
  reset.style.display = 'none';
  start.style.display = 'block';
  gameResult.textContent = 'Ready your fleet';
});

const randomize = document.querySelector('.randomize');
randomize.addEventListener('click', () => {
  player.board.clear();
  player.board.randomPlacement();
  deleteBoard('left');
  showBoard(player);
});

// load only on enemy board for now (player vs cpu)
function loadHitbox() {
  const enemyBoard = document.querySelector('.enemy-board');
  enemyBoard.addEventListener('click', (event) => {
    const square = event.target;
    if (square.classList.contains('enemy-square')) {
      console.log('player attack');
      const x = square.getAttribute('x');
      const y = square.getAttribute('y');
      const { result, sunk } = enemy.board.receiveAttack(x, y);
      updateSquare(enemy, x, y, true);
      if (sunk) updateShipCount(enemy, true);
      if (enemy.board.life === 0) {
        // end game and announce winner
        disableBoard();
        announceWinner(player);
        return;
      }
      // computer plays after a miss
      if (!result) {
        disableBoard();
        cpuPlay()
          .then(() => updateShipCount(player))
          .then(() => {
            if (player.board.life === 0) {
              announceWinner(enemy);
              return;
            }
          })
          .then(() => enableBoard());
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

async function cpuPlay() {
  // generate random x and y
  let attackDone = false;
  let hitTarget = false;
  let x = Math.floor(Math.random() * 9);
  let y = Math.floor(Math.random() * 9);
  const board = player.board.arr;

  // use this flag to improve cpu play
  let hitFlag = false;
  while (!attackDone) {
    if (board[y][x] != 'miss' && board[y][x] != 'hit') {
      if (board[y][x] instanceof Ship) {
        player.board.receiveAttack(x, y);
        await delay(500);
        updateSquare(player, x, y, false);
      } else {
        player.board.receiveAttack(x, y);
        await delay(500);
        updateSquare(player, x, y, false);
        return true;
      }
    } else {
      x = Math.floor(Math.random() * 9);
      y = Math.floor(Math.random() * 9);
    }
  }

  return new Promise((resolve) => resolve());
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
