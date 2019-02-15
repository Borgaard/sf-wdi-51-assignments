// import { Book } from "../../models";

console.log("Sanity Check: JS is working!");

let $book_list;
let allBooks = [];

$(document).ready(function(){

    // your code
    $book_list = $('#listview');

    $.ajax({
        method: 'GET',
        url: '/api/book',
        success: handleSuccess,
        error: handleError
    });

    function handleSuccess(json) {
        for (i = 0; i < json.length; i++) {
            $('#listview').append( `<li> Book: ${json[i].title}</li>`);
        }
    }

    function handleError(e) {
        console.log('something went wrong');
        $('#listview').text('Failed to load books, is the server working?');
    };

    $('#newBookForm').on('submit', function(e) {
        e.preventDefault();
        console.log('something worked, keep debugging', $(this).serializeArray());
        $.ajax({
            method: 'POST',
            url: '/api/book',
            // data: $(this).serializeArray(),
            success: newBookSuccess,
            error: newBookError
        });
    });
    function newBookSuccess(json) {
        $('#newBook').append( `<li> Book: ${json.newBook}</li>`);
    }

    function newBookError(json) {
        console.log('error occured');
    }
});




