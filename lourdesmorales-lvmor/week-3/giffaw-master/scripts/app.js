

var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";
var key = "&api_key=bbS2K8P6h9A5B8uFfYZUPH1Y0jLd66Zp";
var giphyLimit = "&limit=25";

$("form").on("submit", function(e){
  e.preventDefault();

  var input = $(".form-control.gif-input").val()

  $.ajax({
    method: "GET",
    url: giphyUrl + input +key + giphyLimit,

    success: function(response){
      console.log("success got data", response);
      var giphyData = response.data;

      for(i in giphyData){
        $(".gif-gallery").append(`<img src="${giphyData[i].images.original.url}"/>`);
      }
    }
    // error: function(error){
    //   alert("Sorry, there was a problem!");
    //   console.log("an error occurred", error);
    // }
  });
});


