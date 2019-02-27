/*Part 1. Rendering Data
-Data structure: HTTP/REST
-Lists 1 earthquake 

-having difficulty with map
*/

var quakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
	zoom: 3
  };

  $.ajax({
	method: 'GET',
	url: quakes,
	success: function(response) {
		console.log(success);
		var title = response.metadata.title;
		console.log(response.metadata.title);

		var coordinates = response.features[i].geometry.coordinates
			console.log(coordinates);
		var time = response.features.properties.time
			console.log(time);
	}
	error: function() {
		alert("There was an error getting data");
	},

	map: map,
          title: data.features[i].properties.title,
          icon: {
            url: "images/earthquake.png",
            scaledSize: {height: 40, width: 40}



  });

});
 










//worked with Siri
// define globals


//var quakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

/*$(document).ready(function() {
  console.log("Let's get coding!");
 
     function initMap() {
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

			var coordinates =response.features[i].geometry.coordinates
			console.log(coordinates);

			var coords = new google.maps.coords(coordinates[1], coordinates[0]);
			var marker = new google.maps.marker({
			// position:	

			})

		}

}, //end of success
		
		error: 
		function (response) {
		console.log("error");		
		
		}
}) //end of ajax
		initMap();

  }); //end of document.ready function */







