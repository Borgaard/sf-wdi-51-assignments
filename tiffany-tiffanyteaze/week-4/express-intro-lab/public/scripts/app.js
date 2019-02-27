console.log("Sanity Check: JS is working!");

$(document).ready(() => {

  // code in here
  const handleSuccess = json => {
    const albums =json;

    let outputHtml = `<ul>`;
    albums.forEach(album => {
      outputHtml = `${outputHtml}<li>${album.artist} -- ${album.title}</li>`;
    });
  }

  const checkSuccess = json =>  {
    const albums = json;
    let outputHtml = `<ul>`;
    albums.forEach (album => {
      outputHtml = `${outputHtml}<li>${album.artist} - ${album.title}</li>`
    })
    outputHtml += '<ul>';
    $('#albumTarget').html(outputHtml);
  };

  const handleError = (xhr, status, errorThrown) => console.log('uh oh');


  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: checkSuccess,
    error: handleError
  });

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/taquerias',
    success: handleResponse,
  });

  const handleResponse = json => {
    const tacoshops = json;
    let outputTaqueria = `<ul>`;
    tacoshops.forEach (taqueria => {
      outputTaqueria = `<li>${outputTaqueria}</li>`
    })
    outputTaqueria += '<ul>';
    $('#taqueriaTarget').html(outputTaqueria);
  }

});
