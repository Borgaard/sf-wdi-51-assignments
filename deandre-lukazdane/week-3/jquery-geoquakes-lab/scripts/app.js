// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var mapsApi = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!

  $.ajax({
    method: "GET",
    url: weekly_quakes_endpoint,
    success: onSuccess,
    error: onError
  });
})

function onSuccess(data) {
	console.log(data);
	for (let i = 0; i < data.features.length; i++) {
	let title = data.features[i].properties.title;
	let mag = data.features[i].properties.mag;
	let place = data.features[i].properties.place;
	//let time = data.features.properties.time;
	let info = '<p>' + mag + ' - ' + place+ '</p>'
	$('#info').append(info);
    let lat = data.features[i].geometry.coordinates[0];
    let lng = data.features[i].geometry.coordinates[1];
               // console.log(lat);
     let marker = new google.maps.Marker({
                 position: {lat:{lat},lng:{lng}},
     map: map});
              
function onError(xhr, status, errorThrown) {
  alert("Sorry, there was a problem!");
  console.log("Error: " + errorThrown);
  console.log("Status: " + status);
  console.dir(xhr);
}
function initMap()[ 
MAO+NEW_OMAGES.MAPS,]
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 37.78, lng: -122.44},

  zoom: 8
});;
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {