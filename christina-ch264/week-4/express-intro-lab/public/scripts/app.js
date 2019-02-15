console.log("Sanity Check: JS is working!");

$(document).ready(() => {

  // code in here


  // append objects to page with jQuery
                                 // music.each(albums)? do we need to loop through to render object to page?
 // const handleSuccess = json =>  $('#music').html(`${json}`); //console.log(json);

      //solution code
      // const albums = json;
      // let outputHtml= `<ul>`;
      // albums.forEach (album => {
      //   outputHtml = `${outputHtml} <li> ${album.artist} -- ${album.title}` </li>;
      // });
      // outputHtml += `</ul>
      // $('#albumTarget').html(outputHtml);

  const handleSuccess = json =>   {  //console.log(json);
    let albums = json;
    // $.each(albums, function() {
    //   $('#music').append(`${albums.title} + ${albums.artist}.`);
    //   console.log(albums);
    // });
    for(i=0;i < albums.length; i++){
      $('#music').append(`${albums[i].title} + ${albums[i].artist}.`);
    };
  }
  const handleError = (xhr, status, errorThrown) => console.log('uh oh');

  $.ajax({
     method: 'GET',
     url: 'http://localhost:3000/api/albums',
     success: handleSuccess,
     error: handleError
   });
});
