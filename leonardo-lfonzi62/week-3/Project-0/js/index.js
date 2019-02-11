// var express = require('express');
// var app = express();

// var PORT = process.env.PORT || 3000;

// app.listen(PORT);

console.log("the script is working!");
var love = "I love jquery, jquery script is working";

console.log(`${love}`);

// Quote function that times
(function() {

  var quotes = $(".quotes");
  var quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    quotes.eq(quoteIndex % quotes.length)
    .fadeIn(2000)
    .delay(2000)
    .fadeOut(2000, showNextQuote);
  }

  showNextQuote();

})();

// lightbox function
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// Interval function for carousel
$(document).ready(function(){
  $('.carousel').carousel();

  setInterval(function(){
    $('.carousel').carousel('next');
  }, 4000);

// scroll functionality
var scrollLink = $('.scroll');

scrollLink.click(function(e) {
  e.preventDefault();
  $('body,html').animate({
      // this.hash refers to the users scroll distance from the top of the page
      scrollTop: $(this.hash).offset().top
    }, 1500 );
});

// nav bar class functionality
$(window).scroll(function() {
  var scrollbarLocation = $(this).scrollTop();
  scrollLink.each(function() {

    var sectionOffset = $(this.hash).offset().top - 60 ;

    if ( sectionOffset <= scrollbarLocation ) {
      $(this).parent().addClass('scrollActive');
      $(this).parent().siblings().removeClass('scrollActive');
    }
  })

})


});

