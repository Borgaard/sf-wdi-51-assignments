// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!
var map;

let iconmarker = {url: 'images/earthquake.png'};

function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.78, lng: -122.44},
          zoom: 2
        });
      var marker = new google.maps.Marker({
        position: {lat: 37.78, lng: -122.44},
        map: map,
        icon: iconmarker
      });
      };
initMap();

  $.ajax({
    method: 'GET',
    url: weekly_quakes_endpoint,

      success:function(data){
        console.log(data);
          for (let i=0; i < data.features.length; i++) {
              let geo = data.features[i].properties.title;
              let info = '<p>' + geo + output + '</p>' ;
              $('#info').append(info);

              let time = Date.now() - data.features[i].properties.time;
                  var h = new Date(time).getHours();
                  var m = new Date(time).getMinutes();
                  h = (h<10) ? '0' + h : h;
                  m = (m<10) ? '0' + m : m;
                  var output = h + ' hours and ' + m + ' minutes ago';

              let coor = {
                  lat: data.features[i].geometry.coordinates[1],
                  lng: data.features[i].geometry.coordinates[0]
                };
                // console.log(coor);
              let marker = new google.maps.Marker({
                  position: coor,
                  map: map,
                  icon: iconmarker
                });
              }
            }
  });
});
