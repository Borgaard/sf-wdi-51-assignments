window.addEventListener("keydown", function(e){
  var pressedButton = e.keyCode;
  console.log(pressedButton);
  switch (pressedButton) {
    case 88: // x key
      moveCar1();
      break;
    case 77: // m key
      moveCar2();
      break;
    default:

  }
});

let car1 = document.querySelector('.car1');
let car2 = document.querySelector('.car2');
let positionCar1 = 0;
let positionCar2 = 0;

let moveCar1 = function() {
  positionCar1 += 10;
  car1.style.left = `${positionCar1}px`;
}

let moveCar2 = function() {
  positionCar2 += 10;
  car2.style.left = `${positionCar2}px`;
}
