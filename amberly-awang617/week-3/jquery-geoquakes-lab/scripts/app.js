// Add each title to the page: Loop over your JSON response object, and each title to the page using jQuery. Aim to put each title inside the <div id="info"> section of the page.

// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

// var maps_endpoint = 'https://maps.googleapis.com/maps/api/js?key='
// var maps_API = 'AIzaSyCeok2MwMTki6_hUsgNu562SouxLH3zOVg'
var date = new Date();
var unixDate = date.getTime() / 1000;

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!
  $.ajax({
    method: 'GET',
    url: weekly_quakes_endpoint,
    success: onSuccess
  })
  function onSuccess (response) {
    console.log(response);
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 2,
          center: new google.maps.LatLng(2.8,-187.3)});

    for (var i=0; i < response.features.length; i++) {
      // retrieve the title from the response
      var title = response.features[i].properties.title;

      //retrieve the time from the response and convert the unix time in milliseconds to seconds to hours
      var earthquakeTime = response.features[i].properties.time / 1000;
      var timeDifference = unixDate - earthquakeTime;
      var min = timeDifference /60;
      var hour = Math.round((min / 60));
      console.log(hour);

      $('#info').append(`<p>${title} ${hour} hours ago </p>`);

      var coordinates = {lat: response.features[i].geometry.coordinates[1], lng: response.features[i].geometry.coordinates[0]};
      var marker = new google.maps.Marker({position: coordinates, map: map});
      $('#map').append(map);

    }
  }
});
