$(function(){
  let key = "ATf1CWHzKYMYJFRYFqGW1iXwph30oj17";
  $('form').on('submit', function(e) {
    e.preventDefault();
    $('.gif-gallery').empty();
    let inputVal = $('.gif-input').val();
    let formattedInput = inputVal.replace(/ /g, '+');
    let gifGallery = $('.gif-gallery');
    let giphyUrl = "http://api.giphy.com/v1/gifs/search?q=" + formattedInput + "&api_key=" + key;

    $.ajax({
      method: 'GET',
      url: giphyUrl,
      success: function(response) {
        response.data.map(child => {
          let img = $("<img />");
          let url = child.images.preview_gif.url
          img.attr("src", url)
          gifGallery.append(img);
        })
      },
      error: function(error) {
        console.log(error);
      }
    });
  });
});
