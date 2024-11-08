import { Ship } from './ship.js';

export {
  showBoard,
  updateSquare,
  updateShipCount,
  announceWinner,
  deleteBoard,
};

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

  let shipCount = document.querySelector('.player-ship-count');
  if (enemy) shipCount = document.querySelector('.enemy-ship-count');
  shipCount.textContent = `Ship Count: ${player.board.life}`;
}

function makeSquare(player, x, y, enemy = false) {
  const content = player.board.arr[y][x];
  const square = document.createElement('div');
  square.setAttribute('x', x);
  square.setAttribute('y', y);
  enemy ? (square.className = 'enemy-square') : (square.className = 'square');
  if (content instanceof Ship && !enemy) {
    square.style.backgroundColor = 'navy';
  }

  return square;
}

function updateSquare(player, x, y, enemy = false) {
  let square = document.querySelector(`.square[x='${x}'][y='${y}']`);
  if (enemy)
    square = document.querySelector(`.enemy-square[x='${x}'][y='${y}']`);
  let content = player.board.arr[y][x];
  if (content === 'hit') {
    square.className = 'hit-square';
    square.textContent = 'X';
  } else if (content === 'miss') {
    square.className = 'miss-square';
    square.textContent = '+';
  }
}

function updateShipCount(player, enemy = false) {
  let shipCount = document.querySelector('.player-ship-count');
  if (enemy) shipCount = document.querySelector('.enemy-ship-count');
  shipCount.textContent = `Ship Count: ${player.board.life}`;
}

function announceWinner(player) {
  const result = document.querySelector('.game-result');
  result.textContent = `${player.name} Win!`;
  result.style.display = 'block';
}

function deleteBoard(side = 'left') {
  let container = document.querySelector('.player-side');
  let board = document.querySelector('.player-board');
  let newBoard = document.createElement('div');
  newBoard.className = 'player-board';
  if (side === 'right') {
    container = document.querySelector('.enemy-side');
    board = document.querySelector('.enemy-board');
    newBoard.className = 'enemy-board';
    container.removeChild(board);
    container.appendChild(newBoard);
  } else {
    const randomize = document.querySelector('.randomize');
    container.removeChild(board);
    container.insertBefore(newBoard, randomize);
  }
}
