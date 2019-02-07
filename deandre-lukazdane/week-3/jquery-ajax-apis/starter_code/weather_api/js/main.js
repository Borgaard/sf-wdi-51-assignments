var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";

var key = '48af1768fd332ec19b23236335136799';

$('form').on('submit', function(e) {
  e.preventDefault();

let cityName = $("#city").val();

  $.ajax({
      method: 'GET',
      url: weatherUrl + cityName + "&units=metric&appid=" + key,
      success: function(itsRainingMen) {
      	console.log(itsRainingMen);
   
   		let temp = itsRainingMen.main.temp;

   		$('#temp').text(temp);

   	},
      error: function(error) {
      	condsole.log(error)
      }
  })
});