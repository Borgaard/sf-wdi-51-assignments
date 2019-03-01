const random1 = Math.floor(Math.random() * 10) + 1;
const random2 = Math.floor(Math.random() * 10) + 1;

function move() {
  let elem1 = document.getElementById('apple');
  let elem2 = document.getElementById('orange');
  let pos1 = 0;
  let pos2 = 0;
  let id1 = setInterval(frame1, random1);
  let id2 = setInterval(frame2, random2);
  function frame1() {
    if (pos1 == 650) {
      clearInterval(id1);
      alert('Apple wins!');
    } else {
      pos1++;
      elem1.style.left = pos1 + 'px';
    }
  }
  function frame2() {
    if (pos2 == 650) {
      clearInterval(id2);
      alert('Orange wins!')
    } else {
      pos2++;
      elem2.style.left = pos2 + 'px';
    }
  }
}




// function move2() {
//   let elem = document.getElementById('apple');
//   let pos = 0;
//   let id = setInterval(frame, random2);
//   function frame() {
//     if (pos == 600) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.left = pos + 'px';
//     }
//   }
// }



// Click the GO button



// const goButton = document.querySelector('#go');
// const apple = document.querySelector('#apple');
// goButton.addEventListener('click', startRace);

// const startRace = function() {
//   let fruitWidth = apple.width();
//   let racetrackWidth = $(window).width() - fruitWidth;
//   let raceTime1 = Math.floor((Math.random() * 5000) + 1);
//   let raceTime2 = Math.floor((Math.random() * 5000) + 1);
//   let isComplete = false;
//   let place = 'first';

//   apple.animate({
//     left: racetrackWidth
//   }, raceTime1, function() {
//   });
// };

// $('#go').click(function() {

//   //get width of the fruit
//   let fruitWidth = $('#apple').width();

//   //get width of the racetrack
//   let racetrackWidth = $(window).width() - fruitWidth;

//   //generate random # between 1 and 5000
//   let raceTime1 = Math.floor((Math.random() * 5000) + 1);
//   let raceTime2 = Math.floor((Math.random() * 5000) + 1);

//   //set a flag var to false
//   let isComplete = false;

//   //set a 2nd flag variable to first by default
//   let place = 'first';

//   //animate apple
//   $('#apple').animate({
//     //move the car the width of the racetrack
//     left: racetrackWidth

//   }, raceTime1, function () {

//     //animation is complete

//     //run a function



//   });

// });
