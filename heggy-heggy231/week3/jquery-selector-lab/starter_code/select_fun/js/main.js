/**
*
* Part 1:
*
*/

// 1. Go to style.css and add a class called fun. Style that class with your choice of background-color and text color. (No need to add jQuery for this part, just update style.css)

// 2. Using jQuery, add the fun class to the elements with the class .box
jQuery('.box').addClass('fun');

// 3. When #box2 is clicked on
	// a) Remove the crazy class from all the items with a class of .box
	// b) Add the crazy class to the h1
	// c) Slide toggle #box3

$('#box2').on('click', function () {
	$('h1').addClass('crazy');
	$('.box').removeClass('crazy')
	$('#box3').slideToggle();
});


// 4. When any .box is clicked
	// a) Change the text in the header's h1 tag to read "jQuery Ninja"
$('.box').on('click', function () {
	$('header').find('h1').html('jQuery Ninja');
})

// 5. When #box1 is clicked 
	// a) Have the following code execute: $(".moto").attr("src", "images/moto.jpg");
	// b) Write a JavaScript comment with a description of what happened. 
$('#box1').on('click', function () {
	$(".moto").attr("src", "images/moto.jpg");
	// The image source got added, making an image appear.
});



/**
*
* Part 2:
*
*/

// 1. Hide the item with the id #dropdownMenu
$('#dropdownMenu').hide();

// 2. When the element with the id #dropdownButton is clicked,
	// a) slide toggle #dropdownMenu (look up the slideToggle method if you need a refresher)
$('#dropdownButton').on('click', function () {
	$('#dropdownMenu').slideToggle();
});


/**
*
* Part 3:
*
*/

// 1. Hide the item with the id #answer2
$('#answer2').hide();


// 2. Show the item with the id #answer1
$('#answer1').show();


// 3. When #question2 is clicked:
	// a) Slide down #answer2
	// b) Slide up #answer1
	// c) Remove the active class from all list items
	// d) Add the active class to #question2
$('#question2').on('click', function () {
	$('#answer2').slideDown();
	$('#answer1').slideUp();
	$('li').removeClass('active');
	$('#question2').addClass('active');
});


// 4. When #question1 is clicked:
	// a) Slide down #answer1
	// b) Slide up #answer2
	// c) Remove the active class from all list items
	// d) Add the active class to #question1

$('#question1').on('click', function () {
	$('#answer1').slideDown();
	$('#answer2').slideUp();
	$('li').removeClass('active');
	$('#question1').addClass('active');
});




// 1. When the button "Show Only Yellow" is clicked, only show circles with the class .yellow should show
$('#filterYellow').on('click', function () {
	// Type code related to event here! :)
	$('.circle').hide();
	$('.yellow').fadeIn(300);
});

// 2. When the button "Show Only Blue" is clicked, only show circles with the class .blue should show
$('#filterBlue').on('click', function () {
	// Type code related to event here! :)
	$('.circle').hide();
	$('.blue').fadeIn(300);
});