/*
[x] Start simple! Ask yourself what the MVP of this project is.
[] Create HTML and CSS files that create one red square div and one blue, lined up on the left side of the screen.
[] Add a keydown event listener that console logs "blue move" or "red move."
[] Replace that console log with JavaScript that moves the red or blue div a little to the right.
[] A helpful jQuery method to look into: [offset()](http://api.jquery.com/offset/).
[] Run with it from there!
[] If you are stuck on a problem, use pseudocode to break it down into smaller, more solvable problems.
[] If you need some ideas on where to start, watch this [video](https://www.youtube.com/watch?v=QVSwX98kKFs).


// DOMContentLoaded
//https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
// first make sure DOM fully loaded and parsed
/*
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });
*/

/*
Add flexbox incredmenting the margin
*/

document.addEventListener('DOMContentLoaded', function() {
  // add addEventListener keyup keyboard presses, listens for when pressing a key
  document.addEventListener('keyup', handleKeyPress);
});

// limit the keyup e(event) is obj that is created when keyup event occurs, event obj is getting passed into handleKeyPress
function handleKeyPress (e) {
  // integer keycode, and that the keycodes for "Q" (81) and "P" (80)
  //  e.which === 81 Q left, e.which === 80 P right
  console.log(e);
  if (e.keyCode === 81) {
    // movePlayer() function that moves the player
    // console.log("Q pressed");
    movePlayer(1);
  }

  // if (e.keyCode === 81) I can use e.keycode too!
  if (e.keyCode === 80){
    // console.log("P pressed");
    movePlayer(2);
  }
}

// let's move the players!! player1 or player2
// find which player is playing variable player1 or player2
// ('player' + playerInt + '_strip').  this is also scalable since we can add more players
function movePlayer (playerInt) {
  // locate which row player is on; returns the element that corresponds to that playernumber
  var row = document.getElementById('player' + playerInt + '_strip');
  // Which cell block the player (class="active1" or "active2") is actively on 
  var cell = document.getElementsByClassName('active' + playerInt);
  // the cell the active student is on var cell = [td]
  // note: index 3 =  cell[4] since it is zero-based
  var nextCell = row.cells[cell[0].cellIndex + 1];

  // take out set className cell that player is on since player has moved on from current cell to next cell to right
  cell[0].className = '';
  // set next cell to be active cell that player is on
  nextCell.className = 'active' + playerInt;
}


