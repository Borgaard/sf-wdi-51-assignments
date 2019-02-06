  $.ajax({
    method: 'GET',
    url: "http://api.giphy.com/v1/gifs/search?q=trending&api_key=1PlYjlLlPsl4XmReGqzaTF9GhJyh4DBQ&limit=25",
    success: function(data){
      console.log(data);
      // debugger;
      //
      data.data.map(idx =>{
        let thegif = `<img src= "${idx.images.downsized.url}">`
        $('.gif-gallery').append(thegif);
      })
      //
    },
    error: function(){
      console.log(error);
    }
  })



$(document).on('click', '.btn', function(e) {
  e.preventDefault();









$('.gif-gallery').empty();


  var giphyURL ='http://api.giphy.com/v1/gifs/search?q='

  var key = '&api_key=1PlYjlLlPsl4XmReGqzaTF9GhJyh4DBQ'

  let animal = $('.gif-input').val();



  // debugger;
  $.ajax({
    method: 'GET',
    url: giphyURL + animal + key,
    success: function(data){
      console.log(data);
      // debugger;
      //
      data.data.map(idx =>{
        let thegif = `<img src= "${idx.images.downsized.url}">`
        $('.gif-gallery').append(thegif);
      })
      //
    },
    error: function(){
      console.log(error);
    }
  })

});


// Not sure why this doesnt work

// $(document).on("ready", function() {
//   var giphyURL ='http://api.giphy.com/v1/gifs/search?q='

//   var key = '&api_key=1PlYjlLlPsl4XmReGqzaTF9GhJyh4DBQ'





//   $('.btn').on('click', function (e) {
//     e.preventDefault();

//     let animal = $('.gif-input').val();
//     // debugger;
//     $.ajax({
//       method: 'GET',
//       url: giphyURL + animal + key,
//       success: function(data){
//         console.log(data);
//         // debugger;
//       },
//       error: function(){
//         console.log(error);
//       }
//     })
//   });

// });
