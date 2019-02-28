// [x]get the cicle elements and store in variable
// [x] save element in variable
// [x] target 1 cirlce
// [x] set event listener with keys

// []use the start stop button to initiate
// []set win function
// []make limit on margin to end game



// document.querySelector('button').addEventListener("click", function(e) {
//   debugger;
// });


var q = document.querySelector(".balloon1");
var p = document.querySelector(".balloon2");




// q.addEventListener("q", moverfunction);
document.addEventListener("keydown", moverFunction);


// var mover = 5

// function moverFunction (e) {

//  if (e.keyCode === 81)  {
//     mover += 1
//     q.style.marginBottom= `${mover}em`;
//  }
//  else if (e.keyCode === 80)  {
//     mover += 1
//     p.style.marginBottom= `${mover}em`;
//     }
// console.log("do you work?");
// }


// win function

var mover = 5
var qpacer = 5
var ppacer = 5

function moverFunction (e) {
  // console.log(e);
  // debugger;
  if (qpacer == 25)  {
    alert("Goldstandard wins!")

  }
  else if (ppacer == 25)  {
    alert("Kingfisher wins!")
  }
 else if (e.keyCode === 81)  {
    mover += 1
    qpacer += 1
    q.style.marginBottom= `${mover}em`;
 }
 else if (e.keyCode === 80)  {
    mover += 1
    ppacer += 1
    p.style.marginBottom= `${mover}em`;
    }
    console.log("this is counting")
}




// Buggy Code below allows balloon to move even after a winner is declared.

// var qpacer = 5
// var ppacer = 5
// document.addEventListener("keydown", winnerFunction);
// function winnerFunction (e){
//  if (qpacer == 8)  {
//     console.log("Player 1 wins!")
//   }
//   else if (ppacer == 8)  {
//     console.log("Player 2 wins!")
//   }
// }

// var mover = 5
// function moverFunction (e) {
//  if (e.keyCode === 81)  {
//     mover += 1
//     qpacer += 1
//     q.style.marginBottom= `${mover}em`;
//  }
//  else if (e.keyCode === 80)  {
//     mover += 1
//     ppacer += 1
//     p.style.marginBottom= `${mover}em`;
//     }
// }



