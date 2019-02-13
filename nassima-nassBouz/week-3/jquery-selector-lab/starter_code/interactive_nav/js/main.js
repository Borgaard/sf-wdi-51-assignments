
// $( document ).ready(function() {
//     console.log( "let start" );

//   $("#main-nav a").on('click', function(){

//     var clickedOn = $(this).data().relatedPanel;
//     $( "#women, #men, #sale, #home, #blog").css('display', 'none');
//     $('#' + clickedOn).css('display', 'block');


//    if ($(this).hasClass('active') === false) {
//       //remove active class from all other elements
//        $("#main-nav a").removeClass('active');
//        $(this).addClass('active')}

//     else if($(this).hasClass('active') === true) {
//        $(this).removeClass('active');
//        $('#' + clickedOn).css('display', 'none')}
//   });
// })
$(document).ready(function(){

 $('[data-related-panel]').click( function(){

  var target = $(this).data('related-panel');
    $('#main-nav').find('section').hide();
  $("#"+target).show();
 });

});
