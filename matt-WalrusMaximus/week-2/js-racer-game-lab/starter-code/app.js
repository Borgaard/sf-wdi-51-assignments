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
        pos: 1,
    },
    blue: {
        name: "Racer 2",
        color: "blue",
        isPlayer: false,
        pos: 1,
    },
    green: {
        name: "Racer 3",
        color: "green",
        isPlayer: false,
        pos: 1,
    },
    white: {
        name: "Racer 4",
        color: "white",
        isPlayer: false,
        pos: 1,
    },
}



// set random intervals to move pieces across the screen from pos left
// once piece reaches the end (position 8)check if its object.isPlayer == true, if so, event win else event lose
// on clear of event reset to choose piece


document.getElementById("piece1").addEventListener("click", function() {
    racers.red.isPlayer = true;
    console.log(racers.red)
    startGame();
})
document.getElementById("piece2").addEventListener("click", function() {
    racers.blue.isPlayer = true;
    console.log(racers.blue)
    startGame();
})
document.getElementById("piece3").addEventListener("click", function() {
    racers.green.isPlayer = true;
    console.log(racers.green)
    startGame();
})
document.getElementById("piece4").addEventListener("click", function() {
    racers.white.isPlayer = true;
    console.log(racers.white)
    startGame();
})

function startGame() {
    document.getElementById("piece1").style.display = "none"
    document.getElementById("piece2").style.display = "none"
    document.getElementById("piece3").style.display = "none"
    document.getElementById("piece4").style.display = "none"
    document.querySelector('h1').style.display = "none"
  

    redMove();
    blueMove();
    greenMove();
    whiteMove();
}

function redRacer() {
    if (racers.red.pos < 8) {
        racers.red.pos++
        document.getElementById('dot1').style.left = `${racers.red.pos*10}%`
    } else {
        if (racers.red.isPlayer) {
            alert("You win!")
            window.location.reload();
        } else {
            alert("You lost.")
            window.location.reload();
        }
    }
}

function blueRacer() {
    if (racers.blue.pos < 8) {
        racers.blue.pos++
        document.getElementById('dot2').style.left = `${racers.blue.pos*10}%`
    } else {
        if (racers.blue.isPlayer) {
            alert("You win!")
            window.location.reload();
        } else {
            alert("You lost.")
            window.location.reload();
        }
    }
}

function greenRacer() {
    if (racers.green.pos < 8) {
        racers.green.pos++
        document.getElementById('dot3').style.left = `${racers.green.pos*10}%`
    } else {
        if (racers.green.isPlayer) {
            alert("You win!")
            window.location.reload();
        } else {
            alert("You lost.")
            window.location.reload();
        }
    }
}

function whiteRacer() {
    if (racers.white.pos < 8) {
        racers.white.pos++
        document.getElementById('dot4').style.left = `${racers.white.pos*10}%`
    } else {
        if (racers.white.isPlayer) {
            alert("You win!")
            window.location.reload();
        } else {
            alert("You lost.")
            window.location.reload();
        }
    }
}
  
function redMove() {
    setInterval(function(){
        redRacer();
    }, Math.floor((Math.random() * 1000) + 1));
    
}

function blueMove() {
    setInterval(function(){
        blueRacer();
    }, Math.floor((Math.random() * 1000) + 1));
    
}

function greenMove() {
    setInterval(function(){
        greenRacer();
    }, Math.floor((Math.random() * 1000) + 1));
    
}

function whiteMove() {
    setInterval(function(){
        whiteRacer();
    }, Math.floor((Math.random() * 1000) + 1));
    
}

// IT WOOOOORKS! Simple issue was fixing the targeting of the elements, even without jquery it was easy to find what went wrong with fresh eyes.
// also made a page refresh at the end so the game automatically can be restarted.
// noticed an interesting anomoly on one of the games, if the pieces are moving at exactly the same speed, you can get both a "win" and "lose" notification.



