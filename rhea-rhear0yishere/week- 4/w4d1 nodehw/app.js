console.log("Sanity Check: JS is working!");

$(document).ready(() => {

// const handleSuccess = json =>  $('.testing').text(json);

const handleSuccess = json =>  $('.testing').text(json[0]);

const handleError = (xhr, status, errorThrown) => console.log('uh oh');



$.ajax({
   method: 'GET',
   url: 'http://localhost:3000/api/albums',
   success: handleSuccess,
   error: handleError

 });
});

