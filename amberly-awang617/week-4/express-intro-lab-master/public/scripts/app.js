console.log("Sanity Check: JS is working!");

$(document).ready(() => {
  // code in here
  const handleSuccess = function(json) {
    console.log(json);
    json.forEach(function(obj) {
      $('.container').append(`<p>${obj.title} by ${obj.artist}</p>`)
    });
  }

  const handleError = (xhr, status, errorThrown) => console.log('uh oh');

  const onSuccess = function(json) {
    console.log(json);
    json.forEach(function(obj) {
      $('.container').append(`<p>${obj.name}</p>`)
    });
  }

  const onError = (xhr, status, errorThrown) => console.log('uh oh');

  $.ajax({
     method: 'GET',
     url: 'http://localhost:3000/api/albums',
     success: handleSuccess,
     error: handleError
   });

  $.ajax({
     method: 'GET',
     url: 'http://localhost:3000/api/taquerias',
     success: onSuccess,
     error: onError
   });
});
