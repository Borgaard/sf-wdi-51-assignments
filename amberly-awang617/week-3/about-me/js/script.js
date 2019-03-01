// Make sure jquery is working
// $( document ).ready(function() {
//     console.log( "ready!" );
// });

// found on https://stackoverflow.com/questions/3670487/jquery-text-fade-transition-from-one-text-to-another
(function() {

var quotes = $(".quote");
var quoteIndex = -1;

function showNextQuote() {
    ++quoteIndex;
    quotes.eq(quoteIndex % quotes.length)
        .fadeIn(2000)
        .delay(10000)
        .fadeOut(2000, showNextQuote);
}

showNextQuote();

})();

$(".gallery-image").mouseenter(function() {
  $(this).css("opacity", .5);
  $(this).find("button").show();
})

$(".gallery-image").mouseleave(function() {
  $(this).css("opacity", 1);
  $(this).find("button").hide();
})


document.querySelector(".submit").addEventListener('click', clearForm)

function clearForm(e) {
  e.preventDefault();
  document.getElementById('myForm').reset();
}


$('#exampleModalCenter').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  // debugger;
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-body').empty();
  modal.find('.modal-body').append(`<img src="${recipient}">`)
  // modal.find('.modal-body input').val(recipient)
})

