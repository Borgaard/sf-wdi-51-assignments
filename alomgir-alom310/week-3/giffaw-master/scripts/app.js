var gifUrl = 'http://api.giphy.com/v1/gifs/search?q=';

var key = 'YWJ8VV3duRyt2wHRhZg46c8hTvx2fOrb';

$('form').on('submit', function(e) {
  e.preventDefault();


  let searchInput = $('#search').val()

  console.log(searchInput);

  $.ajax({
      method: 'GET',
      url: gifUrl + searchInput + '&api_key=' + key,
      success: function(data){
        console.log(data);

        let gifimages = data[0].images.url;

        $('.gif-gallery').append(`<img> + gifimages + </img>`)
        debugger;
      },
      error:function(error){
        console.log(error);
      }
    })
});
