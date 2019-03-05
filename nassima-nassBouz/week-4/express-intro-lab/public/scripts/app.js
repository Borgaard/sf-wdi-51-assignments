console.log("Sanity Check: JS is working!");

$(document).ready(() => {

const handleSuccess = json =>  console.log(json){
  const albums;
  let outputhtml = `<ul>`;
  albums.forEach(album =>{
    outputhtml = `${outputhtml}<li>${album.artist}-- ${album.title}</li>`;
  });
  outputhtml +=`</ul>`;
  $('#albumTarget').html(outputhtml)
});

const handleError = (xhr, status, errorThrown) => console.log('uh oh');


$.ajax({
   method: 'GET',
   url: 'http://localhost:3010/api/albums',
   success: handleSuccess,
   error: handleError
 });

});
