console.log("Main Connected");

$('document').ready(function(){
  console.log("jQuery Connected");

  $('.dropdown-trigger').dropdown();
//   $('.dropdown-content li a').on('click', function() {
//     window.location.href = $(this).attr('href');
// }

  $('.carousel').carousel();
  // let instance = M.Carousel.getInstance(elem);

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });


});
