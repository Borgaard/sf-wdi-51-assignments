$(document).ready(function() {
    console.log("Everything is ready, let's dooooooooooo");





$('form').on('submit',function(e) {
   e.preventDefault();

     if($('.contact form input[type = "text"]').val() === '') {
    $('.contact form input[type = "text"]').addClass('error');
  }


   });


  });
