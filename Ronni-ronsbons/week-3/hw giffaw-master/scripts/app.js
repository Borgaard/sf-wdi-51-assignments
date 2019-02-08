$(document).ready(function() {
  // Upon page load, show Top 25 gifs
  let key = 'zbimCMBPhJzgKJkfTxlFf4tGndzeAzO2';

  // Trending API
  $.ajax({
    method: 'GET',
    url: `http://api.giphy.com/v1/gifs/trending&api_key=${key}`,
    success: gifSuccess,
    error: gifError,
  });
  // RETURNS ERROR 401 - 'ACCESS TO XMLHTTPREQUEST from origin "null" has been blocked by CORS policy: No "Access-Control-Allow-Origin" header is present on the requested resource.

  // Search gifs
  // Search API URL
  let giphyURL = 'http://api.giphy.com/v1/gifs/search?';

  // Add an event for the form submit
  $('.form-inline').on('submit', function(event) {
    // prevent default
    event.preventDefault();
    console.log('Stopped default submit');

    // BONUS clears .gif-gallery of all previous gifs
    $('.gif-gallery').empty();

    // Get value entered in search form
    let gifKeyword = $('form').serialize();
    console.log(gifKeyword);

    // Use AJAX method to request
    $.ajax({
      method: 'GET',
      url: giphyURL + gifKeyword,
      success: gifSuccess,
      error: gifError,
    });
  });

  function gifSuccess (response) {
    console.log(response);

    // Create array of all 25 search results
    let gifInfo = response.data;
    console.log(gifInfo);

    // for loop to go through array to get each result's images property
    for (var i = 0; i < gifInfo.length; i++) {
      // define variable as each image's URL
      let gifHTML = `<img src="${gifInfo[i].images.fixed_height.url}">`;
      console.log(gifHTML);

      // append each image's URL to '.gif-gallery'
      $('.gif-gallery').append(gifHTML);
    };

    // BONUS Add a Load More button
    $('.gif-gallery').append(`<p><button class="loadMore">Load More</button></p>`);
  };

  function gifError (error) {
    console.log(error);
  };

// WHERE IS CORRECT PLACEMENT OF THIS FUNCTION?
  // Create event function for Load More
  $('.loadMore').on('click', function (event) {
    event.preventDefault();

    $.ajax({
      method: 'GET',
      // Use same value entered in search form
      // Use AJAX method to request results, use offset query parameter?
      url: giphyURL + gifKeyword + '&offset=25',
      // Can we still use gifSuccess function as is?
      success: gifSuccess,
      error: gifError,
    });
  });
});
