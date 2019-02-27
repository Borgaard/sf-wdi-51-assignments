console.log("Sanity Check: JS is working!");

$(document).ready(() => {
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: handleSuccess,
    error: handleError
  }); //ajax function

}); //ready function
