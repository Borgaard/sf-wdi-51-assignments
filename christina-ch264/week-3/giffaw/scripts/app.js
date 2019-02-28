/*
[] A user can see the top 25 gifs (on page load)
[] A user can search for gifs, using the input field
[] Super Bonus: A user can "load more" gifs

we need the
[x] URL: api.giphy.com
[x] Path: GET /v1/gifs/search
[x] API key: Gf2zWMUcvwe2Ot0FzFTFeG2BddE9xTrF
[x] Request parameters: q: 'cat'; limit: 25;

put all of the above together:

[] var apiURL = "http://api.giphy.com/v1/gifs/search?";
[] var apiKey = '&api_key=Gf2zWMUcvwe2Ot0FzFTFeG2BddE9xTrF';
[] var query = "&q=cat";

"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5";
*/



var giffyUrl = "https://api.giphy.com/v1/gifs/search?";
//
var key = 'Gf2zWMUcvwe2Ot0FzFTFeG2BddE9xTrF';

console.log("1");
$(document).ready(function() {
  $('form').on('submit', function(e){
    e.preventDefault();
    console.log("2");
    // get value of city input and store it in a variable
    // var giffyName = $('#q').val();
    var giffyName = $('.gif-input').val();


    // access ajax method
    $.ajax({
           method: 'GET',
           // combine url with other information + your key. look at documentation what is included, appid in this case
           // you can pass in unit to &appid,
           // limit is default 25;
           url: giffyUrl + "q=" + giffyName + "&api_key=" + key,
           // first test: log to consol to see response, the function has a placeholder argument that will always represent the response
           success: function(data){
            console.log(data);
            // then click on main in the object in the console.log
            // debugger;

            let giffy = data.data[0].images.downsized_large.url;
            let giffyList = `
                              <img src="${giffy}">
                              `

            $('.gif-gallery').append(giffyList);

           },

           error: function(error) {
            console.log(error);
           }
        })
  });

})

console.log("3");


/*====================
search endpoint



*/
