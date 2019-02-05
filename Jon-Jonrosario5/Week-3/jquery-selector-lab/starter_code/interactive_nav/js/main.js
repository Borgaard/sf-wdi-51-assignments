// Took the solution code, still trying to figure out how this works.
// Will review with TA or instructor if I can't find it on MDN or Google.
// I understand parts of why it works, just not why the if-statements are used.

$('#main-nav a').on('click', function () {

  if ($(this).hasClass('active')) {

    $(this).removeClass('active');

    $('#subnav').slideUp();

  } else {

    $('#main-nav a').removeClass('active');

    $(this).addClass('active');

    $('#subnav').slideDown();

    $('.nav-panel').hide();

    var sectionToShow = $(this).data('related-panel');

    $('#' + sectionToShow).show();
  }


});
