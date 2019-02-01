document.querySelector('.button5').addEventListener('click', box1);
document.querySelector('.button5').addEventListener('click', box2);

function box1(){

 var random = Math.floor(Math.random() * 10);
 var randomMultiply = random* 166

 document.querySelector('.box1').style.left= randomMultiply+("px")


}


function box2(){

 var random = Math.floor(Math.random() * 10);
 var randomMultiply = random* 166

    document.querySelector('.box2').style.left= randomMultiply+("px")
      if (random===9) {
      alert("BLUE BOX WINNER");
    }


}



