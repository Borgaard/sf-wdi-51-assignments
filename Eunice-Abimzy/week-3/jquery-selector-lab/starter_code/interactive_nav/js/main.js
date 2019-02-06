$(document).ready(function(){
  //When user clicks on anchor in main nav, if main nav is active, hide it and slide up the subnav
  //if subnav is already hidden, slideDown subnav
  //else if subnav is already showing, on click, slide down the related panel

  $('#main-nav').on('click', functi.on(){
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(#subnav).slideUp();
    } else {
      $('main-nav').removeClass('active');
      $(this).addClass('active');
      $('#subnav').slideDown();

    }

    };

  });


});
$(document).ready(function(){
  $('#main-nav').on('click', function{
    $('#subnav').data-related-panel().
  })

});
 $('#main-nav a').removeClass('active');

    $(this).addClass('active');

    $('#subnav').slideDown();

    $('.nav-panel').hide();

    var sectionToShow = $(this).data('related-panel');

    $('#' + sectionToShow).show();

// $('#main-nav a').on('click', function () {

//   if ($(this).hasClass('active')) {

//     $(this).removeClass('active');

//     $('#subnav').slideUp();

//   } else {

    $('#main-nav a').removeClass('active');

    $(this).addClass('active');

    $('#subnav').slideDown();

    $('.nav-panel').hide();

    var sectionToShow = $(this).data('related-panel');

    $('#' + sectionToShow).show();
  }


});
