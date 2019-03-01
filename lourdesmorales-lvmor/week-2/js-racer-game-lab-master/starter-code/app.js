
// ----------------
// Part 2 - Player 1 races Player 2
// ----------------
// Starting position for redBox(Krumm) and blueBox(Oblina)
let redBoxPosition = 0;
let blueBoxPosition = 0;


//Press key down to move redBox and blueBox in racing game

var racingBox = document.querySelector(".racingBox");
var redBox = document.querySelector(".redBox");
var blueBox = document.querySelector(".blueBox");


let winner = "";

function pressKeyDown (event) {
  if (event.keyCode === 81) {
    if (redBoxPosition < 1200) {
      redBoxPosition += 50;
      redBox.style.left =redBoxPosition + "px";
    }
  } else if (event.keyCode === 39) {
    if (blueBoxPosition < 1200)
      blueBoxPosition += 50;
      blueBox.style.left = blueBoxPosition + "px";
  }
  console.log(redBoxPosition);
  console.log(blueBoxPosition);
  console.log(winner);

  if (redBoxPosition >= 1200 && blueBoxPosition < 1200) {
    document.write("KRUMM WINS!");
  } else if (blueBoxPosition >= 1200 && redBoxPosition < 1200) {
    document.write("OBLINA WINS!");
  } else if (redBoxPosition >= 1200 && blueBoxPosition >= 1200) {
    document.write("TIE!");
  }
}

var finish = false;

document.onkeydown = pressKeyDown;
