const cells = document.querySelectorAll(".cell");
const message = document.querySelector(".message");

let currentPlayer = "X";
let board = ["","","","","","","","",""];
let gameOver = false;

const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (gameOver) return;
    if (board[index] !== "") return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    const winner = checkWinner();

    if (winner) {
      gameOver = true;
      showMessage(winner + " wins!");
      return;
    }

    if (!board.includes("")) {
      gameOver = true;
      showMessage("Draw!");
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

function checkWinner() {
  for (let pattern of winPatterns) {
    const [a,b,c] = pattern;

    if (board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function showMessage(text){
  message.textContent = text;
  message.classList.remove("hidden");
}

function hideMessage(){
  message.classList.add("hidden");
}

function resetGame(){
  board = ["","","","","","","","",""];
  currentPlayer = "X";
  gameOver = false;

  cells.forEach(cell => cell.textContent = "");
  hideMessage();
}