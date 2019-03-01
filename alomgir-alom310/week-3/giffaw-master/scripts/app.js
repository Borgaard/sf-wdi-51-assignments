var key = 'YWJ8VV3duRyt2wHRhZg46c8hTvx2fOrb';
var gifUrl = 'http://api.giphy.com/v1/gifs/search?q=';
// `http://api.giphy.com/v1/gifs/search?q=homer&api_key=${key}`;

$('form').on('submit', function(e) {
  e.preventDefault();

let searchInput = $('#search').val();
  console.log(searchInput);

  $.ajax({
      method: 'GET',
      url: gifUrl + searchInput + '&api_key=' + key,
      success: function(response){
        // console.log(response);

      let gifList = response.data;

      // Loop through the response data
      for (gif in gifList) {
        // Set up some variables
        let gifData = gifList[gif];
        let gifTitle = gifData.title;
        let gifUrl = gifData.images.original.url;

        // Build an HTML fragment for each gif
        let gifHtml = `<div class="gif-wrapper">
                         <img src="${ gifUrl }" alt="${ gifTitle }">
                      </div>`;

        // Append the HTML fragment to a container element
        $('.gif-gallery').append(gifHtml);
    }
  }
 })
});



