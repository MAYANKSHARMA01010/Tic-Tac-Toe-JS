# Ultimate Tic Tac Toe

A modern, interactive Tic Tac Toe game built with HTML, CSS, and JavaScript. This project features a sleek dark/light theme, sound effects, and celebration animations for a polished user experience.

## 🌟 Features

- **Dark/Light Mode**: Toggle between themes to suit your preference. Persistence is handled via local storage.
- **Interactive UI**: hovering effects on cells and responsive design.
- **Game Logic**: Standard Tic Tac Toe rules with win detection and draw scenarios.
- **Sound Effects**: Audio feedback on every move (`ting.mp3`).
- **Celebration**: Animated GIF celebration when a player wins.
- **Responsive Design**: distinct layout for mobile and desktop screens.

## 🛠️ Technologies Used

- **HTML5**: Structure and semantics.
- **CSS3**: Styling, Flexbox/Grid for layout, and CSS Variables for theming.
- **JavaScript (ES6+)**: Game logic, DOM manipulation, and state management.

## 📂 Project Structure

```
├── Assests
│   └── Winner.gif      # Celebration animation
├── index.html          # Main HTML structure
├── script.js           # Game logic and DOM interaction
├── style.css           # Styles and theming
└── README.md           # Project documentation
```

## 🚀 How to Run

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Open `index.html`:**
    Simply open the `index.html` file in any modern web browser.

## 🎮 How to Play

1.  Click on any empty cell to place your mark (**X** or **O**).
2.  The game alternates turns automatically.
3.  The first player to align three of their marks horizontally, vertically, or diagonally wins!
4.  If all cells are filled without a winner, it's a draw.
5.  Use the "Restart Game" button to reset the board at any time.

## 🎨 Customization

- **Themes**: Modify the root variables in `style.css` to change the color palettes for light and dark modes.
- **Sound**: Replace `ting.mp3` (ensure it's in the root directory) to change the move sound.

## 📝 License

This project is open-source and available for personal and educational use.
