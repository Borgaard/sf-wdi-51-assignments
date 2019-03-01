console.log("Sanity Check: JS is working!");

$(document).ready(() => {

const handleResponse = (json) => {
  for (let i = 0; i < json.length; i++) {
    let name = json[i].name;
    $("#tacos").append(`<div class="text-center">${name}</div>`);
  }
};

const handleSuccess = json =>{
for (i = 0;i< json.length; i ++){
let title = json[i].title
let artist = json[i].artist

$('#stuff').append(`<div class= "music">${title}-${artist}</div>`);
}
}

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
    success: handleResponse,
    error: handleError
  });
});


