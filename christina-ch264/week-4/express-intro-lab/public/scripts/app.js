console.log("Sanity Check: JS is working!");

$(document).ready(() => {

  // code in here


  // append objects to page with jQuery
  const handleSuccess = json =>   console.log(json); // $('#music').html(`${json}`);

  const handleError = (xhr, status, errorThrown) => console.log('uh oh');

  $.ajax({
     method: 'GET',
     url: 'http://localhost:3000/api/albums',
     success: handleSuccess,
     error: handleError
   });




});
