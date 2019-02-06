// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");

  var key = "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg";



  $.ajax({
      method: "GET",
      url: weekly_quakes_endpoint,
      success: function (data) {
        console.log(data);
        console.log(data.features[0].properties.title);
        console.log(data.features[0].geometry.coordinates);
        console.log(data.features[0].properties.time);
        console.log(data.features[0].properties.title, data.features[1].properties.title);

        for (i in data.features) {
          var a = '<p>' + data.features[i].properties.title + '</p>'
          $('#info').append(a);

        }
    var myarray= [];

    function initMap() {
          for ( i in data.features) {

              var myLatlng= {lat: data.features[i].geometry.coordinates[1], lng: data.features[i].geometry.coordinates[0] };
              myarray.push(myLatlng);
          }



          var image = "images/earthquake.png";


          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: {lat: 14.7628, lng:-92.2981 }
          });

          //creates marker
          for (i in myarray) {
            var marker = new google.maps.Marker({
            position: myarray[i],
            map: map,
            icon: {
              url:image,
              scaledSize: new google.maps.Size(30, 30)
                }


          });
          }

        }


      function diff_hours(dt2, dt1)
           {

            var diff =(dt2.getTime() - dt1.getTime()) / 1000;
            diff /= (60 * 60);
            return Math.abs(Math.round(diff));

           };

          dt1 = new Date(1549290828810);
          dt2 = new Date(Date.now());
          console.log(diff_hours(dt1, dt2));











      initMap();

      }

  })


});
