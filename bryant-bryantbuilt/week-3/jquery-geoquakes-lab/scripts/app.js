// define globals
var weekly_quakes_endpoint = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";


$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!

  // Google maps link

  var map;
  map = new google.maps.Map(document.getElementById('map'),{
      center: {lat: 37.78, lng: -122.44},
      zoom: 8
      });

  // Earthquake code

  $.ajax({
    method: "GET",
    url: `${weekly_quakes_endpoint}`,

    success: function(response) {
      console.log(response);
      let earthquakes = response.features;
      for (let i = 0; i < earthquakes.length; i++) {
        $('#info').append(`<p>${earthquakes[i].properties.title}</p>`);
        var marker;
          marker = new google.maps.Marker({
          map: map,
          position: {
            lat: earthquakes[i].geometry.coordinates[1],
            lng: earthquakes[i].geometry.coordinates[0]
          },
          icon: {
            url: './images/earthquake.png',
            scaledSize: new google.maps.Size(30,30)
          }
        });
        $('#map').append(marker);
      };
    },

    error: function() {
    console.log('Error');
    }

  });

});
