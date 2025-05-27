let currentPlayer = "X";
let cells = Array(9).fill(null);
let gameActive = true;

const statusDiv = document.getElementById("status");
const cellDivs = document.querySelectorAll(".cell");

cellDivs.forEach(cell => {
  cell.addEventListener("click", () => handleClick(cell));
});

function handleClick(cell) {
  const index = cell.getAttribute("data-index");

  if (cells[index] || !gameActive) return;

  cells[index] = currentPlayer;
  cell.textContent = currentPlayer;

  if (checkWin()) {
    statusDiv.textContent = `${currentPlayer} wins!`;
    gameActive = false;
  } else if (cells.every(cell => cell)) {
    statusDiv.textContent = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDiv.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWin() {
  const winCombos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  return winCombos.some(combo => {
    const [a,b,c] = combo;
    return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
  });
}

function restartGame() {
  cells = Array(9).fill(null);
  currentPlayer = "X";
  gameActive = true;
  statusDiv.textContent = "Player X's turn";
  cellDivs.forEach(cell => cell.textContent = "");
}
