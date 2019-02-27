$(document).ready(function() {


//Target Data Related Panel for a click
//Store this data related panel to a variable
//Target every subnav id and hide it according to section
//Id and corresponding genre shows
$('[data-related-panel]').on("click", function(){

	var genre = $(this).data('related-panel');

	$('#subnav').find('section').hide();

	$('#'+ genre).show();
})


$('#main-nav').mouseout(function(event){
    event.stopPropagation();
});

});