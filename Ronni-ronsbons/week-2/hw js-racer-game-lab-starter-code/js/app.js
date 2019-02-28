// Set variable for game pieces
let redPiece = document.querySelector('.red');
let bluePiece = document.querySelector('.blue');

// Setting start button to start the game.
let button = document.querySelector('button');
button.addEventListener('click', keyPress);

// Function to check for key presses only after clicking start button
function keyPress() {
  // Event listener for pressing keys
  document.addEventListener('keydown', whichKeyPressed);
};

// Set function for right and left arrow keys to move pieces
function whichKeyPressed(e) {
  // press right arrow will call move red piece function
  if (e.keyCode === 39) {
    // testing the function
    // console.log('red move')
    moveRed();
    // press left arrow will call move blue piece function
  } else if (e.keyCode === 37) {
    // console.log('blue move')
    moveBlue();
  } else {
    alert('Press the right or left arrows to play!');
  };
};

// Set starting position of pieces
redPiece.style.left = "0%";
bluePiece.style.left = "0%";

// To demonstrate what parseInt returns
  // let integer = parseInt(redPiece.style.left) + 5;
  // console.log(integer);

// Set function for moving red piece to the right with right arrow key
// Also sets limit to how far the piece can move
function moveRed() {
  if (parseInt(redPiece.style.left) < 80) {
    redPiece.style.left = parseInt(redPiece.style.left) + 3 + '%';
  }
};


// Set function for moving blue piece with left arrow
function moveBlue() {
  if (parseInt(bluePiece.style.left) < 80) {
    bluePiece.style.left = parseInt(bluePiece.style.left) + 3 + '%';
  }
};

// [] TODO: Set function to trigger alert or animation when one piece wins
