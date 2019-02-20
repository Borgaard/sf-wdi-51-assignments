const handleError = (xhr, status, errorThrown) => console.log(`uh oh! Error: ${errorThrown}`);

//looping through the json data to display in a string if successful
const handleResponse = json => {
  console.log(json);
  console.log("Tauerias are working!");
  json.forEach((taco) => {
    $('.taquerias').append(`<div><ul><li>${taco.name}</li></ul></div>`)
  });


};

$.ajax({
  method: 'GET',
  url: 'http://localhost:3000/api/taquerias',
  error: handleError,
  success: handleResponse
});




//looping through the json data to display in a string if successful
const handleSuccess = json => {
  console.log(json);
  console.log("Sanity Check: JS is working!");
  for (let i = 0; i < json.length; i++) {
    let title = json[i].title;
    let artist = json[i].artist;

    $('.albums').append(`<div><ul><li>${title}: <i>${artist}</i></li></ul></div>`)

  };
};

$.ajax({
  method: 'GET',
  url: 'http://localhost:3000/api/albums',
  error: handleError,
  success: handleSuccess
});