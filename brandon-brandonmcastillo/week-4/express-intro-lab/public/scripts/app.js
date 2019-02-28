// jshint esversion:6
console.log("Sanity Check: JS is working!");

$(document).ready(() => {

    const handleSuccess = (json) => {
        console.log(json);
        json.forEach(x => $('.albums').append(`<li>${x.title}</li>`));
    };

    const handleResponse = (json) => {
        console.log(json);
        json.forEach(x => $('.tacos').append(`<li>${x.name}</li>`));
    };

    $.ajax({
        method: 'GET',
        url: '/api/albums',
        success: handleSuccess

    });



    $.ajax({
        method: 'GET',
        url: '/api/taquerias',
        success: handleResponse
    });




});