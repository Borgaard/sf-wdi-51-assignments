/**
*
* Part 1:
*
*/

// 2. Using jQuery, add the fun class to the elements with the class .box

$('.box').addClass('fun');

// 3. When #box2 is clicked on
	// a) Remove the crazy class from all the items with a class of .box
$('#box2').on('click', doThis)

function doThis(){
	$('h1').addClass('crazy');
	$('.box').removeClass('crazy')
	$('#box3').slideToggle();
};

	// b) Add the crazy class to the h1
	// c) Slide toggle #box3


// 4. When any .box is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
$('.box').on('click',changeText);
function changeText(){
		$('h1').html("jQuery Ninja!")
}

// 5. When #box1 is clicked on
$('#box1').on('click', runCode);
function runCode(){
	$(".moto").attr("src", "images/moto.jpg");
}
	// a) Run the following line of code: $(".moto").attr("src", "images/moto.jpg");
	// b) Write a JavaScript comment with a description
	// of what happened (to get practice writing a comment)



/**
*
* Part 2:
*
*/

// 6. Hide the item with the id #menu
$('#menu').hide();


// 7. When the element with the id #trigger is clicked,
$('#trigger').on('click', toggleMenu);
	// a) slide toggle #menu
	function toggleMenu(){
		$('#menu').slideToggle();
	}



/**
*
* Part 3:
*
*/

// 8. Hide the item with the id #answer2
$('#answer2').hide();

// 9. Show the item with the id #answer1
$('#answer1').show();


// 10. When #question2 is clicked:
$('#question2').on('click',num10);
	// a) Slide down #answer2
	function num10(){
		$('#answer1').slideUp();
		$('li').removeClass('active');
		$('#question2').addClass('active');
	}
	// b) Slide up #answer1
	// c) Remove the active class from all list items
	// d) Add the active class to #question2


// 11. When #question1 is clicked:
$('#question1').on('click',num11);
	function num11(){
		$('#answer1').slideDown();
		$('li').removeClass('active');
		$('#question1').addClass('active');
	}
	// a) Slide down #answer1
	// b) Slide up #answer2
	// c) Remove the active class from all list items
	// d) Add the active class to #question1




/**
*
* Part 4:
*
*/

// For this last one, the steps aren't broken down for you line-by-line. See if you can figure these out!


// 1. When the button "Show Only Yellow" is clicked, only show circles with the CLASS .yellow should show
$('#filterYellow').on('click',num1);
function num1() {
	$('.yellow').show();
	$('.blue').hide();
	// body...
}

// 2. When the button "Show Only Blue" is clicked, only show circles with the CLASS .blue should show
$('#filterBlue').on('click',num2);
function num2() {
	$('.yellow').hide();
	$('.blue').show();
}
