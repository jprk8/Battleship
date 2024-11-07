import { Ship } from "./ship.js";

export class Gameboard {
    constructor() {
        this.arr = Array.from({length: 10}, () => Array(10).fill(null));
    }

    putShip(ship, x, y, orientation = 'v') {
        if (orientation === 'v') {
            for (let i = 0; i < ship.length; i++) {
                if (!this.checkPlace(x, y + i,)) return false;
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

        return true;
    }

    checkPlace(x, y) {
        if (this.arr[y][x]) return false;
        if (x < 0 || y < 0 || x > 9 || y > 9) return false;
        const padding = []; 
        if (y > 0) {
            for (let offset = -1; offset < 2; offset++) {
                if (x + offset >= 0 && x + offset <= 9) padding.push(this.arr[y - 1][x + offset]);
            }
        }
        if (y < 9) {
            for (let offset = -1; offset < 2; offset++) {
                if (x + offset >= 0 && x + offset <= 9) padding.push(this.arr[y + 1][x + offset]);
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
        this.arr[y][x] = 'hit';
        return {
            result: true,
            sunk: ship.sunk
        };
    }

    loadDefault() {
        const carrier = new Ship(5);
        const battleship = new Ship(4);
        const cruiser = new Ship(3);
        const submarine = new Ship(3);
        const destroyer = new Ship(2);
        this.putShip(cruiser, 5, 0);
        this.putShip(destroyer, 7, 1);
        this.putShip(battleship, 1, 2);
        this.putShip(carrier, 3, 4);
        this.putShip(submarine, 6, 6, 'h');
    }
}