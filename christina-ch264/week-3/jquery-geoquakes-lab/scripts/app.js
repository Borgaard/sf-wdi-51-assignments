/*
[x] List information about each quake.
[x] Display a Google Map with a pin at the epicenter of each quake.
*/

// define globals
var weekly_quakes_endpoint = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
    var map;
    function initMap() {
        // required for every google map
        map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.78, lng: -122.44},
        zoom: 8
        });
    };
  // call map function
  initMap();

  // api call to list titles of earthquakes and log them to google maps
  $.ajax({

    method: 'GET',
    url: weekly_quakes_endpoint,

    success: function(data) {
      console.log(data);

      // loop through data to display titles
      for (var i = 0; i < data.features.length; i++) {
        let title = data.features[i].properties.title;
        let titleList = `<div id="info">"${title}"</div>`;

        $('#info').append(titleList);
        // declare location of image and resize it
        var icon = {
            url: "images/earthquake.png", // url
            scaledSize: new google.maps.Size(15, 15), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };

      // add markers of location to google map
      var marker = new google.maps.Marker({
          position: {
            lat: data.features[i].geometry.coordinates[1],
            lng: data.features[i].geometry.coordinates[0]
          },
          map: map,
          icon: icon
      });
      console.log(data.features[i].geometry.coordinates[1]);
      console.log(data.features[i].geometry.coordinates[0]);
      }
    },
    error: function() {
      console.log('error');
    }
  });
});



