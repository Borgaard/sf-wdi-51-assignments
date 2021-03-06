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
      $('.navbar-default').css({
        // when scrollTop vertical height is too small make the color to become invisible
        'background-color': 'rgba(59, 59, 59, 0)'
      });
    // if scrollTop bigger 
    } else {
      // make it visible apply css
      $('.navbar').css({
        'margin-top': '0px',
        'opacity': '1'
      });
      $('.navbar-default').css({
        // when scrollTop vertical height bigger; show menu bar by changing the opacity to be darker
        'background-color': 'rgba(59, 59, 59, 0.7)',
        'border-color': '#444' /* grey light */
      });
      $('.navbar-brand img').css({
        'height': '35px',
        'padding-top': '0px'
      });
      $('.navbar-nav > li > a').css({
        'padding-top': '15px'
      });
    }
  });
});

// add smooth scrolling using css trick doc https://css-tricks.com/snippets/jquery/smooth-scrolling/#article-header-id-1
$(document).ready(function() {
  'use strict';
  // Select all links with hashes
  $('.nav-item, #scroll-to-top').click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});

// activate menu item on user click event
$(document).ready(function() {
  'use strict';

  $('.navbar-nav li a').click(function() {
    'use strict';
    // add, remove css from navbar link's parent element (list element)
    
    $('.navbar-nav li a').parent().removeClass("active");
    $(this).parent().addClass("active");
  });

});
/*
.navbar-default .navbar-nav > .active > a, 
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  background-color: transparent;
  color: #129CF3
}
*/

// automatically highlight menu item when user scroll 
$(document).ready(function() {
  'use strict';
  $(window).scroll(function() {
    $("section").each(function(){
      'use strict';
      // target the id of each section ex: ABOUT, CONTACT, D/L
      var targetSection = $(this).attr("id");
      // outerHeight() http://api.jquery.com/outerheight/ include padding, border
      var myheight = $(this).outerHeight();
      // $(this).offset() retrieve the current position > then we get the top position then we take off 70
      var grttop= $(this).offset().top - 70;

      // scrollTop() returns the vertical scroll bar position
      if($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + myheight) {
        // .navbar-nav li a[href='#ABOUT']
        $(".navbar-nav li a[href='#" + targetSection + "']").parent().addClass("active");
      } else {
        $(".navbar-nav li a[href='#" + targetSection + "']").parent().removeClass("active");
      }
    });
  });
});

// add auto padding to header
$(document).ready(function() {
  'use strict';
  setInterval(function() {
    'use strict';
    // returns height of browser window
    var windowHeight = $(window).height();
    // get the height of the header container
    var containerHeight = $(".header-container").height()

    // calc the padding top
    var padTop = windowHeight - containerHeight;

    $(".header-container").css({
      // divide by 2 so it gets equal spacing 
      'padding-top': Math.round(padTop / 2) + 'px',
      'padding-bottom': Math.round(padTop / 2) + 'px'
    });
  // add time interval 10 is smallest milisec
  }, 10);
});

// Add bxSlider to photo slider section
// Initialize the slider note from https://bxslider.com/install/ doc
$(document).ready(function(){
  $('.bxslider').bxSlider({
    // https://bxslider.com/options/ use slide fixed width option
    slideWidth: 292.5,
    auto: true,
    minSlides: 1,
    maxSlides: 3,
    sliderMargin: 50 // margin btwn the slides > 50px
  });

});
