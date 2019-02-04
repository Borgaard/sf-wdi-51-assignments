//variables
const button = document.querySelector('button');
const crj = document.getElementById('crj');
const robyn = document.getElementById('robyn');
const racetrack = document.getElementsByClassName('racetrack')[0];

//start game
function startGame(){
  //reset images to starting position
  alert('Game time start!')
  let imgs = document.querySelectorAll('img');
  imgs.forEach((img) => {
    img.style.left = `0px`;
  });

  document.addEventListener('keydown', e => {
    if (e.keyCode === 90) {
      movePiece(crj);
    } else if (e.keyCode === 80) {
      movePiece(robyn);
    }
  });

}

function movePiece(piece) {
  let currentPosition = parseInt(piece.style.left);
    if (currentPosition <= 760) {
      currentPosition += 40;
      piece.style.left = `${currentPosition}px`;
    }
    winGame();

  function winGame() {
    if (currentPosition >= 800 && currentPosition < 825) {
      document.querySelector('body').style.backgroundImage = "url('https://images-na.ssl-images-amazon.com/images/I/61yoTtDxuiL._SX425_.jpg')";
      let victory = document.createElement('h1');
      victory.textContent = `${piece.id} is the true kween`;
      document.querySelector('body').appendChild(victory);
    }
  }
}





button.addEventListener('click', startGame);

