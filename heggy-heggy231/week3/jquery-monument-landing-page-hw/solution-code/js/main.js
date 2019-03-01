$(document).ready(function () {

	$('.contact').on('submit', function (evt) {
		evt.preventDefault();

		// Code for validating the form
		$('form input, form textarea').each(function() {
			// Cache $(this) to optimize code a bit.
			var $currentField = $(this);
			var fieldType = $(this).attr('type');

			if ( $currentField.val() === '' ) {
				$currentField.addClass('error');
				$currentField.siblings('.error-message').fadeIn();
				// After adding error styles, move on to the next field and skip the next steps for that input/textarea
				return;
			}

			if (fieldType === 'email') {
				var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				var isValidEmailAddress = re.test($currentField.val());
				if (!isValidEmailAddress) {
			    $currentField.addClass('error');
					$currentField.siblings('.error-message').text('Please enter a valid email address.').fadeIn();
					// After adding error styles, move on to the next field and skip the next steps for that input/textarea
					return;
			  }

			} 

			// Since we used return above, the below code will only run if the field has input and, if it is an email field, has a valid email address.
			$currentField.removeClass('error');
			$currentField.siblings('.error-message').hide();

		});
	});

	// Smooth scroll this mother!
	$('nav a')
		.not('.blog')
		.on('click', function(e) {
	  // prevent the standard link operation on click
	  e.preventDefault();
	  // use the href of the link to identify what
	  // section to scroll to
	  var thisTarget = $(this).attr('href');
		// get that section's top offset
		var targetOffset = $(thisTarget).offset().top;
	  // use jQuery.animate() to animate the body's
	  // scrollTop to the targetOffest
	  $('html, body').animate({
	    scrollTop: targetOffset
	  }, 600);
	});

});