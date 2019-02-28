window.onload = function () {
    characters = {
      homer: {
        div: document.getElementById("homer"),
        audio: new Audio("media/burp.wav"),
        name: "Homer Simpson"
      },
      peter: {
        div: document.getElementById("peter"),
        audio: new Audio("media/laugh.mp3"),
        name: "Peter Griffin"
      },
      chicken: {
        div: document.getElementById("chicken"),
        width: document.getElementById("chicken").offsetWidth,
        audio: new Audio("media/Angry-chicken.mp3")
      }
    };
    startClucking();
    activateButtons();
  };
  

var characters = {};

function activateButtons(){
  document.getElementById("go").onclick = function(){
    startGame(characters);
  };
};

function startGame(characters){
  // start players and chicken on left
  characters.policeCar.div.style.left = 0;
  characters.sportsCar.div.style.left = 0;

  // stop initial animations
  document.getElementById("go").className = "";
  document.getElementsByTagName("img").className = "";

  moveChicken();

  document.onkeydown = function(key) {
    characters.sportsCar.position = parseInt(characters.sportsCar.div.style.left, 10);
    characters.policeCar.position = parseInt(characters.policeCar.div.style.left, 10);
    checkWinner();
    movePlayer(key)
  };
};

function checkWinner(){
  if (characters.policeCar.position + characters.polceCar.div.offsetWidth >= window.innerWidth - 40) {
    setWinState(characters.policeCar);
  };
  if (characters.sportsCar.position + characters.sportsCar.div.offsetWidth >= window.innerWidth - 40) {
    setWinState(characters.sportsCar);
  };
};

function movePlayer(key) {
  switch(key.which) {
    case 90: // press z to make homer go
      var newSportsCarPosition = characters.sportsCar.position += 40;
      characters.sportsCar.div.style.left = newSportsCarPosition + "px";
      break;
    case 39: // press right arrow to make peter go
      var newPoliceCarPosition = characters.policeCar.position += 40;
      characters.policeCar.div.style.left = newPoliceCarPosition + "px";
      break;
  };
};

function setWinState(player){
  // stop players from moving
  document.onkeydown = null;
  // display winner and win image
  var img = document.createElement("img");
  img.setAttribute("id", "dinner");
  img.src = "imgs/winnerwinnerchickendinner.png";
  document.getElementById("container").appendChild(img);
  document.getElementsByTagName("h1")[0].innerText = player.name + " Wins!!!!";
}
