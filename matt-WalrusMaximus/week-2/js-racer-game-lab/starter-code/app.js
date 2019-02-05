//highlevel function 
//create selectable pieces
//display the game pieces
//start game -- increment positions from left to right
//when piece reaches right, check if isPlayer=true, then display result
//reset game

function aboutButton() {
    document.querySelector(".howtoplay-text").style.display = "none";
    document.querySelector(".about-text").style.display = "block";
}

function infoButton() {
    document.querySelector(".about-text").style.display = "none";
    document.querySelector(".howtoplay-text").style.display = "block";
}

racers = {
    red: {
        name: "Racer 1",
        color: "red",
        isPlayer: false,
    },
    blue: {
        name: "Racer 2",
        color: "blue",
        isPlayer: false,
        location: document.getElementById('dot2'),
    },
    green: {
        name: "Racer 3",
        color: "green",
        isPlayer: false,
        location: document.getElementById('dot3'),
    },
    white: {
        name: "Racer 4",
        color: "white",
        isPlayer: false,
        location: document.getElementById('dot4'),
    },
}

// function to select your piece and hide the selectable pieces
// display the game pieces and start game

function selectRed() {
    racers.red.isPlayer = true;
    redmover();
}

function selectBlue() {
    racers.blue.isPlayer = true;
}

function selectGreen() {
    racers.green.isPlayer = true;
}

function selectWhite() {
    racers.white.isPlayer = true;
}

// set random intervals to move pieces across the screen from pos left
// once piece reaches the end check if its object.isPlayer == true, if so, event win else event lose
// on clear of event reset to choose piece


document.querySelector('.selector1').addEventListener("click", redMover()),

function redMover() {
    document.getElementById('dot1').div.style.left = '10%'

}
