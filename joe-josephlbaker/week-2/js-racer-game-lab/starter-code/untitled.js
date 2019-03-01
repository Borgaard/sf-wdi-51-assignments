$('#go').click(function() {

  //get width of the fruit
  let fruitWidth = $('#apple').width();

  //get width of the racetrack
  let racetrackWidth = $(window).width() - fruitWidth;

  //generate random # between 1 and 5000
  let raceTime1 = Math.floor((Math.random() * 5000) + 1);
  let raceTime2 = Math.floor((Math.random() * 5000) + 1);

  //set a flag var to false
  let isComplete = false;

  //set a 2nd flag variable to first by default
  let place = 'first';

  //animate apple
  $('#apple').animate({
    //move the car the width of the racetrack
    left: racetrackWidth

  }, raceTime1, function () {

    //animation is complete

    //run a function



  });

});
