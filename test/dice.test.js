const Dice = require("../src/dice");

describe("Dice Class", () => {
  test("Dice roll is within valid range", () => {
    const dice = new Dice(6);
    for (let i = 0; i < 100; i++) {
      const roll = dice.roll();
      expect(roll).toBeGreaterThanOrEqual(1);
      expect(roll).toBeLessThanOrEqual(6);
    }
  });
});
