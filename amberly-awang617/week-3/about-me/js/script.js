// Make sure jquery is working
// $( document ).ready(function() {
//     console.log( "ready!" );
// });
var testimony;

let fadeAway = function() {
  $('.testimony').fadeOut("slow");
}

let fadeBack = function() {
  $('.testimony').empty();
  $('.testimony').append(`<p>Hello there</p>`);
  $('.testimony').fadeIn("slow");
}

// setInterval(fadeAway, 10000);
// setInterval(fadeBack, 10050);

document.querySelector("button").addEventListener('click', clearForm)

function clearForm(e) {
  e.preventDefault();
  document.getElementById('myForm').reset();
}

