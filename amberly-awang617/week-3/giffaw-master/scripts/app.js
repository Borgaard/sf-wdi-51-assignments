// [x] make an Ajax call fire when your page loads.
// [x] build functions that generate HTML Strings and append() them to the page

// Setting up the api call variables
var gifUrl = 'http://api.giphy.com/v1/gifs/search?q=';

var key = 'e0WvxxQTfbDbQ2wiBJqywrFbZ2L8Ccek';

//run the function when the document is loaded
$(document).ready(function(){
  console.log('Document ready');
  $('form').on('submit', function(e) {
    e.preventDefault();
    var search = $('.gif-input').val();
    console.log(gifUrl + search + '&api_key=' + key + '&limit=1');
    console.log('hey there');
    $.ajax({
      method: 'GET',
      url: gifUrl + search + '&api_key=' + key + '&limit=1',
      success: onSuccess,
      error: onError
    });
  });

  // Print out the response, empty the gif gallery and add the new gif
  function onSuccess(response){
    console.log(response);
    $('.gif-gallery').empty();
    var gif = response.data[0].images.original.url;
    $('.gif-gallery').append(`<img src="${gif}">`);
  }

  function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
  }
});

