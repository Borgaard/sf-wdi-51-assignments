console.log("Sanity Check: JS is working!");

// for ajax put inside of document.ready()
$(document).ready(() => {

  // code in here
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    // only where there is a success this runs
    success: handleSuccess,
    error: handleError
  });

});

const handleError = (xhr, status, errorThrown) => {
  console.log(`uh oh!! Error: ${errorThrown}`);
  // also display on index.html
  $(".text-center").text("album didn't load correctly!  Server down")
}

// moved success handling function definition outside the ajax call
const handleSuccess = function (json) {
  // debugger;
  console.log(json);
  $(".text-center").append(JSON.stringify(json));
  // $(".text-center").append(json); // this doesn't display
}  

// solution code: todo: see if I can recreated this

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