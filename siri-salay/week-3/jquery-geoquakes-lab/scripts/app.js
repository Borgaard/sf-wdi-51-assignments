// define globals
var quakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
//var mapSource = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg";

$(document).ready(function() {
  console.log("Let's get coding!");
       var map;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.7749, lng: -122.4194 },
          zoom: 11
        });
      }




      $.ajax({
        method: 'GET',
        url: quakes,
        success:
         function (response){
            //console.log(response);
            var count = response.metadata.count;
            //console.log(response.metadata.count);

            for(var i = 0; i < count; i++){
            var place = response.features[i].properties.place;
            //console.log(place);
            var time = response.features[i].properties.time;
            var myDate = new Date( time *1000);



            $('#quakes').append(`<li> An earthquake happened: <br>
                                ${place} <br>
                                on ${myDate} </li><br>`);

            var coords = response.features[i].geometry.coordinates;
            console.log(coords)
          var image = {
          url: '/Users/default/desktop/wdi-51/sf-wdi-51-assignments/siri-salay/week-3/jquery-geoquakes-lab/images/earthquake.png',
          scaledSize: new google.maps.Size(20, 20) // scaled size
            };

        // variable is the latitude and longitude features on the google maps object
            var coordinates = new google.maps.LatLng(coords[1],coords[0]);
            var marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: image
          });

           };

        }, //end of success


        error:
        function (response){
        console.log("error");

        } //end of error


      }); // end of ajax
        initMap();

    });  //end of document.ready function

