

var courage = document.getElementById('courage');
var eustace = document.getElementById('eustace');

var restart = document.getElementById('restart');
var start = document.getElementById('start');

let courageRight = -2;
let eustaceRight = -8;

function moveEustace() {
      eustaceRight ++;
      eustace.style.right = eustaceRight + '%';
      checkIfWon();
}

function startGame() {
 setInterval(moveEustace, 600);
}

function restartGame() {
      var beginning = -8;
      eustace.style.right = beginning + '%';
      clearTimeout()
}

// var changeCourage = function(){
//   courageRight++;
//   courage.style.right = courageRight + '%';
//   checkIfWon();
// }

// var changeEustace = function(){
//   eustaceRight++;
//   eustace.style.right = eustaceRight + '%';
//   checkIfWon();
// }


// courageButton.addEventListener('click', changeCourage);
// eustaceButton.addEventListener('click', changeEustace);

start.addEventListener('click', startGame)
restart.addEventListener('click', restartGame)



function checkIfWon(){
   if(courageRight === 54){
    alert("Courage Won!!!");
   }
   else if(eustaceRight === 54){
    alert("Eustace Won!!!");
   }

   //to do: make clear div not clear and remove the characters
}

  var moveChar = function moveCourage(e){

    if(e.keyCode === 37){
      courageRight +=2;
      courage.style.right = courageRight + '%';
      checkIfWon();
    }
 }

//math.randommath.floor*10 var num

/*onkeydown
*/
  document.onkeydown = moveChar;


 // theBody.addEventListener('onkeydown', (e) => {
 //  console.log(e);
 // });

//var courageRight = courage.style.right;
//   document.onkeydown = function(key) {
//     courage.position = parseInt(courage.style.left, 5);
//     eustace.position = parseInt(eustace.style.left, 5);
//     movePlayer(key)
//   };

// function movePlayer(key) {
//   switch(key.which) {
//     case 90: // press z to make homer go
//       var newCouragePosition = courage.position += 36;
//       courage.style.left = newCouragePosition + "px";
//       break;
//     case 39: // press right arrow to make peter go
//       var newPeterPosition = characters.peter.position += 36;
//       characters.peter.div.style.left = newPeterPosition + "px";
//       break;
//   };
// };
