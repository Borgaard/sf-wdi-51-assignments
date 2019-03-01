let pink = document.querySelector('.pink');
let green = document.querySelector('.green');

function keydownPink() {
  console.log("pink move")
}

function keydownGreen() {
  console.log("green move")
}

// function to move Epona div across the screen,
let carP = 0;
let movePink = function() {
  carP += 10;
  pink.style.left = carP + "%";
  // when reaches end
  if (carP >= (70)) {
  alert("Congratulations, Epona wins!");
 }
}

// Move Loftwing div
let carG = 0;
let moveGreen = function() {
  carG += 10;
  green.style.left = carG + "%";
  if (carG >= (70)) {
  alert("Congratulations, Loftwing wins");
 }
}


// move divs when pressing different keys
window.addEventListener("keydown", function(e) {
  let press = e.keyCode;
  if (press === 69) {
    console.log("key is pressed");
    movePink();
    // keydownPink();
    console.log(e);
  } else if (press === 76) {
    console.log("key is pressed");
    moveGreen();
    // keydownPink();
    console.log(e);
  }
});

// inspiration from https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
var timeleft = 3;
var downloadTimer = setInterval( function() {
  document.getElementById("countdown").innerHTML = timeleft;
  timeleft -= 1;
  if(timeleft < 0){
    // clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "GO!"
    clearInterval(downloadTimer);
    // downloadTimer.style.display = "none";
  }
}, 1000);



// could include a counter and let green or pin win
// add into thecarG function and if === certain amount of steps: show wins










