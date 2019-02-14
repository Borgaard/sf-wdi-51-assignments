console.log("Sanity Check: JS is working!");

$(document).ready(() => {

  // code in here
   $.ajax({
   	type: 'GET',
   	url: 'http://localhost:3000/api/albums',
   	success: handleRespnse
   	},
   });

// $.ajax({
//   method: 'GET',
//   url: '/api/taquerias',
//   success: handleResponse
// });

const handleResponse = json => {
const albums = json;

json.forEach(album => {
  $("body").append(`<p>${album.title} - ${album.artist}</p>`)
});

// const handleResponse = json => json.forEach(taqueria => {
// $("body").append(`<p>${taqueria.name}</p>`)
// });