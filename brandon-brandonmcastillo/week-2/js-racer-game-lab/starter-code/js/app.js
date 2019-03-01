//Play Theme
function play() {
    var audio = document.getElementById("song")
    audio.play();
}

//When HTML is loaded, load DOM right away and add keyup method
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keyup', key)
})

//Assigns a specific KeyPress to a function
function key(e) {
    // Key Code 90 means Z
    if (e.which == 90) {
        movePlayer(1)
    }
    // Key Code 39 means ->
    if (e.which == 39) {
        movePlayer(2)
    }
}
// Function that targets both players
function movePlayer(User) {
    //Finds both players by ID to at assigned row 
    var row = document.getElementById('player' + User)
    //Finds both players by class at assigned cell
    var cell = document.getElementsByClassName('marvel' + User)
    //Adds +1 into row object property Cell index to move
    var nextCell = row.cells[cell[0].cellIndex + 1]



    Winner(nextCell, User)
    cell[0].className = ''
    nextCell.className = 'marvel' + User
}

//Function definers a winner and reloads window
function Winner(nextCell, User) {
    //When player reaches end and theres no more tables data, greet alert                        
    if (nextCell === undefined) {
        alert(`Congrats! Player ${User} wins!`)
        window.location.reload()
    }
}


