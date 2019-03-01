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

function startClucking(){
  // play Audio ad infinitum
  characters.chicken.audio.addEventListener("ended", function() {
    this.currentTime = 0;
    this.play();
  }, false);
  characters.chicken.audio.play();
};

function activateButtons(){
  //toggle button turns chicken sound on/off
  document.getElementById("audio").onclick = function() {
    !characters.chicken.audio.paused ? characters.chicken.audio.pause() : characters.chicken.audio.play();
  };
  //click the "catch it" button to start the characters
  document.getElementById("go").onclick = function(){
    startGame(characters);
  };
};

function startGame(characters){
  // start players and chicken on left
  characters.homer.div.style.left = 0;
  characters.peter.div.style.left = 0;
  characters.chicken.div.style.left = 0;

  // stop initial animations
  document.getElementById("go").className = "";
  document.getElementsByTagName("img").className = "";

  moveChicken();

  document.onkeydown = function(key) {
    characters.homer.position = parseInt(characters.homer.div.style.left, 10);
    characters.peter.position = parseInt(characters.peter.div.style.left, 10);
    checkWinner();
    movePlayer(key)
  };
};

function moveChicken(){
  characters.chicken.position = parseInt(characters.chicken.div.style.left, 10);
  setInterval(function(){
    var newVal = characters.chicken.position += 40;
    if(newVal <= window.innerWidth - characters.chicken.width){
      characters.chicken.div.style.left = newVal + "px";
    }
  }, 100);
};

function checkWinner(){
  if (characters.homer.position + characters.homer.div.offsetWidth >= window.innerWidth - 40) {
    setWinState(characters.homer);
  };
  if (characters.peter.position + characters.peter.div.offsetWidth >= window.innerWidth - 40) {
    setWinState(characters.peter);
  };
};

function movePlayer(key) {
  switch(key.which) {
    case 90: // press z to make homer go
      var newHomerPosition = characters.homer.position += 40;
      characters.homer.div.style.left = newHomerPosition + "px";
      break;
    case 39: // press right arrow to make peter go
      var newPeterPosition = characters.peter.position += 40;
      characters.peter.div.style.left = newPeterPosition + "px";
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
  player.audio.play();
}
