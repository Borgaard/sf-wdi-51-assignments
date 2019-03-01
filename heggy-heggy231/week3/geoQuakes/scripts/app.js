// define globals
/*

$(document).on("ready", function(){
  // gets gifs on page load
  getAndRenderGifs();

  $("form").on("submit", function(e) {
    e.preventDefault();

    getAndRenderGifs();
  });

  $(".load-moar").on("click", loadMoar);
});
eventually need to use this
// function getAndRenderGoogleMap()
// function getAndRenderUSDA()

function getAndRenderGifs() {
  $.ajax({
    method: "GET",
    url: giphy_api,
    data: $("form").serialize(),
    success: onSuccess,
    error: onError
  });
}
*/
/*
 * [ ] read doc
 * [ X] make the map api key
    * key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
    * 
  * [X] create initMap() call back function
  * [ ] google url appi template research
  * [ ] $(#map).append() <= init function
 * 
 * Use AJAX to grab data from the USGS earthquakes API
  * Use a template literal to display data from an AJAX call on your HTML page
  * Use the Google Maps API to embed a map
  * /*
 * google map api https://developers.google.com/maps/documentation/javascript/tutorial
 * 
 */

var quakesURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  var map;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      // center your map on SF
      center: {lat: 37.78, lng: -122.44},
      zoom: 1
    });


  }
  initMap();


  /*template google map url: to make the url:  https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap
  */
 

  // ADD initMap callback
  // initMap() call back function
  // map is showing here!!!
  /*
  var map;

  function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
  */

// earth quake
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
      // get access to my response
      debugger;
      // var dataArr = response.features;
      /*
      var dataArr = data.features;
      for (var place in dataArr ){
        $("#info").append(`<p> ${place.properties.title} </p>`);
      }
      */
     /**
      * Longitude 0: -31.1176
      * Latitude 1: 2.7336
      * 
      */

      /**
       * what we played on console
       * response.features.forEach(function(ele){
            console.log(ele.properties.title);
          })
       */
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
