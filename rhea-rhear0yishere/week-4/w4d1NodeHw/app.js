console.log("Sanity Check: JS is working!");

$(document).ready(() => {

// const handleSuccess = json =>  $('.testing').text(json);


//why doesn't this work?
// const handleSuccess = json =>  $('.testing').text(json[0]);



//shows info but could be a lot better
const handleSuccess = json =>{
  const albums = json;
  let list =[]
  let list2 =[]
  for (i in albums){
     list.push(albums[i].title)
     list2.push(albums[i].artist)

  }
  $('.testing').text(list)
   $('.testing').append(list2)

}
const handleError = (xhr, status, errorThrown) => console.log('uh oh');



$.ajax({
   method: 'GET',
   url: 'http://localhost:3000/api/albums',
   success: handleSuccess,
   error: handleError

 });
});

