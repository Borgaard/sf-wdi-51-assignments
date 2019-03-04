// adding ajax for the frontEnd
console.log("Sanity Check: JS is working!");

$(document).ready(() => {
  // put your ajax call inside the handler for the document ready event: $(document).ready(function() {})
  // code in here
  $.ajax({
    // since api/albums is a get route I ask method tobe get
    method: 'GET',
    // url: 'http://localhost:3000/api/albums',
    url: '/api/albums',
    success: handleSuccess,
    error: handleAlbumsError
  });

  $.ajax({
    method: 'GET',
    // relative to localhost:3000
    url: '/api/taquerias',
    success: handleResponse,
    error: handleFoodError
  });
}); // end of doc.ready function for 

// remember to put function outside of document.ready()
// /api/taquerias res.json >> passing json obj
const handleResponse = json => {
  console.log(json);
  // catch the json obj passed in to play with the res.json data
  // debugger;
  // food is array with 3 obj
  var foodList = json;
  // debugger;
  // foodList[0] => {name: "La Taqueria"}
  /*
  for(var i = 0; i < foodList.length; i++){
    console.log('food name: ', foodList[i].name);
  }
  */
  /*
  output => 
  food name:  La Taqueria
  food name:  El Farolito
  food name:  Taqueria Cancun
  */

  var outputTacoHtml = `<ul>`;
  for(var i = 0; i < foodList.length; i++){
  // <ul> <li> Blood Orange -- Cupid Deluxe </li>
    outputTacoHtml = `${outputTacoHtml} <li> food name: ${foodList[i].name} </li>`;
  }
  // add the ending ul to close the list item
  outputTacoHtml += '</ul>';
  console.log(outputTacoHtml);

  /*
  => <ul> 
      <li> food name: La Taqueria </li> 
      <li> food name: El Farolito </li> 
      <li> food name: Taqueria Cancun </li>
    </ul>
  */
  // now append that to the root directory http://localhost:3000/
  $('#foodTarget').html(outputTacoHtml);
};

// Consider moving the success handling function definition outside the ajax call, since it's about to get more complicated!
// since from api/albums route I am asking for .json therfore I am passing json here
//  app.get('/api/albums', (req, res) => {
//   res.json(albums);
// });
const handleSuccess = json =>  {
  // debugger;
  console.log(json);
  // inside of console grab json obj when sucess happens
  var albums = json;
  // debugger;
// albums => array with 3 obj, (3) [{…}, {…}, {…}]
// 0: {title: "Cupid Deluxe", artist: "Blood Orange"}
// 1: {title: "M3LL155X - EP", artist: "FKA twigs"}
// 2: {title: "Fake History", artist: "letlive."}
  var firstSong = `${ albums[0].artist } -- ${ albums[0].title }`;
  console.log("firstSong: ", firstSong); // => Blood Orange -- Cupid Deluxe
  // display Blood Orange -- Cupid Deluxe on page using jQuery

  // for(var i = 0; i < albums.length; i++) {
  //   console.log(`${albums[i].artist} --- ${albums[i].title}`);
  // }
  // VM9564:2 Blood Orange --- Cupid Deluxe
  // VM9564:2 FKA twigs --- M3LL155X - EP
  // VM9564:2 letlive. --- Fake History
  // $('#albumTarget').html(firstSong);
 /*
  let outputhtml = `<ul>`; 
  for(var i = 0; i < albums.length; i++) {
  //<ul> <li> Blood Orange -- Cupid Deluxe </li>
  console.log(outputhtml = `${outputhtml} 
                              <li> ${albums[i].artist} --- ${albums[i].title} </li>`);
  }
  */
  // <ul> 
	// 				<li> Blood Orange --- Cupid Deluxe </li> 
	// 				<li> FKA twigs --- M3LL155X - EP </li> 
	// 				<li> letlive. --- Fake History </li>

  // starting ul
  let outputhtml = `<ul>`; 
  for(var i = 0; i < albums.length; i++) {
                //<ul> <li> Blood Orange -- Cupid Deluxe </li>
    outputhtml = `${outputhtml}
                  <li> ${albums[i].artist} --- ${albums[i].title} </li>`;
  }
  // append closing ul
  outputhtml += '</ul>';
  console.log(outputhtml);
  /* => <ul> 
					<li> Blood Orange --- Cupid Deluxe </li> 

					<li> FKA twigs --- M3LL155X - EP </li> 

          <li> letlive. --- Fake History </li></ul>
  */ 
  // append it on <div id='albumTarget'></div>,  user.html since it has tags.
  $('#albumTarget').html(outputhtml);
} // end of handleSuccess function

// also move handleError function outside of ajax call
// const handleError = (xhr, status, errorThrown) => console.log('uh oh');

// or 

const handleError = (XHR, status, errorThrown) => {
  console.log(`uh oh! Error: ${errorThrown}`);
  // display error message in id albumTarget
  $('#albumTarget').text('Failed to load albums, is the server working?');
}

const handleAlbumsError = (XHR, status, errorThrown) => {
  console.log(`uh oh! Error: ${errorThrown}`);
  // display error message in id albumTarget
  $('#albumTarget').text('Failed to load albums, is the server working?');
}

const handleFoodError = (XHR, status, errorThrown) => {
  console.log(`uh oh! Error: ${errorThrown}`);
  // display error message in id albumTarget
  $('#foodTarget').text('Failed to load foodList, is the server working?');
}
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
