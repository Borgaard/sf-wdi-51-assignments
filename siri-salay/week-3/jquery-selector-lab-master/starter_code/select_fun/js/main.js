/**
*
* Part 1:
*
*/

// 1. Go to style.css and find the fun class (at the end of the document).
      // Style that class with your choice of background-color and text color.

// 2. Using jQuery, add the fun class to the elements with the class .box

$(".box").addClass(".fun")


// 3. When #box2 is clicked on
	// a) Remove the crazy class from all the items with a class of .box
	// b) Add the crazy class to the h1
	// c) Slide toggle #box3


	$("#box2").on('click', function(){
	$(".box").removeClass('crazy');
	$("h1").addClass('crazy');
	$('#box3').slideToggle(350);
	});



// 4. When any .box is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
$(".box").on('click', function(){
	$("header h1").text("jQuery Ninja");
	});

// 5. When #box1 is clicked on
	// a) Run the following line of code: $(".moto").attr("src", "images/moto.jpg");
	// b) Write a JavaScript comment with a description
	// of what happened (to get practice writing a comment)

$("#box1").on('click', function(){
	$(".moto").attr("src", "images/moto.jpg");
	});


/**
*
* Part 2:
*
*/

// 6. Hide the item with the id #menu

$("#menu").hide();

// 7. When the element with the id #trigger is clicked,
	// a) slide toggle #menu

$("#trigger").on('click', function(){
	$("#menu").slideToggle();
})


/**
*
* Part 3:
*
*/

// 8. Hide the item with the id #answer2

$("#answer2").hide();

// 9. Show the item with the id #answer1

$("#answer1").show();



// 10. When #question2 is clicked:
$("#question2").on('click', function(){
	// a) Slide down #answer2
$("#answer2").slideDown();
	// b) Slide up #answer1
$("#answer1").slideUp();
	// c) Remove the active class from all list items
$("li").removeClass("active");
	// d) Add the active class to #question2
$("#question2").addClass("active");
})

// 11. When #question1 is clicked:
$("#question1").on('click', function(){
$("#answer1").slideDown();
$("#answer2").slideUp();
	// c) Remove the active class from all list items
$("li").removeClass("active");
	// d) Add the active class to #question1
$("#question1").addClass("active");
})

/**
*
* Part 4:
*
*/

// For this last one, the steps aren't broken down for you line-by-line. See if you can figure these out!


// 1. When the button "Show Only Yellow" is clicked, only show circles with the CLASS .yellow should show
$("#filterYellow").on('click', function(){
	$(".yellow").show();
	$(".blue").hide();
});

// 2. When the button "Show Only Blue" is clicked, only show circles with the CLASS .blue should show
$("#filterBlue").on('click', function(){
	$(".blue").show();
	$(".yellow").hide();
});


