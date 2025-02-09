console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

const checkWin = () => {
    let cellText = document.getElementsByClassName('cellText');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];
    wins.forEach(e => {
        if ((cellText[e[0]].innerText === cellText[e[1]].innerText) && (cellText[e[2]].innerText === cellText[e[1]].innerText) && (cellText[e[0]].innerText !== "")) {
            document.querySelector('.statusText').innerText = cellText[e[0]].innerText + " Won";
            isGameOver = true;
            document.querySelector('.imageWrapper').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".gameLine").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".gameLine").style.width = "20vw";
        }
    });
};

let restartGame = document.getElementById("restartGame");

let cells = document.getElementsByClassName("cell");
Array.from(cells).forEach(element => {
    let cellText = element.querySelector('.cellText');
    element.addEventListener('click', () => {
        if (cellText.innerText === '') {
            cellText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("statusText")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

restartGame.addEventListener('click', () => {
    let cellTexts = document.querySelectorAll('.cellText');
    Array.from(cellTexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.querySelector(".gameLine").style.width = "0vw";
    document.getElementsByClassName("statusText")[0].innerText = "Turn for " + turn;
    document.querySelector('.imageWrapper').getElementsByTagName('img')[0].style.width = "0px";
});
