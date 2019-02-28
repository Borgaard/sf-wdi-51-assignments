// try the bonus and implement using .serialize()
var giphy_api = "http://api.giphy.com/v1/gifs/search";

$(document).on("ready", function(){
  // gets gifs on page load
  getAndRenderGifs();

  $("form").on("submit", function(e) {
    e.preventDefault();

    $("form [name='offset']").val(0);
    getAndRenderGifs();
  });

  $(".load-moar").on("click", loadMoar);
});
function getAndRenderGoogleMap()
function getAndRenderUSDA()

function getAndRenderGifs() {
  $.ajax({
    method: "GET",
    url: giphy_api,
    data: $("form").serialize(),
    success: onSuccess,
    error: onError
  });
}

// json == data == response
function onSuccess(json) {
  if (json.pagination.offset === 0) {
    $(".gif-img").remove();
  }
  json.data.forEach(function(v,i){
    $(".gif-gallery").append($("<img class='img-responsive img-thumbnail gif-img' src="+v.images.fixed_height.url+">"));
  });
}

function onError(xhr, status, errorThrown) {
  alert("Sorry, there was a problem!");
  console.log("Error: " + errorThrown);
  console.log("Status: " + status);
  console.dir(xhr);
}

function loadMoar(){
  var newOffset = parseInt($("form [name='offset']").val()) + 25;
  $("form [name='offset']").val(newOffset);
  getAndRenderGifs();
}