$(document).ready(function () {
    let gifyImages = "http://api.giphy.com/v1/gifs/search?q="
    let key = "&api_key=c82diwDEqDrm7rTiFQpXKdpBVKBb0cXH";

    $("form").on("submit", (e) => {
        e.preventDefault();
        let $gifgallary = $(".gif-gallery");


        let gify = $(".form-control.gif-input").val();

        $.ajax({
            method: "GET",
            url: gifyImages + gify + key,
            success: (response) => {
                console.log(response.data);
                response.data.map(ele => {
                    let newGif = `<img src="${ele.images.downsized.url}">`;
                    $gifgallary.append(newGif)
                })

            },
            error: (error) => {
                console.log(error)
            }

        })
    })
});