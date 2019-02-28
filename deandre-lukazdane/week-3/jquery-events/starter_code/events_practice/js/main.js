$( document ).ready(function () {


// 1. When the user's mouse enters' #trigger
	// a) Add a <li> to the beginning of #myList that contains the text "1"
	// b) Add a <li> to the end of #myList that contains the text "5"
$('#trigger').on('mouseenter', function() {
	$('myList').prepend('<li>1</li>');
	$('myList').append('<li>5</li>');
});

// 2. When the user releases a key on the input element
	// a) Add the class correct to the input
$('input').on('keyup', function() {
	$('input').addClass('correct');
});

// 3.	When the browser window is resized
	// a) fade in .circle-two
$('window').on('resize', function() {
	if($(window).width() < 500) {}
	$('circle-two').fadeIn(350);
}
});

// 4. When the user scrolls down the page
	// a) Add the .party class to the body
$('user').on('scroll', function() {
	$body.addClass('.party');
})

});