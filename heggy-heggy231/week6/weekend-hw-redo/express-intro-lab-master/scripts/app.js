// adding ajax for the frontEnd
console.log("Sanity Check: JS is working!");

$(document).ready(() => {
  // put your ajax call inside the handler for the document ready event: $(document).ready(function() {})
  // code in here

  $.ajax({
    // since api/albums is a get route I ask method tobe get
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: handleSuccess,
    error: handleError
  });

}); // end of doc.ready function

// remember to put function outside of document.ready()

// Consider moving the success handling function definition outside the ajax call, since it's about to get more complicated!
// since from api/albums route I am asking for .json therfore I am passing json here
//  app.get('/api/albums', (req, res) => {
//   res.json(albums);
// });
const handleSuccess = json =>  {
  debugger;
  console.log(json);

}

// also move handleError function outside of ajax call
const handleError = (xhr, status, errorThrown) => console.log('uh oh');

// == it will get more complicated!!! ===
// const handleSuccess = json => {
//   // takes an array of albums and renders them as an unordered list
//   const albums = json;
//   let outputHtml = `<ul>`;
//   albums.forEach (album => {
//     outputHtml = `${outputHtml}<li>${album.artist} -- ${album.title}</li>`;
//   });
//   outputHtml += '</ul>';
//   $('#albumTarget').html(outputHtml);
// }
