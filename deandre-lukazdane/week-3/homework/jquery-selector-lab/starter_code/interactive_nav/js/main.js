// .data() Store arbitrary data associated with the matched elements or return the value at the named data store for the first element in the set of matched elements.

// ex. $( "div" ).data( "test", { first: 16, last: "pizza!" } );

$('#main-nav a').on('click', function () {
//check for active, removes if true
	if ($(this).hasClass('active')) {
//.active slides sub nav in
		$(this).removeClass('active');
		$('#subnav').slideUp();

	} 
// check for active, add if false
	else {
		$('#main-nav a').removeClass('active');
		$(this).addClass('active');
//.active slides sub nav out
		$('#subnav').slideDown();
		$('.nav-panel').hide();

	let sectionToShow = $(this).data('related-panel');
		$('#' + sectionToShow).show();		
	}


});

//check for alternate solution still includes "this" 