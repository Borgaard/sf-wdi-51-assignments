$(document).ready(function () {

    $('form').on('submit', function(e) {

        e.preventDefault();

        let url = "https://api.giphy.com/v1/gifs/search?q="
        let key = "&api_key=dc6zaTOxFJmzC&limit=5"
        let searchTerm = $('.gif-input').val();
        let xhr = $.get(url + searchTerm + key);

        xhr.done(function(data) {
            console.log("success got data", data);
            for (i=0;i<data.data.length;i++) {
            $('.gif-gallery').append(`<li><p>${data.data[i].title}</p><img src=${data.data[i].images.fixed_width.url}></li>`)
            }
        });


    })



});

