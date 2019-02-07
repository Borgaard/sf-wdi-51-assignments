// define globals
const weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(()=> {
  console.log("Let's get coding!");
  // CODE IN HERE!
  const apiKey = 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg';
  const icon = {
        url: "images/earthquake.png", // url
        scaledSize: new google.maps.Size(30, 30), // size
    };

  // Initial Ajax Call
  $.ajax({
    method: 'GET',
    url: weekly_quakes_endpoint,
    success: (res) =>{
        let map;
        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            zoom: 5,
            center: {lat: res.features[0].geometry.coordinates[1], lng: res.features[0].geometry.coordinates[0]}
          });
        };

         initMap();

        let marker = new google.maps.Marker({
            position: {lat: res.features[0].geometry.coordinates[1], lng: res.features[0].geometry.coordinates[0]},
            map: map,
            title: 'Hello World!',
            icon: icon
          });

        res.features.map(index => {
        // Appends To New Quake Data To DOM
        let newQuake = `<p>${index.properties.title}, ${index.properties.time}</p>`
        $('#info').append(newQuake);

        // Adds Map and Markers

        let newLocation = {lat: index.geometry.coordinates[1], lng: index.geometry.coordinates[0]};
          console.log(newLocation);

          marker.setMap(map);
      })
    },
    error: error => console.log(error)
  })
});
