console.log("Sanity Check: JS is working!");

const handleResponse = (json) => {
  for (let i = 0; i < json.length; i++) {
    let name = json[i].name;
    $("#taquerias").append(`<div class="text-center">${name}</div>`);
  }
};

const handleSuccess = json => {
   console.log(json)
   for (let i = 0; i < json.length; i++) {
     let title = json[i].title;
     let artist = json[i].artist;
     $("#data").append(`<div class="text-center"> ${title} - ${artist} </div>`);
   }
 };

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
