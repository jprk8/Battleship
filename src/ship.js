export class Ship {
  constructor(length) {
    this.length = length;
    this.hp = length;
    this.sunk = false;
  }

  hit() {
    if (this.hp > 0) this.hp--;
    if (this.hp === 0) this.sunk = true;
  }

  isSunk() {
    return this.sunk;
  }
}
