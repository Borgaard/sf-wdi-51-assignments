 $(document).ready(function(){
   console.log("Hey your not crazy,this thing loads")
   AOS.init();
   //Changes the opacity of bg-color on about me section

  $(window).on('scroll', function(){
    let distance = $('.head-about').offset().top / 2

    if($(window).scrollTop() >= distance) {
      console.log('hit top');
      // $('.head-about').addClass('fade-in-color')
      $('.head-about').css('background-color', 'rgba(5,5,5,0.5)');


    }
  });
  //changes border width as user scrolls down
    $(window).on('scroll', function(){
    let distanceheader = $('.header1').offset().top

    if($(window).scrollTop() >= distanceheader * 5) {
      console.log('hit top');
      $('.header1').css('border-width', '200px 30px 5px 30px');

    //   else($(window).scrollTop() >= distanceheader * 4) {
    //   console.log('hit top');
    //   $('.header1').css('border-width', '200px 30px 8px 30px');


    // }

    }
    });
    var i = 0;
  var txt = 'Tristan De Clarin';
  var speed = 400;

$(window).ready(function typeWriter () {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
});

});
