let intervalCode;
let windowPosition = window.innerWidth -20;
let startGo;

let mario = document.getElementsByClassName('mario');
mario = mario[0];
mario.style.left = "0px";

let bowser = document.getElementsByClassName('bowser');
bowser = bowser[0];
bowser.style.left = "-40px";

let luidgi = document.getElementsByClassName('luidgi');
luidgi = luidgi[0];
luidgi.style.left = "0px";


let start = document.getElementById('start');
let bowserPosition;


let playStop = function () {
  intervalCode = setInterval(()=> {
        bowser.style.left = parseInt(bowser.style.left) + 20 + 'px';
        bowserPosition = bowser.offsetWidth + parseInt(bowser.style.left) -5;
        if (bowserPosition > windowPosition ) {
          alert('Bowser Won!!!!');
          start++;
          return;
        }
      }, 100);
}

start.addEventListener('click', function () {
  playStop();
});

let goStop = document.getElementById("go-stop");

goStop.addEventListener("click", function () {
  if (!go){
    clearInterval(intervalCode);
    go = !go;
  } else {
    playStop();
    go = !go;
  }
});


document.onkeydown = function (event) {
 if (event.keyCode === 90) {
    mario.style.left = parseInt(mario.style.left) + 25 + 'px';
 }
 if (event.keyCode === 39) {
  luidgi.style.left = parseInt(luidgi.style.left) + 25 + 'px';
 }
  let luidgiPosition = luidgi.offsetWidth + parseInt(luidgi.style.left) -10;
  let marioPosition = mario.offsetWidth + parseInt(mario.style.left) -10;
  if (marioPosition > windowPosition ) {
     alert('Mario Won!!!!');
  }
  if (luidgiPosition > windowPosition ) {
     alert('Luidgi Won!!!!');
  }
}

