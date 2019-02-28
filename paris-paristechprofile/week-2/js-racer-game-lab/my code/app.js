window.onload = function () {
  player = {
    blue: {
      div: document.querySelector(".blueBox"),
      name: "Blue"
    },
    red: {
      div: document.querySelector(".redBox"),
      name: "Yellow"
    },
  };
};

//activate button listening
const go = document.querySelector(".ready").addEventListener("click", function() {
//show a user a GO!
    document.getElementsByTagName("h2")[0].innerText = "GO!";
});

//determine blueBox right boundary
	var blueBoxRight = parseInt(document.querySelector('.blueBox').getBoundingClientRect().right);
//determine redBox right boundary
	var redBoxRight = parseInt(document.querySelector('.redBox').getBoundingClientRect().right);
//determine finish line 
	let finishLine = parseInt(document.querySelector('.finish').getBoundingClientRect().left);

let blueBox = document.querySelector('.blueBox');
let redBox =  document.querySelector('.redBox') //do the same for red
  	window.addEventListener('keydown', moveBox); // this is comprised of an event and a callback function 
  	var blueLeft = 0;
  	var redLeft = 0;

  	function moveBox(e) {
    if (( e.keyCode == 65) || (e.keyCode == 83 )) { //take keystrokes and move blue div, by increment
      	blueLeft += 20;
      	blueBox.style.marginLeft = blueLeft + "px";
    };  
    if (( e.keyCode == 76) || (e.keyCode == 186 )) { //take keystrokes and move red div, by increment
    	redLeft += 20;
    	redBox.style.marginLeft = redLeft + "px";
    };
    blueBoxRight = parseInt(document.querySelector('.blueBox').getBoundingClientRect().right);
   	redBoxRight = parseInt(document.querySelector('.redBox').getBoundingClientRect().right);
    checkWinner();
};

function checkWinner(){
	if ((blueBoxRight) >= (finishLine)) {
		// console.log("blue wins");
		window.removeEventListener('keydown', moveBox);
		document.getElementsByTagName("h2")[0].innerText = player.blue.name + " Wins!";
	}; 
	if ((redBoxRight) >= (finishLine)) {
		/*console.log("red wins");*/
		window.removeEventListener('keydown', moveBox);
		document.getElementsByTagName("h2")[0].innerText = player.red.name + " Wins!";
	};
};