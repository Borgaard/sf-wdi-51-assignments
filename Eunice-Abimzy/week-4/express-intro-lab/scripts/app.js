const handleError = (xhr, status, errorThrown) => console.log(`uh oh! Error: ${errorThrown}`);

//looping through the json data to display in a string if successful
const handleSuccess = json => {
  console.log(json);
  for (let i = 0; i < json.length; i++) {
    let title = json[i].title;
    let artist = json[i].artist;

    $('.albums').append(`<div>${title}: ${artist}</div>`)

  };
};

$.ajax({
  method: 'GET',
  url: 'http://localhost:3000/api/albums',
  error: handleError,
  success: handleSuccess
});