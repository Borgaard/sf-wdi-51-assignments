console.log("Sanity Check: JS is working!");

$(document).ready(() => {
  // define successful request function
  const handleSuccess = json => {
    console.log(json);
    let albums = json;
    for (var i = 0; i < albums.length; i++) {
      let title = albums[i].title;
      let artist = albums[i].artist;
      // adds album data to HTML page
      $('.container').append(`<p>${title} by ${artist}</p>`);
    };
  };
  // define error request function
  const handleError = (xhr, status, errorThrown) => {
    console.log('uh oh');
  };
  // request data from the server via AJAX
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: handleSuccess,
    error: handleError,
  });

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/taquerias',
    success: tacoSuccess,
    error: handleError,
  });

  // WHICH SYNTAX FOR FUNCTION IS BEST PRACTICE?
  // if i use let and arrow syntax here, i have to define function above AJAX request
  function tacoSuccess(response) {
    console.log(response);
    let taquerias = response;
    for (var i = 0; i < taquerias.length; i++) {
      let name = taquerias[i].name;
      // adds taqueria data to HTML page after album info
      $('.container').append(`<p>${name}</p>`);
    };
  };
});
