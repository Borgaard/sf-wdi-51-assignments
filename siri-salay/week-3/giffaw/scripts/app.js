$(document).ready(function() {
    console.log("Everything is ready, let's dooooooooooo");


var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";
var key = '&api_key=B8mP31D9bIFjhfWvUap2TDtR5PImqLev&limit=15&offset=5';


$('form').on('submit', function(e) {
   e.preventDefault();
$('.gif-gallery').empty();
$('.gif-gallery').css('display', 'flex').css('flex-direction', 'column');
let searchText = $('.gif-input').val();
  console.log(searchText);
//get what gifName's variable is
//let gifName = $('#city').val();
var limit = 25;
  $.ajax({
      method: 'GET',
      url: giphyUrl + searchText + key,
      //+ limit.toString(),
      success: function (response){
      //  console.log(response.data[0].url);
        //^^^ this tests ajax. & it works! yay ^^^^

//search bar goes here
//grab the input text
  for(var i = 0; i < response.data.length; i++) {
// First, let's find the gallery to append to
//then create a new image and set the src to gifurl

 let gifSource = response.data[i].images.downsized.url;

$(".gif-gallery").append(`<img src="${gifSource}" alt="GIFFY">`);
$(".gif-gallery img").css('padding', '2em').css('width', "50%");
  console.log(response.data.length);
  //$(".gif-gallery").text(gifurl);
}
//end of for loop^^^^

$("button").on('click', function(){
limit += 25;

});


console.log(response.data.length);

},
//end of success function^^^^^
  error:
        function (response){
        console.log("error");
        }

  });
//end of ajax ^^^^

});
//end of submit form ^^^^




});
