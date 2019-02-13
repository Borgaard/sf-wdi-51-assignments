var lebronPosition = 0;
var curryPosition = 0;


function keyFunction(e){
    if (curryPosition >= 100) {
      alert("Curry is the winner!!");
    }
    if (lebronPosition >= 100) {
      alert("Lebron finally won one");
    }
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



