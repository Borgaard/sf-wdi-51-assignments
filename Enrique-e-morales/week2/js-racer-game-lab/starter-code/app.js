



//NOTE: I followed along with a tutorial to learn how to build this.
//It was way complex but I was happy to get exposure to this difficulty of code
//and be able to understand most of the codes functionality


//Set constant variables of selectors
const speedDash = document.querySelector('.speedDash');
const scoreDash = document.querySelector('.scoreDash');
const lifeDash = document.querySelector('.lifeDash');
const container = document.getElementById('container');
const btnStart = document.querySelector('.btnStart');
const swirl = document.querySelector('.swirl');
//adding events to click and keys
btnStart.addEventListener('click', startGame);
swirl.addEventListener('click', startGame);
document.addEventListener('keydown', pressKeyOn);
document.addEventListener('keyup', pressKeyOff);

//Game Variables
//prevents game from running
let gamePlay = false;
//starting values
let player;
//arrow key notifications
let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
}
//function to start the game
function startGame(){
  //hides button after click
  btnStart.style.display = "none";
  swirl.style.display = "none";
  var div = document.createElement('div');
  div.setAttribute('class','playerCar');
  //sets initial value of div, start position
  div.x = 250;
  div.y = 500;
  container.appendChild(div);
  gamePlay = true;
  //Requests an animation frame for the player
  let animationGame =requestAnimationFrame(playGame);
  //player starting values
  player = {
  ele: div,
  speed: 1,
  lives: 3,
  gameScore: 0,
  carstoPass: 10,
  score: 0,
  roadwidth: 250,
  }
  startBoard();
}

//creates the road
function startBoard(){
  for(let i = 0; i < 13; i++){
    let div = document.createElement('div');
    div.setAttribute('class', 'road');
    div.style.top = (i * 50) + 'px';
    div.style.width = player.roadwidth + 'px';
    container.appendChild(div);
  }
}


function pressKeyOn( event ){
  event.preventDefault();
  console.log(keys);
  keys[event.key] = true;
}

function pressKeyOff( event ){
  event.preventDefault();
  console.log(keys);
  keys[event.key] = false;
}
//will use player values(object) to update dashboard
function updateDash(){
  scoreDash.innerHTML = player.score;
  lifeDash.innerHTML = player.lives;
  speedDash.innerHTML = Math.round(player.speed*13);
}

//move road function

function moveRoad(){
  let tempRoad = document.querySelectorAll('.road');
  console.log(tempRoad);
  let previousRoad = tempRoad[0].offsetLeft;
  let previousWidth = tempRoad[0].width;
  const pSpeed = player.speed;
  for(let i = 0; i < tempRoad.length; i++){
    let num = tempRoad[i].offsetTop + player.speed;
    if(num > 600){
      //resets road to the top
      num = num - 650;
      let mover = tempRoad[i].offsetLeft + (Math.floor(Math.random()*6)-3);
      let roadWidth = (Math.floor(Math.random()*11)-5) + previousWidth;
      if(roadWidth < 200)roadWidth = 200;
      if(roadWidth > 400)roadWidth = 400;
      if(mover < 100) mover = 100;
      if(mover > 600) mover = 600;
      tempRoad[i].style.left = mover + 'px';
      tempRoad[i].style.width = roadWidth + 'px';
      previousRoad = tempRoad[i].offsetLeft;
      previousWidth = tempRoad[i].width;
    }
    tempRoad[i].style.top = num +'px';
  }
}





//request animation function, creates animation
function playGame(){
  if(gamePlay){
      updateDash();
      //Movement
      moveRoad();

      if(keys.ArrowUp){
        if(player.ele.y > 400) player.ele.y -= 1 ;
        player.speed = player.speed < 20 ? (player.speed+0.05) : 20;
      }
      if(keys.ArrowDown){
        if(player.ele.y < 500){player.ele.y += 1;}
        player.speed = player.speed > 0 ? (player.speed-0.2) : 0;
      }
      if(keys.ArrowRight){
        player.ele.x += (player.speed/4);
      }
      if(keys.ArrowLeft){
        player.ele.x -= (player.speed/4);
      }

      //move car
      player.ele.style.top = player.ele.y + 'px';
      player.ele.style.left = player.ele.x + 'px';



  }
  animationGame =requestAnimationFrame(playGame);
}
