$(document).ready(function() {

$('#main-nav a').on("click", function(e){
  e.stopPropagation();
  // data() retrives the data on the clicked a tag and stores it in a var
   var genre = $(this).data('related-panel');
   // find () finds all descendant elements of #subnav that are section elements and hides their content
   $('#subnav').find('section').hide();
   //  code selects elements that have an id equal to the clicked genre and shows their content
   $('#'+ genre).show();
})

});
// Bonus solution code
$(`#main-nav, #subnav`).on('click', function (e) {
// if statement checks if target element on click is not a, run the slide up function
// this is needed bc the a tags are child elements of the section and clicking them without
// this check would cause the a tags to envoke the slideUp method since it's wrapped in a section
   if(!$(e.target).is("a")) {
  $('#subnav').find('section').slideUp();

}
})
