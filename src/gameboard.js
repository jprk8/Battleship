import { Ship } from './ship.js';

export class Gameboard {
    constructor() {
        this.arr = Array.from({length: 10}, () => Array(10).fill(null));
    }

    putShip(ship, x, y, orientation = 'v') {
        if (orientation === 'v') {
            for (let i = 0; i < ship.length; i++) {
                // need to set flag to check all spaces before adding ship
                if (!this.checkPlace(x, y + i)) return false;
            }
            for (let i = 0; i < ship.length; i++) {
                this.arr[y + i][x] = ship;
            }
        }

        if (orientation === 'h') {
            for (let i = 0; i < ship.length; i++) {
                // need to set flag to check all spaces before adding ship
                if (!this.checkPlace(x + i, y)) return false;
            }
            for (let i = 0; i < ship.length; i++) {
                this.arr[x][y + i] = ship;
            }
        }

        return true;
    }

    checkPlace(x, y) {
        if (this.arr[y][x]) return false;
        // check padding (cannot place adjacent to another ship)
        const padding = [];
        if (y != 0) {
            for (let offset = -1; offset < 2; offset++) {
                if (x + offset >= 0 && x + offset <= 9) padding.push(this.arr[y - 1][x + offset]);
            }
        }
        if (y != 9) {
            for (let offset = -1; offset < 2; offset++) {
                if (x + offset >= 0 && x + offset <= 9) padding.push(this.arr[y + 1][x + offset]);
            }
        }
        if (x != 0) padding.push(this.arr[y][x - 1]);
        if (x != 9) padding.push(this.arr[y][x + 1]);

        return padding.every((space) => !space);
    }
}