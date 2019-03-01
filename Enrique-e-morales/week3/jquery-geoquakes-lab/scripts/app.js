// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

var googleMap = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg";

$(document).ready(function() {
  console.log("Let's get coding!");

//retreive data
$.ajax({
  method: 'GET',
  url: weekly_quakes_endpoint,
  success: quakeSuccess,
  error: quakeError,
});

function quakeSuccess(response){
  console.log(response);

  //creating array for results

  let quakeArray = response.features;
  console.log(quakeArray);

  for(var i =0; i < quakeArray.length; i++){

// Calculate how long ago the quake occurred and convert Unix time to hours ago
      // Grabs each result's time in Unix seconds and convert to string
      let timeStamp = quakeArray[i].properties.time.toString();
      // Take off last 3 digits of the unix time
      let editedTime = timeStamp.substr(0, 10)
      // Create a new JS Date object and multiplied by 1000 so it's in milliseconds
      let normalTime = new Date(editedTime * 1000);
      // Create today's date
      let today = new Date();
      // Calculate difference in time
      let timeDiffUnix = today - normalTime;
      let hourDiff = Math.floor(timeDiffUnix / 1000 / 60 / 60);

      //trimming title
      let quakeTitle = quakeArray[i].properties.title;
      let shortTitle = quakeTitle.substring(quakeTitle.indexOf("of") + 2);

      console.log(shortTitle);
    //Targets the titles in the array
    let newQuakeTitle = `<p>${shortTitle}</p><p>${hourDiff} hours ago</p>`;

    //append it to p
    $('#info').append(newQuakeTitle);



//positions cordinates around map
    var coords = quakeArray[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(coords[1],coords[0]);
    var marker2 = new google.maps.Marker({
          position: latLng,
          map: map,
          icon:{
              url:'https://maps.google.com/mapfiles/kml/shapes/earthquake.png',
              scaledSize: new google.maps.Size(20, 20),

          }
        });
  };
};

function quakeError(error){
  console.log(error);
}



let sanFran = {lat: 37.78, lng: -122.44};
//displays map on page
let map = new google.maps.Map(document.getElementById('map'), {
  center: sanFran,
  zoom: 2
});


//creates marker of san fran
let marker = new google.maps.Marker({
  position: sanFran,
  map: map
});


});
