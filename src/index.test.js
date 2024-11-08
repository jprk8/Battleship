import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js';
import { Player } from './player.js';

describe('Ship class', () => {
  test('has length, hit point(hp), and sunk properties', () => {
    const ship = new Ship(5);
    expect(ship.length).toBe(5);
    expect(ship.hp).toBe(5);
    expect(ship.sunk).toBe(false);
  });

  test('hit function hits once', () => {
    const ship = new Ship(5);
    ship.hit();
    expect(ship.hp).toBe(4);
  });

  test('isSunk() returns true when sunk', () => {
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

  test('returns true after successful placement', () => {
    const ship = new Ship(3);
    const result = gameboard.putShip(ship, 1, 1, 'v');
    expect(result).toBe(true);
  });

  test('putShip(x,y) works vertically', () => {
    const ship = new Ship(3);
    gameboard.putShip(ship, 0, 0, 'v');
    expect(gameboard.arr[0][0]).toBe(ship);
    expect(gameboard.arr[1][0]).toBe(ship);
    expect(gameboard.arr[2][0]).toBe(ship);
  });

  test('putShip(x,y) works vertically 2', () => {
    const ship = new Ship(4);
    gameboard.putShip(ship, 1, 2, 'v');
    expect(gameboard.arr[2][1]).toBe(ship);
    expect(gameboard.arr[3][1]).toBe(ship);
    expect(gameboard.arr[4][1]).toBe(ship);
  });

  test('returns false after placement fail', () => {
    const ship = new Ship(3);
    const ship2 = new Ship(3);
    gameboard.putShip(ship, 1, 1);
    const result2 = gameboard.putShip(ship2, 1, 1, 'v');
    expect(result2).toBe(false);
  });

  test('placeShip(x,y) works horizontally', () => {
    const ship = new Ship(3);
    gameboard.putShip(ship, 1, 1, 'h');
    expect(gameboard.arr[1][1]).toBe(ship);
    expect(gameboard.arr[1][2]).toBe(ship);
    expect(gameboard.arr[1][3]).toBe(ship);
  });

  test('placeShip(x,y) works horizontally 2', () => {
    const ship = new Ship(3);
    gameboard.putShip(ship, 2, 5, 'h');
    expect(gameboard.arr[5][2]).toBe(ship);
    expect(gameboard.arr[5][3]).toBe(ship);
    expect(gameboard.arr[5][4]).toBe(ship);
  });

  test('receiveAttack works when hit', () => {
    const ship = new Ship(5);
    gameboard.putShip(ship, 1, 1);
    const { result, sunk } = gameboard.receiveAttack(1, 2);
    expect(result).toBe(true);
    expect(sunk).toBe(false);
  });

  test('all parts of the ship receives damage', () => {
    const ship = new Ship(5);
    gameboard.putShip(ship, 1, 1);
    const { result, coord, sunk } = gameboard.receiveAttack(1, 1);
    const shipHP2 = gameboard.arr[2][1].hp;
    const shipHP3 = gameboard.arr[3][1].hp;
    const shipHP4 = gameboard.arr[4][1].hp;
    const shipHP5 = gameboard.arr[5][1].hp;
    expect(shipHP2).toBe(4);
    expect(shipHP3).toBe(4);
    expect(shipHP4).toBe(4);
    expect(shipHP5).toBe(4);
  });

  test('default layout creation', () => {
    gameboard.loadDefault();
    const board = gameboard.arr;
    expect(board[0][5].hp).toBe(3);
    expect(board[1][7].hp).toBe(2);
    expect(board[2][1].hp).toBe(4);
    expect(board[4][3].hp).toBe(5);
    expect(board[6][7].hp).toBe(3);

    expect(board[0][0]).toBe(null);
    expect(board[1][8]).toBe(null);
    expect(board[4][4]).toBe(null);
  });

  test('reports defeated status', () => {
    const ship = new Ship(2);
    gameboard.putShip(ship, 0, 0);
    gameboard.receiveAttack(0, 0);
    expect(gameboard.defeat).toBe(false);
    gameboard.receiveAttack(0, 1);
    expect(gameboard.defeat).toBe(true);
  });
});
