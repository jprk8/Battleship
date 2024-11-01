import { Ship } from './ship.js';

it('Ship has length, hit point(hp), and sunk properties', () => {
    const ship = new Ship(5);
    expect(ship.length).toBe(5);
    expect(ship.hp).toBe(5);
    expect(ship.sunk).toBe(false);
});

it('Ship hit function hits once', () => {
    const ship = new Ship(5);
    ship.hit();
    expect(ship.hp).toBe(4);
});

it('Ship isSunk() returns true when sunk', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});