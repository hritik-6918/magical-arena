const Player = require("../src/player");
const Arena = require("../src/arena");

describe("Arena Class", () => {
  test("Fight ends with a winner", () => {
    const playerA = new Player("Player A", 50, 5, 10);
    const playerB = new Player("Player B", 100, 10, 5);
    const arena = new Arena(playerA, playerB);

    const winner = arena.startFight();
    expect(winner.isAlive()).toBe(true);
  });
});
