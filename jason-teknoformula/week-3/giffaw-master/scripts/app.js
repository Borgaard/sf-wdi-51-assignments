$(document).ready(function(){
  //constant variables to be used in AJAX Call
  const apiSearchUrl = "http://api.giphy.com/v1/gifs/search?q=";
  const apiKey = "&api_key=j944CKWHBOqEo6JNjjPJKFDJirF42Zux&limit=25";


  $('form').on('submit', function(e){
    //prevent page from reloading
    e.preventDefault();

    //getting search term from user input
    let searchTerm = $('input[type="text"]').val();

    //ajax call
    $.ajax({
      method: 'GET',
      url: apiSearchUrl+searchTerm+apiKey,
      success: function(response) {
        console.log(response);
        for (let i=0; i<response.length; i++) {
          let gifUrl = response.data[i].images.original.urls;
          $('.gif-gallery').append(`<img src='${gifUrl}'>`);
        }
      }
    });
  })
});
