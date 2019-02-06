$('#main-nav a').on('click', e => {
  if ($(e.currentTarget).hasClass('active')) {
    $(e.currentTarget).removeClass('active');
    $('#subnav').slideUp();
  } else {
    $('#main-nav a').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('#subnav').slideDown();
    $('.nav-panel').hide();
    let sectionToShow = $(e.currentTarget).data('related-panel');
    $(`#${sectionToShow}`).show();
  }
});
