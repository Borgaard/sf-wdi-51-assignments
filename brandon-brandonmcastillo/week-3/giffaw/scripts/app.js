$(document).ready(function() {
    console.log("hey");
    // Website URL Key Variable
    var website = 'https://api.giphy.com/v1/gifs/search?q=';
    // Your API Key Variable
    var api_key = "Wnie8mwuHu91k4SzgDpUG6dKeEBxMdIQ";

    // Form Click with prevent default
    $('form').on('submit', function(e) {
        e.preventDefault();


        // Saves Text Input as a value
        var q = $('.gif-input').val();

        // GET REQUEST
        $.ajax({
            method: 'GET',
            url: website + q + "&api_key=" + api_key,
            // success function
            success: function(res) {
                console.log(res);
                res.data.map(index => {
                    let thegif = `<img src= "${index.images.downsized.url}">`
                    $('.gif-gallery').append(thegif);
                });
            }
        });
    });


});
// FUNCTION SUCCESS

// FUNCTION ERROR