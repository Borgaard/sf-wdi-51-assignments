$(document).ready(function() {


// 1) make your own api key abd giphyURL
  // http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"
  // http://api.giphy.com/v1/gifs/search?q=
  //  ryan+gosling
  //  &api_key=YOUR_API_KEY
  //  &limit=5"

  var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";
  var key = 'd287bff6d027b1372f2fa0ccb3445323';
/*


<input type="text" class="form-control gif-input" name="q" value="cats" placeholder="search gifs">

[x] make sure event is firing
[x] 
*/

$('form').on('submit', function (e){
  // event is firing? yes!
  // alert('Heggy here');
  // get user input
  e.preventDefault();
  var gifSearchUserInput = $('.form-control.gif-input').val();
  // http://api.giphy.com/v1/gifs/search?q=
  // ryan+gosling
  // &api_key=YOUR_API_KEY&limit=5"
  // 
  $.ajax({
    method: "GET",
    url: giphyUrl + gifSearchUserInput + key,

  success: function(response) {
    console.log("this is the response:" + response);
    // I need to created a temp var to put on the user screen
    debugger;
  },

  error: function(error) {
    console.log(error);
    alert(error);
  }

  })
})


})



