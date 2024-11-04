export class Gameboard {
    constructor() {
        this.arr = Array.from({length: 10}, () => Array(10).fill(null));
    }

    putShip(ship, x, y, orientation = 'v') {
        if (orientation === 'v') {
            for (let i = 0; i < ship.length; i++) {
                if (!this.checkPlace(y + i, x)) return false;
            }
            for (let i = 0; i < ship.length; i++) {
                this.arr[y + i][x] = ship;
            }
        }

        if (orientation === 'h') {
            for (let i = 0; i < ship.length; i++) {
                if (!this.checkPlace(y, x + i)) return false;
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
        if (y >= 0) {
            for (let offset = -1; offset < 2; offset++) {
                if (x + offset >= 0 && x + offset <= 9) padding.push(this.arr[y - 1][x + offset]);
            }
        }
        if (y <= 9) {
            for (let offset = -1; offset < 2; offset++) {
                if (x + offset >= 0 && x + offset <= 9) padding.push(this.arr[y + 1][x + offset]);
            }
        }
        if (x != 0) padding.push(this.arr[y][x - 1]);
        if (x != 9) padding.push(this.arr[y][x + 1]);

        return padding.every((space) => !space);
    }

    receiveAttack(x, y) {
        if (!this.arr[y][x]) return { result: false, coord: [x, y], sunk: false };
        const ship = this.arr[y][x];
        ship.hit();
        return {
            result: true,
            coord: [x, y],
            sunk: ship.sunk
        };
    }
}