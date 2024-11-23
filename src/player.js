class Player {
  constructor(name, health, strength, attack) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }

  isAlive() {
    return this.health > 0;
  }

  takeDamage(damage) {
    this.health = Math.max(0, this.health - damage); // Ensure health doesn't go negative
  }
}

module.exports = Player;
