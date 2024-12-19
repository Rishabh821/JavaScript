# Tic Tac Toe Game

## Overview
This is a simple implementation of the classic Tic Tac Toe game using HTML, CSS, and JavaScript. The game allows two players to take turns marking "X" or "O" on a 3x3 grid. The first player to align three of their marks in a row, column, or diagonal wins the game. If all boxes are filled without a winner, the game ends in a draw.

---

## Features
1. **Two-player gameplay**: Players alternate turns to play as "X" or "O".
2. **Winner Detection**: Automatically detects and announces the winner.
3. **Draw Detection**: Announces a draw if all boxes are filled without a winner.
4. **Reset Button**: Allows players to restart the current game.
5. **New Game Button**: Resets the game and clears the message container for a fresh start.
6. **Interactive UI**: Dynamic updates to the board with visual feedback for player moves.

---

## Technology Stack
- **HTML**: For the game layout.
- **CSS**: For styling the board and game elements.
- **JavaScript**: For game logic, event handling, and winner/draw detection.

---

## How to Run the Game
1. Clone or download the repository to your local machine.
2. Open the `index.html` file in any modern web browser.
3. Start playing!

---

## Game Rules
1. The game starts with Player 1 (“X”) taking the first turn.
2. Players alternate turns, marking one empty box per turn.
3. The first player to get three marks in a row, column, or diagonal wins.
4. If all boxes are filled and no player has won, the game ends in a draw.

---

## File Structure
- `index.html`: The main HTML file containing the game layout.
- `style.css`: The CSS file for styling the game.
- `script.js`: The JavaScript file containing the game logic.

---

## How It Works
1. Players click on empty boxes to place their marks ("X" or "O").
2. The game checks for a winner or a draw after each move:
   - If three identical marks are aligned (row, column, or diagonal), the game announces the winner.
   - If all boxes are filled and no winner is found, it declares a draw.
3. Players can use the **Reset** button to restart the current game or the **New Game** button for a fresh start.

---

## Screenshots
*Add screenshots of the game board, winner announcement, and draw announcement for better visualization.*

---

## Future Improvements
1. Add a score counter to keep track of wins for both players.
2. Implement AI for a single-player mode.
3. Enhance the UI with animations and better styling.
4. Add a timer to limit the time for each turn.

---

## Contributing
Contributions are welcome! If you'd like to improve the game, feel free to fork the repository and submit a pull request.

---

## License
This project is open-source and available under the [MIT License](LICENSE).

---

## Acknowledgments
Special thanks to anyone who plays this game and provides feedback for its improvement!

