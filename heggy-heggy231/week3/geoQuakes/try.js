// this is Nicolette's code with Siri!

var quakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
 
    var map;
     function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: -34.397, lng: 10.644},
         zoom: 8
       });
     }

    $.ajax({
        method: 'GET',
        url: quakes,
        
        success:
            function (response) {
            console.log(response);    
            var count = response.metadata.count;
            console.log(response.metadata.count);

            for(var i = 0; i < count; i++){ //for loop to go through the count-97
            var place = response.features[i].properties.place; //grabbed number of earthquakes,answer in console 97
            console.log(place);

        }






        }, //end of success
        
        error: 
        function (response) {
        console.log("error");        
        
        }



    }) //end of ajax
        initMap();

  

}); //end of document.ready function