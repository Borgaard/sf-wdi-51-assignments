$(document).on("ready", function(){

var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";
var key = "&api_key=bbS2K8P6h9A5B8uFfYZUPH1Y0jLd66Zp";

$("form").on("submit", function(e){
  e.preventDefault();

  let gifName = $("form-control.gif-input").val();

  $.ajax({
    method: "GET",
    url: giphyUrl + gifName + key,
    data: $("form").serialize(25),

    success: function (response){
      console.log(response);
      for(let i = 0; i < gifName.data.length; i++){
        createImg(gifName.data[i].images.original.url);
      }
    error: function(error){
      alert("Sorry, there was a problem!");
      console.log(error);
      }
    }

    })

  });
























// $(document).on("ready", function(e){
// //   e.preventDefault();
// // var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";

// // var key = "&api_key=bbS2K8P6h9A5B8uFfYZUPH1Y0jLd66Zp";

// // $("form").on("submit", function(e){
// //   e.preventDefault();

// //   });
// $("form").on("submit", function(e){
//   alert("this works");
// })

// });



// $(document).ready(function() {
// var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";

// let key = "&api_key=bbS2K8P6h9A5B8uFfYZUPH1Y0jLd66Zp";

// $('form').on('submit', function(e) {
//   e.preventDefault();

//  let giphyName = $('.form-control.gif-input').val();
//  let gifGallary = $(".gif-gallery");


// $.ajax({
//     method: "GET",
//     url: giphyUrl + giphyName + key,
//     success: function(response) {

//       console.log(response.data);
//       for(let i = 0;i < response.data.length; i++) {
//         var urlObject = response.data[i];

//       }
//     },
// error: function (error) {
//   console.log(error);

// },

// });

// });

// $(document).on( 'click', '.btn', function(e) {
//   e.preventDefault();
// var giphyUrl = "http://api.giphy.com/v1/gifs/search?q="
// let key = "bbS2K8P6h9A5B8uFfYZUPH1Y0jLd66Zp"









// var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=cats";

// let key = "&api_key=bbS2K8P6h9A5B8uFfYZUPH1Y0jLd66Zp";

// $('document').on('click', '.btn', function(e) => {
//   console.log('clicked')
//   e.preventDefault();
// var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=cats";

// let key = "&api_key=bbS2K8P6h9A5B8uFfYZUPH1Y0jLd66Zp";

// //let giphyName = $('.form-control').val();



// $.ajax({
//     method: "GET",
//     url: giphyUrl  + key,
//     success: function(response) {
//       console.log(response);
      //test ajax
      // for(let i = 0;i < response.data.length; i++) {
      //   var urlObject =
    //   }

    //   }
    // });

