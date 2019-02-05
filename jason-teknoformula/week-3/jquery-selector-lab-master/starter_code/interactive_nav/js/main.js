$('#main-nav a').on('click', function () {
  if ($(this).hasClass('active')) {
    //hide the subnav menu
    $(this).removeClass('active');
    $('#subnav').slideUp();
  } else {
    //remove class to show new subnav
    $(this).removeClass('active');
    $('#subnav').slideUp();
    $('#main-nav a').removeClass('active');
    //hide the nav-panel
    $(this).addClass('active');
    $('#subnav').slideDown();
    $('.nav-panel').hide();
    //show the nav-panel menu
    let sectionToShow = $(this).data('related-panel');
    $(`${sectionToShow}`).show();
  }
});
