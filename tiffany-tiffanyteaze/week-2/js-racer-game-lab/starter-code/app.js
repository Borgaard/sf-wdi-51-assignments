//Todo List:
//[X] -start the game
//[] -move box2
//[] -move players
//[] -check who won
//[] -declare winner
let startButton = document.querySelector(".start");
startButton.addEventListener("click", startGame);

function startGame (event) {
  console.log("You started the game!");
}

const playerOne = document.querySelector('#box1');

function logKey(e) {
  console.log("You pressed a key!");
}

playerOne.addEventListener('keydown', logKey);
