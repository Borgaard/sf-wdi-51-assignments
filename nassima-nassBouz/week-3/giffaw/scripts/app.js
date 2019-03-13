
let key="&api_key=XBZfNrc4l7lrTFc8eok4VpUMWjdHmeRG";
// myUrl = "http://api.giphy.com/v1/gifs/search?q=gif-input&api_key=key";
myUrl = "http://api.giphy.com/v1/gifs/search?q=";
console.log("i am outside");
$(document).ready(function() {
   console.log('Let s keep coding!');

   $("form").on('submit', function(event){
     event.preventDefault();
     //get user's input
     let gif_input = $(".form-control.gif-input").val();

    $.ajax({
      method: 'GET',
      url: myUrl+ gif_input+key,

      success:function(response) {
          let giphlist = response.data;
          console.log(giphlist)
          // debugger;
          for (let gif of giphlist) {
            let gifHtml = `<div class="gif-wrap"><img src="${gif.images.original.url}" alt="${gif.title}"></div>`;
            $('.gif-gallery').append(gifHtml);
          }
        },

        error: (error) => {
                console.log(error)
        }
      })
    })
  })




  // function onError(xhr, status, errorThrown) {
  //   alert("Sorry, there was a problem!");
  //   console.log("Error: " + errorThrown);
  //   console.log("Status: " + status);
  //   console.dir(xhr);
  // }
