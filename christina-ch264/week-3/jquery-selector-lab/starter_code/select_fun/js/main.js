/**
*
* Part 1:
*
*/

// [x] 1. Go to style.css and find the fun class (at the end of the document).
      // Style that class with your choice of background-color and text color.

// [x] 2. Using jQuery, add the fun class to the elements with the class .box
$(document).ready(function() {

 $('.box').addClass('fun');


//[] 3. When #box2 is clicked on
	// [x] a) Remove the crazy class from all the items with a class of .box
	// [x] b) Add the crazy class to the h1
	// [x] c) Slide toggle #box3

$('#box2').on('click', function(){

  $('.box').removeClass('crazy');
  $('h1').addClass('crazy');
  $('#box3').slideToggle('slow');
});


// [x] 4. When any .box is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
$('.box').on('click', function() {
  // $('h1').text('jQuery Ninja');
  $("h1").html("jQuery Ninja")

});

// [x] 5. When #box1 is clicked on
	// [x] a) Run the following line of code: $(".moto").attr("src", "images/moto.jpg");
	// [x] b) Write a JavaScript comment with a description
	// [x] of what happened (to get practice writing a comment)
$('#box1').on('click', function() {
	// add the attribute src to the class moto in order to link to the source of the image so that it can be rendered on the page
	$(".moto").attr("src", "images/moto.jpg");
	$('.moto').after('<p>This is a description of the Vespa!</p>');
})


/**
*
* Part 2:
*
*/

// 6. Hide the item with the id #menu
// $('ul').toggle("#menu");
$('#menu').hide();

// 7. When the element with the id #trigger is clicked,
	// a) slide toggle #menu
$('#trigger').on('click',function() {
	$('#menu').slideToggle('slow');
})


/**
*
* Part 3:
*
*/

// 8. Hide the item with the id #answer2
$('#answer2').hide();

// 9. Show the item with the id #answer1
$('#answer1').show();


// [x] 10. When #question2 is clicked:
	// [x] a) Slide down #answer2
	// [x] b) Slide up #answer1
	// [x] c) Remove the active class from all list items
	// [x] d) Add the active class to #question2

$('#question2').on('click', function(){
	$('#answer2').slideDown();
	$('#answer1').slideUp();
	$('li').removeClass('active');
	$('#question2').addClass('active');
})

// [x] 11. When #question1 is clicked:
	// [x] a) Slide down #answer1
	// [x] b) Slide up #answer2
	// [x]c) Remove the active class from all list items
	// [x]d) Add the active class to #question1

$('#question1').on('click', function(){
	$('#answer1').slideDown();
	$('#answer2').slideUp();
	$('li').removeClass('active');
	$('#question1').addClass('active');
})
/**
*
* Part 4:
*
*/

// For this last one, the steps aren't broken down for you line-by-line. See if you can figure these out!


// 1. When the button "Show Only Yellow" is clicked, only show circles with the CLASS .yellow should show

$('#filterYellow').on('click', function() {
	$('.yellow').show();
	$('.blue').hide();
})
// 2. When the button "Show Only Blue" is clicked, only show circles with the CLASS .blue should show
$('#filterBlue').on('click', function() {
	$('.blue').show();
	$('.yellow').hide();
})

// .ready closing brackets
});

