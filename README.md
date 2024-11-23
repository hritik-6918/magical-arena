# Magical Arena

The **Magical Arena** is a simulated battle game where two players compete until one of them loses all their health. Players take turns attacking and defending based on dice rolls, with their attributes determining the outcome of the fight.

# Problem Statement

The arena operates on the following rules:

1. Each player is defined by the following attributes:
- **Health**: Positive integer, reduced when a player takes damage.
- **Strength**: Positive integer, influences the amount of damage defended.
- **Attack**: Positive integer, determines the potential attack damage.

2. Players fight in turns:
- The player with lower health attacks first.
- The attacker rolls an attacking dice to calculate attack damage.
- The defender rolls a defending dice to calculate defended damage.
- Damage inflicted is the attack damage minus defended damage.

3. The game continues until one player's health reaches zero.

# Example Gameplay

Given two players:

- **Player A**: `Health = 50, Strength = 5, Attack = 10`
- **Player B**: `Health = 100, Strength = 10, Attack = 5`
  
A sample gameplay sequence:

1. Player A attacks first (lower health).

- Attack roll: `5`
- Defense roll: `2`
- Attack damage: `5 * 10 = 50`
- Defended damage: `2 * 10 = 20`
- Player B's health reduces by `50 - 20 = 30`.
  
2. Player B attacks:

- Attack roll: `4`
- Defense roll: `3`
- Attack damage: `4 * 5 = 20`
- Defended damage: `3 * 5 = 15`
- Player A's health reduces by `20 - 15 = 5`.
  
The process repeats until one player's health reaches zero.

# Project Structure

```bash
 /magical-arena
├── src/
│   ├── player.js          # Defines the Player class
│   ├── arena.js           # Contains the arena logic
│   ├── dice.js            # Dice roll utility
│   └── game.js            # Entry point to run the game
├── test/
│   ├── player.test.js     # Unit tests for Player class
│   ├── arena.test.js      # Unit tests for Arena logic
│   └── dice.test.js       # Unit tests for Dice logic
├── package.json           # Node.js package configuration
├── README.md              # Documentation
└── .gitignore             # Git ignore configuration
```

# How to Run:

# Prerequisites

- Node.js installed on your machine. Download it from Node.js Official Website.

# Steps

1. **Clone the repository**:
```bash
  git clone <repository_url>
  cd magical-arena
```

2. **Install dependencies**:
```bash
  npm install
```

3. **Run the game**:
```bash
 node src/game.js
```

4. **Run tests**: To ensure everything is working correctly, run the unit tests:
```bash
![Screenshot (493)](https://github.com/user-attachments/assets/44b151f8-d1d2-4abd-b8b2-14945e291ea1)
![Screenshot (494)](https://github.com/user-attachments/assets/a9543c6c-9a80-4856-afcd-9d9a0789b7cf)
![Screenshot (493)](https://github.com/user-attachments/assets/9332dbfc-6e8e-40bb-b79f-8c3beb1cf577)
![Screenshot (494)](https://github.com/user-attachments/assets/a73626ed-5489-42c4-ac89-47c7dbf127fb)
![Screenshot (493)](https://github.com/user-attachments/assets/e5f4864f-93be-4fcf-a824-001309460322)
```

# How It Works

# Classes and Key Components

1. **Player**:

- Represents a player in the game.
- Attributes: `health, strength, and attack`.
- Methods:
    - `isAlive()`: Checks if the player is still in the game.
    - `takeDamage(damage)`: Reduces health by the specified damage.

2. **Dice**:

- A utility to simulate dice rolls.
- Method:
  - `roll()`: Returns a random value between 1 and the number of dice sides (default is 6).

3. **Arena**:

- Orchestrates the battle between two players.
- Method:
    - `startFight()`: Executes the fight sequence until one player wins.

4. **Game**:

- Entry point for running the game simulation.

# Unit Tests

Unit tests are implemented to ensure the correctness of the code:

- player.test.js: Validates the behavior of the `Player` class.
- dice.test.js: Tests the `Dice` class to ensure dice rolls are within valid bounds.
- arena.test.js: Simulates battles to verify game logic and outcomes.

To run the tests:
```bash
  npm test
```

# Evaluation Criteria

This project is designed with the following principles in mind:

1. `Simple Design`:
- Modular, clean, and easy-to-read code.

2. `Readability`:
- Clear naming conventions and organization.

3. `Modeling`:
- Objects and classes represent the domain effectively.

4. `Maintainability`:
- Code is extensible and easy to update.

5. `Testability`:
- High test coverage and comprehensive unit tests.

# Future Improvements

- Add more complex gameplay mechanics, such as special abilities or critical hits.

- Implement a graphical user interface for better interaction.

- Save battle history to track player performance over time.

Feel free to contribute to the project or report any issues you encounter! 
