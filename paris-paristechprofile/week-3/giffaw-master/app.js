var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";


// Get an api key: http://openweathermap.org/appid#get
var key = '3b7c977fb30580d17f123f223204e5a7';

$(`form`).on(`submit`, function(e){
	e.preventDefault();

	let cityName = $(`#city`).val();

	$.ajax({//passing through settings below
		method: "GET".
		url: weatherUrl + cityName + "&appid=" + key,
		success: function( data ){
			console.log(data);
		
		let temp = data.main.temp

			debugger;
		},
		error: function(error);
		console.log(eroor)
		}
	})
});
//steps to 
