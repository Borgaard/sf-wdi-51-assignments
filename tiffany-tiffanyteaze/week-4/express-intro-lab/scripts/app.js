console.log("Sanity Check: JS is working!");

$(document).ready(() => {

  // code in here
  const handleSuccess = json => {
    const albums =json;

    let outputHtml = `<ul>`;
    albums forEach (album => {
      outputHtml = `${outputHtml}<li>${album.artist} -- ${album.title}</li>`;
    });
  }

});
