// When the user clicks on an anchor in the main nav:
// If the subnav is hidden, slide down the subnav and fade in the related panel showing options for that category.
// If the subnav is already showing and the user clicks on a different anchor than they had previously clicked on, hide the current panel and fade in the related panel with subnav options for that category.
// If the subnav is showing and the user clicks on the category that is already showing, slide up the subnav.

$('#main-nav a').on('click', function() {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('#subnav').slideUp();
  } else {
    $('#main-nav a').removeClass('active');
    $(this).addClass('active');
    $('#subnav').slideDown();
    $('.nav-panel').hide();
    let sectionToShow = $(this).data('related-panel');
    $('#' + sectionToShow).show();
  }
});
