// define globals
var weekly_quakes_endpoint =
  'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!
  let displayInformation = $('#info');

  let map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 8
    });
  }
  initMap();

  $.ajax({
    method: 'GET',
    url:
      'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson',
    success: res => {
      console.log(res.features);

      // looping through each element of arr
      res.features.forEach(ele => {
        // Grabbing the mag, place and time
        let mag = ele.properties.mag;
        let place = ele.properties.place;
        let time = Date.now() - ele.properties.time;

        //  Grabbing the longitude and latitude
        let longitude = ele.geometry.coordinates[0];
        console.log(longitude);
        let latitude = ele.geometry.coordinates[1];
        console.log(latitude);

        let latLog = { lat: latitude, lng: longitude };
      

        // // convert time to hours and minutes
        let hour = new Date(time).getHours();
        let minutes = new Date(time).getMinutes();
        hour = hour < 10 ? '0' + hour : hour;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let output = ` ${hour} hours and ${minutes} minutes ago`;

      
        displayInformation.append(`<p>${mag} - ${place} - ${output} </p>`);

        // Set the icon base on the magnitute of earthquake
        let height = 10,
          width = 10;
        if (mag >= 3) {
          height = 30;
          width = 30;
        }
        if (mag >= 5) {
          height = 50;
          width = 50;
        }
        if (mag >= 6) {
          height = 60;
          width = 60;
        }
        if (mag >= 10) {
          height = 90;
          width = 90;
        }

        //  adding the Maker to map
        let marker = new google.maps.Marker({
          position: latLog,
          map: map,
          icon: {
            url: 'images/earthquake.png',
            scaledSize: new google.maps.Size(height, width)
          }
        });
      });
    },
    error: error => {
      console.log(error);
    }
  });
});
