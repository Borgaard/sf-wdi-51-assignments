

  // var myUrl = "http://api.giphy.com/v1/gifs/search?q=";
  // var key = "&api_key=kEGNZiTWnJQmAKRt0yqHM8c0dznWWL1M";

$(document).on('click','.btn', function(e) {
  e.preventDefault();

  var myUrl = "http://api.giphy.com/v1/gifs/search?q=";
  var key = "&api_key=kEGNZiTWnJQmAKRt0yqHM8c0dznWWL1M";

  // debugger;
  let search = $('.form-control').val();
  $.ajax({
    method:"GET",
    url:myUrl + search + key,
    success: function(res){
      console.log(res.data);


      for (let i=0;i < res.data.length;i++){
        var gifs = res.data[i];

        var addGifs = $('.gif-gallery').append(`<img src="${gifs.images.downsized.url}">`);
      }
    }
  })

});
