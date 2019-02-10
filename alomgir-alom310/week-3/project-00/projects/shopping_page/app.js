function functionCar() {
  var showPlanes = document.getElementById("planes"); {
    showPlanes.style.display = "none";
  }
  var showBoats = document.getElementById("boats"); {
    showBoats.style.display = "none";
  }
  var showCars = document.getElementById("cars");
  if (showCars.style.display === "flex") {
    showCars.style.display = "none";
  } else {
    showCars.style.display = "flex";
  }
};

function functionPlane() {
  var showCars = document.getElementById("cars"); {
    showCars.style.display = "none";
  }
  var showBoats = document.getElementById("boats"); {
    showBoats.style.display = "none";
  }
  var showPlanes = document.getElementById("planes");
  if (showPlanes.style.display === "flex") {
    showPlanes.style.display = "none";
  } else {
    showPlanes.style.display = "flex";
  }
};

function functionBoat() {
  var showCars = document.getElementById("cars"); {
    showCars.style.display = "none";
  }
  var showPlanes = document.getElementById("planes"); {
    showPlanes.style.display = "none";
  }
  var showBoats = document.getElementById("boats");
  if (showBoats.style.display === "flex") {
    showBoats.style.display = "none";
  } else {
    showBoats.style.display = "flex";
  }
};

$('#cars button').on('click',function () {
  var spec = $(this).html();
  $('#garage').append('<li>' + spec + '</li>');
  $('#gButton button').show()
});

$('#planes button').on('click',function () {
  var spec = $(this).html();
  $('#garage').append('<li>' + spec + '</li>');
  $('#gButton button').show()
});

$('#boats button').on('click',function () {
  var spec = $(this).html();
  $('#garage').append('<li>' + spec + '</li>');
  $('#gButton button').show()
});

$('#garage button').on('click', function(){
  $('#garage li').remove();
  $('#gButton button').hide()
});




