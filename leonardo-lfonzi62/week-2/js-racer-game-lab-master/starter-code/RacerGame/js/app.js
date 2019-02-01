// Grabbing the elements from the DOM
var red = document.querySelector('.red');
var raceTrack =document.querySelector('.racetrack');
var blue = document.querySelector('.blue');
var button = document.querySelector('.reset');

//  Event listener that fires the moving function on click
red.addEventListener('click', moveRed);
blue.addEventListener('click', moveBlue);
button.addEventListener('click', newGame);

// undefined left variables
var redLeft = 0;
var blueLeft = 0;
// Function that allows red to move left or right when the
// corresponding keys are pressed
 var redMoving = function (e) {
  if (e.keyCode== 38){
      redLeft +=30;
      red.style.left= redLeft + 'px';
  }
  if (e.keyCode== 40) {
       redLeft -=20;
      red.style.left = redLeft + 'px';
  }
}
// Function that allows the user to move blue forward with the
// right arrow key and back with the left arrow key
 var blueMoving = function (e) {
  if (e.keyCode== 39){
      blueLeft +=30;
      blue.style.left= blueLeft+ 'px';
  }
  if (e.keyCode== 37) {
       blueLeft -=20;
      blue.style.left = blueLeft + 'px';
  }
}
// Function that allows red to move on the game board;
function moveRed () {
       redLeft +=30;
      red.style.left= redLeft + 'px';
}
// Function that allows blue to move on the game board;
function moveBlue () {
      blueLeft +=30;
      blue.style.left= blueLeft+ 'px';
  }
  // onkeydown event handler specifies what should happen when any key is pressed
  // for the moving functions
document.body.onkeyup = redMoving;
document.body.onkeydown = blueMoving;

function newGame () {
  red.style.left = 0 ;
  blue.style.left = 0;
   blueLeft = 0;
   redLeft = 0 ;
}


