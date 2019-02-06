$(() => {
// Initial Image Load
    $.ajax({
      method: 'GET',
      url: `http://api.giphy.com/v1/gifs/search?q=trending&api_key=${apiKey}&limit=25`,
      success: res => {
        console.log(res);
        console.log(res.data);
        res.data.map(index =>{
          let newGif = `<img src="${index.images.downsized.url}">`;
          $(".gif-gallery").append(newGif);
        })
      },
      error: err => console.log(err)
    })


// Search Button
  $('.btn').on('click', e =>{
    e.preventDefault();

        let $searchTerm = $('.gif-input').val();
        let $gifGallery = $(".gif-gallery");

        $gifGallery.empty();

        $.ajax({
              method: 'GET',
              url: `http://api.giphy.com/v1/gifs/search?q=${$searchTerm}&api_key=${apiKey}&limit=25`,
              success: res => {
                console.log(res.data);
                res.data.map(index =>{
                  let newGif = `<img src="${index.images.downsized.url}">`;
                  $gifGallery.append(newGif);
                })
              },
              error: err => console.log(err)
            })
    });

});






