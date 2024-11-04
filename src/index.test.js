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
    let gameboard;

    beforeEach(() => {
        gameboard = new Gameboard();
    });

    it('returns true after successful placement', () => {
        const ship = new Ship(3);
        const result = gameboard.putShip(ship, 1, 1, 'v');
        expect(result).toBe(true);
    });

    it('putShip(x,y) works vertically', () => {
        const ship = new Ship(3);
        gameboard.putShip(ship, 1, 1, 'v');
        expect(gameboard.arr[1][1]).toBe(ship);
        expect(gameboard.arr[2][1]).toBe(ship);
        expect(gameboard.arr[3][1]).toBe(ship);
    });

    it('putShip(x,y) works vertically 2', () => {
        const ship = new Ship(3);
        gameboard.putShip(ship, 2, 5, 'v');
        expect(gameboard.arr[5][2]).toBe(ship);
        expect(gameboard.arr[6][2]).toBe(ship);
        expect(gameboard.arr[7][2]).toBe(ship);
    });

    it('returns false after placement fail', () => {
        const ship = new Ship(3);
        const ship2 = new Ship(3);
        gameboard.putShip(ship, 1, 1);
        const result2 = gameboard.putShip(ship2, 1, 1, 'v');
        expect(result2).toBe(false);
    });

    it('placeShip(x,y) works horizontally', () => {
        const ship = new Ship(3);
        gameboard.putShip(ship, 1, 1, 'h');
        expect(gameboard.arr[1][1]).toBe(ship);
        expect(gameboard.arr[1][2]).toBe(ship);
        expect(gameboard.arr[1][3]).toBe(ship);
    });

    it('placeShip(x,y) works horizontally 2', () => {
        const ship = new Ship(3);
        gameboard.putShip(ship, 2, 5, 'h');
        expect(gameboard.arr[5][2]).toBe(ship);
        expect(gameboard.arr[5][3]).toBe(ship);
        expect(gameboard.arr[5][4]).toBe(ship);
    });

    it ('receiveAttack works when hit', () => {
        const ship = new Ship(5);
        gameboard.putShip(ship, 1, 1);
        const { result, coord, sunk } = gameboard.receiveAttack(1, 2);
        expect(result).toBe(true);
        expect(coord).toEqual([1, 2]);
        expect(sunk).toBe(false);
    });

    it ('all parts of the ship receives damage', () => {
        const ship = new Ship(5);
        gameboard.putShip(ship, 1, 1);
        const { result, coord, sunk } = gameboard.receiveAttack(1, 1);
        const shipHP1 = gameboard.arr[1][1].hp;
        const shipHP2 = gameboard.arr[2][1].hp;
        const shipHP3 = gameboard.arr[3][1].hp;
        const shipHP4 = gameboard.arr[4][1].hp;
        const shipHP5 = gameboard.arr[5][1].hp;
        expect(shipHP1).toBe(4);
        expect(shipHP2).toBe(4);
        expect(shipHP3).toBe(4);
        expect(shipHP4).toBe(4);
        expect(shipHP5).toBe(4);
    });
});
