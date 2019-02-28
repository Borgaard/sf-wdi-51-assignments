// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
});
                  
$.ajax({
	method: `GET`,
	url: weekly_quakes_endpoint,
	success: function(response){
		
		var map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: -34.397, lng: 150.644},
			zoom: 2
		});
		
		for(i=0; i < response.features.length; i++){
			var title = response.features[i].properties.title;
			$(`#info`).append(`<p>${title}</p>`);
		var coordinates = {lat: response.features[i].geometry.coordinates[1], lng: response.features[i].geometry.coordinates[0]};
		var marker = new google.maps.Marker({position: coordinates, map: map});
		}
		console.log('works there');
		$(`#map`).append(map);
	}
});;



/*let coordinates = 
	response.features.geometry.coordinates.forEach(coordinate =>{

	}*/