import { Ship } from './ship.js';

export class Gameboard {
  constructor() {
    this.arr = Array.from({ length: 10 }, () => Array(10).fill(null));
    this.life = 0;
    this.defeat = false;
    this.carrier = new Ship(5);
    this.battleship = new Ship(4);
    this.cruiser = new Ship(3);
    this.submarine = new Ship(3);
    this.destroyer = new Ship(2);
  }

  clear() {
    this.arr = Array.from({ length: 10 }, () => Array(10).fill(null));
    this.life = 0;
  }

  putShip(ship, x, y, orientation = 'v') {
    if (orientation === 'v') {
      for (let i = 0; i < ship.length; i++) {
        if (!this.checkPlace(x, y + i)) return false;
      }
      for (let i = 0; i < ship.length; i++) {
        this.arr[y + i][x] = ship;
      }
    }

    if (orientation === 'h') {
      for (let i = 0; i < ship.length; i++) {
        if (!this.checkPlace(x + i, y)) return false;
      }
      for (let i = 0; i < ship.length; i++) {
        this.arr[y][x + i] = ship;
      }
    }

    this.life++;
    return true;
  }

  checkPlace(x, y) {
    if (x < 0 || y < 0 || x > 9 || y > 9) return false;
    if (this.arr[y][x]) return false;
    const padding = [];
    if (y > 0) {
      for (let offset = -1; offset < 2; offset++) {
        if (x + offset >= 0 && x + offset <= 9)
          padding.push(this.arr[y - 1][x + offset]);
      }
    }
    if (y < 9) {
      for (let offset = -1; offset < 2; offset++) {
        if (x + offset >= 0 && x + offset <= 9)
          padding.push(this.arr[y + 1][x + offset]);
      }
    }
    if (x != 0) padding.push(this.arr[y][x - 1]);
    if (x != 9) padding.push(this.arr[y][x + 1]);
    return padding.every((space) => !space);
  }

  receiveAttack(x, y) {
    if (!this.arr[y][x]) {
      this.arr[y][x] = 'miss';
      return { result: false, sunk: false };
    }

    const ship = this.arr[y][x];
    ship.hit();
    if (ship.isSunk()) this.life--;
    if (this.life === 0) this.defeat = true;
    this.arr[y][x] = 'hit';
    return {
      result: true,
      sunk: ship.sunk,
    };
  }

  loadDefault() {
    this.putShip(this.cruiser, 5, 0);
    this.putShip(this.destroyer, 7, 1);
    this.putShip(this.battleship, 1, 2);
    this.putShip(this.carrier, 3, 4);
    this.putShip(this.submarine, 6, 6, 'h');
  }

  randomPlacement() {
    let x = Math.floor(Math.random() * 9);
    let y = Math.floor(Math.random() * 9);
    let orientation;
    orientation = Math.random() >= 0.5 ? 'v' : 'h';
    const shipArray = [
      this.carrier,
      this.battleship,
      this.cruiser,
      this.submarine,
      this.destroyer,
    ];
    let deployed = false;
    while (shipArray.length > 0) {
      let ship = shipArray[0];
      deployed = this.putShip(ship, x, y, orientation);
      if (deployed) {
        shipArray.shift();
        deployed = false;
      } else {
        x = Math.floor(Math.random() * 9);
        y = Math.floor(Math.random() * 9);
        orientation = Math.random() >= 0.5 ? 'v' : 'h';
      }
    }
  }
}
