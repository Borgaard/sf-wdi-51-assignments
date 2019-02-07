//[x]get data about earth quarks from USGS earthquakes API
//[x]use template literals aka back-tick style of concatinating
//[] use google api to grab a map
//[] use pinpoints to stick on map
// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {

  console.log("Let's get coding!");
  // CODE IN HERE!
  // var map;
  // function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.773972, lng: -122.431297},
      zoom: 2
    });
  // }


  $.ajax({
    method: 'GET',
    url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson",
    // url: 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02',
    success: function(data){
      console.log(data);
      // debugger;
      // data.features[idx].properties.title
      // how to iterate through an object to get the keys
      // initMap();

      // data mapping w/ function key word starts
      data.features.map(function(index){


//Time portion starts
        var myTimeMs = index.properties.time
        console.log(myTimeMs)
        // debugger;
        var myTimeHr = Math.floor(parseInt((myTimeMs/3600000)));
        console.log(myTimeHr);
        // debugger;
        // $("p").append(Math.floor(myTimeHr))
//Time Portion ends

// Title Portion starts
        let myTitle = `<p>${index.properties.title +" " + myTimeHr + " hours ago."}</p>`;
        $('#info').append(myTitle)
//Title Portion ends




        var lata = index.geometry.coordinates[0];
        var long = index.geometry.coordinates[1];
        console.log(lata, long)
            // var myLatLng = {lat: lata, lng: long};

//I had to resize the image
        var myimage = {
          url: 'images/earthquake.png',
          scaledSize: new google.maps.Size(30, 30),
          origin: new google.maps.Point(0,0), // origin
          anchor: new google.maps.Point(0, 0)
        };
//variable set up and new map creation
        var myNewMap = new google.maps.LatLng(lata, long);

//variable set up and marker pinning
        var houseMarker = new google.maps.Marker({
          position: myNewMap,
          map: map,
          icon: myimage,
          // title: "Hello World"
        });
      });

      // data mapping w/ function key word ends


//data mapping w/ arrow function starts
      // data.features.map((index) => {
      //   let myTitle = index.properties.title;
      //   $('#info').append(myTitle);
      //   // console.log(index.properties.title);
      // })
//data mapping w/ arrow function ends


// for looping starts
// for  (var i = 0; i < data.features.length; i++){
//   var titles = data.features[i].properties.titles;
//   $("#info").append(`<p>${titles}</p>`)
// }
// for looping stops

    }

  })

// $.ajax({
//     method: 'GET',
//     url:
// })


  } );






