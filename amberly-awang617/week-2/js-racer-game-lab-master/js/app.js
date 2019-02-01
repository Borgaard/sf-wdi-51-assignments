//Global Variables
const container = document.querySelector(".container");
const finish = document.getElementById("finish");

const piece = document.getElementById("piece-1");
const isabelle = document.getElementById("piece-2");

const start = document.querySelector("#start");
const pause = document.querySelector("#stop");
const restart = document.querySelector("#restart");
var timer;

const messageIsabelle = document.querySelector(".isabelle");
const messageVillager = document.querySelector(".villager");

//Setting the pause button to have a default of disabled
pause.disabled = true;

//Initial left values for the game pieces
let pieceLeft = 0;
let isabelleLeft = 0;

//Create even listeners for the two buttons
start.addEventListener('click', startGame);
pause.addEventListener('click', stopGame);
restart.addEventListener('click', restartGame);


function startGame() {
  timer = setInterval (isabelleMove, 100);
  start.disabled = true;
  pause.disabled = false;
  console.log(start.disabled);
  document.onkeydown = move;
};

function stopGame() {
  clearInterval(timer);
  start.disabled = false;
  pause.disabled = true;
};

function restartGame() {
  stopGame();
  piece.style.left = "0";
  isabelle.style.left = "0";
  pieceLeft = 0;
  isabelleLeft = 0;
  messageIsabelle.style.display = "none";
  messageVillager.style.display = "none";
}

function move(e){
  if (start.disabled && !pause.disabled) {
    if(e.keyCode == 39){
      moveLeft();
    };
    if(e.keyCode == 37){
      moveRight();
    };
  };
};

function moveLeft() {
  pieceLeft +=.75;
  piece.style.left = pieceLeft + "%";
  if (pieceLeft >= 76){
    pieceLeft -= .75;
    villagerWin();
  };
};

function moveRight() {
  pieceLeft -=.75;
  piece.style.left = pieceLeft + "%";
  if (pieceLeft <= 0){
    pieceLeft += .75;
  };
}

function isabelleMove () {
  isabelleLeft += .65;
  isabelle.style.left = isabelleLeft + "%";
  if (isabelleLeft >= 76){
    isabelleLeft -= .65;
    isabelleWin();
  }
};

function villagerWin() {
  stopGame();
  messageVillager.style.display = "block";
  start.disabled = true;
}

function isabelleWin() {
  stopGame();
  messageIsabelle.style.display = "block";
  start.disabled = true;
}
