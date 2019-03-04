// define globals
var weekly_quakes_endpoint = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
$(document).ready(function() {
  let info = $('#info');

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.78, lng: -122.44},
      zoom: 8
    });
  }
  initMap();

  $.ajax({
    method: 'GET',
    url: weekly_quakes_endpoint,
    success: function(response) {
      for (let i = 0; i < response.features.length; i++) {

        let mag = response.features[i].properties.mag;
        let place = response.features[i].properties.place.split("of").pop();
        let time = Date.now() - response.features[i].properties.time;
        let latitude = response.features[i].geometry.coordinates[1];
        let longitude = response.features[i].geometry.coordinates[0];
        let myLatLng = {lat: latitude, lng: longitude};

        //Convert time to hours and minutes ago
        var h = new Date(time).getHours();
        var m = new Date(time).getMinutes();
        h = (h<10) ? '0' + h : h;
        m = (m<10) ? '0' + m : m;
        var output = h + ' hours and ' + m + ' minutes ago';

        info.append(`<p>${place} / ${output}</p>`);

        //sets size of icon based on magnitude
        let height = 10;
        let width = 10;

        if (mag > 2.4) {
          height = 30;
          width = 30;
        }
        if (mag > 5.4) {
          height = 50;
          width = 50;
        }
        if (mag > 6) {
          height = 70;
          width = 70;
        }
        if (mag > 6.9) {
          height = 90;
          width = 90;
        }
        if (mag > 7.9) {
          height = 110;
          width = 110;
        }

        let marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: {url: 'images/earthquake.png', scaledSize: new google.maps.Size(height, width)}
        });
      }
    }
  });
});



//go into features array > grab each index's properties key value pair > inside of that "mag", "place", and 'time'
// for (let i = 0; i < response.features.length; i++) {
//   let mag = response.features[i].properties.mag;
//   let place = response.features[i].properties.place;
//   let time = response.features[i].properties.time;
// }
