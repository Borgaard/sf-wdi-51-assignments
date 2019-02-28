console.log("Sanity Check: JS is working!");

$(document).ready(() => {

const handleResponse = (json) => {
    console.log(json);
    json.forEach(x => $('.tacos').append(`<li>${x.name}</li>`));
  };

const handleAlbums = (json) => {
    console.log(json);
    json.forEach(x => $('.albums').append(`<li>${x.title}</li>`));
}

  // code in here
  $.ajax({
    method: 'GET',
    url: '/api/taquerias',
    success: handleResponse
  });

  $.ajax({
    method: 'GET',
    url: '/api/albums',
    success: handleAlbums
  })


});
