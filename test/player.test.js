const Player = require("../src/player");

describe("Player Class", () => {
  test("Player takes damage correctly", () => {
    const player = new Player("TestPlayer", 100, 5, 10);
    player.takeDamage(30);
    expect(player.health).toBe(70);
  });

  test("Player health does not go below 0", () => {
    const player = new Player("TestPlayer", 50, 5, 10);
    player.takeDamage(100);
    expect(player.health).toBe(0);
  });
});
