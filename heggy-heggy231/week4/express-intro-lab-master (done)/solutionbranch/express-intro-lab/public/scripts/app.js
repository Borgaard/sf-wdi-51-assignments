console.log("Sanity Check: JS is working!");

$(document).ready(() => {


  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: handleSuccess,
    error: handleError
  });


});


const handleSuccess = json => {
  // takes an array of albums and renders them as an unordered list
  const albums = json;
  let outputHtml = `<ul>`;
  albums.forEach (album => {
    outputHtml = `${outputHtml}<li>${album.artist} -- ${album.title}</li>`;
  });
  outputHtml += '</ul>';
  $('#albumTarget').html(outputHtml);
}

const handleError = (XHR, status, errorThrown) => {
  console.log(`uh oh! Error: ${errorThrown}`);
  $('#albumTarget').text('Failed to load albums, is the server working?');
}
