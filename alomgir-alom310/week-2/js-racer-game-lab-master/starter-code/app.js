// document.addEventListener('keydown',red)

// function blueFunction(){
//   console.log("blueMove")
// }

var redBoxPosition = 0;
var blueBoxPosition = 0;

function keyFunction(e){
  if(e.keyCode == 39){
      redBoxPosition +=10;
      redbox.style.left = redBoxPosition + 'px';
    }
   if(e.keyCode == 90){
      blueBoxPosition +=10;
      bluebox.style.left = blueBoxPosition + 'px';
    }
}

document.onkeydown = keyFunction;
