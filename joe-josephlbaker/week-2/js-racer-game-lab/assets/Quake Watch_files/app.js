// define globals
var weekly_quakes_endpoint = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
$(document).ready(function() {
  let info = $('#info');
  $.ajax({
    method: 'GET',
    url: weekly_quakes_endpoint,
    success: function(response) {
      for (let i = 0; i < response.features.length; i++) {

        let mag = response.features[i].properties.mag;
        let place = response.features[i].properties.place;
        let time = Date.now() - response.features[i].properties.time;

        var h = new Date(time).getHours();
        var m = new Date(time).getMinutes();

        h = (h<10) ? '0' + h : h;
        m = (m<10) ? '0' + m : m;

        var output = h + ' hours and ' + m + ' minutes ago';

        info.append(`<p>M ${mag} - ${place} / ${output}</p>`);
      }
    }
  })
});



//go into features array > grab each index's properties key value pair > inside of that "mag", "place", and 'time'
// for (let i = 0; i < response.features.length; i++) {
//   let mag = response.features[i].properties.mag;
//   let place = response.features[i].properties.place;
//   let time = response.features[i].properties.time;
// }
