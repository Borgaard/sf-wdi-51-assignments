// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var google_maps = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"

$(document).ready(function() {
  console.log("Let's get coding!");

// Load map API
  let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.733795, lng: -122.446747},
    zoom: 12
  });

  
// Variable for the earthquake image
  let markerSymbol = './images/earthquake.png'


    // USGS JSON object pull
    $.ajax({
      method: "GET",
      url: weekly_quakes_endpoint,
      success: function( data ) {
        // interative loop to pull the title, time and calculate time since event and paste it to the website
        for (i = 0; i < data.metadata.count; i++) {
          // fancy math stuff. Pulls the time in MS of the event and the time the request is pulled, converts to seconds then hours
          let title = data.features[i].properties.title;
          let magnitude = data.features[i].properties.mag;
          var timeOfQuake = data.features[i].properties.time / 1000;
          var timeNow = new Date().getTime() / 1000;
          var combined = (timeNow) - (timeOfQuake)
          var toHours = combined / 3600
          var format = Math.floor(toHours)
          var days = Math.floor(format / 24)
          // checks how long in hours its been since the quake and posts to the end of the appended P tag how long ago within hours it was
          if (toHours <= 0.25) {
            $('#info').append(`<p>${title} - just now</p>`)
          } else if (toHours <= 1) {
            $('#info').append(`<p>${title} - less than 1 hour ago</p>`)
          } else if (toHours < 2) {
            $('#info').append(`<p>${title} - 1 hour ago</p>`)
          } else if (toHours < 24) {
            $('#info').append(`<p>${title} - ${format} hours ago</p>`)
          } else if (days < 2) {
            $('#info').append(`<p>${title} - 1 day ago</p>`)
          } else {
            $('#info').append(`<p>${title} - ${days} days ago</p>`)
          }
          
          // creates a function to add a pin to the current iterated object at the coordinates given in the JSON object
          function mapPin() {
            if (magnitude >= 5) {
          // create custom marker
            let quake = {
              url: "images/earthquake.png",
              scaledSize: new google.maps.Size(50,50),
            };
            var location = {lat: data.features[i].geometry.coordinates[1], lng: data.features[i].geometry.coordinates[0]};
            var marker = new google.maps.Marker({position: location, map: map, icon: quake});
            } else {
              // create custom marker
                let quake = {
                  url: "images/earthquake.png",
                  scaledSize: new google.maps.Size(32,32),
                };
                var location = {lat: data.features[i].geometry.coordinates[1], lng: data.features[i].geometry.coordinates[0]};
                var marker = new google.maps.Marker({position: location, map: map, icon: quake});
            }
          }
          // calls the mapPin function to place the pin at the position from the coordinates in the JSON object
          mapPin();

        }
      },
      // error log/object should the connection to USGS fail
      error: function( error ) {
        console.log(error)
      },

      // Blank space
    });
});

// end of code

// more space with no code










// here be dragons

