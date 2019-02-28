 /*make all code inside $(document).on....)*/
 $(document).on("ready", function(){

});
 /*
$.ajax({

	// What kind of request
	method: "GET",

	// The URL for the request
	url: "http://api.api.com/search",

	// The data to send aka query parameters
	data: $("form").serialize(),

	// Code to run if the request succeeds;
	// the response is passed to the function
	success: onSuccess,

	// Code to run if the request fails; the raw request and
	// status codes are passed to the function
	error: onError
});

function onSuccess(json) {
	$("div").append("<h1>"+json.title+"</h1>");
}

function onError(xhr, status, errorThrown) {
	alert("Sorry, there was a problem!");
	console.log("Error: " + errorThrown);
	console.log("Status: " + status);
	console.dir(xhr); 

} */

 var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");

			xhr.done(function(data) { console.log("success got data", data); });

var key = 'NDP2woam3ov8U1XAtEiILWp1icuhmtUd';


$('form').on('submit', function(e) {
	e.preventDefault();

	/* let cityName = $('#city').val(); */

	$.ajax({
		method: GET/v1/gifs/search
		url: ("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5")
		
		success: function(data) /* a place holder arguement data/response)*/ {
		console.log(data);
		
		/* let temp = data.main.temp; */

		/* $('#temp') */

		debugger;
		},
		error: function(error) {
			console.log(error)
		}

	})

}









