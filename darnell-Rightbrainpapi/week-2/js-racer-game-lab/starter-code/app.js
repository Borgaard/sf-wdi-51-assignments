// []get the cicle elements and store in variable
// [] save element in variable
// [] target 1 cirlce
// [] set event listener with keys
//






var q = document.querySelector(".circle1");
var p = document.querySelector(".circle2");




// q.addEventListener("q", moverfunction);
document.addEventListener("keydown", moverFunction);


var mover = 2

function moverFunction (e) {
  // console.log(e);
 if (e.keyCode === 81)  {
    mover += 1
    q.style.marginLeft= `${mover}em`;
 }
 else if (e.keyCode === 80)  {
    mover += 1
    p.style.marginLeft= `${mover}em`;
    }
console.log("do you work?");
}




// moverfunction{
// if (e.code === 80) {
// // some code here
//  }
// }

 // document.onkeydown == moverfunction
