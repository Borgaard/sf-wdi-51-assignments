// When the user clicks on an anchor in the main nav:
// If the subnav is hidden, slide down the subnav and fade in the related panel showing options for that category.
// If the subnav is already showing and the user clicks on a different anchor than they had previously clicked on, hide the current panel and fade in the related panel with subnav options for that category.
// If the subnav is showing and the user clicks on the category that is already showing, slide up the subnav.

// anchor tag is clicked, trigger a function
//   if subnav is hidden
//     slide down the subnav
//     fade in the related nav-panel
//   if the subnav is showing and the name of the anchor tag !=== the name of the clicked anchor tag
//     hide the current panel
//     fade in the related nav-panel
//   if the subnav is showing and the anchor tag === this
//     slide up the subnav

$('#main-nav a').on('click', function () {
  var thisPanel = $(this).attr('data-related-panel')
  debugger;
  if (!$(this).hasClass('active')) {
    $('#main-nav a').removeClass('active');
    $(this).addClass('active');
    $('#subnav').slideDown();
    $('.nav-panel').hide();
    $('#'+thisPanel).fadeIn();
  } else {
    $(this).removeClass('active')
    $('#subnav').slideUp();
  }
});


