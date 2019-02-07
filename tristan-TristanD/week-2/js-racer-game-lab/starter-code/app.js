var world = document.querySelector("#world");
// var ctx = world.getContext('2d');
world.width = 600;
world.height = 600;

// var gamePiece = {
//     height: 50,
//     width: 40,
//     x: 10,
//     y: 10,
//     color: "#FF0000"
// }

let gamePiece = document.querySelector("#piece");
let val = 0;
let gamePiece2 = document.querySelector("#piece2");
let val2 = 0;


document.addEventListener('keydown', function(event) {
    let width = window.innerWidth;
console.log('pressed');
    console.log(width);
    console.log(gamePiece.offsetWidth);
    console.log(val)
if (gamePiece.offsetWidth + val >= width) {
    alert('Rover Wins!');

}else if (gamePiece2.offsetWidth + val2 >= width){
    alert('Elon Won!!');
}

    if(event.keyCode == 39) {
        val += 40;
        gamePiece.style.marginLeft = val + "px"
    }
    else if(event.keyCode == 68) {
        val2 += 40;
        gamePiece2.style.marginLeft = val2 + "px"
    }
});


// let val = 0;

// document.addEventListener('keydown', function(event) {
//     val += 10;
//     //left
//     if(event.keyCode == 37) {
//         gamePiece2.x -= 1;
//     }
//     //top
//     else if(event.keyCode == 38) {
//         gamePiece2.y -= 1;
//     }
//     //right
//     else if(event.keyCode == 68) {
//         gamePiece2.style.marginLeft = val + "%"
//     }
//     //bottom
//     else if(event.keyCode == 40) {
//         gamePiece.y += 1;
//     }
// });
// function renderCanvas(){
//     ctx.fillStyle = "#000000";
//     ctx.fillRect(0, 0, 600, 600);
// }
// function renderObject(){
//     ctx.fillStyle = "#FF0000";
//     ctx.fillRect(object.x, object.y, object.width, object.height);
// }
// function run(){
//     renderCanvas();
//     renderObject();
// }

// setInterval(run, 10);
