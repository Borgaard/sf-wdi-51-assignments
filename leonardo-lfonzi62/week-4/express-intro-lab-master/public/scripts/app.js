console.log("Sanity Check: JS is working!");

const handleSuccess = (json) => {

console.log(json);

var albums = json;

console.log(albums[0].title);
for( var i = 0; i < albums.length; i++) {
let artist = albums[i].artist;
let title = albums[i].title;
$(`.Albums`).append(`<div class="text-center">  <p> ${artist} - ${title} </p> <div>`);
};
}


const handleResponse = (json) => {
let tacoData = json;
for (var i =0 ;  i < tacoData.length; i++) {
let name = tacoData[i].name;
$('.tacos').append(`<div class="text-center"> <p> ${name} </p> </div>`)
};
}

$(document).ready(() => {

const handleError = (xhr, status, errorThrown) => console.log('uh oh');

// ajax is making a  GET request aka receiving data to the /api/albums route 
// once the request is called , the handleSucess runs the code inside of it. 
// server.js file has info that contains which data is at the api/albums route

$.ajax({
method: 'GET',
url: 'http://localhost:3000/api/albums',
success: handleSuccess,
error: handleError
});

});

$.ajax({
method: 'GET',
url: '/api/taquerias',
success: handleResponse
});

