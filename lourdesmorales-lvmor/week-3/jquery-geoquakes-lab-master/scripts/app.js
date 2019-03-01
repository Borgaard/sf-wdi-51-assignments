//Heggy and Lourdes Work

var quakesURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  // console.log("Let's get coding!");
  var map;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      // center your map on SF
      center: {lat: 37.78, lng: -122.44},
      zoom: 1
    });


  }
  initMap();

  $.ajax({
    method: "GET",
    /*template google map url: to make the url:  https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap
    */
    url: quakesURL,
    // alert(url, googleMapUrl + googleMapKey + googleCallback);

    success: function(response){
      // some logic when response goes thru
      console.log("this is the response", response);
      alert("response:" + response);

      response.features.forEach(function(ele){
        // console.log(ele.properties.title);
        $("#info").append(`<p> ${ele.properties.title}, Time:
        ${Math.floor(ele.properties.time / (1000 * 60 * 60))}
        </p>`);

        var lat = ele.geometry.coordinates[0];
        var long = ele.geometry.coordinates[1];
        // loads new google map
        // var myNewMap = new google.maps.LatLng(lat, long);

        var marker = new google.maps.Marker({
          // position: {lat: lat , lng: long} is same as position: new google.maps.LatLng(lat, long)
          position: {lat: lat , lng: long},
          // position: new google.maps.LatLng(lat, long),
          map: map,
        });

      })


    },
    error: function(error){
      console.log(error);
      alert(error);
    },

  });// end of ajax
});
