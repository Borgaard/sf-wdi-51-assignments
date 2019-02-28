// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
// URL that the API works from
var map ;
// Icon object that has information about our image size

var iconBase = {
  url: './images/earthquake.png',
  scaledSize: new google.maps.Size(20, 20), // scaled size of the icon
  origin: new google.maps.Point(0,0), // origin
  anchor: new google.maps.Point(0, 0) // anchor
};

var currentDate = new Date();
var currentMonth = currentDate.getHours();
console.log(`this is the ${currentMonth} month of the year`);


function _getDates(year, month) {
  return new Date(year, month, 0).getDate(); // 0 + number of days
}
console.log(_getDates(2016, 07))




$(document).ready(function() {
  console.log("Let's get coding!");
// map constructor that creates a new map and insider the div that has an #map
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 16.2640, lng: 0.0280},
  zoom: 2
});
// marker for the center off the map
var marker = new google.maps.Marker({
          position:{lat: 37.78, lng: -122.44},
          map: map,
          title: 'Gao!',
          icon: iconBase
        });

$.ajax({
    method: "GET",
    url: weekly_quakes_endpoint,
    success: function(response) {
      // response grabs the object inside the URL
      console.log(response);
      var earthquake = response.features;
      var longitude = response.features[0].geometry.coordinates[0];
      var latitude = response.features[0].geometry.coordinates[1];
      console.log(earthquake);
      console.log(longitude);
      console.log(latitude);
      // looping through the data and appending the title of the earthquake to the page
      for( var i = 0; i < earthquake.length; i++) {
      $(`#info`).append(`<p> ${earthquake[i].properties.title} </p `);
      // looping through each of the earthquake coordinates lat and long, and saving it to a variable
      var latInt = response.features[i].geometry.coordinates[0];
      var lonInt = response.features[i].geometry.coordinates[1];

var marker = new google.maps.Marker({
  // using the variables created for long and lat to dynamically add marker locations to the map
          position:{lat: latInt, lng: lonInt},
          map: map,
          title: 'Hello World!',
          icon: iconBase
        });


   }


    }

})


});

