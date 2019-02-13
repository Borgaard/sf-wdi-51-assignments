// define globals

$(document).ready(function() {
   var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
 
   $.ajax({
    url: weekly_quakes_endpoint,

    type: 'GET',

    success: function(response) {
      initMap(response.features);
      console.log(response.features, "(((((((((((");
      let div = $('<div></div>').html('Results:');
      $('h1').append(div);
      response.features.forEach(function (item){
        let time = new Date(item.properties.time).getHours();
        console.log(item.properties.title + " /" + time + ' hours ago');
        let p = $('<p></p>');
        p.html(`${item.properties.title} / ${time} hours ago.`);
        div.append(p);
      });
    },

    error: function (error) {
      console.log(error)
    }
  });
   var map;
    function initMap (quakes) {
      map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
      });
      quakes.forEach(function (quake) {
        let coordinates = quake.geometry.coordinates;
        console.log(coordinates);
        let marker = new google.maps.Marker({
            position: {lat:coordinates[0], lng:coordinates[1]},
            title: 'Hello World!'
          });
        marker.setMap(map);
      });
    }


});
