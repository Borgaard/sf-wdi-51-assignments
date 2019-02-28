// define globals
// already collects this week's quakes over mag 4.5
var weekly_quakes_endpoint = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';
var monthly_quakes_endpoint = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson';

$(document).ready(function() {
  // console.log("Let's get coding!");
  // CODE IN HERE!
  // Add a month button.
  $('h1').append(`<p><button class="monthly">See this past month.</button></p>`);

  // AJAX request to get weekly quakes data
  $.ajax({
    method: 'GET',
    url: weekly_quakes_endpoint,
    success: quakeSuccess,
    error: quakeError,
  });

  function quakeSuccess (response) {
    // Create an array containing the AJAX results
    let quakeResults = response.features;

    // for loop to iterate through the array
    for (var i = 0; i < quakeResults.length; i++) {
      // Define variable grabbing coordinates & variable to put coordinates in proper format for Google API
      let coords = quakeResults[i].geometry.coordinates;
      let latLng = new google.maps.LatLng(coords[1],coords[0]);

      // Creating markers for each quake
      let marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: '',
          fillOpacity: 1,
          scale: 5,
          strokeWeight: 1,
        },
      })

      // Define variable for magnitude
      let magnitude = quakeResults[i].properties.mag;
      // Changing marker icon fill color based on magnitude
      if (magnitude < 5.0) {
        // Make a yellow marker
        marker.icon.fillColor = 'yellow';
      } else if (magnitude < 6.0) {
        // Make an orange marker
        marker.icon.fillColor = 'orange';
      } else {
        // Make a red marker
        marker.icon.fillColor = 'red';
      };

      // Sets marker on the map
      /*
      let marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: {
          // Uses the earthquake.png picture as the marker
          // url: 'https://maps.google.com/mapfiles/kml/shapes/earthquake.png',
          // url: '..images/earthquake.png',
          // scaledSize: new google.maps.Size(25, 25),
        },
      });
      */

      // Calculate how long ago the quake occurred and convert Unix time to hours ago
      // Grabs each result's time in Unix seconds and convert to string
      let timeStamp = quakeResults[i].properties.time.toString();
      // Take off last 3 digits of the unix time
      let editedTime = timeStamp.substr(0, 10)
      // Create a new JS Date object and multiply result's time by 1000 so it's in milliseconds
      let normalTime = new Date(editedTime * 1000);

      // Create today's date
      let today = new Date();

      // Calculate difference in time
      let timeDiff = today - normalTime;
      // Convert to hours difference
      let hourDiff = Math.floor(timeDiff / 1000 / 60 / 60);

      // Defining variable for title of each item
      let quakeTitle = quakeResults[i].properties.title;
      // Trimming title to get just the city
      // Add a number (3) to move the index past what you're looking for
      let shortTitle = quakeTitle.substr(quakeTitle.indexOf('of') + 3);

      // Append title and hours ago to div.info
      $('#info').append(`<p>${shortTitle} - ${hourDiff} hours ago</p>`);

      // Defining variable quakeTitle to be new paragraph of each item in the array's title
      /*
      let quakeTitle = `<p>${quakeResults[i].properties.title}</p><p>${hourDiff} hours ago</p>`;
      // console.log(quakeTitle);
      // Append each quakeTitle to div.info
      $('#info').append(quakeTitle);
      */
    };
  };

  function quakeError (error) {
    console.log(error);
  };

  // Google Maps API code
  // Define variable for a city's long/lat
  let sanFran = {lat: 37.78, lng: -122.44};
  // Inserts a map on the page in div#map
  let map = new google.maps.Map(document.getElementById('map'), {
    // centered on SF
    center: sanFran,
    zoom: 2,
  });

  // Event function for month button
  $('h1').on('click', 'button', function (event) {
    event.preventDefault();

    // Clear the week data by selecting all p siblings of h1
    $('h1 ~ p').remove();

    // new AJAX request to get month data
    $.ajax({
      method: 'GET',
      url: monthly_quakes_endpoint,
      success: quakeSuccess,
      error: quakeError,
    });
  });

});
