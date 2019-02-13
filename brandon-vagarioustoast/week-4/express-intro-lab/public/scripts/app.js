console.log("Sanity Check: JS is working!");

$(document).ready(() => {
  // code in here

  const handleSuccess = json => {
    for (album of json) {
      console.log(album.title);
      let $newAlbum = `<p>${album.title}, ${album.artist}</p>`;
      $("h1").append($newAlbum);
    }
  };

  const handleError = (xhr, status, errorThrown) =>
    console.log(`uh oh. ${errorThrown}`);

  $.ajax({
    method: "GET",
    url: "http://localhost:3000/api/albums",
    success: handleSuccess,
    error: handleError
  });
});
