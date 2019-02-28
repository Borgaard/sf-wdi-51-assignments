$(document).ready(function() {
    // Website URL 
    let website = 'https://api.giphy.com/v1/gifs/search?q=';
    // API Key Variable
    let api_key = "dqoZNg4IAlYPqFhcaodRs9dzQOiE0YCe";
 
    // Form Click with prevent default
    $('form').on('submit', function(e) {
        e.preventDefault();
        // Saves Text Input as a value
        var q = $('.gif-input').val();
        // GET REQUEST
        $.ajax({
            method: 'GET',
            url: website + q + "&api_key=" + api_key,
            // onSuccess function
            success: function(res) {
                console.log(res);
                res.data.map(index => {
                    let gif = `<img src= "${index.images.downsized.url}">`
                    $('.gif-gallery').append(gif);
                });
            }
        });
    });
 
 });
