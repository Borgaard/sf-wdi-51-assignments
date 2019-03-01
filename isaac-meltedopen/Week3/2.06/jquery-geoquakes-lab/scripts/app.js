var weekly_quakes_endpoint = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");

function secondsToDhms(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600*24));
  var h = Math.floor(seconds % (3600*24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 3600 % 60);

  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return '- ' + dDisplay + hDisplay + mDisplay + sDisplay + ' ago';
}

var resizedIcon = {
  url: 'images/earthquake.png',
  scaledSize: new google.maps.Size(20, 20)
};

function initMap() {
  let sanFrancisco = {lat: 37.78, lng: -122.44};
    map = new google.maps.Map(document.getElementById('map'), {
      center: sanFrancisco,
      zoom: 3.5
  });
  let marker = new google.maps.Marker({
    position: sanFrancisco,
    icon: resizedIcon,
    map: map
  });
}
initMap();

  $.ajax({
    url: weekly_quakes_endpoint,
    success: function(resp) {
      console.log(resp.features);
        $.each(resp.features, function(idx) {

          let unixTime = Date.now();
          let quakeTime = secondsToDhms(unixTime - (resp.features[idx].properties.time));
          console.log(quakeTime);

          $('#info').append (
            `<p>${resp.features[idx].properties.title} ${quakeTime}</p>`
          )

          let quakeCoordinates = {
            lat: resp.features[idx].geometry.coordinates[1],
            lng: resp.features[idx].geometry.coordinates[0],
          };

          let quakeMarker = new google.maps.Marker({
            position: quakeCoordinates,
            map: map,
            icon: resizedIcon
          });
        })
    }
  });
});
