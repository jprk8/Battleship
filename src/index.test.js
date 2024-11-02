import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js';

describe('Ship class', () => {
    it('has length, hit point(hp), and sunk properties', () => {
        const ship = new Ship(5);
        expect(ship.length).toBe(5);
        expect(ship.hp).toBe(5);
        expect(ship.sunk).toBe(false);
    });
    
    it('hit function hits once', () => {
        const ship = new Ship(5);
        ship.hit();
        expect(ship.hp).toBe(4);
    });
    
    it('isSunk() returns true when sunk', () => {
        const ship = new Ship(2);
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
});

describe('Gameboard class', () => {
    it('returns true after successful placement', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(3);
        const result = gameboard.putShip(ship, 1, 1, 'v');
        expect(result).toBe(true);
    });

    it('putShip(x,y) works vertically', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(3);
        gameboard.putShip(ship, 1, 1, 'v');
        expect(gameboard.arr[1][1]).toBe(ship);
        expect(gameboard.arr[2][1]).toBe(ship);
        expect(gameboard.arr[3][1]).toBe(ship);
    });


    it('returns false after placement fail', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(3);
        const ship2 = new Ship(3);
        gameboard.putShip(ship, 1, 1, 'v');
        const result2 = gameboard.putShip(ship2, 1, 1, 'v');
        expect(result2).toBe(false);
    });

    it('placeShip(x,y) works horizontally', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(3);
        gameboard.putShip(ship, 1, 1, 'h');
        expect(gameboard.arr[1][1]).toBe(ship);
        expect(gameboard.arr[1][2]).toBe(ship);
        expect(gameboard.arr[1][3]).toBe(ship);
    });
});
