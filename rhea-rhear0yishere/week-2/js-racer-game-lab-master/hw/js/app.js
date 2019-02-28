// document.querySelector('.button5').addEventListener('click', box1);
// document.querySelector('.button5').addEventListener('click', box2);




var current1 = 10;
var current2 = 10;
document.querySelector('.box1').style.left= current1+("px")
document.querySelector('.box2').style.left= current2+("px")

document.onkeydown = checkKey;
function checkKey(e) {



    e = e || window.event;

  for(x=0; x<=400; x+=400){
    if (e.keyCode == '38') {
        var move1 = 10+current1;
        current1 = move1
        document.querySelector('.box1').style.left= current1+("px")

      }
    else if (e.keyCode == '90') {
       var move2 = 10+current2;
        current2 = move2
        document.querySelector('.box2').style.left= current2+("px")
    }


  }
}
// current1=0
// while(current1<1300){
//   document.onkeydown = checkKey;
//   if(current1=1200){
//       console.log("winner")


// }
// current1+=50;
// }












