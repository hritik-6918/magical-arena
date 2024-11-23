const Dice = require("./dice");

class Arena {
  constructor(playerA, playerB) {
    this.playerA = playerA;
    this.playerB = playerB;
    this.attackingDice = new Dice();
    this.defendingDice = new Dice();
  }

  startFight() {
    let attacker, defender;

    while (this.playerA.isAlive() && this.playerB.isAlive()) {
      // Determine the attacker and defender
      [attacker, defender] =
        this.playerA.health <= this.playerB.health
          ? [this.playerA, this.playerB]
          : [this.playerB, this.playerA];

      console.log(`${attacker.name} attacks ${defender.name}!`);
      const attackRoll = this.attackingDice.roll();
      const defenseRoll = this.defendingDice.roll();

      const attackDamage = attacker.attack * attackRoll;
      const defenseStrength = defender.strength * defenseRoll;
      const netDamage = Math.max(0, attackDamage - defenseStrength);

      defender.takeDamage(netDamage);
      console.log(
        `${defender.name} takes ${netDamage} damage. Remaining health: ${defender.health}`
      );
    }

    const winner = this.playerA.isAlive() ? this.playerA : this.playerB;
    console.log(`🎉 ${winner.name} wins the match!`);
    return winner;
  }
}

module.exports = Arena;
