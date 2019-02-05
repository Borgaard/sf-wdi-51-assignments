

var courage = document.getElementById('courage');
var eustace = document.getElementById('eustace');

var pause = document.getElementById('pause');
var start = document.getElementById('start');
var restart = document.getElementById('restart');

let courageRight = -2;
let eustaceRight = -8;

function moveEustace() {
  eustaceRight++;
  eustace.style.right = eustaceRight + '%';
  checkIfWon();
}

var timer;

function startGame() {
  eustace.style.right = '-8%';
  timer = setInterval(moveEustace, 150);
  start.disabled = true;
  pauseGame.disabled = false;

  document.onkeydown = moveDog;
}

pauseGame = function() {
  // var beginning = -8;
  // eustace.style.right = beginning + '%';
  clearTimeout(timer);
  start.disabled = false;
  pauseGame.disabled = true;

  document.onkeydown = null;
}

var pauseIt = pauseGame;

function restartGame() {
  pauseIt();
  courageRight = -2;
  eustaceRight = -8;
  courage.style.right = courageRight + '%';
  eustace.style.right = eustaceRight + '%';

}

start.addEventListener('click', startGame)
pause.addEventListener('click', pauseGame)
restart.addEventListener('click', restartGame)

function checkIfWon() {
  if(courageRight === 54) {
    alert("Courage Won!!!");
  } else if(eustaceRight === 54) {
    alert("Eustace Won!!!");
    clearInterval(timer)
  }

  //to do: make clear div not clear and remove the characters
}

 moveCourage = function(e){

    if(e.keyCode === 37){
      courageRight +=2;
      courage.style.right = courageRight + '%';
      checkIfWon();
    }
 }

   var moveDog = moveCourage;





//math.randommath.floor*10 var num to move a random number of spaces

/*
Resets all your global variables
Removes all your EventListeners ( seeing you have two you don't really have to make a list to loop through all of them )
Calls the main game function when the player is ready to start again


var changeCourage = function(){
  courageRight++;
  courage.style.right = courageRight + '%';
  checkIfWon();
}

var changeEustace = function(){
  eustaceRight++;
  eustace.style.right = eustaceRight + '%';
  checkIfWon();
}
*/


// courageButton.addEventListener('click', changeCourage);
// eustaceButton.addEventListener('click', changeEustace);




 // theBody.addEventListener('onkeydown', (e) => {
 //  console.log(e);
 // });

//var courageRight = courage.style.right;
//   document.onkeydown = function(key) {
//     courage.position = parseInt(courage.style.left, 5);
//     eustace.position = parseInt(eustace.style.left, 5);
//     movePlayer(key)
//   };

// function movePlayer(key) {
//   switch(key.which) {
//     case 90: // press z to make homer go
//       var newCouragePosition = courage.position += 36;
//       courage.style.left = newCouragePosition + "px";
//       break;
//     case 39: // press right arrow to make peter go
//       var newPeterPosition = characters.peter.position += 36;
//       characters.peter.div.style.left = newPeterPosition + "px";
//       break;
//   };
// };
