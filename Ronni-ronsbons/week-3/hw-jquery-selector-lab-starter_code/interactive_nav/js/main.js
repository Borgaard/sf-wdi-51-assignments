// When the user clicks on an anchor in the main nav,
$('#main-nav a').on('click', function (event) {
  let currentPanel = $(this).attr('data-related-panel');
  $(this).addClass('active');
  $('#' + currentPanel).slideDown();

  // If the subnav is hidden,

    // slide down the subnav,

    // and fade in the related panel for that category.

  // If the subnav is already showing AND the user clicks on a different anchor,
  // if ($(this).hasClass('active')) {
  //   $(this).toggleClass();
  //   $('#' + currentPanel).slideUp();
  // }
    // hide the current panel,

    // and fade in the related panel for that category.

  // If the subnav is showing AND the user clicks on the same anchor,

    // slide up the subnav.

});
