var giphyUrl = "http://api.giphy.com/v1/gifs/search?q="
var key = "55wBK7VLZy5IoUOK0dFBERd0vHRdaN8A";

$('form').on('submit', function(e) {
  e.preventDefault();
  // emptys out the div where the previous gifs on the page were located
 $(`.gif-gallery`).empty();
var searchTerm = $(`.form-control`).val();

  $.ajax({
    method: "GET",
    url: giphyUrl + searchTerm + "&api_key=" + key + "&offset=5",
    success: function( response ) {
      console.log(response);
      // accessing the object
    var jiffs = response.data;
    for (var i = 0; i < jiffs.length; i++) {
       $(`.gif-gallery`).append(`<img src= "${jiffs[i].images.original.url}"/>`);
    }
// adding height and width to gif images
$(`img`).height(150).width(150);
// emptying out user text
$(`.form-control`).val(" ");
    },
    error: function(error) {
      console.log(error)
    }
  })
});






