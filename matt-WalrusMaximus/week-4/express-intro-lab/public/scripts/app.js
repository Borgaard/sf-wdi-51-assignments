// console.log("Sanity Check: JS is working!");

$(document).ready(() => {

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: handleSuccess,
    error: handleError
  });


});


  const handleSuccess = json => {
    const albums = json;
    let htmlUpdate = "<ol>";
    albums.forEach (album => {
      htmlUpdate = `${htmlUpdate}<li>${album.artist} - ${album.title}</li>`;
    });
    htmlUpdate += "</ol>"
    $("#albumList").html(htmlUpdate);
 
  }
 

  const handleError = (xhr, status, errorThrown) => console.log('failure to receive');

  



