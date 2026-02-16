"use strict";

const sum = arr => arr.reduce((a, b) => a + b, 0);
const randomInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const shuffle = arr => arr.sort(() => Math.random() - 0.5);

const X = 1;
const O = 3;

let moves = 0;
let winner = 0;
let gameOver = false;

let player = X;
let computer = O;
let whoseTurn = player;

let playerSymbol = "×";
let computerSymbol = "○";

let difficulty = 1;

let score = { player: 0, computer: 0, ties: 0 };

class Grid {
    constructor() { this.cells = Array(9).fill(0); }
    reset() { this.cells.fill(0); }
    freeCells() { return this.cells.map((v, i) => v === 0 ? i : null).filter(v => v !== null); }
    row(i) { return this.cells.slice(i * 3, i * 3 + 3); }
    column(i) { return [this.cells[i], this.cells[i + 3], this.cells[i + 6]]; }
    diag(i) { return i === 0 ? [this.cells[0], this.cells[4], this.cells[8]] : [this.cells[2], this.cells[4], this.cells[6]]; }

    getWinningMove(agent) {
        const target = agent * 2;
        const free = shuffle(this.freeCells());
        for (let cell of free) {
            for (let i = 0; i < 3; i++) {
                if (sum(this.row(i)) === target && this.row(i).includes(0)) return cell;
                if (sum(this.column(i)) === target && this.column(i).includes(0)) return cell;
            }
            for (let i = 0; i < 2; i++) {
                if (sum(this.diag(i)) === target && this.diag(i).includes(0)) return cell;
            }
        }
        return null;
    }
}

const grid = new Grid();

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

function announceWinner(message) {
    document.getElementById("winText").textContent = message;
    document.getElementById("winAnnounce").style.display = "block";
    setTimeout(() => closeModal("winAnnounce"), 1800);
}

function showOptions() {
    document.getElementById("optionsDlg").style.display = "block";
}

function checkWin() {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (const [a, b, c] of lines) {
        const val = grid.cells[a];
        if (val && val === grid.cells[b] && val === grid.cells[c]) {
            winner = (val === player) ? player : computer;
            [a, b, c].forEach(i => document.getElementById(`cell${i}`).classList.add("win-color"));
            winner === player ? score.player++ : score.computer++;
            setTimeout(() => endGame(winner), 800);
            return winner;
        }
    }
    if (grid.freeCells().length === 0) {
        score.ties++;
        setTimeout(() => endGame("draw"), 800);
        return "draw";
    }
    return null;
}

function endGame(result) {
    gameOver = true;
    let msg = result === player ? "You won!" :
        result === computer ? "Computer wins!" : "It's a tie!";
    announceWinner(msg);

    document.getElementById("player_score").textContent = score.player;
    document.getElementById("computer_score").textContent = score.computer;
    document.getElementById("tie_score").textContent = score.ties;

    setTimeout(() => restartGame(false), 2200);
}

function restartGame(showOptionsAgain = false) {
    grid.reset();
    moves = 0;
    winner = 0;
    gameOver = false;

    for (let i = 0; i < 9; i++) {
        const cell = document.getElementById(`cell${i}`);
        cell.textContent = "";
        cell.style.cursor = "pointer";
        cell.classList.remove("win-color");
    }

    if (showOptionsAgain) {
        difficulty = 1;
        player = X;
        computer = O;
        playerSymbol = "×";
        computerSymbol = "○";
        whoseTurn = player;
        setTimeout(showOptions, 400);
    } else {
        whoseTurn = player;
    }
}

function cellClicked(id) {
    if (gameOver || whoseTurn !== player) return;
    const idx = parseInt(id.replace("cell", ""));
    if (grid.cells[idx] !== 0) return;

    grid.cells[idx] = player;
    document.getElementById(id).textContent = playerSymbol;
    document.getElementById(id).style.cursor = "default";
    moves++;

    if (moves >= 5) {
        if (checkWin()) return;
    }

    whoseTurn = computer;
    setTimeout(makeComputerMove, 400);
}

function makeComputerMove() {
    if (gameOver || whoseTurn !== computer) return;

    let cell = grid.getWinningMove(computer) ||
        grid.getWinningMove(player) ||
        (difficulty === 1 && grid.cells[4] === 0 ? 4 : null);

    if (!cell && moves === 1) {
        const corners = [0, 2, 6, 8].filter(i => grid.cells[i] === 0);
        cell = corners[randomInt(0, corners.length - 1)];
    }

    if (!cell) {
        const free = grid.freeCells();
        cell = free[randomInt(0, free.length - 1)];
    }

    const id = `cell${cell}`;
    document.getElementById(id).textContent = computerSymbol;
    document.getElementById(id).style.cursor = "default";
    grid.cells[cell] = computer;
    moves++;

    if (moves >= 5 && checkWin()) return;
    whoseTurn = player;
}


function getOptions() {
    const diff = document.querySelector('input[name="difficulty"]:checked')?.value;
    const sym = document.querySelector('input[name="player"]:checked')?.value;

    if (!diff || !sym) return;

    difficulty = parseInt(diff);

    if (sym === "x") {
        player = X; computer = O;
        playerSymbol = "×"; computerSymbol = "○";
        whoseTurn = player;
    } else {
        player = O; computer = X;
        playerSymbol = "○"; computerSymbol = "×";
        whoseTurn = computer;
        setTimeout(makeComputerMove, 600);
    }

    document.getElementById("optionsDlg").style.display = "none";
    restartGame(false);
}

const bgMusic = document.getElementById("bgMusic");
const bgmBtn = document.getElementById("bgmBtn");
let musicOn = true;

bgmBtn.onclick = () => {
    musicOn = !musicOn;
    musicOn ? bgMusic.play().catch(() => { }) : bgMusic.pause();
    bgmBtn.textContent = musicOn ? "🎵 Music On" : "🎵 Music Off";
};

document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal("winAnnounce");
});

window.onclick = e => {
    if (e.target.classList.contains("modal")) e.target.style.display = "none";
};

function initialize() {
    restartGame(true);
}

window.addEventListener("load", initialize);