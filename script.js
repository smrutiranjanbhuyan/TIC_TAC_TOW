let currentPlayer = 'X';
let winner = null;
const cells = document.querySelectorAll('.cell');
const winnerText = document.getElementById('winner');

function makeMove(cell) {
    if (!cell.innerText && !winner) {
        cell.innerText = currentPlayer;
        checkWinner();
        currentPlayer = (currentPlayer === 'X' ? 'O' : 'X');
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
            winner = cells[a].innerText;
            winnerText.innerText = `${winner} wins!`;
        }
    }

    if (!winner && Array.from(cells).every(cell => cell.innerText)) {
        winnerText.innerText = "It's a tie!";
    }
}

function resetGame() {
    cells.forEach(cell => cell.innerText = '');
    currentPlayer = 'X';
    winner = null;
    winnerText.innerText = '';
}

resetGame(); 
