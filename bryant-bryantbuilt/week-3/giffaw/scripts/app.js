console.log('App.js connected');
$(document).ready(function(){
  console.log('jQuery ready');
  let giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";

  let apiKey = "5Nm2vT5hbEHgwBReVHBEQJ4pA2GXPX7J";

  $('.form-inline').on('submit',function(e){
    e.preventDefault();
    console.log('Form works');
    let gifInput = $('.gif-input').val();

    $.ajax({
      method: "GET",
      url: `${giphyUrl}${gifInput}&api_key=${apiKey}`,
      // data: $('.gif-input').serialize(),
      success: function(response) {
        // console.log(response);
        let gifsArray = response.data;
        // console.log(gifsArray);
        for (let i = 0; i < gifsArray.length; i++) {
          $('.gif-gallery').append(`<div class="gif-container"><img src="${gifsArray[i].images.original.url}"></div>`);
          // console.log(gifsArray[i].images.original.url);
        };
      },
      error: function() {
      console.log('Error');
      },
    });

  });

});
