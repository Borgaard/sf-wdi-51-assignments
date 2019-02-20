console.log("Sanity Check: JS is working!");

// for ajax put inside of document.ready()
$(document).ready(() => {

  // code in here

  const handleError = (xhr, status, errorThrown) => console.log('uh oh');

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: handleSuccess,
    error: handleError
  });

});

// moved success handling function definition outside the ajax call
const handleSuccess = function (json) {
  // debugger;
  console.log(json);
  $(".text-center").append(JSON.stringify(json));
  // $(".text-center").append(json); // this doesn't display
}  
