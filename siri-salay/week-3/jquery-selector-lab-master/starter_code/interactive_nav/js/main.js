$( document ).ready(function() {
    console.log( "ready to GOOOOOOOOO!" );

  $("#main-nav a").on('click', function(){

    var clickedOn = $(this).data().relatedPanel;
    $( "#women, #men, #sale, #home, #blog").css('display', 'none');
    $('#' + clickedOn).css('display', 'block');


   if ($(this).hasClass('active') === false) {
      //remove active class from all other elements
       $("#main-nav a").removeClass('active');
       $(this).addClass('active')}

    else if($(this).hasClass('active') === true) {
       $(this).removeClass('active');
       $('#' + clickedOn).css('display', 'none')}


    // if(clickedOn === "Women's") {
    // $('#women').css('display', 'block');
    // $( "#men, #sale, #home, #blog").css('display', 'none');
    // }

    //  else if(clickedOn === "Men's") {
    // $('#men').css('display', 'block');
    // $( "#women, #sale, #home, #blog").css('display', 'none');
    // }

    //  else if(clickedOn === "Sale") {
    // $('#sale').css('display', 'block');
    // $( "#women, #men, #home, #blog").css('display', 'none');
    // }

    //  if(clickedOn === "Home & Gifts") {
    // $('#home').css('display', 'block');
    // $( "#women, #men, #sale, #blog").css('display', 'none');
    // }

    //  if(clickedOn === "Blog") {
    // $('#blog').css('display', 'block');
    // $( "#women, #sale, #home, #men").css('display', 'none');
    // }

  });



});

