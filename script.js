console.log("Welcome to Tic Tac Toe");

let audioTurn = new Audio("ting.mp3");
let turn = "X";
let isGameOver = false;

const changeTurn = () => turn === "X" ? "O" : "X";

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector(".statusText");
const restartButton = document.getElementById("restartGame");
const winnerImage = document.getElementById("winnerImage");
const themeToggle = document.getElementById("themeToggle");

// Winning combinations
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const checkWin = () => {
    winPatterns.forEach(pattern => {
        const [a, b, c] = pattern;
        if (
            cells[a].innerText === cells[b].innerText &&
            cells[a].innerText === cells[c].innerText &&
            cells[a].innerText !== ""
        ) {
            statusText.innerText = `${cells[a].innerText} Won!`;
            isGameOver = true;
            winnerImage.style.width = "300px";  // Increased the size of the winner image
        }
    });
};

// Cell click event
cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (!isGameOver && cell.innerText === '') {
            cell.innerText = turn;
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                turn = changeTurn();
                statusText.innerText = `Next Move: ${turn}`;
            }
        }
    });
});

// Restart button event
restartButton.addEventListener("click", () => {
    cells.forEach(cell => cell.innerText = "");
    turn = "X";
    isGameOver = false;
    statusText.innerText = "Next Move: X";
    winnerImage.style.width = "0"; // Hide winner image
});

// Dark mode toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
