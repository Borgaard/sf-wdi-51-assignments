const startButton = document.querySelector('.start');
startButton.addEventListener('click', startGame);

const playerOne = document.querySelector('#box1');
playerOne.addEventListener('keydown', logKey);

const playerTwo = document.querySelector('#box2');
playerTwo.addEventListener('keydown', logKey);

let playerOneStartPosition = 0;
let playerTwoStartPosition = 0;

function startGame (event) {
  document.body.onkeyup = logKey;
  document.body.onkeydown = logKey;
};

function movePlayerOne() {
  //checkWinner();
  let newPosition = playerOneStartPosition += 40;
  playerOne.style.left = newPosition + "px";
};

function movePlayerTwo() {
  //checkWinner();
  if (playerTwo.style.left === 80) {
    console.log("Player two won.");
  }
  let newPosition = playerTwoStartPosition += 40;
  playerTwo.style.left = newPosition + "px";
};

function logKey(event) {
  if (event.keyCode === 39) {
    movePlayerOne();
  }
  else if (event.keyCode === 90) {
    movePlayerTwo();
  }
};

// function checkWinner() {
//   if (playerOne.style.left === 80) {
//     let appear = document.getElementById("playerOneWon");
//   }
//   else if (playerTwo.style.left === 80) {
//     //text declares the winner
//     // let appear = document.getElementById("playerTwoWon");
//     // appear.style.display = "block";
//     //stops the players from moving
//     alert("Player Two won!");
//   }
// };
