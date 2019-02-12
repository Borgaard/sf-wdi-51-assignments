// define global variables
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
 console.log("Let's start coding!");

 $(document).ready(function() {
 console.log('Let s keep coding!');

  var map;
  function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
       center: {lat: 37.78, lng: -122.44},
       zoom: 1
         });
       }

   initMap();

   $.ajax({
     method: 'GET',
     url: weekly_quakes_endpoint,

      success:function(data){

          data.features.forEach(function(quake) {
            //variable time1 to hold time in miliseconds
           var time1 = quake.properties.time;
           // convert time to hours
           var timeHours = parseInt((time1/(1000 * 60 * 60))%24);
           //append a <p> to the class info
           let eqTitle = `<p>${quake.properties.title} ${timeHours} hours ago </p> ` ;
          $('#info').append(eqTitle);
          // get the coordinates from the API
           var coords = quake.geometry.coordinates;
           //display our coordinates on the map
           var latLng = new google.maps.LatLng(coords[1],coords[0]);
           var marker = new google.maps.Marker({
           position: latLng,
           map: map

          })
      })
    }
 })

})
