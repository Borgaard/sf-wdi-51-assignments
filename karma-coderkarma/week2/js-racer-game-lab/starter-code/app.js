// Grab the players
let player1 = document.querySelector('#player1');
let player2 = document.querySelector('#player2');
let startGame = document.querySelector('#start');
let finishingLine = document.querySelector('#finishingLine');
let jump1 = 0;
let jump2 = 0;

// Displaying the message on the screen and removing after 1 sec
startGame.addEventListener('click', e => {
  const startMessage = document.querySelector('.heading');
  startMessage.innerHTML = "Let the battle begin";
  
  // setTimeout(() => {
  //   startMessage.innerHTML = '';
  // }, 1000);
});

//  Declare the winner
//  sum the width of the box and
const winnerPlayer = (playerWidth, jump1) => {
  let finishLine = window.innerWidth;
  console.log('checking for winner...');
  //getting the width of the players with offsetWidth
  // playerWidth = player1.offsetWidth;
  console.log(`playerWidth ${playerWidth}`);
  console.log(`jump ${jump1}`);
  console.log(`finish ${finishLine}`);

  let newWidth = jump1 + playerWidth;
  console.log(`newwidth ${newWidth}`)
  // if jumps and width of the container is greater or equal to the width of page then declare the winner
  if (newWidth >= finishLine) {
    console.log('winner');
    alert('winner');
  }
};

//  handling key presses
document.addEventListener('keypress', e => {
  if (e.keyCode === 100) {
    jump1 += 40;
    player1.style = `margin-left: ${jump1}px`;
    winnerPlayer(player1.offsetWidth, jump1);
  } else if (e.keyCode === 115) {
    jump2 += 40;
    player2.style = `margin-left:${jump2}px`;
    winnerPlayer(player2.offsetWidth, jump2);
  }
});
window.location.reload