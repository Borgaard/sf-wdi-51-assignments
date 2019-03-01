$(document).ready(function() {

// 1) make your own api key abd giphyURL
  // http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=25"

  // http://api.giphy.com/v1/gifs/search?q=
  //  ryan+gosling
  //  &api_key=YOUR_API_KEY
  //  &limit=25"

  var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";
  var key = '&api_key=USeXS2PI5TP0Fvdy2AnCaSsT7HuzSTcL';
  // var limit = '&limit=5';
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
  /*
  //javascript, jQuery
  $.get("
  http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
  xhr.done(function(data) { console.log("success got data", data); });
  */
    // console.log(giphyUrl + gifSearchUserInput + key);

    $.ajax({
      method: "GET",
      url: giphyUrl + gifSearchUserInput + key + "&limit=25",
      success: function(response) {
        console.log("this is the response:" + response);
        // I need to created a temp var to put on the user screen
        debugger;
        // => what type is my url?  => string
        // typeof(response.data[0].images.downsized.url)

        // [X]check if I am getting 25 gif
        // response.data.length

        // go through each element look up img>downsized>url
        response.data.forEach(function(element){
          console.log(element.images.downsized.url);
          // => https://media1.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif
          
          var newGif = element.images.downsized.url;
            // '<img src="https://media1.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif">'

          $('.gif-gallery').append(`<img src=${newGif}></img>`);
          
        });
      },
      error: function(error) {
        console.log(error);
        alert(error);
      }
    })
  })
})



