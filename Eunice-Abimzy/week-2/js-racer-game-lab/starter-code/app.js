//Game only moves with click of a button
//To-do:
//Use the keyCode

//Use global variables to keep the score and increment on each click
//find element by classNames

//Use keycode for selecting click functions
//Left key for clicking= tab(keycode-9)
//Right key for clicking= shift(keycode-16)
//Use e.keyword to designate keycode

//Element selectors for players:
 var player1 = document.querySelector(".player1");
 var player2 = document.querySelector(".player2");
 var mover1 = 3;
 var mover2 = 3;

 //start button to begin game
 // var button = document.querySelector("button");

 //Adding event listeners
 player1.addEventListener("keydown", movePlayer);
 player2.addEventListener("keydown", movePlayer);

 function movePlayer (e){
  if (e.keyCode === 9){
    mover1++;
    player1.style.marginLeft= `${mover}em`;
  } else if (e.keyCode === 16){
    mover2++;
    player2.style.marginLeft = `${mover}em`
  }
console.log("we're are racing");
 }
 movePlayer(16);


