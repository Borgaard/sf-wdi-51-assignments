var lebronPosition = 0;
var curryPosition = 0;

function keyFunction(e){
  if(e.keyCode == 39){
      lebronPosition +=10;
      lebron.style.left = lebronPosition + '2px';
    }
   if(e.keyCode == 90){
      curryPosition +=10;
      curry.style.left = curryPosition + '2px';
    }
};

document.onkeydown = keyFunction;

// function winner(event){
//   if (lebron.style.left = "1000px"){
//     alert("lebron is the winner");
//   }
// };
