// Grabbing the elements from the DOM
var red = document.querySelector('.red');
var raceTrack =document.querySelector('.racetrack');
var blue = document.querySelector('.blue');
var button = document.querySelector('.reset');
var display = document.querySelector("h1");
var audio = document.getElementById("audio");
var input = document.querySelector(".play");

//  Event listener that fires the moving function on click
red.addEventListener('click', moveRed);
blue.addEventListener('click', moveBlue);
// resets the game and the audio
button.addEventListener('click', newGame);
// turns the audio on
input.addEventListener('click',play);

// undefined left variables
var redLeft = 0;
var blueLeft = 0;
// Function that allows red to move left or right when the
// corresponding keys are pressed
 var redMoving = function (e) {
  if (redLeft >= 85) {
     alert("Vegeta is the winner!!");
  display.style.color = "white";
  display.style.fontSize = "80px"
  display.textContent = "VEGETA IS THE WINNER!!!";
   }

  if (e.keyCode== 38){
      redLeft +=30;
      red.style.left= redLeft + '%';
  }
  if (e.keyCode== 40) {
       redLeft -=20;
      red.style.left = redLeft + '%';
  }
}
// Function that allows the user to move blue forward with the
// right arrow key and back with the left arrow key
 var blueMoving = function (e) {
  if (blueLeft >= 85) {
     alert("GOKU is the winner!!");
      display.style.color = "white";
      display.style.fontSize = "80px"
      display.textContent = "GOKU IS THE WINNER!!!";

  }

  if (e.keyCode== 39){
      blueLeft +=5;
      blue.style.left= blueLeft+ '%';
      return blueLeft;
  }

  if (e.keyCode== 37) {
       blueLeft -=5;
      blue.style.left = blueLeft + '%';
  }
}
// Function that allows red to move on the game board;
function moveRed () {
       redLeft +=5;
      red.style.left= redLeft + '%';
}
// Function that allows blue to move on the game board;
function moveBlue () {
      blueLeft +=7;
      blue.style.left= blueLeft+ '%';
  }
  // onkeydown event handler specifies what should happen when any key is pressed
  // for the moving functions
document.body.onkeyup = redMoving;
document.body.onkeydown = blueMoving;

// resets the current game
function newGame () {
  red.style.left = 0 ;
  blue.style.left = 0;
  blueLeft = 0;
  redLeft = 0 ;
   display.style.fontSize = "33px";
   display.style.color = "goldenRod";
   display.textContent = "DRAGON BALL Z RACER!";
   stop();
}

// plays the audio
 function play()  {
 audio.play();
       }
// stops the audio
function stop () {
audio.pause();
audio.currentTime = 0;
}


// var span = document.getElementById('span');

// // function time() {
// //   var d = new Date();
// //   var s = d.getSeconds();
// //   var m = d.getMinutes();
// //   var h = d.getHours();
// //   span.textContent = h + ":" + m + ":" + s;
// // }

// // setInterval(time, 1000);
