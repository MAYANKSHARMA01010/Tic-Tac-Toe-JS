console.log("Welcome to Tic Tac Toe");

let audioTurn = new Audio("ting.mp3");
let turn = "X";
let isGameOver = false;

const cells = document.querySelectorAll(".cell");
const turnIndicator = document.getElementById("turnIndicator");
const restartButton = document.getElementById("restartGame");
const themeToggle = document.getElementById("themeToggle");

const resultModal = document.getElementById("resultModal");
const winnerText = document.getElementById("winnerText");
const winnerImage = document.getElementById("winnerImage");
const modalRestart = document.getElementById("modalRestart");
const closeModal = document.getElementById("closeModal");

let boardState = ["", "", "", "", "", "", "", "", ""];

const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('.icon');
    icon.innerText = theme === 'dark' ? "🌙" : "☀️";
}

themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

const changeTurn = () => turn === "X" ? "O" : "X";

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const checkWin = () => {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
            boardState[a] !== "" &&
            boardState[a] === boardState[b] &&
            boardState[b] === boardState[c]
        ) {
            gameOver(boardState[a]);
            return;
        }
    }

    if (!boardState.includes("")) {
        gameOver("Draw");
    }
};

const gameOver = (winner) => {
    isGameOver = true;
    if (winner === "Draw") {
        winnerText.innerText = "It's a Draw!";
        winnerImage.style.display = "none";
    } else {
        winnerText.innerText = `${winner} Won!`;
        winnerImage.style.display = "block";
    }
    resultModal.classList.remove("hidden");
};

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        const index = cell.getAttribute("data-index");
        if (!isGameOver && boardState[index] === "") {
            boardState[index] = turn;
            cell.innerText = turn;
            cell.setAttribute("data-value", turn);
            audioTurn.play();

            checkWin();

            if (!isGameOver) {
                turn = changeTurn();
                turnIndicator.innerText = turn;
            }
        }
    });
});

const resetGame = () => {
    boardState = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => {
        cell.innerText = "";
        cell.removeAttribute("data-value");
    });
    turn = "X";
    isGameOver = false;
    turnIndicator.innerText = "X";
    resultModal.classList.add("hidden");
};

restartButton.addEventListener("click", resetGame);
modalRestart.addEventListener("click", resetGame);
closeModal.addEventListener("click", () => {
    resultModal.classList.add("hidden");
});
