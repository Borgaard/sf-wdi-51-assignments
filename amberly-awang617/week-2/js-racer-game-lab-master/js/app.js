//Global Variables
const piece = document.getElementById("piece-1");
const isabelle = document.getElementById("piece-2");

const start = document.querySelector("#start");
const pause = document.querySelector("#stop");
const restart = document.querySelector("#restart");

const gameModes = document.querySelectorAll(".gameModes");

const finish = document.getElementById("finish");

const messageIsabelle = document.querySelector(".isabelle");
const messageVillager = document.querySelector(".villager");

let timer;
var isabelleRate = .65;

//Setting the pause button to have a default of disabled
pause.disabled = true;

//Initial left values for the game pieces
let pieceLeft = 1;
let isabelleLeft = 0;

//Create even listeners for the buttons
start.addEventListener('click', startGame);
pause.addEventListener('click', stopGame);
restart.addEventListener('click', restartGame);

for (var i=0; i<gameModes.length; i++) {
  gameModes[i].addEventListener('click', setRate);
}


function startGame() {
  timer = setInterval (isabelleMove, 100);
  start.disabled = true;
  pause.disabled = false;
  console.log(start.disabled);
  document.onkeydown = move;
  if (isabelleRate === .50) {
    gameModes[1].disabled = true;
    gameModes[2].disabled = true;
  } else if (isabelleRate === .65) {
    gameModes[0].disabled = true;
    gameModes[2].disabled = true;
  } else if (isabelleRate === .75) {
    gameModes[0].disabled = true;
    gameModes[1].disabled = true;
  }
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
  isabelleRate = .65;
  messageIsabelle.style.display = "none";
  messageVillager.style.display = "none";
  for (var i=0; i < gameModes.length; i++) {
    gameModes[i].disabled = false;
  }
}

function setRate() {
  if (this.getAttribute("id") === "easy") {
    isabelleRate = .50;
  } else if (this.getAttribute("id") === "normal") {
    isabelleRate = .65
  } else if (this.getAttribute("id") === "hard") {
    isabelleRate = .75;
  }
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
  if (pieceLeft >= 77){
    pieceLeft -= .75;
    villagerWin();
  };
};

function moveRight() {
  pieceLeft -=.75;
  piece.style.left = pieceLeft + "%";
  if (pieceLeft <= 1){
    pieceLeft += .75;
  };
}

function isabelleMove () {
  isabelleLeft += isabelleRate;
  isabelle.style.left = isabelleLeft + "%";
  if (isabelleLeft >= 76){
    isabelleLeft -= isabelleRate;
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
