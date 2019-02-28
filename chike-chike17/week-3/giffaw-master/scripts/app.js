
// $(document).on("ready", function(){

  let CHIKE_API_KEY = "aoJM27u0MvPP2WlMwB8jkOGuDu2KrsKT";

  let url = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key= "+CHIKE_API_KEY+"+&limit=5";

  $.ajax({

    // What kind of request
    method: "GET",

    // The URL for the request
    url: url,

    // The data to send aka query parameters
    data: $("form").serialize(),

    // Code to run if the request succeeds;
    // the response is passed to the function
    success: onSuccess,

    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    error: onError
  });

  function onSuccess(json) {
    console.log(json);
    $("div").append("<h1>"+json.title+"</h1>");
  }

  function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
  }


// });



