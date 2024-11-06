import { Gameboard } from './gameboard.js';

export class Player {
  constructor() {
    this.name = 'Player1';
    this.board = new Gameboard();
    this.board.loadDefault();
  }
}
