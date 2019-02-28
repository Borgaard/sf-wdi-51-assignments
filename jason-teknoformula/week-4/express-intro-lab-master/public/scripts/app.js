console.log("Sanity Check: JS is working!");

const handleSuccess = json =>  json.forEach(album => {
  $('body').append(`<p>${album.title} -  ${album.artist}</p>`)
});

const handleResponse = json => json.forEach(taqueria => {
$('body').append(`<p>${taqueria.name}</p>`)
});


$(document).ready(() => {


  const handleError = (xhr, status, errorThrown) => console.log('uh oh');


  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: handleSuccess,
    error: handleError
  });

  $.ajax({
  method: 'GET',
  url: '/api/taquerias',
  success: handleResponse
  });




});
