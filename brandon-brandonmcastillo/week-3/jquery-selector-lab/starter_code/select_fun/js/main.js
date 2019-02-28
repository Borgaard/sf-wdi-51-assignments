/**
*
* Part 1:
*
*/
	$(document).ready(function() {
// 1. Go to style.css and find the fun class (at the end of the document).
      // Style that class with your choice of background-color and text color.

// 2. Using jQuery, add the fun class to the elements with the class .box

	$('.box').addClass('fun');

// 3. When #box2 is clicked on
	// a) Remove the crazy class from all the items with a class of .box
	// b) Add the crazy class to the h1
	// c) Slide toggle #box3
	$('#box2').on('click', function() {
	$('.crazy').removeClass('box');
	$('.crazy').append('h1');
	$('#box3').slideToggle("slow", function()
		{
		});
	});

// 4. When any .box is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
	$('.box').on('click', function() {
	$('h1').html("jQuery Ninja");
	})

// 5. When #box1 is clicked on
	// a) Run the following line of code: $(".moto").attr("src", "images/moto.jpg");
	// b) Write a JavaScript comment with a description
	// of what happened (to get practice writing a comment)

	$('#box1').on('click', function(){
	$(".moto").attr("src", "images/moto.jpg");
	// When box one was clicked, we grabbed the class of .moto and added the attribute src to the document 
	});

/**
*
* Part 2:
*
*/

// 6. Hide the item with the id #menu
	$('#menu').hide('slow/400/fast');

// 7. When the element with the id #trigger is clicked,
	// a) slide toggle #menu

	$('#trigger').on("click", function(){
		$('#menu').slideToggle(5000);
	});

/**
*
* Part 3:
*
*/

// 8. Hide the item with the id #answer2
	$('#answer2').hide('slow/400/fast');
// 9. Show the item with the id #answer1
	$('#answer1').show('slow/400/fast');
// 10. When #question2 is clicked:
	// a) Slide down #answer2
	// b) Slide up #answer1
	// c) Remove the active class from all list items
	// d) Add the active class to #question2
	$('#question2').on('click', function(){

	$('#answer2').slideDown();
	$('#answer1').slideUp();
	$('li').removeClass('active');
	$('#question2').addClass('active');

	});

// 11. When #question1 is clicked:
	// a) Slide down #answer1
	// b) Slide up #answer2
	// c) Remove the active class from all list items
	// d) Add the active class to #question1
	$('#question1').on('click', function(){

	$('#answer1').slideDown();
	$('#answer2').slideUp();
	$('li').removeClass('active');
	$('#question1').addClass('active');
	});
/**
*
* Part 4:
*
*/

// For this last one, the steps aren't broken down for you line-by-line. See if you can figure these out!


// 1. When the button "Show Only Yellow" is clicked, only show circles with the CLASS .yellow should show
$('#filterYellow').on("click", function(){
	
	$('.blue').hide(`circle yellow`);
	$('.yellow').show(`circle blue`);
	});
// 2. When the button "Show Only Blue" is clicked, only show circles with the CLASS .blue should show
$('#filterBlue').on("click", function(){

	$('.yellow').hide(`circle blue`);
	$('.blue').show(`circle yellow`);
	});
// 
});
