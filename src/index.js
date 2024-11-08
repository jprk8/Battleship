import './style.css';
import { Ship } from './ship.js';
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
  gameResult.textContent = 'FIGHT!';
  start.style.display = 'none';
  reset.style.display = 'block';
});

reset.addEventListener('click', () => {
  player = new Player('Player');
  enemy = new Player('Computer');
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
      const x = square.getAttribute('x');
      const y = square.getAttribute('y');
      const { result, sunk } = enemy.board.receiveAttack(x, y);
      updateSquare(enemy, x, y, true);
      if (sunk) {
        updateShipCount(enemy, true);
        showSunk(true);
      }
      if (enemy.board.life === 0) {
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

function disableBoard() {
  const enemyBoard = document.querySelector('.enemy-board');
  enemyBoard.classList.add('disable');
}

function enableBoard() {
  const enemyBoard = document.querySelector('.enemy-board');
  enemyBoard.classList.remove('disable');
}

async function cpuPlay() {
  let attackDone = false;
  let hitTarget = false;
  let x = Math.floor(Math.random() * 9);
  let y = Math.floor(Math.random() * 9);
  const board = player.board.arr;

  // use this flag to improve cpu play
  let hitFlag = false;
  while (!attackDone) {
    console.log(`cpu attack ${x} ${y}`);
    if (board[y][x] != 'miss' && board[y][x] != 'hit') {
      if (board[y][x] instanceof Ship) {
        const { result, sunk } = player.board.receiveAttack(x, y);
        await delay(500);
        updateSquare(player, x, y, false);
        if (sunk) showSunk();
        hitFlag = true;
      } else {
        player.board.receiveAttack(x, y);
        await delay(500);
        updateSquare(player, x, y, false);
        attackDone = true;
        return;
      }
    }
    if (hitFlag) {
      // try adjacent square if hit
      let top, bottom, right, left;
      if (y > 0) top = board[y - 1][x];
      if (y < 9) bottom = board[y + 1][x];
      if (x < 9) right = board[y][x + 1];
      if (x > 0) left = board[y][x - 1];
      if (top != 'hit' && top != 'miss' && y > 0) {
        y--;
      } else if (bottom != 'hit' && bottom != 'miss' && y < 9) {
        y++;
      } else if (right != 'hit' && right != 'miss' && x < 9) {
        x++;
      } else if (left != 'hit' && left != 'miss' && x > 0) {
        x--;
      }
    } else {
      x = Math.floor(Math.random() * 9);
      y = Math.floor(Math.random() * 9);
    }
    hitFlag = false;
  }

  return new Promise.resolve();
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function showSunk(enemy = false) {
  let sunk = document.querySelector('.player-sunk');
  if (enemy) sunk = document.querySelector('.enemy-sunk');
  sunk.style.display = 'block';
  setTimeout(() => {
    sunk.style.display = 'none';
  }, 500);
}
