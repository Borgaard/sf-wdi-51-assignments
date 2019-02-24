console.log("Sanity Check: JS is working!");

$(document).ready(() => {
  const handleSuccess = json => {  
    console.log(json);
    let albums = json;
    // for(i = 0; i < albums.length; i++) {
    //   $('#music').append(` <li>${albums[i].title} + ${albums[i].artist}. </li>`);
    // };
    albums.forEach((albums) => {
      $('#music').append(`<li>${albums.title} + ${albums.artist}. </li>`)
    });
    //solution code
      // const albums = json;
      // let outputHtml= `<ul>`;
      // albums.forEach (album => {
      //   outputHtml = `${outputHtml} <li> ${album.artist} -- ${album.title}` </li>;
      // });
      // outputHtml += `</ul>
      // $('#albumTarget').html(outputHtml);
  }

  const handleError = (xhr, status, errorThrown) => console.log('uh oh');

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: handleSuccess,
    error: handleError
  });
});
