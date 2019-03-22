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

let rover = document.querySelector("#piece");
let val2 = 0;
let musk = document.querySelector("#piece2");
var val = 0;


document.addEventListener('keydown', function(event) {
    console.log(rover.offsetWidth)
    let width = window.innerWidth;
    if(event.keyCode == 68) {
        val += 40;
        musk.style.marginLeft = val + "px"
    }
    if(event.keyCode == 39) {
        val2 += 40;
        rover.style.marginLeft = val2 + "px"
    }
// console.log('pressed');
    console.log(width);
    console.log((rover.offsetWidth + val2));

if ((musk.offsetWidth + val) >= width) {
    console.log('musk wins')
    // alert('Rover Wins!');
    // window.reload();

}
if ((rover.offsetWidth + val2) >= width){
    console.log('rover wins')
    // alert('Elon Won!!');
     // window.reload();
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
