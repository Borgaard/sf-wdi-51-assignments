// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");

  var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.78, lng: -122.44},
          zoom: 1

        });
        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
      }
  initMap();

  $.ajax({
    method: "GET",
    url: weekly_quakes_endpoint,

    success:function(data){
      console.log(data.features[0]);


      // Using map array method.
      // data.features.map(function(index){
      //   let myTitle = `<p>${index.properties.title}</p>`;
      //   $('#info').append(myTitle);
    // })

      // Using a for Loop
      for (var i = 0;i < data.features.length; i++){
          var titles = data.features[i].properties.title;
          var timeMs = data.features[i].properties.time;
          // Need to add comparison to current time.
          var timeHr = parseInt((timeMs/(1000*60*60)));
          $('#info').append(`<p>${titles}/ *${Math.floor(timeHr)} hours ago*</p>`)

          var coords = data.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
            // icon: "../images/earthquake.png"
        });

      }

    }
  })

});
