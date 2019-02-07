
window.onload = function() {
  characters = {
    serf: {
    div: document.getElementById("serf"),
    name: "Peasent"

    },
    dead: {
      div: document.getElementById("dead"),
    name: "Wade"

    }
  }
  activateButtons();
};

var characters = {};

function activateButtons(){
  //click the "run" button to start the characters
  document.getElementById("go").onclick = function(){
    startGame(characters);
  };
};

function startGame(characters){
  // start players on left
  characters.serf.div.style.left = 0;
  characters.dead.div.style.left = 0;

  // stop initial animations
  document.getElementById("go").className = "";
  document.getElementsByTagName("img").className = "";


  document.onkeydown = function(key) {
    characters.serf.position = parseInt(characters.serf.div.style.left, 10);
    characters.dead.position = parseInt(characters.dead.div.style.left, 10);
    checkWinner();
    movePlayer(key)
  };
};


function checkWinner(){
  if (characters.serf.position + characters.serf.div.offsetWidth >= window.innerWidth - 40) {
    setWinState(characters.serf);
  };
  if (characters.dead.position + characters.dead.div.offsetWidth >= window.innerWidth - 40) {
    setWinState(characters.dead);
  };
};

function movePlayer(key) {
  switch(key.which) {
    case 90: // press z to make serf go
      var newserfPosition = characters.serf.position += 40;
      characters.serf.div.style.left = newserfPosition + "px";
      break;
    case 39: // press right arrow to make dead go
      var newdeadPosition = characters.dead.position += 40;
      characters.dead.div.style.left = newdeadPosition + "px";
      break;
  };
};

function setWinState(player){
  // stop players from moving
  document.onkeydown = null;
  // display winner and win image
  var img = document.createElement("img");
  img.setAttribute("id", "winner");
  img.src = "imgs/serf.png";
  document.getElementById("container").appendChild(img);
  document.getElementsByTagName("h1")[0].innerText = player.name + " Wins!!!!";
}
