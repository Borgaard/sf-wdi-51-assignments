let giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";
let apiKey = 'mIyOSO9AfIEquW3Daf5YzSdJ5PmOvG6R';

$( document ).ready(function() {
  $('form').on('submit', function (e) {
    e.preventDefault();
    console.log("You clicked submit.");
    console.log($('.gif-input').val());

    let input = $('.gif-input').val();

  $.ajax ({
    method: 'GET',
    url: giphyUrl + input + "&api_key=" + apiKey,
    success: gifSuccess,
    error: gifError
  })
});

function gifSuccess( response ) {
  console.log(response);
  console.log("Your response is running.")
};

function gifError ( error, error2, error3 ){
  console.log(error);
  console.log(error2);
  console.log(error3);
  alert(error2);
};
});
