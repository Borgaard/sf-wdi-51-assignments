// Use and implement popular jQuery methods: .hide(), .show(), .data(), .hasClass(), .addClass(), .removeClass(), .attr().
// Apply jQuery to manipulate, add, and remove DOM elements & element styles.
// Dynamically apply and remove CSS classes using jQuery.
// Add event listeners.

// When the user clicks on an anchor in the main nav:
// If the subnav is hidden, slide down the subnav and fade in the related panel showing options for that category.
// If the subnav is already showing and the user clicks on a different anchor than they had previously clicked on, hide the current panel and fade in the related panel with subnav options for that category.
// If the subnav is showing and the user clicks on the category that is already showing, slide up the subnav.

// You'll want to use the this keyword to find out which panel the user clicked on.
// Each anchor in the main nav has a data attribute that can be used to figure out the related panel that should be displayed (data-related-panel).
// Each related panel has an id attribute that matches the data-related-panel attribute on the corresponding nav anchor.

// [x] When the user clicks on an anchor in the main nav:


// If the subnav is already showing and the user clicks on a different anchor than they had previously clicked on, hide the current panel and fade in the related panel with subnav options for that category.
// If the subnav is showing and the user clicks on the category that is already showing, slide up the subnav.
$(document).ready(function(){
  let subnav = $('#subnav');
  console.log(subnav);
  // When the user clicks on an anchor in the main nav:
  $('#main-nav a').on('click', function(){
    // declare the data related sub nav
    let subSection = $(this).data('related-panel');

    // add the active class to clicked nav a
    $(this).addClass('active');

      // if nav a has been clicked, show subnav
      if ($(this).hasClass('active')) {
        // Check if any subnav elements have display: block style attr
          // what is the jquery method for getting children
          // what is the jquery method for checking style attributes
        // If yes, use .hide()
            $('#' + subSection).show();
          }
      // remove class active from nav a when other nav a is clicked
      $('#main-nav a').removeClass('active');
      // add class active to the currently clicked nav a
      $(this).addClass('active');
      // now you should hide the other subSections. STUCK
      // $('#' + subSection).hide();

    console.log("works")

    });
});

      // $('#women').css('display', "block");


