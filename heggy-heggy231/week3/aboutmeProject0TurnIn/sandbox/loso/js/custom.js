// show hide menu
$(document).ready(function(){
  'use strict';
  // access window obj, on scroll 
  $(window).scroll(function() {
    'use strict';
    // when scrollTop gets too small (< 80px), vertical position is at home area, user has not scroll down too much
    if($(window).scrollTop() < 80){
      // make menu bar invisible, access navbar class and hide using css
      $('.navbar').css({
        // neg margin will make the menu bar invisible
        'margin-top': '-100px',
        // make it 100% transparent- not visible
        'opacity': '0'
      });
    // if scrollTop bigger 
    } else {
      // make it visible apply css
      $('.navbar').css({
        'margin-top': '0px',
        'opacity': '1'
      });
    }
  });
});