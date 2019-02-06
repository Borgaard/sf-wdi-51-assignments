var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";

var key = '8709ae7a08bda461bc72d55f57821c7a';


$('form').on('submit', function(e) {
  e.preventDefault();

  let cityName = $('#city').val();

  $.ajax({
    method:'GET',
    url: weatherUrl + cityName + '&units=imperial&appid=' + key,
    success: function( data){
      debugger;
      console.log(data);//data was an object
      let temp = data.main.temp;
      $('#temp').text(temp);


    }
  })
});



  // $.ajax({
  //     method: 'GET',
  //     url: googleBooksUrl + isbn,
  //     success: bookSuccess,
  //     error: bookError
  // });
