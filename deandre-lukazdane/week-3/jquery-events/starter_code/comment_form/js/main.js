$(document).ready(function () {

	$('form').on('submit', function (event) {
		event.preventDefault();
		let comment = $('#comment').val();
		if (comment !== '') {
			let newComment = '<li>' + comment + ' <a href="" class="delete">Delete</a></li>'
			$('#commentList').append(newComment);
			$('#comment').val('');
		}
	});

	$('#commentList').on('click', '.delete', function (event) {
		event.preventDefault();
		$(this).parent().remove();
	});
});
